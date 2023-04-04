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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Home = ({ session , admin  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(()=>{\n        // if( admin){\n        //   router.push('/admin/admin')\n        // }\n        // if(!admin){\n        //   router.push('/users/card');\n        // }\n        if (!session) {\n            router.push(\"/update\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Business Card App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nconst getServerSideProps = async (context)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            props: {\n                session: null\n            }\n        };\n    }\n    const admin = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.admin.findUnique({\n        where: {\n            email: session.user?.email || undefined\n        },\n        select: {\n            email: true\n        }\n    });\n    console.log(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.profile);\n    return {\n        props: {\n            session,\n            admin\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ21EO0FBQ3pDO0FBRUE7QUFDYjtBQU0xQixNQUFNSyxJQUFJLEdBQWEsQ0FBQyxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBTyxHQUFLO0lBRWxELE1BQU1DLE1BQU0sR0FBT0wsc0RBQVMsRUFBRTtJQUM5QixNQUFNLENBQUNNLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUNOLHFEQUFjLENBQUMsS0FBSyxDQUFDO0lBQzNDQSxzREFBZSxDQUFDLElBQUk7UUFDbEIsY0FBYztRQUNkLGdDQUFnQztRQUNoQyxJQUFJO1FBQ0osY0FBYztRQUNkLGdDQUFnQztRQUNoQyxJQUFJO1FBQ0osSUFBRyxDQUFDRSxPQUFPLEVBQUM7WUFDVkUsTUFBTSxDQUFDSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7S0FDRixFQUFDLEVBQUUsQ0FBQztJQUlMLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDZCxrREFBSTs7OEJBQ0gsOERBQUNlLE9BQUs7OEJBQUMsbUJBQWlCOzs7Ozs2QkFBUTs4QkFDaEMsOERBQUNDLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxNQUFNO29CQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7Ozs7O2lCQUVILENBQ047Q0FDSDtBQUVELGlFQUFlYixJQUFJLEVBQUM7QUFFYixNQUFNYyxrQkFBa0IsR0FBRyxPQUFPQyxPQUFxQyxHQUFLO0lBQ2pGLE1BQU1kLE9BQU8sR0FBRyxNQUFNTCwyREFBVSxDQUFDbUIsT0FBTyxDQUFDO0lBRXpDLElBQUksQ0FBQ2QsT0FBTyxFQUFFO1FBQ1osT0FBTztZQUNMZSxLQUFLLEVBQUU7Z0JBQUVmLE9BQU8sRUFBRSxJQUFJO2FBQUU7U0FDekIsQ0FBQztLQUNIO0lBQ0QsTUFBTUMsS0FBSyxHQUFHLE1BQU1MLGdFQUF1QixDQUFDO1FBQzFDcUIsS0FBSyxFQUFFO1lBQUVDLEtBQUssRUFBRWxCLE9BQU8sQ0FBQ21CLElBQUksRUFBRUQsS0FBSyxJQUFJRSxTQUFTO1NBQUU7UUFDbERDLE1BQU0sRUFBRTtZQUNOSCxLQUFLLEVBQUMsSUFBSTtTQUNYO0tBQ0YsQ0FBQztJQUNGSSxPQUFPLENBQUNDLEdBQUcsQ0FBQzNCLHVEQUFjLENBQUMsQ0FBQztJQUM1QixPQUFPO1FBQ0xtQixLQUFLLEVBQUU7WUFBQ2YsT0FBTztZQUFFQyxLQUFLO1NBQUU7S0FDekIsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXNpbmVzcy1jYXJkcy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24sIEdldFNlc3Npb25QYXJhbXMsIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IEZyZWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnJlZS9GcmVlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnO1xyXG5pbXBvcnQge2NoYW5nZUV4Y2VsfSBmcm9tIFwiLi4vdXRpbHMvY2hhbmdlRXhjZWxcIlxyXG5pbXBvcnQge3VwZGF0ZVByb2ZpbGV9IGZyb20gXCIuLi9hcGkvcHJvZmlsZS9hcGlQcm9maWxlXCJcclxuaW1wb3J0IHsgSW5wdXQsIElucHV0TGFiZWwsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoeyBzZXNzaW9uLCBhZG1pbiB9OiBhbnkpID0+IHtcclxuICBcclxuICBjb25zdCByb3V0ZXI6YW55ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dPVJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIC8vIGlmKCBhZG1pbil7XHJcbiAgICAvLyAgIHJvdXRlci5wdXNoKCcvYWRtaW4vYWRtaW4nKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYoIWFkbWluKXtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy91c2Vycy9jYXJkJyk7XHJcbiAgICAvLyB9XHJcbiAgICBpZighc2Vzc2lvbil7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvdXBkYXRlJyk7XHJcbiAgICB9XHJcbiAgfSxbXSkgIFxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QnVzaW5lc3MgQ2FyZCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBHZXRTZXNzaW9uUGFyYW1zIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgc2Vzc2lvbjogbnVsbCB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgYWRtaW4gPSBhd2FpdCBwcmlzbWEuYWRtaW4uZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyPy5lbWFpbCB8fCB1bmRlZmluZWQgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBlbWFpbDp0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhwcmlzbWEucHJvZmlsZSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7c2Vzc2lvbiwgYWRtaW4gfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsImdldFNlc3Npb24iLCJwcmlzbWEiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkhvbWUiLCJzZXNzaW9uIiwiYWRtaW4iLCJyb3V0ZXIiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHVzaCIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInVzZXIiLCJ1bmRlZmluZWQiLCJzZWxlY3QiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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