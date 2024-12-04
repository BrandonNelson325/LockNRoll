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
	"./views/round-selection/round-selection.xml": "./app/views/round-selection/round-selection.xml",
	"./views/rules/rules.ts": "./app/views/rules/rules.ts",
	"./views/rules/rules.xml": "./app/views/rules/rules.xml"
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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"#f3f4f6"}]},{"type":"rule","selectors":[".ns-dark .page"],"declarations":[{"type":"declaration","property":"background-color","value":"#1f2937"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".btn-success"],"declarations":[{"type":"declaration","property":"background-color","value":"#10b981"}]},{"type":"rule","selectors":[".btn-danger"],"declarations":[{"type":"declaration","property":"background-color","value":"#ef4444"}]},{"type":"rule","selectors":[".btn-warning"],"declarations":[{"type":"declaration","property":"background-color","value":"#f59e0b"}]},{"type":"rule","selectors":[".btn-info"],"declarations":[{"type":"declaration","property":"background-color","value":"#06b6d4"}]},{"type":"rule","selectors":[".btn-secondary"],"declarations":[{"type":"declaration","property":"background-color","value":"#6b7280"}]},{"type":"rule","selectors":[".btn-purple"],"declarations":[{"type":"declaration","property":"background-color","value":"blueviolet"}]},{"type":"rule","selectors":[".btn-pink"],"declarations":[{"type":"declaration","property":"background-color","value":"#ec4899"}]},{"type":"rule","selectors":[".btn-disabled"],"declarations":[{"type":"declaration","property":"background-color","value":"#9ca3af"},{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":[".btn-icon"],"declarations":[{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"40"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".btn-icon-compact"],"declarations":[{"type":"declaration","property":"padding","value":"2"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"28"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".title"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"32"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"16 0"}]},{"type":"rule","selectors":[".ns-dark .title"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".subtitle"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"8 0"}]},{"type":"rule","selectors":[".ns-dark .subtitle"],"declarations":[{"type":"declaration","property":"color","value":"#e5e7eb"}]},{"type":"rule","selectors":[".game-info"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin","value":"8 0"}]},{"type":"rule","selectors":[".ns-dark .game-info"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".input"],"declarations":[{"type":"declaration","property":"background-color","value":"#f9fafb"},{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"placeholder-color","value":"#6b7280"}]},{"type":"rule","selectors":[".ns-dark .input"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".input-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#f9fafb"},{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"padding","value":"4"},{"type":"declaration","property":"border-radius","value":"6"},{"type":"declaration","property":"margin","value":"2"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"height","value":"32"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"placeholder-color","value":"#6b7280"}]},{"type":"rule","selectors":[".ns-dark .input-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-status"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"margin","value":"4"},{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".ns-dark .player-status"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-status-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"4"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e5e7eb"},{"type":"declaration","property":"margin","value":"1"},{"type":"declaration","property":"border-radius","value":"6"}]},{"type":"rule","selectors":[".ns-dark .player-status-compact"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"},{"type":"declaration","property":"border-color","value":"#4b5563"}]},{"type":"rule","selectors":[".player-name"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".ns-dark .player-name"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".player-score"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".ns-dark .player-score"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".player-status-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#f3f4f6"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".ns-dark .player-status-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#1f2937"},{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".reorder-handle"],"declarations":[{"type":"declaration","property":"color","value":"#9ca3af"}]},{"type":"rule","selectors":[".ad-container"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#e5e7eb"},{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".ns-dark .ad-container"],"declarations":[{"type":"declaration","property":"background-color","value":"#374151"}]},{"type":"comment","comment":" Rules page styles "},{"type":"rule","selectors":[".page-title"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"28"},{"type":"declaration","property":"font-weight","value":"800"},{"type":"declaration","property":"margin","value":"16 0"}]},{"type":"rule","selectors":[".ns-dark .page-title"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".section-title"],"declarations":[{"type":"declaration","property":"color","value":"#1f2937"},{"type":"declaration","property":"font-size","value":"22"},{"type":"declaration","property":"font-weight","value":"700"},{"type":"declaration","property":"margin","value":"20 0 8 0"}]},{"type":"rule","selectors":[".ns-dark .section-title"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".subsection-title"],"declarations":[{"type":"declaration","property":"color","value":"#374151"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"font-weight","value":"600"},{"type":"declaration","property":"margin","value":"12 0 4 0"}]},{"type":"rule","selectors":[".ns-dark .subsection-title"],"declarations":[{"type":"declaration","property":"color","value":"#e5e7eb"}]},{"type":"rule","selectors":[".section-text"],"declarations":[{"type":"declaration","property":"color","value":"#4b5563"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin","value":"4 0 8 0"},{"type":"declaration","property":"line-height","value":"1.5"}]},{"type":"rule","selectors":[".ns-dark .section-text"],"declarations":[{"type":"declaration","property":"color","value":"#d1d5db"}]},{"type":"rule","selectors":[".indented-section"],"declarations":[{"type":"declaration","property":"padding-left","value":"16"}]}],"parsingErrors":[]}}
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.ios.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.ios.js");

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
    onRules() {
        _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost().navigate({
            moduleName: 'views/rules/rules',
            clearHistory: false
        });
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
        (0,_nativescript_core__WEBPACK_IMPORTED_MODULE_3__.prompt)({
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
                scoreToAdd = Math.floor(this._roundScore * 2.5) - this._roundScore;
                this._roundScore = Math.floor(this._roundScore * 2.5);
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
        _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost().navigate({
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
    onRules() {
        console.log('Navigating to rules page');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost().navigate({
            moduleName: 'views/rules/rules',
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

/***/ "./app/views/rules/rules.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new RulesViewModel();
}
class RulesViewModel {
    constructor() {
        // Initialize if needed
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\" />\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <Label text=\"{{ 'Round ' + currentRound }}\" class=\"title\" />\n            <Label text=\"{{ 'Current Player: ' + currentPlayer }}\" class=\"subtitle\" />\n            <Label text=\"{{ 'Round Score: ' + roundScore }}\" class=\"subtitle\" />\n            \n            <GridLayout columns=\"*, *, *\" rows=\"auto, auto, auto, auto\" class=\"m-4\">\n                <Button row=\"0\" col=\"0\" text=\"2\" tap=\"{{ onScore }}\" class=\"btn btn-success\" />\n                <Button row=\"0\" col=\"1\" text=\"3\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"0\" col=\"2\" text=\"4\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                \n                <Button row=\"1\" col=\"0\" text=\"5\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"1\" col=\"1\" text=\"6\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"1\" col=\"2\" text=\"7\" tap=\"{{ onScore }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-danger' }}\" />\n                \n                <Button row=\"2\" col=\"0\" text=\"8\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"2\" col=\"1\" text=\"9\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"2\" col=\"2\" text=\"10\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                \n                <Button row=\"3\" col=\"0\" text=\"11\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                <Button row=\"3\" col=\"1\" text=\"12\" tap=\"{{ onScore }}\" class=\"btn btn-success\" />\n                <Button row=\"3\" col=\"2\" text=\"Doubles\" tap=\"{{ onDoubles }}\" isEnabled=\"{{ rollCount >= 3 }}\" class=\"{{ rollCount >= 3 ? 'btn btn-purple' : 'btn btn-disabled' }}\" />\n            </GridLayout>\n\n            <StackLayout class=\"m-4 p-2 bg-white\">\n                <Repeater items=\"{{ players }}\">\n                    <Repeater.itemTemplate>\n                        <GridLayout columns=\"*, *, auto\" class=\"player-status {{ isCurrentPlayer ? 'player-status-active' : '' }}\">\n                            <Label col=\"0\" text=\"{{ name }}\" class=\"player-name\" />\n                            <Label col=\"1\" text=\"{{ totalScore }}\" class=\"player-score\" />\n                            <Button col=\"2\" \n                                    text=\"{{ isLocked ? 'Locked' : 'Lock' }}\" \n                                    tap=\"{{ $parents['Page'].onLockTap }}\"\n                                    class=\"{{ isLocked ? 'btn btn-disabled' : 'btn btn-primary' }}\"\n                                    isEnabled=\"{{ !isLocked }}\" />\n                        </GridLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\">\n        <ActionItem text=\"New Game\" tap=\"{{ onNewGame }}\" ios.position=\"right\" android.position=\"actionBar\" />\n        <ActionItem text=\"Rules&nbsp;&nbsp;&nbsp;&nbsp;\" tap=\"{{ onRules }}\" style=\"margin-right:10px\" ios.position=\"left\" android.position=\"actionBar\" />\n        <ActionItem text=\"{{ isEditMode ? 'Done' : 'Edit' }}\" tap=\"{{ toggleEditMode }}\" ios.position=\"left\" android.position=\"actionBar\" />\n    </ActionBar>\n    <GridLayout rows=\"*, auto\">\n        <ScrollView row=\"0\">\n            <StackLayout class=\"p-4\">\n                <Label text=\"{{ 'Round ' + currentRound }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Current Player: ' + currentPlayer }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Leader: ' + currentLeader }}\" class=\"game-info\" />\n                <Label text=\"{{ 'Round Score: ' + roundScore }}\" class=\"game-info\" />\n                \n                <!-- Undo Button -->\n                <Button text=\"↩️\" \n                    tap=\"{{ onUndo }}\" \n                    class=\"btn-icon\"\n                    isEnabled=\"{{ canUndo }}\"\n                    opacity=\"{{ canUndo ? 1 : 0.5 }}\"\n                    fontSize=\"24\"\n                    margin=\"0 4 8 4\" />\n                \n                <!-- Score Buttons -->\n                <GridLayout columns=\"*, *, *\" rows=\"auto, auto, auto, auto\" class=\"m-4\">\n                    <Button row=\"0\" col=\"0\" text=\"{{ rollCount >= 3 ? '2(2.5x)' : '2(200)' }}\" tap=\"{{ onScore }}\" class=\"btn btn-success\" />\n                    <Button row=\"0\" col=\"1\" text=\"3\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"0\" col=\"2\" text=\"4\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    \n                    <Button row=\"1\" col=\"0\" text=\"5\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"1\" col=\"1\" text=\"6\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"1\" col=\"2\" text=\"7\" tap=\"{{ onScore }}\" class=\"{{ rollCount < 3 ? 'btn btn-success' : 'btn btn-danger' }}\" />\n                    \n                    <Button row=\"2\" col=\"0\" text=\"8\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"2\" col=\"1\" text=\"9\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"2\" col=\"2\" text=\"10\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    \n                    <Button row=\"3\" col=\"0\" text=\"11\" tap=\"{{ onScore }}\" class=\"btn btn-primary\" />\n                    <Button row=\"3\" col=\"1\" text=\"{{ rollCount >= 3 ? '12(2.5x)' : '12(200)' }}\" tap=\"{{ onScore }}\" class=\"btn btn-success\" />\n                    <Button row=\"3\" col=\"2\" text=\"Doubles\" tap=\"{{ onDoubles }}\" isEnabled=\"{{ rollCount >= 3 }}\" class=\"{{ rollCount >= 3 ? 'btn btn-purple' : 'btn btn-disabled' }}\" />\n                </GridLayout>\n\n                <!-- Players Section -->\n                <StackLayout>\n                    <Repeater items=\"{{ players }}\">\n                        <Repeater.itemTemplate>\n                            <GridLayout columns=\"auto, auto, auto, *, auto, auto\" class=\"player-status {{ isCurrentPlayer ? 'player-status-active' : '' }}\">\n                                <!-- Up/Down Arrows -->\n                                <StackLayout col=\"0\" orientation=\"horizontal\" visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\">\n                                    <Button text=\"↑\" \n                                        tap=\"{{ moveUp }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveUp ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveUp }}\"\n                                        fontSize=\"20\" />\n                                    <Button text=\"↓\" \n                                        tap=\"{{ moveDown }}\" \n                                        class=\"btn-icon-compact\" \n                                        color=\"{{ canMoveDown ? '#3b82f6' : '#9ca3af' }}\"\n                                        isEnabled=\"{{ canMoveDown }}\"\n                                        fontSize=\"20\" />\n                                </StackLayout>\n                                \n                                <!-- Edit Name Button -->\n                                <Button col=\"1\" \n                                    text=\"✏️\" \n                                    tap=\"{{ editName }}\" \n                                    class=\"btn-icon-compact\" \n                                    fontSize=\"16\"\n                                    visibility=\"{{ isEditMode ? 'visible' : 'collapsed' }}\" />\n                                    \n                                <!-- Player Name and Score -->\n                                <Label col=\"2\" text=\"{{ name }}\" class=\"player-name\" />\n                                <Label col=\"3\" text=\"{{ totalScore }}\" class=\"player-score\" />\n                                \n                                <!-- Lock/Unlock Button -->\n                                <Button col=\"4\" \n                                    text=\"{{ isLocked ? (canUnlock ? 'Unlock' : 'Locked') : 'Lock' }}\" \n                                    tap=\"{{ isLocked ? (canUnlock ? unlock : null) : lock }}\"\n                                    class=\"{{ isLocked ? (canUnlock ? 'btn btn-success' : 'btn btn-disabled') : 'btn btn-primary' }}\"\n                                    isEnabled=\"{{ !isLocked || canUnlock }}\" />\n                                    \n                                <!-- Delete Button -->\n                                <Button col=\"5\" \n                                    text=\"✕\" \n                                    tap=\"{{ remove }}\" \n                                    class=\"btn-icon-compact\" \n                                    color=\"#ef4444\"\n                                    fontSize=\"20\"\n                                    visibility=\"{{ isEditMode && canDelete ? 'visible' : 'collapsed' }}\" />\n                            </GridLayout>\n                        </Repeater.itemTemplate>\n                    </Repeater>\n                </StackLayout>\n            </StackLayout>\n        </ScrollView>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Lock N' Roll\" />\n    <GridLayout rows=\"*, auto\">\n        <StackLayout row=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\">\n            <!-- Logo -->\n            <Image src=\"~/views/assets/logo.png\" width=\"200\" height=\"200\" stretch=\"aspectFit\" margin=\"32\" />\n            <Label text=\"Lock N' Roll\" class=\"title\" />\n            <Button text=\"New Game\" tap=\"{{ onNewGame }}\" class=\"btn btn-primary\" margin=\"16\" />\n            <Button text=\"Rules\" tap=\"{{ onRules }}\" class=\"btn btn-primary\" margin=\"16\" />\n        </StackLayout>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
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

/***/ "./app/views/rules/rules.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\"\n      navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Rules\" />\n    <GridLayout rows=\"*, auto\">\n        <ScrollView row=\"0\">\n            <StackLayout class=\"p-4\">\n                <Label text=\"Rules and Gameplay\" textWrap=\"true\" class=\"page-title\" />\n                \n                <Label text=\"Before you start\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"All that you need to play are 2 Dice, This app, and all of your friends!\" textWrap=\"true\" class=\"section-text\" />\n                \n                <Label text=\"Game Play\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"Each player will roll the dice when it is their turn. The scorekeeper will record the sum of both dice to the app after each roll. Its as simple as that... or is it?\" textWrap=\"true\" class=\"section-text\" />\n                \n                <Label text=\"Scoring\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"First 3 rolls\" textWrap=\"true\" class=\"subsection-title\" />\n                <StackLayout class=\"indented-section\">\n                    <Label text=\"• Double 1's (Snake eyes) are worth 200.\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• Double 6's (12) are worth 200.\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• 7's are worth 100.\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• All other numbers are scored as face value.\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• No doubles apply except 1's and 6's\" textWrap=\"true\" class=\"section-text\" />\n                </StackLayout>\n                \n                <Label text=\"After 3rd roll\" textWrap=\"true\" class=\"subsection-title\" />\n                <StackLayout class=\"indented-section\">\n                    <Label text=\"• Double 1's and Double 6's multiply the score by 2.5 (100 would become 250)\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• Any other Double will DOUBLE the rounds current score.\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• If a 7 is rolled, the round ENDS.\" textWrap=\"true\" class=\"section-text\" />\n                    <Label text=\"• All other numbers are scored as face value.\" textWrap=\"true\" class=\"section-text\" />\n                </StackLayout>\n                \n                <Label text=\"Locking\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"Between any round, any player can LOCK their score. If the score is getting high, and you are afraid that someone will roll a 7 and end the round, you can lock your score in. This will add the rounds current score to your total, and you will be out for the round. If you do not lock before a 7 is rolled, you are rewarded 0 points for the round\" textWrap=\"true\" class=\"section-text\" />\n                \n                <Label text=\"Winner\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"To win, you must simply have the most points at the end of all the rounds. Easy, right?\" textWrap=\"true\" class=\"section-text\" />\n                \n                <Label text=\"How to keep score (For the score keeper only)\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"Each time a player rolls, you simply click the number they roll. For all doubles besides 1's and 6's, click the doubles button to double the rounds score.\" textWrap=\"true\" class=\"section-text\" />\n                <Label text=\"When a player wants to lock their score, simply find their name and click the lock icon next to their name. This will lock them and remove them from the list of rollers for the round. They will resume rolling in the next round.\" textWrap=\"true\" class=\"section-text\" />\n                <Label text=\"If you make a mistake, there is an undo button. You can also unlock a player if they change their mind. But this can only be done before the next player rolls.\" textWrap=\"true\" class=\"section-text\" />\n                \n                <Label text=\"FAQ\" textWrap=\"true\" class=\"section-title\" />\n                <Label text=\"What is a double?\" textWrap=\"true\" class=\"subsection-title\" />\n                <Label text=\"A double means that both dice that are rolled display the exact same number. ie: when rolled, both dice land with a 4 displayed.\" textWrap=\"true\" class=\"section-text\" />\n                \n                <Label text=\"Can I submit suggestions and bugs?\" textWrap=\"true\" class=\"subsection-title\" />\n                <Label text=\"Yes, please do! Please email: BrandonNelson325@gmail.com\" textWrap=\"true\" class=\"section-text\" />\n            </StackLayout>\n        </ScrollView>\n        <!-- Ad Space -->\n        <StackLayout row=\"1\" class=\"ad-container\" />\n    </GridLayout>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUNBLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFFSjs7Ozs7Ozs7Ozs7Ozs7O0FDRmxCOztBQUVBLHNDQUFzQyxrQ0FBa0MsVUFBVSxxREFBcUQscUVBQXFFLEVBQUUsRUFBRSw4REFBOEQscUVBQXFFLEVBQUUsRUFBRSxvREFBb0Qsd0RBQXdELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsdURBQXVELEVBQUUsNERBQTRELEVBQUUscURBQXFELEVBQUUsRUFBRSw0REFBNEQscUVBQXFFLEVBQUUsRUFBRSw0REFBNEQscUVBQXFFLEVBQUUsRUFBRSwyREFBMkQscUVBQXFFLEVBQUUsRUFBRSw0REFBNEQscUVBQXFFLEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLEVBQUUsRUFBRSw4REFBOEQscUVBQXFFLEVBQUUsRUFBRSwyREFBMkQsd0VBQXdFLEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLEVBQUUsRUFBRSw2REFBNkQscUVBQXFFLEVBQUUsd0RBQXdELEVBQUUsRUFBRSx5REFBeUQsc0RBQXNELEVBQUUscURBQXFELEVBQUUseURBQXlELEVBQUUseUVBQXlFLEVBQUUsRUFBRSxpRUFBaUUsc0RBQXNELEVBQUUscURBQXFELEVBQUUseURBQXlELEVBQUUseUVBQXlFLEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsOERBQThELEVBQUUsd0RBQXdELEVBQUUsRUFBRSwrREFBK0Qsd0RBQXdELEVBQUUsRUFBRSx5REFBeUQsMERBQTBELEVBQUUseURBQXlELEVBQUUsNERBQTRELEVBQUUsOERBQThELEVBQUUsdURBQXVELEVBQUUsRUFBRSxrRUFBa0UsMERBQTBELEVBQUUsRUFBRSwwREFBMEQsMERBQTBELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsOERBQThELEVBQUUsdURBQXVELEVBQUUsRUFBRSxtRUFBbUUsd0RBQXdELEVBQUUsRUFBRSxzREFBc0QscUVBQXFFLEVBQUUsMERBQTBELEVBQUUsdURBQXVELEVBQUUsNERBQTRELEVBQUUscURBQXFELEVBQUUseURBQXlELEVBQUUsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsaUVBQWlFLEVBQUUsc0VBQXNFLEVBQUUsRUFBRSwrREFBK0QscUVBQXFFLEVBQUUsd0RBQXdELEVBQUUsaUVBQWlFLEVBQUUsRUFBRSw4REFBOEQscUVBQXFFLEVBQUUsMERBQTBELEVBQUUsc0RBQXNELEVBQUUsNERBQTRELEVBQUUscURBQXFELEVBQUUseURBQXlELEVBQUUsc0RBQXNELEVBQUUsMkRBQTJELEVBQUUsaUVBQWlFLEVBQUUsc0VBQXNFLEVBQUUsRUFBRSx1RUFBdUUscUVBQXFFLEVBQUUsd0RBQXdELEVBQUUsaUVBQWlFLEVBQUUsRUFBRSw4REFBOEQsbUVBQW1FLEVBQUUsdURBQXVELEVBQUUsa0VBQWtFLEVBQUUsaUVBQWlFLEVBQUUscURBQXFELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1RUFBdUUscUVBQXFFLEVBQUUsaUVBQWlFLEVBQUUsRUFBRSxzRUFBc0UsbUVBQW1FLEVBQUUsc0RBQXNELEVBQUUsa0VBQWtFLEVBQUUsaUVBQWlFLEVBQUUscURBQXFELEVBQUUsNERBQTRELEVBQUUsRUFBRSwrRUFBK0UscUVBQXFFLEVBQUUsaUVBQWlFLEVBQUUsRUFBRSw0REFBNEQsMERBQTBELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxRUFBcUUsd0RBQXdELEVBQUUsRUFBRSw2REFBNkQsMERBQTBELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxzRUFBc0Usd0RBQXdELEVBQUUsRUFBRSxxRUFBcUUscUVBQXFFLEVBQUUsMkRBQTJELEVBQUUsaUVBQWlFLEVBQUUsRUFBRSw4RUFBOEUscUVBQXFFLEVBQUUsaUVBQWlFLEVBQUUsRUFBRSwrREFBK0QsMERBQTBELEVBQUUsRUFBRSw2REFBNkQsc0RBQXNELEVBQUUscUVBQXFFLEVBQUUseURBQXlELEVBQUUsRUFBRSxzRUFBc0UscUVBQXFFLEVBQUUsRUFBRSxpREFBaUQsRUFBRSwyREFBMkQsMERBQTBELEVBQUUseURBQXlELEVBQUUsNERBQTRELEVBQUUsd0RBQXdELEVBQUUsRUFBRSxvRUFBb0Usd0RBQXdELEVBQUUsRUFBRSw4REFBOEQsMERBQTBELEVBQUUseURBQXlELEVBQUUsNERBQTRELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1RUFBdUUsd0RBQXdELEVBQUUsRUFBRSxpRUFBaUUsMERBQTBELEVBQUUseURBQXlELEVBQUUsNERBQTRELEVBQUUsNERBQTRELEVBQUUsRUFBRSwwRUFBMEUsMERBQTBELEVBQUUsRUFBRSw2REFBNkQsMERBQTBELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsRUFBRSxzRUFBc0UsMERBQTBELEVBQUUsRUFBRSxpRUFBaUUsNERBQTRELEVBQUU7QUFDbHVWLGlFQUFlLDRCQUE0QjtBQUMzQyxRQUFRLHlCQUF5QixFQUFFLG1CQUFPLENBQUMsNkRBQTJDO0FBQ3RGOzs7Ozs7Ozs7Ozs7Ozs7QUNMcUU7QUFTOUQsU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFDLElBQVM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxNQUFNLGFBQWMsU0FBUSwwREFBVTtJQVFsQyxZQUFZLE9BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFSSixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFLNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLEVBQUUsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxNQUFNLFdBQVcsR0FBRyxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUUzQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUk7WUFDSixVQUFVLEVBQUUsQ0FBQztZQUNiLFFBQVEsRUFBRSxLQUFLO1lBQ2YsZUFBZSxFQUFFLEtBQUssS0FBSyxDQUFDO1NBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDO1FBQ2pCLElBQUksTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxFQUFFO2dCQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUk7YUFDdkI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLE9BQU8sTUFBTSxJQUFJLEVBQUU7SUFDdkIsQ0FBQztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLGtCQUFrQixFQUFFO1lBQ3BCLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQzthQUMzQjtpQkFBTSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO2FBQzdCO1NBQ0o7YUFBTTtZQUNILElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixPQUFPO2FBQ1Y7aUJBQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ3BDLE9BQU87YUFDVjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQzthQUM3QjtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUU1QyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFTyxVQUFVO1FBQ2QsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDdEUsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzFFLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNuRCxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sU0FBUztRQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sT0FBTztRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQ2xELENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUMxRCxDQUFDO1FBQ0YsS0FBSyxDQUFDLGNBQWMsTUFBTSxDQUFDLElBQUksY0FBYyxNQUFNLENBQUMsVUFBVSxVQUFVLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8scUJBQXFCO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TG9HO0FBV3JHLE1BQU0sZUFBZ0IsU0FBUSwwREFBVTtJQVVwQyxZQUFZLElBQVksRUFBRSxhQUE0QjtRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLElBQUksVUFBVSxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLGVBQWUsS0FBSyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZTtZQUNwQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUNELElBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsSUFBSSxTQUFTLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0YsSUFBSSxXQUFXLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRyxJQUFJLFVBQVUsS0FBSyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUUzRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVELElBQUksZUFBZSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGdCQUFnQjtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNKO0FBRU0sU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFFRCxNQUFNLGFBQWMsU0FBUSwwREFBVTtJQVVsQyxZQUFZLE9BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFUSixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLEVBQUUsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxNQUFNLFdBQVcsR0FBRyxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwrREFBZSxFQUFtQixDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxlQUFlLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksWUFBWSxLQUFLLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxVQUFVLEtBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLGFBQWEsS0FBSyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNGLElBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUksVUFBVSxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxhQUFhO1FBQ2IsSUFBSSxTQUFTLEdBQUcsQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsRUFBRTtnQkFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJO2FBQ3ZCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sSUFBSSxFQUFFO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0gscURBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDckIsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixZQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUF1QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBdUI7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUF1QjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPO1FBRTFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFM0MsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBdUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPO1FBRTVDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFM0MsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUF1QjtRQUN0QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakUsT0FBTyxXQUFXLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN4RSxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQXVCO1FBQ2xDLDBEQUFNLENBQUM7WUFDSCxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsSUFBSTtZQUM1QyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDeEIsWUFBWSxFQUFFLE1BQU07WUFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFL0MsSUFBSSxrQkFBa0IsRUFBRTtZQUNwQixJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtnQkFDN0IsVUFBVSxHQUFHLEdBQUcsQ0FBQzthQUNwQjtpQkFBTSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLFVBQVUsR0FBRyxHQUFHLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0gsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsT0FBTzthQUNWO2lCQUFNLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUNwQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNILFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDO2FBQ2xDO1NBQ0o7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVU7WUFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFFdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVE7Z0JBQ2xDLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CO2dCQUNyQyxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzdCLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTNDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRXRCLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNELElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFO2dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzthQUMxRTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxxREFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUseUNBQXlDO1lBQ3JELE9BQU8sRUFBRSxFQUFFLGVBQWUsRUFBRTtZQUM1QixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQXVCO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTVCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM1QixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDMUIsZ0JBQWdCO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksZ0JBQWdCLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUN4RSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzthQUMxRTtTQUNKO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUF1QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTdCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV4QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FDbkUsQ0FBQztRQUVGLElBQUksWUFBWSxFQUFFLGdCQUFnQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztZQUN2QyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBdUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxPQUFPO1FBRW5DLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU87UUFFekIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNwRjthQUFNLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzFFO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLFVBQVU7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRU8sc0JBQXNCO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUMxQyxHQUFHO1lBQ0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNELE9BQU87YUFDVjtTQUNKLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixLQUFLLFVBQVUsRUFBRTtRQUVsRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFTyxTQUFTO1FBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFakYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLGVBQWUsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGtCQUFrQjtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sT0FBTztRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQ2xELENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUMxRCxDQUFDO1FBQ0YsS0FBSyxDQUFDLGNBQWMsTUFBTSxDQUFDLElBQUksY0FBYyxNQUFNLENBQUMsVUFBVSxVQUFVLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8scUJBQXFCO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDemdCK0Q7QUFFekQsU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztBQUNqRCxDQUFDO0FBRUQsTUFBTSxnQkFBZ0I7SUFDbEIsU0FBUztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxxREFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUseUNBQXlDO1lBQ3JELFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7QUNmK0Q7QUFFekQsU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztBQUNqRCxDQUFDO0FBRUQsTUFBTSxnQkFBZ0I7SUFDbEIsU0FBUztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxxREFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUseUNBQXlDO1lBQ3JELFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLHFEQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkI0RjtBQUV0RixTQUFTLGNBQWMsQ0FBQyxJQUFtQjtJQUM5QyxNQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0FBQ3pELENBQUM7QUFFRCxNQUFNLHdCQUF5QixTQUFRLDBEQUFVO0lBSTdDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0RBQWUsRUFBb0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNOLHFEQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQ3ZELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7OztBQzdDNEY7QUFFN0YsTUFBTSxVQUFXLFNBQVEsMERBQVU7SUFJL0IsWUFBWSxJQUFZLEVBQUUsU0FBbUM7UUFDekQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFTO1FBQ2hCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztDQUNKO0FBRU0sU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVELE1BQU0sd0JBQXlCLFNBQVEsMERBQVU7SUFJN0MsWUFBWSxPQUFZO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLCtEQUFlLEVBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV0QixxQ0FBcUM7UUFDckMsTUFBTSxlQUFlLEdBQUcsT0FBTyxFQUFFLGVBQWUsSUFBSSxFQUFFLENBQUM7UUFDdkQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFrQjtRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBa0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBa0I7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFrQjtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVPLGtCQUFrQjtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE1BQU0saUJBQWlCLEdBQUc7Z0JBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDMUMsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUU1RSxxREFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsVUFBVSxFQUFFLHVDQUF1QztnQkFDbkQsT0FBTyxFQUFFLGlCQUFpQjthQUM3QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUorRDtBQUV6RCxTQUFTLGNBQWMsQ0FBQyxJQUFtQjtJQUM5QyxNQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBRUQsTUFBTSx1QkFBdUI7SUFHekIsWUFBWSxPQUFZO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVM7UUFDbEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUU7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFdBQVcsRUFBRSxNQUFNO1NBQ3RCLENBQUMsQ0FBQztRQUVILHFEQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLFdBQVcsRUFBRSxNQUFNO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7OztBQ2pDK0Q7QUFFekQsU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVELE1BQU0sdUJBQXVCO0lBR3pCLFlBQVksT0FBWTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFTO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxNQUFNLGlCQUFpQixHQUFHO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRW5FLHFEQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNqQ00sU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sY0FBYztJQUNoQjtRQUNJLHVCQUF1QjtJQUMzQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQTtBQUNBLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSxnVEFBZ1QsMEJBQTBCLG9EQUFvRCxxQ0FBcUMsdURBQXVELCtCQUErQixvTUFBb00sVUFBVSxpR0FBaUcsVUFBVSxpR0FBaUcsVUFBVSxtSEFBbUgsVUFBVSxpR0FBaUcsVUFBVSxpR0FBaUcsVUFBVSxjQUFjLHVEQUF1RCx5RkFBeUYsVUFBVSxpR0FBaUcsVUFBVSxrR0FBa0csVUFBVSxvSEFBb0gsVUFBVSxrR0FBa0csVUFBVSx1R0FBdUcsWUFBWSxrQkFBa0IsaUJBQWlCLGNBQWMseURBQXlELCtIQUErSCxVQUFVLHNJQUFzSSxnREFBZ0QsNERBQTRELE9BQU8sb0ZBQW9GLGFBQWEsNEhBQTRILCtCQUErQixrREFBa0QsNkJBQTZCLG1EQUFtRCxvREFBb0QsdURBQXVELFlBQVk7QUFDNzZGLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSx5UUFBeVEsWUFBWSxtR0FBbUcsTUFBTSxNQUFNLE1BQU0sWUFBWSxVQUFVLHNIQUFzSCwrQkFBK0IsWUFBWSxpQkFBaUIsMk5BQTJOLDBCQUEwQiw0REFBNEQscUNBQXFDLDREQUE0RCw2QkFBNkIsNERBQTRELCtCQUErQixzSkFBc0osU0FBUyxnRkFBZ0YsVUFBVSxxQ0FBcUMsb0JBQW9CLHdTQUF3Uyx3Q0FBd0MsWUFBWSxVQUFVLHFHQUFxRyxVQUFVLHFHQUFxRyxVQUFVLDJIQUEySCxVQUFVLHFHQUFxRyxVQUFVLHFHQUFxRyxVQUFVLGNBQWMsdURBQXVELGlHQUFpRyxVQUFVLHFHQUFxRyxVQUFVLHNHQUFzRyxVQUFVLDRIQUE0SCxVQUFVLDJGQUEyRiwwQ0FBMEMsWUFBWSxVQUFVLDJHQUEyRyxZQUFZLGtCQUFrQixpQkFBaUIsY0FBYyx5REFBeUQsMEpBQTBKLFVBQVUsbUtBQW1LLGdEQUFnRCxnS0FBZ0ssdUNBQXVDLCtHQUErRyxTQUFTLDZIQUE2SCxvQ0FBb0MsMkRBQTJELFlBQVksMEtBQTBLLFdBQVcsNkhBQTZILHNDQUFzQywyREFBMkQsY0FBYyxnV0FBZ1csV0FBVywrS0FBK0ssdUNBQXVDLHdLQUF3SyxPQUFPLHdGQUF3RixhQUFhLCtOQUErTix3REFBd0Qsa0RBQWtELGdEQUFnRCxtREFBbUQsc0ZBQXNGLHVEQUF1RCx5QkFBeUIsdVBBQXVQLFNBQVMsc09BQXNPLG9EQUFvRDtBQUN0OE0saUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLGlXQUFpVyxZQUFZO0FBQzdXLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSwybEJBQTJsQixZQUFZLDJGQUEyRixVQUFVO0FBQzVzQixpRUFBZSxpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7O0FDRmhEO0FBQ0Esd1lBQXdZLGFBQWEsMkVBQTJFLFlBQVksdUZBQXVGLFVBQVUsd0dBQXdHLE9BQU8seUlBQXlJLGFBQWEsNENBQTRDLHFCQUFxQjtBQUNuNUIsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLG1zQkFBbXNCLGFBQWEsOEZBQThGLFlBQVksZ0tBQWdLLFlBQVksZ0dBQWdHLHdCQUF3QixxS0FBcUssVUFBVSx1WkFBdVosU0FBUyw2SEFBNkgsb0NBQW9DLDJEQUEyRCxZQUFZLDBLQUEwSyxXQUFXLDZIQUE2SCxzQ0FBc0MsMkRBQTJELGNBQWMsNlNBQTZTLE9BQU8sb0xBQW9MLGFBQWEsdVBBQXVQLFNBQVMsb2JBQW9iLGFBQWEsb0NBQW9DLHVEQUF1RCx1Q0FBdUMsY0FBYztBQUM1bkgsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBO0FBQ0EsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLDhhQUE4YSxlQUFlLDBFQUEwRSxlQUFlLDBFQUEwRSxlQUFlLDBFQUEwRSxlQUFlO0FBQ3hzQixpRUFBZSxpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7O0FDRmhEO0FBQ0Esb2xCQUFvbEIsZUFBZSwwSEFBMEgsZUFBZSwwSEFBMEgsZUFBZSwwSEFBMEgsZUFBZTtBQUM5L0IsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBO0FBQ0EsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7QUNIaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwLyBzeW5jIFxcLih4bWwlN0NqcyU3QygiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvZ2FtZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3J1bGVzL3J1bGVzLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLXJvb3QueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvZ2FtZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9nYW1lL2dhbWUueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9wbGF5ZXItc2VsZWN0aW9uL3BsYXllci1zZWxlY3Rpb24ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9yZW9yZGVyLW1vZGFsL3Jlb3JkZXItbW9kYWwueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcnVsZXMvcnVsZXMueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvZXh0ZXJuYWwgY29tbW9uanMgXCJ+L3BhY2thZ2UuanNvblwiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC9hcHAudHNcIixcblx0XCIuL3ZpZXdzL2dhbWUudHNcIjogXCIuL2FwcC92aWV3cy9nYW1lLnRzXCIsXG5cdFwiLi92aWV3cy9nYW1lLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2dhbWUueG1sXCIsXG5cdFwiLi92aWV3cy9nYW1lL2dhbWUudHNcIjogXCIuL2FwcC92aWV3cy9nYW1lL2dhbWUudHNcIixcblx0XCIuL3ZpZXdzL2dhbWUvZ2FtZS54bWxcIjogXCIuL2FwcC92aWV3cy9nYW1lL2dhbWUueG1sXCIsXG5cdFwiLi92aWV3cy9sYW5kaW5nLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xhbmRpbmctcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvcGxheWVyLXNlbGVjdGlvbi50c1wiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24udHNcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24ueG1sXCI6IFwiLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi54bWxcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi50c1wiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi50c1wiLFxuXHRcIi4vdmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbi54bWxcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnRzXCI6IFwiLi9hcHAvdmlld3MvcGxheWVyLXNlbGVjdGlvbi9yZW9yZGVyLW1vZGFsL3Jlb3JkZXItbW9kYWwudHNcIixcblx0XCIuL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcmVvcmRlci1tb2RhbC9yZW9yZGVyLW1vZGFsLnhtbFwiLFxuXHRcIi4vdmlld3Mvcm91bmQtc2VsZWN0aW9uLnRzXCI6IFwiLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uLnRzXCIsXG5cdFwiLi92aWV3cy9yb3VuZC1zZWxlY3Rpb24ueG1sXCI6IFwiLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uLnhtbFwiLFxuXHRcIi4vdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi50c1wiOiBcIi4vYXBwL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24udHNcIixcblx0XCIuL3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24ueG1sXCI6IFwiLi9hcHAvdmlld3Mvcm91bmQtc2VsZWN0aW9uL3JvdW5kLXNlbGVjdGlvbi54bWxcIixcblx0XCIuL3ZpZXdzL3J1bGVzL3J1bGVzLnRzXCI6IFwiLi9hcHAvdmlld3MvcnVsZXMvcnVsZXMudHNcIixcblx0XCIuL3ZpZXdzL3J1bGVzL3J1bGVzLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3J1bGVzL3J1bGVzLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTsiLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmM2Y0ZjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1zdWNjZXNzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxMGI5ODFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRhbmdlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZWY0NDQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi13YXJuaW5nXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmNTllMGJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWluZm9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzA2YjZkNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tc2Vjb25kYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM2YjcyODBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXB1cnBsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibHVldmlvbGV0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1waW5rXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlYzQ4OTlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM5Y2EzYWZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWljb24tY29tcGFjdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTYgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC50aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3VidGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5zdWJ0aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5nYW1lLWluZm9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuZ2FtZS1pbmZvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjlmYWZiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNmI3MjgwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dC1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmOWZhZmJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzZiNzI4MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5pbnB1dC1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRiNTU2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wbGF5ZXItc3RhdHVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM3NDE1MVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1cy1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGxheWVyLXN0YXR1cy1jb21wYWN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNGI1NTYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1uYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAucGxheWVyLW5hbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBsYXllci1zY29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFmMjkzN1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zY29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGxheWVyLXN0YXR1cy1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YzZjRmNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnBsYXllci1zdGF0dXMtYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2I4MmY2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJlb3JkZXItaGFuZGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjOWNhM2FmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFkLWNvbnRhaW5lclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlNWU3ZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5hZC1jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM3NDE1MVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBSdWxlcyBwYWdlIHN0eWxlcyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2UtdGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMxZjI5MzdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiODAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTYgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5wYWdlLXRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zZWN0aW9uLXRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMWYyOTM3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjcwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwIDAgOCAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnNlY3Rpb24tdGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnN1YnNlY3Rpb24tdGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzNzQxNTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTIgMCA0IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuc3Vic2VjdGlvbi10aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U1ZTdlYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zZWN0aW9uLXRleHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjQgMCA4IDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjEuNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5zZWN0aW9uLXRleHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkMWQ1ZGJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5kZW50ZWQtc2VjdGlvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIi9Vc2Vycy9ibmVsc29uL1BlcnNvbmFsRGV2L0xvY2tOUm9sbC9hcHAvYXBwLmNzc1wiKVxuIiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0b3RhbFNjb3JlOiBudW1iZXI7XG4gICAgaXNMb2NrZWQ6IGJvb2xlYW47XG4gICAgaXNDdXJyZW50UGxheWVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGFyZ3MuY29udGV4dCB8fCB7fTtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBHYW1lVmlld01vZGVsKGNvbnRleHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9ja1RhcChhcmdzOiBhbnkpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIGNvbnN0IHBsYXllciA9IGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xuICAgIHZpZXdNb2RlbC5sb2NrUGxheWVyKHBsYXllcik7XG59XG5cbmNsYXNzIEdhbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2N1cnJlbnRSb3VuZCA9IDE7XG4gICAgcHJpdmF0ZSBfdG90YWxSb3VuZHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yb3VuZFNjb3JlID0gMDtcbiAgICBwcml2YXRlIF9yb2xsQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3RvdGFsUm91bmRzID0gY29udGV4dD8udG90YWxSb3VuZHMgfHwgMTA7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWVzID0gY29udGV4dD8ucGxheWVycyB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBwbGF5ZXJOYW1lcy5tYXAoKG5hbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRvdGFsU2NvcmU6IDAsXG4gICAgICAgICAgICBpc0xvY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBpc0N1cnJlbnRQbGF5ZXI6IGluZGV4ID09PSAwXG4gICAgICAgIH0pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50Um91bmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Um91bmQ7XG4gICAgfVxuXG4gICAgZ2V0IHJvdW5kU2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3VuZFNjb3JlO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyc1t0aGlzLl9jdXJyZW50UGxheWVySW5kZXhdPy5uYW1lIHx8ICcnO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50TGVhZGVyKCkge1xuICAgICAgICBsZXQgaGlnaHNjb3JlID0gMFxuICAgICAgICBsZXQgbGVhZGVyID0gJydcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyLnRvdGFsU2NvcmUgPiBoaWdoc2NvcmUpIHtcbiAgICAgICAgICAgICAgICBsZWFkZXIgPSBwbGF5ZXIubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cobGVhZGVyKVxuICAgICAgICByZXR1cm4gbGVhZGVyIHx8ICcnXG4gICAgfVxuXG4gICAgZ2V0IHJvbGxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvbGxDb3VudDtcbiAgICB9XG5cbiAgICBvblNjb3JlKGFyZ3M6IGFueSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChidXR0b24udGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1dpdGhpbkZpcnN0VGhyZWUgPSB0aGlzLl9yb2xsQ291bnQgPCAzO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzV2l0aGluRmlyc3RUaHJlZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gMjAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gNykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gMTAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMiB8fCB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uRG91YmxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JvbGxDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICo9IDI7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9ja1BsYXllcihwbGF5ZXI6IFBsYXllcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuZmluZEluZGV4KHAgPT4gcC5uYW1lID09PSBwbGF5ZXIubmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEgfHwgcGxheWVyLmlzTG9ja2VkKSByZXR1cm47XG5cbiAgICAgICAgcGxheWVyLnRvdGFsU2NvcmUgKz0gdGhpcy5fcm91bmRTY29yZTtcbiAgICAgICAgcGxheWVyLmlzTG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmFsbFBsYXllcnNMb2NrZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFBsYXllcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0UGxheWVyKCkge1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgIGxldCBsb29wQ291bnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHRoaXMuX3BsYXllcnNbbmV4dEluZGV4XS5pc0xvY2tlZCAmJiBsb29wQ291bnQgPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gKG5leHRJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgICAgICBsb29wQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxvb3BDb3VudCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleF0uaXNDdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleF0uaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgPSAwO1xuICAgICAgICAgICAgdGhpcy5fcm9sbENvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5leHRSb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0Um91bmQoKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRSb3VuZCsrO1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFJvdW5kID4gdGhpcy5fdG90YWxSb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fcm9sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmlzTG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gaW5kZXggPT09IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFsbFBsYXllcnNMb2NrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmV2ZXJ5KHBsYXllciA9PiBwbGF5ZXIuaXNMb2NrZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kR2FtZSgpIHtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5fcGxheWVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IFxuICAgICAgICAgICAgKHByZXYudG90YWxTY29yZSA+IGN1cnJlbnQudG90YWxTY29yZSkgPyBwcmV2IDogY3VycmVudFxuICAgICAgICApO1xuICAgICAgICBhbGVydChgR2FtZSBPdmVyISAke3dpbm5lci5uYW1lfSB3aW5zIHdpdGggJHt3aW5uZXIudG90YWxTY29yZX0gcG9pbnRzIWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5UHJvcGVydHlDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjdXJyZW50Um91bmQnLCB0aGlzLl9jdXJyZW50Um91bmQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyb3VuZFNjb3JlJywgdGhpcy5fcm91bmRTY29yZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRQbGF5ZXInLCB0aGlzLmN1cnJlbnRQbGF5ZXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjdXJyZW50TGVhZGVyJywgdGhpcy5jdXJyZW50TGVhZGVyKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncm9sbENvdW50JywgdGhpcy5fcm9sbENvdW50KTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncGxheWVycycsIHRoaXMuX3BsYXllcnMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlQXJyYXksIEZyYW1lLCBwcm9tcHQgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5pbnRlcmZhY2UgTW92ZSB7XG4gICAgdHlwZTogJ3JvbGwnIHwgJ2RvdWJsZXMnIHwgJ2xvY2snO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgcGxheWVySW5kZXg6IG51bWJlcjtcbiAgICByb3VuZFNjb3JlOiBudW1iZXI7XG4gICAgcm9sbENvdW50OiBudW1iZXI7XG4gICAgd2FzQ3VycmVudFBsYXllcj86IGJvb2xlYW47XG59XG5cbmNsYXNzIFBsYXllclZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF90b3RhbFNjb3JlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNMb2NrZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXNDdXJyZW50UGxheWVyOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2xhc3RMb2NrZWRTY29yZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xvY2tlZFRoaXNSb2xsOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2xvY2tSb2xsQ291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9nYW1lVmlld01vZGVsOiBHYW1lVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBnYW1lVmlld01vZGVsOiBHYW1lVmlld01vZGVsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5faXNMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xhc3RMb2NrZWRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPSAtMTtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbCA9IGdhbWVWaWV3TW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7IHJldHVybiB0aGlzLl90b3RhbFNjb3JlOyB9XG4gICAgZ2V0IGlzTG9ja2VkKCkgeyByZXR1cm4gdGhpcy5faXNMb2NrZWQ7IH1cbiAgICBnZXQgaXNDdXJyZW50UGxheWVyKCkgeyByZXR1cm4gdGhpcy5faXNDdXJyZW50UGxheWVyOyB9XG4gICAgZ2V0IGNhblVubG9jaygpIHsgXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NrZWRUaGlzUm9sbCAmJiBcbiAgICAgICAgICAgICAgICF0aGlzLl9nYW1lVmlld01vZGVsLmlzTGFzdFBsYXllclRvTG9jayh0aGlzKSAmJiBcbiAgICAgICAgICAgICAgIHRoaXMuX2xvY2tSb2xsQ291bnQgPT09IHRoaXMuX2dhbWVWaWV3TW9kZWwucm9sbENvdW50O1xuICAgIH1cbiAgICBnZXQgY2FuRGVsZXRlKCkgeyByZXR1cm4gdGhpcy5fZ2FtZVZpZXdNb2RlbC5jYW5EZWxldGVQbGF5ZXJzOyB9XG4gICAgZ2V0IGNhbk1vdmVVcCgpIHsgcmV0dXJuICF0aGlzLl9pc0N1cnJlbnRQbGF5ZXIgJiYgdGhpcy5fZ2FtZVZpZXdNb2RlbC5jYW5Nb3ZlUGxheWVyVXAodGhpcyk7IH1cbiAgICBnZXQgY2FuTW92ZURvd24oKSB7IHJldHVybiAhdGhpcy5faXNDdXJyZW50UGxheWVyICYmIHRoaXMuX2dhbWVWaWV3TW9kZWwuY2FuTW92ZVBsYXllckRvd24odGhpcyk7IH1cbiAgICBnZXQgaXNFZGl0TW9kZSgpIHsgcmV0dXJuIHRoaXMuX2dhbWVWaWV3TW9kZWwuaXNFZGl0TW9kZTsgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgdG90YWxTY29yZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl90b3RhbFNjb3JlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdG90YWxTY29yZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxTY29yZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBpc0xvY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5faXNMb2NrZWQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0xvY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IHRoaXMuX2dhbWVWaWV3TW9kZWwucm9sbENvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2tlZFRoaXNSb2xsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpc0xvY2tlZCcsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIHRoaXMuY2FuVW5sb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBpc0N1cnJlbnRQbGF5ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ3VycmVudFBsYXllciAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VycmVudFBsYXllciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNDdXJyZW50UGxheWVyJywgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZVVwJywgdGhpcy5jYW5Nb3ZlVXApO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCB0aGlzLmNhbk1vdmVEb3duKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXROYW1lKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLmVkaXRQbGF5ZXJOYW1lKHRoaXMpO1xuICAgIH1cblxuICAgIGxvY2soKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwubG9ja1BsYXllcih0aGlzKTtcbiAgICB9XG5cbiAgICB1bmxvY2soKSB7XG4gICAgICAgIHRoaXMuX2dhbWVWaWV3TW9kZWwudW5sb2NrUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5kZWxldGVQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLl9nYW1lVmlld01vZGVsLm1vdmVQbGF5ZXJVcCh0aGlzKTtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVZpZXdNb2RlbC5tb3ZlUGxheWVyRG93bih0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEZvck5ld1JvdW5kKCkge1xuICAgICAgICB0aGlzLl9pc0xvY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sYXN0TG9ja2VkU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9sb2NrZWRUaGlzUm9sbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gLTE7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzTG9ja2VkJywgZmFsc2UpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FuRGVsZXRlKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5EZWxldGUnLCB0aGlzLmNhbkRlbGV0ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FuVW5sb2NrKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmxvY2snLCB0aGlzLmNhblVubG9jayk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW92ZUJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhbk1vdmVVcCcsIHRoaXMuY2FuTW92ZVVwKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCB0aGlzLmNhbk1vdmVEb3duKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0TW9kZSgpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNFZGl0TW9kZScsIHRoaXMuaXNFZGl0TW9kZSk7XG4gICAgfVxuXG4gICAgYWRkU2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlICs9IHNjb3JlO1xuICAgICAgICB0aGlzLl9sYXN0TG9ja2VkU2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sb2NrUm9sbENvdW50ID0gdGhpcy5fZ2FtZVZpZXdNb2RlbC5yb2xsQ291bnQ7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsU2NvcmUnLCB0aGlzLl90b3RhbFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuVW5sb2NrJywgdGhpcy5jYW5VbmxvY2spO1xuICAgIH1cblxuICAgIHJlbW92ZVNjb3JlKCkge1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlIC09IHRoaXMuX2xhc3RMb2NrZWRTY29yZTtcbiAgICAgICAgdGhpcy5fbGFzdExvY2tlZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fbG9ja2VkVGhpc1JvbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbG9ja1JvbGxDb3VudCA9IC0xO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbFNjb3JlJywgdGhpcy5fdG90YWxTY29yZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NhblVubG9jaycsIHRoaXMuY2FuVW5sb2NrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGNvbnRleHQgPSBhcmdzLmNvbnRleHQgfHwge307XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBHYW1lVmlld01vZGVsKGNvbnRleHQpO1xufVxuXG5jbGFzcyBHYW1lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogT2JzZXJ2YWJsZUFycmF5PFBsYXllclZpZXdNb2RlbD47XG4gICAgcHJpdmF0ZSBfY3VycmVudFJvdW5kID0gMTtcbiAgICBwcml2YXRlIF90b3RhbFJvdW5kczogbnVtYmVyO1xuICAgIHByaXZhdGUgX3JvdW5kU2NvcmUgPSAwO1xuICAgIHByaXZhdGUgX3JvbGxDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllckluZGV4ID0gMDtcbiAgICBwcml2YXRlIF9tb3ZlSGlzdG9yeTogTW92ZVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lVmlld01vZGVsIGNvbnN0cnVjdG9yIGNhbGxlZCB3aXRoIGNvbnRleHQ6JywgY29udGV4dCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl90b3RhbFJvdW5kcyA9IGNvbnRleHQ/LnRvdGFsUm91bmRzIHx8IDEwO1xuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lcyA9IGNvbnRleHQ/LnBsYXllcnMgfHwgW107XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcgd2l0aCBwbGF5ZXIgbmFtZXM6JywgcGxheWVyTmFtZXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UGxheWVyVmlld01vZGVsPigpO1xuICAgICAgICBwbGF5ZXJOYW1lcy5mb3JFYWNoKChuYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJWaWV3TW9kZWwobmFtZSwgdGhpcyk7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gaW5kZXggPT09IDA7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVycyBpbml0aWFsaXplZDonLCB0aGlzLl9wbGF5ZXJzKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVycygpIHsgcmV0dXJuIHRoaXMuX3BsYXllcnM7IH1cbiAgICBnZXQgY3VycmVudFJvdW5kKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJvdW5kOyB9XG4gICAgZ2V0IHJvdW5kU2NvcmUoKSB7IHJldHVybiB0aGlzLl9yb3VuZFNjb3JlOyB9XG4gICAgZ2V0IGN1cnJlbnRQbGF5ZXIoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KT8ubmFtZSB8fCAnJzsgfVxuICAgIGdldCByb2xsQ291bnQoKSB7IHJldHVybiB0aGlzLl9yb2xsQ291bnQ7IH1cbiAgICBnZXQgY2FuRGVsZXRlUGxheWVycygpIHsgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmUgPT09IDAgJiYgdGhpcy5fcm9sbENvdW50ID09PSAwICYmIHRoaXMuX3BsYXllcnMubGVuZ3RoID4gMjsgfVxuICAgIGdldCBjYW5VbmRvKCkgeyByZXR1cm4gdGhpcy5fbW92ZUhpc3RvcnkubGVuZ3RoID4gMDsgfVxuICAgIGdldCBpc0VkaXRNb2RlKCkgeyByZXR1cm4gdGhpcy5faXNFZGl0TW9kZTsgfVxuICAgIGdldCBjdXJyZW50TGVhZGVyKCkge1xuICAgICAgICBsZXQgaGlnaHNjb3JlID0gMFxuICAgICAgICBsZXQgbGVhZGVyID0gJydcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyLnRvdGFsU2NvcmUgPiBoaWdoc2NvcmUpIHtcbiAgICAgICAgICAgICAgICBsZWFkZXIgPSBwbGF5ZXIubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxlYWRlciB8fCAnJ1xuICAgIH1cblxuICAgIG9uUnVsZXMoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvcnVsZXMvcnVsZXMnLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdG9nZ2xlRWRpdE1vZGUoKSB7XG4gICAgICAgIHRoaXMuX2lzRWRpdE1vZGUgPSAhdGhpcy5faXNFZGl0TW9kZTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNFZGl0TW9kZScsIHRoaXMuX2lzRWRpdE1vZGUpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci51cGRhdGVFZGl0TW9kZSgpKTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdW5kU2NvcmUgPT09IDAgJiYgdGhpcy5fcm9sbENvdW50ID09PSAwICYmIHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpID4gMDtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyRG93bihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91bmRTY29yZSA9PT0gMCAmJiB0aGlzLl9yb2xsQ291bnQgPT09IDAgJiYgdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcikgPCB0aGlzLl9wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllclVwKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlUGxheWVyVXAocGxheWVyKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGNvbnN0IHdhc0N1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIuaXNDdXJyZW50UGxheWVyO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCAtIDEsIDAsIHBsYXllcik7XG4gICAgICAgIFxuICAgICAgICBpZiAod2FzQ3VycmVudFBsYXllcikge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbk1vdmVQbGF5ZXJEb3duKHBsYXllcikpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBjb25zdCB3YXNDdXJyZW50UGxheWVyID0gcGxheWVyLmlzQ3VycmVudFBsYXllcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXggKyAxLCAwLCBwbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIGlzTGFzdFBsYXllclRvTG9jayhwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBsb2NrZWRDb3VudCA9IHRoaXMuX3BsYXllcnMuZmlsdGVyKHAgPT4gcC5pc0xvY2tlZCkubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbG9ja2VkQ291bnQgPT09IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSAmJiAhcGxheWVyLmlzTG9ja2VkO1xuICAgIH1cblxuICAgIGVkaXRQbGF5ZXJOYW1lKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFZGl0IFBsYXllciBOYW1lXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIG5ldyBuYW1lIGZvciBcIiArIHBsYXllci5uYW1lLFxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IHBsYXllci5uYW1lLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNhdmVcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdCAmJiByZXN1bHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubmFtZSA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TY29yZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoYnV0dG9uLnRleHQpO1xuICAgICAgICBsZXQgc2NvcmVUb0FkZCA9IDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1dpdGhpbkZpcnN0VGhyZWUgPSB0aGlzLl9yb2xsQ291bnQgPCAzO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzV2l0aGluRmlyc3RUaHJlZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSArPSBzY29yZVRvQWRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAyIHx8IHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9BZGQgPSBNYXRoLmZsb29yKHRoaXMuX3JvdW5kU2NvcmUgKiAyLjUpIC0gdGhpcy5fcm91bmRTY29yZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gTWF0aC5mbG9vcih0aGlzLl9yb3VuZFNjb3JlICogMi41KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0FkZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdW5kU2NvcmUgKz0gc2NvcmVUb0FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAncm9sbCcsXG4gICAgICAgICAgICBzY29yZTogc2NvcmVUb0FkZCxcbiAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgsXG4gICAgICAgICAgICByb3VuZFNjb3JlOiB0aGlzLl9yb3VuZFNjb3JlIC0gc2NvcmVUb0FkZCxcbiAgICAgICAgICAgIHJvbGxDb3VudDogdGhpcy5fcm9sbENvdW50XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMubmV4dFBsYXllcigpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG9uRG91YmxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JvbGxDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRTY29yZSA9IHRoaXMuX3JvdW5kU2NvcmU7XG4gICAgICAgICAgICB0aGlzLl9yb3VuZFNjb3JlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX21vdmVIaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkb3VibGVzJyxcbiAgICAgICAgICAgICAgICBzY29yZTogdGhpcy5fcm91bmRTY29yZSAtIG9sZFNjb3JlLFxuICAgICAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXgsXG4gICAgICAgICAgICAgICAgcm91bmRTY29yZTogb2xkU2NvcmUsXG4gICAgICAgICAgICAgICAgcm9sbENvdW50OiB0aGlzLl9yb2xsQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVW5kbygpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVIaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gdGhpcy5fbW92ZUhpc3RvcnkucG9wKCk7XG4gICAgICAgIGlmICghbGFzdE1vdmUpIHJldHVybjtcblxuICAgICAgICBpZiAobGFzdE1vdmUudHlwZSA9PT0gJ2xvY2snKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0obGFzdE1vdmUucGxheWVySW5kZXgpO1xuICAgICAgICAgICAgaWYgKGxhc3RNb3ZlLndhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSBsYXN0TW92ZS5wbGF5ZXJJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bmxvY2tQbGF5ZXIocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gbGFzdE1vdmUucGxheWVySW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcm91bmRTY29yZSA9IGxhc3RNb3ZlLnJvdW5kU2NvcmU7XG4gICAgICAgICAgICB0aGlzLl9yb2xsQ291bnQgPSBsYXN0TW92ZS5yb2xsQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQbGF5ZXJzID0gdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7IHByZXZpb3VzUGxheWVycyB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY2tQbGF5ZXIocGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwpIHtcbiAgICAgICAgaWYgKHBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHdhc0N1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIuaXNDdXJyZW50UGxheWVyO1xuICAgICAgICBwbGF5ZXIuYWRkU2NvcmUodGhpcy5fcm91bmRTY29yZSk7XG4gICAgICAgIHBsYXllci5pc0xvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbG9jaycsXG4gICAgICAgICAgICBzY29yZTogdGhpcy5fcm91bmRTY29yZSxcbiAgICAgICAgICAgIHBsYXllckluZGV4OiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSxcbiAgICAgICAgICAgIHJvdW5kU2NvcmU6IHRoaXMuX3JvdW5kU2NvcmUsXG4gICAgICAgICAgICByb2xsQ291bnQ6IHRoaXMuX3JvbGxDb3VudCxcbiAgICAgICAgICAgIHdhc0N1cnJlbnRQbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maW5kTmV4dFVubG9ja2VkUGxheWVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBsYXllckluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHVubG9ja1BsYXllcihwbGF5ZXI6IFBsYXllclZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIXBsYXllci5pc0xvY2tlZCkgcmV0dXJuO1xuXG4gICAgICAgIHBsYXllci5yZW1vdmVTY29yZSgpO1xuICAgICAgICBwbGF5ZXIuaXNMb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJJbmRleCA9IHRoaXMuX3BsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgICBjb25zdCBsYXN0TG9ja01vdmUgPSBbLi4udGhpcy5fbW92ZUhpc3RvcnldLnJldmVyc2UoKS5maW5kKFxuICAgICAgICAgICAgbW92ZSA9PiBtb3ZlLnR5cGUgPT09ICdsb2NrJyAmJiBtb3ZlLnBsYXllckluZGV4ID09PSBwbGF5ZXJJbmRleFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChsYXN0TG9ja01vdmU/Lndhc0N1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gcGxheWVySW5kZXg7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUGxheWVyKHBsYXllcjogUGxheWVyVmlld01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5EZWxldGVQbGF5ZXJzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5fY3VycmVudFBsYXllckluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVySW5kZXggPSAodGhpcy5fY3VycmVudFBsYXllckluZGV4ICsgMSkgJSB0aGlzLl9wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4LS07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fcGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzQ3VycmVudFBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpbmROZXh0VW5sb2NrZWRQbGF5ZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA8IHRoaXMuX3BsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLmdldEl0ZW0odGhpcy5fY3VycmVudFBsYXllckluZGV4KS5pc0N1cnJlbnRQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kTmV4dFVubG9ja2VkUGxheWVyKCkge1xuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BsYXllcnMuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UGxheWVySW5kZXgpLmlzTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLl9jdXJyZW50UGxheWVySW5kZXggIT09IHN0YXJ0SW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmFsbFBsYXllcnNMb2NrZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0Um91bmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFJvdW5kKCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50Um91bmQrKztcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3VuZCA+IHRoaXMuX3RvdGFsUm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYFN0YXJ0aW5nIHJvdW5kICR7dGhpcy5fY3VycmVudFJvdW5kfWApO1xuICAgICAgICB0aGlzLl9yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5fcm9sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fbW92ZUhpc3RvcnkgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIENvbnRpbnVlIHdpdGggbmV4dCBwbGF5ZXIgaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gZmlyc3RcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgdGhpcy5fcGxheWVycy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5yZXNldEZvck5ld1JvdW5kKCk7XG4gICAgICAgICAgICBwbGF5ZXIuaXNDdXJyZW50UGxheWVyID0gaW5kZXggPT09IHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyU3RhdGVzKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVDYW5EZWxldGUoKTtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVDYW5VbmxvY2soKTtcbiAgICAgICAgICAgIHBsYXllci51cGRhdGVNb3ZlQnV0dG9ucygpO1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZUVkaXRNb2RlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWxsUGxheWVyc0xvY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMuZXZlcnkocGxheWVyID0+IHBsYXllci5pc0xvY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCkge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLl9wbGF5ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gXG4gICAgICAgICAgICAocHJldi50b3RhbFNjb3JlID4gY3VycmVudC50b3RhbFNjb3JlKSA/IHByZXYgOiBjdXJyZW50XG4gICAgICAgICk7XG4gICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhICR7d2lubmVyLm5hbWV9IHdpbnMgd2l0aCAke3dpbm5lci50b3RhbFNjb3JlfSBwb2ludHMhYCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3RpZnlQcm9wZXJ0eUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRSb3VuZCcsIHRoaXMuX2N1cnJlbnRSb3VuZCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3JvdW5kU2NvcmUnLCB0aGlzLl9yb3VuZFNjb3JlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY3VycmVudFBsYXllcicsIHRoaXMuY3VycmVudFBsYXllcik7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2N1cnJlbnRMZWFkZXInLCB0aGlzLmN1cnJlbnRMZWFkZXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdyb2xsQ291bnQnLCB0aGlzLl9yb2xsQ291bnQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5VbmRvJywgdGhpcy5jYW5VbmRvKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuRGVsZXRlUGxheWVycycsIHRoaXMuY2FuRGVsZXRlUGxheWVycyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllcnMnLCB0aGlzLl9wbGF5ZXJzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExhbmRpbmdWaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgTGFuZGluZ1ZpZXdNb2RlbCB7XG4gICAgb25OZXdHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGluZyB0byBwbGF5ZXIgc2VsZWN0aW9uJyk7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvcGxheWVyLXNlbGVjdGlvbi9wbGF5ZXItc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMYW5kaW5nVmlld01vZGVsKCk7XG59XG5cbmNsYXNzIExhbmRpbmdWaWV3TW9kZWwge1xuICAgIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpbmcgdG8gcGxheWVyIHNlbGVjdGlvbicpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3BsYXllci1zZWxlY3Rpb24vcGxheWVyLXNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVsZXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIHJ1bGVzIHBhZ2UnKTtcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9ydWxlcy9ydWxlcycsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlQXJyYXksIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcGxheWVyczogT2JzZXJ2YWJsZUFycmF5PHsgbmFtZTogc3RyaW5nIH0+O1xuICAgIHByaXZhdGUgX3BsYXllck5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IE9ic2VydmFibGVBcnJheTx7IG5hbWU6IHN0cmluZyB9PigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBwbGF5ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyTmFtZTtcbiAgICB9XG5cbiAgICBzZXQgcGxheWVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJOYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgncGxheWVyTmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyTmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMucHVzaCh7IG5hbWU6IHRoaXMucGxheWVyTmFtZS50cmltKCkgfSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29udGludWUoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3Mvcm91bmQtc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgcGxheWVyczogdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIE9ic2VydmFibGUsIE9ic2VydmFibGVBcnJheSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5jbGFzcyBQbGF5ZXJJdGVtIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3ZpZXdNb2RlbDogUGxheWVyU2VsZWN0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2aWV3TW9kZWw6IFBsYXllclNlbGVjdGlvblZpZXdNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdmlld01vZGVsID0gdmlld01vZGVsO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYW5Nb3ZlVXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3TW9kZWwuY2FuTW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBjYW5Nb3ZlRG93bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNb2RlbC5jYW5Nb3ZlUGxheWVyRG93bih0aGlzKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbC5yZW1vdmVQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwubW92ZVBsYXllclVwKHRoaXMpO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLl92aWV3TW9kZWwubW92ZVBsYXllckRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlTmFtZShhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSB0ZXh0RmllbGQudGV4dC50cmltKCk7XG4gICAgICAgIGlmIChuZXdOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBjb250ZXh0ID0gYXJncy5jb250ZXh0IHx8IHt9O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUGxheWVyU2VsZWN0aW9uVmlld01vZGVsKGNvbnRleHQpO1xufVxuXG5jbGFzcyBQbGF5ZXJTZWxlY3Rpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBPYnNlcnZhYmxlQXJyYXk8UGxheWVySXRlbT47XG4gICAgcHJpdmF0ZSBfcGxheWVyTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFBsYXllckl0ZW0+KCk7XG4gICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSAnJztcblxuICAgICAgICAvLyBBZGQgcHJldmlvdXMgcGxheWVycyBpZiB0aGV5IGV4aXN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVycyA9IGNvbnRleHQ/LnByZXZpb3VzUGxheWVycyB8fCBbXTtcbiAgICAgICAgcHJldmlvdXNQbGF5ZXJzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllckl0ZW0obmFtZSwgdGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXllck5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJOYW1lO1xuICAgIH1cblxuICAgIGdldCBjYW5Db250aW51ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnMubGVuZ3RoID49IDI7XG4gICAgfVxuXG4gICAgc2V0IHBsYXllck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyTmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3BsYXllck5hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllck5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllckl0ZW0odGhpcy5wbGF5ZXJOYW1lLnRyaW0oKSwgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gJyc7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Db250aW51ZScsIHRoaXMuY2FuQ29udGludWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBsYXllcihwbGF5ZXI6IFBsYXllckl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuQ29udGludWUnLCB0aGlzLmNhbkNvbnRpbnVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5Nb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA+IDA7XG4gICAgfVxuXG4gICAgY2FuTW92ZVBsYXllckRvd24ocGxheWVyOiBQbGF5ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKSA8IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyVXAocGxheWVyOiBQbGF5ZXJJdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMuc3BsaWNlKGluZGV4IC0gMSwgMCwgcGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWVyU3RhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyRG93bihwbGF5ZXI6IFBsYXllckl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5fcGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnNwbGljZShpbmRleCArIDEsIDAsIHBsYXllcik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclN0YXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGF5ZXJTdGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgcGxheWVyLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYW5Nb3ZlVXAnLCBwbGF5ZXIuY2FuTW92ZVVwKTtcbiAgICAgICAgICAgIHBsYXllci5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FuTW92ZURvd24nLCBwbGF5ZXIuY2FuTW92ZURvd24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvbnRpbnVlKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5Db250aW51ZSkge1xuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGlvbkNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5fcGxheWVycy5tYXAocCA9PiBwLm5hbWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyIFNlbGVjdGlvbiBuYXZpZ2F0aW5nIHdpdGggY29udGV4dDonLCBuYXZpZ2F0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL3JvdW5kLXNlbGVjdGlvbi9yb3VuZC1zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG5hdmlnYXRpb25Db250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUm91bmRTZWxlY3Rpb25WaWV3TW9kZWwocGFnZS5uYXZpZ2F0aW9uQ29udGV4dCk7XG59XG5cbmNsYXNzIFJvdW5kU2VsZWN0aW9uVmlld01vZGVsIHtcbiAgICBwcml2YXRlIHBsYXllcnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3VuZFNlbGVjdGlvbiBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgIH1cblxuICAgIHNlbGVjdFJvdW5kcyhhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHJvdW5kcyA9IHBhcnNlSW50KGJ1dHRvbi50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGdhbWUgd2l0aDonLCB7XG4gICAgICAgICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMsXG4gICAgICAgICAgICB0b3RhbFJvdW5kczogcm91bmRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvZ2FtZScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLFxuICAgICAgICAgICAgICAgIHRvdGFsUm91bmRzOiByb3VuZHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGV4dCA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgY29uc29sZS5sb2coJ1JvdW5kIFNlbGVjdGlvbiByZWNlaXZlZCBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUm91bmRTZWxlY3Rpb25WaWV3TW9kZWwoY29udGV4dCk7XG59XG5cbmNsYXNzIFJvdW5kU2VsZWN0aW9uVmlld01vZGVsIHtcbiAgICBwcml2YXRlIHBsYXllcnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3VuZFNlbGVjdGlvbiBjb25zdHJ1Y3RvciBjb250ZXh0OicsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBjb250ZXh0Py5wbGF5ZXJzIHx8IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVycyBpbiByb3VuZCBzZWxlY3Rpb246JywgdGhpcy5wbGF5ZXJzKTtcbiAgICB9XG5cbiAgICBzZWxlY3RSb3VuZHMoYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCByb3VuZHMgPSBwYXJzZUludChidXR0b24udGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHBsYXllcnM6IHRoaXMucGxheWVycyxcbiAgICAgICAgICAgIHRvdGFsUm91bmRzOiByb3VuZHNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW5nIHRvIGdhbWUgd2l0aCBjb250ZXh0OicsIG5hdmlnYXRpb25Db250ZXh0KTtcblxuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL2dhbWUvZ2FtZScsXG4gICAgICAgICAgICBjb250ZXh0OiBuYXZpZ2F0aW9uQ29udGV4dCxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgUnVsZXNWaWV3TW9kZWwoKTtcbn1cblxuY2xhc3MgUnVsZXNWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIGlmIG5lZWRlZFxuICAgIH1cbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwidmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZVxcXCIgLz5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiIC8+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgJyArIGN1cnJlbnRSb3VuZCB9fVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnQ3VycmVudCBQbGF5ZXI6ICcgKyBjdXJyZW50UGxheWVyIH19XFxcIiBjbGFzcz1cXFwic3VidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdSb3VuZCBTY29yZTogJyArIHJvdW5kU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIzXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjRcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjVcXFwiIHRhcD1cXFwie3sgb25TY29yZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiNlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI3XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kYW5nZXInIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiOFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCI5XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIxMVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCIxMlxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJEb3VibGVzXFxcIiB0YXA9XFxcInt7IG9uRG91YmxlcyB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPj0gMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA+PSAzID8gJ2J0biBidG4tcHVycGxlJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTQgcC0yIGJnLXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKiwgYXV0b1xcXCIgY2xhc3M9XFxcInBsYXllci1zdGF0dXMge3sgaXNDdXJyZW50UGxheWVyID8gJ3BsYXllci1zdGF0dXMtYWN0aXZlJyA6ICcnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgY2xhc3M9XFxcInBsYXllci1uYW1lXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyB0b3RhbFNjb3JlIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLXNjb3JlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgaXNMb2NrZWQgPyAnTG9ja2VkJyA6ICdMb2NrJyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyAkcGFyZW50c1snUGFnZSddLm9uTG9ja1RhcCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNMb2NrZWQgPyAnYnRuIGJ0bi1kaXNhYmxlZCcgOiAnYnRuIGJ0bi1wcmltYXJ5JyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7ICFpc0xvY2tlZCB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2NrIE4nIFJvbGxcXFwiPlxcbiAgICAgICAgPEFjdGlvbkl0ZW0gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiIC8+XFxuICAgICAgICA8QWN0aW9uSXRlbSB0ZXh0PVxcXCJSdWxlcyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xcXCIgdGFwPVxcXCJ7eyBvblJ1bGVzIH19XFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjEwcHhcXFwiIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIiAvPlxcbiAgICAgICAgPEFjdGlvbkl0ZW0gdGV4dD1cXFwie3sgaXNFZGl0TW9kZSA/ICdEb25lJyA6ICdFZGl0JyB9fVxcXCIgdGFwPVxcXCJ7eyB0b2dnbGVFZGl0TW9kZSB9fVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXG4gICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ1JvdW5kICcgKyBjdXJyZW50Um91bmQgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnQ3VycmVudCBQbGF5ZXI6ICcgKyBjdXJyZW50UGxheWVyIH19XFxcIiBjbGFzcz1cXFwiZ2FtZS1pbmZvXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ0xlYWRlcjogJyArIGN1cnJlbnRMZWFkZXIgfX1cXFwiIGNsYXNzPVxcXCJnYW1lLWluZm9cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnUm91bmQgU2NvcmU6ICcgKyByb3VuZFNjb3JlIH19XFxcIiBjbGFzcz1cXFwiZ2FtZS1pbmZvXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBVbmRvIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihqnvuI9cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvblVuZG8gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkPVxcXCJ7eyBjYW5VbmRvIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cXFwie3sgY2FuVW5kbyA/IDEgOiAwLjUgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XFxcIjAgNCA4IDRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFNjb3JlIEJ1dHRvbnMgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICosICpcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwie3sgcm9sbENvdW50ID49IDMgPyAnMigyLjV4KScgOiAnMigyMDApJyB9fVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiM1xcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwiNFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCI1XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCI2XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCI3XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJ7eyByb2xsQ291bnQgPCAzID8gJ2J0biBidG4tc3VjY2VzcycgOiAnYnRuIGJ0bi1kYW5nZXInIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCI4XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCI5XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCIxMFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIxMVxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgcm9sbENvdW50ID49IDMgPyAnMTIoMi41eCknIDogJzEyKDIwMCknIH19XFxcIiB0YXA9XFxcInt7IG9uU2NvcmUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJEb3VibGVzXFxcIiB0YXA9XFxcInt7IG9uRG91YmxlcyB9fVxcXCIgaXNFbmFibGVkPVxcXCJ7eyByb2xsQ291bnQgPj0gMyB9fVxcXCIgY2xhc3M9XFxcInt7IHJvbGxDb3VudCA+PSAzID8gJ2J0biBidG4tcHVycGxlJyA6ICdidG4gYnRuLWRpc2FibGVkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFBsYXllcnMgU2VjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBwbGF5ZXJzIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqLCBhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicGxheWVyLXN0YXR1cyB7eyBpc0N1cnJlbnRQbGF5ZXIgPyAncGxheWVyLXN0YXR1cy1hY3RpdmUnIDogJycgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVcC9Eb3duIEFycm93cyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBpc0VkaXRNb2RlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaRXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBtb3ZlVXAgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjYW5Nb3ZlVXAgPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuTW92ZVVwIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLihpNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG1vdmVEb3duIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZURvd24gPyAnIzNiODJmNicgOiAnIzljYTNhZicgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgY2FuTW92ZURvd24gfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIyMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWRpdCBOYW1lIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCLinI/vuI9cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgZWRpdE5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eT1cXFwie3sgaXNFZGl0TW9kZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQbGF5ZXIgTmFtZSBhbmQgU2NvcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLW5hbWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIzXFxcIiB0ZXh0PVxcXCJ7eyB0b3RhbFNjb3JlIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLXNjb3JlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExvY2svVW5sb2NrIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCI0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBpc0xvY2tlZCA/IChjYW5VbmxvY2sgPyAnVW5sb2NrJyA6ICdMb2NrZWQnKSA6ICdMb2NrJyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBpc0xvY2tlZCA/IChjYW5VbmxvY2sgPyB1bmxvY2sgOiBudWxsKSA6IGxvY2sgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGlzTG9ja2VkID8gKGNhblVubG9jayA/ICdidG4gYnRuLXN1Y2Nlc3MnIDogJ2J0biBidG4tZGlzYWJsZWQnKSA6ICdidG4gYnRuLXByaW1hcnknIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgIWlzTG9ja2VkIHx8IGNhblVubG9jayB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGVsZXRlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCI1XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCLinJVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgcmVtb3ZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuLWljb24tY29tcGFjdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIiNlZjQ0NDRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk9XFxcInt7IGlzRWRpdE1vZGUgJiYgY2FuRGVsZXRlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgICAgIDwhLS0gQWQgU3BhY2UgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYWQtY29udGFpbmVyXFxcIiAvPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvY2sgTicgUm9sbFxcXCIgLz5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxvY2sgTicgUm9sbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOZXcgR2FtZVxcXCIgdGFwPVxcXCJ7eyBvbk5ld0dhbWUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIC8+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvY2sgTicgUm9sbFxcXCIgLz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gTG9nbyAtLT5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L3ZpZXdzL2Fzc2V0cy9sb2dvLnBuZ1xcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgbWFyZ2luPVxcXCIzMlxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9jayBOJyBSb2xsXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOZXcgR2FtZVxcXCIgdGFwPVxcXCJ7eyBvbk5ld0dhbWUgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiMTZcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJSdWxlc1xcXCIgdGFwPVxcXCJ7eyBvblJ1bGVzIH19XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW49XFxcIjE2XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwhLS0gQWQgU3BhY2UgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYWQtY29udGFpbmVyXFxcIiAvPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFkZCBQbGF5ZXJzXFxcIiAvPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGNvbD1cXFwiMFxcXCIgaGludD1cXFwiRW50ZXIgcGxheWVyIG5hbWVcXFwiIHRleHQ9XFxcInt7IHBsYXllck5hbWUgfX1cXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiQWRkXFxcIiB0YXA9XFxcInt7IGFkZFBsYXllciB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgcGxheWVycyB9fVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwicGxheWVyLW5hbWUgcC0yXFxcIiAvPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPC9MaXN0Vmlldz5cXG5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ29udGludWVcXFwiIHRhcD1cXFwie3sgb25Db250aW51ZSB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaXNFbmFibGVkPVxcXCJ7eyBwbGF5ZXJzLmxlbmd0aCA+IDEgfX1cXFwiIC8+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFkZCBQbGF5ZXJzXFxcIiAvPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIj5cXG4gICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWRkIFBsYXllcnNcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBhdCBsZWFzdCAyIHBsYXllcnMgdG8gY29udGludWVcXFwiIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XFxcIjBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkVudGVyIHBsYXllciBuYW1lXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBwbGF5ZXJOYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzPVxcXCJ7eyBhZGRQbGF5ZXIgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIkFkZFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBhZGRQbGF5ZXIgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZD1cXFwie3sgcGxheWVyTmFtZS5sZW5ndGggPiAwIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gUGxheWVycyBMaXN0IC0tPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IHBsYXllcnMgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sIGF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJwbGF5ZXItc3RhdHVzLWNvbXBhY3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBVcC9Eb3duIEFycm93cyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIuKGkVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgbW92ZVVwIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1pY29uLWNvbXBhY3RcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY2FuTW92ZVVwID8gJyMzYjgyZjYnIDogJyM5Y2EzYWYnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbk1vdmVVcCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi4oaTXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBtb3ZlRG93biB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNhbk1vdmVEb3duID8gJyMzYjgyZjYnIDogJyM5Y2EzYWYnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbk1vdmVEb3duIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFBsYXllciBOYW1lIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjb2w9XFxcIjJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzPVxcXCJ7eyB1cGRhdGVOYW1lIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWxldGUgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIuKclVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyByZW1vdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4taWNvbi1jb21wYWN0XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiI2VmNDQ0NFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMTZcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJDb250aW51ZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG9uQ29udGludWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGNhbkNvbnRpbnVlID8gJ2J0biBidG4tcHJpbWFyeScgOiAnYnRuIGJ0bi1kaXNhYmxlZCcgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ9XFxcInt7IGNhbkNvbnRpbnVlIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVxcXCIxNiA0XFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICA8IS0tIEFkIFNwYWNlIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImFkLWNvbnRhaW5lclxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlbGVjdCBSb3VuZHNcXFwiIC8+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWxlY3QgTnVtYmVyIG9mIFJvdW5kc1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAvPlxcbiAgICAgICAgPFdyYXBMYXlvdXQgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjEwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjE1XFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjIwXFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjI1XFxcIiB0YXA9XFxcInt7IHNlbGVjdFJvdW5kcyB9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgLz5cXG4gICAgICAgIDwvV3JhcExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiU2VsZWN0IFJvdW5kc1xcXCIgLz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2VsZWN0IE51bWJlciBvZiBSb3VuZHNcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSG93IG1hbnkgcm91bmRzIHdvdWxkIHlvdSBsaWtlIHRvIHBsYXk/XFxcIiBjbGFzcz1cXFwic3VidGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFdyYXBMYXlvdXQgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibS00XFxcIj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxMFxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIxNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIyMFxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIyNVxcXCIgdGFwPVxcXCJ7eyBzZWxlY3RSb3VuZHMgfX1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbj1cXFwiOFxcXCIgcGFkZGluZz1cXFwiMjBcXFwiIGZvbnRTaXplPVxcXCIyNFxcXCIgLz5cXG4gICAgICAgICAgICA8L1dyYXBMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPCEtLSBBZCBTcGFjZSAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJhZC1jb250YWluZXJcXFwiIC8+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIlxcbiAgICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSdWxlc1xcXCIgLz5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCI+XFxuICAgICAgICA8U2Nyb2xsVmlldyByb3c9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlJ1bGVzIGFuZCBHYW1lcGxheVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJwYWdlLXRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJlZm9yZSB5b3Ugc3RhcnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFsbCB0aGF0IHlvdSBuZWVkIHRvIHBsYXkgYXJlIDIgRGljZSwgVGhpcyBhcHAsIGFuZCBhbGwgb2YgeW91ciBmcmllbmRzIVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJzZWN0aW9uLXRleHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiR2FtZSBQbGF5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJFYWNoIHBsYXllciB3aWxsIHJvbGwgdGhlIGRpY2Ugd2hlbiBpdCBpcyB0aGVpciB0dXJuLiBUaGUgc2NvcmVrZWVwZXIgd2lsbCByZWNvcmQgdGhlIHN1bSBvZiBib3RoIGRpY2UgdG8gdGhlIGFwcCBhZnRlciBlYWNoIHJvbGwuIEl0cyBhcyBzaW1wbGUgYXMgdGhhdC4uLiBvciBpcyBpdD9cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNjb3JpbmdcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZpcnN0IDMgcm9sbHNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic3Vic2VjdGlvbi10aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbmRlbnRlZC1zZWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCLigKIgRG91YmxlIDEncyAoU25ha2UgZXllcykgYXJlIHdvcnRoIDIwMC5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIuKAoiBEb3VibGUgNidzICgxMikgYXJlIHdvcnRoIDIwMC5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIuKAoiA3J3MgYXJlIHdvcnRoIDEwMC5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIuKAoiBBbGwgb3RoZXIgbnVtYmVycyBhcmUgc2NvcmVkIGFzIGZhY2UgdmFsdWUuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGV4dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCLigKIgTm8gZG91YmxlcyBhcHBseSBleGNlcHQgMSdzIGFuZCA2J3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFmdGVyIDNyZCByb2xsXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInN1YnNlY3Rpb24tdGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5kZW50ZWQtc2VjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwi4oCiIERvdWJsZSAxJ3MgYW5kIERvdWJsZSA2J3MgbXVsdGlwbHkgdGhlIHNjb3JlIGJ5IDIuNSAoMTAwIHdvdWxkIGJlY29tZSAyNTApXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGV4dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCLigKIgQW55IG90aGVyIERvdWJsZSB3aWxsIERPVUJMRSB0aGUgcm91bmRzIGN1cnJlbnQgc2NvcmUuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGV4dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCLigKIgSWYgYSA3IGlzIHJvbGxlZCwgdGhlIHJvdW5kIEVORFMuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGV4dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCLigKIgQWxsIG90aGVyIG51bWJlcnMgYXJlIHNjb3JlZCBhcyBmYWNlIHZhbHVlLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJzZWN0aW9uLXRleHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9ja2luZ1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQmV0d2VlbiBhbnkgcm91bmQsIGFueSBwbGF5ZXIgY2FuIExPQ0sgdGhlaXIgc2NvcmUuIElmIHRoZSBzY29yZSBpcyBnZXR0aW5nIGhpZ2gsIGFuZCB5b3UgYXJlIGFmcmFpZCB0aGF0IHNvbWVvbmUgd2lsbCByb2xsIGEgNyBhbmQgZW5kIHRoZSByb3VuZCwgeW91IGNhbiBsb2NrIHlvdXIgc2NvcmUgaW4uIFRoaXMgd2lsbCBhZGQgdGhlIHJvdW5kcyBjdXJyZW50IHNjb3JlIHRvIHlvdXIgdG90YWwsIGFuZCB5b3Ugd2lsbCBiZSBvdXQgZm9yIHRoZSByb3VuZC4gSWYgeW91IGRvIG5vdCBsb2NrIGJlZm9yZSBhIDcgaXMgcm9sbGVkLCB5b3UgYXJlIHJld2FyZGVkIDAgcG9pbnRzIGZvciB0aGUgcm91bmRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldpbm5lclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG8gd2luLCB5b3UgbXVzdCBzaW1wbHkgaGF2ZSB0aGUgbW9zdCBwb2ludHMgYXQgdGhlIGVuZCBvZiBhbGwgdGhlIHJvdW5kcy4gRWFzeSwgcmlnaHQ/XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGV4dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb3cgdG8ga2VlcCBzY29yZSAoRm9yIHRoZSBzY29yZSBrZWVwZXIgb25seSlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkVhY2ggdGltZSBhIHBsYXllciByb2xscywgeW91IHNpbXBseSBjbGljayB0aGUgbnVtYmVyIHRoZXkgcm9sbC4gRm9yIGFsbCBkb3VibGVzIGJlc2lkZXMgMSdzIGFuZCA2J3MsIGNsaWNrIHRoZSBkb3VibGVzIGJ1dHRvbiB0byBkb3VibGUgdGhlIHJvdW5kcyBzY29yZS5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2hlbiBhIHBsYXllciB3YW50cyB0byBsb2NrIHRoZWlyIHNjb3JlLCBzaW1wbHkgZmluZCB0aGVpciBuYW1lIGFuZCBjbGljayB0aGUgbG9jayBpY29uIG5leHQgdG8gdGhlaXIgbmFtZS4gVGhpcyB3aWxsIGxvY2sgdGhlbSBhbmQgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgbGlzdCBvZiByb2xsZXJzIGZvciB0aGUgcm91bmQuIFRoZXkgd2lsbCByZXN1bWUgcm9sbGluZyBpbiB0aGUgbmV4dCByb3VuZC5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSWYgeW91IG1ha2UgYSBtaXN0YWtlLCB0aGVyZSBpcyBhbiB1bmRvIGJ1dHRvbi4gWW91IGNhbiBhbHNvIHVubG9jayBhIHBsYXllciBpZiB0aGV5IGNoYW5nZSB0aGVpciBtaW5kLiBCdXQgdGhpcyBjYW4gb25seSBiZSBkb25lIGJlZm9yZSB0aGUgbmV4dCBwbGF5ZXIgcm9sbHMuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNlY3Rpb24tdGV4dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGQVFcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldoYXQgaXMgYSBkb3VibGU/XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInN1YnNlY3Rpb24tdGl0bGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBIGRvdWJsZSBtZWFucyB0aGF0IGJvdGggZGljZSB0aGF0IGFyZSByb2xsZWQgZGlzcGxheSB0aGUgZXhhY3Qgc2FtZSBudW1iZXIuIGllOiB3aGVuIHJvbGxlZCwgYm90aCBkaWNlIGxhbmQgd2l0aCBhIDQgZGlzcGxheWVkLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJzZWN0aW9uLXRleHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2FuIEkgc3VibWl0IHN1Z2dlc3Rpb25zIGFuZCBidWdzP1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJzdWJzZWN0aW9uLXRpdGxlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiWWVzLCBwbGVhc2UgZG8hIFBsZWFzZSBlbWFpbDogQnJhbmRvbk5lbHNvbjMyNUBnbWFpbC5jb21cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwic2VjdGlvbi10ZXh0XFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICA8IS0tIEFkIFNwYWNlIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImFkLWNvbnRhaW5lclxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=