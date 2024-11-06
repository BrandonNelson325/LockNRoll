import { NavigatedData, Page, Observable, ObservableArray, Frame } from '@nativescript/core';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new PlayerSelectionViewModel();
}

class PlayerSelectionViewModel extends Observable {
    private _players: ObservableArray<{ name: string }>;
    private _playerName: string;

    constructor() {
        super();
        this._players = new ObservableArray<{ name: string }>();
        this._playerName = '';
    }

    get players() {
        return this._players;
    }

    get playerName() {
        return this._playerName;
    }

    set playerName(value: string) {
        if (this._playerName !== value) {
            this._playerName = value;
            this.notifyPropertyChange('playerName', value);
        }
    }

    addPlayer() {
        if (this.playerName.trim()) {
            this._players.push({ name: this.playerName.trim() });
            this.playerName = '';
        }
    }

    onContinue() {
        Frame.topmost().navigate({
            moduleName: 'views/round-selection',
            context: { players: this._players.map(p => p.name) }
        });
    }
}