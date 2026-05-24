import type { MetadataRoute } from "next";

const base = "https://havenora.care";
const routes = ["", "/about", "/services", "/for-you", "/voices", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
