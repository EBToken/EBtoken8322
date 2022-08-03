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

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Clock(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), days = ref[0], setDays = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), hours = ref1[0], setHours = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), minutes = ref2[0], setMinutes = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), seconds = ref3[0], setSeconds = ref3[1];\n    var getTimeUntil = function(deadline) {\n        var time = Date.parse(deadline) - Date.parse(new Date());\n        setSeconds(Math.floor(time / 1000 % 60));\n        setMinutes(Math.floor(time / 1000 / 60 % 60));\n        setHours(Math.floor(time / (1000 * 60 * 60) % 24));\n        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getTimeUntil(props.deadline);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setInterval(function() {\n            return getTimeUntil(props.deadline);\n        }, 1000);\n    }, [\n        props.deadline\n    ]);\n    var leading0 = function(num) {\n        return num < 10 ? \"0\" + num : num;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"row timer mb-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"col-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: leading0(days)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 34,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Days\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 35,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                lineNumber: 33,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"col-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: leading0(hours)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 38,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Hours\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 39,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"col-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: leading0(minutes)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 42,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Minutes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 43,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                lineNumber: 41,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"col-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: leading0(seconds)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Seconds\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                        lineNumber: 47,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pc/Documents/ebtoken/components/Clock.js\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, this);\n}\n_s(Clock, \"KShmDGlD1hfE7Uop4EOWHu4UL2A=\");\n_c = Clock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\nvar _c;\n$RefreshReg$(_c, \"Clock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osT0FBTyxDQUFDOzs7Ozs0QkFBTTtrQ0FDNUIsOERBQUNpQixHQUFDO2tDQUFDLFNBQU87Ozs7OzRCQUFJOzs7Ozs7b0JBQ1Y7MEJBQ04sOERBQUNILEtBQUc7Z0JBQUNDLEtBQUssRUFBQyxPQUFPOztrQ0FDZiw4REFBQ0MsSUFBRTtrQ0FBRUosUUFBUSxDQUFDVixPQUFPLENBQUM7Ozs7OzRCQUFNO2tDQUM3Qiw4REFBQ2UsR0FBQztrQ0FBQyxTQUFPOzs7Ozs0QkFBSTs7Ozs7O29CQUNWOzs7Ozs7WUFDRixDQUNWO0NBQ0Y7R0EvQ1F2QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFpRGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay5qcz81Y2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZSBmcm9tICcuL0Nsb2NrLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIENsb2NrKHByb3BzKSB7XG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBnZXRUaW1lVW50aWwgPSAoZGVhZGxpbmUpID0+IHtcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5wYXJzZShkZWFkbGluZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICAgIHNldFNlY29uZHMoTWF0aC5mbG9vcigodGltZS8xMDAwKSAlIDYwKSk7XG4gICAgc2V0TWludXRlcyhNYXRoLmZsb29yKCh0aW1lLzEwMDAvNjApICUgNjApKTtcbiAgICBzZXRIb3VycyhNYXRoLmZsb29yKCh0aW1lLygxMDAwKjYwKjYwKSUgMjQpKSk7XG4gICAgc2V0RGF5cyhNYXRoLmZsb29yKCh0aW1lLygxMDAwKjYwKjYwKjI0KSkpKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VGltZVVudGlsKHByb3BzLmRlYWRsaW5lKTtcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEludGVydmFsKCgpID0+IGdldFRpbWVVbnRpbChwcm9wcy5kZWFkbGluZSksIDEwMDApXG4gIH0sIFtwcm9wcy5kZWFkbGluZV0pXG5cbiAgY29uc3QgbGVhZGluZzAgPSAobnVtKSA9PiB7XG4gICAgcmV0dXJuIG51bSA8IDEwID8gJzAnICsgbnVtIDogbnVtXG4gIH1cblxucmV0dXJuIChcbiAgICBcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGltZXIgIG1iLTNcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICA8aDM+e2xlYWRpbmcwKGRheXMpfTwvaDM+XG4gICAgICAgICAgIDxwPkRheXM8L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICA8aDM+e2xlYWRpbmcwKGhvdXJzKX08L2gzPlxuICAgICAgICAgICA8cD5Ib3VyczwvcD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgIDxoMz57bGVhZGluZzAobWludXRlcyl9PC9oMz5cbiAgICAgICAgICAgPHA+TWludXRlczwvcD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICA8aDM+e2xlYWRpbmcwKHNlY29uZHMpfTwvaDM+XG4gICAgICAgICAgIDxwPlNlY29uZHM8L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9jayJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiQ2xvY2siLCJwcm9wcyIsImRheXMiLCJzZXREYXlzIiwiaG91cnMiLCJzZXRIb3VycyIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJnZXRUaW1lVW50aWwiLCJkZWFkbGluZSIsInRpbWUiLCJEYXRlIiwicGFyc2UiLCJNYXRoIiwiZmxvb3IiLCJzZXRJbnRlcnZhbCIsImxlYWRpbmcwIiwibnVtIiwiZGl2IiwiY2xhc3MiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clock.js\n"));

/***/ })

});