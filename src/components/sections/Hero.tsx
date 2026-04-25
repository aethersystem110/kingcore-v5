"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_SLIDES } from "@/content/site";
import { BASE_PATH } from "@/lib/basePath";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const initVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().then(() => video.pause()).catch(() => {});
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onReady = () => setLoaded(true);
    if (video.readyState >= 3) {
      setLoaded(true);
    } else {
      video.addEventListener("canplaythrough", onReady, { once: true });
      video.addEventListener("loadeddata", onReady, { once: true });
      // Fallback: dismiss loader after 3s even if video hasn't loaded
      const fallback = setTimeout(onReady, 3000);
      initVideo();
      return () => {
        clearTimeout(fallback);
        video.removeEventListener("canplaythrough", onReady);
        video.removeEventListener("loadeddata", onReady);
      };
    }
    return () => {
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("loadeddata", onReady);
    };
  }, [initVideo]);

  useEffect(() => {
    if (!loaded) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    const logo = logoRef.current;
    const s1 = slide1Ref.current;
    const s2 = slide2Ref.current;
    const s3 = slide3Ref.current;
    const hint = scrollHintRef.current;
    if (!section || !video || !s1 || !s2 || !s3) return;

    const duration = video.duration || 23;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
      },
    });

    tl.to(video, { currentTime: duration, ease: "none", duration: 1 }, 0);

    if (logo) {
      tl.fromTo(logo, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0.9, duration: 0.04, ease: "power2.in" }, 0);
    }

    tl.fromTo(s1, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.05);
    tl.to(s1, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.20);

    tl.fromTo(s2, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.35);
    tl.to(s2, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.50);

    tl.fromTo(s3, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.65);
    tl.to(s3, { autoAlpha: 0, y: -20, duration: 0.06 }, 0.85);

    if (hint) tl.to(hint, { autoAlpha: 0, duration: 0.05 }, 0.03);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loaded]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] md:h-[400vh]" aria-label="Hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover bg-[var(--color-night)]"
          playsInline
          muted
          preload="auto"
          poster={`${BASE_PATH}/hero_poster.jpg`}
        >
          <source src={`${BASE_PATH}/hero_hevc.mp4`} type='video/mp4; codecs="hvc1"' />
          <source src={`${BASE_PATH}/hero.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/18 to-black/55" />

        {/* Branded loader */}
        <div
          className={`absolute inset-0 z-30 flex items-center justify-center bg-[var(--color-bg)] transition-opacity duration-800 ${
            loaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          style={{ transitionTimingFunction: "var(--ease)" }}
          aria-hidden={loaded}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="font-serif text-4xl tracking-tight text-[var(--color-text)]">
              King
              <span className="mx-2 mb-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] align-middle" />
              core
            </div>
            <div className="relative h-px w-16 overflow-hidden bg-[var(--color-accent)]">
              <div
                className="absolute inset-0 bg-[var(--color-bg)]"
                style={{ animation: "marquee-scroll 1.4s var(--ease) infinite alternate" }}
              />
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
