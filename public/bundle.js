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

/***/ "./src/compiler.ts":
/*!*************************!*\
  !*** ./src/compiler.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compileShaderProgram\": () => (/* binding */ compileShaderProgram)\n/* harmony export */ });\n/**\n * Compile and link a shader program.\n * @param gl\n * @param vertexSource\n * @param fragmentSource\n */\nfunction compileShaderProgram(gl, vertexSource, fragmentSource) {\n    const [succvs, vs] = compileShader(gl, gl.VERTEX_SHADER, vertexSource);\n    const [succfs, fs] = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);\n    if (!succvs || !succfs) {\n        return [false, null];\n    }\n    const program = gl.createProgram();\n    if (!program) {\n        console.log(\"Failed to create program\");\n        return [false, null];\n    }\n    gl.attachShader(program, vs);\n    gl.attachShader(program, fs);\n    gl.linkProgram(program);\n    const success = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (success) {\n        return [true, program];\n    }\n    else {\n        console.log(gl.getProgramInfoLog(program));\n        gl.deleteProgram(program);\n        return [false, null];\n    }\n}\n/**\n * Delete a shader program.\n * @param gl\n * @param program\n */\nfunction deleteShaderProgram(gl, program) {\n    gl.deleteProgram(program);\n}\nfunction compileShader(gl, type, source) {\n    const shader = gl.createShader(type);\n    if (!shader) {\n        console.log(\"Failed to create shader\");\n        return [false, null];\n    }\n    gl.shaderSource(shader, source);\n    gl.compileShader(shader);\n    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (success) {\n        return [true, shader];\n    }\n    else {\n        console.log(gl.getShaderInfoLog(shader));\n        gl.deleteShader(shader);\n        return [false, null];\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9jb21waWxlci50cz9mMGVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7R0FLRztBQUNJLFNBQVMsb0JBQW9CLENBQUMsRUFBMEIsRUFDM0QsWUFBb0IsRUFBRSxjQUFzQjtJQUU1QyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUUzRSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSyxDQUFDLENBQUM7S0FDekI7SUFFRCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUssQ0FBQyxDQUFDO0tBQ3pCO0lBRUQsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRSxJQUFJLE9BQU8sRUFBRTtRQUNULE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUssQ0FBQyxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLG1CQUFtQixDQUFDLEVBQTBCLEVBQUUsT0FBcUI7SUFDMUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsRUFBMEIsRUFDN0MsSUFBWSxFQUFFLE1BQWM7SUFDNUIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSyxDQUFDLENBQUM7S0FDekI7SUFFRCxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXpCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN6QjtTQUFNO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSyxDQUFDLENBQUM7S0FDekI7QUFDTCxDQUFDIiwiZmlsZSI6Ii4vc3JjL2NvbXBpbGVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21waWxlIGFuZCBsaW5rIGEgc2hhZGVyIHByb2dyYW0uXG4gKiBAcGFyYW0gZ2wgXG4gKiBAcGFyYW0gdmVydGV4U291cmNlIFxuICogQHBhcmFtIGZyYWdtZW50U291cmNlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNoYWRlclByb2dyYW0oZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIFxuICAgIHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKTogW2Jvb2xlYW4sIFdlYkdMUHJvZ3JhbV0ge1xuXG4gICAgY29uc3QgW3N1Y2N2cywgdnNdID0gY29tcGlsZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U291cmNlKTtcbiAgICBjb25zdCBbc3VjY2ZzLCBmc10gPSBjb21waWxlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U291cmNlKTtcblxuICAgIGlmICghc3VjY3ZzIHx8ICFzdWNjZnMpIHtcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbCFdO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgaWYgKCFwcm9ncmFtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNyZWF0ZSBwcm9ncmFtXCIpO1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsIV07XG4gICAgfVxuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiBbdHJ1ZSwgcHJvZ3JhbV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsIV07XG4gICAgfSAgICBcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBzaGFkZXIgcHJvZ3JhbS5cbiAqIEBwYXJhbSBnbCBcbiAqIEBwYXJhbSBwcm9ncmFtIFxuICovXG5mdW5jdGlvbiBkZWxldGVTaGFkZXJQcm9ncmFtKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LCBwcm9ncmFtOiBXZWJHTFByb2dyYW0pIHtcbiAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5mdW5jdGlvbiBjb21waWxlU2hhZGVyKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LCBcbiAgICB0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogW2Jvb2xlYW4sIFdlYkdMU2hhZGVyXSB7XG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGlmICghc2hhZGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNyZWF0ZSBzaGFkZXJcIik7XG4gICAgICAgIHJldHVybiBbZmFsc2UsIG51bGwhXTtcbiAgICB9XG5cbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIFt0cnVlLCBzaGFkZXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsIV07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/compiler.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderEngine\": () => (/* binding */ RenderEngine)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ \"./src/compiler.ts\");\n\n\nclass RenderEngine {\n    /**\n     * Create a RenderEngine.\n     */\n    constructor() {\n        this._vs0 = `#version 300 es\n\nin vec3 a_position;\n\nvoid main() {\n    gl_position = vec4(a_position, 1);\n}\n`;\n        this._fs0 = `#version 300 es\n\nprecision highp float;\n    \nout vec4 color;\n\nvoid main() {\n    color = vec4(1, 0, 0.5, 1);\n}\n`;\n        this._canvas = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createCanvasElement)(\"rendercanvas\");\n        this.resize();\n        this._gl = this._canvas.getContext(\"webgl2\");\n        if (this._gl === undefined) {\n            throw new Error(\"Unable to create WebGL2\");\n        }\n        const [succ, program] = (0,_compiler__WEBPACK_IMPORTED_MODULE_1__.compileShaderProgram)(this._gl, this._vs0, this._fs0);\n        if (!succ) {\n            throw new Error(\"Failed to compile shader program\");\n        }\n        this._program0 = program;\n        document.body.appendChild(this._canvas);\n    }\n    /**\n     * Start the engine.\n     */\n    start() {\n        this._gl.clearColor(0.0, 0.0, 0.0, 1.0);\n        this.loop();\n    }\n    /**\n     * Act on a window resize.\n     */\n    resize() {\n        if (this._canvas !== undefined) {\n            console.log(\"Catch resize event\");\n            const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n            this._canvas.width = width;\n            this._canvas.height = height;\n        }\n    }\n    loop() {\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        requestAnimationFrame(this.loop.bind(this));\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9yZW5kZXJfZW5naW5lLnRzPzA4MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBQ1Q7QUFFM0MsTUFBTSxZQUFZO0lBTXJCOztPQUVHO0lBQ0g7UUE4Q1EsU0FBSSxHQUNaOzs7Ozs7O0NBT0gsQ0FBQztRQUVVLFNBQUksR0FDWjs7Ozs7Ozs7O0NBU0gsQ0FBQztRQWpFTSxJQUFJLENBQUMsT0FBTyxHQUFHLHlEQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUEyQixDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRywrREFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUVSLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFTyxJQUFJO1FBRVIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQXVCSjtBQUFBLENBQUMiLCJmaWxlIjoiLi9zcmMvcmVuZGVyX2VuZ2luZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNhbnZhc0VsZW1lbnQsIGdldFdpbmRvd1NpemUgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGNvbXBpbGVTaGFkZXJQcm9ncmFtIH0gZnJvbSBcIi4vY29tcGlsZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJlbmRlckVuZ2luZSB7XG5cbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX2dsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgIHByaXZhdGUgX3Byb2dyYW0wOiBXZWJHTFByb2dyYW07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgUmVuZGVyRW5naW5lLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY3JlYXRlQ2FudmFzRWxlbWVudChcInJlbmRlcmNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5fZ2wgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKSBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5fZ2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSBXZWJHTDJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBbc3VjYywgcHJvZ3JhbV0gPSBjb21waWxlU2hhZGVyUHJvZ3JhbSh0aGlzLl9nbCwgdGhpcy5fdnMwLCB0aGlzLl9mczApO1xuICAgICAgICBpZiAoIXN1Y2MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb21waWxlIHNoYWRlciBwcm9ncmFtXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcHJvZ3JhbTAgPSBwcm9ncmFtO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTsgICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBlbmdpbmUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0KCkgeyAgICAgICAgXG5cbiAgICAgICAgdGhpcy5fZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG4gICAgICAgIHRoaXMubG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdCBvbiBhIHdpbmRvdyByZXNpemUuXG4gICAgICovXG4gICAgcHVibGljIHJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhdGNoIHJlc2l6ZSBldmVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGdldFdpbmRvd1NpemUoKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9vcCgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2dsLmNsZWFyKHRoaXMuX2dsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZzMCA9IFxuICAgIGAjdmVyc2lvbiAzMDAgZXNcblxuaW4gdmVjMyBhX3Bvc2l0aW9uO1xuXG52b2lkIG1haW4oKSB7XG4gICAgZ2xfcG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDEpO1xufVxuYDtcblxuICAgIHByaXZhdGUgX2ZzMCA9XG4gICAgYCN2ZXJzaW9uIDMwMCBlc1xuXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4gICAgXG5vdXQgdmVjNCBjb2xvcjtcblxudm9pZCBtYWluKCkge1xuICAgIGNvbG9yID0gdmVjNCgxLCAwLCAwLjUsIDEpO1xufVxuYDtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/render_engine.ts\n");

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