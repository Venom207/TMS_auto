import { ElementHandle, Page } from "@playwright/test";

export const locatorsXpath = {
    "titleElement": "//h1[contains(text(), 'Все потоки')]",
    "newsLink": "//a[contains(text(),'Новости')]",
    "allServices": "//*[starts-with(text(), 'Все сервисы Хабра')]",
    "readMoreButton": "//span[contains(text(), 'Туда')]",   
};

export const locatorsCss = {
    "dropDawnMenu": "svg.tm-svg-img.tm-header__icon.tm-header__icon_dropdown",
}; 

export class NavigationBar{
    protected   titleElement!:ElementHandle
    protected   newsLink!:ElementHandle
    protected   allServices!:ElementHandle
    protected   readMoreButton!:ElementHandle
    constructor(protected readonly page:Page){
    }

    public async openNavigationBar(){
       const element =  await this.page.$("//button[@class='tm-header__dropdown-toggle']")
       await element?.click()
    }

    public async navigateInMenuByText(text:string):Promise<void>{
        await this.page.waitForSelector("//div[contains(text(),'Все сервисы Хабра')]");
        const arrayOfElement = await this.page.$$("//div[@class='tm-our-projects__items']")
        const element =  arrayOfElement.find(async item=> await item.textContent() === text)
        await element?.click()
        await this.page.waitForSelector("//header")
    }
}