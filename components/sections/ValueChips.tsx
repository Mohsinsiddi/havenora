import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Heart, Leaf, Lotus, Sun } from "@/components/ui/icons";
import { valueProps } from "@/lib/content";

const ICONS = { heart: Heart, leaf: Leaf, lotus: Lotus, sun: Sun };
const tints = ["bg-lavender-soft/40 text-lavender", "bg-sage-light/40 text-forest"];

export default function ValueChips() {
  return (
    <section className="relative -mt-6 pb-8">
      <RevealGroup className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-5 sm:px-8 md:grid-cols-4">
        {valueProps.map((v, i) => {
          const Icon = ICONS[v.icon];
          return (
            <RevealItem key={v.title} className="flex flex-col items-center gap-3 text-center">
              <span className={`grid h-14 w-14 place-items-center rounded-full text-2xl ${tints[i % 2]}`}>
                <Icon />
              </span>
              <span className="text-body font-medium text-forest">{v.title}</span>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
