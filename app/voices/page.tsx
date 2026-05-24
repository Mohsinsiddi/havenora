import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Journal from "@/components/sections/Journal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Voices of Healing — Stories that stay with you",
  description:
    "Real reflections from people who walked their own gentle path. Every soul you meet is a reminder — you're not alone on this journey.",
};

export default function VoicesPage() {
  return (
    <>
      <PageHeader eyebrow="Voices of Healing" title="Stories that" accent="stay with you.">
        Every soul you meet is a reminder — you&apos;re not alone on this journey. Turn through a few letters from those who walked their own gentle path.
      </PageHeader>

      <Journal />

      <CTASection />
    </>
  );
}
