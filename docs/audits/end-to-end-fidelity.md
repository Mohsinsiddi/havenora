# End-to-End Fidelity Audit (2026-05-25, re-run)

Strict re-audit of every page against the root `assets/` mockups, with the element map (`reference-element-map.md`) as the spec.

## Divergences found → fixed
| Page | Mockup | Was | Now |
|---|---|---|---|
| Home | `1.png` | matched | matched (unchanged) |
| Services | `2.png` | extra pricing **InfoBar**; big CTA | **InfoBar removed**; **CtaStrip** "Whatever you're facing, you don't have to face it alone." |
| For You | `3.png`+`6.png` | gentle path w/o photo; **6-chip** modalities | **room photo** in gentle path; per-page CtaStrip "You don't have to figure it out alone"; **full Modalities** — "Different paths / One goal" intro + image + "A thoughtful blend" + **8 cards with descriptions** |
| Voices | `5.png` | flip-book | **carousel** — centre letter + side peeks + prev/next + dots + "Click to read more"; CtaStrip "Your story matters." |
| CTA / Footer | `4.png` / `8.png` | matched | matched |
| About/Contact/Privacy/Terms | — | system-designed | unchanged (no mockup) |

## Cleanup ("remove old ones")
- Deleted `Journal.tsx` (flip-book, replaced by Carousel) and `ValueChips.tsx` (unused).
- Removed `react-pageflip` dependency.
- New shared component `CtaStrip.tsx` (per-page light CTA). `LetterContent`/`TwineBow` re-homed in `Carousel.tsx`.
- `grep -rn "assets" app components lib` → only doc-comments; no runtime refs. Site works after `assets/` is deleted.

## Strict Playwright harness (new)
- **`tests/fidelity.spec.ts`** — element-by-element presence + content + position (desktop photo right-half, 4 service cards in one row, 8 modality cards w/ descriptions, carousel arrows/dots/read-more + advances, per-page CtaStrip copy, no-overflow). Passes across mobile-360/390, tablet-768, desktop-1440/1920.
- **`tests/visual.spec.ts`** — `toHaveScreenshot` baselines for 6 pages × {desktop-1440, mobile-390} = 12 snapshots in `tests/visual.spec.ts-snapshots/`; animations frozen, dynamic embed/carousel masked. Re-run green deterministically.
- **`scripts/ref-montage.mjs`** — render-vs-reference montages → `docs/audits/montage-{home,services,for-you,voices}.png` for visual sign-off.

## Results
- **Full suite 84 passed** @ desktop-1440 + mobile-390; fidelity **green** @ all 7 breakpoints.
- `npm run build` clean (14 routes). Visual baselines seeded + verified.
- Montages reviewed: Services, For You, Voices now align element-for-element with their mockups.

## Update baselines after intentional design changes
`npx playwright test tests/visual.spec.ts --update-snapshots`
