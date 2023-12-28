/* eslint-disable @typescript-eslint/no-unused-vars */
import { chromium, PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

export const config: PlaywrightTestConfig = {
  testDir: ".features/step_definitions",
  /* Maximum time one test can run for. */
  timeout: 120 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
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
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry"
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: "chrome",
      use: {
        headless:false,
        video: "retain-on-failure",
        ...devices["Desktop Chrome"]
      }
    },

    {
      name: "firefox",
      use: {
        headless: true,
        video: "retain-on-failure",
        ...devices["Desktop Firefox"]
      }
    },

    {
      name: "webkit",
      use: {
        headless: true,
        video: "retain-on-failure",
        ...devices["Desktop Safari"]
      }
    },
    /* Test against branded browsers. */
    {
      name: "edge",
      use: {
        headless: true,
        video: "retain-on-failure",
        channel: "msedge",
        ...devices["Desktop Edge"]
      }
    }
  ]
};

export default config;