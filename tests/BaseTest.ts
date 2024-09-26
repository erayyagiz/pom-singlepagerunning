import ui, { page } from "../src/pages/BasePage.ts";
import api from "../src/api/BaseApi.ts";

import { mergeTests } from '@playwright/test';


const test = mergeTests(ui, api);

// hooks as fixtures
test.beforeEach(async ({ }) => {
    console.log("beforeEach in BaseTest");
  await page.goto("https://playwright.dev/");
  await page.waitForLoadState("domcontentloaded");
});

test.afterAll(async ({ }) => {
  // Clean up created chats
    console.log("afterAll in BaseTest");
});



// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;