"use client";

import { Ruler, Scissors, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QUALITY_FEATURES, COMPANY } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const ICONS: LucideIcon[] = [Ruler, Scissors, PackageCheck];

export function Quality() {
  return (
    <section
      id="quality"
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="quality-heading"
    >
      <Container>
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Quality &amp; Capability
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            id="quality-heading"
            className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl"
          >
            Precision you can build a roll around.
          </h2>
        </ScrollReveal>

        {/* Features */}
        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {QUALITY_FEATURES.map((feat, i) => {
            const Icon = ICONS[i];
            return (
              <ScrollReveal key={feat.title} delay={i * 0.08}>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                    <Icon
                      className="h-6 w-6 text-[var(--color-accent)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-text)]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {feat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Trust bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[var(--color-border)] pt-10">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {COMPANY.certifications}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Shipping to {COMPANY.shippingTo}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Made in {COMPANY.location}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
