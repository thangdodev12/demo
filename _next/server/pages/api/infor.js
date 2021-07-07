module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/infor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/infor.ts":
/*!********************************!*\
  !*** ./src/pages/api/infor.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet mockData = [{\n  name: \"ABCD1\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD3\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD4\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD5\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD6\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD7\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD8\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD9\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD10\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD11\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD12\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD13\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD14\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD15\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD2-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD3-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD4-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD5-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD6-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD7-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD8-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD9-2\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-20\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-21\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-22\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-23\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-24\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD1-25\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-31\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-32\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-33\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-34\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-35\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-36\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-37\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-38\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-39\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-310\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-311\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-312\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-313\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-314\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}, {\n  name: \"ABCD-315\",\n  email: \"abc@gmail.com\",\n  position: \"123abc, def, hcm\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    body,\n    query: {\n      page,\n      size\n    }\n  } = req;\n\n  if (req.method === \"POST\") {\n    mockData = [body, ...mockData];\n    res.send({\n      success: true\n    });\n  } else {\n    const result = mockData.slice(+page * +size, (+page + 1) * +size);\n    res.send({\n      info: result,\n      total: mockData.length\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2luZm9yLnRzP2RjZWIiXSwibmFtZXMiOlsibW9ja0RhdGEiLCJuYW1lIiwiZW1haWwiLCJwb3NpdGlvbiIsInJlcSIsInJlcyIsImJvZHkiLCJxdWVyeSIsInBhZ2UiLCJzaXplIiwibWV0aG9kIiwic2VuZCIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzbGljZSIsImluZm8iLCJ0b3RhbCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQSxJQUFJQSxRQUFRLEdBQUcsQ0FDYjtBQUFFQyxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsT0FBSyxFQUFFLGVBQXhCO0FBQXlDQyxVQUFRLEVBQUU7QUFBbkQsQ0FEYSxFQUViO0FBQUVGLE1BQUksRUFBRSxPQUFSO0FBQWlCQyxPQUFLLEVBQUUsZUFBeEI7QUFBeUNDLFVBQVEsRUFBRTtBQUFuRCxDQUZhLEVBR2I7QUFBRUYsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE9BQUssRUFBRSxlQUF4QjtBQUF5Q0MsVUFBUSxFQUFFO0FBQW5ELENBSGEsRUFJYjtBQUFFRixNQUFJLEVBQUUsT0FBUjtBQUFpQkMsT0FBSyxFQUFFLGVBQXhCO0FBQXlDQyxVQUFRLEVBQUU7QUFBbkQsQ0FKYSxFQUtiO0FBQUVGLE1BQUksRUFBRSxPQUFSO0FBQWlCQyxPQUFLLEVBQUUsZUFBeEI7QUFBeUNDLFVBQVEsRUFBRTtBQUFuRCxDQUxhLEVBTWI7QUFBRUYsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE9BQUssRUFBRSxlQUF4QjtBQUF5Q0MsVUFBUSxFQUFFO0FBQW5ELENBTmEsRUFPYjtBQUFFRixNQUFJLEVBQUUsT0FBUjtBQUFpQkMsT0FBSyxFQUFFLGVBQXhCO0FBQXlDQyxVQUFRLEVBQUU7QUFBbkQsQ0FQYSxFQVFiO0FBQUVGLE1BQUksRUFBRSxPQUFSO0FBQWlCQyxPQUFLLEVBQUUsZUFBeEI7QUFBeUNDLFVBQVEsRUFBRTtBQUFuRCxDQVJhLEVBU2I7QUFBRUYsTUFBSSxFQUFFLE9B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QUE0Q0MsVUFBUSxFQUFFO0FBQXRELENBM0NhLEVBNENiO0FBQUVGLE1BQUksRUFBRSxVQUFSO0FBQW9CQyxPQUFLLEVBQUUsZUFBM0I7QUFBNENDLFVBQVEsRUFBRTtBQUF0RCxDQTVDYSxFQTZDYjtBQUFFRixNQUFJLEVBQUUsVUFBUjtBQUFvQkMsT0FBSyxFQUFFLGVBQTNCO0FBQTRDQyxVQUFRLEVBQUU7QUFBdEQsQ0E3Q2EsQ0FBZjtBQWdEZSxzRUFBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBZ0U7QUFDN0UsUUFBTTtBQUNKQyxRQURJO0FBRUpDLFNBQUssRUFBRTtBQUFFQyxVQUFGO0FBQVFDO0FBQVI7QUFGSCxNQUdGTCxHQUhKOztBQUlBLE1BQUlBLEdBQUcsQ0FBQ00sTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCVixZQUFRLEdBQUcsQ0FBQ00sSUFBRCxFQUFPLEdBQUdOLFFBQVYsQ0FBWDtBQUNBSyxPQUFHLENBQUNNLElBQUosQ0FBUztBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFUO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsVUFBTUMsTUFBTSxHQUFHYixRQUFRLENBQUNjLEtBQVQsQ0FBZSxDQUFDTixJQUFELEdBQVEsQ0FBQ0MsSUFBeEIsRUFBOEIsQ0FBQyxDQUFDRCxJQUFELEdBQVEsQ0FBVCxJQUFjLENBQUNDLElBQTdDLENBQWY7QUFDQUosT0FBRyxDQUFDTSxJQUFKLENBQVM7QUFBRUksVUFBSSxFQUFFRixNQUFSO0FBQWdCRyxXQUFLLEVBQUVoQixRQUFRLENBQUNpQjtBQUFoQyxLQUFUO0FBQ0Q7QUFDRixDQVpEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9pbmZvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmxldCBtb2NrRGF0YSA9IFtcbiAgeyBuYW1lOiBcIkFCQ0QxXCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNEMlwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDNcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q0XCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNENVwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDZcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q3XCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNEOFwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDlcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QxMFwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDExXCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNEMTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QxM1wiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDE0XCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNEMTVcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QxLTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QyLTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QzLTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q0LTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q1LTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q2LTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q3LTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q4LTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0Q5LTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QxLTIwXCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNEMS0yMVwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDEtMjJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QxLTIzXCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNEMS0yNFwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRDEtMjVcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzFcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzNcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzRcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzVcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzZcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzdcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzhcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzlcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzEwXCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNELTMxMVwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRC0zMTJcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbiAgeyBuYW1lOiBcIkFCQ0QtMzEzXCIsIGVtYWlsOiBcImFiY0BnbWFpbC5jb21cIiwgcG9zaXRpb246IFwiMTIzYWJjLCBkZWYsIGhjbVwiIH0sXG4gIHsgbmFtZTogXCJBQkNELTMxNFwiLCBlbWFpbDogXCJhYmNAZ21haWwuY29tXCIsIHBvc2l0aW9uOiBcIjEyM2FiYywgZGVmLCBoY21cIiB9LFxuICB7IG5hbWU6IFwiQUJDRC0zMTVcIiwgZW1haWw6IFwiYWJjQGdtYWlsLmNvbVwiLCBwb3NpdGlvbjogXCIxMjNhYmMsIGRlZiwgaGNtXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxhbnk+ICYgYW55KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBib2R5LFxuICAgIHF1ZXJ5OiB7IHBhZ2UsIHNpemUgfSxcbiAgfSA9IHJlcTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgbW9ja0RhdGEgPSBbYm9keSwgLi4ubW9ja0RhdGFdO1xuICAgIHJlcy5zZW5kKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXN1bHQgPSBtb2NrRGF0YS5zbGljZSgrcGFnZSAqICtzaXplLCAoK3BhZ2UgKyAxKSAqICtzaXplKTtcbiAgICByZXMuc2VuZCh7IGluZm86IHJlc3VsdCwgdG90YWw6IG1vY2tEYXRhLmxlbmd0aCB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/infor.ts\n");

/***/ })

/******/ });