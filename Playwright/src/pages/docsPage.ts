import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class DocsPage extends BasePage{
    constructor(page:Page) {
        super(page);
        this.url = "https://playwright.dev/docs/intro";
      }

     public async getTitleText()
      {
        const title = await this.page.$('header')
        return await title?.textContent();
      }

      public async getElementByRole():Promise<Locator>
      {
        return this.page.getByRole("heading", { name: "Installation" })
      }
}