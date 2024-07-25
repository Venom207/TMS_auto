import { test, expect } from '@playwright/test';
import { PageFactory } from '../Playwright/src/pages/pageFactory';
import { StartPage } from '../Playwright/src/pages/startPage';


test.describe("UI tests on start page", () => {
  let startPage:StartPage
  test.beforeAll(async({browser})=>{
    const page = await browser.newPage();
    startPage = PageFactory.getPage(page,"StartPage") as StartPage
    await startPage.viewPage()
  })
  test("Check title text", async () => {
    const titleText = await startPage.getTitleText();
    expect(titleText).toContain('Playwright')
    //await page.goto("https://playwright.dev/");
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Playwright/);
  });
 });


  // test('Check title text', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');
  
  //   // Expect a title "to contain" a substring.
  //   await expect(page).toHaveTitle(/Playwright/);
  // });
  
  // test('get started link', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');
  
  //   // Click the get started link.
  //   await page.getByRole('link', { name: 'Get started' }).click();
  
  //   // Expects page to have a heading with the name of Installation.
  //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  // });

