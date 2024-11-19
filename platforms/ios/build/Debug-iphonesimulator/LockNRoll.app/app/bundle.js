(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-root.xml": "./app/app-root.xml",
	"./app.css": "./app/app.css",
	"./app.ts": "./app/app.ts",
	"./views/game.ts": "./app/views/game.ts",
	"./views/game.xml": "./app/views/game.xml",
	"./views/game/game.ts": "./app/views/game/game.ts",
	"./views/game/game.xml": "./app/views/game/game.xml",
	"./views/landing-page.ts": "./app/views/landing-page.ts",
	"./views/landing-page.xml": "./app/views/landing-page.xml",
	"./views/landing-page/landing-page.ts": "./app/views/landing-page/landing-page.ts",
	"./views/landing-page/landing-page.xml": "./app/views/landing-page/landing-page.xml",
	"./views/player-selection.ts": "./app/views/player-selection.ts",
	"./views/player-selection.xml": "./app/views/player-selection.xml",
	"./views/player-selection/player-selection.ts": "./app/views/player-selection/player-selection.ts",
	"./views/player-selection/player-selection.xml": "./app/views/player-selection/player-selection.xml",
	"./views/player-selection/reorder-modal/reorder-modal.ts": "./app/views/player-selection/reorder-modal/reorder-modal.ts",
	"./views/player-selection/reorder-modal/reorder-modal.xml": "./app/views/player-selection/reorder-modal/reorder-modal.xml",
	"./views/round-selection.ts": "./app/views/round-selection.ts",
	"./views/round-selection.xml": "./app/views/round-selection.xml",
	"./views/round-selection/round-selection.ts": "./app/views/round-selection/round-selection.ts",
	"./views/round-selection/round-selection.xml": "./app/views/round-selection/round-selection.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$";

/***/ }),

/***/ "./app/app.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/app.css");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application/application.ios.js");
// Added by app-css-loader


_nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Application.run({ moduleName: 'app-root' });


/***/ }),

/***/ "./app/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"#f3f4f6"}]},{"type":"rule","selectors":[".ns-dark .page"],"declarations":[{"type":"declaration","property":"background-color","value":"#1f2937"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".btn-success"],"declarations":[{"type":"declaration","property":"background-color","value":"#10b981"}]},{"type":"rule","selectors":[".btn-danger"],"declarations":[{"type":"declaration","property":"background-color","value":"#ef4444"}]},{"type":"rule","selectors":[".btn-disabled"],"declarations":[{"type":"declaration","property":"background-color","value":"#9ca3af"},{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":[".btn-icon"],"declarations":[{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"40"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".btn-icon-compact"],"declarations":[{"type":"declaration","property":"padding","value":"2"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"28"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".title"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"32"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"16 0"}]},{"type":"rule","selectors":[".ns-dark .title"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".subtitle"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"8 0"}]},{"type":"rule","selectors":[".ns-dark .subtitle"],"declarations":[{"type":"declaration","property":"color","value":"#e5e7eb"}]},{"type":"rule","selectors":[".game-info"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"8 0"}]},{"type":"rule","selectors":[".ns-dark .game-info"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".input"],"declarations":[{"type":"declaration","property":"background-color","value":"#f9fafb"},{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"placeholder-color","value":"#6b7280"}]},{"type":"rule","selectors":[".ns-dark .input"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".input-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#f9fafb"},{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"padding","value":"4"},{"type":"declaration","property":"border-radius","value":"6"},{"type":"declaration","property":"margin","value":"2"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"height","value":"32"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"placeholder-color","value":"#6b7280"}]},{"type":"rule","selectors":[".ns-dark .input-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-status"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"margin","value":"4"},{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".ns-dark .player-status"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-status-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"4"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"margin","value":"1"},{"type":"declaration","property":"border-radius","value":"6"}]},{"type":"rule","selectors":[".ns-dark .player-status-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-name"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".ns-dark .player-name"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".player-score"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ns-dark .player-score"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".player-status-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#f3f4f6"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".ns-dark .player-status-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#1f2937"},{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".reorder-handle"],"declarations":[{"type":"declaration","property":"color","value":"#9ca3af"}]},{"type":"rule","selectors":[".ad-container"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#e5e7eb"},{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".ns-dark .ad-container"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/Users/bnelson/PersonalDev/LockNRoll/app/app.css")


/***/ }),

/***/ "./app/views/game.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onLockTap: () => (/* binding */ onLockTap),
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

function onNavigatingTo(args) {
    const page = args.object;
    if (!page.bindingContext) {
        const context = args.context || {};
        page.bindingContext = new GameViewModel(context);
    }
}
function onLockTap(args) {
    const page = args.object.page;
    const viewModel = page.bindingContext;
    const player = args.object.bindingContext;
    viewModel.lockPlayer(player);
}
class GameViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(context) {
        super();
        this._players = [];
        this._currentRound = 1;
        this._roundScore = 0;
        this._rollCount = 0;
        this._currentPlayerIndex = 0;
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
    get rollCount() {
        return this._rollCount;
    }
    onScore(args) {
        const button = args.object;
        const value = parseInt(button.text);
        const isWithinFirstThree = this._rollCount < 3;
        if (isWithinFirstThree) {
            if (value === 2 || value === 12) {
                this._roundScore += 200;
            }
            else if (value === 7) {
                this._roundScore += 100;
            }
            else {
                this._roundScore += value;
            }
        }
        else {
            if (value === 7) {
                this._roundScore = 0;
                this.nextPlayer();
                return;
            }
            else if (value === 2 || value === 12) {
                return;
            }
            else {
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
    lockPlayer(player) {
        const index = this._players.findIndex(p => p.name === player.name);
        if (index === -1 || player.isLocked)
            return;
        player.totalScore += this._roundScore;
        player.isLocked = true;
        if (this.allPlayersLocked()) {
            this.nextRound();
        }
        else {
            this.nextPlayer();
        }
    }
    nextPlayer() {
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
        }
        else {
            this.nextRound();
        }
    }
    nextRound() {
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
    allPlayersLocked() {
        return this._players.every(player => player.isLocked);
    }
    endGame() {
        const winner = this._players.reduce((prev, current) => (prev.totalScore > current.totalScore) ? prev : current);
        alert(`Game Over! ${winner.name} wins with ${winner.totalScore} points!`);
    }
    notifyPropertyChanges() {
        this.notifyPropertyChange('currentRound', this._currentRound);
        this.notifyPropertyChange('roundScore', this._roundScore);
        this.notifyPropertyChange('currentPlayer', this.currentPlayer);
        this.notifyPropertyChange('rollCount', this._rollCount);
        this.notifyPropertyChange('players', this._players);
    }
}


/***/ }),

/***/ "./app/views/game/game.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable-array/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.ios.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

class PlayerViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(name, gameViewModel) {
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
    set name(value) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }
    set totalScore(value) {
        if (this._totalScore !== value) {
            this._totalScore = value;
            this.notifyPropertyChange('totalScore', value);
        }
    }
    set isLocked(value) {
        if (this._isLocked !== value) {
            this._isLocked = value;
            if (value) {
                this._lockRollCount = this._gameViewModel.rollCount;
                this._lockedThisRoll = true;
            }
            else {
                this._lockRollCount = -1;
                this._lockedThisRoll = false;
            }
            this.notifyPropertyChange('isLocked', value);
            this.notifyPropertyChange('canUnlock', this.canUnlock);
        }
    }
    set isCurrentPlayer(value) {
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
    addScore(score) {
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
function onNavigatingTo(args) {
    const page = args.object;
    const context = args.context || {};
    page.bindingContext = new GameViewModel(context);
}
class GameViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(context) {
        super();
        this._currentRound = 1;
        this._roundScore = 0;
        this._rollCount = 0;
        this._currentPlayerIndex = 0;
        this._moveHistory = [];
        this._isEditMode = false;
        console.log('GameViewModel constructor called with context:', context);
        this._totalRounds = context?.totalRounds || 10;
        const playerNames = context?.players || [];
        console.log('Initializing with player names:', playerNames);
        this._players = new _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.ObservableArray();
        playerNames.forEach((name, index) => {
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
    toggleEditMode() {
        this._isEditMode = !this._isEditMode;
        this.notifyPropertyChange('isEditMode', this._isEditMode);
        this._players.forEach(player => player.updateEditMode());
    }
    canMovePlayerUp(player) {
        return this._roundScore === 0 && this._rollCount === 0 && this._players.indexOf(player) > 0;
    }
    canMovePlayerDown(player) {
        return this._roundScore === 0 && this._rollCount === 0 && this._players.indexOf(player) < this._players.length - 1;
    }
    movePlayerUp(player) {
        if (!this.canMovePlayerUp(player))
            return;
        const index = this._players.indexOf(player);
        const wasCurrentPlayer = player.isCurrentPlayer;
        this._players.splice(index, 1);
        this._players.splice(index - 1, 0, player);
        if (wasCurrentPlayer) {
            this._currentPlayerIndex--;
        }
        this.updatePlayerStates();
    }
    movePlayerDown(player) {
        if (!this.canMovePlayerDown(player))
            return;
        const index = this._players.indexOf(player);
        const wasCurrentPlayer = player.isCurrentPlayer;
        this._players.splice(index, 1);
        this._players.splice(index + 1, 0, player);
        if (wasCurrentPlayer) {
            this._currentPlayerIndex++;
        }
        this.updatePlayerStates();
    }
    isLastPlayerToLock(player) {
        const lockedCount = this._players.filter(p => p.isLocked).length;
        return lockedCount === this._players.length - 1 && !player.isLocked;
    }
    editPlayerName(player) {
        (0,_nativescript_core__WEBPACK_IMPORTED_MODULE_2__.prompt)({
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
    onScore(args) {
        const button = args.object;
        const value = parseInt(button.text);
        let scoreToAdd = 0;
        const isWithinFirstThree = this._rollCount < 3;
        if (isWithinFirstThree) {
            if (value === 2 || value === 12) {
                scoreToAdd = 200;
            }
            else if (value === 7) {
                scoreToAdd = 100;
            }
            else {
                scoreToAdd = value;
            }
            this._roundScore += scoreToAdd;
        }
        else {
            if (value === 7) {
                this._roundScore = 0;
                this.nextRound();
                return;
            }
            else if (value === 2 || value === 12) {
                return;
            }
            else {
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
        if (this._moveHistory.length === 0)
            return;
        const lastMove = this._moveHistory.pop();
        if (!lastMove)
            return;
        if (lastMove.type === 'lock') {
            const player = this._players.getItem(lastMove.playerIndex);
            if (lastMove.wasCurrentPlayer) {
                this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
                this._currentPlayerIndex = lastMove.playerIndex;
                this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
            }
            this.unlockPlayer(player);
        }
        else {
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
        _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Frame.topmost().navigate({
            moduleName: 'views/player-selection/player-selection',
            context: { previousPlayers },
            clearHistory: true
        });
    }
    lockPlayer(player) {
        if (player.isLocked)
            return;
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
    unlockPlayer(player) {
        if (!player.isLocked)
            return;
        player.removeScore();
        player.isLocked = false;
        const playerIndex = this._players.indexOf(player);
        const lastLockMove = [...this._moveHistory].reverse().find(move => move.type === 'lock' && move.playerIndex === playerIndex);
        if (lastLockMove?.wasCurrentPlayer) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
            this._currentPlayerIndex = playerIndex;
            player.isCurrentPlayer = true;
        }
        this.notifyPropertyChanges();
    }
    deletePlayer(player) {
        if (!this.canDeletePlayers)
            return;
        const index = this._players.indexOf(player);
        if (index === -1)
            return;
        if (index === this._currentPlayerIndex) {
            this._currentPlayerIndex = (this._currentPlayerIndex + 1) % this._players.length;
        }
        else if (index < this._currentPlayerIndex) {
            this._currentPlayerIndex--;
        }
        this._players.splice(index, 1);
        if (this._players.length > 0) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
        }
        this.notifyPropertyChanges();
        this.updatePlayerStates();
    }
    nextPlayer() {
        this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = false;
        this.findNextUnlockedPlayer();
        if (this._currentPlayerIndex < this._players.length) {
            this._players.getItem(this._currentPlayerIndex).isCurrentPlayer = true;
        }
    }
    findNextUnlockedPlayer() {
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
    nextRound() {
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
    updatePlayerStates() {
        this._players.forEach(player => {
            player.updateCanDelete();
            player.updateCanUnlock();
            player.updateMoveButtons();
            player.updateEditMode();
        });
    }
    allPlayersLocked() {
        return this._players.every(player => player.isLocked);
    }
    endGame() {
        const winner = this._players.reduce((prev, current) => (prev.totalScore > current.totalScore) ? prev : current);
        alert(`Game Over! ${winner.name} wins with ${winner.totalScore} points!`);
    }
    notifyPropertyChanges() {
        this.notifyPropertyChange('currentRound', this._currentRound);
        this.notifyPropertyChange('roundScore', this._roundScore);
        this.notifyPropertyChange('currentPlayer', this.currentPlayer);
        this.notifyPropertyChange('rollCount', this._rollCount);
        this.notifyPropertyChange('canUndo', this.canUndo);
        this.notifyPropertyChange('canDeletePlayers', this.canDeletePlayers);
        this.notifyPropertyChange('players', this._players);
    }
}


/***/ }),

/***/ "./app/views/landing-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new LandingViewModel();
}
class LandingViewModel {
    onNewGame() {
        console.log('Navigating to player selection');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost().navigate({
            moduleName: 'views/player-selection/player-selection',
            clearHistory: false
        });
    }
}


/***/ }),

/***/ "./app/views/landing-page/landing-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new LandingViewModel();
}
class LandingViewModel {
    onNewGame() {
        console.log('Navigating to player selection');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost().navigate({
            moduleName: 'views/player-selection/player-selection',
            clearHistory: false
        });
    }
}


/***/ }),

/***/ "./app/views/player-selection.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable-array/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new PlayerSelectionViewModel();
}
class PlayerSelectionViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        this._players = new _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.ObservableArray();
        this._playerName = '';
    }
    get players() {
        return this._players;
    }
    get playerName() {
        return this._playerName;
    }
    set playerName(value) {
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
        _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost().navigate({
            moduleName: 'views/round-selection',
            context: { players: this._players.map(p => p.name) }
        });
    }
}


/***/ }),

/***/ "./app/views/player-selection/player-selection.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable-array/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

class PlayerItem extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(name, viewModel) {
        super();
        this._name = name;
        this._viewModel = viewModel;
    }
    get name() {
        return this._name;
    }
    set name(value) {
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
    updateName(args) {
        const textField = args.object;
        const newName = textField.text.trim();
        if (newName) {
            this.name = newName;
        }
    }
}
function onNavigatingTo(args) {
    const page = args.object;
    const context = args.context || {};
    page.bindingContext = new PlayerSelectionViewModel(context);
}
class PlayerSelectionViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(context) {
        super();
        this._players = new _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.ObservableArray();
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
    set playerName(value) {
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
    removePlayer(player) {
        const index = this._players.indexOf(player);
        if (index !== -1) {
            this._players.splice(index, 1);
            this.notifyPropertyChange('canContinue', this.canContinue);
            this.updatePlayerStates();
        }
    }
    canMovePlayerUp(player) {
        return this._players.indexOf(player) > 0;
    }
    canMovePlayerDown(player) {
        return this._players.indexOf(player) < this._players.length - 1;
    }
    movePlayerUp(player) {
        const index = this._players.indexOf(player);
        if (index > 0) {
            this._players.splice(index, 1);
            this._players.splice(index - 1, 0, player);
            this.updatePlayerStates();
        }
    }
    movePlayerDown(player) {
        const index = this._players.indexOf(player);
        if (index < this._players.length - 1) {
            this._players.splice(index, 1);
            this._players.splice(index + 1, 0, player);
            this.updatePlayerStates();
        }
    }
    updatePlayerStates() {
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
            _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost().navigate({
                moduleName: 'views/round-selection/round-selection',
                context: navigationContext
            });
        }
    }
}


/***/ }),

/***/ "./app/views/player-selection/reorder-modal/reorder-modal.ts":
/***/ (() => {



/***/ }),

/***/ "./app/views/round-selection.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new RoundSelectionViewModel(page.navigationContext);
}
class RoundSelectionViewModel {
    constructor(context) {
        console.log('RoundSelection context:', context);
        this.players = context?.players || [];
    }
    selectRounds(args) {
        const button = args.object;
        const rounds = parseInt(button.text);
        console.log('Navigating to game with:', {
            players: this.players,
            totalRounds: rounds
        });
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost().navigate({
            moduleName: 'views/game',
            context: {
                players: this.players,
                totalRounds: rounds
            },
            clearHistory: true
        });
    }
}


/***/ }),

/***/ "./app/views/round-selection/round-selection.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");

function onNavigatingTo(args) {
    const page = args.object;
    const context = page.navigationContext;
    console.log('Round Selection received context:', context);
    page.bindingContext = new RoundSelectionViewModel(context);
}
class RoundSelectionViewModel {
    constructor(context) {
        console.log('RoundSelection constructor context:', context);
        this.players = context?.players || [];
        console.log('Players in round selection:', this.players);
    }
    selectRounds(args) {
        const button = args.object;
        const rounds = parseInt(button.text);
        const navigationContext = {
            players: this.players,
            totalRounds: rounds
        };
        console.log('Navigating to game with context:', navigationContext);
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost().navigate({
            moduleName: 'views/game/game',
            context: navigationContext,
            clearHistory: true
        });
    }
}


/***/ }),

/***/ "./app/app-root.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Frame defaultPage=\"views/landing-page/landing-page\" />"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/game.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\" />\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <Label text=\"{{ 'Round ' + currentRound }}\" class=\"title\" />\n            <Label text=\"{{ 'Current Player: ' + currentPlayer }}\" class=\"subtitle\" />\n            <Label text=\"{{ 'Round Score: ' + roundScore }}\" class=\"subtitle\" />\n            \n            <GridLayout columns=\"*, *, *\" rows=\"auto, auto, auto, auto\" class=\"m-4\">\n                <Button row=\"0\" col=\"0\" text=\"2\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                <Button row=\"0\" col=\"1\" text=\"3\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"0\" col=\"2\" text=\"4\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                \n                <Button row=\"1\" col=\"0\" text=\"5\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"1\" col=\"1\" text=\"6\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"1\" col=\"2\" text=\"7\" tap=\"{{ onScore }}\" class=\"{{ rollCount < 3 ? 'btn btn-primary' : 'btn btn-danger' }}\" />\n                \n                <Button row=\"2\" col=\"0\" text=\"8\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"2\" col=\"1\" text=\"9\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"2\" col=\"2\" text=\"10\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                \n                <Button row=\"3\" col=\"0\" text=\"11\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"3\" col=\"1\" text=\"12\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                <Button row=\"3\" col=\"2\" text=\"Doubles\" tap=\"{{ onDoubles }}\" isEnabled=\"{{ rollCount >= 3 }}\" class=\"{{ rollCount >= 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n            </GridLayout>\n\n            <StackLayout class=\"m-4 p-2 bg-white\">\n                <Repeater items=\"{{ players }}\">\n                    <Repeater.itemTemplate>\n                        <GridLayout columns=\"*, *, auto\" class=\"player-status {{ isCurrentPlayer ? 'player-status-active' : '' }}\">\n                            <Label col=\"0\" text=\"{{ name }}\" class=\"player-name\" />\n                            <Label col=\"1\" text=\"{{ totalScore }}\" class=\"player-score\" />\n                            <Button col=\"2\" \n                                    text=\"{{ isLocked ? 'Locked' : 'Lock' }}\" \n                                    tap=\"{{ $parents['Page'].onLockTap }}\"\n                                    class=\"{{ isLocked ? 'btn btn-disabled' : 'btn btn-primary' }}\"\n                                    isEnabled=\"{{ !isLocked }}\" />\n                        </GridLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/game/game.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\">\n        <ActionItem text=\"New Game\" tap=\"{{ onNewGame }}\" ios.position=\"left\" android.position=\"actionBar\" />\n        <ActionItem text=\"{{ isEditMode ? 'Done' : 'Edit' }}\" tap=\"{{ toggleEditMode }}\" ios.position=\"right\" android.position=\"actionBar\" />\n    </ActionBar>\n    <GridLayout rows=\"*, auto\">\n        <ScrollView row=\"0\">\n            <StackLayout class=\"p-4\">\n                <Label text=\"{{ 'Round ' + currentRound }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Current Player: ' + currentPlayer }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Round Score: ' + roundScore }}\" class=\"game-info\" />\n                \n                <!-- Undo Button -->\n                <Button text=\"↩️\" \n                    tap=\"{{ onUndo }}\" \n                    class=\"btn-icon\"\n                    isEnabled=\"{{ canUndo }}\"\n                    opacity=\"{{ canUndo ? 1 : 0.5 }}\"\n                    fontSize=\"24\"\n                    margin=\"0 4 8 4\" />\n                \n                <!-- Score Buttons -->\n                <GridLayout columns=\"*, *, *\" rows=\"auto, auto, auto, auto\" class=\"m-4\">\n                    <Button row=\"0\" col=\"0\" text=\"2\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                    <Button row=\"0\" col=\"1\" text=\"3\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"0\" col=\"2\" text=\"4\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    \n                    <Button row=\"1\" col=\"0\" text=\"5\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"1\" col=\"1\" text=\"6\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"1\" col=\"2\" text=\"7\" tap=\"{{ onScore }}\" class=\"{{ rollCount < 3 ? 'btn btn-primary' : 'btn btn-danger' }}\" />\n                    \n                    <Button row=\"2\" col=\"0\" text=\"8\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"2\" col=\"1\" text=\"9\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"2\" col=\"2\" text=\"10\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    \n                    <Button row=\"3\" col=\"0\" text=\"11\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"3\" col=\"1\" text=\"12\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                    <Button row=\"3\" col=\"2\" text=\"Doubles\" tap=\"{{ onDoubles }}\" isEnabled=\"{{ rollCount >= 3 }}\" class=\"{{ rollCount >= 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                </GridLayout>\n\n                <!-- Players Section -->\n                <StackLayout>\n                    <Repeater items=\"{{ players }}\">\n                        <Repeater.itemTemplate>\n                            <GridLayout columns=\"auto, auto, auto, *, auto, auto\" class=\"player-status {{ isCurrentPlayer ? 'player-status-active' : '' }}\">\n                                <!-- Up/Down Arrows -->\n                                <StackLayout col=\"0\" orientation=\"horizontal\" visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\">\n                                    <Button text=\"↑\" \n                                        tap=\"{{ moveUp }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveUp ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveUp }}\"\n                                        fontSize=\"20\" />\n                                    <Button text=\"↓\" \n                                        tap=\"{{ moveDown }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveDown ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveDown }}\"\n                                        fontSize=\"20\" />\n                                </StackLayout>\n                                \n                                <!-- Edit Name Button -->\n                                <Button col=\"1\" \n                                    text=\"✏️\" \n                                    tap=\"{{ editName }}\" \n                                    class=\"btn-icon-compact\" \n                                    fontSize=\"16\"\n                                    visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\" />\n                                    \n                                <!-- Player Name and Score -->\n                                <Label col=\"2\" text=\"{{ name }}\" class=\"player-name\" />\n                                <Label col=\"3\" text=\"{{ totalScore }}\" class=\"player-score\" />\n                                \n                                <!-- Lock/Unlock Button -->\n                                <Button col=\"4\" \n                                    text=\"{{ isLocked ? (canUnlock ? 'Unlock' : 'Locked') : 'Lock' }}\" \n                                    tap=\"{{ isLocked ? (canUnlock ? unlock : null) : lock }}\"\n                                    class=\"{{ isLocked ? (canUnlock ? 'btn btn-success' : 'btn btn-disabled') : 'btn btn-primary' }}\"\n                                    isEnabled=\"{{ !isLocked || canUnlock }}\" />\n                                    \n                                <!-- Delete Button -->\n                                <Button col=\"5\" \n                                    text=\"✕\" \n                                    tap=\"{{ remove }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"#ef4444\"\n                                    fontSize=\"20\"\n                                    visibility=\"{{ isEditMode && canDelete ? 'visible' : 'collapsed' }}\" />\n                            </GridLayout>\n                        </Repeater.itemTemplate>\n                    </Repeater>\n                </StackLayout>\n            </StackLayout>\n        </ScrollView>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/landing-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\" />\n    <StackLayout class=\"p-4\">\n        <Label text=\"Lock N' Roll\" class=\"title\" />\n        <Button text=\"New Game\" tap=\"{{ onNewGame }}\" class=\"btn btn-primary\" />\n    </StackLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/landing-page/landing-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\" />\n    <GridLayout rows=\"*, auto\">\n        <StackLayout row=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <!-- Logo -->\n            <Image src=\"~/views/assets/logo.png\" width=\"200\" height=\"200\" stretch=\"aspectFit\" margin=\"32\" />\n            <Label text=\"Lock N' Roll\" class=\"title\" />\n            <Button text=\"New Game\" tap=\"{{ onNewGame }}\" class=\"btn btn-primary\" margin=\"16\" />\n        </StackLayout>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/player-selection.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Add Players\" />\n    <StackLayout class=\"p-4\">\n        <GridLayout rows=\"auto\" columns=\"*, auto\" class=\"m-4\">\n            <TextField col=\"0\" hint=\"Enter player name\" text=\"{{ playerName }}\" class=\"input\" />\n            <Button col=\"1\" text=\"Add\" tap=\"{{ addPlayer }}\" class=\"btn btn-primary\" />\n        </GridLayout>\n\n        <ListView items=\"{{ players }}\" height=\"300\" class=\"m-4\">\n            <ListView.itemTemplate>\n                <Label text=\"{{ name }}\" class=\"player-name p-2\" />\n            </ListView.itemTemplate>\n        </ListView>\n\n        <Button text=\"Continue\" tap=\"{{ onContinue }}\" class=\"btn btn-primary\" isEnabled=\"{{ players.length > 1 }}\" />\n    </StackLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/player-selection/player-selection.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Add Players\" />\n    <GridLayout rows=\"*, auto\">\n        <ScrollView row=\"0\">\n            <StackLayout class=\"p-4\">\n                <Label text=\"Add Players\" class=\"title\" />\n                <Label text=\"Add at least 2 players to continue\" class=\"subtitle\" />\n                \n                <GridLayout rows=\"auto\" columns=\"*, auto\" class=\"m-4\">\n                    <TextField col=\"0\" \n                        hint=\"Enter player name\" \n                        text=\"{{ playerName }}\" \n                        returnKeyType=\"done\"\n                        returnPress=\"{{ addPlayer }}\"\n                        class=\"input\" />\n                    <Button col=\"1\" \n                        text=\"Add\" \n                        tap=\"{{ addPlayer }}\" \n                        class=\"btn btn-primary\" \n                        isEnabled=\"{{ playerName.length > 0 }}\" />\n                </GridLayout>\n\n                <!-- Players List -->\n                <StackLayout class=\"m-2\">\n                    <Repeater items=\"{{ players }}\">\n                        <Repeater.itemTemplate>\n                            <GridLayout columns=\"auto, auto, *, auto\" class=\"player-status-compact\">\n                                <!-- Up/Down Arrows -->\n                                <StackLayout col=\"0\" orientation=\"horizontal\">\n                                    <Button text=\"↑\" \n                                        tap=\"{{ moveUp }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveUp ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveUp }}\"\n                                        fontSize=\"20\" />\n                                    <Button text=\"↓\" \n                                        tap=\"{{ moveDown }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveDown ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveDown }}\"\n                                        fontSize=\"20\" />\n                                </StackLayout>\n                                \n                                <!-- Player Name -->\n                                <TextField col=\"2\" \n                                    text=\"{{ name }}\" \n                                    class=\"input-compact\" \n                                    returnKeyType=\"done\"\n                                    returnPress=\"{{ updateName }}\" />\n                                    \n                                <!-- Delete Button -->\n                                <Button col=\"3\" \n                                    text=\"✕\" \n                                    tap=\"{{ remove }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"#ef4444\"\n                                    fontSize=\"16\" />\n                            </GridLayout>\n                        </Repeater.itemTemplate>\n                    </Repeater>\n                </StackLayout>\n\n                <Button \n                    text=\"Continue\" \n                    tap=\"{{ onContinue }}\" \n                    class=\"{{ canContinue ? 'btn btn-primary' : 'btn btn-disabled' }}\"\n                    isEnabled=\"{{ canContinue }}\"\n                    margin=\"16 4\" />\n            </StackLayout>\n        </ScrollView>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/player-selection/reorder-modal/reorder-modal.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = ""
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/round-selection.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Select Rounds\" />\n    <StackLayout class=\"p-4\">\n        <Label text=\"Select Number of Rounds\" class=\"title\" />\n        <WrapLayout horizontalAlignment=\"center\" class=\"m-4\">\n            <Button text=\"10\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" />\n            <Button text=\"15\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" />\n            <Button text=\"20\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" />\n            <Button text=\"25\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" />\n        </WrapLayout>\n    </StackLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/round-selection/round-selection.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Select Rounds\" />\n    <GridLayout rows=\"*, auto\">\n        <StackLayout row=\"0\" class=\"p-4\">\n            <Label text=\"Select Number of Rounds\" class=\"title\" />\n            <Label text=\"How many rounds would you like to play?\" class=\"subtitle\" />\n            \n            <WrapLayout horizontalAlignment=\"center\" class=\"m-4\">\n                <Button text=\"10\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n                <Button text=\"15\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n                <Button text=\"20\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n                <Button text=\"25\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n            </WrapLayout>\n        </StackLayout>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

"use strict";
module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/webpack/dist/stubs/virtual-entry-typescript.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./app/app.ts")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEI7O0FBRUEsc0NBQXNDLGtDQUFrQyxVQUFVLHFEQUFxRCxxRUFBcUUsRUFBRSxFQUFFLDhEQUE4RCxxRUFBcUUsRUFBRSxFQUFFLG9EQUFvRCx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSx1REFBdUQsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSxFQUFFLDJEQUEyRCxxRUFBcUUsRUFBRSxFQUFFLDZEQUE2RCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxFQUFFLHlEQUF5RCxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSx5RUFBeUUsRUFBRSxFQUFFLGlFQUFpRSxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSx5RUFBeUUsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSx3REFBd0QsRUFBRSxFQUFFLCtEQUErRCx3REFBd0QsRUFBRSxFQUFFLHlEQUF5RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSw4REFBOEQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLGtFQUFrRSwwREFBMEQsRUFBRSxFQUFFLDBEQUEwRCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLG1FQUFtRSx3REFBd0QsRUFBRSxFQUFFLHNEQUFzRCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSx1REFBdUQsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxFQUFFLCtEQUErRCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhEQUE4RCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSxzREFBc0QsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSxzREFBc0QsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxFQUFFLHVFQUF1RSxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhEQUE4RCxtRUFBbUUsRUFBRSx1REFBdUQsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVFQUF1RSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLHNFQUFzRSxtRUFBbUUsRUFBRSxzREFBc0QsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLCtFQUErRSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDREQUE0RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFFQUFxRSx3REFBd0QsRUFBRSxFQUFFLDZEQUE2RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHNFQUFzRSx3REFBd0QsRUFBRSxFQUFFLHFFQUFxRSxxRUFBcUUsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhFQUE4RSxxRUFBcUUs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LFVBQVUsd0dBQXdHLE9BQU8seUlBQXlJLGFBQWEsNENBQTRDLHFCQUFxQjtBQUNuNUIsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLG1zQkFBbXNCLGFBQWEsOEZBQThGLFlBQVksZ0tBQWdLLFlBQVksZ0dBQWdHLHdCQUF3QixxS0FBcUssVUFBVSx1WkFBdVosU0FBUyw2SEFBNkgsb0NBQW9DLDJEQUEyRCxZQUFZLDBLQUEwSyxXQUFXLDZIQUE2SCxzQ0FBc0MsMkRBQTJELGNBQWMsNlNBQTZTLE9BQU8sb0xBQW9MLGFBQWEsdVBBQXVQLFNBQVMsb2JBQW9iLGFBQWEsb0NBQW9DLHVEQUF1RCx1Q0FBdUMsY0FBYztBQUM1bkgsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBO0FBQ0EsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLDhhQUE4YSxlQUFlLDBFQUEwRSxlQUFlLDBFQUEwRSxlQUFlLDBFQUEwRSxlQUFlO0FBQ3hzQixpRUFBZSxpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7O0FDRmhEO0FBQ0Esb2xCQUFvbEIsZUFBZSwwSEFBMEgsZUFBZSwwSEFBMEgsZUFBZSwwSEFBMEgsZUFBZTtBQUM5L0IsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7QUNIaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwLyBzeW5jIFxcLih4bWwlN0NqcyU3QygiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvZ2FtZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvZ2FtZS9nYW1lLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0L2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi92aWV3cy9nYW1lLnRzXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS50c1wiLFxuXHRcIi4vdmlld3MvZ2FtZS54bWxcIjogXCIuL2FwcC92aWV3cy9nYW1lLnhtbFwiLFxuXHRcIi4vdmlld3MvZ2FtZS9nYW1lLnRzXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS9nYW1lLnRzXCIsXG5cdFwiLi92aWV3cy9nYW1lL2dhbWUueG1sXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS9nYW1lLnhtbFwiLFxuXHRcIi4vdmlld3MvbGFuZGluZy1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9sYW5kaW5nLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnRzXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24ueG1sXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24udHNcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi54bWxcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24ueG1sXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC50c1wiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnRzXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC54bWxcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC54bWxcIixcblx0XCIuL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi50c1wiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi50c1wiLFxuXHRcIi4vdmlld3Mvcm91bmQtc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi54bWxcIixcblx0XCIuL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnRzXCIsXG5cdFwiLi92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24ueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXBwIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHhtbCU3Q2pzJTdDKD88JTIxXFxcXC5kXFxcXC4pdHMlN0NzP2NzcykkXCI7IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5BcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pOyIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YzZjRmNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYjgyZjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXN1Y2Nlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzEwYjk4MVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tZGFuZ2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlZjQ0NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM5Y2EzYWZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWljb24tY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTYgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC50aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3VidGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5zdWJ0aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5nYW1lLWluZm9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuZ2FtZS1pbmZvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjlmYWZiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNmI3MjgwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dC1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmOWZhZmJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzZiNzI4MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5pbnB1dC1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wbGF5ZXItc3RhdHVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM3NDE1MVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1cy1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGxheWVyLXN0YXR1cy1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNGI1NTYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1uYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGxheWVyLW5hbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1zY29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFmMjkzN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zY29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1cy1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YzZjRmNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXMtYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJlb3JkZXItaGFuZGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjOWNhM2FmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFkLWNvbnRhaW5lclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5hZC1jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM3NDE1MVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCIvVXNlcnMvYm5lbHNvbi9QZXJzb25hbERldi9Mb2NrTlJvbGwvYXBwL2FwcC5jc3NcIilcbiIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5pbnRlcmZhY2UgUGxheWVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdG90YWxTY29yZTogbnVtYmVyO1xuICAgIGlzTG9ja2VkOiBib29sZWFuO1xuICAgIGlzQ3VycmVudFBsYXllcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBhcmdzLmNvbnRleHQgfHwge307XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgR2FtZVZpZXdNb2RlbChjb250ZXh0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvY2tUYXAoYXJnczogYW55KSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICBjb25zdCBwbGF5ZXIgPSBhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcbiAgICB2aWV3TW9kZWwubG9ja1BsYXllcihwbGF5ZXIpO1xufVxuXG5jbGFzcyBHYW1lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogUGxheWVyW10gPSBbXTtcbiAgICBwcml2YXRlIF9jdXJyZW50Um91bmQgPSAxO1xuICAgIHByaXZhdGUgX3RvdGFsUm91bmRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcm91bmRTY29yZSA9IDA7XG4gICAgcHJpdmF0ZSBfcm9sbENvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jdXJyZW50UGxheWVySW5kZXggPSAwO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl90b3RhbFJvdW5kcyA9IGNvbnRleHQ/LnRvdGFsUm91bmRzIHx8IDEwO1xuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lcyA9IGNvbnRleHQ/LnBsYXllcnMgfHwgW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gcGxheWVyTmFtZXMubWFwKChuYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0b3RhbFNjb3JlOiAwLFxuICAgICAgICAgICAgaXNMb2NrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNDdXJyZW50UGxheWVyOiBpbmRleCA9PT0gMFxuICAgICAgICB9KSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycztcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFJvdW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFJvdW5kO1xuICAgIH1cblxuICAgIGdldCByb3VuZFNjb3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91bmRTY29yZTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFBsYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnNbdGhpcy5fY3VycmVudFBsYXllckluZGV4XT8ubmFtZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgcm9sbENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sbENvdW50O1xuICAgIH1cblxuICAgIG9uU2NvcmUoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGJ1dHRvbi50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzV2l0aGluRmlyc3RUaHJlZSA9IHRoaXMuX3JvbGxDb3VudCA8IDM7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNXaXRoaW5GaXJzdFRocmVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDIgfHwgdmFsdWUgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSAxMDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Eb3VibGVzKCkge1xuICAgICAgICBpZiAodGhpcy5fcm9sbENvdW50ID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKj0gMjtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NrUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5maW5kSW5kZXgocCA9PiBwLm5hbWUgPT09IHBsYXllci5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSB8fCBwbGF5ZXIuaXNMb2NrZWQpIHJldHVybjtcblxuICAgICAgICBwbGF5ZXIudG90YWxTY29yZSArPSB0aGlzLl9yb3VuZFNjb3JlO1xuICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuYWxsUGxheWVyc0xvY2tlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRSb3VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRQbGF5ZXIoKSB7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAodGhpcy5fY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IGxvb3BDb3VudCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAodGhpcy5fcGxheWVyc1tuZXh0SW5kZXhdLmlzTG9ja2VkICYmIGxvb3BDb3VudCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSAobmV4dEluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGxvb3BDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobG9vcENvdW50IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbdGhpcy5fY3VycmVudFBsYXllckluZGV4XS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbdGhpcy5fY3VycmVudFBsYXllckluZGV4XS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRSb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFJvdW5kKys7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50Um91bmQgPiB0aGlzLl90b3RhbFJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBsYXllci5pc0N1cnJlbnRQbGF5ZXIgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWxsUGxheWVyc0xvY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMuZXZlcnkocGxheWVyID0+IHBsYXllci5pc0xvY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCkge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLl9wbGF5ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gXG4gICAgICAgICAgICAocHJldi50b3RhbFNjb3JlID4gY3VycmVudC50b3RhbFNjb3JlKSA/IHByZXYgOiBjdXJyZW50XG4gICAgICAgICk7XG4gICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhICR7d2lubmVyLm5hbWV9IHdpbnMgd2l0aCAke3dpbm5lci50b3RhbFNjb3JlfSBwb2ludHMhYCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRSb3VuZCcsIHRoaXMuX2N1cnJlbnRSb3VuZCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3JvdW5kU2NvcmUnLCB0aGlzLl9yb3VuZFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY3VycmVudFBsYXllcicsIHRoaXMuY3VycmVudFBsYXllcik7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3JvbGxDb3VudCcsIHRoaXMuX3JvbGxDb3VudCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllcnMnLCB0aGlzLl9wbGF5ZXJzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUFycmF5LCBGcmFtZSwgcHJvbXB0IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuaW50ZXJmYWNlIE1vdmUge1xuICAgIHR5cGU6ICdyb2xsJyB8ICdkb3VibGVzJyB8ICdsb2NrJztcbiAgICBzY29yZTogbnVtYmVyO1xuICAgIHBsYXllckluZGV4OiBudW1iZXI7XG4gICAgcm91bmRTY29yZTogbnVtYmVyO1xuICAgIHJvbGxDb3VudDogbnVtYmVyO1xuICAgIHdhc0N1cnJlbnRQbGF5ZXI/OiBib29sZWFuO1xufVxuXG5jbGFzcyBQbGF5ZXJWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdG90YWxTY29yZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lzTG9ja2VkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzQ3VycmVudFBsYXllcjogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9sYXN0TG9ja2VkU2NvcmU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9sb2NrZWRUaGlzUm9sbDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9sb2NrUm9sbENvdW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZ2FtZVZpZXdNb2RlbDogR2FtZVZpZXdNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZ2FtZVZpZXdNb2RlbDogR2FtZVZpZXdNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdG90YWxTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX2lzTG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sYXN0TG9ja2VkU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gLTE7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwgPSBnYW1lVmlld01vZGVsO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICAgIGdldCB0b3RhbFNjb3JlKCkgeyByZXR1cm4gdGhpcy5fdG90YWxTY29yZTsgfVxuICAgIGdldCBpc0xvY2tlZCgpIHsgcmV0dXJuIHRoaXMuX2lzTG9ja2VkOyB9XG4gICAgZ2V0IGlzQ3VycmVudFBsYXllcigpIHsgcmV0dXJuIHRoaXMuX2lzQ3VycmVudFBsYXllcjsgfVxuICAgIGdldCBjYW5VbmxvY2soKSB7IFxuICAgICAgICByZXR1cm4gdGhpcy5fbG9ja2VkVGhpc1JvbGwgJiYgXG4gICAgICAgICAgICAgICAhdGhpcy5fZ2FtZVZpZXdNb2RlbC5pc0xhc3RQbGF5ZXJUb0xvY2sodGhpcykgJiYgXG4gICAgICAgICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID09PSB0aGlzLl9nYW1lVmlld01vZGVsLnJvbGxDb3VudDtcbiAgICB9XG4gICAgZ2V0IGNhbkRlbGV0ZSgpIHsgcmV0dXJuIHRoaXMuX2dhbWVWaWV3TW9kZWwuY2FuRGVsZXRlUGxheWVyczsgfVxuICAgIGdldCBjYW5Nb3ZlVXAoKSB7IHJldHVybiAhdGhpcy5faXNDdXJyZW50UGxheWVyICYmIHRoaXMuX2dhbWVWaWV3TW9kZWwuY2FuTW92ZVBsYXllclVwKHRoaXMpOyB9XG4gICAgZ2V0IGNhbk1vdmVEb3duKCkgeyByZXR1cm4gIXRoaXMuX2lzQ3VycmVudFBsYXllciAmJiB0aGlzLl9nYW1lVmlld01vZGVsLmNhbk1vdmVQbGF5ZXJEb3duKHRoaXMpOyB9XG4gICAgZ2V0IGlzRWRpdE1vZGUoKSB7IHJldHVybiB0aGlzLl9nYW1lVmlld01vZGVsLmlzRWRpdE1vZGU7IH1cblxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHRvdGFsU2NvcmUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fdG90YWxTY29yZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsU2NvcmUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsU2NvcmUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgaXNMb2NrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9ja2VkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNMb2NrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSB0aGlzLl9nYW1lVmlld01vZGVsLnJvbGxDb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNMb2NrZWQnLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCB0aGlzLmNhblVubG9jayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgaXNDdXJyZW50UGxheWVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0N1cnJlbnRQbGF5ZXIgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1cnJlbnRQbGF5ZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzQ3VycmVudFBsYXllcicsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhbk1vdmVVcCcsIHRoaXMuY2FuTW92ZVVwKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhbk1vdmVEb3duJywgdGhpcy5jYW5Nb3ZlRG93bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0TmFtZSgpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5lZGl0UGxheWVyTmFtZSh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2NrKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLmxvY2tQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgdW5sb2NrKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLnVubG9ja1BsYXllcih0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwuZGVsZXRlUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5tb3ZlUGxheWVyVXAodGhpcyk7XG4gICAgfVxuXG4gICAgbW92ZURvd24oKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwubW92ZVBsYXllckRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JOZXdSb3VuZCgpIHtcbiAgICAgICAgdGhpcy5faXNMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbGFzdExvY2tlZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IC0xO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpc0xvY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5sb2NrJywgZmFsc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNhbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuRGVsZXRlJywgdGhpcy5jYW5EZWxldGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNhblVubG9jaygpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5sb2NrJywgdGhpcy5jYW5VbmxvY2spO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vdmVCdXR0b25zKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlVXAnLCB0aGlzLmNhbk1vdmVVcCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhbk1vdmVEb3duJywgdGhpcy5jYW5Nb3ZlRG93bik7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdE1vZGUoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzRWRpdE1vZGUnLCB0aGlzLmlzRWRpdE1vZGUpO1xuICAgIH1cblxuICAgIGFkZFNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxTY29yZSArPSBzY29yZTtcbiAgICAgICAgdGhpcy5fbGFzdExvY2tlZFNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IHRoaXMuX2dhbWVWaWV3TW9kZWwucm9sbENvdW50O1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbFNjb3JlJywgdGhpcy5fdG90YWxTY29yZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIHRoaXMuY2FuVW5sb2NrKTtcbiAgICB9XG5cbiAgICByZW1vdmVTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fdG90YWxTY29yZSAtPSB0aGlzLl9sYXN0TG9ja2VkU2NvcmU7XG4gICAgICAgIHRoaXMuX2xhc3RMb2NrZWRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSAtMTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxTY29yZScsIHRoaXMuX3RvdGFsU2NvcmUpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCB0aGlzLmNhblVubG9jayk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBjb250ZXh0ID0gYXJncy5jb250ZXh0IHx8IHt9O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgR2FtZVZpZXdNb2RlbChjb250ZXh0KTtcbn1cblxuY2xhc3MgR2FtZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3BsYXllcnM6IE9ic2VydmFibGVBcnJheTxQbGF5ZXJWaWV3TW9kZWw+O1xuICAgIHByaXZhdGUgX2N1cnJlbnRSb3VuZCA9IDE7XG4gICAgcHJpdmF0ZSBfdG90YWxSb3VuZHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yb3VuZFNjb3JlID0gMDtcbiAgICBwcml2YXRlIF9yb2xsQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgcHJpdmF0ZSBfbW92ZUhpc3Rvcnk6IE1vdmVbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lzRWRpdE1vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZVZpZXdNb2RlbCBjb25zdHJ1Y3RvciBjYWxsZWQgd2l0aCBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdG90YWxSb3VuZHMgPSBjb250ZXh0Py50b3RhbFJvdW5kcyB8fCAxMDtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZXMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHdpdGggcGxheWVyIG5hbWVzOicsIHBsYXllck5hbWVzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBsYXllclZpZXdNb2RlbD4oKTtcbiAgICAgICAgcGxheWVyTmFtZXMuZm9yRWFjaCgobmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyVmlld01vZGVsKG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgcGxheWVyLmlzQ3VycmVudFBsYXllciA9IGluZGV4ID09PSAwO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllcnMgaW5pdGlhbGl6ZWQ6JywgdGhpcy5fcGxheWVycyk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXJzOyB9XG4gICAgZ2V0IGN1cnJlbnRSb3VuZCgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnRSb3VuZDsgfVxuICAgIGdldCByb3VuZFNjb3JlKCkgeyByZXR1cm4gdGhpcy5fcm91bmRTY29yZTsgfVxuICAgIGdldCBjdXJyZW50UGxheWVyKCkgeyByZXR1cm4gdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCk/Lm5hbWUgfHwgJyc7IH1cbiAgICBnZXQgcm9sbENvdW50KCkgeyByZXR1cm4gdGhpcy5fcm9sbENvdW50OyB9XG4gICAgZ2V0IGNhbkRlbGV0ZVBsYXllcnMoKSB7IHJldHVybiB0aGlzLl9yb3VuZFNjb3JlID09PSAwICYmIHRoaXMuX3JvbGxDb3VudCA9PT0gMCAmJiB0aGlzLl9wbGF5ZXJzLmxlbmd0aCA+IDI7IH1cbiAgICBnZXQgY2FuVW5kbygpIHsgcmV0dXJuIHRoaXMuX21vdmVIaXN0b3J5Lmxlbmd0aCA+IDA7IH1cbiAgICBnZXQgaXNFZGl0TW9kZSgpIHsgcmV0dXJuIHRoaXMuX2lzRWRpdE1vZGU7IH1cblxuICAgIHRvZ2dsZUVkaXRNb2RlKCkge1xuICAgICAgICB0aGlzLl9pc0VkaXRNb2RlID0gIXRoaXMuX2lzRWRpdE1vZGU7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzRWRpdE1vZGUnLCB0aGlzLl9pc0VkaXRNb2RlKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIudXBkYXRlRWRpdE1vZGUoKSk7XG4gICAgfVxuXG4gICAgY2FuTW92ZVBsYXllclVwKHBsYXllcjogUGxheWVyVmlld01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3VuZFNjb3JlID09PSAwICYmIHRoaXMuX3JvbGxDb3VudCA9PT0gMCAmJiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA+IDA7XG4gICAgfVxuXG4gICAgY2FuTW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmUgPT09IDAgJiYgdGhpcy5fcm9sbENvdW50ID09PSAwICYmIHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpIDwgdGhpcy5fcGxheWVycy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIG1vdmVQbGF5ZXJVcChwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuTW92ZVBsYXllclVwKHBsYXllcikpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBjb25zdCB3YXNDdXJyZW50UGxheWVyID0gcGxheWVyLmlzQ3VycmVudFBsYXllcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXggLSAxLCAwLCBwbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG1vdmVQbGF5ZXJEb3duKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlUGxheWVyRG93bihwbGF5ZXIpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgY29uc3Qgd2FzQ3VycmVudFBsYXllciA9IHBsYXllci5pc0N1cnJlbnRQbGF5ZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4ICsgMSwgMCwgcGxheWVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh3YXNDdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBpc0xhc3RQbGF5ZXJUb0xvY2socGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbG9ja2VkQ291bnQgPSB0aGlzLl9wbGF5ZXJzLmZpbHRlcihwID0+IHAuaXNMb2NrZWQpLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGxvY2tlZENvdW50ID09PSB0aGlzLl9wbGF5ZXJzLmxlbmd0aCAtIDEgJiYgIXBsYXllci5pc0xvY2tlZDtcbiAgICB9XG5cbiAgICBlZGl0UGxheWVyTmFtZShwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCkge1xuICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRWRpdCBQbGF5ZXIgTmFtZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBuZXcgbmFtZSBmb3IgXCIgKyBwbGF5ZXIubmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBwbGF5ZXIubmFtZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTYXZlXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgJiYgcmVzdWx0LnRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLm5hbWUgPSByZXN1bHQudGV4dC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2NvcmUoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGJ1dHRvbi50ZXh0KTtcbiAgICAgICAgbGV0IHNjb3JlVG9BZGQgPSAwO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNXaXRoaW5GaXJzdFRocmVlID0gdGhpcy5fcm9sbENvdW50IDwgMztcbiAgICAgICAgXG4gICAgICAgIGlmIChpc1dpdGhpbkZpcnN0VGhyZWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMiB8fCB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICBzY29yZVRvQWRkID0gMjAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gNykge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSAxMDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gc2NvcmVUb0FkZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFJvdW5kKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMiB8fCB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICs9IHNjb3JlVG9BZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21vdmVIaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3JvbGwnLFxuICAgICAgICAgICAgc2NvcmU6IHNjb3JlVG9BZGQsXG4gICAgICAgICAgICBwbGF5ZXJJbmRleDogdGhpcy5fY3VycmVudFBsYXllckluZGV4LFxuICAgICAgICAgICAgcm91bmRTY29yZTogdGhpcy5fcm91bmRTY29yZSAtIHNjb3JlVG9BZGQsXG4gICAgICAgICAgICByb2xsQ291bnQ6IHRoaXMuX3JvbGxDb3VudFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBvbkRvdWJsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yb2xsQ291bnQgPj0gMykge1xuICAgICAgICAgICAgY29uc3Qgb2xkU2NvcmUgPSB0aGlzLl9yb3VuZFNjb3JlO1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSAqPSAyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9tb3ZlSGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZG91YmxlcycsXG4gICAgICAgICAgICAgICAgc2NvcmU6IHRoaXMuX3JvdW5kU2NvcmUgLSBvbGRTY29yZSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJJbmRleDogdGhpcy5fY3VycmVudFBsYXllckluZGV4LFxuICAgICAgICAgICAgICAgIHJvdW5kU2NvcmU6IG9sZFNjb3JlLFxuICAgICAgICAgICAgICAgIHJvbGxDb3VudDogdGhpcy5fcm9sbENvdW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVuZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLl9tb3ZlSGlzdG9yeS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCBsYXN0TW92ZSA9IHRoaXMuX21vdmVIaXN0b3J5LnBvcCgpO1xuICAgICAgICBpZiAoIWxhc3RNb3ZlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGxhc3RNb3ZlLnR5cGUgPT09ICdsb2NrJykge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5fcGxheWVycy5nZXRJdGVtKGxhc3RNb3ZlLnBsYXllckluZGV4KTtcbiAgICAgICAgICAgIGlmIChsYXN0TW92ZS53YXNDdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gbGFzdE1vdmUucGxheWVySW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudW5sb2NrUGxheWVyKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9IGxhc3RNb3ZlLnBsYXllckluZGV4O1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSBsYXN0TW92ZS5yb3VuZFNjb3JlO1xuICAgICAgICAgICAgdGhpcy5fcm9sbENvdW50ID0gbGFzdE1vdmUucm9sbENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBvbk5ld0dhbWUoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVycyA9IHRoaXMuX3BsYXllcnMubWFwKHAgPT4gcC5uYW1lKTtcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24nLFxuICAgICAgICAgICAgY29udGV4dDogeyBwcmV2aW91c1BsYXllcnMgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2NrUGxheWVyKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuaXNMb2NrZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB3YXNDdXJyZW50UGxheWVyID0gcGxheWVyLmlzQ3VycmVudFBsYXllcjtcbiAgICAgICAgcGxheWVyLmFkZFNjb3JlKHRoaXMuX3JvdW5kU2NvcmUpO1xuICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX21vdmVIaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xvY2snLFxuICAgICAgICAgICAgc2NvcmU6IHRoaXMuX3JvdW5kU2NvcmUsXG4gICAgICAgICAgICBwbGF5ZXJJbmRleDogdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllciksXG4gICAgICAgICAgICByb3VuZFNjb3JlOiB0aGlzLl9yb3VuZFNjb3JlLFxuICAgICAgICAgICAgcm9sbENvdW50OiB0aGlzLl9yb2xsQ291bnQsXG4gICAgICAgICAgICB3YXNDdXJyZW50UGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3YXNDdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmluZE5leHRVbmxvY2tlZFBsYXllcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICB1bmxvY2tQbGF5ZXIocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKCFwbGF5ZXIuaXNMb2NrZWQpIHJldHVybjtcblxuICAgICAgICBwbGF5ZXIucmVtb3ZlU2NvcmUoKTtcbiAgICAgICAgcGxheWVyLmlzTG9ja2VkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcGxheWVySW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgY29uc3QgbGFzdExvY2tNb3ZlID0gWy4uLnRoaXMuX21vdmVIaXN0b3J5XS5yZXZlcnNlKCkuZmluZChcbiAgICAgICAgICAgIG1vdmUgPT4gbW92ZS50eXBlID09PSAnbG9jaycgJiYgbW92ZS5wbGF5ZXJJbmRleCA9PT0gcGxheWVySW5kZXhcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobGFzdExvY2tNb3ZlPy53YXNDdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9IHBsYXllckluZGV4O1xuICAgICAgICAgICAgcGxheWVyLmlzQ3VycmVudFBsYXllciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGRlbGV0ZVBsYXllcihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuRGVsZXRlUGxheWVycykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0UGxheWVyKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maW5kTmV4dFVubG9ja2VkUGxheWVyKCk7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmluZE5leHRVbmxvY2tlZFBsYXllcigpIHtcbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLl9jdXJyZW50UGxheWVySW5kZXg7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9ICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIHRoaXMuX3BsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0xvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5fY3VycmVudFBsYXllckluZGV4ICE9PSBzdGFydEluZGV4KTtcblxuICAgICAgICBpZiAodGhpcy5hbGxQbGF5ZXJzTG9ja2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRSb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFJvdW5kKys7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50Um91bmQgPiB0aGlzLl90b3RhbFJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGBTdGFydGluZyByb3VuZCAke3RoaXMuX2N1cnJlbnRSb3VuZH1gKTtcbiAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX3JvbGxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX21vdmVIaXN0b3J5ID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBDb250aW51ZSB3aXRoIG5leHQgcGxheWVyIGluc3RlYWQgb2YgcmVzZXR0aW5nIHRvIGZpcnN0XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9ICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIHRoaXMuX3BsYXllcnMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIucmVzZXRGb3JOZXdSb3VuZCgpO1xuICAgICAgICAgICAgcGxheWVyLmlzQ3VycmVudFBsYXllciA9IGluZGV4ID09PSB0aGlzLl9jdXJyZW50UGxheWVySW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVBsYXllclN0YXRlcygpIHtcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlQ2FuRGVsZXRlKCk7XG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlQ2FuVW5sb2NrKCk7XG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlTW92ZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVFZGl0TW9kZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFsbFBsYXllcnNMb2NrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmV2ZXJ5KHBsYXllciA9PiBwbGF5ZXIuaXNMb2NrZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kR2FtZSgpIHtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5fcGxheWVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IFxuICAgICAgICAgICAgKHByZXYudG90YWxTY29yZSA+IGN1cnJlbnQudG90YWxTY29yZSkgPyBwcmV2IDogY3VycmVudFxuICAgICAgICApO1xuICAgICAgICBhbGVydChgR2FtZSBPdmVyISAke3dpbm5lci5uYW1lfSB3aW5zIHdpdGggJHt3aW5uZXIudG90YWxTY29yZX0gcG9pbnRzIWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5UHJvcGVydHlDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjdXJyZW50Um91bmQnLCB0aGlzLl9jdXJyZW50Um91bmQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyb3VuZFNjb3JlJywgdGhpcy5fcm91bmRTY29yZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRQbGF5ZXInLCB0aGlzLmN1cnJlbnRQbGF5ZXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyb2xsQ291bnQnLCB0aGlzLl9yb2xsQ291bnQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmRvJywgdGhpcy5jYW5VbmRvKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuRGVsZXRlUGxheWVycycsIHRoaXMuY2FuRGVsZXRlUGxheWVycyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllcnMnLCB0aGlzLl9wbGF5ZXJzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExhbmRpbmdWaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgTGFuZGluZ1ZpZXdNb2RlbCB7XG4gICAgb25OZXdHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBwbGF5ZXIgc2VsZWN0aW9uJyk7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMYW5kaW5nVmlld01vZGVsKCk7XG59XG5cbmNsYXNzIExhbmRpbmdWaWV3TW9kZWwge1xuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gcGxheWVyIHNlbGVjdGlvbicpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlQXJyYXksIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogT2JzZXJ2YWJsZUFycmF5PHsgbmFtZTogc3RyaW5nIH0+O1xuICAgIHByaXZhdGUgX3BsYXllck5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IE9ic2VydmFibGVBcnJheTx7IG5hbWU6IHN0cmluZyB9PigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyTmFtZTtcbiAgICB9XG5cbiAgICBzZXQgcGxheWVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJOYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncGxheWVyTmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMucHVzaCh7IG5hbWU6IHRoaXMucGxheWVyTmFtZS50cmltKCkgfSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29udGludWUoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3Mvcm91bmQtc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgcGxheWVyczogdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIE9ic2VydmFibGUsIE9ic2VydmFibGVBcnJheSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5jbGFzcyBQbGF5ZXJJdGVtIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ZpZXdNb2RlbDogUGxheWVyU2VsZWN0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2aWV3TW9kZWw6IFBsYXllclNlbGVjdGlvblZpZXdNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdmlld01vZGVsID0gdmlld01vZGVsO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYW5Nb3ZlVXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3TW9kZWwuY2FuTW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBjYW5Nb3ZlRG93bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNb2RlbC5jYW5Nb3ZlUGxheWVyRG93bih0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbC5yZW1vdmVQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwubW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwubW92ZVBsYXllckRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlTmFtZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSB0ZXh0RmllbGQudGV4dC50cmltKCk7XG4gICAgICAgIGlmIChuZXdOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBjb250ZXh0ID0gYXJncy5jb250ZXh0IHx8IHt9O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsKGNvbnRleHQpO1xufVxuXG5jbGFzcyBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVySXRlbT47XG4gICAgcHJpdmF0ZSBfcGxheWVyTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBsYXllckl0ZW0+KCk7XG4gICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSAnJztcblxuICAgICAgICAvLyBBZGQgcHJldmlvdXMgcGxheWVycyBpZiB0aGV5IGV4aXN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVycyA9IGNvbnRleHQ/LnByZXZpb3VzUGxheWVycyB8fCBbXTtcbiAgICAgICAgcHJldmlvdXNQbGF5ZXJzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllckl0ZW0obmFtZSwgdGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllck5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJOYW1lO1xuICAgIH1cblxuICAgIGdldCBjYW5Db250aW51ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMubGVuZ3RoID49IDI7XG4gICAgfVxuXG4gICAgc2V0IHBsYXllck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyTmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllck5hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllck5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllckl0ZW0odGhpcy5wbGF5ZXJOYW1lLnRyaW0oKSwgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gJyc7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Db250aW51ZScsIHRoaXMuY2FuQ29udGludWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBsYXllcihwbGF5ZXI6IFBsYXllckl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuQ29udGludWUnLCB0aGlzLmNhbkNvbnRpbnVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA+IDA7XG4gICAgfVxuXG4gICAgY2FuTW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA8IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJJdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4IC0gMSwgMCwgcGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyRG93bihwbGF5ZXI6IFBsYXllckl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCArIDEsIDAsIHBsYXllcik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGF5ZXJTdGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgcGxheWVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlVXAnLCBwbGF5ZXIuY2FuTW92ZVVwKTtcbiAgICAgICAgICAgIHBsYXllci5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCBwbGF5ZXIuY2FuTW92ZURvd24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvbnRpbnVlKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5Db250aW51ZSkge1xuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGlvbkNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyIFNlbGVjdGlvbiBuYXZpZ2F0aW5nIHdpdGggY29udGV4dDonLCBuYXZpZ2F0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG5hdmlnYXRpb25Db250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUm91bmRTZWxlY3Rpb25WaWV3TW9kZWwocGFnZS5uYXZpZ2F0aW9uQ29udGV4dCk7XG59XG5cbmNsYXNzIFJvdW5kU2VsZWN0aW9uVmlld01vZGVsIHtcbiAgICBwcml2YXRlIHBsYXllcnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3VuZFNlbGVjdGlvbiBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgIH1cblxuICAgIHNlbGVjdFJvdW5kcyhhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHJvdW5kcyA9IHBhcnNlSW50KGJ1dHRvbi50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGdhbWUgd2l0aDonLCB7XG4gICAgICAgICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMsXG4gICAgICAgICAgICB0b3RhbFJvdW5kczogcm91bmRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvZ2FtZScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLFxuICAgICAgICAgICAgICAgIHRvdGFsUm91bmRzOiByb3VuZHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGV4dCA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgY29uc29sZS5sb2coJ1JvdW5kIFNlbGVjdGlvbiByZWNlaXZlZCBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUm91bmRTZWxlY3Rpb25WaWV3TW9kZWwoY29udGV4dCk7XG59XG5cbmNsYXNzIFJvdW5kU2VsZWN0aW9uVmlld01vZGVsIHtcbiAgICBwcml2YXRlIHBsYXllcnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3VuZFNlbGVjdGlvbiBjb25zdHJ1Y3RvciBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVycyBpbiByb3VuZCBzZWxlY3Rpb246JywgdGhpcy5wbGF5ZXJzKTtcbiAgICB9XG5cbiAgICBzZWxlY3RSb3VuZHMoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCByb3VuZHMgPSBwYXJzZUludChidXR0b24udGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHBsYXllcnM6IHRoaXMucGxheWVycyxcbiAgICAgICAgICAgIHRvdGFsUm91bmRzOiByb3VuZHNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGdhbWUgd2l0aCBjb250ZXh0OicsIG5hdmlnYXRpb25Db250ZXh0KTtcblxuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL2dhbWUvZ2FtZScsXG4gICAgICAgICAgICBjb250ZXh0OiBuYXZpZ2F0aW9uQ29udGV4dCxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48RnJhbWUgZGVmYXVsdFBhZ2U9XFxcInZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2VcXFwiIC8+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTG9jayBOJyBSb2xsXFxcIiAvPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ1JvdW5kICcgKyBjdXJyZW50Um91bmQgfX1cXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ0N1cnJlbnQgUGxheWVyOiAnICsgY3VycmVudFBsYXllciB9fVxcXCIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgU2NvcmU6ICcgKyByb3VuZFNjb3JlIH19XFxcIiBjbGFzcz1cXFwic3VidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjJcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPCAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50IDwgMyA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIzXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjRcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjVcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiNlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI3XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tcHJpbWFyeScgOiAnYnRuIGJ0bi1kYW5nZXInIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiOFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCI5XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIxMVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIxMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA8IDMgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIzXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIkRvdWJsZXNcXFwiIHRhcD1cXFwie3sgb25Eb3VibGVzIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA+PSAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50ID49IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTQgcC0yIGJnLXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgYXV0b1xcXCIgY2xhc3M9XFxcInBsYXllci1zdGF0dXMge3sgaXNDdXJyZW50UGxheWVyID8gJ3BsYXllci1zdGF0dXMtYWN0aXZlJyA6ICcnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1uYW1lXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyB0b3RhbFNjb3JlIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLXNjb3JlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgaXNMb2NrZWQgPyAnTG9ja2VkJyA6ICdMb2NrJyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyAkcGFyZW50c1snUGFnZSddLm9uTG9ja1RhcCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNMb2NrZWQgPyAnYnRuIGJ0bi1kaXNhYmxlZCcgOiAnYnRuIGJ0bi1wcmltYXJ5JyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7ICFpc0xvY2tlZCB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiPlxcbiAgICAgICAgPEFjdGlvbkl0ZW0gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCIgLz5cXG4gICAgICAgIDxBY3Rpb25JdGVtIHRleHQ9XFxcInt7IGlzRWRpdE1vZGUgPyAnRG9uZScgOiAnRWRpdCcgfX1cXFwiIHRhcD1cXFwie3sgdG9nZ2xlRWRpdE1vZGUgfX1cXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiPlxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgJyArIGN1cnJlbnRSb3VuZCB9fVxcXCIgY2xhc3M9XFxcImdhbWUtaW5mb1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdDdXJyZW50IFBsYXllcjogJyArIGN1cnJlbnRQbGF5ZXIgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgU2NvcmU6ICcgKyByb3VuZFNjb3JlIH19XFxcIiBjbGFzcz1cXFwiZ2FtZS1pbmZvXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBVbmRvIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihqnvuI9cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvblVuZG8gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBjYW5VbmRvIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cXFwie3sgY2FuVW5kbyA/IDEgOiAwLjUgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XFxcIjAgNCA4IDRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFNjb3JlIEJ1dHRvbnMgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICosICpcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA8IDMgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIzXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI0XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjVcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjZcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjdcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA8IDMgPyAnYnRuIGJ0bi1wcmltYXJ5JyA6ICdidG4gYnRuLWRhbmdlcicgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjhcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjlcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIzXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjExXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIxMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA8IDMgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJEb3VibGVzXFxcIiB0YXA9XFxcInt7IG9uRG91YmxlcyB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPj0gMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA+PSAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBQbGF5ZXJzIFNlY3Rpb24gLS0+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgcGxheWVycyB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgYXV0bywgYXV0bywgKiwgYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInBsYXllci1zdGF0dXMge3sgaXNDdXJyZW50UGxheWVyID8gJ3BsYXllci1zdGF0dXMtYWN0aXZlJyA6ICcnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVXAvRG93biBBcnJvd3MgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIwXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgdmlzaWJpbGl0eT1cXFwie3sgaXNFZGl0TW9kZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIuKGkVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgbW92ZVVwIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZVVwID8gJyMzYjgyZjYnIDogJyM5Y2EzYWYnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbk1vdmVVcCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaTXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBtb3ZlRG93biB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNhbk1vdmVEb3duID8gJyMzYjgyZjYnIDogJyM5Y2EzYWYnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbk1vdmVEb3duIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVkaXQgTmFtZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwi4pyP77iPXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IGVkaXROYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk9XFxcInt7IGlzRWRpdE1vZGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUGxheWVyIE5hbWUgYW5kIFNjb3JlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1uYW1lXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiM1xcXCIgdGV4dD1cXFwie3sgdG90YWxTY29yZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1zY29yZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb2NrL1VubG9jayBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiNFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgaXNMb2NrZWQgPyAoY2FuVW5sb2NrID8gJ1VubG9jaycgOiAnTG9ja2VkJykgOiAnTG9jaycgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgaXNMb2NrZWQgPyAoY2FuVW5sb2NrID8gdW5sb2NrIDogbnVsbCkgOiBsb2NrIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBpc0xvY2tlZCA/IChjYW5VbmxvY2sgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJykgOiAnYnRuIGJ0bi1wcmltYXJ5JyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7ICFpc0xvY2tlZCB8fCBjYW5VbmxvY2sgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiNVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwi4pyVXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IHJlbW92ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjZWY0NDQ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5PVxcXCJ7eyBpc0VkaXRNb2RlICYmIGNhbkRlbGV0ZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICA8IS0tIEFkIFNwYWNlIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImFkLWNvbnRhaW5lclxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiIC8+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMb2NrIE4nIFJvbGxcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiIC8+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8IS0tIExvZ28gLS0+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi92aWV3cy9hc3NldHMvbG9nby5wbmdcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIGhlaWdodD1cXFwiMjAwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIG1hcmdpbj1cXFwiMzJcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxvY2sgTicgUm9sbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW49XFxcIjE2XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwhLS0gQWQgU3BhY2UgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYWQtY29udGFpbmVyXFxcIiAvPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFkZCBQbGF5ZXJzXFxcIiAvPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cXFwiMFxcXCIgaGludD1cXFwiRW50ZXIgcGxheWVyIG5hbWVcXFwiIHRleHQ9XFxcInt7IHBsYXllck5hbWUgfX1cXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiQWRkXFxcIiB0YXA9XFxcInt7IGFkZFBsYXllciB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgcGxheWVycyB9fVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLW5hbWUgcC0yXFxcIiAvPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPC9MaXN0Vmlldz5cXG5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ29udGludWVcXFwiIHRhcD1cXFwie3sgb25Db250aW51ZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaXNFbmFibGVkPVxcXCJ7eyBwbGF5ZXJzLmxlbmd0aCA+IDEgfX1cXFwiIC8+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFkZCBQbGF5ZXJzXFxcIiAvPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXG4gICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWRkIFBsYXllcnNcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBhdCBsZWFzdCAyIHBsYXllcnMgdG8gY29udGludWVcXFwiIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XFxcIjBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkVudGVyIHBsYXllciBuYW1lXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBwbGF5ZXJOYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzPVxcXCJ7eyBhZGRQbGF5ZXIgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIkFkZFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBhZGRQbGF5ZXIgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgcGxheWVyTmFtZS5sZW5ndGggPiAwIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gUGxheWVycyBMaXN0IC0tPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IHBsYXllcnMgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sIGF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJwbGF5ZXItc3RhdHVzLWNvbXBhY3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVcC9Eb3duIEFycm93cyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIuKGkVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgbW92ZVVwIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZVVwID8gJyMzYjgyZjYnIDogJyM5Y2EzYWYnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbk1vdmVVcCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaTXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBtb3ZlRG93biB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNhbk1vdmVEb3duID8gJyMzYjgyZjYnIDogJyM5Y2EzYWYnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbk1vdmVEb3duIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFBsYXllciBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XFxcIjJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzPVxcXCJ7eyB1cGRhdGVOYW1lIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWxldGUgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIuKclVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyByZW1vdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiI2VmNDQ0NFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMTZcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJDb250aW51ZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG9uQ29udGludWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGNhbkNvbnRpbnVlID8gJ2J0biBidG4tcHJpbWFyeScgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbkNvbnRpbnVlIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVxcXCIxNiA0XFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICA8IS0tIEFkIFNwYWNlIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImFkLWNvbnRhaW5lclxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlbGVjdCBSb3VuZHNcXFwiIC8+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWxlY3QgTnVtYmVyIG9mIFJvdW5kc1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgPFdyYXBMYXlvdXQgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjE1XFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjIwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjI1XFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgIDwvV3JhcExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiU2VsZWN0IFJvdW5kc1xcXCIgLz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2VsZWN0IE51bWJlciBvZiBSb3VuZHNcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSG93IG1hbnkgcm91bmRzIHdvdWxkIHlvdSBsaWtlIHRvIHBsYXk/XFxcIiBjbGFzcz1cXFwic3VidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFdyYXBMYXlvdXQgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxMFxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIyMFxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIyNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICA8L1dyYXBMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPCEtLSBBZCBTcGFjZSAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJhZC1jb250YWluZXJcXFwiIC8+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9