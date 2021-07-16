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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_engine */ \"./src/render_engine.ts\");\n\n\nlet renderEngine;\nwindow.onload = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window loaded with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    try {\n        renderEngine = new _render_engine__WEBPACK_IMPORTED_MODULE_1__.RenderEngine();\n        renderEngine.start();\n    }\n    catch (error) {\n        console.error(error);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearBody)();\n        const elem = document.createElement(\"h3\");\n        elem.innerText = error;\n        document.body.appendChild(elem);\n    }\n};\nwindow.onresize = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window resized with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    renderEngine.resize();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9hcHAudHM/MDY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBaUQ7QUFDRjtBQUUvQyxJQUFJLFlBQTBCLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsa0NBQWtDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBRW5FLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakIsSUFBSTtRQUNGLFlBQVksR0FBRyxJQUFJLHdEQUFZLEVBQUUsQ0FBQztRQUNsQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsK0NBQVMsRUFBRSxDQUFDO1FBRVosTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsbURBQWEsRUFBRSxDQUFDO0lBQy9CLE1BQU0sR0FBRyxHQUFHLG1DQUFtQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztJQUVwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2luZG93U2l6ZSwgY2xlYXJCb2R5IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBSZW5kZXJFbmdpbmUgfSBmcm9tIFwiLi9yZW5kZXJfZW5naW5lXCI7XG5cbmxldCByZW5kZXJFbmdpbmU6IFJlbmRlckVuZ2luZTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW3csIGhdID0gZ2V0V2luZG93U2l6ZSgpO1xuICBjb25zdCBtc2cgPSBgV2luZG93IGxvYWRlZCB3aXRoIHNpemUgd2lkdGg6ICR7d30gYW5kIGhlaWdodDogJHtofWA7XG5cbiAgY29uc29sZS5sb2cobXNnKTtcblxuICB0cnkge1xuICAgIHJlbmRlckVuZ2luZSA9IG5ldyBSZW5kZXJFbmdpbmUoKTtcbiAgICByZW5kZXJFbmdpbmUuc3RhcnQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICBjbGVhckJvZHkoKTtcblxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZWxlbS5pbm5lclRleHQgPSBlcnJvcjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICB9XG59O1xuXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IFt3LCBoXSA9IGdldFdpbmRvd1NpemUoKTtcbiAgY29uc3QgbXNnID0gYFdpbmRvdyByZXNpemVkIHdpdGggc2l6ZSB3aWR0aDogJHt3fSBhbmQgaGVpZ2h0OiAke2h9YDtcblxuICBjb25zb2xlLmxvZyhtc2cpO1xuXG4gIHJlbmRlckVuZ2luZS5yZXNpemUoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/buffer_set.ts":
/*!***************************!*\
  !*** ./src/buffer_set.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BufferSet\": () => (/* binding */ BufferSet)\n/* harmony export */ });\nclass BufferSet {\n    constructor(gl, attrib, data) {\n        this._buf = gl.createBuffer();\n        gl.bindBuffer(gl.ARRAY_BUFFER, this._buf);\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);\n        this._vao = gl.createVertexArray();\n        gl.bindVertexArray(this._vao);\n        const itemSize = 4; // Float is four bytes wide.\n        const totalValues = attrib.reduce((acc, value) => acc + value, 0);\n        let valueCount = 0;\n        attrib.forEach((numValues, index) => {\n            gl.enableVertexAttribArray(index);\n            gl.vertexAttribPointer(index, numValues, gl.FLOAT, false, itemSize * totalValues, valueCount * itemSize);\n            valueCount += numValues;\n        });\n        this._gl = gl;\n    }\n    bind() {\n        this._gl.bindVertexArray(this._vao);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9idWZmZXJfc2V0LnRzPzk0MWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sU0FBUztJQUNwQixZQUNFLEVBQTBCLEVBQzFCLE1BQWdCLEVBQ2hCLElBQWM7UUFFZCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUcsQ0FBQztRQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUcsQ0FBQztRQUNwQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDaEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDcEIsS0FBSyxFQUNMLFNBQVMsRUFDVCxFQUFFLENBQUMsS0FBSyxFQUNSLEtBQUssRUFDTCxRQUFRLEdBQUcsV0FBVyxFQUN0QixVQUFVLEdBQUcsUUFBUSxDQUN0QixDQUFDO1lBQ0YsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FLRiIsImZpbGUiOiIuL3NyYy9idWZmZXJfc2V0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJ1ZmZlclNldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgICBhdHRyaWI6IG51bWJlcltdLFxuICAgIGRhdGE6IG51bWJlcltdXG4gICkge1xuICAgIHRoaXMuX2J1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpITtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fYnVmKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShkYXRhKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdGhpcy5fdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKSE7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMuX3Zhbyk7XG5cbiAgICBjb25zdCBpdGVtU2l6ZSA9IDQ7IC8vIEZsb2F0IGlzIGZvdXIgYnl0ZXMgd2lkZS5cbiAgICBjb25zdCB0b3RhbFZhbHVlcyA9IGF0dHJpYi5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYyArIHZhbHVlLCAwKTtcblxuICAgIGxldCB2YWx1ZUNvdW50ID0gMDtcbiAgICBhdHRyaWIuZm9yRWFjaCgobnVtVmFsdWVzLCBpbmRleCkgPT4ge1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG51bVZhbHVlcyxcbiAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpdGVtU2l6ZSAqIHRvdGFsVmFsdWVzLFxuICAgICAgICB2YWx1ZUNvdW50ICogaXRlbVNpemVcbiAgICAgICk7XG4gICAgICB2YWx1ZUNvdW50ICs9IG51bVZhbHVlcztcbiAgICB9KTtcblxuICAgIHRoaXMuX2dsID0gZ2w7XG4gIH1cblxuICBwdWJsaWMgYmluZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9nbC5iaW5kVmVydGV4QXJyYXkodGhpcy5fdmFvKTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1ZjogV2ViR0xCdWZmZXI7XG4gIHByaXZhdGUgX3ZhbzogV2ViR0xWZXJ0ZXhBcnJheU9iamVjdDtcbiAgcHJpdmF0ZSBfZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/buffer_set.ts\n");

/***/ }),

/***/ "./src/compiler.ts":
/*!*************************!*\
  !*** ./src/compiler.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compileShaderProgram\": () => (/* binding */ compileShaderProgram)\n/* harmony export */ });\n/**\n * Compile and link a shader program.\n * @param gl\n * @param vertexSource\n * @param fragmentSource\n */\nfunction compileShaderProgram(gl, vertexSource, fragmentSource) {\n    const vshader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);\n    const fshader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);\n    const program = gl.createProgram();\n    if (!program) {\n        throw new Error(\"Failed to create program object\");\n    }\n    gl.attachShader(program, vshader);\n    gl.attachShader(program, fshader);\n    gl.linkProgram(program);\n    const success = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (success) {\n        return program;\n    }\n    else {\n        throw new Error(gl.getProgramInfoLog(program));\n    }\n}\n/**\n * Delete a shader program.\n * @param gl\n * @param program\n */\nfunction deleteShaderProgram(gl, program) {\n    gl.deleteProgram(program);\n}\nfunction compileShader(gl, type, source) {\n    const shader = gl.createShader(type);\n    if (!shader) {\n        throw new Error(\"Failed to create shader object\");\n    }\n    gl.shaderSource(shader, source);\n    gl.compileShader(shader);\n    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (success) {\n        return shader;\n    }\n    else {\n        throw new Error(gl.getShaderInfoLog(shader));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9jb21waWxlci50cz9mMGVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7R0FLRztBQUNJLFNBQVMsb0JBQW9CLENBQ2xDLEVBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLGNBQXNCO0lBRXRCLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRSxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFdEUsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDcEQ7SUFFRCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxPQUFPLENBQUM7S0FDaEI7U0FBTTtRQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsbUJBQW1CLENBQzFCLEVBQTBCLEVBQzFCLE9BQXFCO0lBRXJCLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUNwQixFQUEwQixFQUMxQixJQUFZLEVBQ1osTUFBYztJQUVkLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztLQUNuRDtJQUVELEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakUsSUFBSSxPQUFPLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQztLQUNmO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDO0tBQy9DO0FBQ0gsQ0FBQyIsImZpbGUiOiIuL3NyYy9jb21waWxlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcGlsZSBhbmQgbGluayBhIHNoYWRlciBwcm9ncmFtLlxuICogQHBhcmFtIGdsXG4gKiBAcGFyYW0gdmVydGV4U291cmNlXG4gKiBAcGFyYW0gZnJhZ21lbnRTb3VyY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVTaGFkZXJQcm9ncmFtKFxuICBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcbiAgdmVydGV4U291cmNlOiBzdHJpbmcsXG4gIGZyYWdtZW50U291cmNlOiBzdHJpbmdcbik6IFdlYkdMUHJvZ3JhbSB7XG4gIGNvbnN0IHZzaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTb3VyY2UpO1xuICBjb25zdCBmc2hhZGVyID0gY29tcGlsZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNvdXJjZSk7XG5cbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgaWYgKCFwcm9ncmFtKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBwcm9ncmFtIG9iamVjdFwiKTtcbiAgfVxuXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2c2hhZGVyKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzaGFkZXIpO1xuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gIGlmIChzdWNjZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyYW07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pISk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWxldGUgYSBzaGFkZXIgcHJvZ3JhbS5cbiAqIEBwYXJhbSBnbFxuICogQHBhcmFtIHByb2dyYW1cbiAqL1xuZnVuY3Rpb24gZGVsZXRlU2hhZGVyUHJvZ3JhbShcbiAgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXG4gIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxuKTogdm9pZCB7XG4gIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVTaGFkZXIoXG4gIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxuICB0eXBlOiBudW1iZXIsXG4gIHNvdXJjZTogc3RyaW5nXG4pOiBXZWJHTFNoYWRlciB7XG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgaWYgKCFzaGFkZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHNoYWRlciBvYmplY3RcIik7XG4gIH1cblxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gc2hhZGVyO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikhKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/compiler.ts\n");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWindowSize\": () => (/* binding */ getWindowSize),\n/* harmony export */   \"createCanvasElement\": () => (/* binding */ createCanvasElement),\n/* harmony export */   \"clearBody\": () => (/* binding */ clearBody)\n/* harmony export */ });\n/**\n * Get tuple [width, height] describing the window size.\n */\nfunction getWindowSize() {\n    return [window.innerWidth, window.innerHeight];\n}\n/**\n * Create a canvas element.\n */\nfunction createCanvasElement(elementId) {\n    let canvas = document.createElement(\"canvas\");\n    canvas.id = elementId;\n    return canvas;\n}\n/**\n * Make body clean.\n */\nfunction clearBody() {\n    while (document.body.firstChild) {\n        document.body.removeChild(document.body.lastChild);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9kb20udHM/NmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7R0FFRztBQUNJLFNBQVMsYUFBYTtJQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVEOztHQUVHO0FBQ0ksU0FBUyxtQkFBbUIsQ0FBQyxTQUFpQjtJQUNuRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztJQUNuRSxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUV0QixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7O0dBRUc7QUFDSSxTQUFTLFNBQVM7SUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0gsQ0FBQyIsImZpbGUiOiIuL3NyYy9kb20udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFNpemUgPSBbbnVtYmVyLCBudW1iZXJdO1xuXG4vKipcbiAqIEdldCB0dXBsZSBbd2lkdGgsIGhlaWdodF0gZGVzY3JpYmluZyB0aGUgd2luZG93IHNpemUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplKCk6IFNpemUge1xuICByZXR1cm4gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhbnZhcyBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzRWxlbWVudChlbGVtZW50SWQ6IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGNhbnZhcy5pZCA9IGVsZW1lbnRJZDtcblxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vKipcbiAqIE1ha2UgYm9keSBjbGVhbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQm9keSgpOiB2b2lkIHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQhKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dom.ts\n");

/***/ }),

/***/ "./src/render_engine.ts":
/*!******************************!*\
  !*** ./src/render_engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderEngine\": () => (/* binding */ RenderEngine)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ \"./src/compiler.ts\");\n/* harmony import */ var _buffer_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer_set */ \"./src/buffer_set.ts\");\n/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders */ \"./src/shaders.ts\");\n\n\n\n\nclass RenderEngine {\n    /**\n     * Create a RenderEngine.\n     */\n    constructor() {\n        this._program0 = null;\n        this._bufferSet0 = null;\n        this._canvas = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createCanvasElement)(\"rendercanvas\");\n        this.resize();\n        this._gl = this._canvas.getContext(\"webgl2\");\n        if (this._gl === undefined) {\n            throw new Error(\"Unable to create WebGL2\");\n        }\n        document.body.appendChild(this._canvas);\n        console.log(`Max number of vertex attributes: ${this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS)}`);\n    }\n    /**\n     * Start the engine.\n     */\n    start() {\n        // Compile program.\n        const program = (0,_compiler__WEBPACK_IMPORTED_MODULE_1__.compileShaderProgram)(this._gl, (0,_shaders__WEBPACK_IMPORTED_MODULE_3__.shaderSource)(\"colored.vs\"), (0,_shaders__WEBPACK_IMPORTED_MODULE_3__.shaderSource)(\"colored.fs\"));\n        this._program0 = program;\n        // Create buffer set.\n        this._bufferSet0 = new _buffer_set__WEBPACK_IMPORTED_MODULE_2__.BufferSet(this._gl, [2, 3], [\n            0.0, 0.25, 1.0, 0.0, 0.0, -0.1, -0.1, 0.0, 1.0, 0.0, 0.4, -0.4, 0.0,\n            0.0, 1.0,\n        ]);\n        this.loop();\n    }\n    /**\n     * Act on a window resize.\n     */\n    resize() {\n        if (this._canvas !== undefined) {\n            console.log(\"Catch resize event\");\n            const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n            this._canvas.width = width;\n            this._canvas.height = height;\n        }\n    }\n    loop() {\n        const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n        this._gl.clearColor(0.0, 0.0, 0.0, 1.0);\n        this._gl.viewport(0, 0, width, height);\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        this._gl.enable(this._gl.CULL_FACE);\n        this._gl.cullFace(this._gl.BACK);\n        this._gl.useProgram(this._program0);\n        this._bufferSet0.bind();\n        this._gl.drawArrays(this._gl.TRIANGLES, 0, 3);\n        requestAnimationFrame(this.loop.bind(this));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9yZW5kZXJfZW5naW5lLnRzPzA4MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkQ7QUFDVDtBQUNUO0FBQ0E7QUFFbEMsTUFBTSxZQUFZO0lBQ3ZCOztPQUVHO0lBQ0g7UUF5RVEsY0FBUyxHQUFpQixJQUFLLENBQUM7UUFDaEMsZ0JBQVcsR0FBYyxJQUFLLENBQUM7UUF6RXJDLElBQUksQ0FBQyxPQUFPLEdBQUcseURBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQTJCLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDNUM7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxvQ0FBb0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQzVCLEVBQUUsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNWLG1CQUFtQjtRQUNuQixNQUFNLE9BQU8sR0FBRywrREFBb0IsQ0FDbEMsSUFBSSxDQUFDLEdBQUcsRUFDUixzREFBWSxDQUFDLFlBQVksQ0FBQyxFQUMxQixzREFBWSxDQUFDLFlBQVksQ0FBQyxDQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFekIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxrREFBUyxDQUM5QixJQUFJLENBQUMsR0FBRyxFQUNSLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOO1lBQ0UsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztZQUNuRSxHQUFHLEVBQUUsR0FBRztTQUNULENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU07UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVPLElBQUk7UUFDVixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5QyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FNRiIsImZpbGUiOiIuL3NyYy9yZW5kZXJfZW5naW5lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2FudmFzRWxlbWVudCwgZ2V0V2luZG93U2l6ZSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgY29tcGlsZVNoYWRlclByb2dyYW0gfSBmcm9tIFwiLi9jb21waWxlclwiO1xuaW1wb3J0IHsgQnVmZmVyU2V0IH0gZnJvbSBcIi4vYnVmZmVyX3NldFwiO1xuaW1wb3J0IHsgc2hhZGVyU291cmNlIH0gZnJvbSBcIi4vc2hhZGVyc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyRW5naW5lIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIFJlbmRlckVuZ2luZS5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jYW52YXMgPSBjcmVhdGVDYW52YXNFbGVtZW50KFwicmVuZGVyY2FudmFzXCIpO1xuICAgIHRoaXMucmVzaXplKCk7XG4gICAgdGhpcy5fZ2wgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKSBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xuICAgIGlmICh0aGlzLl9nbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIFdlYkdMMlwiKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBNYXggbnVtYmVyIG9mIHZlcnRleCBhdHRyaWJ1dGVzOiAke3RoaXMuX2dsLmdldFBhcmFtZXRlcihcbiAgICAgICAgdGhpcy5fZ2wuTUFYX1ZFUlRFWF9BVFRSSUJTXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBlbmdpbmUuXG4gICAqL1xuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgLy8gQ29tcGlsZSBwcm9ncmFtLlxuICAgIGNvbnN0IHByb2dyYW0gPSBjb21waWxlU2hhZGVyUHJvZ3JhbShcbiAgICAgIHRoaXMuX2dsLFxuICAgICAgc2hhZGVyU291cmNlKFwiY29sb3JlZC52c1wiKSxcbiAgICAgIHNoYWRlclNvdXJjZShcImNvbG9yZWQuZnNcIilcbiAgICApOyAgICBcblxuICAgIHRoaXMuX3Byb2dyYW0wID0gcHJvZ3JhbTtcblxuICAgIC8vIENyZWF0ZSBidWZmZXIgc2V0LlxuICAgIHRoaXMuX2J1ZmZlclNldDAgPSBuZXcgQnVmZmVyU2V0KFxuICAgICAgdGhpcy5fZ2wsXG4gICAgICBbMiwgM10sXG4gICAgICBbXG4gICAgICAgIDAuMCwgMC4yNSwgMS4wLCAwLjAsIDAuMCwgLTAuMSwgLTAuMSwgMC4wLCAxLjAsIDAuMCwgMC40LCAtMC40LCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLFxuICAgICAgXVxuICAgICk7XG5cbiAgICB0aGlzLmxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3Qgb24gYSB3aW5kb3cgcmVzaXplLlxuICAgKi9cbiAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2FudmFzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2F0Y2ggcmVzaXplIGV2ZW50XCIpO1xuICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9vcCgpOiB2b2lkIHtcbiAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBnZXRXaW5kb3dTaXplKCk7XG5cbiAgICB0aGlzLl9nbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgdGhpcy5fZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5fZ2wuY2xlYXIodGhpcy5fZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgICB0aGlzLl9nbC5lbmFibGUodGhpcy5fZ2wuQ1VMTF9GQUNFKTtcbiAgICB0aGlzLl9nbC5jdWxsRmFjZSh0aGlzLl9nbC5CQUNLKTtcbiAgICB0aGlzLl9nbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0wKTtcbiAgICB0aGlzLl9idWZmZXJTZXQwLmJpbmQoKTtcbiAgICB0aGlzLl9nbC5kcmF3QXJyYXlzKHRoaXMuX2dsLlRSSUFOR0xFUywgMCwgMyk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBfZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG4gIHByaXZhdGUgX3Byb2dyYW0wOiBXZWJHTFByb2dyYW0gPSBudWxsITtcbiAgcHJpdmF0ZSBfYnVmZmVyU2V0MDogQnVmZmVyU2V0ID0gbnVsbCE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/render_engine.ts\n");

/***/ }),

/***/ "./src/shaders.ts":
/*!************************!*\
  !*** ./src/shaders.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shaderSource\": () => (/* binding */ shaderSource)\n/* harmony export */ });\nfunction shaderSource(name) {\n    if (name === \"colored.vs\") {\n        return `#version 300 es\n\n    layout (location = 0) in vec4 a_position;\n    layout (location = 1) in vec3 a_color;\n    \n    out vec3 v_color;\n    \n    void main() {\n      v_color = a_color;\n      gl_Position = a_position;\n    }`;\n    }\n    else if (name == \"colored.fs\") {\n        return `#version 300 es\n\n    precision highp float;\n      \n    in vec3 v_color;\n    out vec4 color;\n    \n    void main() {\n      color = vec4(v_color, 1);\n    }`;\n    }\n    else {\n        throw new Error(`Requested shader code ${name} is unknown`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9zaGFkZXJzLnRzPzBmMDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVMsWUFBWSxDQUFDLElBQVk7SUFDdkMsSUFBSSxJQUFJLEtBQUssWUFBWSxFQUFFO1FBQ3pCLE9BQU87Ozs7Ozs7Ozs7TUFVTCxDQUFDO0tBQ0o7U0FBTSxJQUFJLElBQUksSUFBSSxZQUFZLEVBQUU7UUFDL0IsT0FBTzs7Ozs7Ozs7O01BU0wsQ0FBQztLQUNKO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixJQUFJLGFBQWEsQ0FBQyxDQUFDO0tBQzdEO0FBQ0gsQ0FBQyIsImZpbGUiOiIuL3NyYy9zaGFkZXJzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNoYWRlclNvdXJjZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAobmFtZSA9PT0gXCJjb2xvcmVkLnZzXCIpIHtcbiAgICByZXR1cm4gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgbGF5b3V0IChsb2NhdGlvbiA9IDApIGluIHZlYzQgYV9wb3NpdGlvbjtcbiAgICBsYXlvdXQgKGxvY2F0aW9uID0gMSkgaW4gdmVjMyBhX2NvbG9yO1xuICAgIFxuICAgIG91dCB2ZWMzIHZfY29sb3I7XG4gICAgXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgdl9jb2xvciA9IGFfY29sb3I7XG4gICAgICBnbF9Qb3NpdGlvbiA9IGFfcG9zaXRpb247XG4gICAgfWA7XG4gIH0gZWxzZSBpZiAobmFtZSA9PSBcImNvbG9yZWQuZnNcIikge1xuICAgIHJldHVybiBgI3ZlcnNpb24gMzAwIGVzXG5cbiAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4gICAgICBcbiAgICBpbiB2ZWMzIHZfY29sb3I7XG4gICAgb3V0IHZlYzQgY29sb3I7XG4gICAgXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgY29sb3IgPSB2ZWM0KHZfY29sb3IsIDEpO1xuICAgIH1gO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdGVkIHNoYWRlciBjb2RlICR7bmFtZX0gaXMgdW5rbm93bmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shaders.ts\n");

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