import fs from 'fs';
import {test, expect} from '@playwright/test';

const baseURL = 'http://localhost:3000';
const pagesPaths = getAllRelativeFilePathsInDirectory('pages');
const testUrls = getAllLinksFromPagesPaths(pagesPaths);

for (const testUrl of testUrls) {
  test(
    `visual regression test ` + testUrl,
    async ({page, viewport}, testinfo) => {
      testinfo.snapshotSuffix = '';

      await page.goto(testUrl);
      await page.waitForLoadState('load');
      const snapshotPathArray = getSnapShotPathArray(testUrl);

      await page.waitForTimeout(500);

      await expect(page).toHaveScreenshot(
        [...snapshotPathArray, `width-${viewport?.width}.png`],
        {
          timeout: 20 * 1000,
          fullPage: testUrl === baseURL,
        }
      );
    }
  );
}

/**
 * Get the paths of all files under a specific folder.
 *
 * @param directoryPath path of the specific folder
 * @returns relative paths of files
 */
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

/**
 * Create a link to the corresponding page from the relative path of the file under 'pages'
 *
 * @param pagesPaths  relative paths of pages files
 * @returns links of the pages
 */
function getAllLinksFromPagesPaths(pagesPaths: string[]): string[] {
  return pagesPaths.map(pagesPath => {
    const fixedPath = (
      pagesPath.match(/^pages(.*?)(\/index|)\.vue$/) as RegExpMatchArray
    )[1];

    return baseURL + fixedPath;
  });
}

/**
 * Create a path of the snapshot from the link
 *
 * @param url url of the page
 * @returns path of the snapshot
 */
function getSnapShotPathArray(url: string): string[] {
  // remove 'baseURL' or 'baseURL/'
  const reg = new RegExp('^' + baseURL + '(\\/|)(.*)');
  const path = (url.match(reg) as RegExpMatchArray)[2];

  return path.split('/');
}
