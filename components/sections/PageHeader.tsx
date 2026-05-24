import type { ReactNode } from "react";
import { Reveal } from "@/components/animation/Reveal";
import Botanical from "@/components/brand/Botanical";

/**
 * Inner-page hero header — eyebrow + display title + Dancing Script accent +
 * blurb, framed by botanicals. Clears the fixed header (pt-32).
 */
export default function PageHeader({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-32 text-center sm:px-8 sm:pt-40">
      <Botanical variant="branch" className="pointer-events-none absolute -left-8 top-28 hidden h-40 w-auto opacity-40 md:block" />
      <Botanical variant="frond" flip className="pointer-events-none absolute -right-4 top-24 hidden h-56 w-auto opacity-20 lg:block" />
      <Botanical variant="sprig" tone="lavender" className="pointer-events-none absolute right-16 top-44 hidden h-16 w-auto opacity-40 xl:block" />

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
        <span className="eyebrow mb-4 flex items-center gap-2 text-sage">
          <span className="h-px w-6 bg-sage/50" aria-hidden />
          {eyebrow}
          <span className="h-px w-6 bg-sage/50" aria-hidden />
        </span>
        <h1 className="font-display text-h1 leading-tight text-forest">{title}</h1>
        {accent && <span className="mt-1 font-script text-4xl text-lavender sm:text-5xl">{accent}</span>}
        {children && <p className="mt-5 max-w-2xl text-body-lg leading-relaxed text-ink/75">{children}</p>}
      </Reveal>
    </section>
  );
}
