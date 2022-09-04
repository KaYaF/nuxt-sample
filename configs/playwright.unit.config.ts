import configOrigin from './playwright.config';

const config = Object.assign(configOrigin, {
  testDir: './../tests/unit',
});

export default config;
