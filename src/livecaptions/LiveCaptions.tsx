// "Phụ đề Việt trực tiếp" — live Vietnamese captions, 100% in the browser.
//
// Flow: the user shares this tab's audio (getDisplayMedia) -> an energy VAD
// cuts the audio into utterances -> a Web Worker runs Whisper on-device
// (WebGPU, WASM fallback) -> each English segment is translated to
// Vietnamese (Chrome Translator API on-device, Google Translate as an
// online fallback) -> captions render under the player with a seekable,
// savable live transcript.
//
// This component is loaded lazily (React.lazy in App.tsx) and the worker +
// model only spin up after the user explicitly enables the feature, so
// nothing here costs first paint.

import { useEffect, useRef, useState } from "react";
import { TabAudioSegmenter, type AudioSegment } from "./audio";
import { createTranslatorService, type TranslatorService } from "./translate";
import {
  ASR_MODEL_LABEL,
  ASR_MODELS,
  type AsrDevice,
  type AsrModelChoice,
  type AsrModelId,
  type AsrWorkerOutbound,
  type CaptionSegment,
  type DisplayMediaConstraintsExt,
  type TranslationEngine,
} from "./types";

type Phase =
  | "idle"
  | "checking"
  | "loading-model"
  | "preparing-translator"
  | "awaiting-share"
  | "listening"
  | "error";

const MODEL_STORAGE_KEY = "ciu-asr-model";

const PHASE_ORDER: Record<Phase, number> = {
  idle: -1,
  checking: 0,
  "loading-model": 1,
  "preparing-translator": 2,
  "awaiting-share": 3,
  listening: 4,
  error: 99,
};

function fmtTime(sec: number): string {
  const total = Math.max(0, Math.floor(sec));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function isSupported(): boolean {
  return (
    typeof navigator !== "undefined" &&
    typeof navigator.mediaDevices?.getDisplayMedia === "function"
  );
}

function loadModelChoice(): AsrModelChoice {
  try {
    return localStorage.getItem(MODEL_STORAGE_KEY) === "base"
      ? "base"
      : "small";
  } catch {
    return "small";
  }
}

export default function LiveCaptions(props: {
  itemKey: string;
  getVideoTime: () => number;
  onSeek: (sec: number) => void;
  onSaveTranscript: (text: string) => void;
}) {
  const supported = isSupported();
  const [phase, setPhase] = useState<Phase>("idle");
  const [modelChoice, setModelChoice] = useState<AsrModelChoice>(loadModelChoice);
  const [modelProgress, setModelProgress] = useState<number | null>(null);
  const [translatorProgress, setTranslatorProgress] = useState<number | null>(null);
  const [activeModel, setActiveModel] = useState<{ model: AsrModelId; device: AsrDevice } | null>(null);
  const [fallbackNote, setFallbackNote] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [notice, setNotice] = useState<string | null>(null);
  const [segments, setSegments] = useState<CaptionSegment[]>([]);
  const [lastLatencyMs, setLastLatencyMs] = useState<number | null>(null);
  const [translateEngine, setTranslateEngine] = useState<TranslationEngine>("none");
  const [savedFlag, setSavedFlag] = useState(false);

  const workerRef = useRef<Worker | null>(null);
  const loadResolverRef = useRef<{
    resolve: () => void;
    reject: (error: Error) => void;
  } | null>(null);
  const transcribeResolversRef = useRef(new Map<number, { resolve: (text: string) => void; reject: (error: Error) => void }>());
  const segmenterRef = useRef<TabAudioSegmenter | null>(null);
  const translatorRef = useRef<TranslatorService | null>(null);
  const queueRef = useRef<AudioSegment[]>([]);
  const pumpingRef = useRef(false);
  const idRef = useRef(1);
  const phaseRef = useRef<Phase>("idle");
  const transcriptRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  phaseRef.current = phase;

  /* ------------------------------ worker ------------------------------ */

  const ensureWorker = (): Worker => {
    if (workerRef.current) return workerRef.current;
    const worker = new Worker(new URL("./asr-worker.ts", import.meta.url), {
      type: "module",
    });
    worker.onmessage = (event: MessageEvent<AsrWorkerOutbound>) => {
      const message = event.data;
      if (!message || typeof message !== "object") return;
      switch (message.type) {
        case "load-progress":
          if (mountedRef.current) setModelProgress(message.progress);
          break;
        case "ready":
          loadResolverRef.current?.resolve();
          loadResolverRef.current = null;
          break;
        case "load-error":
          loadResolverRef.current?.reject(new Error(message.message));
          loadResolverRef.current = null;
          break;
        case "result": {
          const pending = transcribeResolversRef.current.get(message.id);
          if (pending) {
            transcribeResolversRef.current.delete(message.id);
            pending.resolve(message.text);
          }
          break;
        }
        case "transcribe-error": {
          const pending = transcribeResolversRef.current.get(message.id);
          if (pending) {
            transcribeResolversRef.current.delete(message.id);
            pending.reject(new Error(message.message));
          }
          break;
        }
      }
    };
    worker.onerror = () => {
      loadResolverRef.current?.reject(
        new Error("Worker nhận dạng giọng nói bị lỗi."),
      );
      loadResolverRef.current = null;
    };
    workerRef.current = worker;
    return worker;
  };

  const loadModel = (model: AsrModelId, device: AsrDevice): Promise<void> => {
    const worker = ensureWorker();
    setModelProgress(null);
    return new Promise<void>((resolve, reject) => {
      loadResolverRef.current = { resolve, reject };
      worker.postMessage({ type: "load", model, device });
    });
  };

  const transcribe = (audio: Float32Array): Promise<string> => {
    const worker = ensureWorker();
    const id = idRef.current++;
    return new Promise<string>((resolve, reject) => {
      transcribeResolversRef.current.set(id, { resolve, reject });
      worker.postMessage({ type: "transcribe", id, audio }, [audio.buffer as ArrayBuffer]);
    });
  };

  /* --------------------------- segment pump ---------------------------- */

  const pumpQueue = async (): Promise<void> => {
    if (pumpingRef.current) return;
    pumpingRef.current = true;
    try {
      while (queueRef.current.length > 0) {
        const segment = queueRef.current.shift();
        if (!segment) break;
        try {
          const enRaw = await transcribe(segment.audio);
          const en = enRaw.trim();
          // Whisper emits bracketed markers for non-speech; drop pure noise.
          if (!en || /^[\s[\](){}♪.,!?-]*$/.test(en)) continue;
          let vi = en;
          let engine: TranslationEngine = "none";
          if (translatorRef.current) {
            const result = await translatorRef.current.translate(en);
            vi = result.text;
            engine = result.engine;
          }
          const caption: CaptionSegment = {
            id: idRef.current++,
            en,
            vi,
            engine,
            tStart: segment.tStart,
            tEnd: segment.tEnd,
            latencyMs: Math.max(0, performance.now() - segment.closedAt),
          };
          if (!mountedRef.current) return;
          setSegments((prev) => [...prev, caption]);
          setLastLatencyMs(caption.latencyMs);
          setTranslateEngine(engine);
        } catch {
          // A failed segment is skipped; the stream keeps going.
        }
      }
    } finally {
      pumpingRef.current = false;
    }
  };

  const enqueueSegment = (segment: AudioSegment): void => {
    queueRef.current.push(segment);
    void pumpQueue();
  };

  /* ------------------------------ setup -------------------------------- */

  const failWith = (message: string): void => {
    if (!mountedRef.current) return;
    setErrorMsg(message);
    setPhase("error");
  };

  const startSetup = async (): Promise<void> => {
    if (phaseRef.current !== "idle" && phaseRef.current !== "error") return;
    setErrorMsg("");
    setNotice(null);
    setFallbackNote(null);
    setPhase("checking");
    await new Promise((r) => setTimeout(r, 60));

    const hasWebGpu =
      typeof navigator !== "undefined" &&
      "gpu" in navigator &&
      (navigator as { gpu?: unknown }).gpu != null;

    const chosen = ASR_MODELS[modelChoice];
    const attempts: { model: AsrModelId; device: AsrDevice }[] = [];
    if (hasWebGpu) attempts.push({ model: chosen, device: "webgpu" });
    attempts.push({ model: ASR_MODELS.base, device: "wasm" });

    setPhase("loading-model");
    let loaded: { model: AsrModelId; device: AsrDevice } | null = null;
    let lastError = "";
    for (const attempt of attempts) {
      try {
        await loadModel(attempt.model, attempt.device);
        loaded = attempt;
        break;
      } catch (error) {
        lastError = error instanceof Error ? error.message : String(error);
      }
    }
    if (!mountedRef.current) return;
    if (!loaded) {
      failWith(
        `Không tải được model nhận dạng giọng nói (${lastError || "lỗi không rõ"}). ` +
          "Tính năng này cần Chrome/Edge trên máy tính, ưu tiên máy có WebGPU, và mạng để tải model lần đầu.",
      );
      return;
    }
    setActiveModel(loaded);
    if (loaded.device === "wasm") {
      setFallbackNote(
        hasWebGpu
          ? "WebGPU không dùng được cho model đã chọn — đang chạy Whisper Base trên CPU (WASM). Tốc độ và độ chính xác có thể giảm."
          : "Trình duyệt không có WebGPU — đang chạy Whisper Base trên CPU (WASM). Tốc độ và độ chính xác có thể giảm.",
      );
    } else if (loaded.model !== chosen) {
      setFallbackNote("Model đã chọn tải lỗi — đang chạy Whisper Base trên WebGPU.");
    }

    setPhase("preparing-translator");
    if (!translatorRef.current) {
      translatorRef.current = createTranslatorService();
    }
    try {
      await translatorRef.current.prepare((pct) => {
        if (mountedRef.current) setTranslatorProgress(pct);
      });
      if (mountedRef.current) setTranslateEngine(translatorRef.current.engine);
    } catch {
      // Translation is best-effort; per-segment fallback handles failures.
    }
    if (!mountedRef.current) return;
    setPhase("awaiting-share");
  };

  const requestShareAndListen = async (): Promise<void> => {
    let stream: MediaStream;
    const withHints: DisplayMediaConstraintsExt = {
      audio: true,
      video: true,
      preferCurrentTab: true,
      selfBrowserSurface: "include",
    };
    try {
      stream = await navigator.mediaDevices.getDisplayMedia(withHints);
    } catch (firstError) {
      // Older/other Chromium builds may reject the extra hints outright.
      try {
        stream = await navigator.mediaDevices.getDisplayMedia({
          audio: true,
          video: true,
        });
      } catch {
        failWith(
          firstError instanceof DOMException && firstError.name === "NotAllowedError"
            ? "Bạn đã hủy chia sẻ âm thanh. Bấm Thử lại và chọn tab này, nhớ bật “Share tab audio”."
            : "Không mở được hộp thoại chia sẻ âm thanh. Hãy dùng Chrome/Edge trên máy tính và thử lại.",
        );
        return;
      }
    }
    // Video track is only there because Chrome requires it in the request;
    // the feature is audio-only, so stop it immediately.
    stream.getVideoTracks().forEach((t) => t.stop());
    if (stream.getAudioTracks().length === 0) {
      stream.getTracks().forEach((t) => t.stop());
      failWith(
        "Chưa nhận được âm thanh — có thể bạn chưa bật “Share tab audio” khi chọn tab. Bấm Thử lại và kiểm tra ô này trong hộp thoại chia sẻ.",
      );
      return;
    }
    if (!mountedRef.current) {
      stream.getTracks().forEach((t) => t.stop());
      return;
    }
    const segmenter = new TabAudioSegmenter(props.getVideoTime, {
      onSegment: enqueueSegment,
      onShareEnded: () => stopListening("Bạn đã dừng chia sẻ âm thanh — phụ đề trực tiếp đã tắt."),
    });
    segmenterRef.current = segmenter;
    segmenter.start(stream);
    setPhase("listening");
  };

  const stopListening = (note?: string): void => {
    segmenterRef.current?.stop();
    segmenterRef.current = null;
    queueRef.current = [];
    if (!mountedRef.current) return;
    if (note) setNotice(note);
    setPhase("idle");
  };

  /* ------------------------------ effects ------------------------------ */

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      segmenterRef.current?.stop();
      segmenterRef.current = null;
      workerRef.current?.terminate();
      workerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.itemKey]);

  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [segments]);

  /* ------------------------------- save -------------------------------- */

  const saveTranscript = (): void => {
    if (segments.length === 0) return;
    const lines = segments.map((s) =>
      s.engine === "none"
        ? `[${fmtTime(s.tStart)}] ${s.en}`
        : `[${fmtTime(s.tStart)}] ${s.en}\nVI: ${s.vi}`,
    );
    props.onSaveTranscript(
      `Transcript phụ đề trực tiếp:\n${lines.join("\n")}`,
    );
    setSavedFlag(true);
    window.setTimeout(() => setSavedFlag(false), 2500);
  };

  /* ------------------------------- render ------------------------------ */

  if (!supported) {
    return (
      <div className="mt-3 rounded-xl bg-[var(--surface)] p-3 ring-1 ring-[var(--border)]">
        <p className="text-xs font-bold">Phụ đề Việt trực tiếp</p>
        <p className="mt-1 text-xs leading-relaxed text-[var(--dim)]">
          Tính năng này cần Chrome/Edge trên máy tính (để chia sẻ âm thanh của
          tab và chạy nhận dạng giọng nói ngay trong trình duyệt). Trên điện
          thoại, hãy dùng phụ đề tự dịch của chính YouTube: mở video → Cài đặt
          → Phụ đề → Dịch tự động → Tiếng Việt.
        </p>
      </div>
    );
  }

  const latest = segments.length > 0 ? segments[segments.length - 1] : null;
  const busy =
    phase === "checking" ||
    phase === "loading-model" ||
    phase === "preparing-translator";

  const privacyText =
    translateEngine === "google"
      ? "Nhận dạng giọng nói chạy ngay trên máy của bạn. Phần dịch đang qua Google Translate online — chỉ văn bản đã nhận dạng được gửi đi, không gửi âm thanh."
      : translateEngine === "none" && segments.length > 0
        ? "Nhận dạng giọng nói chạy ngay trên máy của bạn. Phần dịch chưa khả dụng nên đang hiện tiếng Anh."
        : "Âm thanh chỉ được xử lý ngay trên máy của bạn, không gửi lên server.";

  const stepState = (index: number): "done" | "active" | "todo" => {
    const current = PHASE_ORDER[phase];
    if (phase === "listening" || current > index) return "done";
    if (current === index) return "active";
    return "todo";
  };

  return (
    <div className="mt-3">
      {/* Live caption strip — always the first thing under the player. */}
      {phase === "listening" && (
        <div
          aria-live="polite"
          className="rounded-xl bg-black/85 px-3.5 py-2.5 text-white ring-1 ring-black/40"
        >
          {latest ? (
            <div key={latest.id} className="caption-fade">
              <p className="text-xs leading-snug text-white/55">{latest.en}</p>
              <p className="mt-0.5 text-base font-semibold leading-snug">
                {latest.vi}
              </p>
              {latest.engine === "none" && (
                <p className="mt-0.5 text-[11px] text-white/45">
                  Chưa dịch được — đang hiện tiếng Anh
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-white/70">
              Đang nghe… hãy phát video, phụ đề tiếng Việt sẽ hiện tại đây.
            </p>
          )}
        </div>
      )}

      {/* Idle: enable controls */}
      {phase === "idle" && (
        <div className="rounded-xl bg-[var(--surface)] p-3 ring-1 ring-[var(--border)]">
          {notice && (
            <p className="mb-2 text-xs font-medium text-[var(--dim)]">{notice}</p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => void startSetup()}
              className="rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-bold text-white"
            >
              Phụ đề Việt trực tiếp
            </button>
            <label className="flex items-center gap-1.5 text-xs text-[var(--dim)]">
              Model:
              <select
                value={modelChoice}
                onChange={(e) => {
                  const value = e.target.value === "base" ? "base" : "small";
                  setModelChoice(value);
                  try {
                    localStorage.setItem(MODEL_STORAGE_KEY, value);
                  } catch {
                    // Non-fatal: choice just won't persist.
                  }
                }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5 text-xs font-semibold text-[var(--text)] outline-none focus:border-[var(--accent)]"
                aria-label="Chọn model nhận dạng giọng nói"
              >
                <option value="small">Whisper Small — nghe accent tốt hơn</option>
                <option value="base">Whisper Base — nhẹ hơn</option>
              </select>
            </label>
            {segments.length > 0 && (
              <span className="text-xs text-[var(--dim)]">
                Đang giữ {segments.length} đoạn transcript bên dưới.
              </span>
            )}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-[var(--dim)]">
            {privacyText}
          </p>
        </div>
      )}

      {/* Setup sequence */}
      {(busy || phase === "awaiting-share") && (
        <div className="rounded-xl bg-[var(--surface)] p-3 ring-1 ring-[var(--border)]">
          <p className="text-xs font-bold">Đang chuẩn bị phụ đề trực tiếp</p>
          <ol className="mt-2 space-y-2">
            {[
              "Kiểm tra trình duyệt",
              `Tải model nhận dạng giọng nói (${ASR_MODEL_LABEL[modelChoice]})`,
              "Chuẩn bị bộ dịch Anh → Việt",
              "Chia sẻ âm thanh của tab",
            ].map((label, index) => {
              const state = stepState(index);
              return (
                <li key={label} className="flex items-start gap-2 text-xs">
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      state === "done"
                        ? "bg-[var(--done)] text-white"
                        : state === "active"
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[var(--surface-alt)] text-[var(--dim)]"
                    }`}
                  >
                    {state === "done" ? "✓" : index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={state === "todo" ? "text-[var(--dim)]" : "font-semibold"}>
                      {label}
                    </span>
                    {index === 1 && phase === "loading-model" && (
                      <span className="mt-1 block">
                        <span className="block h-1.5 overflow-hidden rounded-full bg-[var(--surface-alt)]">
                          <span
                            className="block h-full rounded-full bg-[var(--accent)] transition-all"
                            style={{ width: `${modelProgress ?? 4}%` }}
                          />
                        </span>
                        <span className="mt-0.5 block text-[11px] text-[var(--dim)]">
                          {modelProgress != null
                            ? `Đang tải… ${Math.round(modelProgress)}% — model được lưu cache cho các lần sau.`
                            : "Đang tải… model được lưu cache cho các lần sau."}
                        </span>
                      </span>
                    )}
                    {index === 2 && phase === "preparing-translator" && translatorProgress != null && (
                      <span className="mt-0.5 block text-[11px] text-[var(--dim)]">
                        Đang tải gói ngôn ngữ của Chrome… {translatorProgress}%
                      </span>
                    )}
                    {index === 3 && phase === "awaiting-share" && (
                      <span className="mt-1 block rounded-lg bg-[var(--bg)] p-2.5 leading-relaxed text-[var(--dim)] ring-1 ring-[var(--border)]">
                        Khi hộp thoại hiện ra: chọn đúng <strong>tab này</strong> và
                        bật ô <strong>“Share tab audio” (Chia sẻ âm thanh của tab)</strong> ở
                        góc dưới — không bật ô này thì sẽ không có tiếng để nhận dạng.
                        <button
                          type="button"
                          onClick={() => void requestShareAndListen()}
                          className="mt-2 block rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-bold text-white"
                        >
                          Mở hộp thoại chia sẻ âm thanh
                        </button>
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
          <button
            type="button"
            onClick={() => setPhase("idle")}
            className="mt-3 rounded-lg bg-[var(--surface-alt)] px-3 py-1.5 text-xs font-semibold"
          >
            Hủy
          </button>
        </div>
      )}

      {/* Error state */}
      {phase === "error" && (
        <div
          role="alert"
          className="rounded-xl bg-[var(--surface)] p-3 ring-1 ring-[var(--review)]"
        >
          <p className="text-xs font-bold text-[var(--review)]">
            Chưa bật được phụ đề trực tiếp
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[var(--dim)]">{errorMsg}</p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => void startSetup()}
              className="rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-bold text-white"
            >
              Thử lại
            </button>
            <button
              type="button"
              onClick={() => setPhase("idle")}
              className="rounded-lg bg-[var(--surface-alt)] px-3 py-2 text-xs font-semibold"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Listening status + transcript */}
      {(phase === "listening" || (phase === "idle" && segments.length > 0)) && (
        <div className="mt-2 rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-3 pt-2.5">
            {phase === "listening" && (
              <span className="flex items-center gap-1.5 text-xs font-bold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--done)]" />
                Đang nghe
              </span>
            )}
            <span className="text-[11px] text-[var(--dim)]">
              {activeModel
                ? `${ASR_MODEL_LABEL[activeModel.model === ASR_MODELS.small ? "small" : "base"]} · ${activeModel.device === "webgpu" ? "WebGPU" : "CPU (WASM)"}`
                : ""}
              {segments.length > 0 ? ` · ${segments.length} đoạn` : ""}
              {lastLatencyMs != null
                ? ` · trễ đoạn gần nhất ~${(lastLatencyMs / 1000).toFixed(1)}s`
                : ""}
              {translateEngine === "chrome"
                ? " · Dịch on-device (Chrome)"
                : translateEngine === "google"
                  ? " · Dịch qua Google Translate online"
                  : segments.length > 0
                    ? " · Chưa dịch được — đang hiện tiếng Anh"
                    : ""}
            </span>
            <span className="flex-1" />
            {phase === "listening" && (
              <button
                type="button"
                onClick={() => stopListening()}
                className="rounded-lg bg-[var(--surface-alt)] px-3 py-1.5 text-xs font-bold"
              >
                Dừng phụ đề
              </button>
            )}
          </div>
          {fallbackNote && phase === "listening" && (
            <p className="px-3 pt-1 text-[11px] leading-relaxed text-[var(--review)]">
              {fallbackNote}
            </p>
          )}
          <p className="px-3 pt-1 text-[11px] leading-relaxed text-[var(--dim)]">
            {privacyText}
          </p>

          <div className="flex flex-wrap items-center gap-2 px-3 pb-2 pt-2">
            <p className="text-xs font-bold">Transcript trực tiếp</p>
            <span className="flex-1" />
            <button
              type="button"
              onClick={saveTranscript}
              disabled={segments.length === 0}
              className="rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-bold text-white disabled:opacity-40"
            >
              {savedFlag ? "Đã lưu vào ghi chú ✓" : "Lưu transcript vào ghi chú"}
            </button>
            <button
              type="button"
              onClick={() => setSegments([])}
              disabled={segments.length === 0}
              className="rounded-lg bg-[var(--surface-alt)] px-3 py-1.5 text-xs font-semibold disabled:opacity-40"
            >
              Xóa transcript
            </button>
          </div>
          <div
            ref={transcriptRef}
            className="max-h-56 space-y-2.5 overflow-y-auto px-3 pb-3"
          >
            {segments.length === 0 && (
              <p className="text-xs text-[var(--dim)]">
                Chưa có đoạn nào. Phụ đề sẽ được ghi lại tại đây theo từng đoạn
                thoại, bấm vào mốc thời gian để tua video tới đoạn đó.
              </p>
            )}
            {segments.map((s) => (
              <div key={s.id} className="flex items-start gap-2">
                <button
                  type="button"
                  onClick={() => props.onSeek(s.tStart)}
                  className="mt-0.5 shrink-0 rounded-md bg-[var(--surface-alt)] px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--accent-ink)]"
                  aria-label={`Tua video tới ${fmtTime(s.tStart)}`}
                >
                  {fmtTime(s.tStart)}
                </button>
                <div className="min-w-0 flex-1">
                  <p className="text-xs leading-snug text-[var(--dim)]">{s.en}</p>
                  <p className="text-sm font-medium leading-snug">{s.vi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
