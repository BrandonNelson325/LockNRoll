import { NavigatedData, Page, Frame } from '@nativescript/core';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new LandingViewModel();
}

class LandingViewModel {
    onNewGame() {
        console.log('Navigating to player selection');
        Frame.topmost().navigate({
            moduleName: 'views/player-selection/player-selection',
            clearHistory: false
        });
    }
}