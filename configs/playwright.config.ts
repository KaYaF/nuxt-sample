import {PlaywrightTestConfig, devices} from '@playwright/test';
import {viewports} from './displaySize';

const projects = Array(3 * viewports.length);

for (let i = 0; i < viewports.length; i++) {
  const viewport = viewports[i];

  const shareProps = {
    viewport,
    // headless: false,
  };

  projects[3 * i] = {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      ...shareProps,
    },
  };
  projects[3 * i + 1] = {
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
      ...shareProps,
    },
  };
  projects[3 * i + 2] = {
    name: 'webkit',
    use: {
      ...devices['Desktop Safari'],
      ...shareProps,
    },
  };
}

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './../tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5 * 60 * 1000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects,

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'yarn build && yarn start -p 8080',
    port: 8080,
    timeout: 5 * 60 * 1000,
  },
};

export default config;
