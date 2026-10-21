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
