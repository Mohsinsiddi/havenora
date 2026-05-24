/**
 * Havenora badge — SVG recreation of assets/logo.png:
 * sage egg-frame · lush leaf branch (lower-left → top) · pale sun · small house
 * on soft layered hills · winding cream path. Parts are id'd/grouped so the
 * hero can animate them (branch draws in, sun rises). Vector → crisp at any size.
 */

const C = {
  frame: "#5d6f55",
  leafDark: "#6f7d5c",
  leafLight: "#a7b58e",
  stem: "#7c8767",
  sun: "#efe6cd",
  hillBack: "#7e8e66",
  hillMid: "#93a279",
  hillFront: "#b3bf9b",
  house: "#f6f1e6",
  houseLine: "#5d6f55",
  path: "#eee6d4",
} as const;

// Slim, pointed, gently-curved leaf placed/rotated along a stem.
function Leaf({
  x,
  y,
  rot,
  len = 22,
  w = 7,
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
      <path d={`M0 0 Q ${len * 0.5} -${w} ${len} 0 Q ${len * 0.5} ${w * 0.5} 0 0 Z`} fill={fill} />
      <path d={`M1.5 0 Q ${len * 0.5} -1.4 ${len - 1.5} 0`} fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="0.6" />
    </g>
  );
}

export default function BrandMark({
  className,
  title = "Havenora Care",
}: {
  className?: string;
  title?: string;
}) {
  // leaves along the branch, sweeping upward-and-outward: [x, y, angle, len]
  const branchLeaves: [number, number, number, number][] = [
    [66, 170, 232, 26], // up-left
    [70, 150, 320, 22], // up-right
    [74, 132, 226, 27],
    [80, 112, 318, 23],
    [86, 94, 222, 26],
    [92, 78, 314, 22],
    [98, 64, 250, 22],
    [101, 56, 300, 18], // tip
  ];

  return (
    <svg
      viewBox="0 0 200 232"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="havenora-oval">
          <rect x="26" y="12" width="148" height="208" rx="74" ry="82" />
        </clipPath>
      </defs>

      {/* egg frame */}
      <rect x="20" y="6" width="160" height="220" rx="80" ry="84" fill="none" stroke={C.frame} strokeWidth="2.2" />

      <g clipPath="url(#havenora-oval)">
        {/* sun */}
        <circle id="hv-sun" cx="134" cy="56" r="20" fill={C.sun} />

        {/* soft layered hills */}
        <path d="M26 152 C 60 124 92 140 116 150 C 146 162 164 150 174 144 L174 220 L26 220 Z" fill={C.hillBack} />
        <path d="M26 170 C 58 152 90 166 116 170 C 146 174 162 166 174 162 L174 220 L26 220 Z" fill={C.hillMid} />
        <path d="M26 188 C 56 176 96 184 124 186 C 150 188 164 182 174 180 L174 220 L26 220 Z" fill={C.hillFront} />

        {/* winding path */}
        <path d="M92 220 C 98 200 114 194 120 184 C 126 174 122 164 132 158" fill="none" stroke={C.path} strokeWidth="8" strokeLinecap="round" />

        {/* house */}
        <g id="hv-house">
          <rect x="122" y="124" width="24" height="22" fill={C.house} stroke={C.houseLine} strokeWidth="1.5" />
          <path d="M118 126 L134 110 L150 126 Z" fill={C.house} stroke={C.houseLine} strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="143" y="113" width="4.5" height="9" fill={C.house} stroke={C.houseLine} strokeWidth="1.3" />
        </g>

        {/* lush leaf branch */}
        <g id="hv-branch">
          <path d="M58 200 C 64 154 74 108 101 54" fill="none" stroke={C.stem} strokeWidth="2.2" strokeLinecap="round" />
          {branchLeaves.map(([x, y, r, len], i) => (
            <Leaf key={i} x={x} y={y} rot={r} len={len} w={8} fill={i % 2 ? C.leafLight : C.leafDark} />
          ))}
        </g>
      </g>
    </svg>
  );
}
