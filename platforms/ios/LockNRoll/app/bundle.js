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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"#f3f4f6"}]},{"type":"rule","selectors":[".ns-dark .page"],"declarations":[{"type":"declaration","property":"background-color","value":"#1f2937"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".btn-success"],"declarations":[{"type":"declaration","property":"background-color","value":"#10b981"}]},{"type":"rule","selectors":[".btn-danger"],"declarations":[{"type":"declaration","property":"background-color","value":"#ef4444"}]},{"type":"rule","selectors":[".btn-disabled"],"declarations":[{"type":"declaration","property":"background-color","value":"#9ca3af"},{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":[".btn-icon"],"declarations":[{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"40"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".btn-icon-compact"],"declarations":[{"type":"declaration","property":"padding","value":"2"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"28"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".title"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"32"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"16 0"}]},{"type":"rule","selectors":[".ns-dark .title"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".subtitle"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"8 0"}]},{"type":"rule","selectors":[".ns-dark .subtitle"],"declarations":[{"type":"declaration","property":"color","value":"#e5e7eb"}]},{"type":"rule","selectors":[".game-info"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"8 0"}]},{"type":"rule","selectors":[".ns-dark .game-info"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".input"],"declarations":[{"type":"declaration","property":"background-color","value":"#f9fafb"},{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"placeholder-color","value":"#6b7280"}]},{"type":"rule","selectors":[".ns-dark .input"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".input-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#f9fafb"},{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"padding","value":"4"},{"type":"declaration","property":"border-radius","value":"6"},{"type":"declaration","property":"margin","value":"2"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"height","value":"32"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"placeholder-color","value":"#6b7280"}]},{"type":"rule","selectors":[".ns-dark .input-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-status"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"margin","value":"4"},{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".ns-dark .player-status"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-status-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"4"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"margin","value":"1"},{"type":"declaration","property":"border-radius","value":"6"}]},{"type":"rule","selectors":[".ns-dark .player-status-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-name"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".ns-dark .player-name"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".player-score"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ns-dark .player-score"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".player-status-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#f3f4f6"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".ns-dark .player-status-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#1f2937"},{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".reorder-handle"],"declarations":[{"type":"declaration","property":"color","value":"#9ca3af"}]}],"parsingErrors":[]}}
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
        const oldScore = player.totalScore;
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
        // If this player was the current player when they locked, make them current again
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
        this._currentPlayerIndex = 0;
        this._moveHistory = [];
        this._players.forEach((player, index) => {
            player.resetForNewRound();
            player.isCurrentPlayer = index === 0;
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\">\n        <ActionItem text=\"New Game\" tap=\"{{ onNewGame }}\" ios.position=\"left\" android.position=\"actionBar\" />\n        <ActionItem text=\"{{ isEditMode ? 'Done' : 'Edit' }}\" tap=\"{{ toggleEditMode }}\" ios.position=\"right\" android.position=\"actionBar\" />\n    </ActionBar>\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <Label text=\"{{ 'Round ' + currentRound }}\" class=\"game-info\" />\n            <Label text=\"{{ 'Current Player: ' + currentPlayer }}\" class=\"game-info\" />\n            <Label text=\"{{ 'Round Score: ' + roundScore }}\" class=\"game-info\" />\n            \n            <!-- Undo Button -->\n            <Button text=\"↩️\" \n                tap=\"{{ onUndo }}\" \n                class=\"btn-icon\"\n                isEnabled=\"{{ canUndo }}\"\n                opacity=\"{{ canUndo ? 1 : 0.5 }}\"\n                fontSize=\"24\"\n                margin=\"0 4 8 4\" />\n            \n            <!-- Score Buttons -->\n            <GridLayout columns=\"*, *, *\" rows=\"auto, auto, auto, auto\" class=\"m-4\">\n                <Button row=\"0\" col=\"0\" text=\"2\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                <Button row=\"0\" col=\"1\" text=\"3\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"0\" col=\"2\" text=\"4\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                \n                <Button row=\"1\" col=\"0\" text=\"5\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"1\" col=\"1\" text=\"6\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"1\" col=\"2\" text=\"7\" tap=\"{{ onScore }}\" class=\"{{ rollCount < 3 ? 'btn btn-primary' : 'btn btn-danger' }}\" />\n                \n                <Button row=\"2\" col=\"0\" text=\"8\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"2\" col=\"1\" text=\"9\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"2\" col=\"2\" text=\"10\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                \n                <Button row=\"3\" col=\"0\" text=\"11\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"3\" col=\"1\" text=\"12\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                <Button row=\"3\" col=\"2\" text=\"Doubles\" tap=\"{{ onDoubles }}\" isEnabled=\"{{ rollCount >= 3 }}\" class=\"{{ rollCount >= 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n            </GridLayout>\n\n            <!-- Players Section -->\n            <StackLayout>\n                <Repeater items=\"{{ players }}\">\n                    <Repeater.itemTemplate>\n                        <GridLayout columns=\"auto, auto, auto, *, auto, auto\" class=\"player-status {{ isCurrentPlayer ? 'player-status-active' : '' }}\">\n                            <!-- Up/Down Arrows -->\n                            <StackLayout col=\"0\" orientation=\"horizontal\" visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\">\n                                <Button text=\"↑\" \n                                    tap=\"{{ moveUp }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"{{ canMoveUp ? '#3b82f6' : '#9ca3af' }}\"\n                                    isEnabled=\"{{ canMoveUp }}\"\n                                    fontSize=\"20\" />\n                                <Button text=\"↓\" \n                                    tap=\"{{ moveDown }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"{{ canMoveDown ? '#3b82f6' : '#9ca3af' }}\"\n                                    isEnabled=\"{{ canMoveDown }}\"\n                                    fontSize=\"20\" />\n                            </StackLayout>\n                            \n                            <!-- Edit Name Button -->\n                            <Button col=\"1\" \n                                text=\"✏️\" \n                                tap=\"{{ editName }}\" \n                                class=\"btn-icon-compact\" \n                                fontSize=\"16\"\n                                visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\" />\n                                \n                            <!-- Player Name and Score -->\n                            <Label col=\"2\" text=\"{{ name }}\" class=\"player-name\" />\n                            <Label col=\"3\" text=\"{{ totalScore }}\" class=\"player-score\" />\n                            \n                            <!-- Lock/Unlock Button -->\n                            <Button col=\"4\" \n                                text=\"{{ isLocked ? (canUnlock ? 'Unlock' : 'Locked') : 'Lock' }}\" \n                                tap=\"{{ isLocked ? (canUnlock ? unlock : null) : lock }}\"\n                                class=\"{{ isLocked ? (canUnlock ? 'btn btn-success' : 'btn btn-disabled') : 'btn btn-primary' }}\"\n                                isEnabled=\"{{ !isLocked || canUnlock }}\" />\n                                \n                            <!-- Delete Button -->\n                            <Button col=\"5\" \n                                text=\"✕\" \n                                tap=\"{{ remove }}\" \n                                class=\"btn-icon-compact\" \n                                color=\"#ef4444\"\n                                fontSize=\"20\"\n                                visibility=\"{{ isEditMode && canDelete ? 'visible' : 'collapsed' }}\" />\n                        </GridLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\" />\n    <GridLayout>\n        <StackLayout verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <!-- Logo Placeholder -->\n            <Image src=\"~/views/assets/logo.png\" stretch=\"aspectFit\" margin=\"32\" />\n            <Label text=\"Lock N' Roll\" class=\"title\" />\n            <Button text=\"New Game\" tap=\"{{ onNewGame }}\" class=\"btn btn-primary\" margin=\"16\" />\n        </StackLayout>\n    </GridLayout>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Add Players\" />\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <Label text=\"Add Players\" class=\"title\" />\n            <Label text=\"Add at least 2 players to continue\" class=\"subtitle\" />\n            \n            <GridLayout rows=\"auto\" columns=\"*, auto\" class=\"m-4\">\n                <TextField col=\"0\" \n                    hint=\"Enter player name\" \n                    text=\"{{ playerName }}\" \n                    returnKeyType=\"done\"\n                    returnPress=\"{{ addPlayer }}\"\n                    class=\"input\" />\n                <Button col=\"1\" \n                    text=\"Add\" \n                    tap=\"{{ addPlayer }}\" \n                    class=\"btn btn-primary\" \n                    isEnabled=\"{{ playerName.length > 0 }}\" />\n            </GridLayout>\n\n            <!-- Players List -->\n            <StackLayout class=\"m-2\">\n                <Repeater items=\"{{ players }}\">\n                    <Repeater.itemTemplate>\n                        <GridLayout columns=\"auto, auto, *, auto\" class=\"player-status-compact\">\n                            <!-- Up/Down Arrows -->\n                            <StackLayout col=\"0\" orientation=\"horizontal\">\n                                <Button text=\"↑\" \n                                    tap=\"{{ moveUp }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"{{ canMoveUp ? '#3b82f6' : '#9ca3af' }}\"\n                                    isEnabled=\"{{ canMoveUp }}\"\n                                    fontSize=\"20\" />\n                                <Button text=\"↓\" \n                                    tap=\"{{ moveDown }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"{{ canMoveDown ? '#3b82f6' : '#9ca3af' }}\"\n                                    isEnabled=\"{{ canMoveDown }}\"\n                                    fontSize=\"20\" />\n                            </StackLayout>\n                            \n                            <!-- Player Name -->\n                            <TextField col=\"2\" \n                                text=\"{{ name }}\" \n                                class=\"input-compact\" \n                                returnKeyType=\"done\"\n                                returnPress=\"{{ updateName }}\" />\n                                \n                            <!-- Delete Button -->\n                            <Button col=\"3\" \n                                text=\"✕\" \n                                tap=\"{{ remove }}\" \n                                class=\"btn-icon-compact\" \n                                color=\"#ef4444\"\n                                fontSize=\"16\" />\n                        </GridLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n\n            <Button \n                text=\"Continue\" \n                tap=\"{{ onContinue }}\" \n                class=\"{{ canContinue ? 'btn btn-primary' : 'btn btn-disabled' }}\"\n                isEnabled=\"{{ canContinue }}\"\n                margin=\"16 4\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Select Rounds\" />\n    <StackLayout class=\"p-4\">\n        <Label text=\"Select Number of Rounds\" class=\"title\" />\n        <Label text=\"How many rounds would you like to play?\" class=\"subtitle\" />\n        \n        <WrapLayout horizontalAlignment=\"center\" class=\"m-4\">\n            <Button text=\"10\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n            <Button text=\"15\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n            <Button text=\"20\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n            <Button text=\"25\" tap=\"{{ selectRounds }}\" class=\"btn btn-primary\" margin=\"8\" padding=\"20\" fontSize=\"24\" />\n        </WrapLayout>\n    </StackLayout>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEI7O0FBRUEsc0NBQXNDLGtDQUFrQyxVQUFVLHFEQUFxRCxxRUFBcUUsRUFBRSxFQUFFLDhEQUE4RCxxRUFBcUUsRUFBRSxFQUFFLG9EQUFvRCx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSx1REFBdUQsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSxFQUFFLDJEQUEyRCxxRUFBcUUsRUFBRSxFQUFFLDZEQUE2RCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxFQUFFLHlEQUF5RCxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSx5RUFBeUUsRUFBRSxFQUFFLGlFQUFpRSxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSx5RUFBeUUsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSx3REFBd0QsRUFBRSxFQUFFLCtEQUErRCx3REFBd0QsRUFBRSxFQUFFLHlEQUF5RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSw4REFBOEQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLGtFQUFrRSwwREFBMEQsRUFBRSxFQUFFLDBEQUEwRCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLG1FQUFtRSx3REFBd0QsRUFBRSxFQUFFLHNEQUFzRCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSx1REFBdUQsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxFQUFFLCtEQUErRCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhEQUE4RCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSxzREFBc0QsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSxzREFBc0QsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxFQUFFLHVFQUF1RSxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhEQUE4RCxtRUFBbUUsRUFBRSx1REFBdUQsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVFQUF1RSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLHNFQUFzRSxtRUFBbUUsRUFBRSxzREFBc0QsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLCtFQUErRSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDREQUE0RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFFQUFxRSx3REFBd0QsRUFBRSxFQUFFLDZEQUE2RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHNFQUFzRSx3REFBd0QsRUFBRSxFQUFFLHFFQUFxRSxxRUFBcUUsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhFQUE4RSxxRUFBcUUs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QXNGLFlBQVksZ0pBQWdKLFlBQVksd0ZBQXdGLHdCQUF3QixxSkFBcUosVUFBVSwrWEFBK1gsU0FBUyxxSEFBcUgsb0NBQW9DLHVEQUF1RCxZQUFZLDhKQUE4SixXQUFXLHFIQUFxSCxzQ0FBc0MsdURBQXVELGNBQWMscVJBQXFSLE9BQU8sd0tBQXdLLGFBQWEsbU9BQW1PLFNBQVMsNFlBQTRZLGFBQWEsZ0NBQWdDLHVEQUF1RCxtQ0FBbUMsY0FBYztBQUN2MUcsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBO0FBQ0EsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLDhhQUE4YSxlQUFlLDBFQUEwRSxlQUFlLDBFQUEwRSxlQUFlLDBFQUEwRSxlQUFlO0FBQ3hzQixpRUFBZSxpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7O0FDRmhEO0FBQ0EsK2dCQUErZ0IsZUFBZSxzSEFBc0gsZUFBZSxzSEFBc0gsZUFBZSxzSEFBc0gsZUFBZTtBQUM3NkIsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7QUNIaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwLyBzeW5jIFxcLih4bWwlN0NqcyU3QygiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvZ2FtZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvZ2FtZS9nYW1lLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0L2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi92aWV3cy9nYW1lLnRzXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS50c1wiLFxuXHRcIi4vdmlld3MvZ2FtZS54bWxcIjogXCIuL2FwcC92aWV3cy9nYW1lLnhtbFwiLFxuXHRcIi4vdmlld3MvZ2FtZS9nYW1lLnRzXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS9nYW1lLnRzXCIsXG5cdFwiLi92aWV3cy9nYW1lL2dhbWUueG1sXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS9nYW1lLnhtbFwiLFxuXHRcIi4vdmlld3MvbGFuZGluZy1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9sYW5kaW5nLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnRzXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24ueG1sXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24udHNcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi54bWxcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24ueG1sXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC50c1wiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnRzXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC54bWxcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC54bWxcIixcblx0XCIuL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi50c1wiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi50c1wiLFxuXHRcIi4vdmlld3Mvcm91bmQtc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi54bWxcIixcblx0XCIuL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnRzXCIsXG5cdFwiLi92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24ueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXBwIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHhtbCU3Q2pzJTdDKD88JTIxXFxcXC5kXFxcXC4pdHMlN0NzP2NzcykkXCI7IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5BcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pOyIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YzZjRmNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYjgyZjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXN1Y2Nlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzEwYjk4MVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tZGFuZ2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlZjQ0NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM5Y2EzYWZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWljb24tY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTYgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC50aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3VidGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5zdWJ0aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5nYW1lLWluZm9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuZ2FtZS1pbmZvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjlmYWZiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNmI3MjgwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dC1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmOWZhZmJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzZiNzI4MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5pbnB1dC1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wbGF5ZXItc3RhdHVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM3NDE1MVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1cy1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGxheWVyLXN0YXR1cy1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNGI1NTYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1uYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGxheWVyLW5hbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1zY29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFmMjkzN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zY29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1cy1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YzZjRmNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXMtYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJlb3JkZXItaGFuZGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjOWNhM2FmXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIi9Vc2Vycy9ibmVsc29uL1BlcnNvbmFsRGV2L0xvY2tOUm9sbC9hcHAvYXBwLmNzc1wiKVxuIiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0b3RhbFNjb3JlOiBudW1iZXI7XG4gICAgaXNMb2NrZWQ6IGJvb2xlYW47XG4gICAgaXNDdXJyZW50UGxheWVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGFyZ3MuY29udGV4dCB8fCB7fTtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBHYW1lVmlld01vZGVsKGNvbnRleHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9ja1RhcChhcmdzOiBhbnkpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIGNvbnN0IHBsYXllciA9IGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xuICAgIHZpZXdNb2RlbC5sb2NrUGxheWVyKHBsYXllcik7XG59XG5cbmNsYXNzIEdhbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2N1cnJlbnRSb3VuZCA9IDE7XG4gICAgcHJpdmF0ZSBfdG90YWxSb3VuZHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yb3VuZFNjb3JlID0gMDtcbiAgICBwcml2YXRlIF9yb2xsQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3RvdGFsUm91bmRzID0gY29udGV4dD8udG90YWxSb3VuZHMgfHwgMTA7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gY29udGV4dD8ucGxheWVycyB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBwbGF5ZXJOYW1lcy5tYXAoKG5hbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6IDAsXG4gICAgICAgICAgICBpc0xvY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBpc0N1cnJlbnRQbGF5ZXI6IGluZGV4ID09PSAwXG4gICAgICAgIH0pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50Um91bmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Um91bmQ7XG4gICAgfVxuXG4gICAgZ2V0IHJvdW5kU2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3VuZFNjb3JlO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyc1t0aGlzLl9jdXJyZW50UGxheWVySW5kZXhdPy5uYW1lIHx8ICcnO1xuICAgIH1cblxuICAgIGdldCByb2xsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb2xsQ291bnQ7XG4gICAgfVxuXG4gICAgb25TY29yZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoYnV0dG9uLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNXaXRoaW5GaXJzdFRocmVlID0gdGhpcy5fcm9sbENvdW50IDwgMztcbiAgICAgICAgXG4gICAgICAgIGlmIChpc1dpdGhpbkZpcnN0VGhyZWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMiB8fCB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICs9IDIwMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICs9IDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFBsYXllcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDIgfHwgdmFsdWUgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yb2xsQ291bnQrKztcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbkRvdWJsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yb2xsQ291bnQgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSAqPSAyO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvY2tQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmZpbmRJbmRleChwID0+IHAubmFtZSA9PT0gcGxheWVyLm5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xIHx8IHBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIHBsYXllci50b3RhbFNjb3JlICs9IHRoaXMuX3JvdW5kU2NvcmU7XG4gICAgICAgIHBsYXllci5pc0xvY2tlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hbGxQbGF5ZXJzTG9ja2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJvdW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFBsYXllcigpIHtcbiAgICAgICAgbGV0IG5leHRJbmRleCA9ICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIHRoaXMuX3BsYXllcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbG9vcENvdW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICh0aGlzLl9wbGF5ZXJzW25leHRJbmRleF0uaXNMb2NrZWQgJiYgbG9vcENvdW50IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IChuZXh0SW5kZXggKyAxKSAlIHRoaXMuX3BsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgbG9vcENvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChsb29wQ291bnQgPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyc1t0aGlzLl9jdXJyZW50UGxheWVySW5kZXhdLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyc1t0aGlzLl9jdXJyZW50UGxheWVySW5kZXhdLmlzQ3VycmVudFBsYXllciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3JvbGxDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFJvdW5kKCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50Um91bmQrKztcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3VuZCA+IHRoaXMuX3RvdGFsUm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX3JvbGxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5pc0xvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcGxheWVyLmlzQ3VycmVudFBsYXllciA9IGluZGV4ID09PSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbGxQbGF5ZXJzTG9ja2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycy5ldmVyeShwbGF5ZXIgPT4gcGxheWVyLmlzTG9ja2VkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZEdhbWUoKSB7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuX3BsYXllcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBcbiAgICAgICAgICAgIChwcmV2LnRvdGFsU2NvcmUgPiBjdXJyZW50LnRvdGFsU2NvcmUpID8gcHJldiA6IGN1cnJlbnRcbiAgICAgICAgKTtcbiAgICAgICAgYWxlcnQoYEdhbWUgT3ZlciEgJHt3aW5uZXIubmFtZX0gd2lucyB3aXRoICR7d2lubmVyLnRvdGFsU2NvcmV9IHBvaW50cyFgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vdGlmeVByb3BlcnR5Q2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY3VycmVudFJvdW5kJywgdGhpcy5fY3VycmVudFJvdW5kKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncm91bmRTY29yZScsIHRoaXMuX3JvdW5kU2NvcmUpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjdXJyZW50UGxheWVyJywgdGhpcy5jdXJyZW50UGxheWVyKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncm9sbENvdW50JywgdGhpcy5fcm9sbENvdW50KTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncGxheWVycycsIHRoaXMuX3BsYXllcnMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlQXJyYXksIEZyYW1lLCBwcm9tcHQgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5pbnRlcmZhY2UgTW92ZSB7XG4gICAgdHlwZTogJ3JvbGwnIHwgJ2RvdWJsZXMnIHwgJ2xvY2snO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgcGxheWVySW5kZXg6IG51bWJlcjtcbiAgICByb3VuZFNjb3JlOiBudW1iZXI7XG4gICAgcm9sbENvdW50OiBudW1iZXI7XG4gICAgd2FzQ3VycmVudFBsYXllcj86IGJvb2xlYW47XG59XG5cbmNsYXNzIFBsYXllclZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF90b3RhbFNjb3JlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNMb2NrZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXNDdXJyZW50UGxheWVyOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2xhc3RMb2NrZWRTY29yZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xvY2tlZFRoaXNSb2xsOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2xvY2tSb2xsQ291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9nYW1lVmlld01vZGVsOiBHYW1lVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBnYW1lVmlld01vZGVsOiBHYW1lVmlld01vZGVsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5faXNMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xhc3RMb2NrZWRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSAtMTtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbCA9IGdhbWVWaWV3TW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7IHJldHVybiB0aGlzLl90b3RhbFNjb3JlOyB9XG4gICAgZ2V0IGlzTG9ja2VkKCkgeyByZXR1cm4gdGhpcy5faXNMb2NrZWQ7IH1cbiAgICBnZXQgaXNDdXJyZW50UGxheWVyKCkgeyByZXR1cm4gdGhpcy5faXNDdXJyZW50UGxheWVyOyB9XG4gICAgZ2V0IGNhblVubG9jaygpIHsgXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NrZWRUaGlzUm9sbCAmJiBcbiAgICAgICAgICAgICAgICF0aGlzLl9nYW1lVmlld01vZGVsLmlzTGFzdFBsYXllclRvTG9jayh0aGlzKSAmJiBcbiAgICAgICAgICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPT09IHRoaXMuX2dhbWVWaWV3TW9kZWwucm9sbENvdW50O1xuICAgIH1cbiAgICBnZXQgY2FuRGVsZXRlKCkgeyByZXR1cm4gdGhpcy5fZ2FtZVZpZXdNb2RlbC5jYW5EZWxldGVQbGF5ZXJzOyB9XG4gICAgZ2V0IGNhbk1vdmVVcCgpIHsgcmV0dXJuICF0aGlzLl9pc0N1cnJlbnRQbGF5ZXIgJiYgdGhpcy5fZ2FtZVZpZXdNb2RlbC5jYW5Nb3ZlUGxheWVyVXAodGhpcyk7IH1cbiAgICBnZXQgY2FuTW92ZURvd24oKSB7IHJldHVybiAhdGhpcy5faXNDdXJyZW50UGxheWVyICYmIHRoaXMuX2dhbWVWaWV3TW9kZWwuY2FuTW92ZVBsYXllckRvd24odGhpcyk7IH1cbiAgICBnZXQgaXNFZGl0TW9kZSgpIHsgcmV0dXJuIHRoaXMuX2dhbWVWaWV3TW9kZWwuaXNFZGl0TW9kZTsgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgdG90YWxTY29yZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl90b3RhbFNjb3JlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdG90YWxTY29yZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxTY29yZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBpc0xvY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5faXNMb2NrZWQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0xvY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IHRoaXMuX2dhbWVWaWV3TW9kZWwucm9sbENvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpc0xvY2tlZCcsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIHRoaXMuY2FuVW5sb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBpc0N1cnJlbnRQbGF5ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ3VycmVudFBsYXllciAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VycmVudFBsYXllciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNDdXJyZW50UGxheWVyJywgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZVVwJywgdGhpcy5jYW5Nb3ZlVXApO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCB0aGlzLmNhbk1vdmVEb3duKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXROYW1lKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLmVkaXRQbGF5ZXJOYW1lKHRoaXMpO1xuICAgIH1cblxuICAgIGxvY2soKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwubG9ja1BsYXllcih0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvY2soKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwudW5sb2NrUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5kZWxldGVQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLm1vdmVQbGF5ZXJVcCh0aGlzKTtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5tb3ZlUGxheWVyRG93bih0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEZvck5ld1JvdW5kKCkge1xuICAgICAgICB0aGlzLl9pc0xvY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sYXN0TG9ja2VkU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gLTE7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzTG9ja2VkJywgZmFsc2UpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FuRGVsZXRlKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5EZWxldGUnLCB0aGlzLmNhbkRlbGV0ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FuVW5sb2NrKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCB0aGlzLmNhblVubG9jayk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW92ZUJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhbk1vdmVVcCcsIHRoaXMuY2FuTW92ZVVwKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCB0aGlzLmNhbk1vdmVEb3duKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0TW9kZSgpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNFZGl0TW9kZScsIHRoaXMuaXNFZGl0TW9kZSk7XG4gICAgfVxuXG4gICAgYWRkU2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlICs9IHNjb3JlO1xuICAgICAgICB0aGlzLl9sYXN0TG9ja2VkU2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gdGhpcy5fZ2FtZVZpZXdNb2RlbC5yb2xsQ291bnQ7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsU2NvcmUnLCB0aGlzLl90b3RhbFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5sb2NrJywgdGhpcy5jYW5VbmxvY2spO1xuICAgIH1cblxuICAgIHJlbW92ZVNjb3JlKCkge1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlIC09IHRoaXMuX2xhc3RMb2NrZWRTY29yZTtcbiAgICAgICAgdGhpcy5fbGFzdExvY2tlZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IC0xO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbFNjb3JlJywgdGhpcy5fdG90YWxTY29yZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIHRoaXMuY2FuVW5sb2NrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGNvbnRleHQgPSBhcmdzLmNvbnRleHQgfHwge307XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBHYW1lVmlld01vZGVsKGNvbnRleHQpO1xufVxuXG5jbGFzcyBHYW1lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogT2JzZXJ2YWJsZUFycmF5PFBsYXllclZpZXdNb2RlbD47XG4gICAgcHJpdmF0ZSBfY3VycmVudFJvdW5kID0gMTtcbiAgICBwcml2YXRlIF90b3RhbFJvdW5kczogbnVtYmVyO1xuICAgIHByaXZhdGUgX3JvdW5kU2NvcmUgPSAwO1xuICAgIHByaXZhdGUgX3JvbGxDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllckluZGV4ID0gMDtcbiAgICBwcml2YXRlIF9tb3ZlSGlzdG9yeTogTW92ZVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lVmlld01vZGVsIGNvbnN0cnVjdG9yIGNhbGxlZCB3aXRoIGNvbnRleHQ6JywgY29udGV4dCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl90b3RhbFJvdW5kcyA9IGNvbnRleHQ/LnRvdGFsUm91bmRzIHx8IDEwO1xuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lcyA9IGNvbnRleHQ/LnBsYXllcnMgfHwgW107XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcgd2l0aCBwbGF5ZXIgbmFtZXM6JywgcGxheWVyTmFtZXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UGxheWVyVmlld01vZGVsPigpO1xuICAgICAgICBwbGF5ZXJOYW1lcy5mb3JFYWNoKChuYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJWaWV3TW9kZWwobmFtZSwgdGhpcyk7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gaW5kZXggPT09IDA7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVycyBpbml0aWFsaXplZDonLCB0aGlzLl9wbGF5ZXJzKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVycygpIHsgcmV0dXJuIHRoaXMuX3BsYXllcnM7IH1cbiAgICBnZXQgY3VycmVudFJvdW5kKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJvdW5kOyB9XG4gICAgZ2V0IHJvdW5kU2NvcmUoKSB7IHJldHVybiB0aGlzLl9yb3VuZFNjb3JlOyB9XG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXIoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KT8ubmFtZSB8fCAnJzsgfVxuICAgIGdldCByb2xsQ291bnQoKSB7IHJldHVybiB0aGlzLl9yb2xsQ291bnQ7IH1cbiAgICBnZXQgY2FuRGVsZXRlUGxheWVycygpIHsgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmUgPT09IDAgJiYgdGhpcy5fcm9sbENvdW50ID09PSAwICYmIHRoaXMuX3BsYXllcnMubGVuZ3RoID4gMjsgfVxuICAgIGdldCBjYW5VbmRvKCkgeyByZXR1cm4gdGhpcy5fbW92ZUhpc3RvcnkubGVuZ3RoID4gMDsgfVxuICAgIGdldCBpc0VkaXRNb2RlKCkgeyByZXR1cm4gdGhpcy5faXNFZGl0TW9kZTsgfVxuXG4gICAgdG9nZ2xlRWRpdE1vZGUoKSB7XG4gICAgICAgIHRoaXMuX2lzRWRpdE1vZGUgPSAhdGhpcy5faXNFZGl0TW9kZTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNFZGl0TW9kZScsIHRoaXMuX2lzRWRpdE1vZGUpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci51cGRhdGVFZGl0TW9kZSgpKTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmUgPT09IDAgJiYgdGhpcy5fcm9sbENvdW50ID09PSAwICYmIHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpID4gMDtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyRG93bihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91bmRTY29yZSA9PT0gMCAmJiB0aGlzLl9yb2xsQ291bnQgPT09IDAgJiYgdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcikgPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllclVwKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlUGxheWVyVXAocGxheWVyKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGNvbnN0IHdhc0N1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIuaXNDdXJyZW50UGxheWVyO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCAtIDEsIDAsIHBsYXllcik7XG4gICAgICAgIFxuICAgICAgICBpZiAod2FzQ3VycmVudFBsYXllcikge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbk1vdmVQbGF5ZXJEb3duKHBsYXllcikpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBjb25zdCB3YXNDdXJyZW50UGxheWVyID0gcGxheWVyLmlzQ3VycmVudFBsYXllcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXggKyAxLCAwLCBwbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIGlzTGFzdFBsYXllclRvTG9jayhwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBsb2NrZWRDb3VudCA9IHRoaXMuX3BsYXllcnMuZmlsdGVyKHAgPT4gcC5pc0xvY2tlZCkubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbG9ja2VkQ291bnQgPT09IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSAmJiAhcGxheWVyLmlzTG9ja2VkO1xuICAgIH1cblxuICAgIGVkaXRQbGF5ZXJOYW1lKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFZGl0IFBsYXllciBOYW1lXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIG5ldyBuYW1lIGZvciBcIiArIHBsYXllci5uYW1lLFxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IHBsYXllci5uYW1lLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNhdmVcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCAmJiByZXN1bHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TY29yZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoYnV0dG9uLnRleHQpO1xuICAgICAgICBsZXQgc2NvcmVUb0FkZCA9IDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1dpdGhpbkZpcnN0VGhyZWUgPSB0aGlzLl9yb2xsQ291bnQgPCAzO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzV2l0aGluRmlyc3RUaHJlZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSBzY29yZVRvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gc2NvcmVUb0FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAncm9sbCcsXG4gICAgICAgICAgICBzY29yZTogc2NvcmVUb0FkZCxcbiAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgsXG4gICAgICAgICAgICByb3VuZFNjb3JlOiB0aGlzLl9yb3VuZFNjb3JlIC0gc2NvcmVUb0FkZCxcbiAgICAgICAgICAgIHJvbGxDb3VudDogdGhpcy5fcm9sbENvdW50XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMubmV4dFBsYXllcigpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG9uRG91YmxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JvbGxDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRTY29yZSA9IHRoaXMuX3JvdW5kU2NvcmU7XG4gICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX21vdmVIaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkb3VibGVzJyxcbiAgICAgICAgICAgICAgICBzY29yZTogdGhpcy5fcm91bmRTY29yZSAtIG9sZFNjb3JlLFxuICAgICAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgsXG4gICAgICAgICAgICAgICAgcm91bmRTY29yZTogb2xkU2NvcmUsXG4gICAgICAgICAgICAgICAgcm9sbENvdW50OiB0aGlzLl9yb2xsQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVIaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gdGhpcy5fbW92ZUhpc3RvcnkucG9wKCk7XG4gICAgICAgIGlmICghbGFzdE1vdmUpIHJldHVybjtcblxuICAgICAgICBpZiAobGFzdE1vdmUudHlwZSA9PT0gJ2xvY2snKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0obGFzdE1vdmUucGxheWVySW5kZXgpO1xuICAgICAgICAgICAgaWYgKGxhc3RNb3ZlLndhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSBsYXN0TW92ZS5wbGF5ZXJJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bmxvY2tQbGF5ZXIocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gbGFzdE1vdmUucGxheWVySW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IGxhc3RNb3ZlLnJvdW5kU2NvcmU7XG4gICAgICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSBsYXN0TW92ZS5yb2xsQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQbGF5ZXJzID0gdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7IHByZXZpb3VzUGxheWVycyB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY2tQbGF5ZXIocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKHBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHdhc0N1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIuaXNDdXJyZW50UGxheWVyO1xuICAgICAgICBjb25zdCBvbGRTY29yZSA9IHBsYXllci50b3RhbFNjb3JlO1xuICAgICAgICBwbGF5ZXIuYWRkU2NvcmUodGhpcy5fcm91bmRTY29yZSk7XG4gICAgICAgIHBsYXllci5pc0xvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbG9jaycsXG4gICAgICAgICAgICBzY29yZTogdGhpcy5fcm91bmRTY29yZSxcbiAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSxcbiAgICAgICAgICAgIHJvdW5kU2NvcmU6IHRoaXMuX3JvdW5kU2NvcmUsXG4gICAgICAgICAgICByb2xsQ291bnQ6IHRoaXMuX3JvbGxDb3VudCxcbiAgICAgICAgICAgIHdhc0N1cnJlbnRQbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maW5kTmV4dFVubG9ja2VkUGxheWVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBsYXllckluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHVubG9ja1BsYXllcihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIXBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIHBsYXllci5yZW1vdmVTY29yZSgpO1xuICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBJZiB0aGlzIHBsYXllciB3YXMgdGhlIGN1cnJlbnQgcGxheWVyIHdoZW4gdGhleSBsb2NrZWQsIG1ha2UgdGhlbSBjdXJyZW50IGFnYWluXG4gICAgICAgIGNvbnN0IHBsYXllckluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGNvbnN0IGxhc3RMb2NrTW92ZSA9IFsuLi50aGlzLl9tb3ZlSGlzdG9yeV0ucmV2ZXJzZSgpLmZpbmQoXG4gICAgICAgICAgICBtb3ZlID0+IG1vdmUudHlwZSA9PT0gJ2xvY2snICYmIG1vdmUucGxheWVySW5kZXggPT09IHBsYXllckluZGV4XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGxhc3RMb2NrTW92ZT8ud2FzQ3VycmVudFBsYXllcikge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSBwbGF5ZXJJbmRleDtcbiAgICAgICAgICAgIHBsYXllci5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBkZWxldGVQbGF5ZXIocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkRlbGV0ZVBsYXllcnMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9ICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIHRoaXMuX3BsYXllcnMubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgdGhpcy5fY3VycmVudFBsYXllckluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNDdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmluZE5leHRVbmxvY2tlZFBsYXllcigpO1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFBsYXllckluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmROZXh0VW5sb2NrZWRQbGF5ZXIoKSB7XG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gdGhpcy5fY3VycmVudFBsYXllckluZGV4O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSAodGhpcy5fY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcGxheWVycy5nZXRJdGVtKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkuaXNMb2NrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCAhPT0gc3RhcnRJbmRleCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWxsUGxheWVyc0xvY2tlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRSb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0Um91bmQoKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRSb3VuZCsrO1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFJvdW5kID4gdGhpcy5fdG90YWxSb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRpbmcgcm91bmQgJHt0aGlzLl9jdXJyZW50Um91bmR9YCk7XG4gICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9tb3ZlSGlzdG9yeSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIucmVzZXRGb3JOZXdSb3VuZCgpO1xuICAgICAgICAgICAgcGxheWVyLmlzQ3VycmVudFBsYXllciA9IGluZGV4ID09PSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGF5ZXJTdGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZUNhbkRlbGV0ZSgpO1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZUNhblVubG9jaygpO1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZU1vdmVCdXR0b25zKCk7XG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlRWRpdE1vZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbGxQbGF5ZXJzTG9ja2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycy5ldmVyeShwbGF5ZXIgPT4gcGxheWVyLmlzTG9ja2VkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZEdhbWUoKSB7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuX3BsYXllcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBcbiAgICAgICAgICAgIChwcmV2LnRvdGFsU2NvcmUgPiBjdXJyZW50LnRvdGFsU2NvcmUpID8gcHJldiA6IGN1cnJlbnRcbiAgICAgICAgKTtcbiAgICAgICAgYWxlcnQoYEdhbWUgT3ZlciEgJHt3aW5uZXIubmFtZX0gd2lucyB3aXRoICR7d2lubmVyLnRvdGFsU2NvcmV9IHBvaW50cyFgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vdGlmeVByb3BlcnR5Q2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY3VycmVudFJvdW5kJywgdGhpcy5fY3VycmVudFJvdW5kKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncm91bmRTY29yZScsIHRoaXMuX3JvdW5kU2NvcmUpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjdXJyZW50UGxheWVyJywgdGhpcy5jdXJyZW50UGxheWVyKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncm9sbENvdW50JywgdGhpcy5fcm9sbENvdW50KTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5kbycsIHRoaXMuY2FuVW5kbyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhbkRlbGV0ZVBsYXllcnMnLCB0aGlzLmNhbkRlbGV0ZVBsYXllcnMpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdwbGF5ZXJzJywgdGhpcy5fcGxheWVycyk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMYW5kaW5nVmlld01vZGVsKCk7XG59XG5cbmNsYXNzIExhbmRpbmdWaWV3TW9kZWwge1xuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gcGxheWVyIHNlbGVjdGlvbicpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTGFuZGluZ1ZpZXdNb2RlbCgpO1xufVxuXG5jbGFzcyBMYW5kaW5nVmlld01vZGVsIHtcbiAgICBvbk5ld0dhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIHBsYXllciBzZWxlY3Rpb24nKTtcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24nLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUFycmF5LCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsKCk7XG59XG5cbmNsYXNzIFBsYXllclNlbGVjdGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3BsYXllcnM6IE9ic2VydmFibGVBcnJheTx7IG5hbWU6IHN0cmluZyB9PjtcbiAgICBwcml2YXRlIF9wbGF5ZXJOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8eyBuYW1lOiBzdHJpbmcgfT4oKTtcbiAgICAgICAgdGhpcy5fcGxheWVyTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycztcbiAgICB9XG5cbiAgICBnZXQgcGxheWVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllck5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHBsYXllck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyTmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllck5hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllck5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2goeyBuYW1lOiB0aGlzLnBsYXllck5hbWUudHJpbSgpIH0pO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbnRpbnVlKCkge1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3JvdW5kLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7IHBsYXllcnM6IHRoaXMuX3BsYXllcnMubWFwKHAgPT4gcC5uYW1lKSB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlQXJyYXksIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuY2xhc3MgUGxheWVySXRlbSBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF92aWV3TW9kZWw6IFBsYXllclNlbGVjdGlvblZpZXdNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdmlld01vZGVsOiBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2FuTW92ZVVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld01vZGVsLmNhbk1vdmVQbGF5ZXJVcCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuTW92ZURvd24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3TW9kZWwuY2FuTW92ZVBsYXllckRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwucmVtb3ZlUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgdGhpcy5fdmlld01vZGVsLm1vdmVQbGF5ZXJVcCh0aGlzKTtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5fdmlld01vZGVsLm1vdmVQbGF5ZXJEb3duKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZU5hbWUoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBuZXdOYW1lID0gdGV4dEZpZWxkLnRleHQudHJpbSgpO1xuICAgICAgICBpZiAobmV3TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGV4dCA9IGFyZ3MuY29udGV4dCB8fCB7fTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFBsYXllclNlbGVjdGlvblZpZXdNb2RlbChjb250ZXh0KTtcbn1cblxuY2xhc3MgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogT2JzZXJ2YWJsZUFycmF5PFBsYXllckl0ZW0+O1xuICAgIHByaXZhdGUgX3BsYXllck5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IE9ic2VydmFibGVBcnJheTxQbGF5ZXJJdGVtPigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJOYW1lID0gJyc7XG5cbiAgICAgICAgLy8gQWRkIHByZXZpb3VzIHBsYXllcnMgaWYgdGhleSBleGlzdFxuICAgICAgICBjb25zdCBwcmV2aW91c1BsYXllcnMgPSBjb250ZXh0Py5wcmV2aW91c1BsYXllcnMgfHwgW107XG4gICAgICAgIHByZXZpb3VzUGxheWVycy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXJJdGVtKG5hbWUsIHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyTmFtZTtcbiAgICB9XG5cbiAgICBnZXQgY2FuQ29udGludWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmxlbmd0aCA+PSAyO1xuICAgIH1cblxuICAgIHNldCBwbGF5ZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllck5hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdwbGF5ZXJOYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJOYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXJJdGVtKHRoaXMucGxheWVyTmFtZS50cmltKCksIHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuQ29udGludWUnLCB0aGlzLmNhbkNvbnRpbnVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVQbGF5ZXIocGxheWVyOiBQbGF5ZXJJdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhbkNvbnRpbnVlJywgdGhpcy5jYW5Db250aW51ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuTW92ZVBsYXllclVwKHBsYXllcjogUGxheWVySXRlbSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcikgPiAwO1xuICAgIH1cblxuICAgIGNhbk1vdmVQbGF5ZXJEb3duKHBsYXllcjogUGxheWVySXRlbSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcikgPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllclVwKHBsYXllcjogUGxheWVySXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCAtIDEsIDAsIHBsYXllcik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJJdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGlmIChpbmRleCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXggKyAxLCAwLCBwbGF5ZXIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyU3RhdGVzKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgIHBsYXllci5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZVVwJywgcGxheWVyLmNhbk1vdmVVcCk7XG4gICAgICAgICAgICBwbGF5ZXIubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhbk1vdmVEb3duJywgcGxheWVyLmNhbk1vdmVEb3duKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Db250aW51ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuQ29udGludWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdmlnYXRpb25Db250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHBsYXllcnM6IHRoaXMuX3BsYXllcnMubWFwKHAgPT4gcC5uYW1lKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllciBTZWxlY3Rpb24gbmF2aWdhdGluZyB3aXRoIGNvbnRleHQ6JywgbmF2aWdhdGlvbkNvbnRleHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBuYXZpZ2F0aW9uQ29udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFJvdW5kU2VsZWN0aW9uVmlld01vZGVsKHBhZ2UubmF2aWdhdGlvbkNvbnRleHQpO1xufVxuXG5jbGFzcyBSb3VuZFNlbGVjdGlvblZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBwbGF5ZXJzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUm91bmRTZWxlY3Rpb24gY29udGV4dDonLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gY29udGV4dD8ucGxheWVycyB8fCBbXTtcbiAgICB9XG5cbiAgICBzZWxlY3RSb3VuZHMoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCByb3VuZHMgPSBwYXJzZUludChidXR0b24udGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBnYW1lIHdpdGg6Jywge1xuICAgICAgICAgICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLFxuICAgICAgICAgICAgdG90YWxSb3VuZHM6IHJvdW5kc1xuICAgICAgICB9KTtcblxuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL2dhbWUnLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHBsYXllcnM6IHRoaXMucGxheWVycyxcbiAgICAgICAgICAgICAgICB0b3RhbFJvdW5kczogcm91bmRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGNvbnRleHQgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuICAgIGNvbnNvbGUubG9nKCdSb3VuZCBTZWxlY3Rpb24gcmVjZWl2ZWQgY29udGV4dDonLCBjb250ZXh0KTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFJvdW5kU2VsZWN0aW9uVmlld01vZGVsKGNvbnRleHQpO1xufVxuXG5jbGFzcyBSb3VuZFNlbGVjdGlvblZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBwbGF5ZXJzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUm91bmRTZWxlY3Rpb24gY29uc3RydWN0b3IgY29udGV4dDonLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gY29udGV4dD8ucGxheWVycyB8fCBbXTtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllcnMgaW4gcm91bmQgc2VsZWN0aW9uOicsIHRoaXMucGxheWVycyk7XG4gICAgfVxuXG4gICAgc2VsZWN0Um91bmRzKGFyZ3M6IGFueSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3Qgcm91bmRzID0gcGFyc2VJbnQoYnV0dG9uLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkNvbnRleHQgPSB7XG4gICAgICAgICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMsXG4gICAgICAgICAgICB0b3RhbFJvdW5kczogcm91bmRzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBnYW1lIHdpdGggY29udGV4dDonLCBuYXZpZ2F0aW9uQ29udGV4dCk7XG5cbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9nYW1lL2dhbWUnLFxuICAgICAgICAgICAgY29udGV4dDogbmF2aWdhdGlvbkNvbnRleHQsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJ2aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlXFxcIiAvPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvY2sgTicgUm9sbFxcXCIgLz5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdSb3VuZCAnICsgY3VycmVudFJvdW5kIH19XFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdDdXJyZW50IFBsYXllcjogJyArIGN1cnJlbnRQbGF5ZXIgfX1cXFwiIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ1JvdW5kIFNjb3JlOiAnICsgcm91bmRTY29yZSB9fVxcXCIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICosICpcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIyXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGlzRW5hYmxlZD1cXFwie3sgcm9sbENvdW50IDwgMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA8IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiM1xcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI0XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCI1XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjZcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwiN1xcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50IDwgMyA/ICdidG4gYnRuLXByaW1hcnknIDogJ2J0biBidG4tZGFuZ2VyJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjhcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiOVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCIxMFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiMTFcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiMTJcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPCAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50IDwgMyA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJEb3VibGVzXFxcIiB0YXA9XFxcInt7IG9uRG91YmxlcyB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPj0gMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA+PSAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS00IHAtMiBiZy13aGl0ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgcGxheWVycyB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICosIGF1dG9cXFwiIGNsYXNzPVxcXCJwbGF5ZXItc3RhdHVzIHt7IGlzQ3VycmVudFBsYXllciA/ICdwbGF5ZXItc3RhdHVzLWFjdGl2ZScgOiAnJyB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIGNsYXNzPVxcXCJwbGF5ZXItbmFtZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgdG90YWxTY29yZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1zY29yZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGlzTG9ja2VkID8gJ0xvY2tlZCcgOiAnTG9jaycgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgJHBhcmVudHNbJ1BhZ2UnXS5vbkxvY2tUYXAgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGlzTG9ja2VkID8gJ2J0biBidG4tZGlzYWJsZWQnIDogJ2J0biBidG4tcHJpbWFyeScgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyAhaXNMb2NrZWQgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTG9jayBOJyBSb2xsXFxcIj5cXG4gICAgICAgIDxBY3Rpb25JdGVtIHRleHQ9XFxcIk5ldyBHYW1lXFxcIiB0YXA9XFxcInt7IG9uTmV3R2FtZSB9fVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiIC8+XFxuICAgICAgICA8QWN0aW9uSXRlbSB0ZXh0PVxcXCJ7eyBpc0VkaXRNb2RlID8gJ0RvbmUnIDogJ0VkaXQnIH19XFxcIiB0YXA9XFxcInt7IHRvZ2dsZUVkaXRNb2RlIH19XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ1JvdW5kICcgKyBjdXJyZW50Um91bmQgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdDdXJyZW50IFBsYXllcjogJyArIGN1cnJlbnRQbGF5ZXIgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdSb3VuZCBTY29yZTogJyArIHJvdW5kU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBVbmRvIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIuKGqe+4j1xcXCIgXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25VbmRvIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhblVuZG8gfX1cXFwiXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XFxcInt7IGNhblVuZG8gPyAxIDogMC41IH19XFxcIlxcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjRcXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cXFwiMCA0IDggNFxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIFNjb3JlIEJ1dHRvbnMgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjJcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPCAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50IDwgMyA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIzXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjRcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjVcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiNlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI3XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tcHJpbWFyeScgOiAnYnRuIGJ0bi1kYW5nZXInIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiOFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCI5XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIxMVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIxMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA8IDMgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIzXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIkRvdWJsZXNcXFwiIHRhcD1cXFwie3sgb25Eb3VibGVzIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA+PSAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50ID49IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBQbGF5ZXJzIFNlY3Rpb24gLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IHBsYXllcnMgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqLCBhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicGxheWVyLXN0YXR1cyB7eyBpc0N1cnJlbnRQbGF5ZXIgPyAncGxheWVyLXN0YXR1cy1hY3RpdmUnIDogJycgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFVwL0Rvd24gQXJyb3dzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIwXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgdmlzaWJpbGl0eT1cXFwie3sgaXNFZGl0TW9kZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaRXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG1vdmVVcCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjYW5Nb3ZlVXAgPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBjYW5Nb3ZlVXAgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihpNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgbW92ZURvd24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZURvd24gPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBjYW5Nb3ZlRG93biB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVkaXQgTmFtZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIuKcj++4j1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IGVkaXROYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIxNlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk9XFxcInt7IGlzRWRpdE1vZGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFBsYXllciBOYW1lIGFuZCBTY29yZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1uYW1lXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIzXFxcIiB0ZXh0PVxcXCJ7eyB0b3RhbFNjb3JlIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLXNjb3JlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb2NrL1VubG9jayBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCI0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGlzTG9ja2VkID8gKGNhblVubG9jayA/ICdVbmxvY2snIDogJ0xvY2tlZCcpIDogJ0xvY2snIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgaXNMb2NrZWQgPyAoY2FuVW5sb2NrID8gdW5sb2NrIDogbnVsbCkgOiBsb2NrIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGlzTG9ja2VkID8gKGNhblVubG9jayA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnKSA6ICdidG4gYnRuLXByaW1hcnknIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyAhaXNMb2NrZWQgfHwgY2FuVW5sb2NrIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGVsZXRlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwi4pyVXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgcmVtb3ZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjZWY0NDQ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eT1cXFwie3sgaXNFZGl0TW9kZSAmJiBjYW5EZWxldGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiIC8+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMb2NrIE4nIFJvbGxcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiIC8+XFxuICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPCEtLSBMb2dvIFBsYWNlaG9sZGVyIC0tPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vdmlld3MvYXNzZXRzL2xvZ28ucG5nXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIG1hcmdpbj1cXFwiMzJcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxvY2sgTicgUm9sbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW49XFxcIjE2XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJBZGQgUGxheWVyc1xcXCIgLz5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XFxcIjBcXFwiIGhpbnQ9XFxcIkVudGVyIHBsYXllciBuYW1lXFxcIiB0ZXh0PVxcXCJ7eyBwbGF5ZXJOYW1lIH19XFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkFkZFxcXCIgdGFwPVxcXCJ7eyBhZGRQbGF5ZXIgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IHBsYXllcnMgfX1cXFwiIGhlaWdodD1cXFwiMzAwXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1uYW1lIHAtMlxcXCIgLz5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgIDwvTGlzdFZpZXc+XFxuXFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkNvbnRpbnVlXFxcIiB0YXA9XFxcInt7IG9uQ29udGludWUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlzRW5hYmxlZD1cXFwie3sgcGxheWVycy5sZW5ndGggPiAxIH19XFxcIiAvPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJBZGQgUGxheWVyc1xcXCIgLz5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBQbGF5ZXJzXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBhdCBsZWFzdCAyIHBsYXllcnMgdG8gY29udGludWVcXFwiIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XFxcIjBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgcGxheWVyIG5hbWVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgcGxheWVyTmFtZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M9XFxcInt7IGFkZFBsYXllciB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiQWRkXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgYWRkUGxheWVyIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBwbGF5ZXJOYW1lLmxlbmd0aCA+IDAgfX1cXFwiIC8+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gUGxheWVycyBMaXN0IC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcInBsYXllci1zdGF0dXMtY29tcGFjdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVXAvRG93biBBcnJvd3MgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaRXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG1vdmVVcCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjYW5Nb3ZlVXAgPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBjYW5Nb3ZlVXAgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihpNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgbW92ZURvd24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZURvd24gPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBjYW5Nb3ZlRG93biB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFBsYXllciBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cXFwiMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzcz1cXFwie3sgdXBkYXRlTmFtZSB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCIzXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIuKclVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IHJlbW92ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiI2VmNDQ0NFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIxNlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIkNvbnRpbnVlXFxcIiBcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvbkNvbnRpbnVlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGNhbkNvbnRpbnVlID8gJ2J0biBidG4tcHJpbWFyeScgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiXFxuICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuQ29udGludWUgfX1cXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cXFwiMTYgNFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCJcIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJTZWxlY3QgUm91bmRzXFxcIiAvPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2VsZWN0IE51bWJlciBvZiBSb3VuZHNcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgIDxXcmFwTGF5b3V0IGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxMFxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIyMFxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIyNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICA8L1dyYXBMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlbGVjdCBSb3VuZHNcXFwiIC8+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWxlY3QgTnVtYmVyIG9mIFJvdW5kc1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvdyBtYW55IHJvdW5kcyB3b3VsZCB5b3UgbGlrZSB0byBwbGF5P1xcXCIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8V3JhcExheW91dCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMTBcXFwiIHRhcD1cXFwie3sgc2VsZWN0Um91bmRzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW49XFxcIjhcXFwiIHBhZGRpbmc9XFxcIjIwXFxcIiBmb250U2l6ZT1cXFwiMjRcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjIwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luPVxcXCI4XFxcIiBwYWRkaW5nPVxcXCIyMFxcXCIgZm9udFNpemU9XFxcIjI0XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMjVcXFwiIHRhcD1cXFwie3sgc2VsZWN0Um91bmRzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW49XFxcIjhcXFwiIHBhZGRpbmc9XFxcIjIwXFxcIiBmb250U2l6ZT1cXFwiMjRcXFwiIC8+XFxuICAgICAgICA8L1dyYXBMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==