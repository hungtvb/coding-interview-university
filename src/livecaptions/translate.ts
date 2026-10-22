// English -> Vietnamese translation with a strict priority order:
//
//   (a) Chrome's on-device Translator API — free, private, offline-capable
//       after its language pack downloads.
//   (b) The public Google Translate endpoint (client=gtx) — online; the UI
//       is told honestly whenever this engine is the active one.
//   (c) Neither worked — return the English text unchanged and flag the
//       segment as untranslated so the UI can say so.
//
// Results are cached per exact source text: lectures repeat phrases a lot,
// and re-translating them would add latency for nothing.

import {
  getChromeTranslator,
  type ChromeTranslatorInstance,
  type TranslationEngine,
} from "./types";

export interface TranslationResult {
  text: string;
  engine: TranslationEngine;
}

export interface TranslatorService {
  /** Which engine will serve translations ('none' until one succeeds). */
  readonly engine: TranslationEngine;
  /** Prepare the best available engine; resolves even when none exists. */
  prepare: (onDownloadProgress?: (pct: number) => void) => Promise<void>;
  translate: (text: string) => Promise<TranslationResult>;
}

function parseGtxResponse(data: unknown): string | null {
  // Shape: [[["<vi chunk>", "<en chunk>", ...], ...], ...]
  if (!Array.isArray(data) || !Array.isArray(data[0])) return null;
  const parts: string[] = [];
  for (const piece of data[0] as unknown[]) {
    if (Array.isArray(piece) && typeof piece[0] === "string") {
      parts.push(piece[0]);
    }
  }
  const joined = parts.join("").trim();
  return joined || null;
}

async function translateViaGoogle(text: string): Promise<string | null> {
  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=" +
    encodeURIComponent(text);
  const response = await fetch(url);
  if (!response.ok) return null;
  const data: unknown = await response.json();
  return parseGtxResponse(data);
}

export function createTranslatorService(): TranslatorService {
  const cache = new Map<string, TranslationResult>();
  let chromeTranslator: ChromeTranslatorInstance | null = null;
  let chromeFailed = false;
  let googleFailed = false;
  let activeEngine: TranslationEngine = "none";
  let preparePromise: Promise<void> | null = null;

  async function tryPrepareChrome(
    onDownloadProgress?: (pct: number) => void,
  ): Promise<boolean> {
    const api = getChromeTranslator();
    if (!api) return false;
    try {
      const availability = await api.availability({
        sourceLanguage: "en",
        targetLanguage: "vi",
      });
      if (availability === "unavailable") return false;
      chromeTranslator = await api.create({
        sourceLanguage: "en",
        targetLanguage: "vi",
        monitor: (monitor) => {
          monitor.addEventListener("downloadprogress", (event) => {
            onDownloadProgress?.(Math.round(event.loaded * 100));
          });
        },
      });
      if (chromeTranslator.ready) await chromeTranslator.ready;
      activeEngine = "chrome";
      return true;
    } catch {
      chromeTranslator = null;
      chromeFailed = true;
      return false;
    }
  }

  return {
    get engine() {
      return activeEngine;
    },

    prepare(onDownloadProgress) {
      if (!preparePromise) {
        preparePromise = (async () => {
          const ok = await tryPrepareChrome(onDownloadProgress);
          if (!ok && !googleFailed) {
            // Don't burn a network call just to probe; Google is only
            // marked active after its first successful translation. The
            // engine label is corrected at that point by translate().
            activeEngine = "google";
          }
          if (!ok && googleFailed) activeEngine = "none";
        })();
      }
      return preparePromise;
    },

    async translate(text: string): Promise<TranslationResult> {
      const trimmed = text.trim();
      if (!trimmed) return { text: "", engine: activeEngine };
      const cached = cache.get(trimmed);
      if (cached) return cached;

      let result: TranslationResult | null = null;

      if (chromeTranslator && !chromeFailed) {
        try {
          const vi = await chromeTranslator.translate(trimmed);
          if (vi && vi.trim()) {
            result = { text: vi.trim(), engine: "chrome" };
            activeEngine = "chrome";
          }
        } catch {
          chromeFailed = true;
          chromeTranslator = null;
        }
      }

      if (!result && !googleFailed) {
        try {
          const vi = await translateViaGoogle(trimmed);
          if (vi) {
            result = { text: vi, engine: "google" };
            activeEngine = "google";
          } else {
            googleFailed = true;
          }
        } catch {
          googleFailed = true;
        }
      }

      if (!result) {
        result = { text: trimmed, engine: "none" };
        activeEngine = "none";
      }
      cache.set(trimmed, result);
      return result;
    },
  };
}
