/**
 * Hand-built SVG botanicals used as decorative, parallax-able leaves/branches
 * across sections. Purely ornamental (aria-hidden). Mirror with `flip`, recolor
 * with `tone` (sage | lavender), wrap in <Parallax> for depth. Echoes the
 * watercolor sprigs in the mockups. No external image assets.
 */

const TONES = {
  sage: { dark: "#6f7d5c", light: "#a7b58e", stem: "#7c8767", berry: "#cdb892" },
  lavender: { dark: "#8d7bb0", light: "#b9abd1", stem: "#9a8cba", berry: "#cdb892" },
} as const;

export type BotanicalTone = keyof typeof TONES;
export type BotanicalVariant = "sprig" | "branch" | "olive" | "leaf" | "frond";

function Leaf({
  x,
  y,
  rot,
  len = 24,
  w = 8,
  fill,
}: {
  x: number;
  y: number;
  rot: number;
  len?: number;
  w?: number;
  fill: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M0 0 Q ${len * 0.5} -${w} ${len} 0 Q ${len * 0.5} ${w * 0.55} 0 0 Z`} fill={fill} />
      <path d={`M2 0 Q ${len * 0.5} -${w * 0.2} ${len - 2} 0`} fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="0.6" />
    </g>
  );
}

export default function Botanical({
  variant = "sprig",
  tone = "sage",
  className,
  flip = false,
}: {
  variant?: BotanicalVariant;
  tone?: BotanicalTone;
  className?: string;
  flip?: boolean;
}) {
  const t = TONES[tone];
  const common = {
    className,
    style: flip ? { transform: "scaleX(-1)" } : undefined,
    "aria-hidden": true as const,
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (variant === "leaf") {
    return (
      <svg viewBox="0 0 40 22" {...common}>
        <Leaf x={2} y={11} rot={0} len={36} w={9} fill={t.dark} />
      </svg>
    );
  }

  if (variant === "branch") {
    // lush leafy branch — paired leaves along a gentle curve (eucalyptus feel)
    const pts: [number, number, number][] = [
      [34, 88, 8], [44, 82, 4], [56, 74, 0], [68, 66, -4],
      [82, 57, -8], [96, 48, -12], [112, 39, -16], [128, 31, -20],
      [146, 23, -24], [164, 16, -28],
    ];
    return (
      <svg viewBox="0 0 220 110" {...common}>
        <path d="M6 96 C 70 84 140 46 210 10" fill="none" stroke={t.stem} strokeWidth="2.2" strokeLinecap="round" />
        {pts.map(([x, y, base], i) => (
          <g key={i}>
            <Leaf x={x} y={y} rot={base + 232} len={24} w={9} fill={i % 2 ? t.light : t.dark} />
            <Leaf x={x} y={y} rot={base + 308} len={24} w={9} fill={i % 2 ? t.dark : t.light} />
          </g>
        ))}
        <Leaf x={172} y={11} rot={272} len={20} w={7} fill={t.dark} />
      </svg>
    );
  }

  if (variant === "olive") {
    return (
      <svg viewBox="0 0 200 90" {...common}>
        <path d="M4 78 C 70 66 130 44 196 10" fill="none" stroke={t.stem} strokeWidth="2" strokeLinecap="round" />
        {([
          [36, 70, 200],
          [58, 62, 252],
          [82, 52, 205],
          [104, 44, 255],
          [130, 33, 208],
          [154, 24, 256],
        ] as [number, number, number][]).map(([x, y, r], i) => (
          <Leaf key={i} x={x} y={y} rot={r} len={28} w={6} fill={i % 2 ? t.light : t.dark} />
        ))}
        {([[70, 60], [116, 40], [160, 22]] as [number, number][]).map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.4" fill={t.berry} />
        ))}
      </svg>
    );
  }

  if (variant === "frond") {
    return (
      <svg viewBox="0 0 90 200" {...common}>
        <path d="M45 196 C 45 130 45 70 45 8" fill="none" stroke={t.stem} strokeWidth="2.2" strokeLinecap="round" />
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 184 - i * 20;
          const s = 1 - i * 0.06;
          return (
            <g key={i}>
              <Leaf x={45} y={y} rot={210} len={26 * s} w={7 * s} fill={i % 2 ? t.light : t.dark} />
              <Leaf x={45} y={y} rot={330} len={26 * s} w={7 * s} fill={i % 2 ? t.dark : t.light} />
            </g>
          );
        })}
      </svg>
    );
  }

  // sprig (default) — short corner accent
  return (
    <svg viewBox="0 0 120 90" {...common}>
      <path d="M8 82 C 36 70 64 46 110 10" fill="none" stroke={t.stem} strokeWidth="2.2" strokeLinecap="round" />
      {([
        [30, 70, 200, t.dark],
        [46, 60, 255, t.light],
        [66, 46, 205, t.dark],
        [84, 34, 258, t.light],
        [100, 20, 210, t.dark],
      ] as [number, number, number, string][]).map(([x, y, r, f], i) => (
        <Leaf key={i} x={x} y={y} rot={r} fill={f} />
      ))}
    </svg>
  );
}
