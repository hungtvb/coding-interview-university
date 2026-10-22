# Coding Interview University — Học đầy đủ 463 mục

A standalone learning site for John Washam's **Coding Interview University**
study plan — the full curriculum as a trackable web app instead of one giant
README.

Source curriculum: https://github.com/jwasham/coding-interview-university
(catalog of 463 checklist items and their resource links are taken verbatim
from that repo's README, in source order, across 11 chapters from Big-O to
System Design).

## Features

- **Full roadmap**: all 463 checklist items, grouped by chapter, each with its
  original video/article links.
- **Progress tracker**: per-item status (chưa học / đang học / đã xong / cần ôn
  lại) plus a private note per item.
- **"Hôm nay" (Today) / Daily Plan**: suggests the next items to study
  following Washam's Daily Plan method, with a study log (minutes, notes,
  history of study days).
- **Flashcards**: 42 built-in concept cards with spaced repetition
  (rating a card schedules its next review at +1 / +3 / +7 / +16 days), plus
  your own custom cards.
- **Live Vietnamese captions ("Phụ đề Việt trực tiếp")**: watch a lesson's
  YouTube video with real-time Vietnamese subtitles generated **entirely in
  your browser** — see the dedicated section below.

## Live Vietnamese captions (Phụ đề Việt trực tiếp)

Many CIU videos are hard to follow (strong accents, no captions of their
own). For any roadmap item with an embeddable YouTube video, the expanded
detail offers **Phụ đề Việt trực tiếp**: real-time Vietnamese subtitles
produced 100% on-device, in the browser — no server, no uploads.

**How it works**

1. You share this tab's audio (Chrome's standard share dialog — pick this
   tab and tick **"Share tab audio"**).
2. An energy-based VAD in the page cuts the audio into utterances
   (speech + ~700ms of silence, 1.5–8s each) and resamples them to 16kHz.
3. A Web Worker runs **Whisper** via `@huggingface/transformers`
   (default `whisper-small` for better accent handling, switchable to
   `whisper-base`; quantized `q8`). WebGPU is used when available; if
   WebGPU or the chosen model fails, it falls back to Whisper Base on WASM
   and tells you quality/speed may drop.
4. Each English segment is translated to Vietnamese — first via Chrome's
   on-device **Translator API** (en→vi); if that is unavailable, via the
   public Google Translate endpoint; if both fail, captions stay in
   English with a notice.
5. Captions appear in a caption strip directly under the player and in a
   live transcript panel. Transcript timestamps are **video times**:
   clicking one seeks the player to that segment. The whole transcript can
   be appended to the item's note with one click.

**Requirements**

- **Chrome or Edge on desktop.** The feature needs `getDisplayMedia` tab
  audio and (for full speed) WebGPU. On mobile browsers the button is
  replaced by an explanation and a reminder to use YouTube's own
  auto-translate subtitles instead.
- The speech model downloads on first use (a few hundred MB) and is cached
  by the browser for later sessions.
- Expect captions to trail the speech by a few seconds — a segment is only
  transcribed once the speaker pauses.

**Privacy**

Audio is captured and recognized **only on your machine**; nothing is sent
to any server by this feature. The single exception: when Chrome's
on-device translator is unavailable and the Google Translate fallback is
active, the *recognized text* (never the audio) is sent to Google
Translate — the UI status line says so explicitly whenever that is the
case.

## Where your progress lives

This standalone version has **no server**. All progress — item statuses,
notes, study log, flashcard reviews, custom cards — is stored in your
browser's **localStorage** (key `ciu-state-v1`). That means progress is
**per-device and per-browser**: it does not sync between your phone and your
computer, and clearing the browser's site data resets it.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Deploy

It's a plain Vite static build — deploy the `dist/` output to any static
host (e.g. Vercel: framework preset "Vite", build command `npm run build`,
output directory `dist`).

## Tech

Vite + React + TypeScript, Tailwind CSS v4, @tanstack/react-query.
Live captions: @huggingface/transformers (Whisper in a Web Worker,
code-split — it loads only when the feature is enabled).
