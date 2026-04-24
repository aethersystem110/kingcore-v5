# King Core v5 Website

## Context

Marketing website for **King Core / Imperial Synergies** — paper tube winding manufacturer based in Lahore, Pakistan. This is a standalone project, separate from `kingcore-website` (plain HTML) and `kingcore-next` (Next.js, dark amber theme).

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **React 19**

## Design System

Fresh design — NOT the dark amber theme from kingcore-next.

- Design tokens defined as CSS custom properties in `globals.css`
- Tailwind utility classes + custom properties for theming
- Typography: Inter (body) + Instrument Serif (headings) via `next/font/google`

## Project Structure

```
src/
  app/             # Next.js App Router pages + layout
  components/
    ui/            # Reusable primitives (Button, Container, etc.)
    layout/        # Header, Footer, Navigation
    sections/      # Homepage sections (Hero, About, Products, etc.)
  lib/             # Utilities, constants, types
  assets/          # Static assets imported by components
public/
  images/          # Public images (OG, favicons, product photos)
```

## Key Info

- **WhatsApp**: +92-320-4471003
- **Email**: info@kingcore.pk
- **Target audience**: International B2B buyers (Turkey, UAE, Bangladesh, Europe)
- **Products**: Paper tubes, cores, cones — textile, packaging, industrial use

## Commands

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Production build
npm run lint      # ESLint
```

## Rules

- No custom cursor effects or cursor glow — user hates these
- Ali is always "Sir" — never "owner" or "Director"
- All amounts in PKR as strings with 2 decimal places
- Do not modify `kingcore-website` or `kingcore-next` directories
