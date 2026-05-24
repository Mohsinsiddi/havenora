import { test, expect } from "@playwright/test";

/**
 * Milestone 5 gate — Home page (faithful to 1.png + preview sections).
 * Content present, every CTA points to the right place (button-vs-asset),
 * pricing matches the mockup, hero animates in, no overflow.
 */

test("hero shows headline, accent, blurb and both CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Therapy that");
  await expect(page.getByText("safe, real & supportive.")).toBeVisible();
  await expect(page.locator("[data-anim='blurb']")).toContainText("Compassionate support for your mind");

  const book = page.getByRole("link", { name: /Book a Session/ }).first();
  await expect(book).toHaveAttribute("href", "/contact");
  const explore = page.getByRole("link", { name: /Explore Services/ });
  await expect(explore).toHaveAttribute("href", "/services");

  // floating quote card (lead + script accent) — present for both desktop & mobile layouts
  await expect(page.getByText("A space to be", { exact: true }).first()).toBeAttached();
  await expect(page.getByText("yourself — fully.", { exact: true }).first()).toBeAttached();
});

test("hero headline animates to fully visible", async ({ page }) => {
  await page.goto("/");
  const lead = page.locator("[data-anim='lead']");
  await expect.poll(async () => lead.evaluate((el) => Number(getComputedStyle(el).opacity))).toBeGreaterThan(0.95);
});

test("value chips render all four pillars", async ({ page }) => {
  await page.goto("/");
  for (const t of ["Safe & Confidential", "Personalized Care", "Holistic Approach", "Growth & Healing"]) {
    await expect(page.getByText(t, { exact: true })).toBeVisible();
  }
});

test("info bar shows the session pricing from the mockup", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Online Sessions", { exact: true })).toBeVisible();
  await expect(page.getByText(/60 minutes · ₹1500/)).toBeVisible();
  await expect(page.getByText(/75–90 minutes · ₹3000/)).toBeVisible();
});

test("home matches the mockup scope (no extra preview sections)", async ({ page }) => {
  await page.goto("/");
  // 1.png home is hero + chips + pricing only — services/testimonials previews live on their own pages
  await expect(page.getByRole("link", { name: /Explore all services/ })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Read more voices/ })).toHaveCount(0);
});

test("no horizontal overflow on the home page", async ({ page }) => {
  for (const w of [360, 390, 768, 834, 1280, 1440, 1920]) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `overflow @${w}px`).toBeLessThanOrEqual(1);
  }
});
