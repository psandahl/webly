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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_engine */ \"./src/render_engine.ts\");\n\n\nlet renderEngine;\nwindow.onload = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window loaded with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    renderEngine = new _render_engine__WEBPACK_IMPORTED_MODULE_1__.RenderEngine();\n    renderEngine.start();\n};\nwindow.onresize = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window resized with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    renderEngine.resize();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9hcHAudHM/MDY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBc0M7QUFDUztBQUUvQyxJQUFJLFlBQTBCLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsa0NBQWtDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBRW5FLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakIsWUFBWSxHQUFHLElBQUksd0RBQVksRUFBRSxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsbUNBQW1DLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFCLENBQUMiLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2luZG93U2l6ZSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IFJlbmRlckVuZ2luZSB9IGZyb20gJy4vcmVuZGVyX2VuZ2luZSc7XG5cbmxldCByZW5kZXJFbmdpbmU6IFJlbmRlckVuZ2luZTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBbdywgaF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gICAgY29uc3QgbXNnID0gYFdpbmRvdyBsb2FkZWQgd2l0aCBzaXplIHdpZHRoOiAke3d9IGFuZCBoZWlnaHQ6ICR7aH1gO1xuXG4gICAgY29uc29sZS5sb2cobXNnKTtcblxuICAgIHJlbmRlckVuZ2luZSA9IG5ldyBSZW5kZXJFbmdpbmUoKTtcbiAgICByZW5kZXJFbmdpbmUuc3RhcnQoKTtcbn1cblxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IFt3LCBoXSA9IGdldFdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBtc2cgPSBgV2luZG93IHJlc2l6ZWQgd2l0aCBzaXplIHdpZHRoOiAke3d9IGFuZCBoZWlnaHQ6ICR7aH1gO1xuXG4gICAgY29uc29sZS5sb2cobXNnKTtcblxuICAgIHJlbmRlckVuZ2luZS5yZXNpemUoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWindowSize\": () => (/* binding */ getWindowSize),\n/* harmony export */   \"createCanvasElement\": () => (/* binding */ createCanvasElement)\n/* harmony export */ });\n/**\n * Get tuple [width, height] describing the window size.\n */\nfunction getWindowSize() {\n    return [window.innerWidth, window.innerHeight];\n}\n/**\n * Create a canvas element.\n */\nfunction createCanvasElement(elementId) {\n    let canvas = document.createElement('canvas');\n    canvas.id = elementId;\n    return canvas;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9kb20udHM/NmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBOztHQUVHO0FBQ0ksU0FBUyxhQUFhO0lBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSSxTQUFTLG1CQUFtQixDQUFDLFNBQWlCO0lBQ2pELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixDQUFDO0lBQ25FLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBRXRCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJmaWxlIjoiLi9zcmMvZG9tLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBTaXplID0gW251bWJlciwgbnVtYmVyXTtcblxuLyoqXG4gKiBHZXQgdHVwbGUgW3dpZHRoLCBoZWlnaHRdIGRlc2NyaWJpbmcgdGhlIHdpbmRvdyBzaXplLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpOiBTaXplIHtcbiAgICByZXR1cm4gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhbnZhcyBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzRWxlbWVudChlbGVtZW50SWQ6IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY2FudmFzLmlkID0gZWxlbWVudElkO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.ts\n");

/***/ }),

/***/ "./src/render_engine.ts":
/*!******************************!*\
  !*** ./src/render_engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderEngine\": () => (/* binding */ RenderEngine)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n\nclass RenderEngine {\n    /**\n     * Create a RenderEngine.\n     */\n    constructor() {\n        this._canvas = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createCanvasElement)(\"rendercanvas\");\n        this._gl = this._canvas.getContext(\"webgl2\");\n        if (this._gl === undefined) {\n            throw new Error(\"Unable to create WebGL2\");\n        }\n        document.body.appendChild(this._canvas);\n        this._frame = 0;\n    }\n    /**\n     * Start the engine.\n     */\n    start() {\n        this.loop();\n    }\n    /**\n     * Act on a window resize.\n     */\n    resize() {\n        if (this._canvas !== undefined) {\n            console.log(\"Catch resize event\");\n            const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n            this._canvas.width = width;\n            this._canvas.height = height;\n        }\n    }\n    loop() {\n        const intensity = this._frame++ % 255;\n        this._gl.clearColor(intensity / 255.0, 0.0, 0.0, 1.0);\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        requestAnimationFrame(this.loop.bind(this));\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9yZW5kZXJfZW5naW5lLnRzPzA4MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFFcEQsTUFBTSxZQUFZO0lBTXJCOztPQUVHO0lBQ0g7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLHlEQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUEyQixDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDUixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTTtRQUNULElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsbURBQWEsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRU8sSUFBSTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQUFBLENBQUMiLCJmaWxlIjoiLi9zcmMvcmVuZGVyX2VuZ2luZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNhbnZhc0VsZW1lbnQsIGdldFdpbmRvd1NpemUgfSBmcm9tIFwiLi9kb21cIjtcblxuZXhwb3J0IGNsYXNzIFJlbmRlckVuZ2luZSB7XG5cbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX2dsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgIHByaXZhdGUgX2ZyYW1lOiBudW1iZXI7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgUmVuZGVyRW5naW5lLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY3JlYXRlQ2FudmFzRWxlbWVudChcInJlbmRlcmNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5fZ2wgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKSBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5fZ2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSBXZWJHTDJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XG5cbiAgICAgICAgdGhpcy5fZnJhbWUgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBlbmdpbmUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3Qgb24gYSB3aW5kb3cgcmVzaXplLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYW52YXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXRjaCByZXNpemUgZXZlbnRcIik7XG4gICAgICAgICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvb3AoKSB7XG4gICAgICAgIGNvbnN0IGludGVuc2l0eSA9IHRoaXMuX2ZyYW1lKysgJSAyNTU7XG5cbiAgICAgICAgdGhpcy5fZ2wuY2xlYXJDb2xvcihpbnRlbnNpdHkgLyAyNTUuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgIHRoaXMuX2dsLmNsZWFyKHRoaXMuX2dsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/render_engine.ts\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;