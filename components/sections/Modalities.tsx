import SectionHeading from "@/components/ui/SectionHeading";
import ImagePanel from "@/components/ui/ImagePanel";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import LeafBranch from "@/components/brand/LeafBranch";
import { modalities } from "@/lib/content";

/**
 * Therapeutic modalities — faithful to 6.png: "Different paths / One goal"
 * intro with an image, then "A thoughtful blend of approaches" + a grid of
 * approach cards (abbr + name + description).
 */
export default function Modalities() {
  return (
    <section id="approaches" className="relative overflow-hidden bg-ivory/60 px-5 py-20 sm:px-8 sm:py-28">
      <LeafBranch className="pointer-events-none absolute -right-12 top-10 hidden h-56 rotate-[170deg] opacity-70 lg:block" />

      {/* intro: "Different paths / One goal" + image */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow text-sage">Therapeutic Modalities</span>
          <h2 className="mt-3 font-display text-h2 text-forest">Different paths.</h2>
          <span className="mt-1 block font-script text-3xl text-lavender sm:text-4xl">
            One goal — your well-being.
          </span>
          <p className="mt-5 max-w-md text-body-lg leading-relaxed text-ink/75">
            I integrate a range of evidence-based therapeutic modalities to support your unique needs,
            goals and pace. Together, we&apos;ll find what works best for you.
          </p>
        </Reveal>
        <Reveal direction="left">
          <ImagePanel
            src="/photos/therapy-room.webp"
            alt="A warm, plant-filled therapy space"
            label="modalities"
            className="aspect-4/3 w-full"
          />
        </Reveal>
      </div>

      {/* "A thoughtful blend of approaches" + cards */}
      <SectionHeading
        eyebrow=""
        title="A thoughtful blend"
        accent="of approaches."
        className="mt-20"
      >
        Each modality offers something unique — I draw from these to support your journey with care
        and intention.
      </SectionHeading>

      <RevealGroup className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modalities.map((m) => (
          <RevealItem key={m.abbr}>
            <div className="flex h-full flex-col rounded-2xl border border-sage-light/40 bg-cream p-6 transition-colors hover:border-lavender/40">
              <span className="font-display text-h3 text-lavender">{m.abbr}</span>
              <span className="mt-0.5 text-small font-medium text-forest">{m.name}</span>
              <p className="mt-3 text-small leading-relaxed text-ink/70">{m.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
