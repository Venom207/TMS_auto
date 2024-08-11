
import { Page } from "@playwright/test";
import HomePage from "./startPage";
import { DocsPage } from "./docsPage";
import { Pages } from "../consts/consts";


export class PageFactory{
    static getPage(page:Page,pageName:Pages)
    {
        switch(pageName)
        {
            case(Pages.StartPage):
            return new HomePage(page)

            case(Pages.DocsPage):
            return new DocsPage(page)
        }
    }
}