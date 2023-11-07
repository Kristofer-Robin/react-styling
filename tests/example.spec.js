const { test, expect } = require('@playwright/test');

test.describe('goal input and removal functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should allow input to be typed in the goal input field', async ({ page }) => {
    await page.fill('input[type="text"]', 'Learn Playwright');
    const inputValue = await page.inputValue('input[type="text"]');
    expect(inputValue).toBe('Learn Playwright');
  });

  test('should add a goal when "Add Goal" is clicked', async ({ page }) => {
    await page.fill('input[type="text"]', 'Learn Playwright');
    await page.click('button >> text=Add Goal');
    const goalText = await page.textContent('ul'); // assuming goals are listed in an <ul>
    expect(goalText).toContain('Learn Playwright');
  });

  test('should remove a goal when it is clicked', async ({ page }) => {
    await page.fill('input[type="text"]', 'Learn Playwright');
    await page.click('button >> text=Add Goal');
    await page.click('text=Learn Playwright');
    const goalExists = await page.locator('text=Learn Playwright').isVisible();
    expect(goalExists).toBeFalsy();
  });
});
