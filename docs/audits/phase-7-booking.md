# Phase 7 Audit — Cal.com Booking

**Date:** 2026-05-24 · **Status:** ✅ Pass

## What was built
- `components/sections/BookingEmbed.tsx` — Cal.com inline embed (`@calcom/embed-react`), themed to brand (`cal-brand: #3d5240`), month view, client-only mounted guard + "Loading the calendar…" state.
- Calendar link from **`NEXT_PUBLIC_CAL_LINK`**; defaults to Cal.com's public demo (`rick`) so the embed shows a **real, working calendar** for the demo (your choice). Swap to the real link by setting the env var — no code change.
- Contact page: dedicated **`#book`** section ("Choose a time that / *feels right.*") with the embed; the info card now links down to it.

## Validation
- Verified the embed renders a live calendar with month grid + time slots, brand-green selected date (`/tmp/v_booking2.png`).
- Booking test: `#book` heading + Cal iframe attaches. Pages suite **10/10 @ desktop**.
- `npm run build` clean (12 routes). `assets/` untouched.

## Notes / to swap before launch
- **Set `NEXT_PUBLIC_CAL_LINK`** (e.g. `havenora/intro-session`) in Vercel env to replace the demo `rick` calendar.
- "Book a Session" CTAs across the site route to `/contact`; could deep-link to `/contact#book` later if you prefer landing straight on the calendar.

## Next phase
**Milestone 8 — Polish:** page transitions, full responsive pass, perf (LCP image priority, lazy GSAP), a11y, SEO/sitemap, remove unused default assets.
