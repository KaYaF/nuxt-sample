import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:8080');
  await page.waitForLoadState('load');
});

test(`visual regression test`, async ({
  page,
  browserName,
  viewport,
}, testinfo) => {
  testinfo.snapshotSuffix = '';

  await expect(page).toHaveScreenshot(
    ['visualRegressionTest', `${browserName}-width-${viewport?.width}.png`],
    {maxDiffPixelRatio: 0.05}
  );

  page.close();
});
