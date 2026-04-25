"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROCESS_CHAPTERS } from "@/content/site";
import { PROCESS_SVGS } from "./ProcessSVGs";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-warm)]"
      aria-labelledby="process-heading"
    >
      {/* Header */}
      <div className="section-padding pb-14">
        <Container>
          <ScrollReveal>
            <p className="eyebrow mb-5">The Method · Five Chapters</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              id="process-heading"
              className="prose-copper max-w-[820px] font-serif text-4xl leading-[1.0] tracking-tight md:text-5xl lg:text-6xl"
              dangerouslySetInnerHTML={{
                __html: "From kraft ribbon to <em>despatched core</em>.",
              }}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--color-text-muted)]">
              Five operations, each measured. The same five every Kingcore tube
              passes through — from the reels at the inlet to the
              inspector&rsquo;s stamp at the dock.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      {/* Horizontal scroll rail */}
      <div className="flex gap-6 overflow-x-auto px-[var(--container-px)] pb-24 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {PROCESS_CHAPTERS.map((ch, i) => (
          <ScrollReveal key={ch.num} delay={i * 0.08}>
            <article className="flex w-[520px] flex-shrink-0 flex-col overflow-hidden rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-36px_rgba(61,43,31,.22)] md:min-h-[660px]">
              {/* Vis area */}
              <div className="relative flex h-[340px] items-center justify-center border-b border-[var(--color-border-light)] bg-[var(--color-bg-warm)]">
                <span className="absolute left-6 top-5 font-serif text-xl italic text-[var(--color-accent)]">
                  {ch.num}
                </span>
                <span className="absolute right-6 top-5 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[var(--color-text-faint)]">
                  {ch.fig}
                </span>
                {/* Technical illustration */}
                {(() => {
                  const SvgComponent = PROCESS_SVGS[i];
                  return SvgComponent ? <SvgComponent /> : null;
                })()}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 p-9">
                <h3
                  className="prose-copper font-serif text-[34px] leading-[1.04] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: ch.title }}
                />
                <p className="text-[15.5px] leading-[1.65] text-[var(--color-text-muted)]">
                  {ch.description}
                </p>
                {/* Specs */}
                <div className="mt-auto flex justify-between gap-6 border-t border-[var(--color-border)] pt-5">
                  {ch.specs.map((s) => (
                    <div key={s.key}>
                      <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-text-faint)]">
                        {s.key}
                      </div>
                      <div
                        className="prose-copper font-serif text-xl"
                        dangerouslySetInnerHTML={{ __html: s.val }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Scroll cue */}
      <Container>
        <div className="flex items-center justify-between pb-10 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-text-faint)]">
          <span>Five chapters · drag or scroll →</span>
          <span className="hidden items-center gap-3 md:flex">
            <span className="h-px w-20 bg-[var(--color-accent)]" />
            Continue
          </span>
        </div>
      </Container>
    </section>
  );
}
