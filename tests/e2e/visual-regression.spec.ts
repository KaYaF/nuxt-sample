import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:8080');
  await page.waitForLoadState('load');
});

test(`visual regression test`, async ({page, browserName, viewport}) => {
  await expect(page).toHaveScreenshot(
    ['visualRegressionTest', `${browserName}-width-${viewport?.width}.png`],
    {fullPage: true}
  );

  page.close();
});
