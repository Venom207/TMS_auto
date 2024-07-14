import { Builder, By, WebDriver, until } from "selenium-webdriver";
import{ locatorsXpath, locatorsCss } from "../helpers/locators";
import { BASE_URL_SELENIUM, AKK_PAGE } from "../../consts/consts";

describe("Тестирование сайта Хабр", () => {
    
let driver:WebDriver;

beforeAll(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get(BASE_URL_SELENIUM);
})

afterAll(async () => {
    await driver.quit();
});  

it('Проверка раздела "Все потоки"', async () => {
    await driver.get(BASE_URL_SELENIUM);
    const titleText = await driver.wait(until.elementLocated(By.xpath(locatorsXpath.titleElement)), 5000);
    expect(await titleText.isDisplayed()).toBe(true);
    expect(await titleText.getText()).toBe('Все потоки');  
  });

  it('Проверка наличия кнопки "Новости"', async () => {
    await driver.get(BASE_URL_SELENIUM);
    const newsLink = await driver.findElement(By.xpath(locatorsXpath.newsLink));
    expect(await newsLink.isDisplayed()).toBe(true);
    expect(await newsLink.getText()).toContain('НОВОСТИ');
    expect(await newsLink.isEnabled()).toBe(true);
  });

  it('Проверка нажатия на выплывающий список и открытия разделов "Все сервисы Хабра"', async () => {
    await driver.get(BASE_URL_SELENIUM);
    const dropDawnMenu = await driver.wait(until.elementIsEnabled(driver.findElement(By.css(locatorsCss.dropDawnMenu))), 10000);
    await dropDawnMenu.click();
    const allServices = await driver.findElement(By.xpath(locatorsXpath.allServices));
    expect(await allServices.isDisplayed()).toBe(true);
    expect(await allServices.getText()).toBe('Все сервисы Хабра');
  });

  it('Проверка кнопки "Войти"', async () => {
    await driver.get(BASE_URL_SELENIUM);
    const loginButton = await driver.findElement(By.linkText('Войти'));
    expect(await loginButton.isDisplayed()).toBe(true);
    expect(await loginButton.getText()).toBe('Войти');
    expect(await loginButton.isEnabled()).toBe(true);
    await loginButton.click();
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toContain(AKK_PAGE);
  });

  it('Проверка возможности нажатия на кнопку "Туда" и перехода на новую страницу', async () => {
    await driver.get(BASE_URL_SELENIUM);
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    const readMoreButton = await driver.findElement(By.xpath(locatorsXpath.readMoreButton));
    expect(await readMoreButton.isDisplayed()).toBe(true);
    expect(await readMoreButton.getText()).toBe('Туда');
    await readMoreButton.click();
    await driver.wait(until.urlIs(BASE_URL_SELENIUM + 'page2/'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe(BASE_URL_SELENIUM + 'page2/');
  });

});