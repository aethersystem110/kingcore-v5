"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { INDUSTRIES_SECTION } from "@/content/site";

export function Industries() {
  return (
    <section
      id="industries"
      className="section-cv bg-[var(--color-bg)] py-20 md:py-[140px]"
      aria-labelledby="industries-heading"
    >
      <Container>
        {/* Header */}
        <div className="mb-16 grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-5">{INDUSTRIES_SECTION.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                id="industries-heading"
                className="prose-copper font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl"
                dangerouslySetInnerHTML={{
                  __html: INDUSTRIES_SECTION.headline,
                }}
              />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <p className="max-w-[480px] text-base leading-relaxed text-[var(--color-text-muted)]">
              {INDUSTRIES_SECTION.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 border-t border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES_SECTION.items.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.04}>
              <div
                className={`relative border-b border-[var(--color-border)] py-9 pr-7 transition-colors duration-300 hover:bg-[var(--color-bg-alt)] ${
                  (i + 1) % 4 !== 0 ? "lg:border-r" : "lg:border-r-0"
                } ${(i + 1) % 2 !== 0 ? "sm:border-r" : "sm:border-r-0"}`}
              >
                <span className="absolute right-3.5 top-5 font-serif text-sm italic text-[var(--color-accent)]">
                  {ind.num}
                </span>
                <h3 className="pl-7 font-serif text-2xl leading-[1.15] tracking-tight">
                  {ind.name}
                </h3>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {ind.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
