import { NavigatedData, Page, Frame } from '@nativescript/core';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    console.log('Round Selection received context:', context);
    page.bindingContext = new RoundSelectionViewModel(context);
}

class RoundSelectionViewModel {
    private players: string[];

    constructor(context: any) {
        console.log('RoundSelection constructor context:', context);
        this.players = context?.players || [];
        console.log('Players in round selection:', this.players);
    }

    selectRounds(args: any) {
        const button = args.object;
        const rounds = parseInt(button.text);
        
        const navigationContext = {
            players: this.players,
            totalRounds: rounds
        };
        
        console.log('Navigating to game with context:', navigationContext);

        Frame.topmost().navigate({
            moduleName: 'views/game/game',
            context: navigationContext,
            clearHistory: true
        });
    }
}