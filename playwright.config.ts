import { defineConfig, devices } from "@playwright/test";

/**
 * Device matrix mirrors the plan's responsiveness requirement:
 * mobile (360/390), tablet (768/834), desktop (1280/1440/1920).
 * Visual-regression snapshots live in tests/__screenshots__.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 },
  },
  projects: [
    { name: "mobile-360", use: { viewport: { width: 360, height: 780 } } },
    { name: "mobile-390", use: { ...devices["iPhone 13"] } },
    { name: "tablet-768", use: { viewport: { width: 768, height: 1024 } } },
    { name: "tablet-834", use: { viewport: { width: 834, height: 1112 } } },
    { name: "desktop-1280", use: { viewport: { width: 1280, height: 900 } } },
    { name: "desktop-1440", use: { viewport: { width: 1440, height: 900 } } },
    { name: "desktop-1920", use: { viewport: { width: 1920, height: 1080 } } },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
