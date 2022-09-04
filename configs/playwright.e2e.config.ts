import configOrigin from './playwright.config';

const config = Object.assign(configOrigin, {
  testDir: './../tests/e2e',
});

export default config;
