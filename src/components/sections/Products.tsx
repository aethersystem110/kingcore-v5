"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCT_SPECS, PRODUCT_TYPES } from "@/content/site";

const SPEC_ROWS = [
  {
    label: "Inner Diameter",
    value: `${PRODUCT_SPECS.diameterRange.min}″ – ${PRODUCT_SPECS.diameterRange.max}″`,
  },
  {
    label: "Wall Thickness",
    value: `${PRODUCT_SPECS.wallThickness.min} – ${PRODUCT_SPECS.wallThickness.max} ${PRODUCT_SPECS.wallThickness.unit}`,
  },
  { label: "Length", value: PRODUCT_SPECS.length },
  { label: "Finish", value: PRODUCT_SPECS.finish.join(" · ") },
  { label: "Construction", value: PRODUCT_SPECS.construction },
];

export function Products() {
  return (
    <section
      id="products"
      className="section-padding bg-[var(--color-surface)]"
      aria-labelledby="products-heading"
    >
      <Container>
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Products
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            id="products-heading"
            className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl"
          >
            Built to your spec.
          </h2>
        </ScrollReveal>

        {/* Specs table */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-xl border border-[var(--color-border)] md:mt-16">
            {SPEC_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i < SPEC_ROWS.length - 1
                    ? "border-b border-[var(--color-border)]"
                    : ""
                }`}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  {row.label}
                </span>
                <span className="text-base text-[var(--color-text)] sm:text-right">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Product types */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {PRODUCT_TYPES.map((type, i) => (
            <ScrollReveal key={type.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 md:p-8">
                <h3 className="font-serif text-xl text-[var(--color-text)] md:text-2xl">
                  {type.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {type.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
                >
                  Request a quote
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
