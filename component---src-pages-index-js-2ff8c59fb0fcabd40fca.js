(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AllBlogsQuery", function() { return /* binding */ AllBlogsQuery; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__("LbRr");

// EXTERNAL MODULE: ./src/components/layout.css
var layout = __webpack_require__("8ypT");

// CONCATENATED MODULE: ./src/components/layout.js
var layout_Layout=function Layout(_ref){var children=_ref.children;return/*#__PURE__*/react_default.a.createElement("div",{className:"layout"},/*#__PURE__*/react_default.a.createElement(header["a" /* default */],null),/*#__PURE__*/react_default.a.createElement("main",{className:"main"},children));};/* harmony default export */ var components_layout = (layout_Layout);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./src/components/post.css
var components_post = __webpack_require__("Sjvq");

// CONCATENATED MODULE: ./src/components/Post.js
var Post_Post=function Post(_ref){var title=_ref.title,date=_ref.date,description=_ref.description,path=_ref.path;return/*#__PURE__*/react_default.a.createElement("div",{className:"post"},/*#__PURE__*/react_default.a.createElement(gatsby_browser_entry["Link"],{to:path,className:"post-title"},title),/*#__PURE__*/react_default.a.createElement("p",{className:"post-description"},description),/*#__PURE__*/react_default.a.createElement("p",{className:"post-written-by"},date));};/* harmony default export */ var components_Post = (Post_Post);
// CONCATENATED MODULE: ./src/pages/index.js
var pages_Home=function Home(_ref){var data=_ref.data;return/*#__PURE__*/react_default.a.createElement(components_layout,null,data.allMarkdownRemark.edges.map(function(post){var _post$node$frontmatte=post.node.frontmatter,title=_post$node$frontmatte.title,author=_post$node$frontmatte.author,date=_post$node$frontmatte.date,description=_post$node$frontmatte.description,path=_post$node$frontmatte.path;return/*#__PURE__*/react_default.a.createElement(components_Post,{title:title,author:author,date:date,description:description,key:date+"__"+title,path:path});}));};/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);var AllBlogsQuery="2417212606";

/***/ }),

/***/ "Sjvq":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-2ff8c59fb0fcabd40fca.js.map