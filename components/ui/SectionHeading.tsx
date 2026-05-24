import type { ReactNode } from "react";
import { Reveal } from "@/components/animation/Reveal";

/**
 * Eyebrow + display heading with an optional Dancing Script accent line,
 * matching the section headers across the mockups (e.g. "A gentle path /
 * from where you are").
 */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "center",
  children,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  accent?: string;
  align?: "center" | "left";
  children?: ReactNode;
  className?: string;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-3 flex items-center gap-2 text-sage">
          <span className="h-px w-6 bg-sage/50" aria-hidden />
          {eyebrow}
          <span className="h-px w-6 bg-sage/50" aria-hidden />
        </span>
      )}
      <h2 className="text-h2 text-forest">{title}</h2>
      {accent && <span className="mt-1 font-script text-3xl text-lavender sm:text-4xl">{accent}</span>}
      {children && <p className="mt-4 max-w-xl text-body-lg text-ink/75">{children}</p>}
    </Reveal>
  );
}
