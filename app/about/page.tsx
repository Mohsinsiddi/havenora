import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePanel from "@/components/ui/ImagePanel";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { aboutValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — A safe place to heal, grow & thrive",
  description:
    "Havenora is a warm, judgment-free space for honest conversations and real healing. You don't have to have it all figured out — you just have to take the first step.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Havenora" title="Therapy that feels like" accent="coming home.">
        A warm, judgment-free space where honesty, lightness and even your humor have a place — and where healing happens at your pace.
      </PageHeader>

      {/* story */}
      <section className="overflow-x-clip px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <ImagePanel
              src="/photos/therapy-room.webp"
              alt="A calm, sunlit therapy space with soft seating, plants and warm light"
              label="about-space"
              priority
              className="aspect-4/3 w-full"
            />
          </Reveal>
          <Reveal direction="left">
            <span className="eyebrow text-sage">Our Story</span>
            <h2 className="mt-3 text-h2 text-forest">You don&apos;t have to have it all figured out.</h2>
            <p className="mt-4 text-body-lg leading-relaxed text-ink/75">
              You just have to take the first step. Havenora was built around a simple belief — that
              everyone deserves a space to be heard without judgment, supported without pressure, and
              met exactly where they are.
            </p>
            <p className="mt-4 text-body leading-relaxed text-ink/70">
              We blend evidence-based care with genuine human warmth, so therapy feels less like a
              clinic and more like a gentle conversation that helps you find your way back to yourself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section id="team" className="bg-ivory/60 px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="What we hold dear" title="The heart of" accent="how we care.">
          The principles that shape every conversation in this space.
        </SectionHeading>
        <RevealGroup className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v) => (
            <RevealItem key={v.title}>
              <div className="flex h-full flex-col rounded-3xl border border-sage-light/40 bg-cream p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-lavender-soft" />
                <h3 className="text-h3 text-forest">{v.title}</h3>
                <p className="mt-2 text-small leading-relaxed text-ink/70">{v.blurb}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTASection />
    </>
  );
}
