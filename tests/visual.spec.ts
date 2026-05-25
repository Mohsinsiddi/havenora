import { test, expect, type Page } from "@playwright/test";

/**
 * Visual-regression baselines. First run seeds tests/__screenshots__ (run with
 * `--update-snapshots`); later runs catch drift (maxDiffPixelRatio in config).
 * Limited to two representative viewports to keep baselines manageable; reveals
 * are pre-triggered and animations frozen for stability.
 */
const TARGETS = ["desktop-1440", "mobile-390"];

const ROUTES: [string, string][] = [
  ["home", "/"],
  ["services", "/services"],
  ["for-you", "/for-you"],
  ["voices", "/voices"],
  ["about", "/about"],
  ["contact", "/contact"],
];

async function settle(page: Page) {
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 500) {
    await page.evaluate((Y) => window.scrollTo(0, Y), y);
    await page.waitForTimeout(70);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

test.describe("visual regression", () => {
  test.beforeEach(({}, testInfo) => {
    test.skip(!TARGETS.includes(testInfo.project.name), "two key viewports only");
  });

  for (const [name, route] of ROUTES) {
    test(name, async ({ page }) => {
      await page.goto(route);
      await settle(page);
      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        animations: "disabled",
        // dynamic / interactive bits that legitimately change between runs
        mask: [page.locator("#book"), page.locator("section:has(button[aria-label='Next story'])")],
      });
    });
  }
});
