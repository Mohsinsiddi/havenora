import Image from "next/image";
import Botanical from "@/components/brand/Botanical";

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
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  /** soft-fade edges so the photo merges into the background (hero look) */
  feather?: boolean;
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
            className={`object-cover ${feather ? featherMask : ""}`}
            priority={priority}
          />
          {/* gentle warm wash to blend the photo into the palette */}
          <div className={`pointer-events-none absolute inset-0 bg-linear-to-tr from-forest/10 via-transparent to-cream/10 ${feather ? featherMask : ""}`} />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-beige via-cream to-sage-light/50">
          <div className="absolute inset-0 bg-honey/15" />
          <Botanical variant="frond" className="absolute -right-4 -top-3 h-2/3 w-auto opacity-30" />
          <Botanical variant="branch" className="absolute -left-6 bottom-0 h-1/2 w-auto opacity-40" />
          <Botanical variant="sprig" tone="lavender" className="absolute right-8 bottom-6 h-16 w-auto opacity-50" />
        </div>
      )}
    </div>
  );
}
