import { NavigatedData, Page } from '@nativescript/core';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new RulesViewModel();
}

class RulesViewModel {
    constructor() {
        // Initialize if needed
    }
}