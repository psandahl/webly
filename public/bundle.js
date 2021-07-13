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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_engine */ \"./src/render_engine.ts\");\n\n\nlet renderEngine;\nwindow.onload = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window loaded with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    renderEngine = new _render_engine__WEBPACK_IMPORTED_MODULE_1__.RenderEngine();\n    renderEngine.start();\n};\nwindow.onresize = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window resized with size width: ${w} and height: ${h}`;\n    console.log(msg);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9hcHAudHM/MDY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBc0M7QUFDUztBQUUvQyxJQUFJLFlBQTBCLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsa0NBQWtDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBRW5FLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakIsWUFBWSxHQUFHLElBQUksd0RBQVksRUFBRSxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsbUNBQW1DLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQyIsImZpbGUiOiIuL3NyYy9hcHAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXaW5kb3dTaXplIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgUmVuZGVyRW5naW5lIH0gZnJvbSAnLi9yZW5kZXJfZW5naW5lJztcblxubGV0IHJlbmRlckVuZ2luZTogUmVuZGVyRW5naW5lO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IFt3LCBoXSA9IGdldFdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBtc2cgPSBgV2luZG93IGxvYWRlZCB3aXRoIHNpemUgd2lkdGg6ICR7d30gYW5kIGhlaWdodDogJHtofWA7XG5cbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuXG4gICAgcmVuZGVyRW5naW5lID0gbmV3IFJlbmRlckVuZ2luZSgpO1xuICAgIHJlbmRlckVuZ2luZS5zdGFydCgpO1xufVxuXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3csIGhdID0gZ2V0V2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IG1zZyA9IGBXaW5kb3cgcmVzaXplZCB3aXRoIHNpemUgd2lkdGg6ICR7d30gYW5kIGhlaWdodDogJHtofWA7XG5cbiAgICBjb25zb2xlLmxvZyhtc2cpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWindowSize\": () => (/* binding */ getWindowSize),\n/* harmony export */   \"createCanvasElement\": () => (/* binding */ createCanvasElement)\n/* harmony export */ });\n/**\n * Get tuple [width, height] describing the window size.\n * */\nfunction getWindowSize() {\n    return [window.innerWidth, window.innerHeight];\n}\nfunction createCanvasElement(size, elementId) {\n    let canvas = document.createElement('canvas');\n    canvas.id = elementId;\n    canvas.width = size[0];\n    canvas.height = size[1];\n    return canvas;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9kb20udHM/NmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBOztLQUVLO0FBQ0UsU0FBUyxhQUFhO0lBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRU0sU0FBUyxtQkFBbUIsQ0FBQyxJQUFVLEVBQUUsU0FBaUI7SUFDN0QsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7SUFDbkUsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDdEIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEIsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsImZpbGUiOiIuL3NyYy9kb20udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFNpemUgPSBbbnVtYmVyLCBudW1iZXJdO1xuXG4vKipcbiAqIEdldCB0dXBsZSBbd2lkdGgsIGhlaWdodF0gZGVzY3JpYmluZyB0aGUgd2luZG93IHNpemUuXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKTogU2l6ZSB7XG4gICAgcmV0dXJuIFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0VsZW1lbnQoc2l6ZTogU2l6ZSwgZWxlbWVudElkOiBzdHJpbmcpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNhbnZhcy5pZCA9IGVsZW1lbnRJZDtcbiAgICBjYW52YXMud2lkdGggPSBzaXplWzBdO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplWzFdO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.ts\n");

/***/ }),

/***/ "./src/render_engine.ts":
/*!******************************!*\
  !*** ./src/render_engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderEngine\": () => (/* binding */ RenderEngine)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n\nclass RenderEngine {\n    constructor() {\n        const canvas = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createCanvasElement)([640, 480], \"rendercanvas\");\n        this._gl = canvas.getContext(\"webgl2\");\n        if (this._gl === undefined) {\n            throw new Error(\"Unable to create WebGL2\");\n        }\n        document.body.appendChild(canvas);\n        this._frame = 0;\n    }\n    start() {\n        this.loop();\n    }\n    loop() {\n        const intensity = this._frame++ % 255;\n        this._gl.clearColor(intensity / 255.0, 0.0, 0.0, 1.0);\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        requestAnimationFrame(this.loop.bind(this));\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9yZW5kZXJfZW5naW5lLnRzPzA4MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFFckMsTUFBTSxZQUFZO0lBS3JCO1FBQ0ksTUFBTSxNQUFNLEdBQUcseURBQW1CLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBMkIsQ0FBQztRQUNqRSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM5QztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxJQUFJO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUV0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBQUEsQ0FBQyIsImZpbGUiOiIuL3NyYy9yZW5kZXJfZW5naW5lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2RvbVwiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyRW5naW5lIHtcblxuICAgIHByaXZhdGUgX2dsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgIHByaXZhdGUgX2ZyYW1lOiBudW1iZXI7XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXNFbGVtZW50KFs2NDAsIDQ4MF0sIFwicmVuZGVyY2FudmFzXCIpO1xuICAgICAgICB0aGlzLl9nbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpIGFzIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLl9nbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIFdlYkdMMlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgICAgICB0aGlzLl9mcmFtZSA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvb3AoKSB7XG4gICAgICAgIGNvbnN0IGludGVuc2l0eSA9IHRoaXMuX2ZyYW1lKysgJSAyNTU7XG5cbiAgICAgICAgdGhpcy5fZ2wuY2xlYXJDb2xvcihpbnRlbnNpdHkgLyAyNTUuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgIHRoaXMuX2dsLmNsZWFyKHRoaXMuX2dsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/render_engine.ts\n");

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