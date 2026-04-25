"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPORTS } from "@/content/site";

export function ExportsSection() {
  return (
    <section
      id="exports"
      className="section-padding border-y border-[var(--color-border)] bg-[var(--color-bg-warm)]"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          {/* Left: text */}
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-5">{EXPORTS.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="prose-copper font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl"
                dangerouslySetInnerHTML={{ __html: EXPORTS.headline }}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 max-w-[380px] text-base leading-[1.65] text-[var(--color-text-muted)]">
                {EXPORTS.description}
              </p>
            </ScrollReveal>

            {/* Market list */}
            <ScrollReveal delay={0.2}>
              <ul className="mt-8 list-none p-0">
                {EXPORTS.markets.map((m) => (
                  <li
                    key={m.name}
                    className="flex items-baseline justify-between border-t border-[var(--color-border)] py-4 font-serif text-2xl last:border-b"
                  >
                    <span>{m.name}</span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-text-faint)] font-sans">
                      {m.role}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: SVG map */}
          <ScrollReveal delay={0.2}>
            <div>
              <svg
                viewBox="0 0 720 460"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Export destinations from Lahore"
                className="w-full"
              >
                {/* Grid lines */}
                <g opacity=".15" stroke="var(--color-text)" strokeWidth=".7" fill="none">
                  <line x1="0" y1="230" x2="720" y2="230" />
                  <line x1="0" y1="160" x2="720" y2="160" strokeDasharray="3 4" />
                  <line x1="0" y1="300" x2="720" y2="300" strokeDasharray="3 4" />
                </g>

                {/* Continents (simplified) */}
                <path d="M 40 130 Q 100 90 180 110 Q 240 130 250 200 Q 230 280 160 300 Q 90 280 50 220 Z" fill="var(--color-text)" fillOpacity=".06" stroke="var(--color-text)" strokeWidth=".5" strokeOpacity=".35" />
                <path d="M 220 320 Q 250 300 270 340 Q 265 400 240 420 Q 220 400 215 360 Z" fill="var(--color-text)" fillOpacity=".06" stroke="var(--color-text)" strokeWidth=".5" strokeOpacity=".35" />
                <path d="M 360 130 Q 420 110 460 140 Q 470 180 440 200 Q 390 200 360 170 Z" fill="var(--color-text)" fillOpacity=".06" stroke="var(--color-text)" strokeWidth=".5" strokeOpacity=".35" />
                <path d="M 390 220 Q 450 220 460 280 Q 445 360 410 380 Q 380 350 375 280 Z" fill="var(--color-text)" fillOpacity=".06" stroke="var(--color-text)" strokeWidth=".5" strokeOpacity=".35" />
                <path d="M 480 130 Q 600 110 680 160 Q 700 220 640 260 Q 560 280 480 240 Q 470 200 480 160 Z" fill="var(--color-text)" fillOpacity=".06" stroke="var(--color-text)" strokeWidth=".5" strokeOpacity=".35" />

                {/* Lahore origin */}
                <g transform="translate(560 200)">
                  <circle r="22" fill="var(--color-accent)" fillOpacity=".18" />
                  <circle r="14" fill="var(--color-accent)" fillOpacity=".35" />
                  <circle r="6" fill="var(--color-accent)" />
                  <text x="14" y="-10" fontFamily="var(--font-sans)" fontSize="11" fontWeight="500" letterSpacing="1.5" fill="var(--color-text)">LAHORE</text>
                  <text x="14" y="4" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="12" fill="var(--color-accent)">origin</text>
                </g>

                {/* Destinations */}
                <g transform="translate(500 200)">
                  <circle r="5" fill="var(--color-text)" />
                  <text x="-9" y="16" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9.5" fontWeight="500" letterSpacing="1.5" fill="var(--color-text)">MIDDLE EAST</text>
                </g>
                <g transform="translate(450 170)">
                  <circle r="5" fill="var(--color-text)" />
                  <text x="9" y="-8" fontFamily="var(--font-sans)" fontSize="9.5" fontWeight="500" letterSpacing="1.5" fill="var(--color-text)">CENTRAL ASIA</text>
                </g>
                <g transform="translate(420 160)">
                  <circle r="6" fill="var(--color-text)" />
                  <text x="-10" y="-12" textAnchor="end" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="1.5" fill="var(--color-text)">EUROPE</text>
                </g>

                {/* Arcs */}
                <path d="M 560 200 Q 490 80 420 160" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeDasharray="4 3" />
                <path d="M 560 200 Q 530 140 450 170" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeDasharray="4 3" />
                <path d="M 560 200 Q 540 230 500 200" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeDasharray="4 3" />
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
