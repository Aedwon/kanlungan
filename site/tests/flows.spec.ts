import { test, expect } from '@playwright/test';

test('add to cart from a product page, then update and remove in the cart', async ({ page }) => {
  await page.goto('/shop/products/silong-sofa');
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  const drawer = page.getByRole('dialog');
  await expect(drawer.getByText('Silong Sofa').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cart, 1 item' })).toBeVisible();
  await drawer.getByRole('button', { name: 'Close cart' }).first().click();

  await page.goto('/cart');
  await page.getByRole('button', { name: 'Increase quantity of Silong Sofa' }).first().click();
  await expect(page.getByRole('button', { name: 'Cart, 2 items' })).toBeVisible();
  await page.getByRole('button', { name: 'Decrease quantity of Silong Sofa' }).first().click();
  await expect(page.getByRole('button', { name: 'Cart, 1 item' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove Silong Sofa' }).first().click();
  await expect(page.getByRole('button', { name: 'Cart, 0 items' })).toBeVisible();
  await expect(page.getByText('Your cart is empty').first()).toBeVisible();
});

test('demo checkout reaches the confirmation page', async ({ page }) => {
  await page.goto('/shop/products/silong-sofa');
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.goto('/checkout');
  const fields: [string, string][] = [['email', 'guest@example.com'], ['mobile', '09171234567'], ['fullname', 'Test Guest'], ['address', '12 Sampaguita Street'],
    ['barangay', 'Poblacion'], ['city', 'Makati'], ['postal', '1210'], ['cardnumber', '4242 4242 4242 4242'], ['cardname', 'Test Guest'], ['cardexp', '12/30'], ['cardcvc', '123']];
  for (const [id, value] of fields) await page.locator(`#${id}-desktop`).fill(value);
  await page.getByRole('button', { name: 'Place order' }).click();
  await expect(page).toHaveURL(/\/checkout\/confirmation/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Thank you');
});

test('booking form shows an error, then submits', async ({ page }) => {
  await page.goto('/book');
  await page.getByRole('button', { name: 'Book a discovery call' }).last().click();
  await expect(page.getByRole('alert').first()).toBeVisible();
  await page.locator('#f-name-desktop').fill('Test Guest');
  await page.locator('#f-email-desktop').fill('guest@example.com');
  await page.locator('#f-mobile-desktop').fill('09171234567');
  await page.locator('#f-location-desktop').fill('Makati');
  // The radios are visually hidden, so choose the first option of each group through its label.
  for (const group of ['service', 'property', 'budget', 'target', 'calltime']) {
    await page.locator('label', { has: page.locator(`input[name="${group}-desktop"]`) }).first().click();
  }
  await page.getByRole('button', { name: 'Book a discovery call' }).last().click();
  await expect(page.getByRole('heading', { level: 1 })).not.toHaveText('Book a discovery call');
});

test('search finds a product, a project, and a page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL(/\/search/);
  await expect(page.getByRole('searchbox', { name: 'Search' })).toBeFocused();
  await page.keyboard.type('cane');
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Results for "cane"');
  await expect(page.getByRole('link', { name: /Dapithapon Lounge Chair/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Pages' })).toBeVisible();
});

test('search with no match shows the empty state', async ({ page }) => {
  await page.goto('/search?q=zzzz');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Nothing found for "zzzz"');
  await expect(page.getByText('Check the spelling').last()).toBeVisible();
});

test('an unknown route shows the 404 page with a 404 status', async ({ page }) => {
  const response = await page.goto('/no-such-page');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page is not here.');
  await expect(page.getByRole('link', { name: /^Shop/ }).last()).toBeVisible();
});

test('help and legal pages render their content', async ({ page }) => {
  await page.goto('/help/delivery-and-returns');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Delivery and returns');
  await expect(page.getByText('Where we deliver')).toBeVisible();
  await page.getByRole('navigation', { name: 'Help' }).getByRole('link', { name: 'FAQ' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Shop questions');
  await page.goto('/legal/privacy');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacy');
});

test('the project page slider moves by keyboard', async ({ page }) => {
  await page.goto('/projects/lilim-house');
  const slider = page.getByRole('slider').first();
  await slider.scrollIntoViewIfNeeded();
  await slider.focus();
  const before = await slider.getAttribute('aria-valuenow');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  const after = await slider.getAttribute('aria-valuenow');
  expect(after).not.toBe(before);
  await page.keyboard.press('Home');
  expect(await slider.getAttribute('aria-valuenow')).toBe('0');
  await page.keyboard.press('End');
  expect(await slider.getAttribute('aria-valuenow')).toBe('100');
});

test('the Hardin floor plan is exposed as an image with a description', async ({ page }) => {
  await page.goto('/projects/hardin-apartment');
  const plan = page.getByRole('img', { name: /Hardin Apartment floor plan/ });
  await expect(plan).toHaveCount(1);
  await expect(plan).toHaveAccessibleDescription(/living and dining room/);
});

for (const slug of ['lilim-house', 'tanaw-residence', 'dalampasigan-inn', 'pahinga-villas', 'hardin-apartment']) {
  test(`${slug} shows the material swatches and the shop rows with images`, async ({ page }) => {
    await page.goto(`/projects/${slug}`);
    const swatches = page.locator('.pj .mat li');
    expect(await swatches.count()).toBeGreaterThanOrEqual(6);
    await page.locator('.pj .mat').scrollIntoViewIfNeeded();
    for (const img of await swatches.locator('img').all()) {
      await expect(img).toHaveJSProperty('complete', true);
      expect(await img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
      await expect(img).toHaveAttribute('alt', '');
    }
    const rows = page.locator('.pj .shop li');
    expect(await rows.count()).toBeGreaterThanOrEqual(6);
    await rows.last().scrollIntoViewIfNeeded();
    for (const row of await rows.all()) {
      await row.scrollIntoViewIfNeeded();
      const link = row.locator('a');
      await expect(link).toHaveAttribute('href', /^\/shop\/products\//);
      await expect(link.locator('img.th')).toBeVisible();
      await expect(link).toContainText('₱');
      await expect(link).toContainText(/ · /);
    }
  });
}

test('category filters: one check mark, and Clear all resets filters and the URL', async ({ page }) => {
  await page.goto('/shop/seating');
  const form = page.getByRole('form', { name: 'Filters' }).first();
  await expect(form.getByRole('button', { name: 'Clear all' })).toHaveCount(0);
  const box = form.locator('label.chk').filter({ hasText: 'Lilok Workshop' });
  await page.waitForLoadState('networkidle');
  await box.click();
  await expect(page).toHaveURL(/maker=Lilok/);
  await expect(box.locator('svg.tick')).toHaveCount(1);
  await expect(box.locator('.box')).toHaveCSS('background-color', 'rgb(142, 74, 44)');
  expect(await box.locator('.box').evaluate((e) => getComputedStyle(e, '::after').content)).toMatch(/none|normal/);
  await form.getByRole('button', { name: 'Clear all' }).click();
  await expect(page).not.toHaveURL(/maker=/);
  await expect(box.locator('input')).not.toBeChecked();
  await expect(form.getByRole('button', { name: 'Clear all' })).toHaveCount(0);
  await expect(page.locator(':focus')).toHaveAttribute('type', 'checkbox');
});

test('category tab row does not clip the selected outline', async ({ page }) => {
  await page.goto('/shop/seating');
  const nav = page.locator('.shop-category-desktop nav.hscroll');
  const sel = nav.locator('a[aria-current=page]');
  const n = await nav.boundingBox(); const s = await sel.boundingBox();
  expect(s!.x - 3).toBeGreaterThanOrEqual(n!.x);
});

test('a color choice on Kumot Throw switches the photo, the URL, survives reload, and shows in the cart', async ({ page }) => {
  const indigo = page.locator('img[src*="kumot-throw-indigo-studio"]:visible');
  const natural = page.locator('img[src*="/kumot-studio"]:visible');
  await page.goto('/shop/products/kumot-throw');
  await expect(natural.first()).toBeVisible();
  await expect(indigo).toHaveCount(0);

  await page.getByRole('button', { name: 'Indigo' }).first().click();
  await expect(indigo.first()).toBeVisible();
  await expect(natural).toHaveCount(0);
  await expect(page).toHaveURL(/\/shop\/products\/kumot-throw\?color=indigo$/);

  await page.reload();
  await expect(page.getByRole('button', { name: 'Indigo' }).first()).toHaveAttribute('aria-pressed', 'true');
  await expect(indigo.first()).toBeVisible();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  const drawer = page.getByRole('dialog');
  await expect(drawer.locator('img[src*="kumot-throw-indigo-studio"]:visible').first()).toBeVisible();
  await drawer.getByRole('button', { name: 'Close cart' }).first().click();
  await page.goto('/cart');
  await expect(page.locator('img[src*="kumot-throw-indigo-studio"]:visible').first()).toBeVisible();
  await page.getByRole('button', { name: 'Remove Kumot Throw' }).first().click();
});
