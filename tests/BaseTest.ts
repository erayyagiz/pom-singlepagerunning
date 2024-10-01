import ui from "../src/pages/BasePage.ts";
import api from "../src/api/BaseApi.ts";

import { mergeTests } from '@playwright/test';

const baseTest = mergeTests(ui, api);

const test = baseTest.extend<{ forEachTest: void }>({
  forEachTest: [async ({ workerPage }, use) => {
    console.log("beforeEach in BaseTest");
    await workerPage.goto("https://playwright.dev/");
    await workerPage.waitForLoadState("domcontentloaded");
    await use();
    console.log("afterEach in BaseTest");
  }, { auto: true }]
});

// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;