/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ComputerPlayer.js":
/*!*******************************!*\
  !*** ./src/ComputerPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n\n\nclass ComputerPlayer extends _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super(\"Computer\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComputerPlayer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcHV0ZXJQbGF5ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7O0FBRWpDLDZCQUE2QixrREFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0ZXNoaXAvLi9zcmMvQ29tcHV0ZXJQbGF5ZXIuanM/Y2RhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllci5qc1wiO1xuXG5jbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQ29tcHV0ZXJcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHV0ZXJQbGF5ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ComputerPlayer.js\n");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n  constructor() {\n    this.board = [\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n    ];\n    this.attacks = [\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n      [[], [], [], [], [], [], [], [], [], []],\n    ];\n    this.shipTiles = 0;\n  }\n\n  placeShip(x, y, ship, direction) {\n    if (this.isValidPlace(x, y, ship, direction) == true) {\n      if (ship.length == 1) {\n        this.changeCell(x, y, ship);\n        this.shipTiles++;\n      } else {\n        if (direction == \"horizontal\") {\n          for (var i = 0; i < ship.length; i++) {\n            this.changeCell(x, y, ship);\n            x++;\n            this.shipTiles++;\n          }\n        } else {\n          for (var j = 0; j < ship.length; j++) {\n            this.changeCell(x, y, ship);\n            y++;\n            this.shipTiles++;\n          }\n        }\n      }\n    }\n  }\n\n  isValidPlace(x, y, ship, direction) {\n    if (\n      (direction == \"horizontal\" && x + ship.length > 10) ||\n      (direction == \"vertical\" && y + ship.length > 10)\n    ) {\n      return false;\n    }\n    return true;\n  }\n\n  receiveAttack(x, y) {\n    if (this.isValidAttack(x, y) == true) {\n      this.attacks[y][x] = true;\n      if (this.board[y][x].length != 0) {\n        const ship = this.board[y][x];\n        ship.hit();\n        ship.isSunk();\n        this.shipTiles--;\n        return true;\n      }\n      return false;\n    }\n  }\n\n  isValidAttack(x, y) {\n    if (this.attacks[y][x].length == 0) {\n      return true;\n    }\n    return false;\n  }\n\n  changeCell(x, y, content) {\n    this.board[y][x] = content;\n  }\n\n  checkAllSunk() {\n    if (this.shipTiles == 0) return true;\n    return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0ZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzPzg3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgXTtcbiAgICB0aGlzLmF0dGFja3MgPSBbXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgIF07XG4gICAgdGhpcy5zaGlwVGlsZXMgPSAwO1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLmlzVmFsaWRQbGFjZSh4LCB5LCBzaGlwLCBkaXJlY3Rpb24pID09IHRydWUpIHtcbiAgICAgIGlmIChzaGlwLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ2VsbCh4LCB5LCBzaGlwKTtcbiAgICAgICAgdGhpcy5zaGlwVGlsZXMrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2VsbCh4LCB5LCBzaGlwKTtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIHRoaXMuc2hpcFRpbGVzKys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDZWxsKHgsIHksIHNoaXApO1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgdGhpcy5zaGlwVGlsZXMrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkUGxhY2UoeCwgeSwgc2hpcCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIiAmJiB4ICsgc2hpcC5sZW5ndGggPiAxMCkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiICYmIHkgKyBzaGlwLmxlbmd0aCA+IDEwKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLmlzVmFsaWRBdHRhY2soeCwgeSkgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hdHRhY2tzW3ldW3hdID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3ldW3hdO1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBzaGlwLmlzU3VuaygpO1xuICAgICAgICB0aGlzLnNoaXBUaWxlcy0tO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAodGhpcy5hdHRhY2tzW3ldW3hdLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlQ2VsbCh4LCB5LCBjb250ZW50KSB7XG4gICAgdGhpcy5ib2FyZFt5XVt4XSA9IGNvbnRlbnQ7XG4gIH1cblxuICBjaGVja0FsbFN1bmsoKSB7XG4gICAgaWYgKHRoaXMuc2hpcFRpbGVzID09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Gameboard.js\n");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.score = 0;\n    this.gameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  addScore(points) {\n    this.score += points;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBUztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0ZXNoaXAvLi9zcmMvUGxheWVyLmpzPzc5NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIH1cblxuICBhZGRTY29yZShwb2ludHMpIHtcbiAgICB0aGlzLnNjb3JlICs9IHBvaW50cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Player.js\n");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n    this.sunken = false;\n  }\n\n  hit() {\n    this.hits += 1;\n  }\n\n  isSunk() {\n    this.sunken = this.hits >= this.length;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0ZXNoaXAvLi9zcmMvU2hpcC5qcz9mN2I5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3Vua2VuID0gZmFsc2U7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgdGhpcy5zdW5rZW4gPSB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Ship.js\n");

/***/ }),

/***/ "./src/entryPage.js":
/*!**************************!*\
  !*** ./src/entryPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderEntryPage() {\n  const body = document.querySelector(body);\n\n  const mainDiv = document.createElement(\"div\");\n  mainDiv.id = \"entry-div\";\n\n  const headingImage = document.createElement(\"img\");\n  headingImage.id = \"entry-image\";\n  headingImage.src = \"\";\n\n  const nameEntryForm = document.createElement(\"form\");\n  nameEntryForm.id = \"name-form\";\n\n  const nameLabel = document.createElement(\"label\");\n  nameLabel.for = \"name\";\n\n  const input = document.createElement(\"input\");\n  input.id = \"name\";\n  input.name = \"name\";\n  input.placeholder = \"Seargent John Doe\";\n\n  const startButton = document.createElement(\"button\");\n  startButton.id = \"start-button\";\n  startButton.innerHTML = \"START\";\n\n  nameEntryForm.append(nameLabel, input, startButton);\n\n  const footer = document.createElement(\"footer\");\n\n  const footerText = document.createElement(\"p\");\n  footerText.innerHTML = \"Created by Nicolo Veneziale\";\n\n  footer.append(footerText);\n\n  mainDiv.append(headingImage, nameEntryForm, footer);\n  body.appendChild(mainDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderEntryPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cnlQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGVzaGlwLy4vc3JjL2VudHJ5UGFnZS5qcz9hNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlckVudHJ5UGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9keSk7XG5cbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5EaXYuaWQgPSBcImVudHJ5LWRpdlwiO1xuXG4gIGNvbnN0IGhlYWRpbmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlYWRpbmdJbWFnZS5pZCA9IFwiZW50cnktaW1hZ2VcIjtcbiAgaGVhZGluZ0ltYWdlLnNyYyA9IFwiXCI7XG5cbiAgY29uc3QgbmFtZUVudHJ5Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBuYW1lRW50cnlGb3JtLmlkID0gXCJuYW1lLWZvcm1cIjtcblxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5hbWVMYWJlbC5mb3IgPSBcIm5hbWVcIjtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgaW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmdlbnQgSm9obiBEb2VcIjtcblxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnV0dG9uLmlkID0gXCJzdGFydC1idXR0b25cIjtcbiAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gXCJTVEFSVFwiO1xuXG4gIG5hbWVFbnRyeUZvcm0uYXBwZW5kKG5hbWVMYWJlbCwgaW5wdXQsIHN0YXJ0QnV0dG9uKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkNyZWF0ZWQgYnkgTmljb2xvIFZlbmV6aWFsZVwiO1xuXG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyVGV4dCk7XG5cbiAgbWFpbkRpdi5hcHBlbmQoaGVhZGluZ0ltYWdlLCBuYW1lRW50cnlGb3JtLCBmb290ZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJFbnRyeVBhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/entryPage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entryPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entryPage.js */ \"./src/entryPage.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComputerPlayer.js */ \"./src/ComputerPlayer.js\");\n__webpack_require__.e(/*! import() */ \"src_styles_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./styles.css */ \"./src/styles.css\"));\n\n\n\n\n\n\n(0,_entryPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtSkFBc0I7QUFDdUI7O0FBRWY7QUFDRDtBQUNvQjs7QUFFakQseURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0ZXNoaXAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoXCIuL3N0eWxlcy5jc3NcIik7XG5pbXBvcnQgcmVuZGVyRW50cnlQYWdlIGZyb20gXCIuL2VudHJ5UGFnZS5qc1wiO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xuaW1wb3J0IENvbXB1dGVyUGxheWVyIGZyb20gXCIuL0NvbXB1dGVyUGxheWVyLmpzXCI7XG5cbnJlbmRlckVudHJ5UGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "batteship:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbatteship"] = self["webpackChunkbatteship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;