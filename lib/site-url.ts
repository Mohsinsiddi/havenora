/**
 * Canonical site URL for metadata / OG / sitemap. Resolves in priority order:
 *  1. NEXT_PUBLIC_SITE_URL  — set this to your final custom domain
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's stable production domain
 *  3. VERCEL_URL — the per-deployment URL (preview builds)
 *  4. localhost fallback (dev)
 * This guarantees the OG image URL is always reachable on whatever host the
 * build is actually served from (fixes "OG image invalid/unreachable").
 */
export function getSiteUrl(): string {
  const env =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;
  if (env) return env.startsWith("http") ? env : `https://${env}`;
  return "http://localhost:3000";
}
