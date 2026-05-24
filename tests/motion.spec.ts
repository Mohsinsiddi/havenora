import { test, expect } from "@playwright/test";

/**
 * Milestone 2 gate: Lenis smooth scroll initializes normally, and is fully
 * disabled when the user prefers reduced motion (native scroll fallback).
 */

test("Lenis smooth scroll is active by default", async ({ page }) => {
  await page.goto("/");
  // Lenis tags the <html> element with these classes once running.
  await expect(page.locator("html")).toHaveClass(/lenis/);
  const hasInstance = await page.evaluate(() => Boolean(window.__lenis));
  expect(hasInstance).toBe(true);
});

test("reduced-motion disables smooth scroll", async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto("/");
  await page.waitForTimeout(300);
  const hasInstance = await page.evaluate(() => Boolean(window.__lenis));
  expect(hasInstance).toBe(false);
  await expect(page.locator("html")).not.toHaveClass(/lenis-smooth/);
  await ctx.close();
});
