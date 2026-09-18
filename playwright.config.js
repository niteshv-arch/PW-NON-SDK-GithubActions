// @ts-check
require('dotenv').config();

const { defineConfig } = require('@playwright/test');

const caps = {
  browser: 'chrome',
  browser_version: 'latest',
  os: 'Windows',
  os_version: '11',
  name: 'BrowserStack Demo Test',
  build: 'playwright-browserstack-build',
  'browserstack.username': process.env.BROWSERSTACK_USERNAME,
  'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
};

const wsEndpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`;

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    connectOptions: {
      wsEndpoint,
    },
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});
