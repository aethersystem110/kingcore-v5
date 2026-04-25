"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQ_SECTION } from "@/content/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[var(--color-bg)] py-20 md:py-[140px]"
      aria-labelledby="faq-heading"
    >
      <Container>
        {/* Header */}
        <div className="mb-16 grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-5">{FAQ_SECTION.eyebrow}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <h2
              id="faq-heading"
              className="prose-copper font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl"
              dangerouslySetInnerHTML={{ __html: FAQ_SECTION.headline }}
            />
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <div className="border-t border-[var(--color-border)]">
          {FAQ_SECTION.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={item.num} delay={i * 0.04}>
                <div
                  className="cursor-pointer border-b border-[var(--color-border)] py-8 transition-[padding] duration-300"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <div className="grid grid-cols-[40px_1fr_32px] items-start gap-4 md:grid-cols-[64px_1fr_40px] md:gap-6">
                    {/* Number */}
                    <span className="pt-1.5 font-serif text-lg italic text-[var(--color-accent)]">
                      {item.num}
                    </span>

                    {/* Q + A */}
                    <div>
                      <h3
                        className="prose-copper font-serif text-2xl leading-[1.25] tracking-tight md:text-[26px]"
                        dangerouslySetInnerHTML={{ __html: item.question }}
                      />
                      <div
                        className={`overflow-hidden text-base leading-[1.7] text-[var(--color-text-muted)] transition-all duration-500 ${
                          isOpen ? "mt-4 max-h-[300px]" : "max-h-0"
                        }`}
                        style={{ transitionTimingFunction: "var(--ease)" }}
                      >
                        {item.answer}
                      </div>
                    </div>

                    {/* Toggle */}
                    <span
                      className={`text-right font-serif text-3xl leading-none text-[var(--color-accent)] transition-transform duration-400 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      style={{ transitionTimingFunction: "var(--ease)" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
