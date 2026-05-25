import Image from "next/image";
import LeafBranch from "@/components/brand/LeafBranch";

/**
 * Image panel. When `src` is given it renders a real photo (next/image,
 * object-cover) with a soft warm overlay + botanical accent so it sits in the
 * brand world. Without `src` it renders an on-brand placeholder.
 *
 * Photos live in /public (the site never references the reference-only
 * `assets/` folder). `data-image-slot` marks every photo location.
 */
export default function ImagePanel({
  src,
  alt = "",
  label = "photo",
  className = "",
  rounded = "rounded-[2rem]",
  priority = false,
  feather = false,
  zoom = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  /** soft-fade edges so the photo merges into the background (hero look) */
  feather?: boolean;
  /** scale the photo in for a closer, zoomed crop */
  zoom?: boolean;
}) {
  // feathered: filled image whose edges softly melt into the cream background
  // (used for the stacked mobile hero + About) — a gentle radial fade.
  const featherMask =
    "[mask-image:radial-gradient(125%_115%_at_50%_45%,#000_60%,transparent_95%)]";
  return (
    <div
      data-image-slot={label}
      className={`relative overflow-hidden ${feather ? "" : `${rounded} ring-1 ring-sage-light/40`} ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover object-center ${zoom ? "scale-125" : ""} ${feather ? featherMask : ""}`}
            priority={priority}
          />
          {/* gentle warm wash to blend the photo into the palette */}
          <div className={`pointer-events-none absolute inset-0 bg-linear-to-tr from-forest/10 via-transparent to-cream/10 ${feather ? featherMask : ""}`} />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-beige via-cream to-sage-light/50">
          <div className="absolute inset-0 bg-honey/15" />
          <LeafBranch className="absolute -left-6 -top-4 h-2/3 rotate-[12deg] opacity-60" />
          <LeafBranch flip className="absolute -right-6 -bottom-4 h-1/2 rotate-[200deg] opacity-50" />
        </div>
      )}
    </div>
  );
}
