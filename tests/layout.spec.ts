import { test, expect } from "@playwright/test";

/**
 * Milestone 4 gate — Header + Footer.
 * Structure matches the mockups (nav labels, footer columns), the mobile menu
 * works, every nav/footer link has a destination, and no breakpoint overflows.
 */

// Exact nav labels from the header mockup (1.png).
const NAV = ["Home", "About", "Services", "For You", "Resources", "Contact"];
// Exact footer column titles from 8.png.
const FOOTER_COLS = ["Company", "Services", "Resources", "Contact"];

test("header shows the brand, every nav item, and Book a Session", async ({ page }) => {
  await page.goto("/");
  const header = page.locator("header");
  await expect(header.getByLabel("Havenora Care — home")).toBeVisible();
  for (const label of NAV) {
    await expect(header.getByRole("link", { name: label, exact: true }).first()).toBeVisible();
  }
  await expect(header.getByRole("link", { name: /Book a Session/ }).first()).toBeVisible();
});

test("every header nav link has a destination (button-vs-asset check)", async ({ page }) => {
  await page.goto("/");
  const links = page.locator("header nav a");
  const count = await links.count();
  expect(count).toBeGreaterThanOrEqual(NAV.length);
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute("href");
    expect(href, `nav link ${i}`).toBeTruthy();
  }
});

test("header becomes frosted after scrolling", async ({ page }) => {
  await page.goto("/");
  const header = page.locator("header");
  await expect(header).toHaveClass(/bg-transparent/);
  await page.waitForTimeout(300); // let Lenis initialize
  // scroll via Lenis + native, then nudge the listener — robust across touch/desktop
  await page.evaluate(() => {
    const w = window as unknown as { __lenis?: { scrollTo: (n: number, o?: object) => void } };
    w.__lenis?.scrollTo(700, { immediate: true });
    window.scrollTo(0, 700);
    window.dispatchEvent(new Event("scroll"));
  });
  await expect
    .poll(async () => (await header.getAttribute("class")) ?? "", { timeout: 6000 })
    .toContain("backdrop-blur");
});

test("mobile menu toggles open and closed", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 } });
  const page = await ctx.newPage();
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  // drawer nav link is now reachable
  await expect(page.locator("header nav").getByRole("link", { name: "Services" })).toBeVisible();
  await ctx.close();
});

test("footer has all columns, newsletter and the ribbon", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  for (const title of FOOTER_COLS) {
    await expect(footer.getByRole("heading", { name: title, exact: true })).toBeVisible();
  }
  await expect(footer.getByRole("heading", { name: "Stay Connected" })).toBeVisible();
  await expect(footer.getByPlaceholder("Your email")).toBeVisible();
  await expect(footer.getByRole("button", { name: "Subscribe" })).toBeVisible();
  await expect(footer.getByText(/A gentle space/)).toBeVisible();
  await expect(footer.getByText(/All rights reserved/)).toBeVisible();
});

test("no horizontal overflow at any breakpoint", async ({ page }) => {
  for (const w of [360, 390, 768, 834, 1280, 1440, 1920]) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `overflow @${w}px`).toBeLessThanOrEqual(1);
  }
});
