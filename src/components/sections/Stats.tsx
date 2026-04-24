"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/content/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
}

const STATS: Stat[] = [
  { value: new Date().getFullYear() - COMPANY.founded, suffix: "+", label: "Years" },
  { value: 500, suffix: "K+", label: "Cores / Month" },
  { value: 12, suffix: "+", label: "Countries" },
  { value: 0, suffix: "", label: COMPANY.certifications, isText: true },
];

function CounterCell({ stat, index }: { stat: Stat; index: number }) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el || stat.isText) return;

    const proxy = { val: 0 };
    const tween = gsap.to(proxy, {
      val: stat.value,
      duration: 2,
      delay: index * 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = `${Math.round(proxy.val)}${stat.suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stat, index]);

  if (stat.isText) {
    return (
      <div className="text-center">
        <span className="block font-serif text-3xl text-white md:text-4xl lg:text-5xl">
          ISO
        </span>
        <span className="mt-2 block text-sm tracking-widest text-white/50">
          {stat.label}
        </span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <span
        ref={numRef}
        className="block font-serif text-3xl text-white md:text-4xl lg:text-5xl"
      >
        0
      </span>
      <span className="mt-2 block text-sm tracking-widest text-white/50">
        {stat.label}
      </span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-[#1e1610] py-16 md:py-20" aria-label="Key statistics">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((stat, i) => (
            <CounterCell key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
