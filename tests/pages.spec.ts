import { test, expect } from "@playwright/test";

/** Milestone 6 gate — inner pages match the mockups' content + routing. */

test("services page: header, four services, pricing, CTA", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Support for every");
  for (const s of ["Individual Therapy", "Couples Therapy", "Teen Therapy", "Group Therapy"]) {
    await expect(page.getByRole("heading", { name: s, exact: true })).toBeVisible();
  }
  // each card has a Learn more link → /contact
  const learn = page.getByRole("link", { name: /Learn more/ }).first();
  await expect(learn).toHaveAttribute("href", "/contact");
});

test("services anchors resolve (footer deep-links)", async ({ page }) => {
  await page.goto("/services#couples");
  await expect(page.locator("#couples")).toBeVisible();
});

test("for-you page: gentle path steps + modalities", async ({ page }) => {
  await page.goto("/for-you");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("A gentle path");
  for (const s of ["Reach Out", "Connect", "Heal", "Grow"]) {
    await expect(page.getByRole("heading", { name: s, exact: true })).toBeVisible();
  }
  for (const m of ["CBT", "DBT", "EFT"]) {
    await expect(page.getByText(m, { exact: true })).toBeVisible();
  }
});

test("voices page renders the carousel", async ({ page }) => {
  await page.goto("/voices");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Stories that");
  await expect(page.getByRole("button", { name: "Click to read more" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Next story" })).toBeVisible();
  await expect(page.getByText("— Aaratrika", { exact: true })).toBeVisible();
});

test("about page: story + four values", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: /Therapy that feels like/ })).toBeVisible();
  for (const v of ["Compassion first", "Real & human", "Evidence-based", "Your pace"]) {
    await expect(page.getByRole("heading", { name: v, exact: true })).toBeVisible();
  }
});

test("contact form validates and confirms on submit", async ({ page }) => {
  await page.goto("/contact");
  await page.getByPlaceholder("Your name").fill("Test Person");
  await page.getByPlaceholder("you@email.com").fill("test@example.com");
  await page.getByPlaceholder("Share whatever feels comfortable…").fill("Hello, I'd like to book.");
  await page.getByRole("button", { name: /Send message/ }).click();
  await expect(page.getByRole("heading", { name: /Thank you for reaching out/ })).toBeVisible();
});

test("contact page has the booking embed", async ({ page }) => {
  await page.goto("/contact#book");
  await expect(page.getByRole("heading", { name: /Choose a time that/ })).toBeVisible();
  // Cal.com inline embed mounts an iframe in the booking section
  await expect(page.locator("#book iframe").first()).toBeAttached({ timeout: 15000 });
});

test("legal pages load", async ({ page }) => {
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Privacy");
  await page.goto("/terms");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Terms");
});

test("no horizontal overflow on every page", async ({ page }) => {
  const routes = ["/services", "/for-you", "/voices", "/about", "/contact"];
  for (const r of routes) {
    for (const w of [390, 768, 1440]) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(r);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${r} @${w}px`).toBeLessThanOrEqual(1);
    }
  }
});
