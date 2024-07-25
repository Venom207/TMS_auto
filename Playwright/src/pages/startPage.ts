import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
export class StartPage extends BasePage{
    constructor(page:Page) {
        super(page);
        this.url = "https://playwright.dev/";
      }
     public async getTitleText()
      {
        const title = await this.page.$('header')
        return await title?.textContent();
      }
}