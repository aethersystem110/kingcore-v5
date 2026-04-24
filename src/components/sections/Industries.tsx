"use client";

import {
  Shirt,
  ScrollText,
  Disc,
  Cable,
  Building2,
  Layers,
  UtensilsCrossed,
  Package,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { INDUSTRIES } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Shirt,
  Scroll: ScrollText,
  Tape: Disc,
  Cable,
  Building2,
  Layers,
  UtensilsCrossed,
  Package,
};

export function Industries() {
  return (
    <section
      id="industries"
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="industries-heading"
    >
      <Container>
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Industries
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            id="industries-heading"
            className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl"
          >
            Made for every industry that ships, winds, or rolls.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICON_MAP[ind.icon] ?? Package;
            return (
              <ScrollReveal key={ind.name} delay={i * 0.06}>
                <div className="group rounded-xl border border-transparent bg-[var(--color-surface)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-md">
                  <Icon
                    className="h-6 w-6 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {ind.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
