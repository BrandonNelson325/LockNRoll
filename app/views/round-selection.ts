import { NavigatedData, Page, Frame } from '@nativescript/core';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new RoundSelectionViewModel(page.navigationContext);
}

class RoundSelectionViewModel {
    private players: string[];

    constructor(context: any) {
        console.log('RoundSelection context:', context);
        this.players = context?.players || [];
    }

    selectRounds(args: any) {
        const button = args.object;
        const rounds = parseInt(button.text);
        
        console.log('Navigating to game with:', {
            players: this.players,
            totalRounds: rounds
        });

        Frame.topmost().navigate({
            moduleName: 'views/game',
            context: {
                players: this.players,
                totalRounds: rounds
            },
            clearHistory: true
        });
    }
}