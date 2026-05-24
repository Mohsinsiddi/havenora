import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Botanical from "@/components/brand/Botanical";
import { ArrowRight } from "@/components/ui/icons";
import { testimonials } from "@/lib/content";

export default function TestimonialsPreview() {
  return (
    <section id="voices" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Botanical variant="branch" flip className="pointer-events-none absolute -right-8 top-8 hidden h-44 w-auto opacity-20 lg:block" />

      <SectionHeading eyebrow="Voices of Healing" title="Stories that" accent="stay with you.">
        Every soul you meet is a reminder — you&apos;re not alone on this journey.
      </SectionHeading>

      <RevealGroup className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealItem key={t.name}>
            <figure
              className="flex h-full flex-col rounded-3xl border border-sage-light/40 bg-cream p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              style={{ transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}
            >
              <span className="font-script text-5xl leading-none text-lavender-soft" aria-hidden>&ldquo;</span>
              <blockquote className="-mt-3 flex-1 text-body leading-relaxed text-ink/80">{t.quote}</blockquote>
              <figcaption className="mt-5 border-t border-sage-light/40 pt-4">
                <span className="font-display text-body-lg text-forest">{t.name}</span>
                <span className="block text-caption text-sage">{t.tag}</span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-12 flex justify-center">
        <ButtonLink href="/voices" variant="ghost" size="lg">
          Read more voices <ArrowRight />
        </ButtonLink>
      </div>
    </section>
  );
}
