import Hero from "@/components/sections/Hero";
import InfoBar from "@/components/sections/InfoBar";

/**
 * Home — faithful to the mockup (1.png): hero (with the 4 value pillars below
 * the buttons) → info/pricing bar, flowing into the footer's "A gentle space…"
 * ribbon.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
    </>
  );
}
