import { BrowserContext, Page, expect } from "@playwright/test";


export class HomePage {
    constructor(public page: Page, public context: BrowserContext) { }

    async homePageFuntion() {
        const title = await this.page.locator("//h1[@class='hero__title heroTitle_ohkl']/span").textContent();
        expect(title).toEqual("Playwright")
    }

}