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
exports.id = "pages/api/createprofile";
exports.ids = ["pages/api/createprofile"];
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

/***/ "(api)/./lib/slugify.ts":
/*!************************!*\
  !*** ./lib/slugify.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slugify\": () => (/* binding */ slugify)\n/* harmony export */ });\n/**\r\n * Turns a multi-word string into a slug.\r\n * @param text Input string to convert into a valid slug.\r\n * @returns { string } The output string as a slug.\r\n */ const slugify = (text)=>{\n    return text.toString() // Called just to prevent any casting error.\n    .normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") // Remove accents.\n    .toLowerCase() // Ensure that the whole string is all lowercase letters.\n    .replace(/\\s+/g, \"-\") // Replace all spaces with hyphens.\n    .replace(/[^\\w-]+/g, \"-\") // Remove all non-letter characters.\n    .replace(/^-+/, \"\") // trim the beginning of the string.\n    .replace(/-+$/, \"\"); // trim the end of the string as well...\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2x1Z2lmeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFNRSxPQUFPQyxJQUFJLENBQ1JDLFFBQVEsRUFBRSxDQUFDO0tBQ1hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDaEJDLE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDQyxXQUFXLEVBQUUsQ0FBQztJQUNkRCxDQUFPLFNBQVMsR0FBRyxDQUFDLENBQUM7S0FDckJBLE9BQU8sYUFBYSxHQUFHLENBQUMsQ0FBQyxvQ0FBb0M7S0FDN0RBLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQyxvQ0FBb0M7S0FDdkRBLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztDQUNoRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVzaW5lc3MtY2FyZHMvLi9saWIvc2x1Z2lmeS50cz81NDk2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUdXJucyBhIG11bHRpLXdvcmQgc3RyaW5nIGludG8gYSBzbHVnLlxyXG4gKiBAcGFyYW0gdGV4dCBJbnB1dCBzdHJpbmcgdG8gY29udmVydCBpbnRvIGEgdmFsaWQgc2x1Zy5cclxuICogQHJldHVybnMgeyBzdHJpbmcgfSBUaGUgb3V0cHV0IHN0cmluZyBhcyBhIHNsdWcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2x1Z2lmeSA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9TdHJpbmcoKSAvLyBDYWxsZWQganVzdCB0byBwcmV2ZW50IGFueSBjYXN0aW5nIGVycm9yLlxyXG4gICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxyXG4gICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpIC8vIFJlbW92ZSBhY2NlbnRzLlxyXG4gICAgLnRvTG93ZXJDYXNlKCkgLy8gRW5zdXJlIHRoYXQgdGhlIHdob2xlIHN0cmluZyBpcyBhbGwgbG93ZXJjYXNlIGxldHRlcnMuXHJcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBhbGwgc3BhY2VzIHdpdGggaHlwaGVucy5cclxuICAgIC5yZXBsYWNlKC9bXlxcdy1dKy9nLCBcIi1cIikgLy8gUmVtb3ZlIGFsbCBub24tbGV0dGVyIGNoYXJhY3RlcnMuXHJcbiAgICAucmVwbGFjZSgvXi0rLywgXCJcIikgLy8gdHJpbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAucmVwbGFjZSgvLSskLywgXCJcIik7IC8vIHRyaW0gdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGFzIHdlbGwuLi5cclxufTtcclxuIl0sIm5hbWVzIjpbInNsdWdpZnkiLCJ0ZXh0IiwidG9TdHJpbmciLCJub3JtYWxpemUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/slugify.ts\n");

/***/ }),

/***/ "(api)/./pages/api/createprofile.ts":
/*!************************************!*\
  !*** ./pages/api/createprofile.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _lib_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/slugify */ \"(api)/./lib/slugify.ts\");\n\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (session) {\n        if (req.method === \"POST\") {\n            const { name , email , bio , phone , twitter , instagram , facebook  } = req.body;\n            const slug = (0,_lib_slugify__WEBPACK_IMPORTED_MODULE_2__.slugify)(email);\n            try {\n                await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.profile.create({\n                    data: {\n                        name,\n                        email: session.user?.email || email,\n                        bio,\n                        slug,\n                        phone,\n                        twitter,\n                        instagram,\n                        facebook,\n                        user: {\n                            connect: {\n                                email: session.user?.email || email\n                            }\n                        }\n                    }\n                });\n                res.status(201).json({\n                    message: \"Profile created.\"\n                });\n            } catch (error) {\n                console.log(error);\n                res.status(500).json({\n                    error: error,\n                    errorMessage: \"An error occurred while creating your profile.\"\n                });\n            }\n        } else {\n            res.status(405).end({\n                errorMessage: \"Request method not allowed.\"\n            });\n        }\n    } else {\n        res.status(401).json({\n            errorMessage: \"Access Denied.\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlcHJvZmlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2QztBQUVIO0FBQ0U7QUFFN0IsZUFBZUcsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1FBQUVJLEdBQUc7S0FBRSxDQUFDO0lBQ3pDLElBQUlFLE9BQU8sRUFBRTtRQUNYLElBQUlGLEdBQUcsQ0FBQ0csTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUN6QixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxHQUFHLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUVDLFFBQVEsR0FBRSxHQUFHVixHQUFHLENBQUNXLElBQUk7WUFDMUUsTUFBTUMsSUFBSSxHQUFHZCxxREFBTyxDQUFDTyxLQUFLLENBQUM7WUFFM0IsSUFBSTtnQkFDRixNQUFNUiw4REFBcUIsQ0FBQztvQkFDMUJrQixJQUFJLEVBQUU7d0JBQ0pYLElBQUk7d0JBQ0pDLEtBQUssRUFBRUgsT0FBTyxDQUFDYyxJQUFJLEVBQUVYLEtBQUssSUFBSUEsS0FBSzt3QkFDbkNDLEdBQUc7d0JBQ0hNLElBQUk7d0JBQ0pMLEtBQUs7d0JBQ0xDLE9BQU87d0JBQ1BDLFNBQVM7d0JBQ1RDLFFBQVE7d0JBQ1JNLElBQUksRUFBRTs0QkFBRUMsT0FBTyxFQUFFO2dDQUFFWixLQUFLLEVBQUVILE9BQU8sQ0FBQ2MsSUFBSSxFQUFFWCxLQUFLLElBQUlBLEtBQUs7NkJBQUU7eUJBQUU7cUJBQzNEO2lCQUNGLENBQUMsQ0FBQztnQkFDSEosR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxrQkFBa0I7aUJBQUUsQ0FBQyxDQUFDO2FBQ3ZELENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7Z0JBQ25CcEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQ25CRSxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pHLFlBQVksRUFBRSxnREFBZ0Q7aUJBQy9ELENBQUMsQ0FBQzthQUNKO1NBQ0YsTUFBTTtZQUNMdkIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTyxHQUFHLENBQUM7Z0JBQUVELFlBQVksRUFBRSw2QkFBNkI7YUFBRSxDQUFDLENBQUM7U0FDdEU7S0FDRixNQUFNO1FBQ0x2QixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFSyxZQUFZLEVBQUUsZ0JBQWdCO1NBQUUsQ0FBQyxDQUFDO0tBQzFEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXNpbmVzcy1jYXJkcy8uL3BhZ2VzL2FwaS9jcmVhdGVwcm9maWxlLnRzPzQ1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSBcIi4uLy4uL2xpYi9zbHVnaWZ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcbiAgaWYgKHNlc3Npb24pIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBiaW8sIHBob25lLCB0d2l0dGVyLCBpbnN0YWdyYW0sIGZhY2Vib29rIH0gPSByZXEuYm9keTtcclxuICAgICAgY29uc3Qgc2x1ZyA9IHNsdWdpZnkoZW1haWwpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEucHJvZmlsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyPy5lbWFpbCB8fCBlbWFpbCxcclxuICAgICAgICAgICAgYmlvLFxyXG4gICAgICAgICAgICBzbHVnLFxyXG4gICAgICAgICAgICBwaG9uZSxcclxuICAgICAgICAgICAgdHdpdHRlcixcclxuICAgICAgICAgICAgaW5zdGFncmFtLFxyXG4gICAgICAgICAgICBmYWNlYm9vayxcclxuICAgICAgICAgICAgdXNlcjogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uLnVzZXI/LmVtYWlsIHx8IGVtYWlsIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIlByb2ZpbGUgY3JlYXRlZC5cIiB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHlvdXIgcHJvZmlsZS5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCh7IGVycm9yTWVzc2FnZTogXCJSZXF1ZXN0IG1ldGhvZCBub3QgYWxsb3dlZC5cIiB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvck1lc3NhZ2U6IFwiQWNjZXNzIERlbmllZC5cIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJwcmlzbWEiLCJzbHVnaWZ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJiaW8iLCJwaG9uZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsImJvZHkiLCJzbHVnIiwicHJvZmlsZSIsImNyZWF0ZSIsImRhdGEiLCJ1c2VyIiwiY29ubmVjdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JNZXNzYWdlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createprofile.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createprofile.ts"));
module.exports = __webpack_exports__;

})();