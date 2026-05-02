"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
  );
  return sharedObserver;
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
    el.style.setProperty("--reveal-y", `${y}px`);
    el.style.setProperty("--reveal-delay", `${delay}s`);
    el.style.setProperty("--reveal-duration", `${duration}s`);
    const observer = getObserver();
    if (!observer) {
      el.dataset.revealed = "true";
      return;
    }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [delay, y, duration]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
