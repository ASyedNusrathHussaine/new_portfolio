import { test, expect, devices } from '@playwright/test';

// Use iPhone 13 device emulation
test.use({ ...devices['iPhone 13'] });

const BASE = process.env.BASE_URL ?? 'http://localhost:5173';

test.describe('Mobile smoke tests (iPhone emulation)', () => {
  test('header menu toggles and closes on outside tap / Escape', async ({ page }) => {
    await page.goto(BASE);
    const toggle = page.getByRole('button', { name: /toggle menu/i });
    await expect(toggle).toBeVisible();

    // Open menu
    await toggle.tap();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    // Tap outside (near top-left) should close (avoid hitting menu area)
    await page.tap('body', { position: { x: 10, y: 10 } });
    await expect(page.locator('#mobile-menu')).toBeHidden();

    // Reopen and press Escape to close
    await toggle.tap();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu')).toBeHidden();
  });

  test('project three-dot menu opens and contains expected links', async ({ page }) => {
    await page.goto(BASE);

    // Wait for project cards to render
    await page.locator('section#projects').waitFor();

    // Scope to first project card and open its menu
    const firstCard = page.locator('section#projects').locator('div.relative').first();
    const moreBtn = firstCard.locator('button[aria-haspopup]').first();
    await expect(moreBtn).toBeVisible();
    await moreBtn.tap();

    // The menu should appear within the same card and contain 'Live Demo' or 'GitHub'
    const live = firstCard.locator('text=Live Demo').first();
    const git = firstCard.locator('text=GitHub').first();

    if ((await live.count()) > 0) {
      await expect(live).toBeVisible();
    } else {
      await expect(git).toBeVisible();
    }

    // Close by tapping outside
    await page.tap('body', { position: { x: 10, y: 10 } });
    // Verify the overflow popup is removed
    const popup = firstCard.locator('[data-overflow-menu]');
    await expect(popup).toBeHidden();
  });
});
