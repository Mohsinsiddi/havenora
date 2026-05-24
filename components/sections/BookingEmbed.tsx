"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

/**
 * Cal.com inline booking embed, themed to the brand. Reads the calendar link
 * from NEXT_PUBLIC_CAL_LINK. Until Havenora's own Cal account exists, this
 * defaults to Cal.com's public demo link ("rick") so the embed shows a real,
 * working calendar — set NEXT_PUBLIC_CAL_LINK to the real link to swap, no
 * code change needed. Client-only (mounted guard).
 */
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "rick";

export default function BookingEmbed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#3d5240" },
          dark: { "cal-brand": "#a7b58e" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (!mounted) {
    return (
      <div className="grid min-h-96 place-items-center rounded-3xl border border-sage-light/40 bg-ivory/70 text-small text-sage">
        Loading the calendar…
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-sage-light/40 bg-ivory">
      <Cal
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", minHeight: "640px", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
