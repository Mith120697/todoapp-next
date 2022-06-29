"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-center mt-6\",\n                children: \"To Do List\"\n            }, void 0, false, {\n                fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                class: \"p-6 mt-6 mr-10 ml-10 w-70 text-m font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white\",\n                children: props.data.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        class: \"flex justify-between border-b border-gray-200 rounded-t-lg dark:border-gray-600\",\n                        children: [\n                            element.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: element.completed\n                            }, void 0, false, {\n                                fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\nIndex.getInitialProps = async function() {\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"https://jsonplaceholder.typicode.com/todos\");\n    const data = await res.json();\n    console.log(data);\n    return {\n        data: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXNDO0FBRXRDLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDcEIscUJBQ0csOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7MEJBQ2hDLDhEQUFDQyxHQUFDO2dCQUFDQyxLQUFLLEVBQUMsa0JBQWtCOzBCQUFFLFlBQVU7Ozs7O3lCQUFJOzBCQUM3Qyw4REFBQ0MsSUFBRTtnQkFBQ0QsS0FBSyxFQUFDLDZKQUE2SjswQkFDcEtKLEtBQUssQ0FBQ00sSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxpQkFDdEIsOERBQUNDLElBQUU7d0JBQUNMLEtBQUssRUFBQyxpRkFBa0Y7OzRCQUN6RkksT0FBTyxDQUFDRSxLQUFLOzBDQUNkLDhEQUFDQyxPQUFLO2dDQUNKQyxJQUFJLEVBQUMsVUFBVTtnQ0FDZkMsT0FBTyxFQUFFTCxPQUFPLENBQUNNLFNBQVM7Ozs7O3lDQUcxQjs7Ozs7O2lDQUNDO2dCQUNOLENBQUM7Ozs7O3lCQUNDOzs7Ozs7aUJBQ0MsQ0FFTjtDQUNIO0FBR0hmLEtBQUssQ0FBQ2dCLGVBQWUsR0FBRyxpQkFBZ0I7SUFDcEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1sQix5REFBSyxDQUFFLDRDQUE0QyxDQUFDO0lBQ3RFLE1BQU1RLElBQUksR0FBRyxNQUFNVSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNiLElBQUksQ0FBQztJQUNqQixPQUFPO1FBQ0pBLElBQUksRUFBQ0EsSUFBSTtLQUNYO0NBQ0o7QUFHRCxpRUFBZVAsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3RhcHAtbmV4dC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIlxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyIG10LTZcIiA+VG8gRG8gTGlzdDwvcD5cbiAgICAgIDx1bCBjbGFzcz1cInAtNiBtdC02IG1yLTEwIG1sLTEwIHctNzAgdGV4dC1tIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZWxlbWVudCkgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuICBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcm91bmRlZC10LWxnIGRhcms6Ym9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICB7ZWxlbWVudC50aXRsZX1cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17ZWxlbWVudC5jb21wbGV0ZWR9ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICApO1xuICB9O1xuIFxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEZldGNoIChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgIGRhdGE6ZGF0YVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiRmV0Y2giLCJJbmRleCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImNsYXNzIiwidWwiLCJkYXRhIiwibWFwIiwiZWxlbWVudCIsImxpIiwidGl0bGUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiY29tcGxldGVkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();