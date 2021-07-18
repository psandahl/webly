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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _gl_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gl_context */ \"./src/gl_context.ts\");\n/* harmony import */ var _simple_building__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple_building */ \"./src/simple_building.ts\");\n\n\n\nlet glContext;\nlet simpleBuilding;\nwindow.onload = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window loaded with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    try {\n        glContext = new _gl_context__WEBPACK_IMPORTED_MODULE_1__.GLContext();\n        simpleBuilding = new _simple_building__WEBPACK_IMPORTED_MODULE_2__.SimpleBuilding(glContext.gl());\n        glContext.setEntities([simpleBuilding]);\n        glContext.enterRenderLoop();\n    }\n    catch (error) {\n        console.error(error);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearBody)();\n        const elem = document.createElement(\"h3\");\n        elem.innerText = error;\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendBody)(elem);\n    }\n};\nwindow.onresize = () => {\n    const [w, h] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n    const msg = `Window resized with size width: ${w} and height: ${h}`;\n    console.log(msg);\n    if (glContext !== undefined) {\n        glContext.handleResize();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9hcHAudHM/MDY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQTZEO0FBQ3BCO0FBQ1U7QUFFbkQsSUFBSSxTQUFvQixDQUFDO0FBQ3pCLElBQUksY0FBOEIsQ0FBQztBQUVuQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztJQUMvQixNQUFNLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7SUFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQixJQUFJO1FBQ0YsU0FBUyxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO1FBQzVCLGNBQWMsR0FBRyxJQUFJLDREQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFcEQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzdCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLCtDQUFTLEVBQUUsQ0FBQztRQUVaLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0RBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsbURBQWEsRUFBRSxDQUFDO0lBQy9CLE1BQU0sR0FBRyxHQUFHLG1DQUFtQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztJQUVwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUMzQixTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDMUI7QUFDSCxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2luZG93U2l6ZSwgY2xlYXJCb2R5LCBhcHBlbmRCb2R5IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBHTENvbnRleHQgfSBmcm9tIFwiLi9nbF9jb250ZXh0XCI7XG5pbXBvcnQgeyBTaW1wbGVCdWlsZGluZyB9IGZyb20gXCIuL3NpbXBsZV9idWlsZGluZ1wiO1xuXG5sZXQgZ2xDb250ZXh0OiBHTENvbnRleHQ7XG5sZXQgc2ltcGxlQnVpbGRpbmc6IFNpbXBsZUJ1aWxkaW5nO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBbdywgaF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gIGNvbnN0IG1zZyA9IGBXaW5kb3cgbG9hZGVkIHdpdGggc2l6ZSB3aWR0aDogJHt3fSBhbmQgaGVpZ2h0OiAke2h9YDtcblxuICBjb25zb2xlLmxvZyhtc2cpO1xuXG4gIHRyeSB7XG4gICAgZ2xDb250ZXh0ID0gbmV3IEdMQ29udGV4dCgpO1xuICAgIHNpbXBsZUJ1aWxkaW5nID0gbmV3IFNpbXBsZUJ1aWxkaW5nKGdsQ29udGV4dC5nbCgpKTtcblxuICAgIGdsQ29udGV4dC5zZXRFbnRpdGllcyhbc2ltcGxlQnVpbGRpbmddKTtcbiAgICBnbENvbnRleHQuZW50ZXJSZW5kZXJMb29wKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgY2xlYXJCb2R5KCk7XG5cbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGVsZW0uaW5uZXJUZXh0ID0gZXJyb3I7XG4gICAgYXBwZW5kQm9keShlbGVtKTtcbiAgfVxufTtcblxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICBjb25zdCBbdywgaF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gIGNvbnN0IG1zZyA9IGBXaW5kb3cgcmVzaXplZCB3aXRoIHNpemUgd2lkdGg6ICR7d30gYW5kIGhlaWdodDogJHtofWA7XG5cbiAgY29uc29sZS5sb2cobXNnKTtcblxuICBpZiAoZ2xDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbENvbnRleHQuaGFuZGxlUmVzaXplKCk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/buffer_set.ts":
/*!***************************!*\
  !*** ./src/buffer_set.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BufferSet\": () => (/* binding */ BufferSet)\n/* harmony export */ });\nclass BufferSet {\n    constructor(gl, attrib, data) {\n        this._buf = gl.createBuffer();\n        gl.bindBuffer(gl.ARRAY_BUFFER, this._buf);\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);\n        this._vao = gl.createVertexArray();\n        gl.bindVertexArray(this._vao);\n        const itemSize = 4; // Float is four bytes wide.\n        const totalValues = attrib.reduce((acc, value) => acc + value, 0);\n        let valueCount = 0;\n        attrib.forEach((numValues, index) => {\n            gl.enableVertexAttribArray(index);\n            gl.vertexAttribPointer(index, numValues, gl.FLOAT, false, itemSize * totalValues, valueCount * itemSize);\n            valueCount += numValues;\n        });\n        this._gl = gl;\n    }\n    bind() {\n        this._gl.bindVertexArray(this._vao);\n    }\n    unbind() {\n        this._gl.bindVertexArray(null);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9idWZmZXJfc2V0LnRzPzk0MWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sU0FBUztJQUNwQixZQUNFLEVBQTBCLEVBQzFCLE1BQWdCLEVBQ2hCLElBQWM7UUFFZCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUcsQ0FBQztRQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUcsQ0FBQztRQUNwQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDaEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDcEIsS0FBSyxFQUNMLFNBQVMsRUFDVCxFQUFFLENBQUMsS0FBSyxFQUNSLEtBQUssRUFDTCxRQUFRLEdBQUcsV0FBVyxFQUN0QixVQUFVLEdBQUcsUUFBUSxDQUN0QixDQUFDO1lBQ0YsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUtGIiwiZmlsZSI6Ii4vc3JjL2J1ZmZlcl9zZXQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQnVmZmVyU2V0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxuICAgIGF0dHJpYjogbnVtYmVyW10sXG4gICAgZGF0YTogbnVtYmVyW11cbiAgKSB7XG4gICAgdGhpcy5fYnVmID0gZ2wuY3JlYXRlQnVmZmVyKCkhO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl9idWYpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGRhdGEpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB0aGlzLl92YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpITtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy5fdmFvKTtcblxuICAgIGNvbnN0IGl0ZW1TaXplID0gNDsgLy8gRmxvYXQgaXMgZm91ciBieXRlcyB3aWRlLlxuICAgIGNvbnN0IHRvdGFsVmFsdWVzID0gYXR0cmliLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApO1xuXG4gICAgbGV0IHZhbHVlQ291bnQgPSAwO1xuICAgIGF0dHJpYi5mb3JFYWNoKChudW1WYWx1ZXMsIGluZGV4KSA9PiB7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCk7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICBpbmRleCxcbiAgICAgICAgbnVtVmFsdWVzLFxuICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGl0ZW1TaXplICogdG90YWxWYWx1ZXMsXG4gICAgICAgIHZhbHVlQ291bnQgKiBpdGVtU2l6ZVxuICAgICAgKTtcbiAgICAgIHZhbHVlQ291bnQgKz0gbnVtVmFsdWVzO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZ2wgPSBnbDtcbiAgfVxuXG4gIHB1YmxpYyBiaW5kKCk6IHZvaWQge1xuICAgIHRoaXMuX2dsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLl92YW8pO1xuICB9XG5cbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9nbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9idWY6IFdlYkdMQnVmZmVyO1xuICBwcml2YXRlIF92YW86IFdlYkdMVmVydGV4QXJyYXlPYmplY3Q7XG4gIHByaXZhdGUgX2dsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/buffer_set.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWindowSize\": () => (/* binding */ getWindowSize),\n/* harmony export */   \"createCanvasElement\": () => (/* binding */ createCanvasElement),\n/* harmony export */   \"clearBody\": () => (/* binding */ clearBody),\n/* harmony export */   \"appendBody\": () => (/* binding */ appendBody)\n/* harmony export */ });\n/**\n * Get tuple [width, height] describing the window size.\n */\nfunction getWindowSize() {\n    return [window.innerWidth, window.innerHeight];\n}\n/**\n * Create a canvas element.\n */\nfunction createCanvasElement(elementId) {\n    let canvas = document.createElement(\"canvas\");\n    canvas.id = elementId;\n    return canvas;\n}\n/**\n * Make body clean.\n */\nfunction clearBody() {\n    while (document.body.firstChild) {\n        document.body.removeChild(document.body.lastChild);\n    }\n}\n/**\n * Append a node to the body.\n */\nfunction appendBody(node) {\n    document.body.appendChild(node);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9kb20udHM/NmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0dBRUc7QUFDSSxTQUFTLGFBQWE7SUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsbUJBQW1CLENBQUMsU0FBaUI7SUFDbkQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7SUFDbkUsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFFdEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOztHQUVHO0FBQ0ksU0FBUyxTQUFTO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsVUFBVSxDQUFDLElBQWU7SUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsImZpbGUiOiIuL3NyYy9kb20udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFNpemUgPSBbbnVtYmVyLCBudW1iZXJdO1xuXG4vKipcbiAqIEdldCB0dXBsZSBbd2lkdGgsIGhlaWdodF0gZGVzY3JpYmluZyB0aGUgd2luZG93IHNpemUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplKCk6IFNpemUge1xuICByZXR1cm4gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhbnZhcyBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzRWxlbWVudChlbGVtZW50SWQ6IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGNhbnZhcy5pZCA9IGVsZW1lbnRJZDtcblxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vKipcbiAqIE1ha2UgYm9keSBjbGVhbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQm9keSgpOiB2b2lkIHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQhKTtcbiAgfVxufVxuXG4vKipcbiAqIEFwcGVuZCBhIG5vZGUgdG8gdGhlIGJvZHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRCb2R5KG5vZGU6IENoaWxkTm9kZSk6IHZvaWQge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dom.ts\n");

/***/ }),

/***/ "./src/gl_context.ts":
/*!***************************!*\
  !*** ./src/gl_context.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GLContext\": () => (/* binding */ GLContext)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n\nclass GLContext {\n    constructor() {\n        this._entities = [];\n        this._canvas = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createCanvasElement)(\"render-canvas\");\n        this.handleResize();\n        this._gl = this._canvas.getContext(\"webgl2\");\n        if (this._gl !== undefined) {\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendBody)(this._canvas);\n        }\n        else {\n            throw new Error(\"Unable to create WebGL2 context\");\n        }\n        this.initialGLSetup();\n    }\n    /**\n     * Handle window resize event.\n     */\n    handleResize() {\n        if (this._canvas !== undefined) {\n            const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n            this._canvas.width = width;\n            this._canvas.height = height;\n        }\n    }\n    /**\n     * Set new entities.\n     * @param entities New entities.\n     */\n    setEntities(entities) {\n        this._entities = entities;\n    }\n    /**\n     * Enter the render loop.\n     */\n    enterRenderLoop() {\n        this.render();\n    }\n    /**\n     * Get the GL context.\n     * @returns The GL context\n     */\n    gl() {\n        return this._gl;\n    }\n    render() {\n        const [width, height] = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)();\n        this._gl.viewport(0, 0, width, height);\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        this._entities.forEach((entity) => {\n            entity.render(this._gl);\n        });\n        requestAnimationFrame(this.render.bind(this));\n    }\n    initialGLSetup() {\n        this._gl.clearColor(0, 0, 0, 1);\n        this._gl.frontFace(this._gl.CCW);\n        this._gl.enable(this._gl.CULL_FACE);\n        this._gl.cullFace(this._gl.BACK);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9nbF9jb250ZXh0LnRzPzI1N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUU7QUFFaEUsTUFBTSxTQUFTO0lBQ3BCO1FBcUVRLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFwRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcseURBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUEyQixDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDMUIsZ0RBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxtREFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsUUFBa0I7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEVBQUU7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVPLE1BQU07UUFDWixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLG1EQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUtGIiwiZmlsZSI6Ii4vc3JjL2dsX2NvbnRleHQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRCb2R5LCBnZXRXaW5kb3dTaXplLCBjcmVhdGVDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tXCI7XG5cbmV4cG9ydCBjbGFzcyBHTENvbnRleHQge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2FudmFzID0gY3JlYXRlQ2FudmFzRWxlbWVudChcInJlbmRlci1jYW52YXNcIik7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcblxuICAgIHRoaXMuX2dsID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIikgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbiAgICBpZiAodGhpcy5fZ2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLl9jYW52YXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIFdlYkdMMiBjb250ZXh0XCIpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbEdMU2V0dXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgd2luZG93IHJlc2l6ZSBldmVudC5cbiAgICovXG4gIHB1YmxpYyBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NhbnZhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBnZXRXaW5kb3dTaXplKCk7XG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBuZXcgZW50aXRpZXMuXG4gICAqIEBwYXJhbSBlbnRpdGllcyBOZXcgZW50aXRpZXMuXG4gICAqL1xuICBwdWJsaWMgc2V0RW50aXRpZXMoZW50aXRpZXM6IEVudGl0eVtdKTogdm9pZCB7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciB0aGUgcmVuZGVyIGxvb3AuXG4gICAqL1xuICBwdWJsaWMgZW50ZXJSZW5kZXJMb29wKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBHTCBjb250ZXh0LlxuICAgKiBAcmV0dXJucyBUaGUgR0wgY29udGV4dFxuICAgKi9cbiAgcHVibGljIGdsKCk6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQge1xuICAgIHJldHVybiB0aGlzLl9nbDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGdldFdpbmRvd1NpemUoKTtcbiAgICB0aGlzLl9nbC52aWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLl9nbC5jbGVhcih0aGlzLl9nbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgZW50aXR5LnJlbmRlcih0aGlzLl9nbCk7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxHTFNldHVwKCk6IHZvaWQge1xuICAgIHRoaXMuX2dsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMSk7XG4gICAgdGhpcy5fZ2wuZnJvbnRGYWNlKHRoaXMuX2dsLkNDVyk7XG4gICAgdGhpcy5fZ2wuZW5hYmxlKHRoaXMuX2dsLkNVTExfRkFDRSk7XG4gICAgdGhpcy5fZ2wuY3VsbEZhY2UodGhpcy5fZ2wuQkFDSyk7XG4gIH1cblxuICBwcml2YXRlIF9nbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBfZW50aXRpZXM6IEVudGl0eVtdID0gW107XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gl_context.ts\n");

/***/ }),

/***/ "./src/simple_building.ts":
/*!********************************!*\
  !*** ./src/simple_building.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleBuilding\": () => (/* binding */ SimpleBuilding)\n/* harmony export */ });\n/* harmony import */ var _buffer_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer_set */ \"./src/buffer_set.ts\");\n/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ \"./src/compiler.ts\");\n\n\nclass SimpleBuilding {\n    constructor(gl) {\n        // Per vertex: x y z r g b\n        this._data = [\n            0.0, 0.25, 0.0, 1.0, 0.0, 0.0, 0.1, -0.3, 0.0, 0.0, 1.0, 0.0, 0.5, 0.1, 0.0,\n            0.0, 0.0, 1.0,\n        ];\n        this._vertexShader = `#version 300 es\n\nlayout (location = 0) in vec4 a_position;\nlayout (location = 1) in vec3 a_color;\n\nout vec3 v_color;\n\nvoid main() {\n  v_color = a_color;\n  gl_Position = a_position;\n}`;\n        this._fragmentShader = `#version 300 es\n\nprecision highp float;\n\nin vec3 v_color;\nout vec4 color;\n\nvoid main() {\n  color = vec4(v_color, 1);\n}`;\n        this._bufferSet = new _buffer_set__WEBPACK_IMPORTED_MODULE_0__.BufferSet(gl, [3, 3], this._data);\n        this._program = (0,_compiler__WEBPACK_IMPORTED_MODULE_1__.compileShaderProgram)(gl, this._vertexShader, this._fragmentShader);\n    }\n    render(gl) {\n        this._bufferSet.bind();\n        gl.useProgram(this._program);\n        gl.drawArrays(gl.TRIANGLES, 0, this._data.length / 6);\n        gl.useProgram(null);\n        this._bufferSet.unbind();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJseS8uL3NyYy9zaW1wbGVfYnVpbGRpbmcudHM/ZmYzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFDUztBQUUzQyxNQUFNLGNBQWM7SUFDekIsWUFBbUIsRUFBMEI7UUFzQjdDLDBCQUEwQjtRQUNULFVBQUssR0FBRztZQUN2QixHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUMzRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7U0FDZCxDQUFDO1FBRWUsa0JBQWEsR0FBRzs7Ozs7Ozs7OztFQVVqQyxDQUFDO1FBRWdCLG9CQUFlLEdBQUc7Ozs7Ozs7OztFQVNuQyxDQUFDO1FBaERDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrREFBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRywrREFBb0IsQ0FDbEMsRUFBRSxFQUNGLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxlQUFlLENBQ3JCLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQTBCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0RCxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQWlDRiIsImZpbGUiOiIuL3NyYy9zaW1wbGVfYnVpbGRpbmcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWZmZXJTZXQgfSBmcm9tIFwiLi9idWZmZXJfc2V0XCI7XG5pbXBvcnQgeyBjb21waWxlU2hhZGVyUHJvZ3JhbSB9IGZyb20gXCIuL2NvbXBpbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVCdWlsZGluZyBpbXBsZW1lbnRzIEVudGl0eSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgIHRoaXMuX2J1ZmZlclNldCA9IG5ldyBCdWZmZXJTZXQoZ2wsIFszLCAzXSwgdGhpcy5fZGF0YSk7XG4gICAgdGhpcy5fcHJvZ3JhbSA9IGNvbXBpbGVTaGFkZXJQcm9ncmFtKFxuICAgICAgZ2wsXG4gICAgICB0aGlzLl92ZXJ0ZXhTaGFkZXIsXG4gICAgICB0aGlzLl9mcmFnbWVudFNoYWRlclxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KTogdm9pZCB7XG4gICAgdGhpcy5fYnVmZmVyU2V0LmJpbmQoKTtcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xuXG4gICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMuX2RhdGEubGVuZ3RoIC8gNik7XG5cbiAgICBnbC51c2VQcm9ncmFtKG51bGwpO1xuICAgIHRoaXMuX2J1ZmZlclNldC51bmJpbmQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1ZmZlclNldDogQnVmZmVyU2V0O1xuICBwcml2YXRlIF9wcm9ncmFtOiBXZWJHTFByb2dyYW07XG5cbiAgLy8gUGVyIHZlcnRleDogeCB5IHogciBnIGJcbiAgcHJpdmF0ZSByZWFkb25seSBfZGF0YSA9IFtcbiAgICAwLjAsIDAuMjUsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMC4xLCAtMC4zLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuNSwgMC4xLCAwLjAsXG4gICAgMC4wLCAwLjAsIDEuMCxcbiAgXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF92ZXJ0ZXhTaGFkZXIgPSBgI3ZlcnNpb24gMzAwIGVzXG5cbmxheW91dCAobG9jYXRpb24gPSAwKSBpbiB2ZWM0IGFfcG9zaXRpb247XG5sYXlvdXQgKGxvY2F0aW9uID0gMSkgaW4gdmVjMyBhX2NvbG9yO1xuXG5vdXQgdmVjMyB2X2NvbG9yO1xuXG52b2lkIG1haW4oKSB7XG4gIHZfY29sb3IgPSBhX2NvbG9yO1xuICBnbF9Qb3NpdGlvbiA9IGFfcG9zaXRpb247XG59YDtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9mcmFnbWVudFNoYWRlciA9IGAjdmVyc2lvbiAzMDAgZXNcblxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG5pbiB2ZWMzIHZfY29sb3I7XG5vdXQgdmVjNCBjb2xvcjtcblxudm9pZCBtYWluKCkge1xuICBjb2xvciA9IHZlYzQodl9jb2xvciwgMSk7XG59YDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/simple_building.ts\n");

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