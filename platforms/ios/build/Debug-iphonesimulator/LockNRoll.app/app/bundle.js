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
    get currentLeader() {
        let highscore = 0;
        let leader = '';
        this._players.forEach((player, index) => {
            if (player.totalScore > highscore) {
                leader = player.name;
            }
        });
        console.log(leader);
        return leader || '';
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
        this.notifyPropertyChange('currentLeader', this.currentLeader);
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
    get currentLeader() {
        let highscore = 0;
        let leader = '';
        this._players.forEach((player, index) => {
            if (player.totalScore > highscore) {
                leader = player.name;
            }
        });
        return leader || '';
    }
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
        this.notifyPropertyChange('currentLeader', this.currentLeader);
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\">\n        <ActionItem text=\"New Game\" tap=\"{{ onNewGame }}\" ios.position=\"left\" android.position=\"actionBar\" />\n        <ActionItem text=\"{{ isEditMode ? 'Done' : 'Edit' }}\" tap=\"{{ toggleEditMode }}\" ios.position=\"right\" android.position=\"actionBar\" />\n    </ActionBar>\n    <GridLayout rows=\"*, auto\">\n        <ScrollView row=\"0\">\n            <StackLayout class=\"p-4\">\n                <Label text=\"{{ 'Round ' + currentRound }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Current Player: ' + currentPlayer }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Leader: ' + currentLeader }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Round Score: ' + roundScore }}\" class=\"game-info\" />\n                \n                <!-- Undo Button -->\n                <Button text=\"↩️\" \n                    tap=\"{{ onUndo }}\" \n                    class=\"btn-icon\"\n                    isEnabled=\"{{ canUndo }}\"\n                    opacity=\"{{ canUndo ? 1 : 0.5 }}\"\n                    fontSize=\"24\"\n                    margin=\"0 4 8 4\" />\n                \n                <!-- Score Buttons -->\n                <GridLayout columns=\"*, *, *\" rows=\"auto, auto, auto, auto\" class=\"m-4\">\n                    <Button row=\"0\" col=\"0\" text=\"2\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                    <Button row=\"0\" col=\"1\" text=\"3\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"0\" col=\"2\" text=\"4\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    \n                    <Button row=\"1\" col=\"0\" text=\"5\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"1\" col=\"1\" text=\"6\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"1\" col=\"2\" text=\"7\" tap=\"{{ onScore }}\" class=\"{{ rollCount < 3 ? 'btn btn-primary' : 'btn btn-danger' }}\" />\n                    \n                    <Button row=\"2\" col=\"0\" text=\"8\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"2\" col=\"1\" text=\"9\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"2\" col=\"2\" text=\"10\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    \n                    <Button row=\"3\" col=\"0\" text=\"11\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"3\" col=\"1\" text=\"12\" tap=\"{{ onScore }}\" isEnabled=\"{{ rollCount < 3 }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                    <Button row=\"3\" col=\"2\" text=\"Doubles\" tap=\"{{ onDoubles }}\" isEnabled=\"{{ rollCount >= 3 }}\" class=\"{{ rollCount >= 3 ? 'btn btn-success' : 'btn btn-disabled' }}\" />\n                </GridLayout>\n\n                <!-- Players Section -->\n                <StackLayout>\n                    <Repeater items=\"{{ players }}\">\n                        <Repeater.itemTemplate>\n                            <GridLayout columns=\"auto, auto, auto, *, auto, auto\" class=\"player-status {{ isCurrentPlayer ? 'player-status-active' : '' }}\">\n                                <!-- Up/Down Arrows -->\n                                <StackLayout col=\"0\" orientation=\"horizontal\" visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\">\n                                    <Button text=\"↑\" \n                                        tap=\"{{ moveUp }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveUp ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveUp }}\"\n                                        fontSize=\"20\" />\n                                    <Button text=\"↓\" \n                                        tap=\"{{ moveDown }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveDown ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveDown }}\"\n                                        fontSize=\"20\" />\n                                </StackLayout>\n                                \n                                <!-- Edit Name Button -->\n                                <Button col=\"1\" \n                                    text=\"✏️\" \n                                    tap=\"{{ editName }}\" \n                                    class=\"btn-icon-compact\" \n                                    fontSize=\"16\"\n                                    visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\" />\n                                    \n                                <!-- Player Name and Score -->\n                                <Label col=\"2\" text=\"{{ name }}\" class=\"player-name\" />\n                                <Label col=\"3\" text=\"{{ totalScore }}\" class=\"player-score\" />\n                                \n                                <!-- Lock/Unlock Button -->\n                                <Button col=\"4\" \n                                    text=\"{{ isLocked ? (canUnlock ? 'Unlock' : 'Locked') : 'Lock' }}\" \n                                    tap=\"{{ isLocked ? (canUnlock ? unlock : null) : lock }}\"\n                                    class=\"{{ isLocked ? (canUnlock ? 'btn btn-success' : 'btn btn-disabled') : 'btn btn-primary' }}\"\n                                    isEnabled=\"{{ !isLocked || canUnlock }}\" />\n                                    \n                                <!-- Delete Button -->\n                                <Button col=\"5\" \n                                    text=\"✕\" \n                                    tap=\"{{ remove }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"#ef4444\"\n                                    fontSize=\"20\"\n                                    visibility=\"{{ isEditMode && canDelete ? 'visible' : 'collapsed' }}\" />\n                            </GridLayout>\n                        </Repeater.itemTemplate>\n                    </Repeater>\n                </StackLayout>\n            </StackLayout>\n        </ScrollView>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEI7O0FBRUEsc0NBQXNDLGtDQUFrQyxVQUFVLHFEQUFxRCxxRUFBcUUsRUFBRSxFQUFFLDhEQUE4RCxxRUFBcUUsRUFBRSxFQUFFLG9EQUFvRCx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSx1REFBdUQsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSxFQUFFLDJEQUEyRCxxRUFBcUUsRUFBRSxFQUFFLDZEQUE2RCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxFQUFFLHlEQUF5RCxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSx5RUFBeUUsRUFBRSxFQUFFLGlFQUFpRSxzREFBc0QsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSx5RUFBeUUsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSx3REFBd0QsRUFBRSxFQUFFLCtEQUErRCx3REFBd0QsRUFBRSxFQUFFLHlEQUF5RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSw4REFBOEQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLGtFQUFrRSwwREFBMEQsRUFBRSxFQUFFLDBEQUEwRCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLG1FQUFtRSx3REFBd0QsRUFBRSxFQUFFLHNEQUFzRCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSx1REFBdUQsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxFQUFFLCtEQUErRCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhEQUE4RCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSxzREFBc0QsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSx5REFBeUQsRUFBRSxzREFBc0QsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxzRUFBc0UsRUFBRSxFQUFFLHVFQUF1RSxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhEQUE4RCxtRUFBbUUsRUFBRSx1REFBdUQsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVFQUF1RSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLHNFQUFzRSxtRUFBbUUsRUFBRSxzREFBc0QsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSxxREFBcUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLCtFQUErRSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDREQUE0RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFFQUFxRSx3REFBd0QsRUFBRSxFQUFFLDZEQUE2RCwwREFBMEQsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHNFQUFzRSx3REFBd0QsRUFBRSxFQUFFLHFFQUFxRSxxRUFBcUUsRUFBRSwyREFBMkQsRUFBRSxpRUFBaUUsRUFBRSxFQUFFLDhFQUE4RSxxRUFBcUUs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S0FBMEssV0FBVyw2SEFBNkgsc0NBQXNDLDJEQUEyRCxjQUFjLDZTQUE2UyxPQUFPLG9MQUFvTCxhQUFhLHVQQUF1UCxTQUFTLG9iQUFvYixhQUFhLG9DQUFvQyx1REFBdUQsdUNBQXVDLGNBQWM7QUFDNW5ILGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQTtBQUNBLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSw4YUFBOGEsZUFBZSwwRUFBMEUsZUFBZSwwRUFBMEUsZUFBZSwwRUFBMEUsZUFBZTtBQUN4c0IsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLG9sQkFBb2xCLGVBQWUsMEhBQTBILGVBQWUsMEhBQTBILGVBQWUsMEhBQTBILGVBQWU7QUFDOS9CLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7O0FDSGhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9nYW1lLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUvZ2FtZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwL2FwcC50c1wiLFxuXHRcIi4vdmlld3MvZ2FtZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2dhbWUudHNcIixcblx0XCIuL3ZpZXdzL2dhbWUueG1sXCI6IFwiLi9hcHAvdmlld3MvZ2FtZS54bWxcIixcblx0XCIuL3ZpZXdzL2dhbWUvZ2FtZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2dhbWUvZ2FtZS50c1wiLFxuXHRcIi4vdmlld3MvZ2FtZS9nYW1lLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2dhbWUvZ2FtZS54bWxcIixcblx0XCIuL3ZpZXdzL2xhbmRpbmctcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvbGFuZGluZy1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnRzXCI6IFwiLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi50c1wiLFxuXHRcIi4vdmlld3MvcGxheWVyLXNlbGVjdGlvbi54bWxcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnhtbFwiLFxuXHRcIi4vdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnRzXCI6IFwiLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnRzXCIsXG5cdFwiLi92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24ueG1sXCI6IFwiLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnhtbFwiLFxuXHRcIi4vdmlld3MvcGxheWVyLXNlbGVjdGlvbi9yZW9yZGVyLW1vZGFsL3Jlb3JkZXItbW9kYWwudHNcIjogXCIuL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3Jlb3JkZXItbW9kYWwvcmVvcmRlci1tb2RhbC50c1wiLFxuXHRcIi4vdmlld3MvcGxheWVyLXNlbGVjdGlvbi9yZW9yZGVyLW1vZGFsL3Jlb3JkZXItbW9kYWwueG1sXCI6IFwiLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9yZW9yZGVyLW1vZGFsL3Jlb3JkZXItbW9kYWwueG1sXCIsXG5cdFwiLi92aWV3cy9yb3VuZC1zZWxlY3Rpb24udHNcIjogXCIuL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24udHNcIixcblx0XCIuL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi54bWxcIjogXCIuL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24ueG1sXCIsXG5cdFwiLi92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnRzXCI6IFwiLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi50c1wiLFxuXHRcIi4vdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi54bWxcIjogXCIuL2FwcC92aWV3cy9yb3VuZC1zZWxlY3Rpb24vcm91bmQtc2VsZWN0aW9uLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTsiLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmM2Y0ZjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1zdWNjZXNzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxMGI5ODFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRhbmdlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZWY0NDQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1kaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjOWNhM2FmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4taWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1pY29uLWNvbXBhY3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4td2lkdGhcIixcInZhbHVlXCI6XCIyOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFmMjkzN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjMyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE2IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAudGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnN1YnRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuc3VidGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZ2FtZS1pbmZvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOCAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmdhbWUtaW5mb1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y5ZmFmYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFmMjkzN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI1MDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzZiNzI4MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzc0MTUxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXQtY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjlmYWZiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjMyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM2YjcyODBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuaW5wdXQtY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzc0MTUxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1c1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20td2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5wbGF5ZXItc3RhdHVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNGI1NTYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1zdGF0dXMtY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXMtY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzc0MTUxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wbGF5ZXItbmFtZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFmMjkzN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1uYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wbGF5ZXItc2NvcmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5wbGF5ZXItc2NvcmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1zdGF0dXMtYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmM2Y0ZjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNiODJmNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5wbGF5ZXItc3RhdHVzLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNiODJmNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yZW9yZGVyLWhhbmRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzljYTNhZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hZC1jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuYWQtY29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiL1VzZXJzL2JuZWxzb24vUGVyc29uYWxEZXYvTG9ja05Sb2xsL2FwcC9hcHAuY3NzXCIpXG4iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuaW50ZXJmYWNlIFBsYXllciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRvdGFsU2NvcmU6IG51bWJlcjtcbiAgICBpc0xvY2tlZDogYm9vbGVhbjtcbiAgICBpc0N1cnJlbnRQbGF5ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGlmICghcGFnZS5iaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gYXJncy5jb250ZXh0IHx8IHt9O1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEdhbWVWaWV3TW9kZWwoY29udGV4dCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2NrVGFwKGFyZ3M6IGFueSkge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgY29uc3QgcGxheWVyID0gYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XG4gICAgdmlld01vZGVsLmxvY2tQbGF5ZXIocGxheWVyKTtcbn1cblxuY2xhc3MgR2FtZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3BsYXllcnM6IFBsYXllcltdID0gW107XG4gICAgcHJpdmF0ZSBfY3VycmVudFJvdW5kID0gMTtcbiAgICBwcml2YXRlIF90b3RhbFJvdW5kczogbnVtYmVyO1xuICAgIHByaXZhdGUgX3JvdW5kU2NvcmUgPSAwO1xuICAgIHByaXZhdGUgX3JvbGxDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllckluZGV4ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdG90YWxSb3VuZHMgPSBjb250ZXh0Py50b3RhbFJvdW5kcyB8fCAxMDtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZXMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IHBsYXllck5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdG90YWxTY29yZTogMCxcbiAgICAgICAgICAgIGlzTG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQ3VycmVudFBsYXllcjogaW5kZXggPT09IDBcbiAgICAgICAgfSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRSb3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRSb3VuZDtcbiAgICB9XG5cbiAgICBnZXQgcm91bmRTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmU7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleF0/Lm5hbWUgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRMZWFkZXIoKSB7XG4gICAgICAgIGxldCBoaWdoc2NvcmUgPSAwXG4gICAgICAgIGxldCBsZWFkZXIgPSAnJ1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIudG90YWxTY29yZSA+IGhpZ2hzY29yZSkge1xuICAgICAgICAgICAgICAgIGxlYWRlciA9IHBsYXllci5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhsZWFkZXIpXG4gICAgICAgIHJldHVybiBsZWFkZXIgfHwgJydcbiAgICB9XG5cbiAgICBnZXQgcm9sbENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sbENvdW50O1xuICAgIH1cblxuICAgIG9uU2NvcmUoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGJ1dHRvbi50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzV2l0aGluRmlyc3RUaHJlZSA9IHRoaXMuX3JvbGxDb3VudCA8IDM7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNXaXRoaW5GaXJzdFRocmVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDIgfHwgdmFsdWUgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSAxMDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Eb3VibGVzKCkge1xuICAgICAgICBpZiAodGhpcy5fcm9sbENvdW50ID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKj0gMjtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NrUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5maW5kSW5kZXgocCA9PiBwLm5hbWUgPT09IHBsYXllci5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSB8fCBwbGF5ZXIuaXNMb2NrZWQpIHJldHVybjtcblxuICAgICAgICBwbGF5ZXIudG90YWxTY29yZSArPSB0aGlzLl9yb3VuZFNjb3JlO1xuICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuYWxsUGxheWVyc0xvY2tlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRSb3VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRQbGF5ZXIoKSB7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAodGhpcy5fY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IGxvb3BDb3VudCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAodGhpcy5fcGxheWVyc1tuZXh0SW5kZXhdLmlzTG9ja2VkICYmIGxvb3BDb3VudCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSAobmV4dEluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGxvb3BDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobG9vcENvdW50IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbdGhpcy5fY3VycmVudFBsYXllckluZGV4XS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbdGhpcy5fY3VycmVudFBsYXllckluZGV4XS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRSb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFJvdW5kKys7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50Um91bmQgPiB0aGlzLl90b3RhbFJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBsYXllci5pc0N1cnJlbnRQbGF5ZXIgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWxsUGxheWVyc0xvY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMuZXZlcnkocGxheWVyID0+IHBsYXllci5pc0xvY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCkge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLl9wbGF5ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gXG4gICAgICAgICAgICAocHJldi50b3RhbFNjb3JlID4gY3VycmVudC50b3RhbFNjb3JlKSA/IHByZXYgOiBjdXJyZW50XG4gICAgICAgICk7XG4gICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhICR7d2lubmVyLm5hbWV9IHdpbnMgd2l0aCAke3dpbm5lci50b3RhbFNjb3JlfSBwb2ludHMhYCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRSb3VuZCcsIHRoaXMuX2N1cnJlbnRSb3VuZCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3JvdW5kU2NvcmUnLCB0aGlzLl9yb3VuZFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY3VycmVudFBsYXllcicsIHRoaXMuY3VycmVudFBsYXllcik7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRMZWFkZXInLCB0aGlzLmN1cnJlbnRMZWFkZXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyb2xsQ291bnQnLCB0aGlzLl9yb2xsQ291bnQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdwbGF5ZXJzJywgdGhpcy5fcGxheWVycyk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIE9ic2VydmFibGUsIE9ic2VydmFibGVBcnJheSwgRnJhbWUsIHByb21wdCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmludGVyZmFjZSBNb3ZlIHtcbiAgICB0eXBlOiAncm9sbCcgfCAnZG91YmxlcycgfCAnbG9jayc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBwbGF5ZXJJbmRleDogbnVtYmVyO1xuICAgIHJvdW5kU2NvcmU6IG51bWJlcjtcbiAgICByb2xsQ291bnQ6IG51bWJlcjtcbiAgICB3YXNDdXJyZW50UGxheWVyPzogYm9vbGVhbjtcbn1cblxuY2xhc3MgUGxheWVyVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3RvdGFsU2NvcmU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pc0xvY2tlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc0N1cnJlbnRQbGF5ZXI6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfbGFzdExvY2tlZFNjb3JlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbG9ja2VkVGhpc1JvbGw6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfbG9ja1JvbGxDb3VudDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2dhbWVWaWV3TW9kZWw6IEdhbWVWaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGdhbWVWaWV3TW9kZWw6IEdhbWVWaWV3TW9kZWwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3RvdGFsU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9pc0xvY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbGFzdExvY2tlZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IC0xO1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsID0gZ2FtZVZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBnZXQgdG90YWxTY29yZSgpIHsgcmV0dXJuIHRoaXMuX3RvdGFsU2NvcmU7IH1cbiAgICBnZXQgaXNMb2NrZWQoKSB7IHJldHVybiB0aGlzLl9pc0xvY2tlZDsgfVxuICAgIGdldCBpc0N1cnJlbnRQbGF5ZXIoKSB7IHJldHVybiB0aGlzLl9pc0N1cnJlbnRQbGF5ZXI7IH1cbiAgICBnZXQgY2FuVW5sb2NrKCkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2tlZFRoaXNSb2xsICYmIFxuICAgICAgICAgICAgICAgIXRoaXMuX2dhbWVWaWV3TW9kZWwuaXNMYXN0UGxheWVyVG9Mb2NrKHRoaXMpICYmIFxuICAgICAgICAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9PT0gdGhpcy5fZ2FtZVZpZXdNb2RlbC5yb2xsQ291bnQ7XG4gICAgfVxuICAgIGdldCBjYW5EZWxldGUoKSB7IHJldHVybiB0aGlzLl9nYW1lVmlld01vZGVsLmNhbkRlbGV0ZVBsYXllcnM7IH1cbiAgICBnZXQgY2FuTW92ZVVwKCkgeyByZXR1cm4gIXRoaXMuX2lzQ3VycmVudFBsYXllciAmJiB0aGlzLl9nYW1lVmlld01vZGVsLmNhbk1vdmVQbGF5ZXJVcCh0aGlzKTsgfVxuICAgIGdldCBjYW5Nb3ZlRG93bigpIHsgcmV0dXJuICF0aGlzLl9pc0N1cnJlbnRQbGF5ZXIgJiYgdGhpcy5fZ2FtZVZpZXdNb2RlbC5jYW5Nb3ZlUGxheWVyRG93bih0aGlzKTsgfVxuICAgIGdldCBpc0VkaXRNb2RlKCkgeyByZXR1cm4gdGhpcy5fZ2FtZVZpZXdNb2RlbC5pc0VkaXRNb2RlOyB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCB0b3RhbFNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RvdGFsU2NvcmUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90b3RhbFNjb3JlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbFNjb3JlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGlzTG9ja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvY2tlZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTG9ja2VkID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gdGhpcy5fZ2FtZVZpZXdNb2RlbC5yb2xsQ291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzTG9ja2VkJywgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5sb2NrJywgdGhpcy5jYW5VbmxvY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGlzQ3VycmVudFBsYXllcih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5faXNDdXJyZW50UGxheWVyICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNDdXJyZW50UGxheWVyID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpc0N1cnJlbnRQbGF5ZXInLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlVXAnLCB0aGlzLmNhbk1vdmVVcCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlRG93bicsIHRoaXMuY2FuTW92ZURvd24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdE5hbWUoKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwuZWRpdFBsYXllck5hbWUodGhpcyk7XG4gICAgfVxuXG4gICAgbG9jaygpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5sb2NrUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIHVubG9jaygpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC51bmxvY2tQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLmRlbGV0ZVBsYXllcih0aGlzKTtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwubW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLm1vdmVQbGF5ZXJEb3duKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9yTmV3Um91bmQoKSB7XG4gICAgICAgIHRoaXMuX2lzTG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xhc3RMb2NrZWRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSAtMTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNMb2NrZWQnLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIGZhbHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYW5EZWxldGUoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhbkRlbGV0ZScsIHRoaXMuY2FuRGVsZXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYW5VbmxvY2soKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIHRoaXMuY2FuVW5sb2NrKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb3ZlQnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZVVwJywgdGhpcy5jYW5Nb3ZlVXApO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlRG93bicsIHRoaXMuY2FuTW92ZURvd24pO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRNb2RlKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpc0VkaXRNb2RlJywgdGhpcy5pc0VkaXRNb2RlKTtcbiAgICB9XG5cbiAgICBhZGRTY29yZShzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICAgIHRoaXMuX2xhc3RMb2NrZWRTY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSB0aGlzLl9nYW1lVmlld01vZGVsLnJvbGxDb3VudDtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxTY29yZScsIHRoaXMuX3RvdGFsU2NvcmUpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCB0aGlzLmNhblVubG9jayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlU2NvcmUoKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsU2NvcmUgLT0gdGhpcy5fbGFzdExvY2tlZFNjb3JlO1xuICAgICAgICB0aGlzLl9sYXN0TG9ja2VkU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gLTE7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsU2NvcmUnLCB0aGlzLl90b3RhbFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5sb2NrJywgdGhpcy5jYW5VbmxvY2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGV4dCA9IGFyZ3MuY29udGV4dCB8fCB7fTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEdhbWVWaWV3TW9kZWwoY29udGV4dCk7XG59XG5cbmNsYXNzIEdhbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVyVmlld01vZGVsPjtcbiAgICBwcml2YXRlIF9jdXJyZW50Um91bmQgPSAxO1xuICAgIHByaXZhdGUgX3RvdGFsUm91bmRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcm91bmRTY29yZSA9IDA7XG4gICAgcHJpdmF0ZSBfcm9sbENvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgIHByaXZhdGUgX21vdmVIaXN0b3J5OiBNb3ZlW10gPSBbXTtcbiAgICBwcml2YXRlIF9pc0VkaXRNb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWVWaWV3TW9kZWwgY29uc3RydWN0b3IgY2FsbGVkIHdpdGggY29udGV4dDonLCBjb250ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3RvdGFsUm91bmRzID0gY29udGV4dD8udG90YWxSb3VuZHMgfHwgMTA7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gY29udGV4dD8ucGxheWVycyB8fCBbXTtcbiAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyB3aXRoIHBsYXllciBuYW1lczonLCBwbGF5ZXJOYW1lcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IE9ic2VydmFibGVBcnJheTxQbGF5ZXJWaWV3TW9kZWw+KCk7XG4gICAgICAgIHBsYXllck5hbWVzLmZvckVhY2goKG5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllclZpZXdNb2RlbChuYW1lLCB0aGlzKTtcbiAgICAgICAgICAgIHBsYXllci5pc0N1cnJlbnRQbGF5ZXIgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXJzIGluaXRpYWxpemVkOicsIHRoaXMuX3BsYXllcnMpO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJzKCkgeyByZXR1cm4gdGhpcy5fcGxheWVyczsgfVxuICAgIGdldCBjdXJyZW50Um91bmQoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50Um91bmQ7IH1cbiAgICBnZXQgcm91bmRTY29yZSgpIHsgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmU7IH1cbiAgICBnZXQgY3VycmVudFBsYXllcigpIHsgcmV0dXJuIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpPy5uYW1lIHx8ICcnOyB9XG4gICAgZ2V0IHJvbGxDb3VudCgpIHsgcmV0dXJuIHRoaXMuX3JvbGxDb3VudDsgfVxuICAgIGdldCBjYW5EZWxldGVQbGF5ZXJzKCkgeyByZXR1cm4gdGhpcy5fcm91bmRTY29yZSA9PT0gMCAmJiB0aGlzLl9yb2xsQ291bnQgPT09IDAgJiYgdGhpcy5fcGxheWVycy5sZW5ndGggPiAyOyB9XG4gICAgZ2V0IGNhblVuZG8oKSB7IHJldHVybiB0aGlzLl9tb3ZlSGlzdG9yeS5sZW5ndGggPiAwOyB9XG4gICAgZ2V0IGlzRWRpdE1vZGUoKSB7IHJldHVybiB0aGlzLl9pc0VkaXRNb2RlOyB9XG4gICAgZ2V0IGN1cnJlbnRMZWFkZXIoKSB7XG4gICAgICAgIGxldCBoaWdoc2NvcmUgPSAwXG4gICAgICAgIGxldCBsZWFkZXIgPSAnJ1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIudG90YWxTY29yZSA+IGhpZ2hzY29yZSkge1xuICAgICAgICAgICAgICAgIGxlYWRlciA9IHBsYXllci5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGVhZGVyIHx8ICcnXG4gICAgfVxuXG4gICAgdG9nZ2xlRWRpdE1vZGUoKSB7XG4gICAgICAgIHRoaXMuX2lzRWRpdE1vZGUgPSAhdGhpcy5faXNFZGl0TW9kZTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNFZGl0TW9kZScsIHRoaXMuX2lzRWRpdE1vZGUpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci51cGRhdGVFZGl0TW9kZSgpKTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmUgPT09IDAgJiYgdGhpcy5fcm9sbENvdW50ID09PSAwICYmIHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpID4gMDtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyRG93bihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91bmRTY29yZSA9PT0gMCAmJiB0aGlzLl9yb2xsQ291bnQgPT09IDAgJiYgdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcikgPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllclVwKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlUGxheWVyVXAocGxheWVyKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGNvbnN0IHdhc0N1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIuaXNDdXJyZW50UGxheWVyO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCAtIDEsIDAsIHBsYXllcik7XG4gICAgICAgIFxuICAgICAgICBpZiAod2FzQ3VycmVudFBsYXllcikge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbk1vdmVQbGF5ZXJEb3duKHBsYXllcikpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBjb25zdCB3YXNDdXJyZW50UGxheWVyID0gcGxheWVyLmlzQ3VycmVudFBsYXllcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXggKyAxLCAwLCBwbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIGlzTGFzdFBsYXllclRvTG9jayhwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBsb2NrZWRDb3VudCA9IHRoaXMuX3BsYXllcnMuZmlsdGVyKHAgPT4gcC5pc0xvY2tlZCkubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbG9ja2VkQ291bnQgPT09IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSAmJiAhcGxheWVyLmlzTG9ja2VkO1xuICAgIH1cblxuICAgIGVkaXRQbGF5ZXJOYW1lKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFZGl0IFBsYXllciBOYW1lXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIG5ldyBuYW1lIGZvciBcIiArIHBsYXllci5uYW1lLFxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IHBsYXllci5uYW1lLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNhdmVcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCAmJiByZXN1bHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TY29yZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoYnV0dG9uLnRleHQpO1xuICAgICAgICBsZXQgc2NvcmVUb0FkZCA9IDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1dpdGhpbkZpcnN0VGhyZWUgPSB0aGlzLl9yb2xsQ291bnQgPCAzO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzV2l0aGluRmlyc3RUaHJlZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSBzY29yZVRvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gc2NvcmVUb0FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAncm9sbCcsXG4gICAgICAgICAgICBzY29yZTogc2NvcmVUb0FkZCxcbiAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgsXG4gICAgICAgICAgICByb3VuZFNjb3JlOiB0aGlzLl9yb3VuZFNjb3JlIC0gc2NvcmVUb0FkZCxcbiAgICAgICAgICAgIHJvbGxDb3VudDogdGhpcy5fcm9sbENvdW50XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMubmV4dFBsYXllcigpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG9uRG91YmxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JvbGxDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRTY29yZSA9IHRoaXMuX3JvdW5kU2NvcmU7XG4gICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX21vdmVIaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkb3VibGVzJyxcbiAgICAgICAgICAgICAgICBzY29yZTogdGhpcy5fcm91bmRTY29yZSAtIG9sZFNjb3JlLFxuICAgICAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgsXG4gICAgICAgICAgICAgICAgcm91bmRTY29yZTogb2xkU2NvcmUsXG4gICAgICAgICAgICAgICAgcm9sbENvdW50OiB0aGlzLl9yb2xsQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVIaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gdGhpcy5fbW92ZUhpc3RvcnkucG9wKCk7XG4gICAgICAgIGlmICghbGFzdE1vdmUpIHJldHVybjtcblxuICAgICAgICBpZiAobGFzdE1vdmUudHlwZSA9PT0gJ2xvY2snKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0obGFzdE1vdmUucGxheWVySW5kZXgpO1xuICAgICAgICAgICAgaWYgKGxhc3RNb3ZlLndhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSBsYXN0TW92ZS5wbGF5ZXJJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bmxvY2tQbGF5ZXIocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gbGFzdE1vdmUucGxheWVySW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IGxhc3RNb3ZlLnJvdW5kU2NvcmU7XG4gICAgICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSBsYXN0TW92ZS5yb2xsQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQbGF5ZXJzID0gdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7IHByZXZpb3VzUGxheWVycyB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY2tQbGF5ZXIocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKHBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHdhc0N1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIuaXNDdXJyZW50UGxheWVyO1xuICAgICAgICBwbGF5ZXIuYWRkU2NvcmUodGhpcy5fcm91bmRTY29yZSk7XG4gICAgICAgIHBsYXllci5pc0xvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbG9jaycsXG4gICAgICAgICAgICBzY29yZTogdGhpcy5fcm91bmRTY29yZSxcbiAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSxcbiAgICAgICAgICAgIHJvdW5kU2NvcmU6IHRoaXMuX3JvdW5kU2NvcmUsXG4gICAgICAgICAgICByb2xsQ291bnQ6IHRoaXMuX3JvbGxDb3VudCxcbiAgICAgICAgICAgIHdhc0N1cnJlbnRQbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maW5kTmV4dFVubG9ja2VkUGxheWVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBsYXllckluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHVubG9ja1BsYXllcihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIXBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIHBsYXllci5yZW1vdmVTY29yZSgpO1xuICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJJbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBjb25zdCBsYXN0TG9ja01vdmUgPSBbLi4udGhpcy5fbW92ZUhpc3RvcnldLnJldmVyc2UoKS5maW5kKFxuICAgICAgICAgICAgbW92ZSA9PiBtb3ZlLnR5cGUgPT09ICdsb2NrJyAmJiBtb3ZlLnBsYXllckluZGV4ID09PSBwbGF5ZXJJbmRleFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChsYXN0TG9ja01vdmU/Lndhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gcGxheWVySW5kZXg7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUGxheWVyKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5EZWxldGVQbGF5ZXJzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5fY3VycmVudFBsYXllckluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSAodGhpcy5fY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4LS07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fcGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpbmROZXh0VW5sb2NrZWRQbGF5ZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kTmV4dFVubG9ja2VkUGxheWVyKCkge1xuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggIT09IHN0YXJ0SW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmFsbFBsYXllcnNMb2NrZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFJvdW5kKCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50Um91bmQrKztcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3VuZCA+IHRoaXMuX3RvdGFsUm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYFN0YXJ0aW5nIHJvdW5kICR7dGhpcy5fY3VycmVudFJvdW5kfWApO1xuICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fcm9sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIENvbnRpbnVlIHdpdGggbmV4dCBwbGF5ZXIgaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gZmlyc3RcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5yZXNldEZvck5ld1JvdW5kKCk7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gaW5kZXggPT09IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyU3RhdGVzKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVDYW5EZWxldGUoKTtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVDYW5VbmxvY2soKTtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVNb3ZlQnV0dG9ucygpO1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZUVkaXRNb2RlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWxsUGxheWVyc0xvY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMuZXZlcnkocGxheWVyID0+IHBsYXllci5pc0xvY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCkge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLl9wbGF5ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gXG4gICAgICAgICAgICAocHJldi50b3RhbFNjb3JlID4gY3VycmVudC50b3RhbFNjb3JlKSA/IHByZXYgOiBjdXJyZW50XG4gICAgICAgICk7XG4gICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhICR7d2lubmVyLm5hbWV9IHdpbnMgd2l0aCAke3dpbm5lci50b3RhbFNjb3JlfSBwb2ludHMhYCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRSb3VuZCcsIHRoaXMuX2N1cnJlbnRSb3VuZCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3JvdW5kU2NvcmUnLCB0aGlzLl9yb3VuZFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY3VycmVudFBsYXllcicsIHRoaXMuY3VycmVudFBsYXllcik7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRMZWFkZXInLCB0aGlzLmN1cnJlbnRMZWFkZXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyb2xsQ291bnQnLCB0aGlzLl9yb2xsQ291bnQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmRvJywgdGhpcy5jYW5VbmRvKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuRGVsZXRlUGxheWVycycsIHRoaXMuY2FuRGVsZXRlUGxheWVycyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllcnMnLCB0aGlzLl9wbGF5ZXJzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExhbmRpbmdWaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgTGFuZGluZ1ZpZXdNb2RlbCB7XG4gICAgb25OZXdHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBwbGF5ZXIgc2VsZWN0aW9uJyk7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMYW5kaW5nVmlld01vZGVsKCk7XG59XG5cbmNsYXNzIExhbmRpbmdWaWV3TW9kZWwge1xuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gcGxheWVyIHNlbGVjdGlvbicpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlQXJyYXksIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogT2JzZXJ2YWJsZUFycmF5PHsgbmFtZTogc3RyaW5nIH0+O1xuICAgIHByaXZhdGUgX3BsYXllck5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IE9ic2VydmFibGVBcnJheTx7IG5hbWU6IHN0cmluZyB9PigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyTmFtZTtcbiAgICB9XG5cbiAgICBzZXQgcGxheWVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJOYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncGxheWVyTmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMucHVzaCh7IG5hbWU6IHRoaXMucGxheWVyTmFtZS50cmltKCkgfSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29udGludWUoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3Mvcm91bmQtc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgcGxheWVyczogdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIE9ic2VydmFibGUsIE9ic2VydmFibGVBcnJheSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5jbGFzcyBQbGF5ZXJJdGVtIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ZpZXdNb2RlbDogUGxheWVyU2VsZWN0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2aWV3TW9kZWw6IFBsYXllclNlbGVjdGlvblZpZXdNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdmlld01vZGVsID0gdmlld01vZGVsO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYW5Nb3ZlVXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3TW9kZWwuY2FuTW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBjYW5Nb3ZlRG93bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNb2RlbC5jYW5Nb3ZlUGxheWVyRG93bih0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbC5yZW1vdmVQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwubW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwubW92ZVBsYXllckRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlTmFtZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSB0ZXh0RmllbGQudGV4dC50cmltKCk7XG4gICAgICAgIGlmIChuZXdOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBjb250ZXh0ID0gYXJncy5jb250ZXh0IHx8IHt9O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsKGNvbnRleHQpO1xufVxuXG5jbGFzcyBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVySXRlbT47XG4gICAgcHJpdmF0ZSBfcGxheWVyTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBsYXllckl0ZW0+KCk7XG4gICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSAnJztcblxuICAgICAgICAvLyBBZGQgcHJldmlvdXMgcGxheWVycyBpZiB0aGV5IGV4aXN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVycyA9IGNvbnRleHQ/LnByZXZpb3VzUGxheWVycyB8fCBbXTtcbiAgICAgICAgcHJldmlvdXNQbGF5ZXJzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllckl0ZW0obmFtZSwgdGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllck5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJOYW1lO1xuICAgIH1cblxuICAgIGdldCBjYW5Db250aW51ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMubGVuZ3RoID49IDI7XG4gICAgfVxuXG4gICAgc2V0IHBsYXllck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyTmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllck5hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllck5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllckl0ZW0odGhpcy5wbGF5ZXJOYW1lLnRyaW0oKSwgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gJyc7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Db250aW51ZScsIHRoaXMuY2FuQ29udGludWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBsYXllcihwbGF5ZXI6IFBsYXllckl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuQ29udGludWUnLCB0aGlzLmNhbkNvbnRpbnVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA+IDA7XG4gICAgfVxuXG4gICAgY2FuTW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA8IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJJdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4IC0gMSwgMCwgcGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyRG93bihwbGF5ZXI6IFBsYXllckl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCArIDEsIDAsIHBsYXllcik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGF5ZXJTdGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgcGxheWVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlVXAnLCBwbGF5ZXIuY2FuTW92ZVVwKTtcbiAgICAgICAgICAgIHBsYXllci5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCBwbGF5ZXIuY2FuTW92ZURvd24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvbnRpbnVlKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5Db250aW51ZSkge1xuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGlvbkNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyIFNlbGVjdGlvbiBuYXZpZ2F0aW5nIHdpdGggY29udGV4dDonLCBuYXZpZ2F0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG5hdmlnYXRpb25Db250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUm91bmRTZWxlY3Rpb25WaWV3TW9kZWwocGFnZS5uYXZpZ2F0aW9uQ29udGV4dCk7XG59XG5cbmNsYXNzIFJvdW5kU2VsZWN0aW9uVmlld01vZGVsIHtcbiAgICBwcml2YXRlIHBsYXllcnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3VuZFNlbGVjdGlvbiBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgIH1cblxuICAgIHNlbGVjdFJvdW5kcyhhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHJvdW5kcyA9IHBhcnNlSW50KGJ1dHRvbi50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGdhbWUgd2l0aDonLCB7XG4gICAgICAgICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMsXG4gICAgICAgICAgICB0b3RhbFJvdW5kczogcm91bmRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvZ2FtZScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLFxuICAgICAgICAgICAgICAgIHRvdGFsUm91bmRzOiByb3VuZHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGV4dCA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgY29uc29sZS5sb2coJ1JvdW5kIFNlbGVjdGlvbiByZWNlaXZlZCBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUm91bmRTZWxlY3Rpb25WaWV3TW9kZWwoY29udGV4dCk7XG59XG5cbmNsYXNzIFJvdW5kU2VsZWN0aW9uVmlld01vZGVsIHtcbiAgICBwcml2YXRlIHBsYXllcnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3VuZFNlbGVjdGlvbiBjb25zdHJ1Y3RvciBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVycyBpbiByb3VuZCBzZWxlY3Rpb246JywgdGhpcy5wbGF5ZXJzKTtcbiAgICB9XG5cbiAgICBzZWxlY3RSb3VuZHMoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCByb3VuZHMgPSBwYXJzZUludChidXR0b24udGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHBsYXllcnM6IHRoaXMucGxheWVycyxcbiAgICAgICAgICAgIHRvdGFsUm91bmRzOiByb3VuZHNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGdhbWUgd2l0aCBjb250ZXh0OicsIG5hdmlnYXRpb25Db250ZXh0KTtcblxuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL2dhbWUvZ2FtZScsXG4gICAgICAgICAgICBjb250ZXh0OiBuYXZpZ2F0aW9uQ29udGV4dCxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48RnJhbWUgZGVmYXVsdFBhZ2U9XFxcInZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2VcXFwiIC8+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTG9jayBOJyBSb2xsXFxcIiAvPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ1JvdW5kICcgKyBjdXJyZW50Um91bmQgfX1cXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ0N1cnJlbnQgUGxheWVyOiAnICsgY3VycmVudFBsYXllciB9fVxcXCIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgU2NvcmU6ICcgKyByb3VuZFNjb3JlIH19XFxcIiBjbGFzcz1cXFwic3VidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjJcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPCAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50IDwgMyA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIzXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjRcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjVcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiNlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI3XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tcHJpbWFyeScgOiAnYnRuIGJ0bi1kYW5nZXInIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiOFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCI5XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIxMVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIxMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA8IDMgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIzXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIkRvdWJsZXNcXFwiIHRhcD1cXFwie3sgb25Eb3VibGVzIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA+PSAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50ID49IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTQgcC0yIGJnLXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgYXV0b1xcXCIgY2xhc3M9XFxcInBsYXllci1zdGF0dXMge3sgaXNDdXJyZW50UGxheWVyID8gJ3BsYXllci1zdGF0dXMtYWN0aXZlJyA6ICcnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1uYW1lXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyB0b3RhbFNjb3JlIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLXNjb3JlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgaXNMb2NrZWQgPyAnTG9ja2VkJyA6ICdMb2NrJyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyAkcGFyZW50c1snUGFnZSddLm9uTG9ja1RhcCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNMb2NrZWQgPyAnYnRuIGJ0bi1kaXNhYmxlZCcgOiAnYnRuIGJ0bi1wcmltYXJ5JyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7ICFpc0xvY2tlZCB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiPlxcbiAgICAgICAgPEFjdGlvbkl0ZW0gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCIgLz5cXG4gICAgICAgIDxBY3Rpb25JdGVtIHRleHQ9XFxcInt7IGlzRWRpdE1vZGUgPyAnRG9uZScgOiAnRWRpdCcgfX1cXFwiIHRhcD1cXFwie3sgdG9nZ2xlRWRpdE1vZGUgfX1cXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiPlxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgJyArIGN1cnJlbnRSb3VuZCB9fVxcXCIgY2xhc3M9XFxcImdhbWUtaW5mb1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdDdXJyZW50IFBsYXllcjogJyArIGN1cnJlbnRQbGF5ZXIgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnTGVhZGVyOiAnICsgY3VycmVudExlYWRlciB9fVxcXCIgY2xhc3M9XFxcImdhbWUtaW5mb1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdSb3VuZCBTY29yZTogJyArIHJvdW5kU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFVuZG8gQnV0dG9uIC0tPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIuKGqe+4j1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG9uVW5kbyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhblVuZG8gfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVxcXCJ7eyBjYW5VbmRvID8gMSA6IDAuNSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIyNFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cXFwiMCA0IDggNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gU2NvcmUgQnV0dG9ucyAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIyXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGlzRW5hYmxlZD1cXFwie3sgcm9sbENvdW50IDwgMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA8IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjNcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjRcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiNVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiNlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwiN1xcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50IDwgMyA/ICdidG4gYnRuLXByaW1hcnknIDogJ2J0biBidG4tZGFuZ2VyJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiOFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiOVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwiMTBcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiMTFcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjEyXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGlzRW5hYmxlZD1cXFwie3sgcm9sbENvdW50IDwgMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA8IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIzXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIkRvdWJsZXNcXFwiIHRhcD1cXFwie3sgb25Eb3VibGVzIH19XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHJvbGxDb3VudCA+PSAzIH19XFxcIiBjbGFzcz1cXFwie3sgcm9sbENvdW50ID49IDMgPyAnYnRuIGJ0bi1zdWNjZXNzJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFBsYXllcnMgU2VjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqLCBhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicGxheWVyLXN0YXR1cyB7eyBpc0N1cnJlbnRQbGF5ZXIgPyAncGxheWVyLXN0YXR1cy1hY3RpdmUnIDogJycgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVcC9Eb3duIEFycm93cyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBpc0VkaXRNb2RlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaRXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBtb3ZlVXAgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjYW5Nb3ZlVXAgPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuTW92ZVVwIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihpNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG1vdmVEb3duIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZURvd24gPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuTW92ZURvd24gfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIyMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWRpdCBOYW1lIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCLinI/vuI9cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgZWRpdE5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eT1cXFwie3sgaXNFZGl0TW9kZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQbGF5ZXIgTmFtZSBhbmQgU2NvcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLW5hbWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIzXFxcIiB0ZXh0PVxcXCJ7eyB0b3RhbFNjb3JlIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLXNjb3JlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExvY2svVW5sb2NrIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCI0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBpc0xvY2tlZCA/IChjYW5VbmxvY2sgPyAnVW5sb2NrJyA6ICdMb2NrZWQnKSA6ICdMb2NrJyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBpc0xvY2tlZCA/IChjYW5VbmxvY2sgPyB1bmxvY2sgOiBudWxsKSA6IGxvY2sgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGlzTG9ja2VkID8gKGNhblVubG9jayA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnKSA6ICdidG4gYnRuLXByaW1hcnknIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgIWlzTG9ja2VkIHx8IGNhblVubG9jayB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGVsZXRlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCI1XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCLinJVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgcmVtb3ZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIiNlZjQ0NDRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk9XFxcInt7IGlzRWRpdE1vZGUgJiYgY2FuRGVsZXRlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgICAgIDwhLS0gQWQgU3BhY2UgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYWQtY29udGFpbmVyXFxcIiAvPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvY2sgTicgUm9sbFxcXCIgLz5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxvY2sgTicgUm9sbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOZXcgR2FtZVxcXCIgdGFwPVxcXCJ7eyBvbk5ld0dhbWUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvY2sgTicgUm9sbFxcXCIgLz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gTG9nbyAtLT5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L3ZpZXdzL2Fzc2V0cy9sb2dvLnBuZ1xcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgbWFyZ2luPVxcXCIzMlxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9jayBOJyBSb2xsXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOZXcgR2FtZVxcXCIgdGFwPVxcXCJ7eyBvbk5ld0dhbWUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiMTZcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPCEtLSBBZCBTcGFjZSAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJhZC1jb250YWluZXJcXFwiIC8+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQWRkIFBsYXllcnNcXFwiIC8+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY29sPVxcXCIwXFxcIiBoaW50PVxcXCJFbnRlciBwbGF5ZXIgbmFtZVxcXCIgdGV4dD1cXFwie3sgcGxheWVyTmFtZSB9fVxcXCIgY2xhc3M9XFxcImlucHV0XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJBZGRcXFwiIHRhcD1cXFwie3sgYWRkUGxheWVyIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIGNsYXNzPVxcXCJwbGF5ZXItbmFtZSBwLTJcXFwiIC8+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L0xpc3RWaWV3PlxcblxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJDb250aW51ZVxcXCIgdGFwPVxcXCJ7eyBvbkNvbnRpbnVlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBpc0VuYWJsZWQ9XFxcInt7IHBsYXllcnMubGVuZ3RoID4gMSB9fVxcXCIgLz5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQWRkIFBsYXllcnNcXFwiIC8+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiPlxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBZGQgUGxheWVyc1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWRkIGF0IGxlYXN0IDIgcGxheWVycyB0byBjb250aW51ZVxcXCIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cXFwiMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgcGxheWVyIG5hbWVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IHBsYXllck5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M9XFxcInt7IGFkZFBsYXllciB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiQWRkXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IGFkZFBsYXllciB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBwbGF5ZXJOYW1lLmxlbmd0aCA+IDAgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBQbGF5ZXJzIExpc3QgLS0+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgcGxheWVycyB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcInBsYXllci1zdGF0dXMtY29tcGFjdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFVwL0Rvd24gQXJyb3dzIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cXFwiMFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaRXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBtb3ZlVXAgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjYW5Nb3ZlVXAgPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuTW92ZVVwIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihpNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG1vdmVEb3duIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZURvd24gPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuTW92ZURvd24gfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIyMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUGxheWVyIE5hbWUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cXFwiMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M9XFxcInt7IHVwZGF0ZU5hbWUgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlbGV0ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiM1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwi4pyVXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IHJlbW92ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjZWY0NDQ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIxNlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIkNvbnRpbnVlXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25Db250aW51ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgY2FuQ29udGludWUgPyAnYnRuIGJ0bi1wcmltYXJ5JyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuQ29udGludWUgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XFxcIjE2IDRcXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgICAgIDwhLS0gQWQgU3BhY2UgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYWQtY29udGFpbmVyXFxcIiAvPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiXCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiU2VsZWN0IFJvdW5kc1xcXCIgLz5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNlbGVjdCBOdW1iZXIgb2YgUm91bmRzXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiIC8+XFxuICAgICAgICA8V3JhcExheW91dCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMTBcXFwiIHRhcD1cXFwie3sgc2VsZWN0Um91bmRzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMTVcXFwiIHRhcD1cXFwie3sgc2VsZWN0Um91bmRzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMjBcXFwiIHRhcD1cXFwie3sgc2VsZWN0Um91bmRzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMjVcXFwiIHRhcD1cXFwie3sgc2VsZWN0Um91bmRzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgPC9XcmFwTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJTZWxlY3QgUm91bmRzXFxcIiAvPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWxlY3QgTnVtYmVyIG9mIFJvdW5kc1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb3cgbWFueSByb3VuZHMgd291bGQgeW91IGxpa2UgdG8gcGxheT9cXFwiIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8V3JhcExheW91dCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luPVxcXCI4XFxcIiBwYWRkaW5nPVxcXCIyMFxcXCIgZm9udFNpemU9XFxcIjI0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjE1XFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luPVxcXCI4XFxcIiBwYWRkaW5nPVxcXCIyMFxcXCIgZm9udFNpemU9XFxcIjI0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjIwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luPVxcXCI4XFxcIiBwYWRkaW5nPVxcXCIyMFxcXCIgZm9udFNpemU9XFxcIjI0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjI1XFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luPVxcXCI4XFxcIiBwYWRkaW5nPVxcXCIyMFxcXCIgZm9udFNpemU9XFxcIjI0XFxcIiAvPlxcbiAgICAgICAgICAgIDwvV3JhcExheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8IS0tIEFkIFNwYWNlIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImFkLWNvbnRhaW5lclxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=