import { BrowserContext, Page, expect } from "@playwright/test";


export class LoginPage {
    constructor(public page: Page, public context: BrowserContext) { }

    async loginPageFuntion() {
        const title = await this.page.locator("//h1[@class='hero__title heroTitle_ohkl']/span").textContent();
        expect(title).toEqual("Playwright")
    }
}