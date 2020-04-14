(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "64Yt":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8ypT":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "LbRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wbzz");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("64Yt");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_2__);
var Header=function Header(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header",{className:"header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"header-name"},"Scott Sandman"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"header-list"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"header-list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.linkedin.com/in/scott-sandman/"},"LinkedIn")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"header-list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/ScottSandman"},"Github")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"header-list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"mailto:scottesandman@gmail.com?Subject="},"Contact")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/"})));};/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "b4ge":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Template; });
__webpack_require__.d(__webpack_exports__, "postQuery", function() { return /* binding */ postQuery; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__("LbRr");

// EXTERNAL MODULE: ./src/components/layout.css
var layout = __webpack_require__("8ypT");

// CONCATENATED MODULE: ./src/components/Layout.js
var Layout_Layout=function Layout(_ref){var children=_ref.children;return/*#__PURE__*/react_default.a.createElement("div",{className:"layout"},/*#__PURE__*/react_default.a.createElement(header["a" /* default */],null),/*#__PURE__*/react_default.a.createElement("main",{className:"main"},children));};/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: ./src/templates/blogTemplate.css
var blogTemplate = __webpack_require__("h4Ch");

// CONCATENATED MODULE: ./src/templates/blogTemplate.js
function Template(_ref){var data=_ref.data;var post=data.markdownRemark;var _post$frontmatter=post.frontmatter,title=_post$frontmatter.title,author=_post$frontmatter.author,date=_post$frontmatter.date;return/*#__PURE__*/react_default.a.createElement(components_Layout,null,/*#__PURE__*/react_default.a.createElement("div",{className:"blogTemplate"},/*#__PURE__*/react_default.a.createElement(gatsby_browser_entry["Link"],{to:"/"},"Back to Blogs"),/*#__PURE__*/react_default.a.createElement("h1",{className:"blogTemplate-title"},title),/*#__PURE__*/react_default.a.createElement("p",{className:"blogTemplate-posted-by"},"Posted by ",author," on ",date),/*#__PURE__*/react_default.a.createElement("div",{dangerouslySetInnerHTML:{__html:post.html}})));}var postQuery="3408390739";

/***/ }),

/***/ "h4Ch":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-templates-blog-template-js-d0080f591143e0d4c5f7.js.map