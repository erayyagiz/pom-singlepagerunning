import { test as baseTest, BrowserContext, type Page } from "@playwright/test";

import { LoginPage } from "./LoginPage.ts";
import { HomePage } from "./HomePage.ts";

interface PageObjects {
    loginPage: LoginPage;
    homePage: HomePage;
}

interface WorkerFixtures {
    workerContext: BrowserContext;
    workerPage: Page;
}

const test = baseTest.extend<PageObjects, WorkerFixtures>({
    loginPage: async ({ workerPage, workerContext }, use) => {
        await use(new LoginPage(workerPage, workerContext));
    },
    homePage: async ({ workerPage, workerContext }, use) => {
        await use(new HomePage(workerPage, workerContext));
    },
    workerContext: [async ({ browser }, use) => {
        console.log("beforeAll in BasePage");
        const context = await browser.newContext();
        await use(context);
        await context.close();
    }, { scope: 'worker' }],
    workerPage: [async ({ workerContext }, use) => {
        const page = await workerContext.newPage();
        await use(page);
        await page.close();
        console.log("afterAll in BasePage");
    }, { scope: 'worker' }]
});

export default test;
