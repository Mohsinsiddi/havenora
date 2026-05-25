import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import LeafBranch from "@/components/brand/LeafBranch";
import { LeafSpark, ArrowRight } from "@/components/ui/icons";

type Btn = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  leaf?: boolean;
};

/**
 * Lighter, page-specific CTA band (matches the inline strips in 2.png / 3.png /
 * 5.png) — softer than the bold forest CTASection. Botanical accents + heading
 * + optional script accent + buttons.
 */
export default function CtaStrip({
  title,
  accent,
  body,
  buttons,
}: {
  title: string;
  accent?: string;
  body?: string;
  buttons: Btn[];
}) {
  return (
    <section className="px-5 py-12 sm:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-sage-light/50 bg-sage-light/25 px-6 py-12 text-center sm:px-12 sm:py-14">
          <LeafBranch flip className="pointer-events-none absolute -left-10 -top-6 h-44 rotate-[15deg] opacity-60" />
          <LeafBranch className="pointer-events-none absolute -right-10 -bottom-8 h-44 rotate-[195deg] opacity-60" />

          <h2 className="mx-auto max-w-2xl font-display text-h2 text-forest">{title}</h2>
          {accent && <p className="mx-auto mt-1 font-script text-3xl text-lavender">{accent}</p>}
          {body && <p className="mx-auto mt-4 max-w-xl text-body-lg leading-relaxed text-ink/75">{body}</p>}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {buttons.map((b) => (
              <ButtonLink key={b.label} href={b.href} variant={b.variant ?? "primary"} size="lg">
                {b.label}
                {b.leaf ? <LeafSpark className="text-honey" /> : <ArrowRight />}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
