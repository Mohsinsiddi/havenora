import Link from "next/link";
import Logo from "@/components/brand/Logo";
import HeartLeaf from "@/components/brand/HeartLeaf";
import LeafBranch from "@/components/brand/LeafBranch";
import { Button } from "@/components/ui/Button";
import { Instagram, Facebook, Heart } from "@/components/ui/icons";
import { site, footerColumns, newsletter } from "@/lib/content";

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Heart, label: "Saved", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* organic two-layer wave divider into the footer */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 120" className="block w-full text-beige" preserveAspectRatio="none" aria-hidden>
          <path d="M0 64 C 280 8 560 110 760 80 C 980 48 1180 0 1440 56 L1440 120 L0 120 Z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 1440 120" className="absolute inset-0 block w-full text-cream" preserveAspectRatio="none" aria-hidden>
          <path d="M0 92 C 300 52 540 120 780 96 C 1020 72 1220 48 1440 88 L1440 120 L0 120 Z" fill="currentColor" />
        </svg>
      </div>

      {/* ---- upper (cream) ---- */}
      <div className="relative overflow-hidden bg-cream pb-14 pt-4">
        <LeafBranch flip className="pointer-events-none absolute -right-10 -top-2 hidden h-56 rotate-[8deg] opacity-80 lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          {/* brand block + newsletter (left) */}
          <div className="min-w-0">
            <Logo
              variant="stacked"
              withTagline
              className="items-start text-left [&>div]:items-start [&>div]:text-left"
            />
            <p className="mt-5 max-w-xs text-small leading-relaxed text-ink/70">{site.blurb}</p>

            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-forest text-lg shadow-sm transition-colors hover:bg-lavender hover:text-ivory"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            {/* newsletter — tucked under the brand block (matches 8.png) */}
            <div className="mt-8 max-w-sm">
              <h3 className="eyebrow text-sage">{newsletter.title}</h3>
              <p className="mt-2 text-small text-ink/70">{newsletter.blurb}</p>
              <form className="mt-3 flex gap-2" aria-label="Newsletter signup">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="h-11 w-full min-w-0 flex-1 rounded-full border border-sage-light/60 bg-ivory px-4 text-small text-ink outline-none focus:border-lavender"
                />
                <Button type="submit" size="md">Subscribe</Button>
              </form>
            </div>
          </div>

          {/* link columns (right) — 2-col on mobile, 4-col from sm up */}
          <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow text-sage">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-small break-words text-ink/75 transition-colors hover:text-lavender">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* wavy cream → green curve into the ribbon band */}
      <svg
        className="-mb-px block w-full text-forest-deep"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 6 C 360 66 760 66 1080 30 C 1250 12 1350 10 1440 24 L1440 70 L0 70 Z" fill="currentColor" />
      </svg>

      {/* ---- lower (forest) ribbon band ---- */}
      <div className="relative overflow-hidden bg-forest-deep text-ivory">
        <LeafBranch className="pointer-events-none absolute -left-8 top-1/2 hidden h-32 -translate-y-1/2 rotate-[18deg] opacity-50 sm:block" />
        <LeafBranch flip className="pointer-events-none absolute -right-8 top-1/2 hidden h-32 -translate-y-1/2 -rotate-[18deg] opacity-50 sm:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8">
          <p className="flex items-center justify-center gap-3 text-center font-script text-2xl text-ivory/90">
            <HeartLeaf className="h-6 w-auto opacity-80" />
            {site.ribbon}
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-ivory/15 pt-4 text-caption text-ivory/60 sm:flex-row">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <span className="flex gap-4">
              <Link href="/privacy" className="hover:text-ivory">Privacy</Link>
              <Link href="/terms" className="hover:text-ivory">Terms</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
