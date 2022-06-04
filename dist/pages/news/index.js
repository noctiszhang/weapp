(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/news/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/news/index.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/news/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var taro_ui_dist_style_components_card_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui/dist/style/components/card.scss */ "./node_modules/taro-ui/dist/style/components/card.scss");
/* harmony import */ var taro_ui_dist_style_components_card_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_card_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/pages/news/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui_dist_style_components_list_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui/dist/style/components/list.scss */ "./node_modules/taro-ui/dist/style/components/list.scss");
/* harmony import */ var taro_ui_dist_style_components_list_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_list_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function News() {
  var newsrange = ['全部资讯', 'A股', '数字货币', '美股'];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(newsrange[0]),
      _React$useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      news = _React$useState2[0],
      setNews = _React$useState2[1];

  var handleChange = function handleChange(e) {
    setNews(newsrange[e.detail.value]);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Picker"], {
      mode: "selector",
      range: newsrange,
      onChange: handleChange,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "picker",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtList */ "d"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtListItem */ "e"], {
            title: "\u9009\u62E9\u8D44\u8BAF\u7C7B\u578B",
            extraText: news
          })
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "news-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtCard */ "a"], {
        extra: "2022-04-11 12:11:12",
        title: "\u8FD9\u662F\u4E2A\u6807\u9898",
        children: "\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "news-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtCard */ "a"], {
        extra: "2022-04-11 12:11:12",
        title: "\u8FD9\u662F\u4E2A\u6807\u9898",
        children: "\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "news-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtCard */ "a"], {
        extra: "2022-04-11 12:11:12",
        title: "\u8FD9\u662F\u4E2A\u6807\u9898",
        children: "\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "news-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtCard */ "a"], {
        extra: "2022-04-11 12:11:12",
        title: "\u8FD9\u662F\u4E2A\u6807\u9898",
        children: "\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6\u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6 \u5185\u5BB9\u533A,\u5185\u5BB9\u6587\u672C\u83B7\u53D6"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "divider-style",
      children: "I am the Bottom"
    })]
  });
}

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/card.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/card.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/list.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/list.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/news/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/news/index.jsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/news/index.jsx");


var config = {"navigationBarTitleText":"资讯"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/news/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/news/style.css":
/*!**********************************!*\
  !*** ./src/pages/news/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/news/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map