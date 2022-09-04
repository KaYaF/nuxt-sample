import {test, expect} from '@playwright/test';

test('take a screenshot sample', async ({page, browserName}) => {
  await page.goto('http://localhost:8080');
  await page.waitForNavigation();

  await page.screenshot({
    path: `./tests/e2e/screenshots/picture-${browserName}.png`,
  });
  page.close();
});
