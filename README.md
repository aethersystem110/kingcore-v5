# Kingcore — Precision Paper Tubes & Cores

Production marketing website for Kingcore, a paper tube core manufacturer serving international export clients.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=info@kingcore.pk
CONTACT_EMAIL_FROM=website@kingcore.pk
```

The contact form works without `RESEND_API_KEY` in development (logs submissions to console).

## Editing Content

All site copy lives in `src/content/site.ts` — company info, hero text, industries, product specs, process steps, about text, and contact details.

## Deploy

Built for [Vercel](https://vercel.com):

```bash
npm run build
```

## Tech Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS 4
- GSAP + ScrollTrigger (scroll-scrubbed video hero)
- Resend (contact form emails)
