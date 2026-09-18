const { test, expect } = require('@playwright/test');

test('BrowserStack Demo - Add product to cart', async ({ page }) => {
  // Navigate to the demo store
  await page.goto('https://bstackdemo.com');

  // Assert page title
  await expect(page).toHaveTitle(/StackDemo/);

  // Add the first product to cart using the verified selector
  await page.locator('.shelf-item__buy-btn').first().click();

  // Assert cart badge updated to 1
  await expect(page.locator('.bag__quantity')).toHaveText('1');
});
