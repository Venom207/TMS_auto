import { Page } from '@playwright/test';

export default class AccountPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    } 
    
    async getPageTitle() {
        return await this.page.title();
    }
}