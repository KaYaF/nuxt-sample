import fs from 'fs';
import {test, expect} from '@playwright/test';

const baseURL = 'http://localhost:8080';
const pagesPaths = getAllRelativeFilePathsInDirectory('pages');
const testUrls = getAllLinksFromPagesPaths(pagesPaths);

test(`visual regression test`, async ({page, viewport}, testinfo) => {
  testinfo.snapshotSuffix = '';

  for (const testUrl of testUrls) {
    await page.goto(testUrl);
    await page.waitForLoadState('load');
    const snapshotPathArray = getSnapShotPathArray(testUrl);

    await expect(page).toHaveScreenshot(
      [...snapshotPathArray, `width-${viewport?.width}.png`],
      {maxDiffPixelRatio: 0.05}
    );
  }

  page.close();
});

function getAllRelativeFilePathsInDirectory(directoryPath: string): string[] {
  const dirents = fs.readdirSync(directoryPath, {withFileTypes: true});
  const relativePaths = dirents.flatMap(dirent => {
    const relativePath = `${directoryPath}/${dirent.name}`;
    if (dirent.isFile()) {
      return [relativePath];
    } else {
      return getAllRelativeFilePathsInDirectory(relativePath);
    }
  });

  return relativePaths;
}

function getAllLinksFromPagesPaths(pagesPaths: string[]): string[] {
  // TODO: support _id.vue

  return pagesPaths.map(pagesPath => {
    const fixedPath = (
      pagesPath.match(/^pages(.*?)(\/index|)\.vue$/) as RegExpMatchArray
    )[1];

    return baseURL + fixedPath;
  });
}

function getSnapShotPathArray(link: string): string[] {
  // remove 'baseURL' or 'baseURL/'
  const reg = new RegExp('^' + baseURL + '(\\/|)(.*)');
  const path = (link.match(reg) as RegExpMatchArray)[2];

  return path.split('/');
}
