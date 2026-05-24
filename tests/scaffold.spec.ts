import { test, expect } from "@playwright/test";

/**
 * Milestone 1 gate: tokens + fonts actually compute in the browser,
 * the page renders with no horizontal overflow, and core copy is present.
 * (Pixel-vs-mockup regression tests are added per page in later milestones.)
 */

const TOKENS: Record<string, string> = {
  "--color-forest": "rgb(61, 82, 64)",
  "--color-lavender": "rgb(111, 80, 155)",
  "--color-cream": "rgb(251, 246, 238)",
  "--color-honey": "rgb(224, 185, 133)",
};

test("design tokens resolve to the spec hex values", async ({ page }) => {
  await page.goto("/");
  const root = page.locator(":root");
  for (const [name, expected] of Object.entries(TOKENS)) {
    const value = await root.evaluate(
      (el, n) => getComputedStyle(el).getPropertyValue(n).trim(),
      name,
    );
    // tokens are authored as hex; normalize by painting into a probe element
    const rgb = await page.evaluate((hex) => {
      const d = document.createElement("div");
      d.style.color = hex;
      document.body.appendChild(d);
      const c = getComputedStyle(d).color;
      d.remove();
      return c;
    }, value);
    expect(rgb, name).toBe(expected);
  }
});

test("brand fonts are applied", async ({ page }) => {
  await page.goto("/");
  const h1Font = await page
    .locator("h1")
    .first()
    .evaluate((el) => getComputedStyle(el).fontFamily);
  expect(h1Font.toLowerCase()).toContain("playfair");

  const scriptFont = await page
    .locator(".font-script")
    .first()
    .evaluate((el) => getComputedStyle(el).fontFamily);
  expect(scriptFont.toLowerCase()).toContain("dancing");
});

test("renders without horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});
