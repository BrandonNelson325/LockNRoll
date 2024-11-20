import { NavigatedData, Page, Observable, ObservableArray, Frame, prompt } from '@nativescript/core';

interface Move {
    type: 'roll' | 'doubles' | 'lock';
    score: number;
    playerIndex: number;
    roundScore: number;
    rollCount: number;
    wasCurrentPlayer?: boolean;
}

class PlayerViewModel extends Observable {
    private _name: string;
    private _totalScore: number;
    private _isLocked: boolean;
    private _isCurrentPlayer: boolean;
    private _lastLockedScore: number;
    private _lockedThisRoll: boolean;
    private _lockRollCount: number;
    private _gameViewModel: GameViewModel;

    constructor(name: string, gameViewModel: GameViewModel) {
        super();
        this._name = name;
        this._totalScore = 0;
        this._isLocked = false;
        this._isCurrentPlayer = false;
        this._lastLockedScore = 0;
        this._lockedThisRoll = false;
        this._lockRollCount = -1;
        this._gameViewModel = gameViewModel;
    }

    get name() { return this._name; }
    get totalScore() { return this._totalScore; }
    get isLocked() { return this._isLocked; }
    get isCurrentPlayer() { return this._isCurrentPlayer; }
    get canUnlock() { 
        return this._lockedThisRoll && 
               !this._gameViewModel.isLastPlayerToLock(this) && 
               this._lockRollCount === this._gameViewModel.rollCount;
    }
    get canDelete() { return this._gameViewModel.canDeletePlayers; }
    get canMoveUp() { return !this._isCurrentPlayer && this._gameViewModel.canMovePlayerUp(this); }
    get canMoveDown() { return !this._isCurrentPlayer && this._gameViewModel.canMovePlayerDown(this); }
    get isEditMode() { return this._gameViewModel.isEditMode; }

    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }

    set totalScore(value: number) {
        if (this._totalScore !== value) {
            this._totalScore = value;
            this.notifyPropertyChange('totalScore', value);
        }
    }

    set isLocked(value: boolean) {
        if (this._isLocked !== value) {
            this._isLocked = value;
            if (value) {
                this._lockRollCount = this._gameViewModel.rollCount;
                this._lockedThisRoll = true;
            } else {
                this._lockRollCount = -1;
                this._lockedThisRoll = false;
            }
            this.notifyPropertyChange('isLocked', value);
            this.notifyPropertyChange('canUnlock', this.canUnlock);
        }
    }

    set isCurrentPlayer(value: boolean) {
        if (this._isCurrentPlayer !== value) {
            this._isCurrentPlayer = value;
            this.notifyPropertyChange('isCurrentPlayer', value);
            this.notifyPropertyChange('canMoveUp', this.canMoveUp);
            this.notifyPropertyChange('canMoveDown', this.canMoveDown);
        }
    }

    editName() {
        this._gameViewModel.editPlayerName(this);
    }

    lock() {
        this._gameViewModel.lockPlayer(this);
    }

    unlock() {
        this._gameViewModel.unlockPlayer(this);
    }

    remove() {
        this._gameViewModel.deletePlayer(this);
    }

    moveUp() {
        this._gameViewModel.movePlayerUp(this);
    }

    moveDown() {
        this._gameViewModel.movePlayerDown(this);
    }

    resetForNewRound() {
        this._isLocked = false;
        this._lastLockedScore = 0;
        this._lockedThisRoll = false;
        this._lockRollCount = -1;
        this.notifyPropertyChange('isLocked', false);
        this.notifyPropertyChange('canUnlock', false);
    }

    updateCanDelete() {
        this.notifyPropertyChange('canDelete', this.canDelete);
    }

    updateCanUnlock() {
        this.notifyPropertyChange('canUnlock', this.canUnlock);
    }

    updateMoveButtons() {
        this.notifyPropertyChange('canMoveUp', this.canMoveUp);
        this.notifyPropertyChange('canMoveDown', this.canMoveDown);
    }

    updateEditMode() {
        this.notifyPropertyChange('isEditMode', this.isEditMode);
    }

    addScore(score: number) {
        this._totalScore += score;
        this._lastLockedScore = score;
        this._lockedThisRoll = true;
        this._lockRollCount = this._gameViewModel.rollCount;
        this.notifyPropertyChange('totalScore', this._totalScore);
        this.notifyPropertyChange('canUnlock', this.canUnlock);
    }

    removeScore() {
        this._totalScore -= this._lastLockedScore;
        this._lastLockedScore = 0;
        this._lockedThisRoll = false;
        this._lockRollCount = -1;
        this.notifyPropertyChange('totalScore', this._totalScore);
        this.notifyPropertyChange('canUnlock', this.canUnlock);
    }
}

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const context = args.context || {};
    page.bindingContext = new GameViewModel(context);
}

class GameViewModel extends Observable {
    private _players: ObservableArray<PlayerViewModel>;
    private _currentRound = 1;
    private _totalRounds: number;
    private _roundScore = 0;
    private _rollCount = 0;
    private _currentPlayerIndex = 0;
    private _moveHistory: Move[] = [];
    private _isEditMode = false;

    constructor(context: any) {
        super();
        console.log('GameViewModel constructor called with context:', context);
        
        this._totalRounds = context?.totalRounds || 10;
        const playerNames = context?.players || [];
        console.log('Initializing with player names:', playerNames);
        
        this._players = new ObservableArray<PlayerViewModel>();
        playerNames.forEach((name: string, index: number) => {
            const player = new PlayerViewModel(name, this);
            player.isCurrentPlayer = index === 0;
            this._players.push(player);
        });
        
        console.log('Players initialized:', this._players);
    }

    get players() { return this._players; }
    get currentRound() { return this._currentRound; }
    get roundScore() { return this._roundScore; }
    get currentPlayer() { return this._players.getItem(this._currentPlayerIndex)?.name || ''; }
    get rollCount() { return this._rollCount; }
    get canDeletePlayers() { return this._roundScore === 0 && this._rollCount === 0 && this._players.length > 2; }
    get canUndo() { return this._moveHistory.length > 0; }
    get isEditMode() { return this._isEditMode; }
    get currentLeader() {
        let highscore = 0
        let leader = ''
        this._players.forEach((player, index) => {
            if (player.totalScore > highscore) {
                leader = player.name
            }
        });
        return leader || ''
    }

    toggleEditMode() {
        this._isEditMode = !this._isEditMode;
        this.notifyPropertyChange('isEditMode', this._isEditMode);
        this._players.forEach(player => player.updateEditMode());
    }

    canMovePlayerUp(player: PlayerViewModel): boolean {
        return this._roundScore === 0 && this._rollCount === 0 && this._players.indexOf(player) > 0;
    }

    canMovePlayerDown(player: PlayerViewModel): boolean {
        return this._roundScore === 0 && this._rollCount === 0 && this._players.indexOf(player) < this._players.length - 1;
    }

    movePlayerUp(player: PlayerViewModel) {
        if (!this.canMovePlayerUp(player)) return;

        const index = this._players.indexOf(player);
        const wasCurrentPlayer = player.isCurrentPlayer;
        
        this._players.splice(index, 1);
        this._players.splice(index - 1, 0, player);
        
        if (wasCurrentPlayer) {
            this._currentPlayerIndex--;
        }
        
        this.updatePlayerStates();
    }

    movePlayerDown(player: PlayerViewModel) {
        if (!this.canMovePlayerDown(player)) return;

        const index = this._players.indexOf(player);
        const wasCurrentPlayer = player.isCurrentPlayer;
        
        this._players.splice(index, 1);
        this._players.splice(index + 1, 0, player);
        
        if (wasCurrentPlayer) {
            this._currentPlayerIndex++;
        }
        
        this.updatePlayerStates();
    }

    isLastPlayerToLock(player: PlayerViewModel): boolean {
        const lockedCount = this._players.filter(p => p.isLocked).length;
        return lockedCount === this._players.length - 1 && !player.isLocked;
    }

    editPlayerName(player: PlayerViewModel) {
        prompt({
            title: "Edit Player Name",
            message: "Enter new name for " + player.name,
            defaultText: player.name,
            okButtonText: "Save",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.result && result.text.trim()) {
                player.name = result.text.trim();
            }
        });
    }

    onScore(args: any) {
        const button = args.object;
        const value = parseInt(button.text);
        let scoreToAdd = 0;
        
        const isWithinFirstThree = this._rollCount < 3;
        
        if (isWithinFirstThree) {
            if (value === 2 || value === 12) {
                scoreToAdd = 200;
            } else if (value === 7) {
                scoreToAdd = 100;
            } else {
                scoreToAdd = value;
            }
            this._roundScore += scoreToAdd;
        } else {
            if (value === 7) {
                this._roundScore = 0;
                this.nextRound();
                return;
            } else if (value === 2 || value === 12) {
                return;
            } else {
                scoreToAdd = value;
                this._roundScore += scoreToAdd;
            }
        }
        
        this._moveHistory.push({
            type: 'roll',
            score: scoreToAdd,
            playerIndex: this._currentPlayerIndex,
            roundScore: this._roundScore - scoreToAdd,
            rollCount: this._rollCount
        });
        
        this._rollCount++;
        this.nextPlayer();
        this.notifyPropertyChanges();
        this.updatePlayerStates();
    }

    onDoubles() {
        if (this._rollCount >= 3) {
            const oldScore = this._roundScore;
            this._roundScore *= 2;
            
            this._moveHistory.push({
                type: 'doubles',
                score: this._roundScore - oldScore,
                playerIndex: this._currentPlayerIndex,
                roundScore: oldScore,
                rollCount: this._rollCount
            });
            
            this.notifyPropertyChanges();
            this.updatePlayerStates();
        }
    }

    onUndo() {
        if (this._moveHistory.length === 0) return;

        const lastMove = this._moveHistory.pop();
        if (!lastMove) return;

        if (lastMove.type === 'lock') {
            const player = this._players.getItem(lastMove.playerIndex);
            if (lastMove.wasCurrentPlayer) {
                this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
                this._currentPlayerIndex = lastMove.playerIndex;
                this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
            }
            this.unlockPlayer(player);
        } else {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
            this._currentPlayerIndex = lastMove.playerIndex;
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
            this._roundScore = lastMove.roundScore;
            this._rollCount = lastMove.rollCount;
        }

        this.notifyPropertyChanges();
        this.updatePlayerStates();
    }

    onNewGame() {
        const previousPlayers = this._players.map(p => p.name);
        Frame.topmost().navigate({
            moduleName: 'views/player-selection/player-selection',
            context: { previousPlayers },
            clearHistory: true
        });
    }

    lockPlayer(player: PlayerViewModel) {
        if (player.isLocked) return;

        const wasCurrentPlayer = player.isCurrentPlayer;
        player.addScore(this._roundScore);
        player.isLocked = true;

        this._moveHistory.push({
            type: 'lock',
            score: this._roundScore,
            playerIndex: this._players.indexOf(player),
            roundScore: this._roundScore,
            rollCount: this._rollCount,
            wasCurrentPlayer
        });

        if (wasCurrentPlayer) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
            this.findNextUnlockedPlayer();
            if (this._currentPlayerIndex < this._players.length) {
                this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
            }
        }
        
        this.notifyPropertyChanges();
    }

    unlockPlayer(player: PlayerViewModel) {
        if (!player.isLocked) return;

        player.removeScore();
        player.isLocked = false;

        const playerIndex = this._players.indexOf(player);
        const lastLockMove = [...this._moveHistory].reverse().find(
            move => move.type === 'lock' && move.playerIndex === playerIndex
        );

        if (lastLockMove?.wasCurrentPlayer) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
            this._currentPlayerIndex = playerIndex;
            player.isCurrentPlayer = true;
        }

        this.notifyPropertyChanges();
    }

    deletePlayer(player: PlayerViewModel) {
        if (!this.canDeletePlayers) return;

        const index = this._players.indexOf(player);
        if (index === -1) return;

        if (index === this._currentPlayerIndex) {
            this._currentPlayerIndex = (this._currentPlayerIndex + 1) % this._players.length;
        } else if (index < this._currentPlayerIndex) {
            this._currentPlayerIndex--;
        }

        this._players.splice(index, 1);
        
        if (this._players.length > 0) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
        }

        this.notifyPropertyChanges();
        this.updatePlayerStates();
    }

    private nextPlayer() {
        this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
        this.findNextUnlockedPlayer();
        if (this._currentPlayerIndex < this._players.length) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
        }
    }

    private findNextUnlockedPlayer() {
        let startIndex = this._currentPlayerIndex;
        do {
            this._currentPlayerIndex = (this._currentPlayerIndex + 1) % this._players.length;
            if (!this._players.getItem(this._currentPlayerIndex).isLocked) {
                return;
            }
        } while (this._currentPlayerIndex !== startIndex);

        if (this.allPlayersLocked()) {
            this.nextRound();
        }
    }

    private nextRound() {
        this._currentRound++;
        if (this._currentRound > this._totalRounds) {
            this.endGame();
            return;
        }
        
        console.log(`Starting round ${this._currentRound}`);
        this._roundScore = 0;
        this._rollCount = 0;
        this._moveHistory = [];
        
        // Continue with next player instead of resetting to first
        this._currentPlayerIndex = (this._currentPlayerIndex + 1) % this._players.length;
        
        this._players.forEach((player, index) => {
            player.resetForNewRound();
            player.isCurrentPlayer = index === this._currentPlayerIndex;
        });
        
        this.notifyPropertyChanges();
        this.updatePlayerStates();
    }

    private updatePlayerStates() {
        this._players.forEach(player => {
            player.updateCanDelete();
            player.updateCanUnlock();
            player.updateMoveButtons();
            player.updateEditMode();
        });
    }

    private allPlayersLocked(): boolean {
        return this._players.every(player => player.isLocked);
    }

    private endGame() {
        const winner = this._players.reduce((prev, current) => 
            (prev.totalScore > current.totalScore) ? prev : current
        );
        alert(`Game Over! ${winner.name} wins with ${winner.totalScore} points!`);
    }

    private notifyPropertyChanges() {
        this.notifyPropertyChange('currentRound', this._currentRound);
        this.notifyPropertyChange('roundScore', this._roundScore);
        this.notifyPropertyChange('currentPlayer', this.currentPlayer);
        this.notifyPropertyChange('currentLeader', this.currentLeader);
        this.notifyPropertyChange('rollCount', this._rollCount);
        this.notifyPropertyChange('canUndo', this.canUndo);
        this.notifyPropertyChange('canDeletePlayers', this.canDeletePlayers);
        this.notifyPropertyChange('players', this._players);
    }
}