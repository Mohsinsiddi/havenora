import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CtaStrip from "@/components/sections/CtaStrip";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Heart, People, Sun, Lotus, ArrowRight } from "@/components/ui/icons";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Support for every step of your journey",
  description:
    "Individual, couples, teen and group therapy. Compassionate, personalized support designed to help you heal, grow and thrive.",
};

const ICONS = { individual: Heart, couples: People, teen: Sun, group: Lotus } as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Our Services" title="Support for every" accent="step of your journey.">
        Compassionate, personalized therapy designed to help you heal, grow and thrive — whatever you&apos;re carrying.
      </PageHeader>

      <section className="px-5 py-10 sm:px-8">
        <RevealGroup className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = ICONS[s.id as keyof typeof ICONS] ?? Heart;
            return (
              <RevealItem key={s.id}>
                <article
                  id={s.id}
                  className="group flex h-full scroll-mt-28 flex-col items-center rounded-3xl border border-sage-light/40 bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-lavender/40 hover:shadow-lg"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-lavender-soft/40 text-2xl text-lavender">
                    <Icon />
                  </span>
                  <h2 className="mt-4 text-h3 text-forest">{s.title}</h2>
                  <p className="mt-2 flex-1 text-small leading-relaxed text-ink/70">{s.blurb}</p>
                  <span className="mt-4 text-small text-sage">{s.duration} · <span className="font-medium text-lavender">{s.price}</span></span>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-small font-medium text-forest transition-colors hover:text-lavender">
                    Learn more <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      <CtaStrip
        title="Whatever you're facing,"
        accent="you don't have to face it alone."
        buttons={[{ label: "Book a session", href: "/contact", leaf: true }, { label: "How therapy helps", href: "/for-you", variant: "outline" }]}
      />
    </>
  );
}
