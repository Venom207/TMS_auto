import { Page } from "@playwright/test";
import { StartPage } from "./startPage";

export class PageFactory{
    static getPage(page:Page,pageName:string)
    {
        switch(pageName)
        {
            case("StartPage"):
            return new StartPage(page)
        }
    }
}