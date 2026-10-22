// ASR Web Worker: runs Whisper entirely on-device via @huggingface/transformers.
//
// The worker owns exactly one loaded pipeline. Loading is explicit (the UI
// drives a setup sequence with progress), transcription is request/response
// by segment id, and the main thread never blocks on inference. This file is
// only ever loaded when the user enables live captions, so its (large)
// bundle never affects first paint.

import { pipeline } from "@huggingface/transformers";
import type {
  AsrDevice,
  AsrModelId,
  AsrWorkerInbound,
  AsrWorkerOutbound,
} from "./types";

/** The slice of the ASR pipeline this worker uses. */
type AsrPipelineFn = (
  audio: Float32Array,
  options: { language: string; task: string },
) => Promise<{ text: string } | Array<{ text: string }>>;

interface ProgressInfo {
  status: string;
  file?: string;
  progress?: number;
  loaded?: number;
  total?: number;
}

let transcriber: AsrPipelineFn | null = null;
let loadedKey: string | null = null;
let loading: Promise<void> | null = null;

function post(message: AsrWorkerOutbound): void {
  self.postMessage(message);
}

/** Aggregate per-file download progress into one 0-100 number. */
function makeProgressTracker(): (info: ProgressInfo) => void {
  const files = new Map<string, number>();
  return (info: ProgressInfo) => {
    if (info.status === "progress" && info.file) {
      files.set(info.file, info.progress ?? 0);
      const values = [...files.values()];
      const aggregate =
        values.length > 0
          ? values.reduce((a, b) => a + b, 0) / values.length
          : null;
      post({ type: "load-progress", progress: aggregate, file: info.file });
    } else if (info.status === "done" && info.file) {
      files.set(info.file, 100);
      const values = [...files.values()];
      post({
        type: "load-progress",
        progress: values.reduce((a, b) => a + b, 0) / values.length,
        file: info.file,
      });
    } else if (info.status === "initiate" && info.file) {
      if (!files.has(info.file)) files.set(info.file, 0);
      post({ type: "load-progress", progress: null, file: info.file });
    }
  };
}

async function loadModel(model: AsrModelId, device: AsrDevice): Promise<void> {
  const key = `${model}@${device}`;
  if (transcriber && loadedKey === key) {
    post({ type: "ready", model, device });
    return;
  }
  if (loading) await loading;
  if (transcriber && loadedKey === key) {
    post({ type: "ready", model, device });
    return;
  }
  loading = (async () => {
    const created = await pipeline("automatic-speech-recognition", model, {
      device,
      dtype: "q8",
      progress_callback: makeProgressTracker(),
    });
    transcriber = created as unknown as AsrPipelineFn;
    loadedKey = key;
  })();
  try {
    await loading;
    post({ type: "ready", model, device });
  } finally {
    loading = null;
  }
}

self.onmessage = (event: MessageEvent<AsrWorkerInbound>) => {
  const message = event.data;
  if (!message || typeof message !== "object") return;

  if (message.type === "load") {
    loadModel(message.model, message.device).catch((error: unknown) => {
      transcriber = null;
      loadedKey = null;
      post({
        type: "load-error",
        message:
          error instanceof Error ? error.message : "Không tải được model.",
      });
    });
    return;
  }

  if (message.type === "transcribe") {
    const { id, audio } = message;
    if (!transcriber) {
      post({ type: "transcribe-error", id, message: "Model chưa sẵn sàng." });
      return;
    }
    const fn = transcriber;
    fn(audio, { language: "en", task: "transcribe" })
      .then((output) => {
        const text = Array.isArray(output)
          ? output.map((o) => o.text).join(" ")
          : output.text;
        post({ type: "result", id, text: (text ?? "").trim() });
      })
      .catch((error: unknown) => {
        post({
          type: "transcribe-error",
          id,
          message:
            error instanceof Error ? error.message : "Nhận dạng thất bại.",
        });
      });
  }
};
