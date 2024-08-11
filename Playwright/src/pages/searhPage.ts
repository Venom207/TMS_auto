import { Page, test, expect  } from '@playwright/test';

export default class SearchPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }   
     requestSearch = {
        field:'textbox', 
        name:{ name: 'Поиск' }
    };
     respSearch = {
        field:'button', 
        name:{ name: 'по релевантности Открыть список' }
}
}
