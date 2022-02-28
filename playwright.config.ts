import { expect, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 120000,
  workers: 4,
  reporter: "list",
  use: {
    actionTimeout: 10000,
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1920, height: 969 },
    launchOptions: {
      slowMo: 5000,
      args: ['--disable-dev-shm-usage']
    }
  },
  projects: [
      {
          name: "example",
          testMatch: "example.spec.ts"
      }
  ],
};

export default config;