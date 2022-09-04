import {test, expect} from '@playwright/test';

test('take a visual regression sample', async ({page, browserName}) => {
  await page.goto('http://localhost:8080');
  await page.waitForNavigation();

  await expect(page).toHaveScreenshot(
    ['visualRegressionTest', `picture-${browserName}.png`],
    {fullPage: true}
  );
  page.close();
});
