(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/me/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/me/index.jsx":
/*!****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/me/index.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Me; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/pages/me/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var taro_ui_dist_style_components_flex_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui/dist/style/components/flex.scss */ "./node_modules/taro-ui/dist/style/components/flex.scss");
/* harmony import */ var taro_ui_dist_style_components_flex_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_flex_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui_dist_style_components_countdown_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui/dist/style/components/countdown.scss */ "./node_modules/taro-ui/dist/style/components/countdown.scss");
/* harmony import */ var taro_ui_dist_style_components_countdown_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_countdown_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_investbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/investbar */ "./src/component/investbar/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




 //弹性样式

 //计数器样式






var price = function price() {
  return 123;
};

var goDetail = function goDetail() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
    url: '../../packageA/pages/investdetail/index'
  });
};

function Me() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "theme-body",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "basic-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          className: "basic-title",
          children: "\u6211\u7684\u53EF\u7528\u8D44\u4EA7"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtList */ "d"], {
            className: "list-head",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtList */ "d"], {
              className: "list-content",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtListItem */ "e"], {
                title: "\u6295\u8D44\u7C7B\u578B",
                extraText: "\u603B\u4EF7\u503C(RMB)"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtListItem */ "e"], {
              title: "\u6570\u5B57\u8D27\u5E01",
              extraText: price()
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtListItem */ "e"], {
              title: "\u80A1\u7968",
              extraText: "123"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtListItem */ "e"], {
              title: "\u57FA\u91D1",
              extraText: "\u91D1\u989D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtListItem */ "e"], {
              title: "\u6211\u7684\u96F6\u82B1\u94B1",
              extraText: "\u91D1\u989D"
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "timecount-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        children: "\u8DDD\u79BB\u4E0B\u6B21\u53D1\u96F6\u82B1\u94B1\u8FD8\u6709\uFF1A"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtCountdown */ "b"], {
        isCard: true,
        isShowDay: true,
        day: 30,
        hours: 0,
        minutes: 0,
        seconds: 0
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "charts-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: goDetail,
        children: "\u70B9\u6211\u67E5\u770B\u8BE6\u60C5"
      })
    })]
  });
}

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/countdown.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/countdown.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/me/index.jsx":
/*!********************************!*\
  !*** ./src/pages/me/index.jsx ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/me/index.jsx");


var config = {"navigationBarTitleText":"我的"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/me/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/me/style.css":
/*!********************************!*\
  !*** ./src/pages/me/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/me/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map