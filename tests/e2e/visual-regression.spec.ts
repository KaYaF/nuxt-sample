import {test, expect} from '@playwright/test';

test(`visual regression test`, async ({page, browserName, viewport}) => {
  await page.goto('http://localhost:8080');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000); // some pages don't display the page when the `load` is dispatched.

  await expect(page).toHaveScreenshot(
    ['visualRegressionTest', `${browserName}-width-${viewport?.width}.png`],
    {fullPage: true}
  );

  page.close();
});
