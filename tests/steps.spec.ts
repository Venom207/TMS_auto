import { test, expect } from '@playwright/test';
import HomePage from '../Playwright/src/pages/startPage';
import { BASE_URL, QNA } from '../Playwright/src/consts/consts';

let homePage: HomePage;

test.beforeAll(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForTimeout(3000);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test('Проверка заголовка страницы', async () => {
        const title = await homePage.getPageTitle();
        expect(title).toContain('Хабр');
    });

test('Проверка наличия поисковой строки на главной странице и выдачи результатов поиска', async ({ page }) => {
    await page.goto(BASE_URL);
    const locator = homePage.locators.searchIcon;
    await expect(page.locator(locator)).toBeVisible();
    await page.locator(locator).click();
    await page.getByRole('textbox', { name: 'Поиск' }).click();
    await page.getByRole('textbox', { name: 'Поиск' }).fill('youtube');
    await page.getByRole('textbox', { name: 'Поиск' }).press('Enter');
    await expect(page.getByRole('button', { name: 'по релевантности Открыть список' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'по релевантности Открыть список' })).toBeVisible();
    const currentUrl = page.url();
    expect(currentUrl).toContain('youtube&target_type=posts&order=relevance');
});

test('Проверка количества статей на странице', async () => {
    const articlesCount = await homePage.getArticlesCount();
    expect(articlesCount).toBeGreaterThan(0);
});

test('Переход на страницу авторизации', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('button', { name: 'Войти' }).click();
    page.getByText('Log in');
});

test.skip('Проверка отображения изображений в статьях', async () => {
    const isImageDisplayed = await homePage.isFirstArticleImageDisplayed();
    expect(isImageDisplayed).toBeTruthy();
});

test('Проверка наличия кнопки "Читать дальше"', async () => {
    const subscribeButton = await homePage.getReadMoreButton();
    expect(subscribeButton).not.toBeNull();
});

test('Проверка отображения категорий статей', async () => {
    const categories = await homePage.getArticleCategories();
    expect(categories.length).toBeGreaterThan(0);
});

test('Проверка возможности нажатия на кнопку "Туда" и перехода на новую страницу', async ({ page }) => {
    await page.goto(BASE_URL);
    const locator = homePage.locators.there;
    await expect(page.locator(locator)).toBeVisible();
    await expect(page.locator(locator)).toContainText('Туда');
    await page.locator(locator).click();
    const currentUrl = `${BASE_URL}page2/`;
    expect(currentUrl).toContain('page2/');
    await expect(page.locator('[data-test-id="pagination"]').getByRole('link', { name: '1' })).toBeVisible();
});

test('Переход на страницу Q&A и проверка запроса', async ({ page }) => {
    await page.goto(BASE_URL);
    const homePage = new HomePage(page);
    await homePage.expectContainText('h1', 'Моя лента');
    await page.locator('[data-test-id="header"]').getByRole('button', { name: 'Открыть список' }).click();
    const pageQNAPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Q&A' }).click();
    const pageQNA = await pageQNAPromise;
    const text = 'Найти вопрос, ответ, тег или пользователя';
    await pageQNA.getByPlaceholder(text).click();
    await pageQNA.getByPlaceholder(text).fill('нагрузочное тестирование');
    await pageQNA.getByPlaceholder(text).press('Enter');
    await expect(pageQNA.locator('#js-canvas')).toContainText('Результаты поиска по запросу «нагрузочное тестирование»');
    await expect(pageQNA.getByRole('link', { name: 'Вопросы (130)' })).toBeVisible();
    await expect(pageQNA.locator('li').filter({ hasText: 'Вопросы (130)' })).toBeVisible();
    await expect(pageQNA.getByRole('link', { name: 'Ответы (196)' })).toBeVisible();
    await pageQNA.locator('.question__content').first().click();
    await expect(pageQNA.locator('.question__content').first()).toBeVisible();
    await pageQNA.getByRole('link', { name: '3 ответа' }).click();
    await pageQNA.close();
  });


