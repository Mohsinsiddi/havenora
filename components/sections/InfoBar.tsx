import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Laptop, Clock, People } from "@/components/ui/icons";
import { infoBar } from "@/lib/content";

const ICONS = { laptop: Laptop, clock: Clock, people: People };

/**
 * Session info bar — the 3 sessions sit inside a soft wavy band (wave rising
 * from the hero above into a slightly lighter ivory band), matching 1.png.
 */
export default function InfoBar() {
  return (
    <section className="relative bg-ivory">
      {/* wavy top edge rising into the cream hero above */}
      <svg
        className="absolute left-0 top-0 w-full -translate-y-[98%] text-ivory"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 60 C 360 6 780 70 1080 38 C 1250 20 1350 16 1440 30 L1440 60 Z" fill="currentColor" />
      </svg>

      <RevealGroup className="mx-auto grid max-w-6xl gap-y-8 px-5 py-14 sm:px-8 md:grid-cols-3 md:gap-y-0">
        {infoBar.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <RevealItem
              key={item.label}
              className="flex items-start gap-4 md:px-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-dashed md:[&:not(:first-child)]:border-sage/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lavender-soft/40 text-xl text-lavender">
                <Icon />
              </span>
              <div>
                <h3 className="eyebrow text-forest">{item.label}</h3>
                {item.meta && <p className="mt-1 text-small font-medium text-lavender">{item.meta}</p>}
                <p className="mt-1 text-small text-ink/65">{item.note}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
