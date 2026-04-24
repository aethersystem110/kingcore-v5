"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ABOUT } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[var(--color-surface)]"
      aria-labelledby="about-heading"
    >
      <Container>
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
            About
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            id="about-heading"
            className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl"
          >
            {ABOUT.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-5 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-3">
            {ABOUT.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)] first:mt-0 md:text-lg">
                  {p}
                </p>
              </ScrollReveal>
            ))}

            {/* Sustainability note */}
            <ScrollReveal delay={0.4}>
              <p className="mt-8 border-l-2 border-[var(--color-accent)]/40 pl-5 text-sm italic leading-relaxed text-[var(--color-text-muted)]">
                Our kraft paper is sourced from managed plantations and
                recycled-content mills. Winding offcuts are collected and
                returned to the paper cycle — nothing goes to landfill.
              </p>
            </ScrollReveal>
          </div>

          {/* Facts */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 lg:gap-8">
                {ABOUT.facts.map((fact) => (
                  <div key={fact.label}>
                    <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                      {fact.label}
                    </span>
                    <span className="mt-1 block font-serif text-xl text-[var(--color-text)] md:text-2xl">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
