import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Botanical from "@/components/brand/Botanical";
import { ArrowRight } from "@/components/ui/icons";
import { services } from "@/lib/content";

export default function ServicesPreview() {
  return (
    <section id="services" className="relative overflow-hidden bg-ivory/60 px-5 py-20 sm:px-8 sm:py-28">
      <Botanical variant="frond" className="pointer-events-none absolute -left-6 top-10 hidden h-64 w-auto opacity-15 lg:block" />

      <SectionHeading
        eyebrow="Our Services"
        title="Support for every"
        accent="step of your journey."
      >
        Compassionate, personalized therapy designed to help you heal, grow and thrive.
      </SectionHeading>

      <RevealGroup className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <RevealItem key={s.id}>
            <Link
              href={`/services#${s.id}`}
              className="group flex h-full flex-col rounded-3xl border border-sage-light/40 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lavender/40 hover:shadow-lg"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-lavender-soft transition-all duration-300 group-hover:w-16" />
              <h3 className="text-h3 text-forest">{s.title}</h3>
              <p className="mt-2 flex-1 text-small leading-relaxed text-ink/70">{s.blurb}</p>
              <div className="mt-5 flex items-center justify-between text-small">
                <span className="text-sage">{s.duration} · {s.price}</span>
                <ArrowRight className="text-lavender transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-12 flex justify-center">
        <ButtonLink href="/services" variant="outline" size="lg">
          Explore all services <ArrowRight />
        </ButtonLink>
      </div>
    </section>
  );
}
