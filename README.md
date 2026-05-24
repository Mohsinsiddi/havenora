# Havenora Care

A premium, animated marketing site for a therapy practice — "A safe place to heal, grow & thrive."

## Stack
- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **GSAP + ScrollTrigger** (scroll choreography, draw-on-scroll path) · **Lenis** (smooth scroll) · **Framer Motion** (reveals, page transitions)
- **react-pageflip** (realistic Voices "journal") · **@calcom/embed-react** (booking)
- Fonts via `next/font`: Playfair Display (display), Poppins (body), Dancing Script (accents)

## Develop
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run test:e2e     # Playwright suite (design fidelity, responsiveness, e2e, a11y)
```

## Environment
Copy `.env.example` → `.env.local`. Key var:
- `NEXT_PUBLIC_CAL_LINK` — your Cal.com link (e.g. `havenora/intro-session`). Until set, booking shows Cal's public demo calendar.

## Structure
- `app/` — routes (`/`, `/services`, `/for-you`, `/voices`, `/about`, `/contact`, `/privacy`, `/terms`) + `sitemap.ts`, `robots.ts`
- `components/` — `brand/` (SVG logo + botanicals), `layout/` (header/footer/smooth-scroll), `animation/`, `sections/`, `ui/`
- `lib/` — `content.ts` (all copy/data), `gsap.ts`
- `public/` — `og.png`, `photos/` (only runtime images)
- `assets/` — **reference-only design mockups; not used at runtime; safe to delete**
- `docs/audits/` — per-phase fidelity + test audit reports

## Deploy (Vercel)
1. `npx vercel login` (one-time)
2. `npx vercel` (preview) → `npx vercel --prod` (production)
3. Set `NEXT_PUBLIC_CAL_LINK` in Vercel → Settings → Environment Variables.

Set the production domain in `app/layout.tsx` (`metadataBase`), `app/sitemap.ts`, and `app/robots.ts` if not `havenora.care`.
# havenora
