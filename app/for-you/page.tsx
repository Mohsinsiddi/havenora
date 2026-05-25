import type { Metadata } from "next";
import GentlePath from "@/components/sections/GentlePath";
import Modalities from "@/components/sections/Modalities";
import CtaStrip from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  title: "For You — A gentle path",
  description:
    "Therapy isn't about having all the answers. It's about taking one step at a time — together. See how the journey works and the approaches we use.",
};

export default function ForYouPage() {
  return (
    <>
      <GentlePath />
      <CtaStrip
        title="You don't have to figure it out alone."
        accent="Let's take the next step — together."
        buttons={[{ label: "Book your session", href: "/contact", leaf: true }, { label: "Explore services", href: "/services", variant: "outline" }]}
      />
      <Modalities />
    </>
  );
}
