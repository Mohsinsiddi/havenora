import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import Botanical from "@/components/brand/Botanical";
import HeartLeaf from "@/components/brand/HeartLeaf";
import { LeafSpark, ArrowRight } from "@/components/ui/icons";

export default function CTASection() {
  return (
    <section className="px-5 py-12 sm:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-deep px-6 py-16 text-center text-ivory sm:px-12 sm:py-20">
          <Botanical variant="branch" className="pointer-events-none absolute -left-6 -top-4 h-40 w-auto opacity-25" />
          <Botanical variant="frond" flip className="pointer-events-none absolute -right-4 bottom-0 h-52 w-auto opacity-20" />

          <HeartLeaf className="mx-auto h-9 w-auto opacity-90" />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-h2 text-ivory">
            You don&apos;t have to do this alone.
          </h2>
          <p className="mx-auto mt-2 font-script text-3xl text-lavender-soft">We&apos;re here for every part of it.</p>
          <p className="mx-auto mt-5 max-w-xl text-body-lg leading-relaxed text-ivory/80">
            If you&apos;re ready to take the next gentle step, we&apos;d be honored to walk with you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" variant="light" size="lg">
              Book your session <LeafSpark className="text-honey" />
            </ButtonLink>
            <ButtonLink href="/for-you" size="lg" className="!bg-transparent text-ivory ring-1 ring-ivory/40 hover:!bg-ivory/10">
              How therapy helps <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
