import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import BookingEmbed from "@/components/sections/BookingEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import LeafBranch from "@/components/brand/LeafBranch";
import { Laptop, Heart, LeafSpark } from "@/components/ui/icons";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Let's take the next gentle step",
  description:
    "Reach out to book a session or ask a question. Online and in-person therapy, at a pace that feels right for you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get in touch" title="Let's take the next" accent="gentle step — together.">
        Whether you&apos;re ready to begin or just have a question, we&apos;d love to hear from you. No pressure, just a warm hello.
      </PageHeader>

      <section className="overflow-x-clip px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* info */}
          <Reveal direction="left" className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-forest-deep p-8 text-ivory">
              <LeafBranch flip className="pointer-events-none absolute -right-8 -top-4 h-44 rotate-[195deg] opacity-45" />
              <h2 className="font-display text-h3 text-ivory">A space that meets you</h2>
              <p className="mt-2 text-small text-ivory/75">However you prefer to connect, we&apos;re here.</p>

              <ul className="mt-7 space-y-5 text-small">
                <li className="flex items-start gap-3">
                  <Heart className="mt-0.5 text-lg text-lavender-soft" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Laptop className="mt-0.5 text-lg text-lavender-soft" />
                  <span>Online &amp; in-person sessions available</span>
                </li>
                <li className="flex items-start gap-3">
                  <LeafSpark className="mt-0.5 text-lg text-lavender-soft" />
                  <span>Individual ₹1500 · Couples ₹3000 · Teen ₹1200</span>
                </li>
              </ul>

              <a
                href="#book"
                className="mt-8 block rounded-2xl border border-ivory/30 bg-ivory/10 p-5 text-center text-small text-ivory/90 transition-colors hover:bg-ivory/15"
              >
                ↓ Pick a time below — live scheduling
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* live booking */}
      <section id="book" className="scroll-mt-28 px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Book a session" title="Choose a time that" accent="feels right.">
            Pick a slot that suits you — sessions are online or in-person, at your pace.
          </SectionHeading>
          <div className="mt-10">
            <BookingEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
