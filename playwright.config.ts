import { PlaywrightTestConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
// Read from default ".env" file.
dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: './tests',
  // testMatch: 'test.test.ts',
  retries: 0,
  fullyParallel: false,
  // globalTimeout: 5 * 60 * 60 * 1000, // Maximum time the whole test suite can run,
  timeout: 5 * 60 * 1000, // Test case timeout
  workers: 1,
  use: {
    screenshot: 'only-on-failure',
    // baseURL: '',
    acceptDownloads: true,
    headless: false,    
    viewport: null, // or for headless mode { width: 1920, height: 1080 }, 
    actionTimeout: 30 * 1000, // Test step timeout
    navigationTimeout: 30 * 1000, // Navigation timeout
    trace: 'off',
    // storageState: './data/auth.json',
    launchOptions: {
      // logger: {
      //   isEnabled: (name, severity) => name === 'api',
      //   log: (name, severity, message, args) => console.log(`${name} ${message}`)
      // },
      args: ["--start-maximized"],
      // slowMo: 3_000
    }
  },
  reporter: [
    ['dot'], // -> console
    // ['json', { outputFile: 'test-result.json'}], //  -> JSON
    // ['junit', { outputFile: 'results.xml' }], // Junit
    ['html', { open: 'always' }] // -> HTML
  ],
  projects: [
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //   },
    // },
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge',
      },
    },
    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
};

export default config;
