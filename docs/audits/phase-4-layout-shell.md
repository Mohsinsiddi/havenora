# Phase 4 Audit — Layout Shell (Header + Footer)

**Date:** 2026-05-24 · **Status:** ✅ Pass — **awaiting your sign-off** (first visual-UI phase)

## What was built
- `lib/content.ts` — central nav, footer columns, site copy, newsletter text.
- `components/ui/Button.tsx` — `Button`/`ButtonLink`, variants (primary forest pill, outline, ghost, light), 3 sizes, focus rings.
- `components/ui/icons.tsx` — inline icon set (leaf-spark, chevron, Instagram, Facebook, heart, menu, close).
- `components/layout/Header.tsx` — fixed, **transparent over hero → cream-frosted + shadow on scroll**, logo, full desktop nav with active state, **"For You ▾" hover dropdown**, green "Book a Session" pill (leaf icon), mobile hamburger drawer (scroll-locks body).
- `components/layout/Footer.tsx` — cream upper (stacked logo + tagline, blurb, socials, 4 link columns, "Stay Connected" newsletter form) flowing through a wave divider into the **forest-deep ribbon band** ("A gentle space · Real conversations · Meaningful change" + heart-leaf motif + copyright + privacy/terms). Botanical accents layered in.
- Wired Header + Footer into `app/layout.tsx` around `<main>`.

## Fidelity vs mockups
- **Header** vs `1.png`: nav order (Home/About/Services/For You▾/Resources/Contact), green pill CTA, frosted-on-scroll → **matches**. (See `/tmp/cmp_header.png`.)
- **Footer** vs `8.png`: logo lockup, blurb, socials, Company/Services/Resources/Contact columns, Stay Connected + email field, green script ribbon → **matches**. (See `/tmp/cmp_footer.png`.)

## Test results
| Suite | Result |
|---|---|
| Layout shell (6 tests: nav labels, link destinations, frosted-on-scroll, mobile menu, footer columns/newsletter/ribbon, overflow @ 7 widths) | ✅ |
| Full suite across desktop-1440 + tablet-768 + mobile-390 | ✅ 33/33 |
| `npm run build` | ✅ Clean |
| `assets/` immutability | ✅ Untouched |

## Deltas / notes
- Mockup's wave divider is a touch more organic and its dark-band botanicals more prominent — mine are subtler. Cosmetic; easy to dial up.
- Newsletter spans full width below the columns (mockup tucks it under the brand block). Functionally identical; can match exactly if preferred.
- Newsletter form is non-functional until Milestone 7/8 (wired to a provider then).

## Footer refinement (post-review, per your request "match footer exactly first")
- Newsletter **tucked under the brand block** (under socials), not full-width — matches `8.png`.
- **Organic two-layer wave** divider (sand back + cream front).
- Botanicals strengthened: prominent top-left branch + **lavender sprig** (added a `tone="lavender"` option to `Botanical`), frond on the right, branch + lavender sprigs flanking the ribbon band.
- Confirmed via `/tmp/cmp_footer2.png`; 12/12 layout tests still green.

## Runtime asset independence (per your note — `assets/` will be deleted)
`grep -rn "assets" app components lib` → only **doc-comments** mention `assets/`; **no imports/paths**. Runtime images live in `public/og.png` + `app/icon.png`/`apple-icon.png`; everything else is inline SVG/CSS. Site will work after `assets/` is deleted.

## Next phase
**Milestone 5 — Home page** with full hero scroll choreography (faithful to `1.png`): hero headline + Dancing Script accent, parallax botanicals, value chips, services/approach/testimonials previews, pricing bar, CTA.
