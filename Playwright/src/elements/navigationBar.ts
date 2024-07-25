import { ElementHandle, Page } from "@playwright/test";
export class NavigationBar{
    constructor(protected readonly page:Page){
    }
    public async openNavigationBar(){
       const element =  await this.page.$("//button[@aria-label='Toggle navigation bar']")
       await element?.click()
    }
    public async navigateInMenuByText(text:string){
        
    }
}