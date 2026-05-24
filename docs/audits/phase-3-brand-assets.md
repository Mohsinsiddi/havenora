# Phase 3 Audit — Brand Assets (SVG)

**Date:** 2026-05-24 · **Status:** ✅ Pass

## Decisions taken (your input)
- Botanicals: **hand-built SVG** (refined illustrated, on-palette — not watercolor texture).
- Logo: **clean SVG recreation** of the badge + wordmark.

## What was built
- `components/brand/BrandMark.tsx` — SVG recreation of the `logo.png` badge: sage egg-frame, lush upward-sweeping leaf branch, pale sun, small house, soft 3-layer hills, winding cream path. Parts id'd (`#hv-sun`, `#hv-house`, `#hv-branch`) for hero animation.
- `components/brand/Logo.tsx` — full lockup (badge + "Havenora" + "— CARE —" + optional tagline), `horizontal` / `stacked` variants, `onDark` mode for footer.
- `components/brand/HeartLeaf.tsx` — heart-sprouting-two-leaves divider motif.
- `components/brand/Botanical.tsx` — 5 decorative variants (`sprig`, `branch`, `olive`, `leaf`, `frond`), `flip` + parallax-ready, slim pointed leaf shape.
- `app/icon.png` (48²) + `app/apple-icon.png` (180²) derived from the designed badge icon **`feicon1.png`**; default create-next-app `favicon.ico` removed.
- `public/og.png` copied from `assets/og.png` (wired in metadata Phase 1).

## Fidelity validation (vs `assets/logo.png`)
Iterated 3× with side-by-side comparison against the original badge crop:
1. v1 — structure right, branch too sparse, hills too dark, frame too round.
2. v2 — lightened 3-layer hills ✅, narrowed to egg-frame ✅, fuller branch.
3. v3 — leaves re-angled to sweep upward-and-outward → **reads as the same mark**. ✅

| Check | Result |
|---|---|
| Badge composition (frame/branch/sun/house/hills/path) | ✅ Matches original identity |
| Palette within tokens (sage/olive/honey/cream) | ✅ On-tone |
| Wordmark lockup (Havenora / —CARE— / tagline) | ✅ Matches `logo.png` layout |
| Botanicals render at all sizes, on-palette | ✅ Pass (fixed an SVG auto-height bug) |
| `npm run build` (icons + OG) | ✅ Clean; `/icon.png`, `/apple-icon.png` emitted |
| `assets/` immutability | ✅ 17 files, untouched (copied out only) |

## Deltas / honest notes
- SVG botanicals are elegant vector, **not watercolor texture** — per your explicit choice. Swap path remains open if you later generate watercolor PNGs.
- SVG badge is a faithful *recreation*; the original's branch leans a hair further left and leaves are marginally fuller. Difference is cosmetic; identity matches. Can fine-tune anytime.

## Next phase
**Milestone 4 — Layout shell:** scroll-aware Header + dark-green Footer (faithful to `8.png`). First visual-UI phase → I'll pause for your sign-off with render-vs-mockup comparisons.
