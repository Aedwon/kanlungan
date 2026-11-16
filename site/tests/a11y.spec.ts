import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Automated WCAG 2 A and AA checks (axe-core) on the main pages, desktop and phone.
const pages = ['/', '/projects', '/projects/lilim-house', '/projects/hardin-apartment', '/shop', '/shop/seating', '/shop/products/silong-sofa', '/cart', '/checkout', '/book', '/contact',
  '/studio', '/about', '/search?q=cane', '/search', '/help/delivery-and-returns', '/help/care-guide', '/help/faq', '/legal/privacy', '/legal/terms', '/no-such-page'];
const sizes = [{ name: 'desktop', width: 1440, height: 900 }, { name: 'phone', width: 390, height: 844 }];

for (const size of sizes) {
  for (const path of pages) {
    test(`axe: ${path} (${size.name})`, async ({ page }) => {
      await page.setViewportSize({ width: size.width, height: size.height });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']).analyze();
      const summary = violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.length} node(s), e.g. ${v.nodes[0].target.join(' ')}`);
      expect(summary, summary.join('\n')).toEqual([]);
    });
  }
}

test('no positive tabindex, and focused controls show a focus outline', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('[tabindex]:not([tabindex="0"]):not([tabindex="-1"])').count()).toBe(0);
  await page.keyboard.press('Tab'); // skip link
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press('Tab');
    const outline = await page.evaluate(() => { const s = getComputedStyle(document.activeElement!); return `${s.outlineStyle} ${s.outlineWidth}`; });
    expect(outline).not.toMatch(/^none/);
  }
});

test('home and project heroes stay usable under reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/projects/lilim-house');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('img', { name: /handed over/ }).first()).toBeVisible();
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Book a discovery call' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Book a discovery call' }).first().focus();
  await expect(page.getByRole('link', { name: 'Book a discovery call' }).first()).toBeFocused();
});
