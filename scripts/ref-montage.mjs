/**
 * Render-vs-reference montages for element-by-element sign-off.
 * Screenshots each mockup-backed page (desktop) and stacks it UNDER the matching
 * assets/*.png reference crop into docs/audits/montage-<page>.png.
 *
 * Usage: node scripts/ref-montage.mjs   (dev server must be running on :3000)
 * (assets/ is read-only reference; montages are written to docs/audits/.)
 */
import { chromium } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const OUT = "docs/audits";
mkdirSync(OUT, { recursive: true });

// [name, route, refAsset, refCropBox "L,T,R,B"]
const PAGES = [
  ["home", "/", "1.png", "0,0,1040,1024"],
  ["services", "/services", "2.png", "0,0,1000,1024"],
  ["for-you", "/for-you", "3.png", "0,0,1000,1024"],
  ["voices", "/voices", "5.png", "0,0,1000,1024"],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });

for (const [name, route, , ] of PAGES) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);
  // scroll through to trigger reveal-on-scroll, then back to top
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 600) {
    await page.evaluate((Y) => window.scrollTo(0, Y), y);
    await page.waitForTimeout(100);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/montage_${name}.png`, fullPage: true });
}
await browser.close();

// stack ref crop (top) over render (bottom) via Pillow
const py = `
from PIL import Image
pairs = ${JSON.stringify(PAGES)}
W = 760
def fitw(im): return im.resize((W, int(im.height*W/im.width)))
for name, route, ref, box in pairs:
    L,T,R,B = [int(x) for x in box.split(',')]
    mock = Image.open('assets/'+ref).convert('RGB').crop((L,T,R,B))
    mine = Image.open('/tmp/montage_'+name+'.png').convert('RGB')
    a, b = fitw(mock), fitw(mine)
    c = Image.new('RGB', (W, a.height+b.height+46), (230,230,230))
    c.paste(a,(0,8)); c.paste(b,(0,a.height+38))
    c.save('${OUT}/montage-'+name+'.png')
    print('wrote ${OUT}/montage-'+name+'.png')
`;
execFileSync("python3", ["-c", py], { stdio: "inherit" });
console.log("montages done");
