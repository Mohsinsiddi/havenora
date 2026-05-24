# Phase 2 Audit — Motion Foundation

**Date:** 2026-05-24 · **Status:** ✅ Pass

## What was built
- `lib/gsap.ts` — single-point GSAP + ScrollTrigger registration + `prefersReducedMotion()` helper.
- `components/layout/SmoothScroll.tsx` — Lenis driven off the GSAP ticker (one rAF loop, ScrollTrigger synced via `lenis.on("scroll", ScrollTrigger.update)`). Skips init entirely under reduced-motion. Exposes `window.__lenis` for anchor/back-to-top scrolling. Wired into `app/layout.tsx`.
- `components/animation/Reveal.tsx` — `Reveal`, `RevealGroup`, `RevealItem` (Framer Motion, fade/slide-in, staggered cascade, reduced-motion aware).
- `components/animation/Parallax.tsx` — GSAP scroll-scrubbed parallax for layered botanicals; disabled under reduced-motion.

## Validation results
| Check | Result |
|---|---|
| `npm run build` | ✅ Clean compile + typecheck |
| Lenis smooth scroll active by default (`html.lenis`, `window.__lenis`) | ✅ Pass |
| Reduced-motion disables smooth scroll (no instance, no `lenis-smooth`) | ✅ Pass |
| Playwright motion suite (desktop-1280) | ✅ 2/2 passed |

## Deltas from source
- N/A — internal animation plumbing, no mockup surface to compare yet.

## Next phase
**Milestone 3 — Brand assets:** transparent botanicals, logo SVG, favicon/OG. (Decision needed on botanical art style — see chat.)
