import { Page } from "@playwright/test";
import { NavigationBar } from "../elements/navigationBar";
export class BasePage{
    protected url!:string
    protected navigationBar:NavigationBar
    constructor(protected page:Page){
        this.navigationBar = new NavigationBar(page)
    }
    public async viewPage(){
        return  await this.page.goto(this.url)
    }
    public async getElement(locator:string)
    {
        return await this.page.$(locator)
    }
    public async closePage(){
        return await this.page.close();
    }
    public async getPageTitle()
    {
        return this.page.title();
    }
}