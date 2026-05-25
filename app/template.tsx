"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Per-navigation page transition (soft fade-up) + scroll reset. template.tsx
 * remounts on every route change, so it both animates the new page in and
 * snaps Lenis/native scroll back to the top.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.__lenis?.scrollTo(0, { immediate: true });
  }, []);

  // opacity-only fade: no transform on the page wrapper, so it never creates a
  // containing block (keeps the fixed header stable) and adds no scroll repaint.
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
