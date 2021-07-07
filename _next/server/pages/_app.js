module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./src/lib/globalStyles.ts":
/*!*********************************!*\
  !*** ./src/lib/globalStyles.ts ***!
  \*********************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable import/prefer-default-export */\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  ${styled_reset__WEBPACK_IMPORTED_MODULE_1___default.a}\n  \n  html, body {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2dsb2JhbFN0eWxlcy50cz8wODU2Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxHQUFHQyxtRUFBa0I7QUFDN0MsSUFBSUMsbURBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPIiwiZmlsZSI6Ii4vc3JjL2xpYi9nbG9iYWxTdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHJlc2V0IGZyb20gXCJzdHlsZWQtcmVzZXRcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICR7cmVzZXR9XG4gIFxuICBodG1sLCBib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/globalStyles.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _lib_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/globalStyles */ \"./src/lib/globalStyles.ts\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/Thang.DoX/Desktop/nextjs-ts-antd-saga/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_globalStyles__WEBPACK_IMPORTED_MODULE_2__[\"GlobalStyle\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_redux_store__WEBPACK_IMPORTED_MODULE_1__[\"wrapper\"].withRedux(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBd0M7QUFDcEQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFNRCxDQVBEOztBQVNlQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCSixLQUFsQixDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCJAcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcIkBsaWIvZ2xvYmFsU3R5bGVzXCI7XG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/components/Api/constants.ts":
/*!***********************************************!*\
  !*** ./src/redux/components/Api/constants.ts ***!
  \***********************************************/
/*! exports provided: API_GET, API_POST, API_PUT, API_PATCH, API_DELETE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_GET\", function() { return API_GET; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_POST\", function() { return API_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_PUT\", function() { return API_PUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_PATCH\", function() { return API_PATCH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_DELETE\", function() { return API_DELETE; });\nconst API_GET = \"API_GET\";\nconst API_POST = \"API_POST\";\nconst API_PUT = \"API_PUT\";\nconst API_PATCH = \"API_PATCH\";\nconst API_DELETE = \"API_DELETE\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY29tcG9uZW50cy9BcGkvY29uc3RhbnRzLnRzPzQzMWUiXSwibmFtZXMiOlsiQVBJX0dFVCIsIkFQSV9QT1NUIiwiQVBJX1BVVCIsIkFQSV9QQVRDSCIsIkFQSV9ERUxFVEUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQiIsImZpbGUiOiIuL3NyYy9yZWR1eC9jb21wb25lbnRzL0FwaS9jb25zdGFudHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX0dFVCA9IFwiQVBJX0dFVFwiO1xuZXhwb3J0IGNvbnN0IEFQSV9QT1NUID0gXCJBUElfUE9TVFwiO1xuZXhwb3J0IGNvbnN0IEFQSV9QVVQgPSBcIkFQSV9QVVRcIjtcbmV4cG9ydCBjb25zdCBBUElfUEFUQ0ggPSBcIkFQSV9QQVRDSFwiO1xuZXhwb3J0IGNvbnN0IEFQSV9ERUxFVEUgPSBcIkFQSV9ERUxFVEVcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/components/Api/constants.ts\n");

/***/ }),

/***/ "./src/redux/components/Api/saga.ts":
/*!******************************************!*\
  !*** ./src/redux/components/Api/saga.ts ***!
  \******************************************/
/*! exports provided: apiGetFlow, apiPostFlow, apiPutFlow, apiPatchFlow, apiDeleteFlow, apiRequestFlow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetFlow\", function() { return apiGetFlow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiPostFlow\", function() { return apiPostFlow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiPutFlow\", function() { return apiPutFlow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiPatchFlow\", function() { return apiPatchFlow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiDeleteFlow\", function() { return apiDeleteFlow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiRequestFlow\", function() { return apiRequestFlow; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/redux/components/Api/constants.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction* apiGetFlow(nextCtx, action) {\n  const {\n    url,\n    successAction,\n    errorAction,\n    options\n  } = action;\n\n  try {\n    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get, `${url}/`, _objectSpread({}, options || {}));\n    if (!response) throw new Error(); // @ts-ignore\n\n    const {\n      data\n    } = response;\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(successAction({\n      data\n    }));\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(errorAction({\n      error\n    }));\n  }\n}\nfunction* apiPostFlow(nextCtx, action) {}\nfunction* apiPutFlow(nextCtx, action) {}\nfunction* apiPatchFlow(nextCtx, action) {}\nfunction* apiDeleteFlow(nextCtx, action) {}\nfunction* apiRequestFlow(nextCtx, action) {\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_GET\"]:\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(apiGetFlow, nextCtx, action);\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_POST\"]:\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(apiPostFlow, nextCtx, action);\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_PUT\"]:\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(apiPutFlow, nextCtx, action);\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_PATCH\"]:\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(apiPatchFlow, nextCtx, action);\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_DELETE\"]:\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(apiDeleteFlow, nextCtx, action);\n      break;\n\n    default:\n      break;\n  }\n}\n\nfunction* apiRequestWatcher(nextCtx) {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])([_constants__WEBPACK_IMPORTED_MODULE_2__[\"API_GET\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_POST\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_PUT\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_PATCH\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"API_DELETE\"]], apiRequestFlow, nextCtx);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiRequestWatcher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY29tcG9uZW50cy9BcGkvc2FnYS50cz9jZTJiIl0sIm5hbWVzIjpbImFwaUdldEZsb3ciLCJuZXh0Q3R4IiwiYWN0aW9uIiwidXJsIiwic3VjY2Vzc0FjdGlvbiIsImVycm9yQWN0aW9uIiwib3B0aW9ucyIsInJlc3BvbnNlIiwiY2FsbCIsImF4aW9zIiwiZ2V0IiwiRXJyb3IiLCJkYXRhIiwicHV0IiwiZXJyb3IiLCJhcGlQb3N0RmxvdyIsImFwaVB1dEZsb3ciLCJhcGlQYXRjaEZsb3ciLCJhcGlEZWxldGVGbG93IiwiYXBpUmVxdWVzdEZsb3ciLCJ0eXBlIiwiQVBJX0dFVCIsIkFQSV9QT1NUIiwiQVBJX1BVVCIsIkFQSV9QQVRDSCIsIkFQSV9ERUxFVEUiLCJhcGlSZXF1ZXN0V2F0Y2hlciIsInRha2VFdmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBRU8sVUFBVUEsVUFBVixDQUFxQkMsT0FBckIsRUFBdUNDLE1BQXZDLEVBQXFFO0FBQzFFLFFBQU07QUFBRUMsT0FBRjtBQUFPQyxpQkFBUDtBQUFzQkMsZUFBdEI7QUFBbUNDO0FBQW5DLE1BQTBESixNQUFoRTs7QUFFQSxNQUFJO0FBQ0YsVUFBTUssUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNDLDRDQUFLLENBQUNDLEdBQVAsRUFBYSxHQUFFUCxHQUFJLEdBQW5CLG9CQUNyQkcsT0FBTyxJQUFJLEVBRFUsRUFBM0I7QUFJQSxRQUFJLENBQUNDLFFBQUwsRUFBZSxNQUFNLElBQUlJLEtBQUosRUFBTixDQUxiLENBT0Y7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVdMLFFBQWpCO0FBRUEsVUFBTU0sOERBQUcsQ0FBQ1QsYUFBYSxDQUFDO0FBQUVRO0FBQUYsS0FBRCxDQUFkLENBQVQ7QUFDRCxHQVhELENBV0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsVUFBTUQsOERBQUcsQ0FBQ1IsV0FBVyxDQUFDO0FBQUVTO0FBQUYsS0FBRCxDQUFaLENBQVQ7QUFDRDtBQUNGO0FBRU0sVUFBVUMsV0FBVixDQUFzQmQsT0FBdEIsRUFBd0NDLE1BQXhDLEVBQXVFLENBQUU7QUFFekUsVUFBVWMsVUFBVixDQUFxQmYsT0FBckIsRUFBdUNDLE1BQXZDLEVBQXFFLENBQUU7QUFFdkUsVUFBVWUsWUFBVixDQUNMaEIsT0FESyxFQUVMQyxNQUZLLEVBR00sQ0FBRTtBQUVSLFVBQVVnQixhQUFWLENBQ0xqQixPQURLLEVBRUxDLE1BRkssRUFHTSxDQUFFO0FBRVIsVUFBVWlCLGNBQVYsQ0FBeUJsQixPQUF6QixFQUEyQ0MsTUFBM0MsRUFBc0U7QUFDM0UsVUFBUUEsTUFBTSxDQUFDa0IsSUFBZjtBQUNFLFNBQUtDLGtEQUFMO0FBQ0UsWUFBTWIsK0RBQUksQ0FBQ1IsVUFBRCxFQUFhQyxPQUFiLEVBQXNCQyxNQUF0QixDQUFWO0FBQ0E7O0FBQ0YsU0FBS29CLG1EQUFMO0FBQ0UsWUFBTWQsK0RBQUksQ0FBQ08sV0FBRCxFQUFjZCxPQUFkLEVBQXVCQyxNQUF2QixDQUFWO0FBQ0E7O0FBQ0YsU0FBS3FCLGtEQUFMO0FBQ0UsWUFBTWYsK0RBQUksQ0FBQ1EsVUFBRCxFQUFhZixPQUFiLEVBQXNCQyxNQUF0QixDQUFWO0FBQ0E7O0FBQ0YsU0FBS3NCLG9EQUFMO0FBQ0UsWUFBTWhCLCtEQUFJLENBQUNTLFlBQUQsRUFBZWhCLE9BQWYsRUFBd0JDLE1BQXhCLENBQVY7QUFDQTs7QUFDRixTQUFLdUIscURBQUw7QUFDRSxZQUFNakIsK0RBQUksQ0FBQ1UsYUFBRCxFQUFnQmpCLE9BQWhCLEVBQXlCQyxNQUF6QixDQUFWO0FBQ0E7O0FBQ0Y7QUFDRTtBQWpCSjtBQW1CRDs7QUFFRCxVQUFVd0IsaUJBQVYsQ0FBNEJ6QixPQUE1QixFQUF5RDtBQUN2RCxRQUFNMEIsb0VBQVMsQ0FDYixDQUFDTixrREFBRCxFQUFVQyxtREFBVixFQUFvQkMsa0RBQXBCLEVBQTZCQyxvREFBN0IsRUFBd0NDLHFEQUF4QyxDQURhLEVBRWJOLGNBRmEsRUFHYmxCLE9BSGEsQ0FBZjtBQUtEOztBQUVjeUIsZ0ZBQWYiLCJmaWxlIjoiLi9zcmMvcmVkdXgvY29tcG9uZW50cy9BcGkvc2FnYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VFdmVyeSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBOZXh0Q3R4IH0gZnJvbSBcIkBnbG9iYWxUeXBlc1wiO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBHZXRBY3Rpb24sXG4gIFBvc3RBY3Rpb24sXG4gIFB1dEFjdGlvbixcbiAgUGF0Y2hBY3Rpb24sXG4gIERlbGV0ZUFjdGlvbixcbn0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEFQSV9HRVQsIEFQSV9ERUxFVEUsIEFQSV9QQVRDSCwgQVBJX1BPU1QsIEFQSV9QVVQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBhcGlHZXRGbG93KG5leHRDdHg6IE5leHRDdHgsIGFjdGlvbjogR2V0QWN0aW9uKTogR2VuZXJhdG9yIHtcbiAgY29uc3QgeyB1cmwsIHN1Y2Nlc3NBY3Rpb24sIGVycm9yQWN0aW9uLCBvcHRpb25zIH06IEdldEFjdGlvbiA9IGFjdGlvbjtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChheGlvcy5nZXQsIGAke3VybH0vYCwge1xuICAgICAgLi4uKG9wdGlvbnMgfHwge30pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZSkgdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcblxuICAgIHlpZWxkIHB1dChzdWNjZXNzQWN0aW9uKHsgZGF0YSB9KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGVycm9yQWN0aW9uKHsgZXJyb3IgfSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogYXBpUG9zdEZsb3cobmV4dEN0eDogTmV4dEN0eCwgYWN0aW9uOiBQb3N0QWN0aW9uKTogR2VuZXJhdG9yIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiogYXBpUHV0RmxvdyhuZXh0Q3R4OiBOZXh0Q3R4LCBhY3Rpb246IFB1dEFjdGlvbik6IEdlbmVyYXRvciB7fVxuXG5leHBvcnQgZnVuY3Rpb24qIGFwaVBhdGNoRmxvdyhcbiAgbmV4dEN0eDogTmV4dEN0eCxcbiAgYWN0aW9uOiBQYXRjaEFjdGlvblxuKTogR2VuZXJhdG9yIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiogYXBpRGVsZXRlRmxvdyhcbiAgbmV4dEN0eDogTmV4dEN0eCxcbiAgYWN0aW9uOiBEZWxldGVBY3Rpb25cbik6IEdlbmVyYXRvciB7fVxuXG5leHBvcnQgZnVuY3Rpb24qIGFwaVJlcXVlc3RGbG93KG5leHRDdHg6IE5leHRDdHgsIGFjdGlvbjogQWN0aW9uKTogR2VuZXJhdG9yIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVBJX0dFVDpcbiAgICAgIHlpZWxkIGNhbGwoYXBpR2V0RmxvdywgbmV4dEN0eCwgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQVBJX1BPU1Q6XG4gICAgICB5aWVsZCBjYWxsKGFwaVBvc3RGbG93LCBuZXh0Q3R4LCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBUElfUFVUOlxuICAgICAgeWllbGQgY2FsbChhcGlQdXRGbG93LCBuZXh0Q3R4LCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBUElfUEFUQ0g6XG4gICAgICB5aWVsZCBjYWxsKGFwaVBhdGNoRmxvdywgbmV4dEN0eCwgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQVBJX0RFTEVURTpcbiAgICAgIHlpZWxkIGNhbGwoYXBpRGVsZXRlRmxvdywgbmV4dEN0eCwgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiogYXBpUmVxdWVzdFdhdGNoZXIobmV4dEN0eDogTmV4dEN0eCk6IEdlbmVyYXRvciB7XG4gIHlpZWxkIHRha2VFdmVyeShcbiAgICBbQVBJX0dFVCwgQVBJX1BPU1QsIEFQSV9QVVQsIEFQSV9QQVRDSCwgQVBJX0RFTEVURV0sXG4gICAgYXBpUmVxdWVzdEZsb3csXG4gICAgbmV4dEN0eFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlSZXF1ZXN0V2F0Y2hlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/components/Api/saga.ts\n");

/***/ }),

/***/ "./src/redux/reducers.ts":
/*!*******************************!*\
  !*** ./src/redux/reducers.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMudHM/NGUwNiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLDRIQUFlLENBQUMsRUFBRCxDQUE5QiIsImZpbGUiOiIuL3NyYy9yZWR1eC9yZWR1Y2Vycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe30pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers.ts\n");

/***/ }),

/***/ "./src/redux/sagas.ts":
/*!****************************!*\
  !*** ./src/redux/sagas.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Api_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Api/saga */ \"./src/redux/components/Api/saga.ts\");\n\n\n/* you can pass nextCtx to the sagas */\n\nfunction* rootSaga(nextCtx) {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_components_Api_saga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nextCtx)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc2FnYXMudHM/MWFjYyJdLCJuYW1lcyI6WyJyb290U2FnYSIsIm5leHRDdHgiLCJhbGwiLCJhcGlSZXF1ZXN0U2FnYXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7O0FBQ2UsVUFBVUEsUUFBVixDQUFtQkMsT0FBbkIsRUFBZ0Q7QUFDN0QsUUFBTUMsOERBQUcsQ0FBQyxDQUFDQyxvRUFBZSxDQUFDRixPQUFELENBQWhCLENBQUQsQ0FBVDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L3NhZ2FzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHsgTmV4dEN0eCB9IGZyb20gXCJAZ2xvYmFsVHlwZXNcIjtcbmltcG9ydCBhcGlSZXF1ZXN0U2FnYXMgZnJvbSBcIkByZWR1eC9jb21wb25lbnRzL0FwaS9zYWdhXCI7XG5cbi8qIHlvdSBjYW4gcGFzcyBuZXh0Q3R4IHRvIHRoZSBzYWdhcyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKG5leHRDdHg6IE5leHRDdHgpOiBHZW5lcmF0b3Ige1xuICB5aWVsZCBhbGwoW2FwaVJlcXVlc3RTYWdhcyhuZXh0Q3R4KV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/sagas.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ \"./src/redux/sagas.ts\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./src/redux/reducers.ts\");\n\n\n\n\n\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nconst composeEnhancers =  false || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n\nconst configureStore = (initialState, nextCtx) => {\n  const isClient = false;\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware)));\n\n  if ( true && isClient) {\n    window.store = store;\n  }\n\n  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], nextCtx);\n  return store;\n}; // @ts-ignore\n\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"createWrapper\"])(configureStore, {\n  debug: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUudHM/MDBiYiJdLCJuYW1lcyI6WyJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY29tcG9zZUVuaGFuY2VycyIsImNvbXBvc2UiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm5leHRDdHgiLCJpc0NsaWVudCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsIndpbmRvdyIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxNQUFNQyxnQkFBZ0IsR0FDbkIsTUFBRCxJQUdBQyw2Q0FKRjs7QUFNQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsWUFBRCxFQUFlQyxPQUFmLEtBQTJCO0FBQ2hELFFBQU1DLFFBQVEsUUFBZDtBQUVBLFFBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FDdkJDLGlEQUR1QixFQUV2QkwsWUFGdUIsRUFHdkJILGdCQUFnQixDQUFDUyw2REFBZSxDQUFDWCxjQUFELENBQWhCLENBSE8sQ0FBekI7O0FBS0EsTUFBSSxTQUEwQ08sUUFBOUMsRUFBd0Q7QUFDdERLLFVBQU0sQ0FBQ0osS0FBUCxHQUFlQSxLQUFmO0FBQ0Q7O0FBRURSLGdCQUFjLENBQUNhLEdBQWYsQ0FBbUJDLDhDQUFuQixFQUE2QlIsT0FBN0I7QUFDQSxTQUFPRSxLQUFQO0FBQ0QsQ0FkRCxDLENBZ0JBOzs7QUFDTyxNQUFNTyxPQUFPLEdBQUdDLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDbkRhLE9BQUs7QUFEOEMsQ0FBakIsQ0FBN0IiLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5cbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi9zYWdhc1wiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18pIHx8XG4gIGNvbXBvc2U7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSwgbmV4dEN0eCkgPT4ge1xuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxuICApO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBpc0NsaWVudCkge1xuICAgIHdpbmRvdy5zdG9yZSA9IHN0b3JlO1xuICB9XG5cbiAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhLCBuZXh0Q3R4KTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-reset\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIj9kYzdjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0eWxlZC1yZXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1yZXNldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-reset\n");

/***/ })

/******/ });