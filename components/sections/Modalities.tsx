import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import Botanical from "@/components/brand/Botanical";
import { modalities } from "@/lib/content";

export default function Modalities() {
  return (
    <section id="approaches" className="relative overflow-hidden bg-ivory/60 px-5 py-20 sm:px-8 sm:py-28">
      <Botanical variant="sprig" tone="lavender" className="pointer-events-none absolute right-10 top-12 hidden h-20 w-auto opacity-50 lg:block" />

      <SectionHeading eyebrow="Therapeutic Modalities" title="A thoughtful blend" accent="of approaches.">
        I integrate a range of evidence-based modalities to support your unique needs, goals and pace —
        together we&apos;ll find what works best for you.
      </SectionHeading>

      <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {modalities.map((m) => (
          <RevealItem key={m.abbr}>
            <div className="flex h-full flex-col items-center gap-1 rounded-2xl border border-sage-light/40 bg-cream px-4 py-6 text-center transition-colors hover:border-lavender/40">
              <span className="font-display text-h3 text-lavender">{m.abbr}</span>
              <span className="text-small text-ink/70">{m.name}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
