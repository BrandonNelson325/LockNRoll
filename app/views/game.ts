import { NavigatedData, Page, Observable } from '@nativescript/core';

interface Player {
    name: string;
    totalScore: number;
    isLocked: boolean;
    isCurrentPlayer: boolean;
}

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    if (!page.bindingContext) {
        const context = args.context || {};
        page.bindingContext = new GameViewModel(context);
    }
}

export function onLockTap(args: any) {
    const page = args.object.page;
    const viewModel = page.bindingContext;
    const player = args.object.bindingContext;
    viewModel.lockPlayer(player);
}

class GameViewModel extends Observable {
    private _players: Player[] = [];
    private _currentRound = 1;
    private _totalRounds: number;
    private _roundScore = 0;
    private _rollCount = 0;
    private _currentPlayerIndex = 0;

    constructor(context: any) {
        super();
        
        this._totalRounds = context?.totalRounds || 10;
        const playerNames = context?.players || [];
        
        this._players = playerNames.map((name, index) => ({
            name,
            totalScore: 0,
            isLocked: false,
            isCurrentPlayer: index === 0
        }));
        
        this.notifyPropertyChanges();
    }

    get players() {
        return this._players;
    }

    get currentRound() {
        return this._currentRound;
    }

    get roundScore() {
        return this._roundScore;
    }

    get currentPlayer() {
        return this._players[this._currentPlayerIndex]?.name || '';
    }

    get currentLeader() {
        let highscore = 0
        let leader = ''
        this._players.forEach((player, index) => {
            if (player.totalScore > highscore) {
                leader = player.name
            }
        });
        console.log(leader)
        return leader || ''
    }

    get rollCount() {
        return this._rollCount;
    }

    onScore(args: any) {
        const button = args.object;
        const value = parseInt(button.text);
        
        const isWithinFirstThree = this._rollCount < 3;
        
        if (isWithinFirstThree) {
            if (value === 2 || value === 12) {
                this._roundScore += 200;
            } else if (value === 7) {
                this._roundScore += 100;
            } else {
                this._roundScore += value;
            }
        } else {
            if (value === 7) {
                this._roundScore = 0;
                this.nextPlayer();
                return;
            } else if (value === 2 || value === 12) {
                return;
            } else {
                this._roundScore += value;
            }
        }
        
        this._rollCount++;
        this.notifyPropertyChanges();
    }

    onDoubles() {
        if (this._rollCount >= 3) {
            this._roundScore *= 2;
            this.notifyPropertyChanges();
        }
    }

    lockPlayer(player: Player) {
        const index = this._players.findIndex(p => p.name === player.name);
        if (index === -1 || player.isLocked) return;

        player.totalScore += this._roundScore;
        player.isLocked = true;
        
        if (this.allPlayersLocked()) {
            this.nextRound();
        } else {
            this.nextPlayer();
        }
    }

    private nextPlayer() {
        let nextIndex = (this._currentPlayerIndex + 1) % this._players.length;
        let loopCount = 0;
        
        while (this._players[nextIndex].isLocked && loopCount < this._players.length) {
            nextIndex = (nextIndex + 1) % this._players.length;
            loopCount++;
        }
        
        if (loopCount < this._players.length) {
            this._players[this._currentPlayerIndex].isCurrentPlayer = false;
            this._currentPlayerIndex = nextIndex;
            this._players[this._currentPlayerIndex].isCurrentPlayer = true;
            this._roundScore = 0;
            this._rollCount = 0;
            this.notifyPropertyChanges();
        } else {
            this.nextRound();
        }
    }

    private nextRound() {
        this._currentRound++;
        if (this._currentRound > this._totalRounds) {
            this.endGame();
            return;
        }
        
        this._roundScore = 0;
        this._rollCount = 0;
        this._currentPlayerIndex = 0;
        
        this._players.forEach((player, index) => {
            player.isLocked = false;
            player.isCurrentPlayer = index === 0;
        });
        
        this.notifyPropertyChanges();
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
        this.notifyPropertyChange('players', this._players);
    }
}