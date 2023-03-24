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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Home = ({ profile , session , admin  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(()=>{\n        if (session && admin) {\n            router.push(\"/admin/admin\");\n        }\n        if (session && !admin) {\n            router.push(\"/users/card\");\n        }\n        if (!session) {\n            router.push(\"/free/free\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Business Card App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\The\\\\OneDrive\\\\M\\xe1y t\\xednh\\\\New folder\\\\bcard-saas\\\\pages\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nconst getServerSideProps = async (context)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            props: {\n                session: null\n            }\n        };\n    }\n    const admin = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.admin.findUnique({\n        where: {\n            email: session.user?.email || undefined\n        },\n        select: {\n            email: true\n        }\n    });\n    const profile = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.profile.findUnique({\n        where: {\n            email: session.user?.email || undefined\n        },\n        select: {\n            id: true,\n            name: true,\n            email: true,\n            web: true,\n            address: true,\n            logo: true,\n            slogan: true,\n            phone: true,\n            slug: true,\n            company: true,\n            position: true,\n            action: true,\n            img: true\n        }\n    });\n    console.log(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.profile);\n    return {\n        props: {\n            profile,\n            session,\n            admin\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ21EO0FBQ3pDO0FBRUE7QUFDYjtBQUUxQixNQUFNSyxJQUFJLEdBQWEsQ0FBQyxFQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRUMsS0FBSyxHQUFPLEdBQUs7SUFFM0QsTUFBTUMsTUFBTSxHQUFPTixzREFBUyxFQUFFO0lBQzlCQyxzREFBZSxDQUFDLElBQUk7UUFDbEIsSUFBR0csT0FBTyxJQUFJQyxLQUFLLEVBQUM7WUFDbEJDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1QjtRQUNELElBQUdKLE9BQU8sSUFBSSxDQUFDQyxLQUFLLEVBQUM7WUFDbkJDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBRyxDQUFDSixPQUFPLEVBQUU7WUFDWEUsTUFBTSxDQUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0I7S0FDRixFQUFDLEVBQUUsQ0FBQztJQUdMLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDWixrREFBSTs7OEJBQ0gsOERBQUNhLE9BQUs7OEJBQUMsbUJBQWlCOzs7Ozs2QkFBUTs4QkFDaEMsOERBQUNDLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxNQUFNO29CQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7Ozs7O2lCQUNILENBQ047Q0FDSDtBQUVELGlFQUFlWCxJQUFJLEVBQUM7QUFFYixNQUFNWSxrQkFBa0IsR0FBRyxPQUFPQyxPQUFxQyxHQUFLO0lBQ2pGLE1BQU1YLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDaUIsT0FBTyxDQUFDO0lBRXpDLElBQUksQ0FBQ1gsT0FBTyxFQUFFO1FBQ1osT0FBTztZQUNMWSxLQUFLLEVBQUU7Z0JBQUVaLE9BQU8sRUFBRSxJQUFJO2FBQUU7U0FDekIsQ0FBQztLQUNIO0lBQ0QsTUFBTUMsS0FBSyxHQUFHLE1BQU1OLGdFQUF1QixDQUFDO1FBQzFDbUIsS0FBSyxFQUFFO1lBQUVDLEtBQUssRUFBRWYsT0FBTyxDQUFDZ0IsSUFBSSxFQUFFRCxLQUFLLElBQUlFLFNBQVM7U0FBRTtRQUNsREMsTUFBTSxFQUFFO1lBQ05ILEtBQUssRUFBQyxJQUFJO1NBQ1g7S0FDRixDQUFDO0lBQ0YsTUFBTWhCLE9BQU8sR0FBRyxNQUFNSixrRUFBeUIsQ0FBQztRQUM5Q21CLEtBQUssRUFBRTtZQUFFQyxLQUFLLEVBQUVmLE9BQU8sQ0FBQ2dCLElBQUksRUFBRUQsS0FBSyxJQUFJRSxTQUFTO1NBQUU7UUFDbERDLE1BQU0sRUFBRTtZQUNOQyxFQUFFLEVBQUUsSUFBSTtZQUNSQyxJQUFJLEVBQUUsSUFBSTtZQUNWTCxLQUFLLEVBQUUsSUFBSTtZQUNYTSxHQUFHLEVBQUUsSUFBSTtZQUNUQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxJQUFJLEVBQUUsSUFBSTtZQUNWQyxNQUFNLEVBQUUsSUFBSTtZQUNaQyxLQUFLLEVBQUUsSUFBSTtZQUNYQyxJQUFJLEVBQUUsSUFBSTtZQUNWQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxRQUFRLEVBQUUsSUFBSTtZQUNkQyxNQUFNLEVBQUUsSUFBSTtZQUNaQyxHQUFHLEVBQUUsSUFBSTtTQUNWO0tBQ0YsQ0FBQztJQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3JDLHVEQUFjLENBQUMsQ0FBQztJQUM1QixPQUFPO1FBQ0xpQixLQUFLLEVBQUU7WUFBRWIsT0FBTztZQUFFQyxPQUFPO1lBQUVDLEtBQUs7U0FBRTtLQUNuQyxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1c2luZXNzLWNhcmRzLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgR2V0U2Vzc2lvblBhcmFtcywgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgRnJlZSBmcm9tIFwiLi4vY29tcG9uZW50cy9mcmVlL0ZyZWVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHsgcHJvZmlsZSwgc2Vzc2lvbiwgYWRtaW4gfTogYW55KSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyOmFueSA9IHVzZVJvdXRlcigpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoc2Vzc2lvbiAmJiBhZG1pbil7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vYWRtaW4nKVxyXG4gICAgfVxyXG4gICAgaWYoc2Vzc2lvbiAmJiAhYWRtaW4pe1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3VzZXJzL2NhcmQnKTtcclxuICAgIH1cclxuICAgIGlmKCFzZXNzaW9uICl7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZnJlZS9mcmVlJyk7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QnVzaW5lc3MgQ2FyZCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IEdldFNlc3Npb25QYXJhbXMgfCB1bmRlZmluZWQpID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBzZXNzaW9uOiBudWxsIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBhZG1pbiA9IGF3YWl0IHByaXNtYS5hZG1pbi5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXI/LmVtYWlsIHx8IHVuZGVmaW5lZCB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGVtYWlsOnRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBwcmlzbWEucHJvZmlsZS5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXI/LmVtYWlsIHx8IHVuZGVmaW5lZCB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgd2ViOiB0cnVlLFxyXG4gICAgICBhZGRyZXNzOiB0cnVlLFxyXG4gICAgICBsb2dvOiB0cnVlLFxyXG4gICAgICBzbG9nYW46IHRydWUsXHJcbiAgICAgIHBob25lOiB0cnVlLFxyXG4gICAgICBzbHVnOiB0cnVlLFxyXG4gICAgICBjb21wYW55OiB0cnVlLFxyXG4gICAgICBwb3NpdGlvbjogdHJ1ZSxcclxuICAgICAgYWN0aW9uOiB0cnVlLFxyXG4gICAgICBpbWc6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKHByaXNtYS5wcm9maWxlKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvZmlsZSwgc2Vzc2lvbiwgYWRtaW4gfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsImdldFNlc3Npb24iLCJwcmlzbWEiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkhvbWUiLCJwcm9maWxlIiwic2Vzc2lvbiIsImFkbWluIiwicm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInVzZXIiLCJ1bmRlZmluZWQiLCJzZWxlY3QiLCJpZCIsIm5hbWUiLCJ3ZWIiLCJhZGRyZXNzIiwibG9nbyIsInNsb2dhbiIsInBob25lIiwic2x1ZyIsImNvbXBhbnkiLCJwb3NpdGlvbiIsImFjdGlvbiIsImltZyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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