import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Carousel from "@/components/sections/Carousel";
import CtaStrip from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  title: "Voices of Healing — Stories that stay with you",
  description:
    "Real reflections from people who walked their own gentle path. Every soul you meet is a reminder — you're not alone on this journey.",
};

export default function VoicesPage() {
  return (
    <>
      <PageHeader eyebrow="Voices of Healing" title="Stories that" accent="stay with you.">
        Every soul you meet is a reminder — you&apos;re not alone on this journey. A few words from those who walked their own gentle path.
      </PageHeader>

      <Carousel />

      <CtaStrip
        title="Your story matters."
        body="When you're ready, we'd be honored to be part of it."
        buttons={[{ label: "Start your journey", href: "/contact", leaf: true }, { label: "Learn more about therapy", href: "/for-you", variant: "outline" }]}
      />
    </>
  );
}
