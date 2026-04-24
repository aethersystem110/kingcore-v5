"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_SLIDES } from "@/content/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Kickstart video loading — mobile browsers need encouragement
  const initVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    // On mobile, a play/pause nudge can trigger buffering
    video.play().then(() => video.pause()).catch(() => {});
  }, []);

  // Video ready handler
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => setLoaded(true);

    if (video.readyState >= 3) {
      setLoaded(true);
    } else {
      video.addEventListener("canplaythrough", onReady, { once: true });
      // Also accept loadeddata as fallback for mobile
      video.addEventListener("loadeddata", onReady, { once: true });
      initVideo();
    }

    return () => {
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("loadeddata", onReady);
    };
  }, [initVideo]);

  // GSAP scroll-scrub timeline
  useEffect(() => {
    if (!loaded) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    const s1 = slide1Ref.current;
    const s2 = slide2Ref.current;
    const s3 = slide3Ref.current;
    const hint = scrollHintRef.current;
    if (!section || !video || !s1 || !s2 || !s3) return;

    const duration = video.duration || 23;

    // Main timeline — scrubbed by scroll position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Video playback bound to scroll
    tl.to(video, { currentTime: duration, ease: "none", duration: 1 }, 0);

    // ── Slide 1: 5%–25% ───────────────────────────────
    tl.fromTo(s1, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.05);
    tl.to(s1, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.20);

    // ── Slide 2: 35%–55% ──────────────────────────────
    tl.fromTo(s2, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.35);
    tl.to(s2, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.50);

    // ── Slide 3: 65%–90% ──────────────────────────────
    tl.fromTo(s3, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.65);
    tl.to(s3, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.85);

    // Fade out scroll hint early
    if (hint) {
      tl.to(hint, { autoAlpha: 0, duration: 0.05 }, 0.03);
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] md:h-[400vh]"
      aria-label="Hero"
    >
      {/* Sticky viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          muted
          preload="auto"
          poster="/hero_poster.jpg"
        >
          <source src="/hero_hevc.mp4" type='video/mp4; codecs="hvc1"' />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* ── Branded loading overlay ────────────────── */}
        <div
          className={`absolute inset-0 z-30 flex items-center justify-center bg-[var(--color-bg)] transition-opacity duration-700 ${
            loaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-hidden={loaded}
        >
          <div className="flex flex-col items-center gap-6">
            <span className="font-serif text-3xl text-[var(--color-text)] md:text-4xl">
              Kingcore
            </span>
            <div className="h-px w-16 animate-pulse bg-[var(--color-accent)]" />
          </div>
        </div>

        {/* ── Text overlays ────────────────────────── */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {/* Slide 1 */}
          <div
            ref={slide1Ref}
            className="invisible absolute px-6 text-center"
          >
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-white/70 md:text-sm">
              {HERO_SLIDES[0].eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {HERO_SLIDES[0].headline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/65 md:text-lg lg:text-xl">
              {HERO_SLIDES[0].subtext}
            </p>
          </div>

          {/* Slide 2 */}
          <div
            ref={slide2Ref}
            className="invisible absolute px-6 text-center"
          >
            <h2 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {HERO_SLIDES[1].headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/65 md:text-lg lg:text-xl">
              {HERO_SLIDES[1].subtext}
            </p>
          </div>

          {/* Slide 3 */}
          <div
            ref={slide3Ref}
            className="invisible absolute px-6 text-center"
          >
            <h2 className="font-serif text-3xl leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {HERO_SLIDES[2].headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/65 md:text-lg lg:text-xl">
              {HERO_SLIDES[2].subtext}
            </p>
          </div>
        </div>

        {/* ── Scroll indicator ─────────────────────── */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Scroll
            </p>
            <div className="h-10 w-px bg-white/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
