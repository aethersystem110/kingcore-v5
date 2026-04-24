# King Core v5 Website

## Context

Production marketing website for **Kingcore / Imperial Synergies** — paper tube core manufacturer based in Lahore, Pakistan. Targets international B2B buyers (procurement managers, plant engineers, sourcing agents) across Turkey, UAE, Bangladesh, Europe.

Separate from `kingcore-website` (plain HTML) and `kingcore-next` (Next.js, dark amber theme).

## Tech Stack

- **Next.js 16.2.4** — App Router, TypeScript, Turbopack
- **Tailwind CSS 4** — utility-first styling
- **GSAP + ScrollTrigger** — scroll-scrubbed video hero + section reveal animations
- **Lucide React** — icon placeholders
- **Resend** — contact form email delivery
- **React 19**

## Design System

Warm industrial editorial — "Aesop meets Sandvik."

- **Background:** `#F4EBD9` (warm beige) / `#FAF5EA` (lighter surface)
- **Text:** `#3D2B1F` (deep kraft brown) / `#6B5846` (muted)
- **Accent:** `#B87333` (industrial copper) / `#9A5F2A` (hover)
- **Dark sections:** `#1E1610` (stats, process) / `#15110D` (footer)
- **Fonts:** Instrument Serif (headlines) + Inter (body) via `next/font/google`

## Project Structure

```
src/
  app/
    api/inquiry/     # Contact form POST → Resend email
    globals.css      # Design tokens + base styles
    layout.tsx       # Fonts, metadata, JSON-LD structured data
    page.tsx         # Single-page: all sections wired together
  components/
    ui/              # Container, ScrollReveal, WhatsAppButton
    layout/          # Header (with mobile nav overlay), Footer
    sections/        # Hero, Stats, Industries, Products, Process, Quality, About, Contact
  content/
    site.ts          # ALL editable copy in one file
  lib/               # Utilities, types
public/
  hero.mp4           # H.264, all-keyframe, 23s (scroll-scrub)
  hero_hevc.mp4      # HEVC version for Safari
  hero_poster.jpg    # First frame poster
```

## Editable Content

All copy, specs, industries, contact details live in `src/content/site.ts`. Edit that single file to update anything on the site.

## Key Info

- **WhatsApp:** +92-320-4471003
- **Email:** info@kingcore.pk
- **Products:** Paper tubes, cores, cones — textile, packaging, industrial

## Commands

```bash
npm run dev       # Dev server (Turbopack, port 3000)
npm run build     # Production build
npm run lint      # ESLint
```

## Environment Variables

See `.env.local.example`:
- `RESEND_API_KEY` — for contact form emails (form works without it in dev, logs to console)
- `CONTACT_EMAIL_TO` — recipient email
- `CONTACT_EMAIL_FROM` — sender address (must be verified in Resend)

## Rules

- No custom cursor effects or cursor glow
- Ali is always "Sir" — never "owner" or "Director"
- Do not modify `kingcore-website` or `kingcore-next` directories
- Hero video must use all-keyframe encoding for scroll-scrub
