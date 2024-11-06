import { NavigatedData, Page, Observable, ObservableArray, Frame } from '@nativescript/core';

class PlayerItem extends Observable {
    private _name: string;
    private _viewModel: PlayerSelectionViewModel;

    constructor(name: string, viewModel: PlayerSelectionViewModel) {
        super();
        this._name = name;
        this._viewModel = viewModel;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }

    get canMoveUp() {
        return this._viewModel.canMovePlayerUp(this);
    }

    get canMoveDown() {
        return this._viewModel.canMovePlayerDown(this);
    }

    remove() {
        this._viewModel.removePlayer(this);
    }

    moveUp() {
        this._viewModel.movePlayerUp(this);
    }

    moveDown() {
        this._viewModel.movePlayerDown(this);
    }

    updateName(args: any) {
        const textField = args.object;
        const newName = textField.text.trim();
        if (newName) {
            this.name = newName;
        }
    }
}

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const context = args.context || {};
    page.bindingContext = new PlayerSelectionViewModel(context);
}

class PlayerSelectionViewModel extends Observable {
    private _players: ObservableArray<PlayerItem>;
    private _playerName: string;

    constructor(context: any) {
        super();
        this._players = new ObservableArray<PlayerItem>();
        this._playerName = '';

        // Add previous players if they exist
        const previousPlayers = context?.previousPlayers || [];
        previousPlayers.forEach(name => {
            this._players.push(new PlayerItem(name, this));
        });
    }

    get players() {
        return this._players;
    }

    get playerName() {
        return this._playerName;
    }

    get canContinue() {
        return this._players.length >= 2;
    }

    set playerName(value: string) {
        if (this._playerName !== value) {
            this._playerName = value;
            this.notifyPropertyChange('playerName', value);
        }
    }

    addPlayer() {
        if (this.playerName.trim()) {
            this._players.push(new PlayerItem(this.playerName.trim(), this));
            this.playerName = '';
            this.notifyPropertyChange('canContinue', this.canContinue);
            this.updatePlayerStates();
        }
    }

    removePlayer(player: PlayerItem) {
        const index = this._players.indexOf(player);
        if (index !== -1) {
            this._players.splice(index, 1);
            this.notifyPropertyChange('canContinue', this.canContinue);
            this.updatePlayerStates();
        }
    }

    canMovePlayerUp(player: PlayerItem): boolean {
        return this._players.indexOf(player) > 0;
    }

    canMovePlayerDown(player: PlayerItem): boolean {
        return this._players.indexOf(player) < this._players.length - 1;
    }

    movePlayerUp(player: PlayerItem) {
        const index = this._players.indexOf(player);
        if (index > 0) {
            this._players.splice(index, 1);
            this._players.splice(index - 1, 0, player);
            this.updatePlayerStates();
        }
    }

    movePlayerDown(player: PlayerItem) {
        const index = this._players.indexOf(player);
        if (index < this._players.length - 1) {
            this._players.splice(index, 1);
            this._players.splice(index + 1, 0, player);
            this.updatePlayerStates();
        }
    }

    private updatePlayerStates() {
        this._players.forEach(player => {
            player.notifyPropertyChange('canMoveUp', player.canMoveUp);
            player.notifyPropertyChange('canMoveDown', player.canMoveDown);
        });
    }

    onContinue() {
        if (this.canContinue) {
            const navigationContext = {
                players: this._players.map(p => p.name)
            };
            
            console.log('Player Selection navigating with context:', navigationContext);
            
            Frame.topmost().navigate({
                moduleName: 'views/round-selection/round-selection',
                context: navigationContext
            });
        }
    }
}