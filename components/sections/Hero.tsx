"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ButtonLink } from "@/components/ui/Button";
import ImagePanel from "@/components/ui/ImagePanel";
import LeafBranch from "@/components/brand/LeafBranch";
import Parallax from "@/components/animation/Parallax";
import { LeafSpark, ArrowRight, Heart, Leaf, Lotus, Sun } from "@/components/ui/icons";
import { hero, valueProps } from "@/lib/content";

const VALUE_ICONS = { heart: Heart, leaf: Leaf, lotus: Lotus, sun: Sun };

const PHOTO = "/photos/therapy-room.webp";
const PHOTO_ALT = "A calm, sunlit therapy room with soft armchairs, plants and warm lamplight";

function OvalCard({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div
      data-anim="quote"
      className={`z-20 flex flex-col items-center justify-center gap-0.5 rounded-full bg-linear-to-b from-[#e0d8ec] to-[#d2c9e3] text-center shadow-xl backdrop-blur-sm ${
        compact ? "w-28 px-3.5 py-5" : "w-36 px-5 py-7"
      } ${className}`}
      style={{ minHeight: compact ? "10.5rem" : "15rem" }}
    >
      <Heart className="text-sm text-lavender" />
      <p className="font-display text-sm leading-snug text-forest-deep">{hero.quote.lead}</p>
      <p className="font-script text-xl leading-tight text-lavender">{hero.quote.accent}</p>
      <p className="text-[0.65rem] leading-relaxed text-forest-deep/80">{hero.quote.body}</p>
      <Heart className="text-sm text-lavender" />
    </div>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const q = gsap.utils.selector(root);
    const targets = q("[data-anim]");

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 24 });
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
        .to(q("[data-anim='eyebrow']"), { opacity: 1, y: 0, duration: 0.6 })
        .to(q("[data-anim='lead']"), { opacity: 1, y: 0 }, "-=0.2")
        .to(q("[data-anim='accent']"), { opacity: 1, y: 0 }, "-=0.55")
        .to(q("[data-anim='blurb']"), { opacity: 1, y: 0 }, "-=0.5")
        .to(q("[data-anim='cta']"), { opacity: 1, y: 0, stagger: 0.12 }, "-=0.5")
        .to(q("[data-anim='visual']"), { opacity: 1, y: 0, duration: 1.1 }, "-=0.9")
        .to(q("[data-anim='quote']"), { opacity: 1, y: 0 }, "-=0.6");

      // gentle idle float on the quote card
      gsap.to(q("[data-anim='quote']"), {
        y: "+=10",
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:flex lg:min-h-[92vh] lg:items-center lg:pb-0"
    >
      {/* BIG merged half-screen image (lg+), zoomed via tall crop + feathered left */}
      <div data-anim="visual" data-hero-photo className="absolute inset-y-0 right-0 hidden w-1/2 lg:block xl:w-[52%]">
        <Image
          src={PHOTO}
          alt={PHOTO_ALT}
          fill
          priority
          sizes="52vw"
          className="object-cover object-[60%_center] [mask-image:linear-gradient(to_right,transparent,#000_22%)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-cream/80 via-transparent to-transparent" />
      </div>

      {/* watercolor leaf branches (extracted from the reference art) */}
      <Parallax speed={0.16} className="pointer-events-none absolute -left-16 -top-4 hidden w-44 -rotate-[18deg] md:block">
        <LeafBranch flip className="h-72" />
      </Parallax>
      {/* prominent branch draping over the top of the image */}
      <Parallax speed={-0.12} className="pointer-events-none absolute -right-6 -top-8 z-10 hidden w-48 rotate-[170deg] lg:block">
        <LeafBranch className="h-80" />
      </Parallax>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8">
        {/* copy */}
        <div className="max-w-xl">
          <span
            data-anim="eyebrow"
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-sage/40 bg-cream/60 px-4 py-2 text-sage backdrop-blur-sm"
          >
            <LeafBranch variant="leaf" className="h-4" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display leading-[1.1]">
            <span data-anim="lead" className="block text-4xl text-forest sm:text-5xl">
              {hero.titleLead}
            </span>
            <span data-anim="accent" className="block text-4xl text-lavender sm:whitespace-nowrap sm:text-5xl">
              {hero.titleAccent}
            </span>
          </h1>

          <p data-anim="blurb" className="mt-6 max-w-md text-body-lg leading-relaxed text-ink/75">
            {hero.blurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span data-anim="cta">
              <ButtonLink href="/contact" size="lg">
                Book a Session <LeafSpark className="text-honey" />
              </ButtonLink>
            </span>
            <span data-anim="cta">
              <ButtonLink href="/services" variant="ghost" size="lg">
                Explore Services <ArrowRight />
              </ButtonLink>
            </span>
          </div>
        </div>

        {/* mobile / tablet: full-bleed merged image (edge-to-edge, no card) */}
        <div className="relative order-2 -mx-5 mt-8 sm:-mx-8 lg:hidden">
          <ImagePanel
            src={PHOTO}
            alt={PHOTO_ALT}
            label="hero-room"
            priority
            feather
            zoom
            rounded="rounded-none"
            className="aspect-4/3 w-full"
          />
        </div>

        {/* value pillars — after image on mobile, below buttons on desktop */}
        <div
          data-anim="cta"
          className="order-3 mt-10 grid max-w-lg grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-0 lg:order-none"
        >
          {valueProps.map((v, i) => {
            const Icon = VALUE_ICONS[v.icon];
            const lav = i % 2 === 0;
            return (
              <div
                key={v.title}
                className="flex flex-col items-center gap-2 px-1 text-center sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-dashed sm:[&:not(:first-child)]:border-sage/40"
              >
                <span
                  className={`grid h-13 w-13 place-items-center rounded-full text-xl ${
                    lav ? "bg-lavender-soft/40 text-lavender" : "bg-sage-light/45 text-forest"
                  }`}
                >
                  <Icon />
                </span>
                <span className="text-small font-medium leading-tight text-forest">{v.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* lg+: capsule card sitting ON the image, upper area above the chair */}
      <OvalCard className="absolute left-[72.5%] top-[24%] hidden -translate-y-1/2 lg:flex xl:left-[72.5%]" />
    </section>
  );
}
