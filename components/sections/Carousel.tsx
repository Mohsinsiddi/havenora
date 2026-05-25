"use client";

import { useState } from "react";
import LeafBranch from "@/components/brand/LeafBranch";
import HeartLeaf from "@/components/brand/HeartLeaf";
import { testimonials } from "@/lib/content";

type T = (typeof testimonials)[number];

/** Split a quote into a script "headline" (first sentence) + body remainder. */
function split(quote: string): [string, string] {
  const m = quote.match(/^(.*?[.!?])\s+(.*)$/);
  return m ? [m[1], m[2]] : [quote, ""];
}

/** A little twine bow knot (fixed size). */
function TwineBow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden>
      <g stroke="#a9895b" strokeWidth="2.2" strokeLinecap="round">
        <path d="M24 16 C 12 4 4 9 11 16 C 4 23 12 28 24 16" />
        <path d="M24 16 C 36 4 44 9 37 16 C 44 23 36 28 24 16" />
        <path d="M24 16 L 17 30" />
        <path d="M24 16 L 31 30" />
      </g>
      <circle cx="24" cy="16" r="3" fill="#8f7146" />
    </svg>
  );
}

/** Aged-paper letter face — matches assets/5.png. */
function Letter({ t }: { t: T }) {
  const [head, body] = split(t.quote);
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-sm bg-[#f3ead6] px-10 py-10 text-center ring-1 ring-[#e0d2af] [background-image:repeating-linear-gradient(transparent,transparent_33px,rgba(93,111,85,0.045)_34px)] sm:px-14">
      <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_60px_rgba(120,100,60,0.18)]" />
      <LeafBranch variant="leaf" className="pointer-events-none absolute -left-3 top-1/2 h-28 -translate-y-1/2 opacity-90" />
      <TwineBow className="pointer-events-none absolute left-1.5 top-1/2 h-6 w-10 -translate-y-1/2" />

      <HeartLeaf className="mb-4 h-7 w-auto text-lavender" />
      <p className="font-script text-2xl leading-tight text-forest-deep sm:text-3xl">{head}</p>
      {body && <p className="mt-3 max-w-xs text-small leading-relaxed text-ink/75">{body}</p>}
      <div className="mt-6">
        <span className="font-script text-2xl text-lavender">— {t.name}</span>
        <span className="mt-1 block text-caption uppercase tracking-[0.2em] text-sage">{t.tag}</span>
      </div>
    </div>
  );
}

function Arrow({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous story" : "Next story"}
      className="grid h-11 w-11 place-items-center rounded-full border border-sage-light/60 bg-cream text-forest shadow-sm transition-colors hover:bg-lavender hover:text-ivory"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path
          d={dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * Voices carousel (5.png): a large centre aged-paper letter flanked by peeking
 * side cards, with prev/next arrows, dot indicators and "Click to read more".
 */
export default function Carousel() {
  const n = testimonials.length;
  const [i, setI] = useState(0);
  const at = (k: number) => testimonials[(i + k + n) % n];
  const go = (k: number) => setI((p) => (p + k + n) % n);

  return (
    <section className="relative overflow-hidden px-5 py-10 sm:px-8">
      <div className="relative mx-auto flex max-w-5xl items-center justify-center">
        {/* side peeks (desktop) */}
        <div className="pointer-events-none absolute left-0 hidden w-72 -rotate-3 opacity-55 blur-[0.4px] lg:block" aria-hidden>
          <div className="aspect-4/5 -translate-x-1/4 scale-90"><Letter t={at(-1)} /></div>
        </div>
        <div className="pointer-events-none absolute right-0 hidden w-72 rotate-3 opacity-55 blur-[0.4px] lg:block" aria-hidden>
          <div className="aspect-4/5 translate-x-1/4 scale-90"><Letter t={at(1)} /></div>
        </div>

        {/* arrows */}
        <div className="absolute left-0 z-20 lg:-left-4"><Arrow dir="prev" onClick={() => go(-1)} /></div>
        <div className="absolute right-0 z-20 lg:-right-4"><Arrow dir="next" onClick={() => go(1)} /></div>

        {/* centre card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="aspect-4/5 shadow-[0_22px_50px_-20px_rgba(70,80,50,0.5)]">
            <Letter t={at(0)} />
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="mx-auto mt-6 block rounded-full bg-forest px-6 py-2.5 text-small font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Click to read more
          </button>
        </div>
      </div>

      {/* dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {testimonials.map((t, k) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Go to story ${k + 1}`}
            aria-current={k === i}
            className={`h-2.5 rounded-full transition-all ${k === i ? "w-6 bg-lavender" : "w-2.5 bg-sage-light hover:bg-sage"}`}
          />
        ))}
      </div>
    </section>
  );
}
