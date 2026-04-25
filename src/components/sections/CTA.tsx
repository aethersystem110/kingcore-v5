"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTA_SECTION, CONTACT } from "@/content/site";

export function CTA() {
  return (
    <section className="relative border-t border-[var(--color-border)] bg-[var(--color-accent-light)] py-24 text-center sm:py-32 md:py-40 lg:py-44">
      <Container>
        <ScrollReveal>
          <p className="eyebrow mb-6">{CTA_SECTION.eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="prose-copper mx-auto max-w-[920px] font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl md:text-7xl lg:text-[104px]"
            dangerouslySetInnerHTML={{ __html: CTA_SECTION.headline }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-11 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-3.5 rounded-full bg-[var(--color-text)] px-9 py-4 text-sm font-medium text-[var(--color-paper)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent)] sm:w-auto sm:py-5"
            >
              <span>Get a quote</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3.5 rounded-full border border-[var(--color-text)] bg-transparent px-9 py-4 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:bg-[var(--color-text)] hover:text-[var(--color-paper)] sm:w-auto sm:py-5"
            >
              WhatsApp Sir Ali
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[var(--color-text-muted)]">
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              {CONTACT.email}
            </a>
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-[var(--color-accent)]" />
            <a
              href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              {CONTACT.phone}
            </a>
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-[var(--color-accent)]" />
            <span>Lahore, Pakistan · 24-hour response</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
