"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATS_SECTION } from "@/content/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CounterCell({
  item,
  index,
}: {
  item: (typeof STATS_SECTION.items)[number];
  index: number;
}) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const proxy = { val: 0 };
    const tween = gsap.to(proxy, {
      val: item.value,
      duration: 1.6,
      delay: index * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = item.decimals
          ? proxy.val.toFixed(item.decimals)
          : String(Math.round(proxy.val));
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [item, index]);

  return (
    <div
      className={`px-4 py-8 sm:px-7 sm:py-12 ${
        index % 2 === 0 ? "border-r border-[var(--color-paper)]/12" : ""
      } ${index < 2 ? "border-b border-[var(--color-paper)]/12 md:border-b-0" : ""} ${
        index < STATS_SECTION.items.length - 1 ? "md:border-r md:border-[var(--color-paper)]/12" : ""
      }`}
    >
      <div className="mb-6 text-[10.5px] font-medium uppercase tracking-[0.24em] text-[var(--color-paper)]/45">
        {item.key}
      </div>
      <div className="font-serif text-4xl leading-[0.95] tracking-tight text-[var(--color-paper)] sm:text-6xl md:text-7xl lg:text-8xl">
        {"prefix" in item && item.prefix && (
          <span className="text-[0.55em] italic text-[var(--color-accent)]">
            {item.prefix}
          </span>
        )}
        <span ref={numRef}>0</span>
        <span className="ml-1.5 text-[0.42em] italic tracking-normal text-[var(--color-accent)]">
          {item.suffix}
        </span>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="about" className="bg-[var(--color-night)] py-[90px] text-[var(--color-paper)] md:py-[120px]">
      <Container>
        {/* Header */}
        <div className="mb-[72px] grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-5">{STATS_SECTION.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="prose-copper font-serif text-4xl leading-[1.02] tracking-tight text-[var(--color-paper)] md:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: STATS_SECTION.headline }}
              />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <p className="max-w-[480px] text-base leading-relaxed text-[var(--color-paper)]/60">
              {STATS_SECTION.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 border-y border-[var(--color-paper)]/12 md:grid-cols-4">
            {STATS_SECTION.items.map((item, i) => (
              <CounterCell key={item.key} item={item} index={i} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
