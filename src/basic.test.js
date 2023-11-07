const { test, expect } = require('@playwright/test');

test('course goal addition and removal test', async ({ page }) => {
    // Navigate to the page with the form
    await page.goto('http://localhost:3000');

    // Input a unique goal
    const goalText = 'Learn Playwright';
    await page.fill('input[placeholder="Course Goal"]', goalText);

    // Click "Add Goal" button
    await page.click('text="Add Goal"');

    // Verify the goal appears
    const goalLocator = page.locator(`text="${goalText}"`);
    await expect(goalLocator).toBeVisible();

    // Click the goal to remove it
    await goalLocator.click();

    // Assert that the goal is no longer visible
    // Depending on the removal effect, you may need to wait for the removal to take place
    await expect(goalLocator).not.toBeVisible();

    // Optionally, take a screenshot after removing the goal
    await page.screenshot({ path: 'goal-removed.png' });
});
