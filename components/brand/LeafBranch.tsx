import Image from "next/image";

/**
 * Watercolor botanicals extracted from the reference art (transparent PNGs in
 * public/botanicals). The single consistent leaf system across all pages:
 *   - "branch": tall lavender + leaf branch (corners / framing)
 *   - "leaf": small green leaf sprig (inline accents)
 * Size via className height; `flip` mirrors it; pass rotation through className.
 * Purely ornamental.
 */
const SRC = {
  branch: { src: "/botanicals/branch.png", width: 160, height: 430 },
  leaf: { src: "/botanicals/leaf.png", width: 160, height: 194 },
} as const;

export default function LeafBranch({
  variant = "branch",
  className = "",
  flip = false,
}: {
  variant?: "branch" | "leaf";
  className?: string;
  flip?: boolean;
}) {
  const s = SRC[variant];
  return (
    <Image
      src={s.src}
      alt=""
      aria-hidden
      width={s.width}
      height={s.height}
      className={`${flip ? "-scale-x-100" : ""} ${className}`}
      style={{ width: "auto" }}
    />
  );
}
