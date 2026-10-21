// localStorage-backed replacement for the original server actions.
//
// The hosted artifact stored progress on a server; this standalone build
// keeps the exact same call signatures and response shapes, but persists
// everything in the browser under one localStorage key ("ciu-state-v1").
// Progress is therefore per-device / per-browser.

export type ItemStatus = "todo" | "learning" | "done" | "review";
export type CardRating = "again" | "hard" | "good" | "easy";

export interface ProgressEntry {
  item_key: string;
  status: ItemStatus;
  note: string;
  /** Max watch percentage ever reached (0-100) for video items. */
  watched_pct: number;
  /** Last playback position in seconds, for resume. */
  position_sec: number;
}

export interface CustomCard {
  id: number;
  front: string;
  back: string;
}

export interface ReviewEntry {
  card_key: string;
  rating: CardRating;
  review_count: number;
  last_reviewed_on: string;
  due_on: string;
}

export interface StudyDay {
  date: string;
  minutes: number;
  note: string;
  done_keys: string[];
}

export interface AppState {
  progress: ProgressEntry[];
  customCards: CustomCard[];
  reviews: ReviewEntry[];
  studyDays: StudyDay[];
}

interface StoredState extends AppState {
  nextCardId: number;
}

const STORAGE_KEY = "ciu-state-v1";

const DEFAULT_STATE: StoredState = {
  progress: [],
  customCards: [],
  reviews: [],
  studyDays: [],
  nextCardId: 1,
};

const STATUSES: ItemStatus[] = ["todo", "learning", "done", "review"];

function normalizeProgressEntry(raw: unknown): ProgressEntry | null {
  if (!raw || typeof raw !== "object") return null;
  const e = raw as Partial<ProgressEntry>;
  if (typeof e.item_key !== "string" || !e.item_key) return null;
  const num = (v: unknown): number =>
    typeof v === "number" && Number.isFinite(v) ? v : 0;
  return {
    item_key: e.item_key,
    status: STATUSES.includes(e.status as ItemStatus)
      ? (e.status as ItemStatus)
      : "todo",
    note: typeof e.note === "string" ? e.note : "",
    // Entries saved before watch tracking existed simply default to 0.
    watched_pct: Math.min(100, Math.max(0, num(e.watched_pct))),
    position_sec: Math.max(0, num(e.position_sec)),
  };
}

function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    const customCards: CustomCard[] = Array.isArray(parsed.customCards)
      ? parsed.customCards
      : [];
    const maxId = customCards.reduce(
      (max, c) => (typeof c.id === "number" && c.id > max ? c.id : max),
      0,
    );
    return {
      progress: Array.isArray(parsed.progress)
        ? parsed.progress
            .map(normalizeProgressEntry)
            .filter((p): p is ProgressEntry => p !== null)
        : [],
      customCards,
      reviews: Array.isArray(parsed.reviews) ? parsed.reviews : [],
      studyDays: Array.isArray(parsed.studyDays) ? parsed.studyDays : [],
      nextCardId:
        typeof parsed.nextCardId === "number" && parsed.nextCardId > maxId
          ? parsed.nextCardId
          : maxId + 1,
    };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState(state: StoredState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage full / unavailable (private mode): the app keeps working
    // in-memory for this session, changes just won't persist.
  }
}

function publicState(state: StoredState): AppState {
  return structuredClone({
    progress: state.progress,
    customCards: state.customCards,
    reviews: state.reviews,
    studyDays: state.studyDays,
  });
}

export const api = {
  async getState(_args: Record<string, never>): Promise<AppState> {
    return publicState(loadState());
  },

  async setItemStatus(args: {
    itemKey: string;
    status: ItemStatus;
  }): Promise<{ ok: true }> {
    const state = loadState();
    const existing = state.progress.find((p) => p.item_key === args.itemKey);
    if (existing) {
      existing.status = args.status;
    } else {
      state.progress.push({
        item_key: args.itemKey,
        status: args.status,
        note: "",
        watched_pct: 0,
        position_sec: 0,
      });
    }
    saveState(state);
    return { ok: true };
  },

  async setItemNote(args: {
    itemKey: string;
    note: string;
  }): Promise<{ ok: true }> {
    const state = loadState();
    const existing = state.progress.find((p) => p.item_key === args.itemKey);
    if (existing) {
      existing.note = args.note;
    } else {
      state.progress.push({
        item_key: args.itemKey,
        status: "todo",
        note: args.note,
        watched_pct: 0,
        position_sec: 0,
      });
    }
    saveState(state);
    return { ok: true };
  },

  async setWatchProgress(args: {
    itemKey: string;
    pct: number;
    positionSec: number;
  }): Promise<{ ok: true }> {
    const state = loadState();
    const pct = Math.min(100, Math.max(0, args.pct));
    const pos = Math.max(0, args.positionSec);
    const existing = state.progress.find((p) => p.item_key === args.itemKey);
    if (existing) {
      // watched_pct is the max ever reached — never let it go backwards.
      existing.watched_pct = Math.max(existing.watched_pct, pct);
      existing.position_sec = pos;
    } else {
      state.progress.push({
        item_key: args.itemKey,
        status: "todo",
        note: "",
        watched_pct: pct,
        position_sec: pos,
      });
    }
    saveState(state);
    return { ok: true };
  },

  async logStudyDay(args: {
    date: string;
    minutes: number;
    note: string;
    doneKeys: string[];
  }): Promise<{ ok: true }> {
    const state = loadState();
    const entry: StudyDay = {
      date: args.date,
      minutes: args.minutes,
      note: args.note,
      done_keys: [...args.doneKeys],
    };
    const idx = state.studyDays.findIndex((d) => d.date === args.date);
    if (idx >= 0) {
      state.studyDays[idx] = entry;
    } else {
      state.studyDays.push(entry);
    }
    saveState(state);
    return { ok: true };
  },

  async reviewCard(args: {
    cardKey: string;
    rating: CardRating;
    today: string;
    dueOn: string;
  }): Promise<{ ok: true }> {
    const state = loadState();
    const existing = state.reviews.find((r) => r.card_key === args.cardKey);
    if (existing) {
      existing.rating = args.rating;
      existing.review_count += 1;
      existing.last_reviewed_on = args.today;
      existing.due_on = args.dueOn;
    } else {
      state.reviews.push({
        card_key: args.cardKey,
        rating: args.rating,
        review_count: 1,
        last_reviewed_on: args.today,
        due_on: args.dueOn,
      });
    }
    saveState(state);
    return { ok: true };
  },

  async addCard(args: { front: string; back: string }): Promise<{ id: number }> {
    const state = loadState();
    const id = state.nextCardId;
    state.nextCardId += 1;
    state.customCards.push({ id, front: args.front, back: args.back });
    saveState(state);
    return { id };
  },

  async deleteCard(args: { id: number }): Promise<{ ok: true }> {
    const state = loadState();
    state.customCards = state.customCards.filter((c) => c.id !== args.id);
    state.reviews = state.reviews.filter(
      (r) => r.card_key !== `custom-${args.id}`,
    );
    saveState(state);
    return { ok: true };
  },
};

// Same helper shape the original RPC client exported, so App.tsx can do
// `type State = ApiResponse<typeof api, "getState">` unchanged.
export type ApiResponse<F, K extends keyof F> = F[K] extends (
  ...args: any[]
) => Promise<infer R>
  ? R
  : never;
