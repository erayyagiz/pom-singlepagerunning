import { test as baseTest, BrowserContext, type Page } from "@playwright/test";

import { LoginPage } from "./LoginPage.ts";
import { HomePage } from "./HomePage.ts";

let context: BrowserContext;
let page: Page;

// declaring the objects type for autocompletion 
interface PageObjects {
    loginPage: LoginPage;
    homePage: HomePage;
}

baseTest.beforeAll(async ({ browser }) => {
    // New Page
    console.log("beforeAll in BasePage");
    context = await browser.newContext();
    page = await context.newPage();

});

baseTest.afterAll(async ({ }) => {
    // Close Page
    console.log("afterAll in BasePage");
    await page.close();
    await context.close();
});

// intializing all the page objects
// and import them as fixture in spec file
const test = baseTest.extend<PageObjects>({
    loginPage: async ({ }, use) => {
        await use(new LoginPage(page, context));
    },
    homePage: async ({ }, use) => {
        await use(new HomePage(page, context));
    }
});
 

// export default and name export so spec files can use it 
export default test;
export { page };
