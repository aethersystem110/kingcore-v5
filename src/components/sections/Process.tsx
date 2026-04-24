"use client";

import { TreePine, RotateCcw, Scissors, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROCESS_STEPS } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const ICONS: LucideIcon[] = [TreePine, RotateCcw, Scissors, ShieldCheck];

export function Process() {
  return (
    <section
      id="process"
      className="section-padding bg-[#1e1610]"
      aria-labelledby="process-heading"
    >
      <Container>
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Process
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            id="process-heading"
            className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl"
          >
            How a Kingcore core is made.
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-12 md:mt-20">
          {/* Connecting line — desktop only */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <ScrollReveal key={step.step} delay={i * 0.12}>
                  <div className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                    {/* Step number + icon */}
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10">
                      <Icon
                        className="h-6 w-6 text-[var(--color-accent)]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                        Step {step.step}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
