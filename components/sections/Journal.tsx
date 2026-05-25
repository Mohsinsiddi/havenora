"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
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

/** The aged-paper letter face — matches assets/5.png. */
function LetterContent({ t }: { t: T }) {
  const [head, body] = split(t.quote);
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#f3ead6] px-12 py-10 text-center [background-image:repeating-linear-gradient(transparent,transparent_33px,rgba(93,111,85,0.045)_34px)] sm:px-14">
      {/* aged edge + spine shading */}
      <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_60px_rgba(120,100,60,0.18)]" />

      {/* olive sprig laid on the left margin + twine tied around it */}
      <LeafBranch variant="leaf" className="pointer-events-none absolute -left-3 top-1/2 h-28 -translate-y-1/2 opacity-90" />
      <TwineBow className="pointer-events-none absolute left-1.5 top-1/2 h-6 w-10 -translate-y-1/2" />

      {/* lavender heart-sprig */}
      <HeartLeaf className="mb-4 h-7 w-auto text-lavender" />

      {/* script headline */}
      <p className="font-script text-2xl leading-tight text-forest-deep sm:text-3xl">{head}</p>

      {/* body */}
      {body && <p className="mt-3 max-w-xs text-small leading-relaxed text-ink/75">{body}</p>}

      {/* signature */}
      <div className="mt-6">
        <span className="font-script text-2xl text-lavender">— {t.name}</span>
        <span className="mt-1 block text-caption uppercase tracking-[0.2em] text-sage">{t.tag}</span>
      </div>
    </div>
  );
}

/** Letter page wrapper with stacked-paper backing (forwardRef for react-pageflip). */
const LetterPage = forwardRef<HTMLDivElement, { t: T }>(function LetterPage({ t }, ref) {
  return (
    <div ref={ref} className="rounded-sm ring-1 ring-[#e0d2af]">
      <LetterContent t={t} />
    </div>
  );
});

const CoverPage = forwardRef<HTMLDivElement, Record<string, never>>(function CoverPage(_p, ref) {
  return (
    <div ref={ref} data-density="hard" className="overflow-hidden rounded-sm ring-1 ring-forest/30">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-forest-deep p-10 text-center text-ivory">
        <LeafBranch flip className="pointer-events-none absolute -left-6 top-2 h-32 rotate-[12deg] opacity-50" />
        <HeartLeaf className="h-9 w-auto text-ivory/90" />
        <p className="mt-4 eyebrow text-ivory/70">Voices of Healing</p>
        <h3 className="mt-2 font-display text-h2 text-ivory">A little book of letters</h3>
        <p className="mt-3 font-script text-2xl text-lavender-soft">turn the page, gently.</p>
      </div>
    </div>
  );
});

export default function Journal() {
  const trackRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const book = useRef<any>(null);
  const target = useRef(0);
  const [flip, setFlip] = useState(false);
  const N = testimonials.length;
  const pageCount = N + 1;

  useEffect(() => {
    if (!prefersReducedMotion()) setFlip(true);
  }, []);

  useEffect(() => {
    if (!flip || !trackRef.current) return;
    const st = ScrollTrigger.create({
      trigger: trackRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const next = Math.round(self.progress * (pageCount - 1));
        if (next !== target.current) {
          target.current = next;
          book.current?.pageFlip?.()?.flip(next);
        }
      },
    });
    const id = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { st.kill(); clearTimeout(id); };
  }, [flip, pageCount]);

  // static fallback (SSR / no-JS / reduced motion) — stacked letters
  if (!flip) {
    return (
      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="min-h-80 rounded-sm shadow-lg ring-1 ring-[#e0d2af]">
              <LetterContent t={t} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={trackRef} style={{ height: `${Math.max(320, pageCount * 60)}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-5">
        <LeafBranch flip className="pointer-events-none absolute -left-10 top-10 hidden h-56 -rotate-[16deg] opacity-60 lg:block" />
        <LeafBranch className="pointer-events-none absolute -right-10 bottom-6 hidden h-56 rotate-[200deg] opacity-60 lg:block" />
        <p className="mb-6 font-script text-2xl text-lavender">Scroll to turn the page</p>

        {/* stacked-paper shadow behind the book for a "pile of letters" feel */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-2 -rotate-1 rounded-sm bg-[#e7dcc2] shadow-xl" aria-hidden />
          <div className="pointer-events-none absolute -inset-1 rotate-1 rounded-sm bg-[#efe4ca] shadow-lg" aria-hidden />
          <HTMLFlipBook
            ref={book}
            width={420}
            height={560}
            size="stretch"
            minWidth={280}
            maxWidth={520}
            minHeight={400}
            maxHeight={640}
            drawShadow
            maxShadowOpacity={0.5}
            showCover
            flippingTime={800}
            usePortrait
            mobileScrollSupport
            useMouseEvents
            showPageCorners
            startPage={0}
            startZIndex={0}
            autoSize
            clickEventForward
            swipeDistance={30}
            disableFlipByClick={false}
            className="havenora-book relative"
            style={{}}
          >
            <CoverPage />
            {testimonials.map((t) => (
              <LetterPage key={t.name} t={t} />
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </section>
  );
}
