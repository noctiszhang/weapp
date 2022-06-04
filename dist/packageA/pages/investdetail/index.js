(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageA/pages/investdetail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/packageA/pages/investdetail/index.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/packageA/pages/investdetail/index.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestDetail; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _component_otcformlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/otcformlist */ "./src/component/otcformlist/index.jsx");
/* harmony import */ var _component_investbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/investbar */ "./src/component/investbar/index.jsx");
/* harmony import */ var _component_supplypicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/supplypicker */ "./src/component/supplypicker/index.jsx");
/* harmony import */ var _component_fundformlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../component/fundformlist */ "./src/component/fundformlist/index.jsx");
/* harmony import */ var _component_tickformlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../component/tickformlist */ "./src/component/tickformlist/index.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/packageA/pages/investdetail/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











function InvestDetail() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('0'),
      _React$useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      type = _React$useState2[0],
      setType = _React$useState2[1];

  var changeType = function changeType(formtype) {
    setType(formtype);
    console.log(formtype);
  }; // const switchType = () => {
  //   if (type === 0) { return <OTCFormList /> }
  //   else if (type === 1) { return <FundFormList /> }
  //   else if (type === 2) { return <TickFormList /> }
  //   else { '稍等片刻，马上回来' }
  // }


  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "theme-body",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "basic-title-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "basic-title",
        children: "\u6295\u8D44\u6982\u89C8"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_investbar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "basic-title-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "basic-title",
        children: "\u6295\u8D44\u660E\u7EC6"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_supplypicker__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        changeType: changeType
      })]
    }), type === '0' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_otcformlist__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {}), type === '1' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_fundformlist__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}), type === '2' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_tickformlist__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "divider-style",
      children: "I am the Bottom"
    })]
  });
}

/***/ }),

/***/ "./src/component/fundformlist/index.jsx":
/*!**********************************************!*\
  !*** ./src/component/fundformlist/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundFormList; });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/component/fundformlist/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function FundFormList() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
    className: "fundform-container",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "fundform-title",
      children: "\u57FA\u91D1"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "fundform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "\u603B\u8D44\u4EA7"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "11000\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "fundform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "\u65E5\u6536\u76CA(04-20)"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "2000\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "fundform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "\u6301\u6709\u6536\u76CA"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "-3281.12\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "fundform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "\u7D2F\u8BA1\u6536\u76CA"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "fundform-content",
        children: "-3215.31\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-title",
      children: "\u6301\u4ED3\u660E\u7EC6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u540D\u79F0/\u603B\u8D44\u4EA7"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u6301\u6709\u6536\u76CA"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u65E5\u6536\u76CA"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u845B\u5170\u533B\u7597"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "2213.51"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "+122"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u845B\u5170\u533B\u7597B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "258"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "+1290.54"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u4E2D\u6B27\u57FA\u91D1"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "1234"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "-5381.2"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-title",
      children: "\u5145\u63D0\u660E\u7EC6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u5145\u63D0\u91D1\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u5145\u63D0\u6E20\u9053"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u5145\u63D0\u65F6\u95F4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "+7000"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u86CB\u5377\u57FA\u91D1"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "2022/01/22"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "funddetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "-4000"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "\u86CB\u5377\u57FA\u91D1"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "funddetail-unit",
        children: "2022/02/23"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/component/fundformlist/style.css":
/*!**********************************************!*\
  !*** ./src/component/fundformlist/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/component/otcformlist/index.jsx":
/*!*********************************************!*\
  !*** ./src/component/otcformlist/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OTCFormList; });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/component/otcformlist/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function OTCFormList() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
    className: "form-container",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "form-title",
      children: "\u6570\u5B57\u8D27\u5E01"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "form-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "form-content",
        children: "C2C\u51C0\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "form-content",
        children: "6500\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "form-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "form-content",
        children: "\u5E01\u503C\u603B\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "form-content",
        children: "5500\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "form-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "form-content",
        children: "\u76C8\u4E8F\u6BD4"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "form-content",
        children: "-10%"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-title",
      children: "\u4E70\u5356\u660E\u7EC6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u5E01\u79CD"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u4EF7"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u6570\u91CF"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u603B\u4EF7"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "Bitcoin"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "$42213.51"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "+0.0002"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "$844.2"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "Doge"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "$0.2351"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "+1263890"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "$234123.2"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "Sol"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "$172.51"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "+12"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "$2101.8"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-title",
      children: "C2C\u660E\u7EC6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u91D1\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u6C47\u7387"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u6E20\u9053"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "\u4E70\u5356\u65F6\u95F4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "2000"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "6.32"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "bianace"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "2022/02/21"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "4000"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "6.34"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "MEXC"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "2021/07/11"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "detail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "100"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "6.42"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "Bianace"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "detail-unit",
        children: "2021/05/19"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/component/otcformlist/style.css":
/*!*********************************************!*\
  !*** ./src/component/otcformlist/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/component/supplypicker/index.jsx":
/*!**********************************************!*\
  !*** ./src/component/supplypicker/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyPicker; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function SupplyPicker(_ref) {
  var changeType = _ref.changeType;
  var selector = ['数字货币', '美股', 'A股'];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(selector[0]),
      _React$useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      selectorChecked = _React$useState2[0],
      setSelectorChecked = _React$useState2[1];

  var handleChanged = function handleChanged(e) {
    setSelectorChecked(selector[e.detail.value]);
    changeType(e.detail.value);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Picker"], {
      mode: "selector",
      range: selector,
      onChange: handleChanged,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "picker-choose",
        children: selectorChecked
      })
    })
  });
}

/***/ }),

/***/ "./src/component/tickformlist/index.jsx":
/*!**********************************************!*\
  !*** ./src/component/tickformlist/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickFormList; });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/component/tickformlist/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function TickFormList() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
    className: "tickform-container",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickform-title",
      children: "\u80A1\u7968"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickform-content",
        children: "\u6295\u8D44\u51C0\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickform-content",
        children: "25000\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickform-content",
        children: "\u7968\u503C\u603B\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickform-content",
        children: "24128.21\u5143"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickform-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickform-content",
        children: "\u76C8\u4E8F\u6BD4"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickform-content",
        children: "-4.2%"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-title",
      children: "\u6301\u4ED3\u660E\u7EC6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u8BC1\u5238/\u5E02\u503C"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u6301\u4ED3/\u53EF\u7528"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u73B0\u91D1/\u6210\u672C"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u6301\u4ED3\u76C8\u4E8F"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "\u8054\u7EDC\u4E92\u52A8"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "14022"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "4000"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "4000"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "3.53"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "4.571"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "-4165.00"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "-22.74%"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "\u65B0\u5E0C\u671B"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "4560"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "300"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "300"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "15.2"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "17.1"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit-double",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "-572.00"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
          children: "-11.148%"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-title",
      children: "\u5145\u63D0\u660E\u7EC6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-subtitle",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u5145\u63D0\u91D1\u989D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u5145\u63D0\u6E20\u9053"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u5145\u63D0\u65F6\u95F4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "+7000"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u4E1C\u65B9\u8D22\u5BCC"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "2022/01/22"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "tickdetail-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "-4000"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "\u4E1C\u65B9\u8D22\u5BCC"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "tickdetail-unit",
        children: "2022/02/23"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/component/tickformlist/style.css":
/*!**********************************************!*\
  !*** ./src/component/tickformlist/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/packageA/pages/investdetail/index.jsx":
/*!***************************************************!*\
  !*** ./src/packageA/pages/investdetail/index.jsx ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/packageA/pages/investdetail/index.jsx");


var config = {"navigationBarTitleText":"投资详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'packageA/pages/investdetail/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/packageA/pages/investdetail/style.css":
/*!***************************************************!*\
  !*** ./src/packageA/pages/investdetail/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/packageA/pages/investdetail/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map