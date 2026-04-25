"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { INTRO } from "@/content/site";

export function Intro() {
  return (
    <section className="section-padding bg-[var(--color-bg)]" id="about">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          {/* Left: headline */}
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-5">{INTRO.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="prose-copper font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl"
                dangerouslySetInnerHTML={{ __html: INTRO.headline }}
              />
            </ScrollReveal>
          </div>

          {/* Right: body with drop cap */}
          <div className="text-[17px] leading-[1.7] text-[var(--color-text-muted)]">
            {INTRO.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                <p
                  className={`prose-copper mb-5 last:mb-0 ${
                    i === 0
                      ? "[&::first-letter]:float-left [&::first-letter]:pr-3.5 [&::first-letter]:pt-2 [&::first-letter]:font-serif [&::first-letter]:text-7xl [&::first-letter]:leading-[0.85] [&::first-letter]:text-[var(--color-accent)]"
                      : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
