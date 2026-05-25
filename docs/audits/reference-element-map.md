# Reference Element Map (mockup → page spec)

The binding spec for fidelity. Each mockup-backed page lists its ordered elements + position. `tests/fidelity.spec.ts` asserts these. Positions are desktop (≥lg) unless noted.

## Home — `1.png`
1. Header (logo left · nav center · "Book a Session" pill right)
2. Hero
   - eyebrow **pill** with leaf: "A safe space to heal, grow & thrive" (left)
   - h1: "Therapy that feels" (forest) / "safe, real & supportive." (lavender) — 2 lines (left)
   - blurb (left) · buttons: "Book a Session"→/contact, "Explore Services"→/services (left)
   - 4 value pillars **below buttons** (heart·sprout·lotus·sun, alternating lavender/sage, dotted dividers)
   - photo **right half**, merged/feathered · lavender **oval** on the photo
3. Info/pricing bar — 3 items (Online / Individual ₹1500 / Couples ₹3000), vertical dividers, wavy top band
4. Footer
*Status: matches.*

## Services — `2.png`
1. Header
2. PageHeader: eyebrow "Our Services" · "Support for every" / "step of your journey." · blurb · leaf branches both corners
3. **4 service cards** in one row (≥lg): Individual · Couples · Teen · Group (icon, title, blurb, "Learn more"→/contact)
4. **CtaStrip**: "Whatever you're facing, you don't have to face it alone." + [Explore All Services]→/services (lighter band, botanicals)
5. Footer
**Fix: remove the pricing InfoBar (not in mockup); replace big CTA with CtaStrip.**

## For You — `3.png` (gentle path) + `6.png` (modalities)
1. Header
2. GentlePath — two columns:
   - left (sticky): eyebrow "How therapy works" · "A gentle path" / script "from where you are, to where you want to be." · blurb · "Learn more about therapy"
   - right: 4 steps (Reach Out·Connect·Heal·Grow) on a drawn connector line, **room photo behind/beside the steps**
3. **CtaStrip**: "You don't have to figure it out alone." / "Let's take the next step — together." + [Book Your Session]→/contact, [Explore Services]→/services
4. Modalities (`6.png`):
   - eyebrow "Therapeutic Modalities" · "Different paths." / script "One goal — your well-being." · blurb · **intro image** (right)
   - "A thoughtful blend of approaches" heading + sub-blurb
   - grid of **~8 cards**, each: abbr + name + **description** paragraph
5. Footer
**Fix: add gentle-path photo; full Modalities rebuild; add CtaStrip.**

## Voices — `5.png`
1. Header
2. Heading block (center): small tag · "Voices of healing." / script "Stories that stay with you." · "Every soul you meet is a reminder — you're not alone on this journey."
3. **Carousel**: large **center** aged-paper letter (leaf + twine + script headline + body + "— Name, tag") with **side cards peeking** left & right; **prev/next arrows**; **dot indicators**; "Click to read more" on center card
4. **CtaStrip**: "Your story matters." + [Start Your Journey]→/contact · "Learn more about therapy"→/for-you
5. Footer
**Fix: replace flip-book with carousel; add CtaStrip.**

## CTA band — `4.png` (bold, pre-footer where no page-specific strip)
HeartLeaf · "You don't have to do this alone." / script "We're here for every part of it." · blurb · [Book your session][How therapy helps] · forest-deep panel, leaf branches in corners. *(Keep for About; matches.)*

## Footer — `8.png`
Wave divider · cream block: stacked logo+tagline+blurb+socials+newsletter (left) · 4 link columns Company/Services/Resources/Contact (right, 2-col mobile / 4-col sm+) · wave into forest ribbon band: HeartLeaf + "A gentle space · Real conversations · Meaningful change" + ©year + Privacy/Terms. *(matches.)*

## No-mockup pages (consistency only, not pixel-match)
About, Contact, Privacy, Terms — system components (PageHeader, SectionHeading, cards, CtaStrip/CTASection, form, BookingEmbed). Audit checks: header present, on-palette, no overflow, leaves consistent.
