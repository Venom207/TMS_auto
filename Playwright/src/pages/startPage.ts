import { Page, expect  } from '@playwright/test';
import {BASE_URL} from "../consts/consts";

export default class HomePage {
    page: Page;

    locators = {
        searchIcon: '[data-test-id="search-button"]',
        there: "[data-test-id='pagination-next-page']",
        pagination: '[data-test-id="pagination"]',
    }
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto(BASE_URL);
    }
    async getPageTitle() {
        return await this.page.title();
    }
    async getSearchInput() {
        const element = await this.page.getByTestId(this.locators.searchIcon);
        if (element) {
            await element.click();
        } else {
            throw new Error('Элемент не найден по указанному локатору');
        }
    }
    async expectContainText(locator: string, text: string): Promise<void> {
        const element = await this.page.locator(locator);
        const elementText = await element.textContent();
        expect(elementText).toBe(text);
    }

    async getArticlesCount() {
        const articles = await this.page.$$('[data-test-id="articleTitle"]');
        return articles.length;
    }
    async clickLoginButtonAndNavigateToLoginPage() {
        debugger;
        await this.page.waitForSelector('//button[text()="Войти"]', { timeout: 30000 });
        const loginButton: any = await this.page.$('//button[text()="Войти"]');
        const element: any = await this.page.$('a.layout__header-logo');
        const text = await element.innerText();
        await loginButton.click();
        this.page.setDefaultTimeout(20);
    
        if (!this.page.isClosed()) {
            expect(text).toContain('Вход');
            await this.page.getByText('Вход');
        } else {
            console.error('Страница была закрыта перед ожиданием URL.');
        }
    }

    async isFirstArticleImageDisplayed() {
        const firstArticleImage = await this.page.$('figure.full-width'); 
        return firstArticleImage !== null;
    }

    async getReadMoreButton() {
        return await this.page.$('//span[text() ="Читать дальше →"]');
    }

    async getPaginationClick(): Promise<void> {
        const element = await this.page.locator(this.locators.there);
        if (element) {
            await element.click();
        } else {
            throw new Error('Элемент не найден по указанному локатору');
        }
    }
    async checkTextExists(text: string): Promise<boolean> {
        const content = await this.page.content();
        return content.includes(text);
    }

    async getArticleCategories() {
        return await this.page.$$eval('//div[@data-test-id="articles-list"]', elements => elements.map(el => el.textContent));
    }
}
    
