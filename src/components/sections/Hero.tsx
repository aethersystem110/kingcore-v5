"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_SLIDES } from "@/content/site";
import { BASE_PATH } from "@/lib/basePath";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 139;
const PRELOAD_BATCH = 12;

function frameUrl(index: number, mobile: boolean): string {
  const dir = mobile ? "hero-frames-mobile" : "hero-frames";
  const n = String(index + 1).padStart(3, "0");
  return `${BASE_PATH}/${dir}/f_${n}.jpg`;
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  if (!iw || !ih) return;
  const scale = Math.max(w / iw, h / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = (w - dw) / 2;
  const dy = (h - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameStateRef = useRef<{ current: number; pending: number }>({ current: -1, pending: 0 });
  const rafRef = useRef<number | null>(null);

  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = images;

    let cancelled = false;
    let loaded = 0;
    const loadOne = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = frameUrl(i, mobile);
        const done = () => {
          if (cancelled) return;
          loaded += 1;
          setProgress(loaded / FRAME_COUNT);
          resolve();
        };
        img.onload = done;
        img.onerror = done;
        images[i] = img;
      });

    (async () => {
      const head: Promise<void>[] = [];
      for (let i = 0; i < Math.min(PRELOAD_BATCH, FRAME_COUNT); i += 1) head.push(loadOne(i));
      await Promise.all(head);
      if (cancelled) return;
      setReady(true);
      for (let i = PRELOAD_BATCH; i < FRAME_COUNT; i += 1) {
        if (cancelled) return;
        await loadOne(i);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const idx = Math.max(0, frameStateRef.current.current);
      const img = imagesRef.current[idx];
      if (img && img.complete) drawCover(ctx, img, w, h);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const logo = logoRef.current;
    const s1 = slide1Ref.current;
    const s2 = slide2Ref.current;
    const s3 = slide3Ref.current;
    const hint = scrollHintRef.current;
    if (!section || !canvas || !s1 || !s2 || !s3) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const drawFrame = (idx: number) => {
      const clamped = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(idx)));
      const state = frameStateRef.current;
      if (clamped === state.current) return;
      const img = imagesRef.current[clamped];
      if (!img || !img.complete || !img.naturalWidth) {
        for (let step = 1; step < FRAME_COUNT; step += 1) {
          const back = clamped - step;
          if (back >= 0) {
            const alt = imagesRef.current[back];
            if (alt && alt.complete && alt.naturalWidth) {
              drawCover(ctx, alt, canvas.clientWidth, canvas.clientHeight);
              break;
            }
          }
        }
        return;
      }
      drawCover(ctx, img, canvas.clientWidth, canvas.clientHeight);
      state.current = clamped;
    };

    const frame = { value: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
      onUpdate: () => {
        if (rafRef.current != null) return;
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          drawFrame(frame.value);
        });
      },
    });

    tl.to(frame, { value: FRAME_COUNT - 1, ease: "none", duration: 1 }, 0);

    if (logo) {
      tl.fromTo(logo, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0.92, duration: 0.05, ease: "power2.in" }, 0);
    }

    tl.fromTo(s1, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.05);
    tl.to(s1, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.20);

    tl.fromTo(s2, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.35);
    tl.to(s2, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.50);

    tl.fromTo(s3, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.65);
    tl.to(s3, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.85);

    if (hint) tl.to(hint, { autoAlpha: 0, duration: 0.05 }, 0.03);

    drawFrame(0);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [ready]);

  const pct = Math.round(progress * 100);

  return (
    <section ref={sectionRef} className="relative h-[300vh] md:h-[400vh]" aria-label="Hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full bg-[var(--color-night)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/18 to-black/55" />

        {/* Branded loader */}
        <div
          className={`absolute inset-0 z-30 flex items-center justify-center bg-[var(--color-bg)] transition-opacity duration-700 ${
            ready ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          style={{ transitionTimingFunction: "var(--ease)" }}
          aria-hidden={ready}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="font-serif text-4xl tracking-tight text-[var(--color-text)]">
              King
              <span className="mx-2 mb-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] align-middle" />
              core
            </div>
            <div className="relative h-px w-32 overflow-hidden bg-black/10">
              <div
                className="absolute inset-y-0 left-0 bg-[var(--color-accent)] transition-[width] duration-300"
                style={{ width: `${Math.max(8, pct)}%` }}
              />
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] tabular-nums">
              {pct}%
            </div>
          </div>
        </div>

        {/* Center logo mark */}
        <div ref={logoRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-[18px]">
          <span
            className="font-serif leading-none text-white drop-shadow-[0_4px_60px_rgba(0,0,0,.4)]"
            style={{ fontSize: "clamp(64px, 12vw, 180px)", letterSpacing: "-0.005em" }}
          >
            King
            <span className="mx-3 mb-3.5 inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] align-middle" />
            core
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/70">
            Precision Paper Tubes &amp; Cores · Lahore
          </span>
        </div>

        {/* Text overlays */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div ref={slide1Ref} className="invisible absolute px-6 text-center">
            <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--color-accent)]">
              {HERO_SLIDES[0].eyebrow}
            </span>
            <h1
              className="prose-copper font-serif leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_60px_rgba(0,0,0,.4)]"
              style={{ fontSize: "clamp(38px, 6.6vw, 96px)" }}
              dangerouslySetInnerHTML={{ __html: HERO_SLIDES[0].headline }}
            />
            <p
              className="mx-auto mt-6 max-w-[560px] text-white/78"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: 1.6 }}
            >
              {HERO_SLIDES[0].subtext}
            </p>
          </div>

          <div ref={slide2Ref} className="invisible absolute px-6 text-center">
            <h2
              className="prose-copper font-serif leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_60px_rgba(0,0,0,.4)]"
              style={{ fontSize: "clamp(38px, 6.6vw, 96px)" }}
              dangerouslySetInnerHTML={{ __html: HERO_SLIDES[1].headline }}
            />
            <p
              className="mx-auto mt-6 max-w-[560px] text-white/78"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: 1.6 }}
            >
              {HERO_SLIDES[1].subtext}
            </p>
          </div>

          <div ref={slide3Ref} className="invisible absolute px-6 text-center">
            <h2
              className="prose-copper font-serif leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_60px_rgba(0,0,0,.4)]"
              style={{ fontSize: "clamp(38px, 6.6vw, 96px)" }}
              dangerouslySetInnerHTML={{ __html: HERO_SLIDES[2].headline }}
            />
            <p
              className="mx-auto mt-6 max-w-[560px] text-white/78"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: 1.6 }}
            >
              {HERO_SLIDES[2].subtext}
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div ref={scrollHintRef} className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2.5 text-white/55">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="relative h-10 w-px overflow-hidden bg-white/30">
              <span
                className="absolute inset-0 bg-[var(--color-accent)]"
                style={{ animation: "scroll-fall 2.4s var(--ease) infinite" }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
