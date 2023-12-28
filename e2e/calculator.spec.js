// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/KoinX/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('can type only number into input', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'sale-input' }).isVisible();
  const purchaseInput = await page.getByRole('textbox', { name: 'purchase-input' })

  async function testInput(inputValue) {
    await purchaseInput.fill(inputValue);
    await page.waitForTimeout(3000); // Allow for validation

    const actualValue = await purchaseInput.inputValue();

    // Check if the input value contains only numbers or is empty
    expect(/^\d*$/.test(actualValue)).toBeTruthy();
  }

  await testInput('123');
  await testInput('45.6');
}
);
