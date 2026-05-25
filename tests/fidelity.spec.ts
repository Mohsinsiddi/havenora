import { test, expect, type Page } from "@playwright/test";

/**
 * Element-by-element fidelity per the reference map (docs/audits/reference-element-map.md).
 * Presence/content checks run on every viewport; layout/position checks are
 * gated to desktop (≥1024) since the mockups are desktop compositions.
 */

const isDesktop = async (page: Page) => (page.viewportSize()?.width ?? 0) >= 1024;

/** scroll through so reveal-on-scroll sections mount before asserting. */
async function scrollThrough(page: Page) {
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 600) {
    await page.evaluate((Y) => window.scrollTo(0, Y), y);
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
}

test.describe("Home (1.png)", () => {
  test("hero + value pillars + pricing bar", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Therapy that");
    await expect(page.getByText("safe, real & supportive.")).toBeVisible();
    await expect(page.getByRole("link", { name: /Book a Session/ }).first()).toHaveAttribute("href", "/contact");
    await expect(page.getByRole("link", { name: /Explore Services/ })).toHaveAttribute("href", "/services");
    for (const v of ["Safe & Confidential", "Personalized Care", "Holistic Approach", "Growth & Healing"]) {
      await expect(page.getByText(v, { exact: true })).toBeVisible();
    }
    await expect(page.getByText(/60 minutes · ₹1500/)).toBeVisible();
    await expect(page.getByText(/75–90 minutes · ₹3000/)).toBeVisible();
    await expect(page.getByText("yourself — fully.", { exact: true }).first()).toBeAttached();
  });

  test("desktop: photo occupies the right half", async ({ page }) => {
    test.skip(!(await isDesktop(page)), "desktop layout only");
    await page.goto("/");
    const img = page.locator("[data-hero-photo]");
    const box = await img.boundingBox();
    const vw = page.viewportSize()!.width;
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThan(vw * 0.45);
  });
});

test.describe("Services (2.png)", () => {
  test("header, 4 service cards, CtaStrip — no pricing info bar", async ({ page }) => {
    await page.goto("/services");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Support for every");
    for (const s of ["Individual Therapy", "Couples Therapy", "Teen Therapy", "Group Therapy"]) {
      await expect(page.getByRole("heading", { name: s, exact: true })).toBeVisible();
    }
    await scrollThrough(page);
    await expect(page.getByRole("heading", { name: /Whatever you're facing/ })).toBeVisible();
    await expect(page.getByText("you don't have to face it alone.")).toBeVisible();
    // the pricing InfoBar (note copy) must be gone
    await expect(page.getByText("Join from the comfort of your space.")).toHaveCount(0);
  });

  test("desktop: 4 service cards sit in a single row", async ({ page }) => {
    test.skip(!(await isDesktop(page)), "desktop layout only");
    await page.goto("/services");
    await page.waitForTimeout(1000); // let the staggered reveal settle before measuring
    const cards = page.locator("article#individual, article#couples, article#teen, article#group");
    const ys = await cards.evaluateAll((els) => els.map((e) => Math.round(e.getBoundingClientRect().y)));
    expect(ys.length).toBe(4);
    expect(Math.max(...ys) - Math.min(...ys)).toBeLessThan(8); // same row
  });
});

test.describe("For You (3.png + 6.png)", () => {
  test("gentle path steps + per-page CtaStrip + rich modalities", async ({ page }) => {
    await page.goto("/for-you");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("A gentle path");
    for (const s of ["Reach Out", "Connect", "Heal", "Grow"]) {
      await expect(page.getByRole("heading", { name: s, exact: true })).toBeVisible();
    }
    await scrollThrough(page);
    await expect(page.getByRole("heading", { name: /You don't have to figure it out alone/ })).toBeVisible();
    // modalities (6.png): "Different paths" intro + "A thoughtful blend" + 8 cards with descriptions
    await expect(page.getByRole("heading", { name: "Different paths." })).toBeVisible();
    await expect(page.getByText("One goal — your well-being.")).toBeVisible();
    await expect(page.getByRole("heading", { name: /A thoughtful blend/ })).toBeVisible();
    for (const m of ["CBT", "DBT", "EFT", "ACT", "IFS", "SFBT", "Psychodynamic", "Trauma-Informed"]) {
      await expect(page.getByText(m, { exact: true })).toBeVisible();
    }
    await expect(page.getByText(/Reframe unhelpful thought patterns/)).toBeVisible(); // a description
  });
});

test.describe("Voices (5.png)", () => {
  test("heading + carousel (center letter, arrows, dots, read more) + CtaStrip", async ({ page }) => {
    await page.goto("/voices");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Stories that");
    await expect(page.getByRole("button", { name: "Previous story" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Next story" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Click to read more" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Go to story/ }).first()).toBeVisible();
    await scrollThrough(page);
    await expect(page.getByRole("heading", { name: /Your story matters/ })).toBeVisible();
  });

  test("carousel advances on Next", async ({ page }) => {
    await page.goto("/voices");
    const center = page.locator("section").filter({ has: page.getByRole("button", { name: "Click to read more" }) });
    const before = await center.innerText();
    await page.getByRole("button", { name: "Next story" }).click();
    await page.waitForTimeout(300);
    const after = await center.innerText();
    expect(after).not.toBe(before);
  });
});

test.describe("About / Contact (no mockup — consistency)", () => {
  test("about: story + values", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("heading", { name: /Therapy that feels like/ })).toBeVisible();
    await scrollThrough(page);
    for (const v of ["Compassion first", "Real & human", "Evidence-based", "Your pace"]) {
      await expect(page.getByRole("heading", { name: v, exact: true })).toBeVisible();
    }
  });

  test("contact: form + booking embed", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Let's take the next");
    await expect(page.getByPlaceholder("Your name")).toBeVisible();
    await expect(page.getByRole("heading", { name: /Choose a time that/ })).toBeVisible();
  });
});

test("no horizontal overflow on any page @ this viewport", async ({ page }) => {
  for (const r of ["/", "/services", "/for-you", "/voices", "/about", "/contact"]) {
    await page.goto(r);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `${r}`).toBeLessThanOrEqual(1);
  }
});
