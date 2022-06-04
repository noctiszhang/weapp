(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/home/index.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/home/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _component_swipercom_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/swipercom/index */ "./src/component/swipercom/index.jsx");
/* harmony import */ var _component_grid_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/grid/index */ "./src/component/grid/index.jsx");
/* harmony import */ var _component_showdata_showdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/showdata/showdata */ "./src/component/showdata/showdata.jsx");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var taro_ui_dist_style_components_divider_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui/dist/style/components/divider.scss */ "./node_modules/taro-ui/dist/style/components/divider.scss");
/* harmony import */ var taro_ui_dist_style_components_divider_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_divider_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/pages/home/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('0'),
      _React$useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      type = _React$useState2[0],
      setType = _React$useState2[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__["usePullDownRefresh"])(function () {
    console.log('onPullDownRefresh');
  });

  var getCurrentInvestType = function getCurrentInvestType(childtype) {
    setType(childtype);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "theme-body",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_swipercom_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "title-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "title-content",
        children: "\u5E02\u573A\u884C\u60C5\u9009\u62E9"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_grid_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        getCurrentInvestType: getCurrentInvestType
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "title-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "title-content",
        children: "\u5F53\u524D\u5E02\u573A\u884C\u60C5"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "form-container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: "at-row form-content",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
            className: "at-col at-col-4 ",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              className: "form-title-name",
              children: "\u6807\u7684\u540D\u79F0"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
            className: "at-col at-col-4 ",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              className: "form-title-name",
              children: "\u5F53\u524D\u4EF7\u683C"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
            className: "at-col at-col-4 ",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              className: "form-title-name",
              children: "\u4ECA\u65E5\u6DA8\u8DCC"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_showdata_showdata__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          children: type
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "divider-style",
      children: "I am the Bottom"
    })]
  });
}

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/divider.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/divider.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/grid.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/grid.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/component/alert/index.jsx":
/*!***************************************!*\
  !*** ./src/component/alert/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/component/alert/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Alert() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "alert-wrapper",
    children: "\u6682\u672A\u63A5\u5165API"
  });
}

/***/ }),

/***/ "./src/component/alert/style.css":
/*!***************************************!*\
  !*** ./src/component/alert/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/component/grid/index.jsx":
/*!**************************************!*\
  !*** ./src/component/grid/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mygrid; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var taro_ui_dist_style_components_grid_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui/dist/style/components/grid.scss */ "./node_modules/taro-ui/dist/style/components/grid.scss");
/* harmony import */ var taro_ui_dist_style_components_grid_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_grid_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Mygrid(_ref) {
  var getCurrentInvestType = _ref.getCurrentInvestType;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('0'),
      _React$useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var handleClick = function handleClick(e) {
    setIndex(e.index);
    getCurrentInvestType(e.index);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_2__[/* AtGrid */ "c"], {
    onClick: handleClick,
    mode: "rect",
    data: [{
      image: 'https://s1.chu0.com/src/img/png/06/065c00e0b4404ba285ba34d5515859c2.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:Jzue4F0SJh85zBcHdpx1xm8azfw=',
      value: 'A股',
      index: '0'
    }, {
      image: 'https://s1.chu0.com/src/img/png/44/44188d1a52da40379666a2bf0cb9613d.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:mrPLtUpZv0U7yjOkQI37wz_JjWE=',
      value: '基金',
      index: '1'
    }, {
      image: 'https://s1.chu0.com/src/img/png/e6/e60539ff89a647388ae5c5738016beb5.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:0ZMWD4K5iobiVi-Xy0Mh5D2tsyU=',
      value: '数字货币',
      index: '2'
    }, {
      image: 'https://s1.chu0.com/src/img/png/74/743db996f3f64dd0b0a2fadfc2bc9bf1.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:rZh-62RtNZ5ebBFp2SbZzjLeHMI=',
      value: '期货',
      index: '3'
    }, {
      image: 'https://s1.chu0.com/src/img/png/76/7620ae9b5e4f4c9095a36b698750085b.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:E5sHFp75kJPzOjxm1EuiLwV7fmQ=',
      value: '美股',
      index: '4'
    }, {
      image: 'https://s1.chu0.com/src/img/png/6e/6e83a251a8bd4932bd9cb2d789325ae5.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:fgTYL-qcCV7NW-ltpEkcQ8lIIhE=',
      value: '港股',
      index: '5'
    }]
  });
}

/***/ }),

/***/ "./src/component/showdata/showdata.jsx":
/*!*********************************************!*\
  !*** ./src/component/showdata/showdata.jsx ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Showdata; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/component/showdata/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert */ "./src/component/alert/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







var bitdata = [{
  id: 1,
  tickname: 'bitcoin',
  current: '58111.92',
  rate: '+10.26%'
}, {
  id: 2,
  tickname: 'eth',
  current: '4111.92',
  rate: '+10.26%'
}, {
  id: 3,
  tickname: 'xrp',
  current: '37.12',
  rate: '-4.26%'
}];
var stockdata = [{
  id: 1,
  stockname: '联络互动',
  current: '4.6',
  rate: '-1.2%'
}, {
  id: 2,
  stockname: '新希望',
  current: '18.2',
  rate: '+7.2%'
}, {
  id: 3,
  stockname: '贵州茅台',
  current: '1421.24',
  rate: '-5.6%'
}];
var bitdataArr = bitdata.map(function (item) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "at-row form-content",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "at-col at-col-4 ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "form-name",
        children: item.tickname
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "at-col at-col-4 ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "form-name",
        children: item.current
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "at-col at-col-4 ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "form-name",
        children: item.rate
      })
    })]
  });
});
var stockdataArr = stockdata.map(function (item) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "at-row form-content",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "at-col at-col-4 ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "form-name",
        children: item.stockname
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "at-col at-col-4 ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "form-name",
        children: item.current
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "at-col at-col-4 ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "form-name",
        children: item.rate
      })
    })]
  });
});
function Showdata(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(bitdata),
      _React$useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    children: [props.children == '2' && bitdataArr, props.children == '0' && stockdataArr, props.children != ('0' & '2') && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_alert__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
  });
}

/***/ }),

/***/ "./src/component/showdata/style.css":
/*!******************************************!*\
  !*** ./src/component/showdata/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/component/swipercom/index.jsx":
/*!*******************************************!*\
  !*** ./src/component/swipercom/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/component/swipercom/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var SwiperCom = /*#__PURE__*/function (_Component) {
  Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SwiperCom, _Component);

  var _super = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SwiperCom);

  function SwiperCom() {
    Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SwiperCom);

    return _super.apply(this, arguments);
  }

  Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SwiperCom, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Swiper"] // className='test-h'
      , {
        indicatorColor: "4c4c4c",
        indicatorActiveColor: "2c2c2c" // vertical
        ,
        circular: true,
        indicatorDots: true,
        autoplay: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["SwiperItem"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Image"], {
            src: "https://pic2.zhimg.com/v2-012fc4b6528c5ba0a969b299bc7f1dac_1440w.jpg?source=172ae18b",
            className: "swiper-img"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["SwiperItem"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Image"], {
            src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201408%2F31%2F20140831025000_Fa3fs.png&refer=http%3A%2F%2Fimg3.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651930251&t=c950f2b9564c01944de7fd20ec750557",
            className: "swiper-img"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["SwiperItem"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Image"], {
            src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgb.zol.com.cn%2Fsoft%2F6%2F955%2FceNGw7jGmrBI2.jpg&refer=http%3A%2F%2Fimgb.zol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651930303&t=05ec28c6965ad54028a2ea529fe45cff",
            className: "swiper-img"
          })
        })]
      });
    }
  }]);

  return SwiperCom;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SwiperCom);

/***/ }),

/***/ "./src/component/swipercom/style.css":
/*!*******************************************!*\
  !*** ./src/component/swipercom/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.jsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/home/index.jsx");


var config = {"navigationBarTitleText":"首页","enablePullDownRefresh":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/home/style.css":
/*!**********************************!*\
  !*** ./src/pages/home/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map