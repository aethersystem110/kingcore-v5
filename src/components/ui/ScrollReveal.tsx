"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, duration]);

  return (
    <div ref={ref} className={`invisible ${className}`}>
      {children}
    </div>
  );
}
