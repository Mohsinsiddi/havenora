import type { Metadata } from "next";
import GentlePath from "@/components/sections/GentlePath";
import Modalities from "@/components/sections/Modalities";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For You — A gentle path",
  description:
    "Therapy isn't about having all the answers. It's about taking one step at a time — together. See how the journey works and the approaches we use.",
};

export default function ForYouPage() {
  return (
    <>
      <GentlePath />
      <Modalities />
      <CTASection />
    </>
  );
}
