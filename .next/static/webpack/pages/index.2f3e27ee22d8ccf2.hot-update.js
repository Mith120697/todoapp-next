"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_johnsmith_Documents_App_todolistapp_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_johnsmith_Documents_App_todolistapp_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_johnsmith_Documents_App_todolistapp_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Index = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                class: \"text-center mt-6\",\n                children: \"To Do List\"\n            }, void 0, false, {\n                fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                class: \"p-6 mt-6 mr- ml-10 w-70 text-m font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white\",\n                children: props.data.map(function(element) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        class: \"flex justify-between border-b border-gray-200 rounded-t-lg dark:border-gray-600\",\n                        children: [\n                            element.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: element.completed\n                            }, void 0, false, {\n                                fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnsmith/Documents/App/todolistapp-next/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this);\n};\n_c = Index;\nIndex.getInitialProps = _asyncToGenerator(_Users_johnsmith_Documents_App_todolistapp_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res, data;\n    return _Users_johnsmith_Documents_App_todolistapp_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://jsonplaceholder.typicode.com/todos\");\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                data = _ctx.sent;\n                console.log(data);\n                return _ctx.abrupt(\"return\", {\n                    data: data\n                });\n            case 8:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLElBQU1DLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3BCLHFCQUNHLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7OzBCQUNoQyw4REFBQ0MsR0FBQztnQkFBQ0MsS0FBSyxFQUFDLGtCQUFrQjswQkFBRSxZQUFVOzs7OztxQkFBSTswQkFDN0MsOERBQUNDLElBQUU7Z0JBQUNELEtBQUssRUFBQywySkFBMko7MEJBQ2xLSixLQUFLLENBQUNNLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLE9BQU87eUNBQ3RCLDhEQUFDQyxJQUFFO3dCQUFDTCxLQUFLLEVBQUMsaUZBQWtGOzs0QkFDekZJLE9BQU8sQ0FBQ0UsS0FBSzswQ0FDZCw4REFBQ0MsT0FBSztnQ0FDSkMsSUFBSSxFQUFDLFVBQVU7Z0NBQ2ZDLE9BQU8sRUFBRUwsT0FBTyxDQUFDTSxTQUFTOzs7OztzQ0FFMUI7Ozs7Ozs4QkFDQztpQkFDTixDQUFDOzs7OztxQkFDQzs7Ozs7O2FBQ0MsQ0FFTjtDQUNIO0FBbkJHZixLQUFBQSxLQUFLO0FBc0JYQSxLQUFLLENBQUNnQixlQUFlLEdBQUcsZ01BQWdCO1FBQzlCQyxHQUFHLEVBQ0hWLElBQUk7Ozs7O3VCQURRUix5REFBSyxDQUFFLDRDQUE0QyxDQUFDOztnQkFBaEVrQixHQUFHLFlBQTZEOzt1QkFDbkRBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFOztnQkFBdkJYLElBQUksWUFBbUI7Z0JBQzdCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDOzZDQUNWO29CQUNKQSxJQUFJLEVBQUNBLElBQUk7aUJBQ1g7Ozs7OztDQUNKO0FBR0QsK0RBQWVQLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCJcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC02XCIgPlRvIERvIExpc3Q8L3A+XG4gICAgICA8dWwgY2xhc3M9XCJwLTYgbXQtNiBtci0gbWwtMTAgdy03MCB0ZXh0LW0gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAge3Byb3BzLmRhdGEubWFwKChlbGVtZW50KSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLXQtbGcgZGFyazpib3JkZXItZ3JheS02MDBcIj5cbiAgICAgICAgICAgIHtlbGVtZW50LnRpdGxlfVxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtlbGVtZW50LmNvbXBsZXRlZH0gICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgKTtcbiAgfTtcbiBcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBGZXRjaCAoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIilcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgICBkYXRhOmRhdGFcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkZldGNoIiwiSW5kZXgiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJjbGFzcyIsInVsIiwiZGF0YSIsIm1hcCIsImVsZW1lbnQiLCJsaSIsInRpdGxlIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsImNvbXBsZXRlZCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});