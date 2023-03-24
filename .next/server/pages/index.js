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

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU92QyxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJLElBQUlELHdEQUFZLENBQUM7SUFBRUcsR0FBRyxFQUFFO1FBQUMsT0FBTztLQUFDO0NBQUUsQ0FBQyxDQUFDO0FBRTVFLElBQUlDLElBQXFDLEVBQUVGLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXNpbmVzcy1jYXJkcy8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGFsbG93IGdsb2JhbCBgdmFyYCBkZWNsYXJhdGlvbnNcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXHJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Home = ({ session , admin  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(()=>{\n        if (admin) {\n            router.push(\"/admin/admin\");\n        }\n        if (!admin) {\n            router.push(\"/users/card\");\n        }\n    // if(!session ){\n    //   router.push('/free/free');\n    // }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Business Card App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dat\\\\Desktop\\\\business-card-app\\\\pages\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dat\\\\Desktop\\\\business-card-app\\\\pages\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dat\\\\Desktop\\\\business-card-app\\\\pages\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dat\\\\Desktop\\\\business-card-app\\\\pages\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nconst getServerSideProps = async (context)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            props: {\n                session: null\n            }\n        };\n    }\n    const admin = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.admin.findUnique({\n        where: {\n            email: session.user?.email || undefined\n        },\n        select: {\n            email: true\n        }\n    });\n    console.log(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.profile);\n    return {\n        props: {\n            session,\n            admin\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ21EO0FBQ3pDO0FBRUE7QUFDYjtBQUUxQixNQUFNSyxJQUFJLEdBQWEsQ0FBQyxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBTyxHQUFLO0lBRWxELE1BQU1DLE1BQU0sR0FBT0wsc0RBQVMsRUFBRTtJQUM5QkMsc0RBQWUsQ0FBQyxJQUFJO1FBQ2xCLElBQUlHLEtBQUssRUFBQztZQUNSQyxNQUFNLENBQUNFLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUI7UUFDRCxJQUFHLENBQUNILEtBQUssRUFBQztZQUNSQyxNQUFNLENBQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QjtJQUNELGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsSUFBSTtLQUNMLEVBQUMsRUFBRSxDQUFDO0lBR0wscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNYLGtEQUFJOzs4QkFDSCw4REFBQ1ksT0FBSzs4QkFBQyxtQkFBaUI7Ozs7OzZCQUFROzhCQUNoQyw4REFBQ0MsTUFBSTtvQkFBQ0MsR0FBRyxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsQzs7Ozs7aUJBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVWLElBQUksRUFBQztBQUViLE1BQU1XLGtCQUFrQixHQUFHLE9BQU9DLE9BQXFDLEdBQUs7SUFDakYsTUFBTVgsT0FBTyxHQUFHLE1BQU1MLDJEQUFVLENBQUNnQixPQUFPLENBQUM7SUFFekMsSUFBSSxDQUFDWCxPQUFPLEVBQUU7UUFDWixPQUFPO1lBQ0xZLEtBQUssRUFBRTtnQkFBRVosT0FBTyxFQUFFLElBQUk7YUFBRTtTQUN6QixDQUFDO0tBQ0g7SUFDRCxNQUFNQyxLQUFLLEdBQUcsTUFBTUwsZ0VBQXVCLENBQUM7UUFDMUNrQixLQUFLLEVBQUU7WUFBRUMsS0FBSyxFQUFFZixPQUFPLENBQUNnQixJQUFJLEVBQUVELEtBQUssSUFBSUUsU0FBUztTQUFFO1FBQ2xEQyxNQUFNLEVBQUU7WUFDTkgsS0FBSyxFQUFDLElBQUk7U0FDWDtLQUNGLENBQUM7SUFDRkksT0FBTyxDQUFDQyxHQUFHLENBQUN4Qix1REFBYyxDQUFDLENBQUM7SUFDNUIsT0FBTztRQUNMZ0IsS0FBSyxFQUFFO1lBQUNaLE9BQU87WUFBRUMsS0FBSztTQUFFO0tBQ3pCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVzaW5lc3MtY2FyZHMvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBHZXRTZXNzaW9uUGFyYW1zLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi9saWIvcHJpc21hXCI7XHJcbmltcG9ydCBGcmVlIGZyb20gXCIuLi9jb21wb25lbnRzL2ZyZWUvRnJlZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoeyBzZXNzaW9uLCBhZG1pbiB9OiBhbnkpID0+IHtcclxuICBcclxuICBjb25zdCByb3V0ZXI6YW55ID0gdXNlUm91dGVyKCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZiggYWRtaW4pe1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2FkbWluL2FkbWluJylcclxuICAgIH1cclxuICAgIGlmKCFhZG1pbil7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvdXNlcnMvY2FyZCcpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYoIXNlc3Npb24gKXtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy9mcmVlL2ZyZWUnKTtcclxuICAgIC8vIH1cclxuICB9LFtdKVxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CdXNpbmVzcyBDYXJkIEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogR2V0U2Vzc2lvblBhcmFtcyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHNlc3Npb246IG51bGwgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGFkbWluID0gYXdhaXQgcHJpc21hLmFkbWluLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgfHwgdW5kZWZpbmVkIH0sXHJcbiAgICBzZWxlY3Q6IHtcclxuICAgICAgZW1haWw6dHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cocHJpc21hLnByb2ZpbGUpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3Nlc3Npb24sIGFkbWluIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJnZXRTZXNzaW9uIiwicHJpc21hIiwidXNlUm91dGVyIiwiUmVhY3QiLCJIb21lIiwic2Vzc2lvbiIsImFkbWluIiwicm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInVzZXIiLCJ1bmRlZmluZWQiLCJzZWxlY3QiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();