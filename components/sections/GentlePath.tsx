"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { ButtonLink } from "@/components/ui/Button";
import LeafBranch from "@/components/brand/LeafBranch";
import { Heart, People, Leaf, Sun, ArrowRight } from "@/components/ui/icons";
import { approachSteps } from "@/lib/content";

const ICONS = [Heart, People, Leaf, Sun];

export default function GentlePath() {
  const root = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!root.current || !path.current) return;
    const line = path.current;
    const len = line.getTotalLength();
    line.style.strokeDasharray = `${len}`;

    if (prefersReducedMotion()) {
      line.style.strokeDashoffset = "0";
      return;
    }

    const ctx = gsap.context(() => {
      line.style.strokeDashoffset = `${len}`;
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 65%", end: "bottom 75%", scrub: true },
      });
      gsap.from(root.current!.querySelectorAll("[data-node]"), {
        opacity: 0,
        y: 30,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-x-clip px-5 pt-32 pb-12 sm:px-8 sm:pt-40">
      <LeafBranch flip className="pointer-events-none absolute -left-12 top-24 hidden h-56 -rotate-[18deg] opacity-80 lg:block" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* intro — left */}
        <div className="lg:self-start">
          <span className="eyebrow flex items-center gap-2 text-sage">
            <span className="h-px w-6 bg-sage/50" aria-hidden />
            How therapy works
          </span>
          <h1 className="mt-4 font-display text-h1 leading-tight text-forest">A gentle path</h1>
          <span className="mt-1 block font-script text-3xl text-lavender sm:text-4xl">
            from where you are, to where you want to be.
          </span>
          <p className="mt-5 max-w-md text-body-lg leading-relaxed text-ink/75">
            Therapy isn&apos;t about having all the answers. It&apos;s about taking one step at a time — together.
          </p>
          <ButtonLink href="/contact" variant="outline" size="lg" className="mt-7">
            Learn more about therapy <ArrowRight />
          </ButtonLink>
        </div>

        {/* steps — right, with drawn connecting line */}
        <div ref={root} className="relative">
          <svg className="pointer-events-none absolute left-[27px] top-6 h-[calc(100%-3rem)] w-4 sm:left-[31px]" viewBox="0 0 8 800" preserveAspectRatio="none" aria-hidden>
            <path ref={path} d="M4 0 C 0 200 8 400 4 600 C 1 720 4 760 4 800" fill="none" stroke="#b5a5c1" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          <ol className="space-y-10">
            {approachSteps.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <li key={s.step} data-node className="relative flex items-start gap-5">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-lavender-soft bg-cream text-xl text-lavender shadow-sm sm:h-16 sm:w-16">
                    <Icon />
                  </span>
                  <div className="pt-1.5">
                    <span className="eyebrow text-sage">{s.step}</span>
                    <h3 className="text-h3 text-forest">{s.title}</h3>
                    <p className="mt-1 max-w-sm text-body leading-relaxed text-ink/70">{s.blurb}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
