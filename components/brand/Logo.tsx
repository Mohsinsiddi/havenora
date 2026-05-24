import BrandMark from "./BrandMark";

/**
 * Full logo lockup: badge + "Havenora" wordmark (+ optional CARE / tagline).
 * Wordmark uses the live Playfair font so it stays crisp and editable.
 * `variant="horizontal"` for header/footer; `variant="stacked"` for hero.
 */
export default function Logo({
  variant = "horizontal",
  withTagline = false,
  className,
  markClassName,
  onDark = false,
  hideWordmarkOnMobile = false,
}: {
  variant?: "horizontal" | "stacked";
  withTagline?: boolean;
  className?: string;
  markClassName?: string;
  onDark?: boolean;
  /** horizontal only — show just the badge on phones, full lockup on sm+ */
  hideWordmarkOnMobile?: boolean;
}) {
  const wordColor = onDark ? "text-ivory" : "text-forest";
  const subColor = onDark ? "text-ivory/70" : "text-sage";

  const word = (
    <div className="flex flex-col leading-none">
      <span className={`font-display ${wordColor} tracking-tight`}>Havenora</span>
      <span className={`eyebrow mt-1 ${subColor}`}>
        <span aria-hidden>—</span> Care <span aria-hidden>—</span>
      </span>
      {withTagline && (
        <span className={`eyebrow mt-2 ${subColor} tracking-[0.18em]`}>
          A safe place to heal, grow &amp; thrive
        </span>
      )}
    </div>
  );

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-3 text-center ${className ?? ""}`}>
        <BrandMark className={markClassName ?? "h-28 w-auto"} />
        <div className="flex flex-col items-center leading-none">
          <span className={`font-display text-h2 ${wordColor} tracking-tight`}>
            Havenora
          </span>
          <span className={`eyebrow mt-1 ${subColor}`}>
            <span aria-hidden>—</span> Care <span aria-hidden>—</span>
          </span>
          {withTagline && (
            <span className={`eyebrow mt-2 ${subColor} tracking-[0.18em]`}>
              A safe place to heal, grow &amp; thrive
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <BrandMark className={markClassName ?? "h-11 w-auto"} />
      <div className={`text-xl sm:text-2xl ${hideWordmarkOnMobile ? "hidden sm:block" : ""}`}>
        {word}
      </div>
    </div>
  );
}
