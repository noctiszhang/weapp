(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/component/investbar/index.jsx":
/*!*******************************************!*\
  !*** ./src/component/investbar/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestBar; });
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var echarts_taro3_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts-taro3-react */ "./node_modules/echarts-taro3-react/lib/index.js");
/* harmony import */ var echarts_taro3_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_taro3_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function InvestBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      barChart = _useState2[0],
      setBarChart = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var arr1 = [6500, 26000, 8800];
    var arr2 = [5500, 6000, 3800];
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.001]
      },
      yAxis: {
        type: 'category',
        data: ['数货', '股票', '基金']
      },
      series: [{
        name: '总投资额',
        type: 'bar',
        data: arr1,
        color: 'royalblue'
      }, {
        name: '当前总价值',
        type: 'bar',
        data: arr2,
        color: '#A9DF96'
      }]
    };

    if (barChart) {
      // console.log(barChart)
      barChart.refresh(option);
    }
  }, [barChart]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "chart-container",
    style: {
      width: '100vw',
      height: '300px'
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(echarts_taro3_react__WEBPACK_IMPORTED_MODULE_3__["EChart"], {
      ref: function ref(node) {
        setBarChart(node);
      },
      canvasId: "bar-canvas"
    })
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map