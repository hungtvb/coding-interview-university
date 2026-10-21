import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type ApiResponse } from "./api";
import { CATALOG, type CatalogItem } from "./data/catalog";
import { BUILTIN_CARDS } from "./data/flashcards";

type State = ApiResponse<typeof api, "getState">;
type Status = "todo" | "learning" | "done" | "review";
type Rating = "again" | "hard" | "good" | "easy";
type Tab = "today" | "roadmap" | "cards";

const STATUS_LABEL: Record<Status, string> = {
  todo: "Chưa học",
  learning: "Đang học",
  done: "Đã xong",
  review: "Cần ôn lại",
};

const CHAPTER_SHORT: Record<string, string> = {
  "Algorithmic complexity / Big-O / Asymptotic analysis": "Big-O & độ phức tạp",
  "Data Structures": "Cấu trúc dữ liệu",
  "More Knowledge": "Kiến thức bổ sung",
  Trees: "Cây",
  Sorting: "Sắp xếp",
  Graphs: "Đồ thị",
  "Even More Knowledge": "Kiến thức nâng cao",
  "Final Review": "Ôn tập cuối",
  "Interview Process & General Interview Prep": "Chuẩn bị phỏng vấn",
  "System Design, Scalability, Data Handling": "System Design",
  "Additional Detail on Some Subjects": "Chi tiết bổ sung",
};

function chapterShort(name: string): string {
  return CHAPTER_SHORT[name] ?? name;
}

const CHAPTERS: string[] = (() => {
  const seen: string[] = [];
  for (const it of CATALOG) if (!seen.includes(it.chapter)) seen.push(it.chapter);
  return seen;
})();

function fmtDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function todayStr(): string {
  return fmtDate(new Date());
}
function addDays(dateStr: string, n: number): string {
  const [y = 1970, m = 1, d = 1] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + n);
  return fmtDate(dt);
}
function prettyDate(dateStr: string): string {
  const [y = 1970, m = 1, d = 1] = dateStr.split("-").map(Number);
  return `${d}/${m}/${y}`;
}

const RATING_DAYS: Record<Rating, number> = { again: 1, hard: 3, good: 7, easy: 16 };
const RATING_LABEL: Record<Rating, string> = {
  again: "Chưa thuộc",
  hard: "Khó",
  good: "Nhớ được",
  easy: "Dễ",
};

interface DeckCard {
  key: string;
  front: string;
  back: string;
  topic: string;
  customId?: number;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`${className ?? ""} transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" />
    </svg>
  );
}
function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M14.1 5.6 9 3 3.7 5.3a1 1 0 0 0-.7 1v13.2a.5.5 0 0 0 .7.5L9 18l6 3 5.3-2.3a1 1 0 0 0 .7-1V4.5a.5.5 0 0 0-.7-.5L15 6z" /><path d="M9 3v15" /><path d="M15 6v15" />
    </svg>
  );
}
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m12.8 2.9 8.5 4.7a1 1 0 0 1 0 1.8l-8.5 4.6a1.4 1.4 0 0 1-1.6 0L2.7 9.4a1 1 0 0 1 0-1.8l8.5-4.7a1.4 1.4 0 0 1 1.6 0Z" /><path d="m22 17.7-9.6 5.3a1.4 1.4 0 0 1-1.6 0L2 17.7" opacity={0} /><path d="M2.7 14.4 10.9 19a2 2 0 0 0 2.1 0l8.3-4.6" />
    </svg>
  );
}

function ProgressBar({ pct, className }: { pct: number; className?: string }) {
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-[var(--surface-alt)] ${className ?? ""}`} role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
    </div>
  );
}

export function App() {
  const [tab, setTab] = useState<Tab>("today");
  const queryClient = useQueryClient();
  const state = useQuery({ queryKey: ["state"], queryFn: () => api.getState({}) });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["state"] });
  const setStatus = useMutation({
    mutationFn: (v: { itemKey: string; status: Status }) => api.setItemStatus(v),
    onSuccess: invalidate,
  });
  const setNote = useMutation({
    mutationFn: (v: { itemKey: string; note: string }) => api.setItemNote(v),
    onSuccess: invalidate,
  });
  const logDay = useMutation({
    mutationFn: (v: { date: string; minutes: number; note: string; doneKeys: string[] }) => api.logStudyDay(v),
    onSuccess: invalidate,
  });

  const data: State | undefined = state.data;
  const statusOf = useMemo(() => {
    const map = new Map<string, Status>();
    const noteMap = new Map<string, string>();
    for (const p of data?.progress ?? []) {
      map.set(p.item_key, p.status);
      noteMap.set(p.item_key, p.note);
    }
    return {
      get: (key: string): Status => map.get(key) ?? "todo",
      note: (key: string): string => noteMap.get(key) ?? "",
    };
  }, [data]);

  const counts = useMemo(() => {
    let done = 0, learning = 0, review = 0;
    for (const it of CATALOG) {
      const s = statusOf.get(it.key);
      if (s === "done") done++;
      else if (s === "learning") learning++;
      else if (s === "review") review++;
    }
    return { done, learning, review, total: CATALOG.length };
  }, [statusOf]);

  const chapterStats = useMemo(
    () =>
      CHAPTERS.map((ch) => {
        const items = CATALOG.filter((i) => i.chapter === ch);
        const done = items.filter((i) => statusOf.get(i.key) === "done").length;
        return { chapter: ch, total: items.length, done };
      }),
    [statusOf],
  );

  const reviewMap = useMemo(() => {
    const m = new Map<string, State["reviews"][number]>();
    for (const r of data?.reviews ?? []) m.set(r.card_key, r);
    return m;
  }, [data]);

  const deck: DeckCard[] = useMemo(() => {
    const builtin: DeckCard[] = BUILTIN_CARDS.map((c) => ({
      key: `builtin-${c.id}`,
      front: c.front,
      back: c.back,
      topic: c.topic,
    }));
    const custom: DeckCard[] = (data?.customCards ?? []).map((c) => ({
      key: `custom-${c.id}`,
      front: c.front,
      back: c.back,
      topic: "Thẻ của bạn",
      customId: c.id,
    }));
    return [...builtin, ...custom];
  }, [data]);

  const today = todayStr();
  const dueCards = useMemo(
    () =>
      deck.filter((c) => {
        const r = reviewMap.get(c.key);
        return !r || r.due_on <= today;
      }),
    [deck, reviewMap, today],
  );

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main className="mx-auto w-full max-w-3xl px-4 pb-28">
        {state.isPending ? (
          <p className="py-16 text-center text-sm text-[var(--dim)]">Đang tải tiến độ học…</p>
        ) : state.isError ? (
          <div className="py-16 text-center">
            <p className="text-sm text-[var(--dim)]">Không tải được dữ liệu học tập.</p>
            <button type="button" onClick={() => state.refetch()} className="mt-3 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">
              Thử lại
            </button>
          </div>
        ) : (
          <>
            {tab === "today" && (
              <TodayView
                counts={counts}
                chapterStats={chapterStats}
                statusOf={statusOf}
                studyDays={data?.studyDays ?? []}
                dueCardCount={dueCards.length}
                today={today}
                onSetStatus={(key, s) => setStatus.mutate({ itemKey: key, status: s })}
                onLogDay={(v) => logDay.mutate(v)}
                onGoCards={() => setTab("cards")}
                onGoRoadmap={() => setTab("roadmap")}
              />
            )}
            {tab === "roadmap" && (
              <RoadmapView
                statusOf={statusOf}
                onSetStatus={(key, s) => setStatus.mutate({ itemKey: key, status: s })}
                onSaveNote={(key, note) => setNote.mutate({ itemKey: key, note })}
              />
            )}
            {tab === "cards" && (
              <CardsView deck={deck} reviewMap={reviewMap} dueCards={dueCards} today={today} />
            )}
          </>
        )}
      </main>

      <nav aria-label="Điều hướng chính" className="fixed inset-x-0 bottom-0 z-20 border-t border-[var(--border)] bg-[var(--surface)] pb-safe">
        <div className="mx-auto grid max-w-3xl grid-cols-3">
          {(
            [
              { id: "today", label: "Hôm nay", Icon: CalendarIcon },
              { id: "roadmap", label: "Lộ trình", Icon: MapIcon },
              { id: "cards", label: "Flashcards", Icon: LayersIcon },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              aria-current={tab === id ? "page" : undefined}
              onClick={() => setTab(id)}
              className={`flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold ${tab === id ? "text-[var(--accent-ink)]" : "text-[var(--dim)]"}`}
            >
              <Icon className="h-5 w-5" />
              {label}
              {id === "cards" && dueCards.length > 0 && (
                <span className="sr-only">{dueCards.length} thẻ đến hạn ôn</span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

/* ------------------------------ Today view ------------------------------ */

interface StatusAccess {
  get: (key: string) => Status;
  note: (key: string) => string;
}

function TodayView(props: {
  counts: { done: number; learning: number; review: number; total: number };
  chapterStats: { chapter: string; total: number; done: number }[];
  statusOf: StatusAccess;
  studyDays: State["studyDays"];
  dueCardCount: number;
  today: string;
  onSetStatus: (key: string, s: Status) => void;
  onLogDay: (v: { date: string; minutes: number; note: string; doneKeys: string[] }) => void;
  onGoCards: () => void;
  onGoRoadmap: () => void;
}) {
  const { counts, statusOf, today } = props;
  const pct = counts.total ? (counts.done / counts.total) * 100 : 0;

  const focus = useMemo(() => {
    const remaining = CATALOG.filter((i) => statusOf.get(i.key) !== "done");
    const learning = remaining.filter((i) => statusOf.get(i.key) === "learning");
    const rest = remaining.filter((i) => statusOf.get(i.key) !== "learning");
    return [...learning, ...rest].slice(0, 5);
  }, [statusOf]);

  const reviewItems = useMemo(
    () => CATALOG.filter((i) => statusOf.get(i.key) === "review").slice(0, 5),
    [statusOf],
  );

  const todayLog = props.studyDays.find((d) => d.date === today);
  const [minutes, setMinutes] = useState("");
  const [logNote, setLogNote] = useState("");
  const [savedMsg, setSavedMsg] = useState(false);
  const hydrated = useRef(false);
  useEffect(() => {
    if (todayLog && !hydrated.current) {
      hydrated.current = true;
      setMinutes(todayLog.minutes ? String(todayLog.minutes) : "");
      setLogNote(todayLog.note);
    }
  }, [todayLog]);

  const recentDays = useMemo(
    () => [...props.studyDays].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 7),
    [props.studyDays],
  );
  const totalMinutes = props.studyDays.reduce((s, d) => s + d.minutes, 0);

  const markDone = (item: CatalogItem) => {
    props.onSetStatus(item.key, "done");
    const existing = todayLog;
    const keys = new Set(existing?.done_keys ?? []);
    keys.add(item.key);
    props.onLogDay({
      date: today,
      minutes: existing?.minutes ?? 0,
      note: existing?.note ?? "",
      doneKeys: [...keys],
    });
  };

  return (
    <div className="pt-5">
      <section aria-label="Tiến độ tổng">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-4xl font-bold leading-none">
              {counts.done}
              <span className="text-xl text-[var(--dim)]">/{counts.total}</span>
            </p>
            <p className="mt-1.5 text-sm text-[var(--dim)]">mục đã hoàn thành trong lộ trình CIU</p>
          </div>
          <p className="font-mono text-2xl font-bold text-[var(--accent-ink)]">{pct.toFixed(1)}%</p>
        </div>
        <ProgressBar pct={pct} className="mt-3" />
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 ring-1 ring-[var(--border)]">Đang học: {counts.learning}</span>
          <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 ring-1 ring-[var(--border)]">Cần ôn lại: {counts.review}</span>
          <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 ring-1 ring-[var(--border)]">Tổng thời gian đã log: {totalMinutes} phút</span>
        </div>
      </section>

      <section aria-label="Kế hoạch hôm nay" className="mt-6 rounded-2xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)]">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold">Hôm nay học gì</h2>
          <span className="font-mono text-xs text-[var(--dim)]">{prettyDate(today)}</span>
        </div>
        <p className="mt-1 text-sm text-[var(--dim)]">
          Theo phương pháp của Washam: mỗi ngày một chủ đề — xem/đọc tài liệu rồi tự code lại. Đây là các mục tiếp theo trong lộ trình:
        </p>
        {focus.length === 0 ? (
          <p className="mt-4 rounded-xl bg-[var(--surface-alt)] p-3 text-sm font-medium">Đã hoàn thành toàn bộ 463 mục. Chúc mừng — giờ là lúc luyện coding problems và ôn flashcards.</p>
        ) : (
          <ul className="mt-3 divide-y divide-[var(--border)]">
            {focus.map((item) => (
              <li key={item.key} className="flex items-start gap-3 py-3">
                <button
                  type="button"
                  aria-label={`Đánh dấu xong: ${item.title}`}
                  onClick={() => markDone(item)}
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] text-transparent transition hover:bg-[var(--accent)] hover:text-white"
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </button>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug">{item.title}</p>
                  <p className="mt-0.5 text-xs text-[var(--dim)]">
                    {chapterShort(item.chapter)}{item.topic ? ` · ${item.topic}` : ""} · mục #{item.n}
                    {statusOf.get(item.key) === "learning" ? " · đang học dở" : ""}
                  </p>
                  {item.links[0] && (
                    <a href={item.links[0].url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-ink)] underline decoration-dotted underline-offset-2">
                      Mở tài liệu <ExternalIcon className="h-3 w-3" />
                    </a>
                  )}
                </div>
                {statusOf.get(item.key) === "learning" ? (
                  <span className="shrink-0 rounded-full bg-[var(--surface-alt)] px-2.5 py-1 text-xs font-semibold text-[var(--learn)]">
                    Đang học dở
                  </span>
                ) : (
                  <button
                    type="button"
                    aria-label={`Bắt đầu học: ${item.title}`}
                    onClick={() => props.onSetStatus(item.key, "learning")}
                    className="shrink-0 rounded-full bg-[var(--surface-alt)] px-2.5 py-1 text-xs font-semibold"
                  >
                    Bắt đầu học
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}

        {reviewItems.length > 0 && (
          <div className="mt-2 border-t border-[var(--border)] pt-3">
            <h3 className="text-sm font-bold text-[var(--review)]">Cần ôn lại</h3>
            <ul className="mt-1.5 space-y-1.5">
              {reviewItems.map((item) => (
                <li key={item.key} className="flex items-center justify-between gap-2 text-sm">
                  <span className="min-w-0 truncate">{item.title}</span>
                  <button type="button" aria-label={`Đã ôn xong: ${item.title}`} onClick={() => props.onSetStatus(item.key, "done")} className="shrink-0 rounded-full bg-[var(--surface-alt)] px-2.5 py-1 text-xs font-semibold">
                    Đã ôn
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="button" onClick={props.onGoCards} className="mt-4 flex w-full items-center justify-between rounded-xl bg-[var(--surface-alt)] px-3.5 py-3 text-left">
          <span className="text-sm font-semibold">Flashcards đến hạn ôn hôm nay</span>
          <span className="font-mono text-sm font-bold text-[var(--accent-ink)]">{props.dueCardCount} thẻ →</span>
        </button>
      </section>

      <section aria-label="Nhật ký học hôm nay" className="mt-5 rounded-2xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)]">
        <h2 className="text-lg font-bold">Nhật ký hôm nay</h2>
        <div className="mt-3 flex gap-2">
          <label className="flex-1">
            <span className="text-xs font-semibold text-[var(--dim)]">Số phút đã học</span>
            <input
              type="number" inputMode="numeric" min={0} max={1440} value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              aria-label="Số phút đã học hôm nay"
              placeholder="Ví dụ: 90"
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
            />
          </label>
        </div>
        <label className="mt-2 block">
          <span className="text-xs font-semibold text-[var(--dim)]">Ghi chú buổi học</span>
          <textarea
            value={logNote} onChange={(e) => setLogNote(e.target.value)} rows={2}
            aria-label="Ghi chú buổi học hôm nay"
            placeholder="Hôm nay kẹt ở đâu, hiểu thêm được gì…"
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
          />
        </label>
        <button
          type="button"
          onClick={() => {
            props.onLogDay({
              date: today,
              minutes: Math.max(0, Math.min(1440, Number(minutes) || 0)),
              note: logNote,
              doneKeys: todayLog?.done_keys ?? [],
            });
            setSavedMsg(true);
            window.setTimeout(() => setSavedMsg(false), 2000);
          }}
          className="mt-3 w-full rounded-xl bg-[var(--accent)] py-2.5 text-sm font-bold text-white"
        >
          {savedMsg ? "Đã lưu ✓" : "Lưu nhật ký"}
        </button>
        {recentDays.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-[var(--border)] pt-3">
            {recentDays.map((d) => (
              <li key={d.date} className="flex items-baseline justify-between gap-2 text-sm">
                <span className="font-mono text-xs text-[var(--dim)]">{prettyDate(d.date)}</span>
                <span className="min-w-0 flex-1 truncate text-[var(--dim)]">{d.note || "—"}</span>
                <span className="shrink-0 font-mono text-xs font-semibold">{d.minutes} phút · {d.done_keys.length} mục</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-label="Tiến độ theo chương" className="mt-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold">Tiến độ theo chương</h2>
          <button type="button" onClick={props.onGoRoadmap} className="text-sm font-semibold text-[var(--accent-ink)]">Mở lộ trình →</button>
        </div>
        <ul className="mt-2 divide-y divide-[var(--border)] rounded-2xl bg-[var(--surface)] px-4 ring-1 ring-[var(--border)]">
          {props.chapterStats.map((s) => (
            <li key={s.chapter} className="py-3">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold">{chapterShort(s.chapter)}</span>
                <span className="font-mono text-xs text-[var(--dim)]">{s.done}/{s.total}</span>
              </div>
              <ProgressBar pct={s.total ? (s.done / s.total) * 100 : 0} className="mt-1.5 h-1.5" />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-[var(--dim)]">
          Nguồn nội dung:{" "}
          <a href="https://github.com/jwasham/coding-interview-university" target="_blank" rel="noreferrer" className="font-semibold underline decoration-dotted underline-offset-2">
            Coding Interview University — John Washam (GitHub)
          </a>
        </p>
      </section>
    </div>
  );
}

/* ----------------------------- Roadmap view ----------------------------- */

const FILTERS: { id: Status | "all"; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "todo", label: "Chưa học" },
  { id: "learning", label: "Đang học" },
  { id: "done", label: "Đã xong" },
  { id: "review", label: "Cần ôn lại" },
];

function RoadmapView(props: {
  statusOf: StatusAccess;
  onSetStatus: (key: string, s: Status) => void;
  onSaveNote: (key: string, note: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Status | "all">("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [openChapters, setOpenChapters] = useState<Set<string>>(() => {
    const first = CATALOG.find((i) => props.statusOf.get(i.key) !== "done");
    return new Set([first?.chapter ?? CHAPTERS[0] ?? ""]);
  });

  const q = query.trim().toLowerCase();
  const matches = (item: CatalogItem) => {
    if (filter !== "all" && props.statusOf.get(item.key) !== filter) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.topic.toLowerCase().includes(q) ||
      chapterShort(item.chapter).toLowerCase().includes(q)
    );
  };
  const searching = q.length > 0 || filter !== "all";

  return (
    <div className="pt-5">
      <h2 className="text-xl font-bold">Lộ trình 463 mục</h2>
      <p className="mt-1 text-sm text-[var(--dim)]">Đúng thứ tự README gốc của Washam. Chạm vào một mục để đổi trạng thái, mở tài liệu và ghi chú.</p>

      <div className="sticky top-0 z-10 -mx-4 mt-3 bg-[var(--bg)] px-4 pb-2 pt-1">
        <label className="sr-only" htmlFor="search-items">Tìm mục học</label>
        <input
          id="search-items" type="search" value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm: binary search, heap, sharding…"
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
        />
        <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label="Lọc theo trạng thái">
          {FILTERS.map((f) => (
            <button
              key={f.id} type="button" onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${filter === f.id ? "bg-[var(--text)] text-[var(--bg)]" : "bg-[var(--surface)] ring-1 ring-[var(--border)]"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 space-y-3">
        {CHAPTERS.map((ch) => {
          const items = CATALOG.filter((i) => i.chapter === ch);
          const visible = items.filter(matches);
          if (searching && visible.length === 0) return null;
          const done = items.filter((i) => props.statusOf.get(i.key) === "done").length;
          const open = searching || openChapters.has(ch);
          return (
            <section key={ch} aria-label={chapterShort(ch)} className="overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
              <button
                type="button"
                aria-expanded={open}
                aria-label={`${chapterShort(ch)} — ${done}/${items.length} mục đã xong`}
                onClick={() =>
                  setOpenChapters((prev) => {
                    const next = new Set(prev);
                    if (next.has(ch)) next.delete(ch); else next.add(ch);
                    return next;
                  })
                }
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-bold">{chapterShort(ch)}</p>
                  <p className="truncate text-xs text-[var(--dim)]">{ch}</p>
                </div>
                <span className="font-mono text-xs font-semibold text-[var(--dim)]">{done}/{items.length}</span>
                <ChevronIcon open={open} className="h-4 w-4 shrink-0 text-[var(--dim)]" />
              </button>
              <div className="px-4 pb-1"><ProgressBar pct={items.length ? (done / items.length) * 100 : 0} className="h-1.5" /></div>
              {open && (
                <ul className="divide-y divide-[var(--border)] px-4">
                  {(searching ? visible : items).map((item) => (
                    <ItemRow
                      key={item.key}
                      item={item}
                      status={props.statusOf.get(item.key)}
                      note={props.statusOf.note(item.key)}
                      expanded={expanded === item.key}
                      onToggleExpand={() => setExpanded(expanded === item.key ? null : item.key)}
                      onSetStatus={props.onSetStatus}
                      onSaveNote={props.onSaveNote}
                    />
                  ))}
                  {(searching ? visible : items).length === 0 && (
                    <li className="py-4 text-sm text-[var(--dim)]">Không có mục nào khớp bộ lọc.</li>
                  )}
                </ul>
              )}
            </section>
          );
        })}
        {searching && CHAPTERS.every((ch) => CATALOG.filter((i) => i.chapter === ch).filter(matches).length === 0) && (
          <p className="py-8 text-center text-sm text-[var(--dim)]">Không tìm thấy mục nào. Thử từ khóa khác.</p>
        )}
      </div>
    </div>
  );
}

function ItemRow(props: {
  item: CatalogItem;
  status: Status;
  note: string;
  expanded: boolean;
  onToggleExpand: () => void;
  onSetStatus: (key: string, s: Status) => void;
  onSaveNote: (key: string, note: string) => void;
}) {
  const { item, status } = props;
  const [noteDraft, setNoteDraft] = useState(props.note);
  const [noteSaved, setNoteSaved] = useState(false);
  useEffect(() => { setNoteDraft(props.note); }, [props.note, props.expanded]);

  const isDone = status === "done";
  return (
    <li className="py-3" style={{ paddingLeft: `${Math.min(item.depth, 3) * 14}px` }}>
      <div className="flex items-start gap-2.5">
        <button
          type="button"
          aria-label={isDone ? `Bỏ đánh dấu xong: ${item.title}` : `Đánh dấu xong: ${item.title}`}
          onClick={() => props.onSetStatus(item.key, isDone ? "todo" : "done")}
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${isDone ? "border-[var(--done)] bg-[var(--done)] text-white" : "border-[var(--border)] text-transparent hover:border-[var(--accent)]"}`}
        >
          <CheckIcon className="h-3.5 w-3.5" />
        </button>
        <button type="button" onClick={props.onToggleExpand} aria-expanded={props.expanded} aria-label={`Chi tiết mục: ${item.title}`} className="min-w-0 flex-1 text-left">
          <p className={`text-sm font-medium leading-snug ${isDone ? "text-[var(--dim)] line-through decoration-[var(--dim)]/50" : ""}`}>{item.title}</p>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-[var(--dim)]">
            <span className="font-mono">#{item.n}</span>
            {item.topic && <span>{item.topic}</span>}
            <span className={status === "done" ? "text-[var(--done)]" : status === "learning" ? "text-[var(--learn)]" : status === "review" ? "text-[var(--review)]" : ""}>
              {status !== "todo" ? STATUS_LABEL[status] : ""}
            </span>
            {item.links.length > 0 && <span>{item.links.length} tài liệu</span>}
            {props.note && <span>có ghi chú</span>}
          </p>
        </button>
        <ChevronIcon open={props.expanded} className="mt-1 h-4 w-4 shrink-0 text-[var(--dim)]" />
      </div>

      {props.expanded && (
        <div className="mt-3 rounded-xl bg-[var(--bg)] p-3">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label={`Trạng thái của ${item.title}`}>
            {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
              <button
                key={s} type="button" onClick={() => props.onSetStatus(item.key, s)} aria-pressed={status === s}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${status === s ? "bg-[var(--text)] text-[var(--bg)]" : "bg-[var(--surface)] ring-1 ring-[var(--border)]"}`}
              >
                {STATUS_LABEL[s]}
              </button>
            ))}
          </div>
          {item.links.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {item.links.map((l, idx) => (
                <li key={`${l.url}-${idx}`}>
                  <a href={l.url} target="_blank" rel="noreferrer" className="flex items-start gap-1.5 text-sm font-medium text-[var(--accent-ink)] underline decoration-dotted underline-offset-2">
                    <ExternalIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span className="min-w-0">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
          <label className="mt-3 block">
            <span className="text-xs font-semibold text-[var(--dim)]">Ghi chú của bạn</span>
            <textarea
              value={noteDraft} onChange={(e) => setNoteDraft(e.target.value)} rows={2}
              aria-label={`Ghi chú cho mục ${item.title}`}
              placeholder="Tự code lại tới đâu rồi, còn vướng gì…"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />
          </label>
          <button
            type="button"
            onClick={() => { props.onSaveNote(item.key, noteDraft); setNoteSaved(true); window.setTimeout(() => setNoteSaved(false), 2000); }}
            className="mt-2 rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-bold text-white"
          >
            {noteSaved ? "Đã lưu ✓" : "Lưu ghi chú"}
          </button>
        </div>
      )}
    </li>
  );
}

/* ------------------------------ Cards view ------------------------------ */

function CardsView(props: {
  deck: DeckCard[];
  reviewMap: Map<string, State["reviews"][number]>;
  dueCards: DeckCard[];
  today: string;
}) {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["state"] });
  const reviewMut = useMutation({
    mutationFn: (v: { cardKey: string; rating: Rating; today: string; dueOn: string }) => api.reviewCard(v),
    onSuccess: invalidate,
  });
  const addMut = useMutation({
    mutationFn: (v: { front: string; back: string }) => api.addCard(v),
    onSuccess: invalidate,
  });
  const delMut = useMutation({
    mutationFn: (id: number) => api.deleteCard({ id }),
    onSuccess: invalidate,
  });

  const [queue, setQueue] = useState<string[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const cardByKey = useMemo(() => {
    const m = new Map<string, DeckCard>();
    for (const c of props.deck) m.set(c.key, c);
    return m;
  }, [props.deck]);

  const currentKey = queue?.[idx];
  const current = currentKey ? cardByKey.get(currentKey) : undefined;
  const reviewedCount = props.deck.filter((c) => props.reviewMap.has(c.key)).length;

  const startSession = (cards: DeckCard[]) => {
    const keys = cards.map((c) => c.key);
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const a = keys[i]; const b = keys[j];
      if (a !== undefined && b !== undefined) { keys[i] = b; keys[j] = a; }
    }
    setQueue(keys);
    setIdx(0);
    setFlipped(false);
  };

  const rate = (rating: Rating) => {
    if (!current) return;
    reviewMut.mutate({
      cardKey: current.key,
      rating,
      today: props.today,
      dueOn: addDays(props.today, RATING_DAYS[rating]),
    });
    setFlipped(false);
    setIdx((v) => v + 1);
  };

  const sessionDone = queue !== null && idx >= queue.length;

  return (
    <div className="pt-5">
      <h2 className="text-xl font-bold">Flashcards</h2>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Washam khuyên ôn bằng flashcards vì học xong sẽ quên nếu không ôn lại. Thẻ được xếp lịch ôn theo mức độ nhớ của bạn: chưa thuộc +1 ngày, khó +3, nhớ được +7, dễ +16.
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
        <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 ring-1 ring-[var(--border)]">Tổng {props.deck.length} thẻ</span>
        <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 ring-1 ring-[var(--border)]">Đã từng ôn {reviewedCount} thẻ</span>
        <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 ring-1 ring-[var(--border)]">Đến hạn hôm nay: {props.dueCards.length}</span>
      </div>

      {queue === null && (
        <div className="mt-4 rounded-2xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)]">
          {props.dueCards.length > 0 ? (
            <>
              <p className="text-sm font-semibold">Có {props.dueCards.length} thẻ cần ôn hôm nay.</p>
              <button type="button" onClick={() => startSession(props.dueCards)} className="mt-3 w-full rounded-xl bg-[var(--accent)] py-3 text-sm font-bold text-white">
                Bắt đầu ôn {props.dueCards.length} thẻ
              </button>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold">Hôm nay không còn thẻ nào đến hạn. Tốt lắm!</p>
              <button type="button" onClick={() => startSession(props.deck)} className="mt-3 w-full rounded-xl bg-[var(--surface-alt)] py-3 text-sm font-bold">
                Ôn lại toàn bộ {props.deck.length} thẻ
              </button>
            </>
          )}
        </div>
      )}

      {queue !== null && !sessionDone && current && (
        <div className="mt-4">
          <p className="text-center font-mono text-xs text-[var(--dim)]">Thẻ {idx + 1}/{queue.length} · {current.topic}</p>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            aria-label={flipped ? `Đáp án: ${current.back}. Chạm để xem lại câu hỏi` : `Câu hỏi: ${current.front}. Chạm để lật thẻ xem đáp án`}
            className="mt-2 flex min-h-56 w-full flex-col items-center justify-center rounded-2xl bg-[var(--surface)] p-6 text-center ring-1 ring-[var(--border)]"
          >
            {!flipped ? (
              <>
                <span className="text-base font-semibold leading-relaxed">{current.front}</span>
                <span className="mt-4 text-xs font-semibold text-[var(--accent-ink)]">Chạm để lật thẻ</span>
              </>
            ) : (
              <span className="text-base leading-relaxed">{current.back}</span>
            )}
          </button>
          {flipped ? (
            <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label="Đánh giá mức độ nhớ">
              {(Object.keys(RATING_LABEL) as Rating[]).map((r) => (
                <button key={r} type="button" onClick={() => rate(r)} className="rounded-xl bg-[var(--surface)] py-2.5 text-xs font-bold ring-1 ring-[var(--border)]">
                  {RATING_LABEL[r]}
                  <span className="block font-mono text-[10px] font-normal text-[var(--dim)]">+{RATING_DAYS[r]} ngày</span>
                </button>
              ))}
            </div>
          ) : (
            <button type="button" onClick={() => { setQueue(null); setIdx(0); }} className="mt-3 w-full py-2 text-sm font-semibold text-[var(--dim)]">
              Dừng phiên ôn
            </button>
          )}
        </div>
      )}

      {sessionDone && (
        <div className="mt-4 rounded-2xl bg-[var(--surface)] p-4 text-center ring-1 ring-[var(--border)]">
          <p className="text-base font-bold">Xong phiên ôn!</p>
          <p className="mt-1 text-sm text-[var(--dim)]">Các thẻ đã được xếp lịch ôn tiếp theo theo mức độ nhớ bạn vừa chấm.</p>
          <button type="button" onClick={() => { setQueue(null); setIdx(0); }} className="mt-3 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white">
            Quay lại
          </button>
        </div>
      )}

      <section aria-label="Thêm thẻ của bạn" className="mt-6 rounded-2xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)]">
        <h3 className="text-base font-bold">Thêm thẻ của bạn</h3>
        <label className="mt-3 block">
          <span className="text-xs font-semibold text-[var(--dim)]">Mặt trước (câu hỏi)</span>
          <input value={front} onChange={(e) => setFront(e.target.value)} aria-label="Mặt trước của thẻ mới" placeholder="Ví dụ: Độ phức tạp của heapsort?" className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]" />
        </label>
        <label className="mt-2 block">
          <span className="text-xs font-semibold text-[var(--dim)]">Mặt sau (đáp án)</span>
          <textarea value={back} onChange={(e) => setBack(e.target.value)} rows={2} aria-label="Mặt sau của thẻ mới" placeholder="Ví dụ: O(n log n), bộ nhớ phụ O(1), không stable" className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]" />
        </label>
        <button
          type="button"
          disabled={!front.trim() || !back.trim() || addMut.isPending}
          onClick={() => { addMut.mutate({ front: front.trim(), back: back.trim() }); setFront(""); setBack(""); }}
          className="mt-3 w-full rounded-xl bg-[var(--text)] py-2.5 text-sm font-bold text-[var(--bg)] disabled:opacity-40"
        >
          Thêm thẻ
        </button>

        {props.deck.some((c) => c.customId !== undefined) && (
          <ul className="mt-4 divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {props.deck.filter((c) => c.customId !== undefined).map((c) => (
              <li key={c.key} className="flex items-center justify-between gap-3 py-2.5">
                <span className="min-w-0 truncate text-sm">{c.front}</span>
                <button type="button" aria-label={`Xóa thẻ: ${c.front}`} onClick={() => c.customId !== undefined && delMut.mutate(c.customId)} className="shrink-0 rounded-full bg-[var(--surface-alt)] px-2.5 py-1 text-xs font-semibold">
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-label="Lịch ôn sắp tới" className="mt-5">
        <h3 className="text-base font-bold">Lịch ôn sắp tới</h3>
        <ul className="mt-2 space-y-1.5">
          {props.deck
            .filter((c) => { const r = props.reviewMap.get(c.key); return r && r.due_on > props.today; })
            .sort((a, b) => {
              const da = props.reviewMap.get(a.key)?.due_on ?? "";
              const db = props.reviewMap.get(b.key)?.due_on ?? "";
              return da < db ? -1 : 1;
            })
            .slice(0, 8)
            .map((c) => {
              const r = props.reviewMap.get(c.key);
              return (
                <li key={c.key} className="flex items-baseline justify-between gap-2 rounded-xl bg-[var(--surface)] px-3.5 py-2.5 ring-1 ring-[var(--border)]">
                  <span className="min-w-0 truncate text-sm">{c.front}</span>
                  <span className="shrink-0 font-mono text-xs text-[var(--dim)]">{r ? prettyDate(r.due_on) : ""}</span>
                </li>
              );
            })}
          {props.deck.every((c) => { const r = props.reviewMap.get(c.key); return !r || r.due_on <= props.today; }) && (
            <li className="text-sm text-[var(--dim)]">Chưa có thẻ nào được xếp lịch trong tương lai — ôn vài thẻ để bắt đầu.</li>
          )}
        </ul>
      </section>
    </div>
  );
}
