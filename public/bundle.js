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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _gl_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gl_context */ \"./src/gl_context.ts\");\n\n\nlet glContext;\nlet renderEngine;\nwindow.onload = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window loaded with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    try {\n        glContext = new _gl_context__WEBPACK_IMPORTED_MODULE_1__.GLContext();\n        glContext.enterRenderLoop();\n    }\n    catch (error) {\n        console.error(error);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearBody)();\n        const elem = document.createElement(\"h3\");\n        elem.innerText = error;\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendBody)(elem);\n    }\n};\nwindow.onresize = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window resized with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    if (glContext !== undefined) {\n        glContext.handleResize();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9hcHAudHM/MDY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBNkQ7QUFDcEI7QUFHekMsSUFBSSxTQUFvQixDQUFDO0FBRXpCLElBQUksWUFBMEIsQ0FBQztBQUUvQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztJQUMvQixNQUFNLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7SUFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQixJQUFJO1FBQ0YsU0FBUyxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO1FBRTVCLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUM3QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQiwrQ0FBUyxFQUFFLENBQUM7UUFFWixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdEQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEI7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtJQUNyQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztJQUMvQixNQUFNLEdBQUcsR0FBRyxtQ0FBbUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7SUFFcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDM0IsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzFCO0FBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2FwcC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdpbmRvd1NpemUsIGNsZWFyQm9keSwgYXBwZW5kQm9keSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgR0xDb250ZXh0IH0gZnJvbSBcIi4vZ2xfY29udGV4dFwiO1xuaW1wb3J0IHsgUmVuZGVyRW5naW5lIH0gZnJvbSBcIi4vcmVuZGVyX2VuZ2luZVwiO1xuXG5sZXQgZ2xDb250ZXh0OiBHTENvbnRleHQ7XG5cbmxldCByZW5kZXJFbmdpbmU6IFJlbmRlckVuZ2luZTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW3csIGhdID0gZ2V0V2luZG93U2l6ZSgpO1xuICBjb25zdCBtc2cgPSBgV2luZG93IGxvYWRlZCB3aXRoIHNpemUgd2lkdGg6ICR7d30gYW5kIGhlaWdodDogJHtofWA7XG5cbiAgY29uc29sZS5sb2cobXNnKTtcblxuICB0cnkge1xuICAgIGdsQ29udGV4dCA9IG5ldyBHTENvbnRleHQoKTtcblxuICAgIGdsQ29udGV4dC5lbnRlclJlbmRlckxvb3AoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICBjbGVhckJvZHkoKTtcblxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZWxlbS5pbm5lclRleHQgPSBlcnJvcjtcbiAgICBhcHBlbmRCb2R5KGVsZW0pO1xuICB9XG59O1xuXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IFt3LCBoXSA9IGdldFdpbmRvd1NpemUoKTtcbiAgY29uc3QgbXNnID0gYFdpbmRvdyByZXNpemVkIHdpdGggc2l6ZSB3aWR0aDogJHt3fSBhbmQgaGVpZ2h0OiAke2h9YDtcblxuICBjb25zb2xlLmxvZyhtc2cpO1xuXG4gIGlmIChnbENvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsQ29udGV4dC5oYW5kbGVSZXNpemUoKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWindowSize\": () => (/* binding */ getWindowSize),\n/* harmony export */   \"createCanvasElement\": () => (/* binding */ createCanvasElement),\n/* harmony export */   \"clearBody\": () => (/* binding */ clearBody),\n/* harmony export */   \"appendBody\": () => (/* binding */ appendBody)\n/* harmony export */ });\n/**\n * Get tuple [width, height] describing the window size.\n */\nfunction getWindowSize() {\n    return [window.innerWidth, window.innerHeight];\n}\n/**\n * Create a canvas element.\n */\nfunction createCanvasElement(elementId) {\n    let canvas = document.createElement(\"canvas\");\n    canvas.id = elementId;\n    return canvas;\n}\n/**\n * Make body clean.\n */\nfunction clearBody() {\n    while (document.body.firstChild) {\n        document.body.removeChild(document.body.lastChild);\n    }\n}\n/**\n * Append a node to the body.\n */\nfunction appendBody(node) {\n    document.body.appendChild(node);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9kb20udHM/NmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0dBRUc7QUFDSSxTQUFTLGFBQWE7SUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsbUJBQW1CLENBQUMsU0FBaUI7SUFDbkQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7SUFDbkUsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFFdEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOztHQUVHO0FBQ0ksU0FBUyxTQUFTO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsVUFBVSxDQUFDLElBQWU7SUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsImZpbGUiOiIuL3NyYy9kb20udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFNpemUgPSBbbnVtYmVyLCBudW1iZXJdO1xuXG4vKipcbiAqIEdldCB0dXBsZSBbd2lkdGgsIGhlaWdodF0gZGVzY3JpYmluZyB0aGUgd2luZG93IHNpemUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplKCk6IFNpemUge1xuICByZXR1cm4gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhbnZhcyBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzRWxlbWVudChlbGVtZW50SWQ6IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGNhbnZhcy5pZCA9IGVsZW1lbnRJZDtcblxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vKipcbiAqIE1ha2UgYm9keSBjbGVhbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQm9keSgpOiB2b2lkIHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQhKTtcbiAgfVxufVxuXG4vKipcbiAqIEFwcGVuZCBhIG5vZGUgdG8gdGhlIGJvZHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRCb2R5KG5vZGU6IENoaWxkTm9kZSk6IHZvaWQge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dom.ts\n");

/***/ }),

/***/ "./src/gl_context.ts":
/*!***************************!*\
  !*** ./src/gl_context.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GLContext\": () => (/* binding */ GLContext)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n\nclass GLContext {\n    constructor() {\n        this._entities = [];\n        this._canvas = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createCanvasElement)(\"render-canvas\");\n        this.handleResize();\n        this._gl = this._canvas.getContext(\"webgl2\");\n        if (this._gl !== undefined) {\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendBody)(this._canvas);\n        }\n        else {\n            throw new Error(\"Unable to create WebGL2 context\");\n        }\n        this.initialGLSetup();\n    }\n    /**\n     * Handle window resize event.\n     */\n    handleResize() {\n        if (this._canvas !== undefined) {\n            const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n            this._canvas.width = width;\n            this._canvas.height = height;\n        }\n    }\n    /**\n     * Set new entities.\n     * @param entities New entities.\n     */\n    setEntities(entities) {\n        this._entities = entities;\n    }\n    /**\n     * Enter the render loop.\n     */\n    enterRenderLoop() {\n        this.render();\n    }\n    /**\n     * Get the GL context.\n     * @returns The GL context\n     */\n    glContext() {\n        return this._gl;\n    }\n    render() {\n        const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n        this._gl.viewport(0, 0, width, height);\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        this._entities.forEach((entity) => {\n            entity.render(this._gl);\n        });\n        requestAnimationFrame(this.render.bind(this));\n    }\n    initialGLSetup() {\n        this._gl.clearColor(0, 0, 0, 1);\n        this._gl.frontFace(this._gl.CCW);\n        this._gl.enable(this._gl.CULL_FACE);\n        this._gl.cullFace(this._gl.BACK);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9nbF9jb250ZXh0LnRzPzI1N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUU7QUFFaEUsTUFBTSxTQUFTO0lBQ3BCO1FBcUVRLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFwRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcseURBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUEyQixDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDMUIsZ0RBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsUUFBa0I7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVPLE1BQU07UUFDWixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUtGIiwiZmlsZSI6Ii4vc3JjL2dsX2NvbnRleHQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRCb2R5LCBnZXRXaW5kb3dTaXplLCBjcmVhdGVDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tXCI7XG5cbmV4cG9ydCBjbGFzcyBHTENvbnRleHQge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2FudmFzID0gY3JlYXRlQ2FudmFzRWxlbWVudChcInJlbmRlci1jYW52YXNcIik7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcblxuICAgIHRoaXMuX2dsID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIikgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbiAgICBpZiAodGhpcy5fZ2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLl9jYW52YXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIFdlYkdMMiBjb250ZXh0XCIpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbEdMU2V0dXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgd2luZG93IHJlc2l6ZSBldmVudC5cbiAgICovXG4gIHB1YmxpYyBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NhbnZhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBuZXcgZW50aXRpZXMuXG4gICAqIEBwYXJhbSBlbnRpdGllcyBOZXcgZW50aXRpZXMuXG4gICAqL1xuICBwdWJsaWMgc2V0RW50aXRpZXMoZW50aXRpZXM6IEVudGl0eVtdKTogdm9pZCB7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciB0aGUgcmVuZGVyIGxvb3AuXG4gICAqL1xuICBwdWJsaWMgZW50ZXJSZW5kZXJMb29wKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBHTCBjb250ZXh0LlxuICAgKiBAcmV0dXJucyBUaGUgR0wgY29udGV4dFxuICAgKi9cbiAgcHVibGljIGdsQ29udGV4dCgpOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fZ2w7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gICAgdGhpcy5fZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5fZ2wuY2xlYXIodGhpcy5fZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGVudGl0eS5yZW5kZXIodGhpcy5fZ2wpO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsR0xTZXR1cCgpOiB2b2lkIHtcbiAgICB0aGlzLl9nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgIHRoaXMuX2dsLmZyb250RmFjZSh0aGlzLl9nbC5DQ1cpO1xuICAgIHRoaXMuX2dsLmVuYWJsZSh0aGlzLl9nbC5DVUxMX0ZBQ0UpO1xuICAgIHRoaXMuX2dsLmN1bGxGYWNlKHRoaXMuX2dsLkJBQ0spO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG4gIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgX2VudGl0aWVzOiBFbnRpdHlbXSA9IFtdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/gl_context.ts\n");

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