// Tab-audio capture + energy VAD segmentation.
//
// The captured MediaStream (tab audio the user explicitly shared) is fed
// through an AudioContext graph. A ScriptProcessor taps the samples; an
// adaptive energy VAD groups them into utterances: speech followed by
// ~700ms of silence closes a segment, segments shorter than 1.5s are
// dropped, and anything still going at 8s is hard-cut. Closed segments are
// resampled to 16kHz mono Float32 — exactly what Whisper consumes.
//
// Video times come from the caller-supplied getVideoTime() sampled at the
// moment speech starts/ends, so captions can seek the player accurately.

export interface AudioSegment {
  /** 16kHz mono samples ready for Whisper. */
  audio: Float32Array;
  /** Video time (s) when the speech in this segment started. */
  tStart: number;
  /** Video time (s) when the speech in this segment ended. */
  tEnd: number;
  /** Wall-clock time (ms) when the segment closed — latency baseline. */
  closedAt: number;
}

export interface SegmenterCallbacks {
  onSegment: (segment: AudioSegment) => void;
  /** The user stopped sharing the tab (track ended). */
  onShareEnded: () => void;
}

const SILENCE_CLOSE_MS = 700;
const MIN_SEGMENT_MS = 1500;
const MAX_SEGMENT_MS = 8000;
const PRE_ROLL_BLOCKS = 3; // ~256ms of context before speech onset

function concatBlocks(blocks: Float32Array[]): Float32Array {
  const total = blocks.reduce((n, b) => n + b.length, 0);
  const out = new Float32Array(total);
  let offset = 0;
  for (const b of blocks) {
    out.set(b, offset);
    offset += b.length;
  }
  return out;
}

async function resampleTo16k(samples: Float32Array, fromRate: number): Promise<Float32Array> {
  if (fromRate === 16000) return samples;
  const targetLength = Math.max(1, Math.round((samples.length * 16000) / fromRate));
  const offline = new OfflineAudioContext(1, targetLength, 16000);
  const buffer = offline.createBuffer(1, samples.length, fromRate);
  buffer.copyToChannel(samples, 0);
  const source = offline.createBufferSource();
  source.buffer = buffer;
  source.connect(offline.destination);
  source.start();
  const rendered = await offline.startRendering();
  return rendered.getChannelData(0).slice();
}

export class TabAudioSegmenter {
  private ctx: AudioContext | null = null;
  private processor: ScriptProcessorNode | null = null;
  private sourceNode: MediaStreamAudioSourceNode | null = null;
  private stream: MediaStream | null = null;
  private stopped = true;

  // VAD state
  private noiseFloor = 0.004;
  private speaking = false;
  private silenceMs = 0;
  private segmentBlocks: Float32Array[] = [];
  private preRoll: Float32Array[] = [];
  private segmentStartVideo = 0;
  private segmentMs = 0;

  constructor(
    private readonly getVideoTime: () => number,
    private readonly callbacks: SegmenterCallbacks,
  ) {}

  start(stream: MediaStream): void {
    this.stop();
    this.stopped = false;
    this.stream = stream;

    const track = stream.getAudioTracks()[0];
    if (track) {
      track.addEventListener("ended", () => {
        if (!this.stopped) this.callbacks.onShareEnded();
      });
    }

    const ctx = new AudioContext();
    this.ctx = ctx;
    this.sourceNode = ctx.createMediaStreamSource(stream);
    // 4096-sample blocks ≈ 85ms at 48kHz — fine granularity for 700ms VAD.
    this.processor = ctx.createScriptProcessor(4096, 1, 1);
    // Route through a muted gain so captured audio is never played back.
    const mute = ctx.createGain();
    mute.gain.value = 0;
    this.sourceNode.connect(this.processor);
    this.processor.connect(mute);
    mute.connect(ctx.destination);
    this.processor.onaudioprocess = (event) => {
      const input = event.inputBuffer.getChannelData(0);
      this.handleBlock(new Float32Array(input));
    };
    void ctx.resume().catch(() => undefined);
  }

  private handleBlock(block: Float32Array): void {
    if (!this.ctx || this.stopped) return;
    const blockMs = (block.length / this.ctx.sampleRate) * 1000;

    let sum = 0;
    for (let i = 0; i < block.length; i++) sum += block[i] * block[i];
    const rms = Math.sqrt(sum / block.length);

    if (!this.speaking) {
      // Adapt the noise floor while idle so the threshold follows the
      // video's volume instead of a magic constant.
      this.noiseFloor = this.noiseFloor * 0.95 + rms * 0.05;
    }
    const threshold = Math.min(0.06, Math.max(0.008, this.noiseFloor * 4));
    const isSpeech = rms > threshold;

    if (!this.speaking) {
      if (isSpeech) {
        this.speaking = true;
        this.silenceMs = 0;
        this.segmentBlocks = [...this.preRoll, block];
        this.segmentMs = (this.preRoll.length + 1) * blockMs;
        this.segmentStartVideo = Math.max(0, this.getVideoTime() - 0.25);
        this.preRoll = [];
      } else {
        this.preRoll.push(block);
        if (this.preRoll.length > PRE_ROLL_BLOCKS) this.preRoll.shift();
      }
      return;
    }

    this.segmentBlocks.push(block);
    this.segmentMs += blockMs;
    if (isSpeech) {
      this.silenceMs = 0;
    } else {
      this.silenceMs += blockMs;
    }

    if (this.silenceMs >= SILENCE_CLOSE_MS || this.segmentMs >= MAX_SEGMENT_MS) {
      this.closeSegment();
    }
  }

  private closeSegment(): void {
    const blocks = this.segmentBlocks;
    const durationMs = this.segmentMs;
    const tStart = this.segmentStartVideo;
    this.speaking = false;
    this.silenceMs = 0;
    this.segmentBlocks = [];
    this.segmentMs = 0;
    this.preRoll = [];

    if (durationMs < MIN_SEGMENT_MS || blocks.length === 0 || !this.ctx) return;
    const sampleRate = this.ctx.sampleRate;
    const raw = concatBlocks(blocks);
    const tEnd = tStart + durationMs / 1000;
    void resampleTo16k(raw, sampleRate)
      .then((audio) => {
        if (this.stopped) return;
        this.callbacks.onSegment({
          audio,
          tStart,
          tEnd,
          closedAt: performance.now(),
        });
      })
      .catch(() => undefined);
  }

  stop(): void {
    this.stopped = true;
    try {
      if (this.processor) this.processor.onaudioprocess = null;
      this.processor?.disconnect();
      this.sourceNode?.disconnect();
      if (this.ctx && this.ctx.state !== "closed") void this.ctx.close().catch(() => undefined);
      this.stream?.getTracks().forEach((t) => t.stop());
    } catch {
      // Teardown is best-effort; every step is idempotent.
    }
    this.processor = null;
    this.sourceNode = null;
    this.ctx = null;
    this.stream = null;
    this.speaking = false;
    this.segmentBlocks = [];
    this.preRoll = [];
  }
}
