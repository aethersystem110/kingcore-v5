"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QUALITY_SECTION } from "@/content/site";

export function Quality() {
  return (
    <section
      id="quality"
      className="bg-[var(--color-night-dark)] py-[90px] text-[var(--color-paper)] md:py-[140px]"
      aria-labelledby="quality-heading"
    >
      <Container>
        {/* Header */}
        <div className="mb-[72px]">
          <ScrollReveal>
            <p className="eyebrow mb-5">{QUALITY_SECTION.eyebrow}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              id="quality-heading"
              className="prose-copper max-w-[820px] font-serif text-4xl leading-[1.02] tracking-tight text-[var(--color-paper)] md:text-5xl lg:text-6xl"
              dangerouslySetInnerHTML={{ __html: QUALITY_SECTION.headline }}
            />
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-12">
          {QUALITY_SECTION.items.map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 0.1}>
              <div className="border-t border-[var(--color-paper)]/15 pt-8">
                <span className="mb-4 block font-serif text-sm italic text-[var(--color-accent)]">
                  {item.num}
                </span>
                <h3
                  className="prose-copper mb-4 font-serif text-[30px] leading-[1.1] tracking-tight text-[var(--color-paper)]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="text-[15.5px] leading-[1.65] text-[var(--color-paper)]/65">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
