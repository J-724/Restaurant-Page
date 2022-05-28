/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/HtmlElements.js":
/*!****************************************!*\
  !*** ./src/components/HtmlElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$footer\": () => (/* binding */ $footer),\n/* harmony export */   \"$header\": () => (/* binding */ $header),\n/* harmony export */   \"$main\": () => (/* binding */ $main),\n/* harmony export */   \"d\": () => (/* binding */ d),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst d = document,\n    $header = d.querySelector('div#header'),\n    $main = d.querySelector('div#main'),\n    $footer = d.querySelector('div#footer');\n\nfunction createHtmlElement(type, id, classesArray, content) {\n  const element = d.createElement(type);\n  if (id) element.id = id;\n  if (classesArray){\n    classesArray.forEach((sgclass) => element.classList.add(sgclass));\n  }\n  if (content) element.innerText = content;\n\n  return element;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtmlElement);\n\n//# sourceURL=webpack://restaurant-page/./src/components/HtmlElements.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": () => (/* binding */ hello),\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _HtmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements.js */ \"./src/components/HtmlElements.js\");\n\n\n\nfunction navBar() {\n    const navBarItems = [\"Home\", \"Menu\", \"Contact us\"];\n    const $nav = _HtmlElements_js__WEBPACK_IMPORTED_MODULE_0__.d.createElement(\"div\")\n\n    navBarItems.forEach((item) => \n        $nav.append((0,_HtmlElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, null, item))\n    );\n\n    $nav.classList.add(\"nav\");\n    _HtmlElements_js__WEBPACK_IMPORTED_MODULE_0__.$header.append($nav);    \n}\n\nfunction hello (name) {\n    console.log(\"Mi perrito \"+[name]);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n// import { head } from \"lodash\";\n\n\n\nconst d = document,\n    $header = d.querySelector('div#header'),\n    $main = d.querySelector('div#main'),\n    $footer = d.querySelector('div#footer');\n\nfunction createHtmlElement(type, id, classesArray, content) {\n  const element = d.createElement(type);\n  if (id) element.id = id;\n  if (classesArray){\n    classesArray.forEach((sgclass) => element.classList.add(sgclass));\n  }\n  if (content) element.innerText = content;\n\n  return element;\n}\n\n(0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__.hello)('Ryuk');\n(0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtmlElement);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;