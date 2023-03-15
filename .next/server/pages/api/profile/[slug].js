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
exports.id = "pages/api/profile/[slug]";
exports.ids = ["pages/api/profile/[slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQVF2QyxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJLElBQUlELHdEQUFZLENBQUM7SUFBRUcsR0FBRyxFQUFFO1FBQUMsT0FBTztLQUFDO0NBQUUsQ0FBQyxDQUFDO0FBRTVFLElBQUlDLElBQXFDLEVBQUVGLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXNpbmVzcy1jYXJkcy8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAvLyBhbGxvdyBnbG9iYWwgYHZhcmAgZGVjbGFyYXRpb25zXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCh7IGxvZzogW1wicXVlcnlcIl0gfSk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/profile/[slug].ts":
/*!*************************************!*\
  !*** ./pages/api/profile/[slug].ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (session) {\n        if (req.method === \"PUT\") {\n            try {\n                await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.profile.update({\n                    where: {\n                        slug: req.query.slug.toString()\n                    },\n                    data: req.body\n                });\n                res.status(200).json({\n                    message: \"Profile updated successfully.\"\n                });\n            } catch (error) {\n                res.status(500).json({\n                    error: error,\n                    errorMessage: \"An error occurred while creating your profile.\"\n                });\n            }\n        }\n    } else {\n        res.status(401).json({\n            errorMessage: \"Access Denied.\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9bc2x1Z10udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUVBO0FBRTdDLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUNoRSxNQUFNQyxPQUFPLEdBQUcsTUFBTUwsMkRBQVUsQ0FBQztRQUFFRyxHQUFHO0tBQUUsQ0FBQztJQUV6QyxJQUFJRSxPQUFPLEVBQUU7UUFDWCxJQUFJRixHQUFHLENBQUNHLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSTtnQkFDRixNQUFNTCw4REFBcUIsQ0FBQztvQkFDMUJRLEtBQUssRUFBRTt3QkFBRUMsSUFBSSxFQUFFUCxHQUFHLENBQUNRLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxRQUFRLEVBQUU7cUJBQUU7b0JBQzFDQyxJQUFJLEVBQUVWLEdBQUcsQ0FBQ1csSUFBSTtpQkFDZixDQUFDLENBQUM7Z0JBQ0hWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSwrQkFBK0I7aUJBQUUsQ0FBQyxDQUFDO2FBQ3BFLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNkZCxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUNuQkUsS0FBSyxFQUFFQSxLQUFLO29CQUNaQyxZQUFZLEVBQUUsZ0RBQWdEO2lCQUMvRCxDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0YsTUFBTTtRQUNMZixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVHLFlBQVksRUFBRSxnQkFBZ0I7U0FBRSxDQUFDLENBQUM7S0FDMUQ7Q0FDRjtBQUVELGlFQUFlakIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVzaW5lc3MtY2FyZHMvLi9wYWdlcy9hcGkvcHJvZmlsZS9bc2x1Z10udHM/ZjY3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcblxyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS5wcm9maWxlLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBzbHVnOiByZXEucXVlcnkuc2x1Zy50b1N0cmluZygpIH0sXHJcbiAgICAgICAgICBkYXRhOiByZXEuYm9keSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIiB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY3JlYXRpbmcgeW91ciBwcm9maWxlLlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3JNZXNzYWdlOiBcIkFjY2VzcyBEZW5pZWQuXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwibWV0aG9kIiwicHJvZmlsZSIsInVwZGF0ZSIsIndoZXJlIiwic2x1ZyIsInF1ZXJ5IiwidG9TdHJpbmciLCJkYXRhIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/[slug].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/[slug].ts"));
module.exports = __webpack_exports__;

})();