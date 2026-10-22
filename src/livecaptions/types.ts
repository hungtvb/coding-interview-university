// Shared types for the live Vietnamese captions feature.
//
// Everything here is deliberately structural: the Chrome Translator API and
// the @huggingface/transformers worker protocol are described by the exact
// shapes this app sends and receives, so the rest of the feature needs no
// `any` and no dependency on unstable upstream typings.

/* ------------------------- ASR worker protocol ------------------------- */

export type AsrModelId =
  | "onnx-community/whisper-small"
  | "onnx-community/whisper-base";

export type AsrDevice = "webgpu" | "wasm";

export type AsrModelChoice = "small" | "base";

export const ASR_MODELS: Record<AsrModelChoice, AsrModelId> = {
  small: "onnx-community/whisper-small",
  base: "onnx-community/whisper-base",
};

export const ASR_MODEL_LABEL: Record<AsrModelChoice, string> = {
  small: "Whisper Small",
  base: "Whisper Base",
};

/** Messages the main thread sends to the ASR worker. */
export type AsrWorkerInbound =
  | { type: "load"; model: AsrModelId; device: AsrDevice }
  | { type: "transcribe"; id: number; audio: Float32Array };

/** Messages the ASR worker posts back to the main thread. */
export type AsrWorkerOutbound =
  | {
      type: "load-progress";
      /** Aggregate download progress 0-100, null while indeterminate. */
      progress: number | null;
      file?: string;
    }
  | { type: "ready"; model: AsrModelId; device: AsrDevice }
  | { type: "load-error"; message: string }
  | { type: "result"; id: number; text: string }
  | { type: "transcribe-error"; id: number; message: string };

/* --------------------------- Caption segment --------------------------- */

export type TranslationEngine = "chrome" | "google" | "none";

export interface CaptionSegment {
  id: number;
  /** English transcript as recognized by Whisper. */
  en: string;
  /** Vietnamese translation; equals `en` when translation is unavailable. */
  vi: string;
  engine: TranslationEngine;
  /** Video time (seconds) when this segment's speech started. */
  tStart: number;
  /** Video time (seconds) when this segment's speech ended. */
  tEnd: number;
  /** Round-trip latency (ms) from segment close to caption ready. */
  latencyMs: number;
}

/* ------------------------- Chrome Translator API ------------------------ */

export type TranslatorAvailabilityResult =
  | "available"
  | "readily" // older Chrome builds
  | "downloadable"
  | "downloading"
  | "unavailable";

export interface TranslatorCreateOptions {
  sourceLanguage: string;
  targetLanguage: string;
  monitor?: (monitor: {
    addEventListener: (
      type: "downloadprogress",
      listener: (event: { loaded: number }) => void,
    ) => void;
  }) => void;
}

export interface ChromeTranslatorInstance {
  translate: (input: string) => Promise<string>;
  ready?: Promise<void>;
}

export interface ChromeTranslatorStatic {
  availability: (options: {
    sourceLanguage: string;
    targetLanguage: string;
  }) => Promise<TranslatorAvailabilityResult>;
  create: (options: TranslatorCreateOptions) => Promise<ChromeTranslatorInstance>;
}

/** The Translator API lives on `window` in Chrome; absent elsewhere. */
export function getChromeTranslator(): ChromeTranslatorStatic | null {
  if (typeof window === "undefined") return null;
  const candidate = (window as unknown as { Translator?: unknown }).Translator;
  if (
    candidate &&
    typeof candidate === "object" &&
    typeof (candidate as ChromeTranslatorStatic).availability === "function" &&
    typeof (candidate as ChromeTranslatorStatic).create === "function"
  ) {
    return candidate as ChromeTranslatorStatic;
  }
  return null;
}

/* --------------------------- Display media ------------------------------ */

/** getDisplayMedia constraints with Chrome's current-tab hints. */
export interface DisplayMediaConstraintsExt extends MediaStreamConstraints {
  preferCurrentTab?: boolean;
  selfBrowserSurface?: "include" | "exclude";
  surfaceSwitching?: "include" | "exclude";
  systemAudio?: "include" | "exclude";
}
