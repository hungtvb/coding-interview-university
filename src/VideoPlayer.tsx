// In-site YouTube player with watch-progress tracking.
//
// The IFrame API script is loaded once (singleton promise) and every player
// is created on the privacy-enhanced youtube-nocookie host. While a video
// plays we poll position/duration every 2s and report progress upwards —
// throttled, and as a "max ever reached" percentage, so scrubbing back
// never lowers a learner's recorded progress. Reaching >=90% or the ENDED
// state is reported as 100%. If a saved position exists (>5s, <90% seen)
// playback resumes from there via playerVars.start.

import { useEffect, useRef, useState } from "react";
import type { CatalogItem } from "./data/catalog";

/* eslint-disable @typescript-eslint/no-explicit-any */
type YTNamespace = any;
type YTPlayer = any;

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export interface YouTubeEmbed {
  kind: "video" | "playlist";
  id: string;
}

/** Parse a YouTube URL into an embeddable target, or null when not embeddable. */
export function parseYouTubeUrl(url: string): YouTubeEmbed | null {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return null;
  }
  const host = u.hostname.replace(/^(www\.|m\.)/, "");
  if (host !== "youtube.com" && host !== "youtu.be" && host !== "youtube-nocookie.com") {
    return null;
  }
  const list = u.searchParams.get("list");
  if (host === "youtu.be") {
    const id = u.pathname.slice(1).split("/")[0] ?? "";
    if (list) return { kind: "playlist", id: list };
    return id ? { kind: "video", id } : null;
  }
  if (u.pathname === "/playlist") {
    return list ? { kind: "playlist", id: list } : null;
  }
  if (u.pathname === "/watch") {
    // A watch URL carrying a list is played as that playlist (the specific
    // video is part of it); extra params like index/t are ignored.
    if (list) return { kind: "playlist", id: list };
    const v = u.searchParams.get("v");
    return v ? { kind: "video", id: v } : null;
  }
  if (u.pathname.startsWith("/embed/")) {
    const id = u.pathname.split("/")[2] ?? "";
    return id ? { kind: "video", id } : null;
  }
  // Channel/user pages etc. are not directly embeddable.
  return null;
}

/** First embeddable YouTube link of an item (watch, playlist or youtu.be). */
export function findYouTubeEmbed(item: CatalogItem): YouTubeEmbed | null {
  for (const l of item.links) {
    const embed = parseYouTubeUrl(l.url);
    if (embed) return embed;
  }
  return null;
}

let apiPromise: Promise<YTNamespace> | null = null;

function loadYouTubeApi(): Promise<YTNamespace> {
  if (typeof window !== "undefined" && window.YT?.Player) {
    return Promise.resolve(window.YT);
  }
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<YTNamespace>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prev) prev();
      resolve(window.YT);
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.head.appendChild(tag);
  });
  return apiPromise;
}

export function VideoPlayer(props: {
  itemKey: string;
  embed: YouTubeEmbed;
  /** Saved playback position (seconds) to resume from. */
  startSec: number;
  /** Saved watched percentage (0-100, max ever reached). */
  startPct: number;
  /** Throttled progress reports; `ended` is true only on the ENDED state. */
  onProgress: (pct: number, posSec: number, ended: boolean) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer>(null);
  const cbRef = useRef(props.onProgress);
  cbRef.current = props.onProgress;
  const lastSentRef = useRef({ pct: props.startPct, pos: props.startSec });
  const startedRef = useRef(props.startPct > 0);
  const finishedRef = useRef(props.startPct >= 90);
  const [displayPct, setDisplayPct] = useState(props.startPct);
  const [ready, setReady] = useState(false);
  const embedKey = `${props.embed.kind}:${props.embed.id}`;
  const { itemKey, startSec, startPct } = props;

  useEffect(() => {
    let cancelled = false;
    let interval: number | undefined;

    lastSentRef.current = { pct: startPct, pos: startSec };
    startedRef.current = startPct > 0;
    finishedRef.current = startPct >= 90;
    setDisplayPct(startPct);
    setReady(false);

    const report = (pct: number, pos: number, ended: boolean) => {
      lastSentRef.current = { pct, pos };
      if (pct > 0) startedRef.current = true;
      if (pct >= 90) finishedRef.current = true;
      cbRef.current(pct, pos, ended);
    };

    const poll = () => {
      const p = playerRef.current;
      if (!p || typeof p.getCurrentTime !== "function") return;
      const dur = Number(p.getDuration?.() ?? 0);
      const cur = Number(p.getCurrentTime?.() ?? 0);
      if (!dur || !Number.isFinite(dur) || dur <= 0) return;
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
      setDisplayPct((prev) => Math.max(prev, pct));
      if (pct >= 90) {
        if (!finishedRef.current) report(100, cur, false);
        return;
      }
      const last = lastSentRef.current;
      const firstPlay = !startedRef.current && pct > 0;
      if (firstPlay || pct - last.pct >= 2 || Math.abs(cur - last.pos) >= 15) {
        report(pct, cur, false);
      }
    };

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled || !YT?.Player || !hostRef.current) return;
        const mount = document.createElement("div");
        mount.style.width = "100%";
        mount.style.height = "100%";
        hostRef.current.innerHTML = "";
        hostRef.current.appendChild(mount);

        const resumeAt = startSec > 5 && startPct < 90 ? Math.floor(startSec) : 0;
        const playerVars: Record<string, string | number> = {
          rel: 0,
          playsinline: 1,
        };
        if (resumeAt > 0) playerVars.start = resumeAt;
        const isPlaylist = props.embed.kind === "playlist";
        if (isPlaylist) {
          playerVars.listType = "playlist";
          playerVars.list = props.embed.id;
        }

        playerRef.current = new YT.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          ...(isPlaylist ? {} : { videoId: props.embed.id }),
          playerVars,
          events: {
            onReady: () => {
              if (!cancelled) setReady(true);
            },
            onStateChange: (e: { data: number }) => {
              const states = window.YT?.PlayerState ?? { ENDED: 0, PAUSED: 2 };
              const p = playerRef.current;
              if (!p || typeof p.getCurrentTime !== "function") return;
              if (e.data === states.ENDED) {
                const dur = Number(p.getDuration?.() ?? 0);
                setDisplayPct(100);
                report(100, dur, true);
              } else if (e.data === states.PAUSED) {
                const dur = Number(p.getDuration?.() ?? 0);
                const cur = Number(p.getCurrentTime?.() ?? 0);
                if (dur > 0) {
                  const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
                  setDisplayPct((prev) => Math.max(prev, pct));
                  report(pct, cur, false);
                }
              }
            },
          },
        });
        interval = window.setInterval(poll, 2000);
      })
      .catch(() => {
        // API unreachable (offline / blocked): the detail still shows the
        // note editor and links, just no player.
      });

    return () => {
      cancelled = true;
      if (interval !== undefined) window.clearInterval(interval);
      try {
        playerRef.current?.destroy?.();
      } catch {
        // Player already gone.
      }
      playerRef.current = null;
    };
    // The player is (re)created only per item/embed; start position and
    // callbacks are captured via refs on purpose.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemKey, embedKey]);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-[var(--border)]">
        <div ref={hostRef} className="absolute inset-0 [&>iframe]:h-full [&>iframe]:w-full" />
        {!ready && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium text-white/70">
            Đang tải video…
          </div>
        )}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--surface-alt)]"
          role="progressbar"
          aria-valuenow={Math.round(displayPct)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Phần trăm video đã xem"
        >
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all"
            style={{ width: `${Math.min(100, Math.max(0, displayPct))}%` }}
          />
        </div>
        <span className="shrink-0 font-mono text-xs text-[var(--dim)]">
          {Math.round(displayPct)}% đã xem
        </span>
      </div>
    </div>
  );
}
