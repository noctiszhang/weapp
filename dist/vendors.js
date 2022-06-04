(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createSuper.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createSuper.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/echarts-taro3-react/lib/ec-canvas/echarts.js":
/*!*******************************************************************!*\
  !*** ./node_modules/echarts-taro3-react/lib/ec-canvas/echarts.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(document, window, global, navigator) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  function e(t) {
    var e = {},
        i = {},
        n = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);
    return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), o && (i.weChat = !0), {
      browser: i,
      os: e,
      node: !1,
      canvasSupported: !!document.createElement("canvas").getContext,
      svgSupported: "undefined" != typeof SVGRect,
      touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
      pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11),
      domSupported: "undefined" != typeof document
    };
  }

  function i(t, e) {
    "createCanvas" === t && (Fd = null), zd[t] = e;
  }

  function n(t) {
    if (null == t || "object" != _typeof(t)) return t;
    var e = t,
        i = Dd.call(t);

    if ("[object Array]" === i) {
      if (!E(t)) {
        e = [];

        for (var r = 0, a = t.length; a > r; r++) {
          e[r] = n(t[r]);
        }
      }
    } else if (kd[i]) {
      if (!E(t)) {
        var o = t.constructor;
        if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);

          for (var r = 0, a = t.length; a > r; r++) {
            e[r] = n(t[r]);
          }
        }
      }
    } else if (!Id[i] && !E(t) && !T(t)) {
      e = {};

      for (var s in t) {
        t.hasOwnProperty(s) && (e[s] = n(t[s]));
      }
    }

    return e;
  }

  function r(t, e, i) {
    if (!b(e) || !b(t)) return i ? n(e) : t;

    for (var a in e) {
      if (e.hasOwnProperty(a)) {
        var o = t[a],
            s = e[a];
        !b(s) || !b(o) || _(s) || _(o) || T(s) || T(o) || M(s) || M(o) || E(s) || E(o) ? !i && a in t || (t[a] = n(e[a], !0)) : r(o, s, i);
      }
    }

    return t;
  }

  function a(t, e) {
    for (var i = t[0], n = 1, a = t.length; a > n; n++) {
      i = r(i, t[n], e);
    }

    return i;
  }

  function o(t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }

    return t;
  }

  function s(t, e, i) {
    for (var n in e) {
      e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
    }

    return t;
  }

  function l() {
    return Fd || (Fd = Rd().getContext("2d")), Fd;
  }

  function h(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);

      for (var i = 0, n = t.length; n > i; i++) {
        if (t[i] === e) return i;
      }
    }

    return -1;
  }

  function u(t, e) {
    function i() {}

    var n = t.prototype;
    i.prototype = e.prototype, t.prototype = new i();

    for (var r in n) {
      n.hasOwnProperty(r) && (t.prototype[r] = n[r]);
    }

    t.prototype.constructor = t, t.superClass = e;
  }

  function c(t, e, i) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i);
  }

  function d(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0;
  }

  function f(t, e, i) {
    if (t && e) if (t.forEach && t.forEach === Pd) t.forEach(e, i);else if (t.length === +t.length) for (var n = 0, r = t.length; r > n; n++) {
      e.call(i, t[n], n, t);
    } else for (var a in t) {
      t.hasOwnProperty(a) && e.call(i, t[a], a, t);
    }
  }

  function p(t, e, i) {
    if (t && e) {
      if (t.map && t.map === Bd) return t.map(e, i);

      for (var n = [], r = 0, a = t.length; a > r; r++) {
        n.push(e.call(i, t[r], r, t));
      }

      return n;
    }
  }

  function g(t, e, i, n) {
    if (t && e) {
      if (t.reduce && t.reduce === Ed) return t.reduce(e, i, n);

      for (var r = 0, a = t.length; a > r; r++) {
        i = e.call(n, i, t[r], r, t);
      }

      return i;
    }
  }

  function v(t, e, i) {
    if (t && e) {
      if (t.filter && t.filter === Ld) return t.filter(e, i);

      for (var n = [], r = 0, a = t.length; a > r; r++) {
        e.call(i, t[r], r, t) && n.push(t[r]);
      }

      return n;
    }
  }

  function m(t, e) {
    var i = Od.call(arguments, 2);
    return function () {
      return t.apply(e, i.concat(Od.call(arguments)));
    };
  }

  function y(t) {
    var e = Od.call(arguments, 1);
    return function () {
      return t.apply(this, e.concat(Od.call(arguments)));
    };
  }

  function _(t) {
    return "[object Array]" === Dd.call(t);
  }

  function x(t) {
    return "function" == typeof t;
  }

  function w(t) {
    return "[object String]" === Dd.call(t);
  }

  function b(t) {
    var e = _typeof(t);

    return "function" === e || !!t && "object" === e;
  }

  function M(t) {
    return !!Id[Dd.call(t)];
  }

  function S(t) {
    return !!kd[Dd.call(t)];
  }

  function T(t) {
    return "object" == _typeof(t) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
  }

  function C(t) {
    return t !== t;
  }

  function I() {
    for (var t = 0, e = arguments.length; e > t; t++) {
      if (null != arguments[t]) return arguments[t];
    }
  }

  function k(t, e) {
    return null != t ? t : e;
  }

  function D(t, e, i) {
    return null != t ? t : null != e ? e : i;
  }

  function A() {
    return Function.call.apply(Od, arguments);
  }

  function P(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }

  function L(t, e) {
    if (!t) throw new Error(e);
  }

  function O(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }

  function B(t) {
    t[Nd] = !0;
  }

  function E(t) {
    return t[Nd];
  }

  function z(t) {
    function e(t, e) {
      i ? n.set(t, e) : n.set(e, t);
    }

    var i = _(t);

    this.data = {};
    var n = this;
    t instanceof z ? t.each(e) : t && f(t, e);
  }

  function R(t) {
    return new z(t);
  }

  function F() {}

  function N(t, e) {
    var i = new Hd(2);
    return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i;
  }

  function H(t) {
    var e = new Hd(2);
    return e[0] = t[0], e[1] = t[1], e;
  }

  function W(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
  }

  function V(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
  }

  function G(t) {
    return Math.sqrt(X(t));
  }

  function X(t) {
    return t[0] * t[0] + t[1] * t[1];
  }

  function Y(t, e, i) {
    return t[0] = e[0] * i, t[1] = e[1] * i, t;
  }

  function U(t, e) {
    var i = G(e);
    return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;
  }

  function q(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }

  function j(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }

  function Z(t, e, i) {
    var n = e[0],
        r = e[1];
    return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
  }

  function $(t, e, i) {
    return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
  }

  function K(t, e, i) {
    return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
  }

  function Q() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this);
  }

  function J(t, e) {
    return {
      target: t,
      topTarget: e && e.topTarget
    };
  }

  function te(t, e) {
    var i = t._$eventProcessor;
    return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e;
  }

  function ee(t, e, i, n, r, a) {
    var o = t._$handlers;
    if ("function" == typeof i && (r = n, n = i, i = null), !n || !e) return t;
    i = te(t, i), o[e] || (o[e] = []);

    for (var s = 0; s < o[e].length; s++) {
      if (o[e][s].h === n) return t;
    }

    var l = {
      h: n,
      one: a,
      query: i,
      ctx: r || t,
      callAtLast: n.zrEventfulCallAtLast
    },
        h = o[e].length - 1,
        u = o[e][h];
    return u && u.callAtLast ? o[e].splice(h, 0, l) : o[e].push(l), t;
  }

  function ie(t, e, i, n, r, a) {
    var o = n + "-" + r,
        s = t.length;
    if (a.hasOwnProperty(o)) return a[o];

    if (1 === e) {
      var l = Math.round(Math.log((1 << s) - 1 & ~r) / Yd);
      return t[i][l];
    }

    for (var h = n | 1 << i, u = i + 1; n & 1 << u;) {
      u++;
    }

    for (var c = 0, d = 0, f = 0; s > d; d++) {
      var p = 1 << d;
      p & r || (c += (f % 2 ? -1 : 1) * t[i][d] * ie(t, e - 1, u, h, r | p, a), f++);
    }

    return a[o] = c, c;
  }

  function ne(t, e) {
    var i = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
        n = {},
        r = ie(i, 8, 0, 0, 0, n);

    if (0 !== r) {
      for (var a = [], o = 0; 8 > o; o++) {
        for (var s = 0; 8 > s; s++) {
          null == a[s] && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * ie(i, 7, 0 === o ? 1 : 0, 1 << o, 1 << s, n) / r * e[o];
        }
      }

      return function (t, e, i) {
        var n = e * a[6] + i * a[7] + 1;
        t[0] = (e * a[0] + i * a[1] + a[2]) / n, t[1] = (e * a[3] + i * a[4] + a[5]) / n;
      };
    }
  }

  function re(t, e, i, n, r) {
    return ae(qd, e, n, r, !0) && ae(t, i, qd[0], qd[1]);
  }

  function ae(t, e, i, n, r) {
    if (e.getBoundingClientRect && Cd.domSupported && !le(e)) {
      var a = e[Ud] || (e[Ud] = {}),
          o = oe(e, a),
          s = se(o, a, r);
      if (s) return s(t, i, n), !0;
    }

    return !1;
  }

  function oe(t, e) {
    var i = e.markers;
    if (i) return i;
    i = e.markers = [];

    for (var n = ["left", "right"], r = ["top", "bottom"], a = 0; 4 > a; a++) {
      var o = document.createElement("div"),
          s = o.style,
          l = a % 2,
          h = (a >> 1) % 2;
      s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[l] + ":0", r[h] + ":0", n[1 - l] + ":auto", r[1 - h] + ":auto", ""].join("!important;"), t.appendChild(o), i.push(o);
    }

    return i;
  }

  function se(t, e, i) {
    for (var n = i ? "invTrans" : "trans", r = e[n], a = e.srcCoords, o = !0, s = [], l = [], h = 0; 4 > h; h++) {
      var u = t[h].getBoundingClientRect(),
          c = 2 * h,
          d = u.left,
          f = u.top;
      s.push(d, f), o = o && a && d === a[c] && f === a[c + 1], l.push(t[h].offsetLeft, t[h].offsetTop);
    }

    return o && r ? r : (e.srcCoords = s, e[n] = i ? ne(l, s) : ne(s, l));
  }

  function le(t) {
    return "CANVAS" === t.nodeName.toUpperCase();
  }

  function he(t, e, i, n) {
    return i = i || {}, n || !Cd.canvasSupported ? ue(t, e, i) : Cd.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : ue(t, e, i), i;
  }

  function ue(t, e, i) {
    if (Cd.domSupported && t.getBoundingClientRect) {
      var n = e.clientX,
          r = e.clientY;

      if (le(t)) {
        var a = t.getBoundingClientRect();
        return i.zrX = n - a.left, void (i.zrY = r - a.top);
      }

      if (ae($d, t, n, r)) return i.zrX = $d[0], void (i.zrY = $d[1]);
    }

    i.zrX = i.zrY = 0;
  }

  function ce(t) {
    return t || window.event;
  }

  function de(t, e, i) {
    if (e = ce(e), null != e.zrX) return e;
    var n = e.type,
        r = n && n.indexOf("touch") >= 0;

    if (r) {
      var a = "touchend" !== n ? e.targetTouches[0] : e.changedTouches[0];
      a && he(t, a, e, i);
    } else he(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;

    var o = e.button;
    return null == e.which && void 0 !== o && Zd.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
  }

  function fe(t, e, i, n) {
    jd ? t.addEventListener(e, i, n) : t.attachEvent("on" + e, i);
  }

  function pe(t, e, i, n) {
    jd ? t.removeEventListener(e, i, n) : t.detachEvent("on" + e, i);
  }

  function ge(t) {
    var e = t[1][0] - t[0][0],
        i = t[1][1] - t[0][1];
    return Math.sqrt(e * e + i * i);
  }

  function ve(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }

  function me(t, e, i) {
    return {
      type: t,
      event: i,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: i.zrX,
      offsetY: i.zrY,
      gestureEvent: i.gestureEvent,
      pinchX: i.pinchX,
      pinchY: i.pinchY,
      pinchScale: i.pinchScale,
      wheelDelta: i.zrDelta,
      zrByTouch: i.zrByTouch,
      which: i.which,
      stop: ye
    };
  }

  function ye() {
    Kd(this.event);
  }

  function _e() {}

  function xe(t, e, i) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
      for (var n, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
        r.silent && (n = !0), r = r.parent;
      }

      return n ? tf : !0;
    }

    return !1;
  }

  function we(t, e, i) {
    var n = t.painter;
    return 0 > e || e > n.getWidth() || 0 > i || i > n.getHeight();
  }

  function be() {
    var t = new rf(6);
    return Me(t), t;
  }

  function Me(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }

  function Se(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }

  function Te(t, e, i) {
    var n = e[0] * i[0] + e[2] * i[1],
        r = e[1] * i[0] + e[3] * i[1],
        a = e[0] * i[2] + e[2] * i[3],
        o = e[1] * i[2] + e[3] * i[3],
        s = e[0] * i[4] + e[2] * i[5] + e[4],
        l = e[1] * i[4] + e[3] * i[5] + e[5];
    return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }

  function Ce(t, e, i) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t;
  }

  function Ie(t, e, i) {
    var n = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        h = Math.sin(i),
        u = Math.cos(i);
    return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t;
  }

  function ke(t, e, i) {
    var n = i[0],
        r = i[1];
    return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t;
  }

  function De(t, e) {
    var i = e[0],
        n = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = i * o - a * n;
    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null;
  }

  function Ae(t) {
    return t > of || -of > t;
  }

  function Pe(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
  }

  function Le(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
  }

  function Oe(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }

  function Be(t) {
    return Le(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }

  function Ee(t) {
    return Oe(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }

  function ze(t, e, i) {
    return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t;
  }

  function Re(t, e, i, n, r) {
    return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t;
  }

  function Fe(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }

  function Ne(t, e) {
    xf && Fe(xf, e), xf = _f.put(t, xf || e.slice());
  }

  function He(t, e) {
    if (t) {
      e = e || [];

      var i = _f.get(t);

      if (i) return Fe(e, i);
      t += "";
      var n = t.replace(/ /g, "").toLowerCase();
      if (n in yf) return Fe(e, yf[n]), Ne(t, e), e;

      if ("#" !== n.charAt(0)) {
        var r = n.indexOf("("),
            a = n.indexOf(")");

        if (-1 !== r && a + 1 === n.length) {
          var o = n.substr(0, r),
              s = n.substr(r + 1, a - (r + 1)).split(","),
              l = 1;

          switch (o) {
            case "rgba":
              if (4 !== s.length) return void Re(e, 0, 0, 0, 1);
              l = Ee(s.pop());

            case "rgb":
              return 3 !== s.length ? void Re(e, 0, 0, 0, 1) : (Re(e, Be(s[0]), Be(s[1]), Be(s[2]), l), Ne(t, e), e);

            case "hsla":
              return 4 !== s.length ? void Re(e, 0, 0, 0, 1) : (s[3] = Ee(s[3]), We(s, e), Ne(t, e), e);

            case "hsl":
              return 3 !== s.length ? void Re(e, 0, 0, 0, 1) : (We(s, e), Ne(t, e), e);

            default:
              return;
          }
        }

        Re(e, 0, 0, 0, 1);
      } else {
        if (4 === n.length) {
          var h = parseInt(n.substr(1), 16);
          return h >= 0 && 4095 >= h ? (Re(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), Ne(t, e), e) : void Re(e, 0, 0, 0, 1);
        }

        if (7 === n.length) {
          var h = parseInt(n.substr(1), 16);
          return h >= 0 && 16777215 >= h ? (Re(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), Ne(t, e), e) : void Re(e, 0, 0, 0, 1);
        }
      }
    }
  }

  function We(t, e) {
    var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        n = Ee(t[1]),
        r = Ee(t[2]),
        a = .5 >= r ? r * (n + 1) : r + n - r * n,
        o = 2 * r - a;
    return e = e || [], Re(e, Le(255 * ze(o, a, i + 1 / 3)), Le(255 * ze(o, a, i)), Le(255 * ze(o, a, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
  }

  function Ve(t, e) {
    var i = He(t);

    if (i) {
      for (var n = 0; 3 > n; n++) {
        i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
      }

      return Xe(i, 4 === i.length ? "rgba" : "rgb");
    }
  }

  function Ge(t) {
    var e = He(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
  }

  function Xe(t, e) {
    if (t && t.length) {
      var i = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")";
    }
  }

  function Ye(t, e) {
    return t[e];
  }

  function Ue(t, e, i) {
    t[e] = i;
  }

  function qe(t, e, i) {
    return (e - t) * i + t;
  }

  function je(t, e, i) {
    return i > .5 ? e : t;
  }

  function Ze(t, e, i, n, r) {
    var a = t.length;
    if (1 === r) for (var o = 0; a > o; o++) {
      n[o] = qe(t[o], e[o], i);
    } else for (var s = a && t[0].length, o = 0; a > o; o++) {
      for (var l = 0; s > l; l++) {
        n[o][l] = qe(t[o][l], e[o][l], i);
      }
    }
  }

  function $e(t, e, i) {
    var n = t.length,
        r = e.length;

    if (n !== r) {
      var a = n > r;
      if (a) t.length = r;else for (var o = n; r > o; o++) {
        t.push(1 === i ? e[o] : wf.call(e[o]));
      }
    }

    for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) {
      if (1 === i) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {
        isNaN(t[o][l]) && (t[o][l] = e[o][l]);
      }
    }
  }

  function Ke(t, e, i) {
    if (t === e) return !0;
    var n = t.length;
    if (n !== e.length) return !1;

    if (1 === i) {
      for (var r = 0; n > r; r++) {
        if (t[r] !== e[r]) return !1;
      }
    } else for (var a = t[0].length, r = 0; n > r; r++) {
      for (var o = 0; a > o; o++) {
        if (t[r][o] !== e[r][o]) return !1;
      }
    }

    return !0;
  }

  function Qe(t, e, i, n, r, a, o, s, l) {
    var h = t.length;
    if (1 === l) for (var u = 0; h > u; u++) {
      s[u] = Je(t[u], e[u], i[u], n[u], r, a, o);
    } else for (var c = t[0].length, u = 0; h > u; u++) {
      for (var d = 0; c > d; d++) {
        s[u][d] = Je(t[u][d], e[u][d], i[u][d], n[u][d], r, a, o);
      }
    }
  }

  function Je(t, e, i, n, r, a, o) {
    var s = .5 * (i - t),
        l = .5 * (n - e);
    return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
  }

  function ti(t) {
    if (d(t)) {
      var e = t.length;

      if (d(t[0])) {
        for (var i = [], n = 0; e > n; n++) {
          i.push(wf.call(t[n]));
        }

        return i;
      }

      return wf.call(t);
    }

    return t;
  }

  function ei(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }

  function ii(t) {
    var e = t[t.length - 1].value;
    return d(e && e[0]) ? 2 : 1;
  }

  function ni(t, e, i, n, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        h = n.length;

    if (h) {
      var u,
          c = n[0].value,
          f = d(c),
          p = !1,
          g = !1,
          v = f ? ii(n) : 0;
      n.sort(function (t, e) {
        return t.time - e.time;
      }), u = n[h - 1].time;

      for (var m = [], y = [], _ = n[0].value, x = !0, w = 0; h > w; w++) {
        m.push(n[w].time / u);
        var b = n[w].value;

        if (f && Ke(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var M = He(b);
          M ? (b = M, p = !0) : g = !0;
        }

        y.push(b);
      }

      if (a || !x) {
        for (var S = y[h - 1], w = 0; h - 1 > w; w++) {
          f ? $e(y[w], S, v) : !isNaN(y[w]) || isNaN(S) || g || p || (y[w] = S);
        }

        f && $e(o(t._target, r), S, v);
        var T,
            C,
            I,
            k,
            D,
            A,
            P = 0,
            L = 0;
        if (p) var O = [0, 0, 0, 0];

        var B = function B(t, e) {
          var i;
          if (0 > e) i = 0;else if (L > e) {
            for (T = Math.min(P + 1, h - 1), i = T; i >= 0 && !(m[i] <= e); i--) {
              ;
            }

            i = Math.min(i, h - 2);
          } else {
            for (i = P; h > i && !(m[i] > e); i++) {
              ;
            }

            i = Math.min(i - 1, h - 2);
          }
          P = i, L = e;
          var n = m[i + 1] - m[i];
          if (0 !== n) if (C = (e - m[i]) / n, l) {
            if (k = y[i], I = y[0 === i ? i : i - 1], D = y[i > h - 2 ? h - 1 : i + 1], A = y[i > h - 3 ? h - 1 : i + 2], f) Qe(I, k, D, A, C, C * C, C * C * C, o(t, r), v);else {
              var a;
              if (p) a = Qe(I, k, D, A, C, C * C, C * C * C, O, 1), a = ei(O);else {
                if (g) return je(k, D, C);
                a = Je(I, k, D, A, C, C * C, C * C * C);
              }
              s(t, r, a);
            }
          } else if (f) Ze(y[i], y[i + 1], C, o(t, r), v);else {
            var a;
            if (p) Ze(y[i], y[i + 1], C, O, 1), a = ei(O);else {
              if (g) return je(y[i], y[i + 1], C);
              a = qe(y[i], y[i + 1], C);
            }
            s(t, r, a);
          }
        },
            E = new Pe({
          target: t._target,
          life: u,
          loop: t._loop,
          delay: t._delay,
          onframe: B,
          ondestroy: i
        });

        return e && "spline" !== e && (E.easing = e), E;
      }
    }
  }

  function ri(t, e, i, n, r, a, o, s) {
    function l() {
      u--, u || a && a();
    }

    w(n) ? (a = r, r = n, n = 0) : x(r) ? (a = r, r = "linear", n = 0) : x(n) ? (a = n, n = 0) : x(i) ? (a = i, i = 500) : i || (i = 500), t.stopAnimation(), ai(t, "", t, e, i, n, s);
    var h = t.animators.slice(),
        u = h.length;
    u || a && a();

    for (var c = 0; c < h.length; c++) {
      h[c].done(l).start(r, o);
    }
  }

  function ai(t, e, i, n, r, a, o) {
    var s = {},
        l = 0;

    for (var h in n) {
      n.hasOwnProperty(h) && (null != i[h] ? b(n[h]) && !d(n[h]) ? ai(t, e ? e + "." + h : h, i[h], n[h], r, a, o) : (o ? (s[h] = i[h], oi(t, e, h, n[h])) : s[h] = n[h], l++) : null == n[h] || o || oi(t, e, h, n[h]));
    }

    l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0);
  }

  function oi(t, e, i, n) {
    if (e) {
      var r = {};
      r[e] = {}, r[e][i] = n, t.attr(r);
    } else t.attr(i, n);
  }

  function si(t, e, i, n) {
    0 > i && (t += i, i = -i), 0 > n && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }

  function li(t) {
    for (var e = 0; t >= Bf;) {
      e |= 1 & t, t >>= 1;
    }

    return t + e;
  }

  function hi(t, e, i, n) {
    var r = e + 1;
    if (r === i) return 1;

    if (n(t[r++], t[e]) < 0) {
      for (; i > r && n(t[r], t[r - 1]) < 0;) {
        r++;
      }

      ui(t, e, r);
    } else for (; i > r && n(t[r], t[r - 1]) >= 0;) {
      r++;
    }

    return r - e;
  }

  function ui(t, e, i) {
    for (i--; i > e;) {
      var n = t[e];
      t[e++] = t[i], t[i--] = n;
    }
  }

  function ci(t, e, i, n, r) {
    for (n === e && n++; i > n; n++) {
      for (var a, o = t[n], s = e, l = n; l > s;) {
        a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      }

      var h = n - s;

      switch (h) {
        case 3:
          t[s + 3] = t[s + 2];

        case 2:
          t[s + 2] = t[s + 1];

        case 1:
          t[s + 1] = t[s];
          break;

        default:
          for (; h > 0;) {
            t[s + h] = t[s + h - 1], h--;
          }

      }

      t[s] = o;
    }
  }

  function di(t, e, i, n, r, a) {
    var o = 0,
        s = 0,
        l = 1;

    if (a(t, e[i + r]) > 0) {
      for (s = n - r; s > l && a(t, e[i + r + l]) > 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; s > l && a(t, e[i + r - l]) <= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s);
      var h = o;
      o = r - l, l = r - h;
    }

    for (o++; l > o;) {
      var u = o + (l - o >>> 1);
      a(t, e[i + u]) > 0 ? o = u + 1 : l = u;
    }

    return l;
  }

  function fi(t, e, i, n, r, a) {
    var o = 0,
        s = 0,
        l = 1;

    if (a(t, e[i + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[i + r - l]) < 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s);
      var h = o;
      o = r - l, l = r - h;
    } else {
      for (s = n - r; s > l && a(t, e[i + r + l]) >= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s), o += r, l += r;
    }

    for (o++; l > o;) {
      var u = o + (l - o >>> 1);
      a(t, e[i + u]) < 0 ? l = u : o = u + 1;
    }

    return l;
  }

  function pi(t, e) {
    function i(t, e) {
      l[c] = t, h[c] = e, c += 1;
    }

    function n() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;else if (h[t] > h[t + 1]) break;
        a(t);
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && h[t - 1] < h[t + 1] && t--, a(t);
      }
    }

    function a(i) {
      var n = l[i],
          r = h[i],
          a = l[i + 1],
          u = h[i + 1];
      h[i] = r + u, i === c - 3 && (l[i + 1] = l[i + 2], h[i + 1] = h[i + 2]), c--;
      var d = fi(t[a], t, n, r, 0, e);
      n += d, r -= d, 0 !== r && (u = di(t[n + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(n, r, a, u) : s(n, r, a, u)));
    }

    function o(i, n, r, a) {
      var o = 0;

      for (o = 0; n > o; o++) {
        d[o] = t[i + o];
      }

      var s = 0,
          l = r,
          h = i;

      if (t[h++] = t[l++], 0 !== --a) {
        if (1 === n) {
          for (o = 0; a > o; o++) {
            t[h + o] = t[l + o];
          }

          return void (t[h + a] = d[s]);
        }

        for (var c, f, p, g = u;;) {
          c = 0, f = 0, p = !1;

          do {
            if (e(t[l], d[s]) < 0) {
              if (t[h++] = t[l++], f++, c = 0, 0 === --a) {
                p = !0;
                break;
              }
            } else if (t[h++] = d[s++], c++, f = 0, 1 === --n) {
              p = !0;
              break;
            }
          } while (g > (c | f));

          if (p) break;

          do {
            if (c = fi(t[l], d, s, n, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) {
                t[h + o] = d[s + o];
              }

              if (h += c, s += c, n -= c, 1 >= n) {
                p = !0;
                break;
              }
            }

            if (t[h++] = t[l++], 0 === --a) {
              p = !0;
              break;
            }

            if (f = di(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) {
                t[h + o] = t[l + o];
              }

              if (h += f, l += f, a -= f, 0 === a) {
                p = !0;
                break;
              }
            }

            if (t[h++] = d[s++], 1 === --n) {
              p = !0;
              break;
            }

            g--;
          } while (c >= Ef || f >= Ef);

          if (p) break;
          0 > g && (g = 0), g += 2;
        }

        if (u = g, 1 > u && (u = 1), 1 === n) {
          for (o = 0; a > o; o++) {
            t[h + o] = t[l + o];
          }

          t[h + a] = d[s];
        } else {
          if (0 === n) throw new Error();

          for (o = 0; n > o; o++) {
            t[h + o] = d[s + o];
          }
        }
      } else for (o = 0; n > o; o++) {
        t[h + o] = d[s + o];
      }
    }

    function s(i, n, r, a) {
      var o = 0;

      for (o = 0; a > o; o++) {
        d[o] = t[r + o];
      }

      var s = i + n - 1,
          l = a - 1,
          h = r + a - 1,
          c = 0,
          f = 0;

      if (t[h--] = t[s--], 0 !== --n) {
        if (1 === a) {
          for (h -= n, s -= n, f = h + 1, c = s + 1, o = n - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }

          return void (t[h] = d[l]);
        }

        for (var p = u;;) {
          var g = 0,
              v = 0,
              m = !1;

          do {
            if (e(d[l], t[s]) < 0) {
              if (t[h--] = t[s--], g++, v = 0, 0 === --n) {
                m = !0;
                break;
              }
            } else if (t[h--] = d[l--], v++, g = 0, 1 === --a) {
              m = !0;
              break;
            }
          } while (p > (g | v));

          if (m) break;

          do {
            if (g = n - fi(d[l], t, i, n, n - 1, e), 0 !== g) {
              for (h -= g, s -= g, n -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) {
                t[f + o] = t[c + o];
              }

              if (0 === n) {
                m = !0;
                break;
              }
            }

            if (t[h--] = d[l--], 1 === --a) {
              m = !0;
              break;
            }

            if (v = a - di(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) {
                t[f + o] = d[c + o];
              }

              if (1 >= a) {
                m = !0;
                break;
              }
            }

            if (t[h--] = t[s--], 0 === --n) {
              m = !0;
              break;
            }

            p--;
          } while (g >= Ef || v >= Ef);

          if (m) break;
          0 > p && (p = 0), p += 2;
        }

        if (u = p, 1 > u && (u = 1), 1 === a) {
          for (h -= n, s -= n, f = h + 1, c = s + 1, o = n - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }

          t[h] = d[l];
        } else {
          if (0 === a) throw new Error();

          for (c = h - (a - 1), o = 0; a > o; o++) {
            t[c + o] = d[o];
          }
        }
      } else for (c = h - (a - 1), o = 0; a > o; o++) {
        t[c + o] = d[o];
      }
    }

    var l,
        h,
        u = Ef,
        c = 0,
        d = [];
    l = [], h = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i;
  }

  function gi(t, e, i, n) {
    i || (i = 0), n || (n = t.length);
    var r = n - i;

    if (!(2 > r)) {
      var a = 0;
      if (Bf > r) return a = hi(t, i, n, e), void ci(t, i, n, i + a, e);
      var o = new pi(t, e),
          s = li(r);

      do {
        if (a = hi(t, i, n, e), s > a) {
          var l = r;
          l > s && (l = s), ci(t, i, i + l, i + a, e), a = l;
        }

        o.pushRun(i, a), o.mergeRuns(), r -= a, i += a;
      } while (0 !== r);

      o.forceMergeRuns();
    }
  }

  function vi(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }

  function mi(t, e, i) {
    var n = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;
    e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
    var s = t.createLinearGradient(n, a, r, o);
    return s;
  }

  function yi(t, e, i) {
    var n = i.width,
        r = i.height,
        a = Math.min(n, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;
    e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);
    var h = t.createRadialGradient(o, s, 0, o, s, l);
    return h;
  }

  function _i() {
    return !1;
  }

  function xi(t, e, i) {
    var n = Rd(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = n.style;
    return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = r * i, n.height = a * i, n;
  }

  function wi(t) {
    if ("string" == typeof t) {
      var e = Zf.get(t);
      return e && e.image;
    }

    return t;
  }

  function bi(t, e, i, n, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !i) return e;
        var a = Zf.get(t),
            o = {
          hostEl: i,
          cb: n,
          cbPayload: r
        };
        return a ? (e = a.image, !Si(e) && a.pending.push(o)) : (e = new Image(), e.onload = e.onerror = Mi, Zf.put(t, e.__cachedImgObj = {
          image: e,
          pending: [o]
        }), e.src = e.__zrImageSrc = t), e;
      }

      return t;
    }

    return e;
  }

  function Mi() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;

    for (var e = 0; e < t.pending.length; e++) {
      var i = t.pending[e],
          n = i.cb;
      n && n(this, i.cbPayload), i.hostEl.dirty();
    }

    t.pending.length = 0;
  }

  function Si(t) {
    return t && t.width && t.height;
  }

  function Ti(t, e) {
    e = e || tp;
    var i = t + ":" + e;
    if ($f[i]) return $f[i];

    for (var n = (t + "").split("\n"), r = 0, a = 0, o = n.length; o > a; a++) {
      r = Math.max(Ri(n[a], e).width, r);
    }

    return Kf > Qf && (Kf = 0, $f = {}), Kf++, $f[i] = r, r;
  }

  function Ci(t, e, i, n, r, a, o, s) {
    return o ? ki(t, e, i, n, r, a, o, s) : Ii(t, e, i, n, r, a, s);
  }

  function Ii(t, e, i, n, r, a, o) {
    var s = Fi(t, e, r, a, o),
        l = Ti(t, e);
    r && (l += r[1] + r[3]);
    var h = s.outerHeight,
        u = Di(0, l, i),
        c = Ai(0, h, n),
        d = new si(u, c, l, h);
    return d.lineHeight = s.lineHeight, d;
  }

  function ki(t, e, i, n, r, a, o, s) {
    var l = Ni(t, {
      rich: o,
      truncate: s,
      font: e,
      textAlign: i,
      textPadding: r,
      textLineHeight: a
    }),
        h = l.outerWidth,
        u = l.outerHeight,
        c = Di(0, h, i),
        d = Ai(0, u, n);
    return new si(c, d, h, u);
  }

  function Di(t, e, i) {
    return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
  }

  function Ai(t, e, i) {
    return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t;
  }

  function Pi(t, e, i) {
    var n = e.textPosition,
        r = e.textDistance,
        a = i.x,
        o = i.y;
    r = r || 0;
    var s = i.height,
        l = i.width,
        h = s / 2,
        u = "left",
        c = "top";

    switch (n) {
      case "left":
        a -= r, o += h, u = "right", c = "middle";
        break;

      case "right":
        a += r + l, o += h, c = "middle";
        break;

      case "top":
        a += l / 2, o -= r, u = "center", c = "bottom";
        break;

      case "bottom":
        a += l / 2, o += s + r, u = "center";
        break;

      case "inside":
        a += l / 2, o += h, u = "center", c = "middle";
        break;

      case "insideLeft":
        a += r, o += h, c = "middle";
        break;

      case "insideRight":
        a += l - r, o += h, u = "right", c = "middle";
        break;

      case "insideTop":
        a += l / 2, o += r, u = "center";
        break;

      case "insideBottom":
        a += l / 2, o += s - r, u = "center", c = "bottom";
        break;

      case "insideTopLeft":
        a += r, o += r;
        break;

      case "insideTopRight":
        a += l - r, o += r, u = "right";
        break;

      case "insideBottomLeft":
        a += r, o += s - r, c = "bottom";
        break;

      case "insideBottomRight":
        a += l - r, o += s - r, u = "right", c = "bottom";
    }

    return t = t || {}, t.x = a, t.y = o, t.textAlign = u, t.textVerticalAlign = c, t;
  }

  function Li(t, e, i, n, r) {
    if (!e) return "";
    var a = (t + "").split("\n");
    r = Oi(e, i, n, r);

    for (var o = 0, s = a.length; s > o; o++) {
      a[o] = Bi(a[o], r);
    }

    return a.join("\n");
  }

  function Oi(t, e, i, n) {
    n = o({}, n), n.font = e;
    var i = k(i, "...");
    n.maxIterations = k(n.maxIterations, 2);
    var r = n.minChar = k(n.minChar, 0);
    n.cnCharWidth = Ti("国", e);
    var a = n.ascCharWidth = Ti("a", e);
    n.placeholder = k(n.placeholder, "");

    for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) {
      s -= a;
    }

    var h = Ti(i, e);
    return h > s && (i = "", h = 0), s = t - h, n.ellipsis = i, n.ellipsisWidth = h, n.contentWidth = s, n.containerWidth = t, n;
  }

  function Bi(t, e) {
    var i = e.containerWidth,
        n = e.font,
        r = e.contentWidth;
    if (!i) return "";
    var a = Ti(t, n);
    if (i >= a) return t;

    for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;
        break;
      }

      var s = 0 === o ? Ei(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
      t = t.substr(0, s), a = Ti(t, n);
    }

    return "" === t && (t = e.placeholder), t;
  }

  function Ei(t, e, i, n) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);
      r += s >= 0 && 127 >= s ? i : n;
    }

    return a;
  }

  function zi(t) {
    return Ti("国", t);
  }

  function Ri(t, e) {
    return ep.measureText(t, e);
  }

  function Fi(t, e, i, n, r) {
    null != t && (t += "");
    var a = k(n, zi(e)),
        o = t ? t.split("\n") : [],
        s = o.length * a,
        l = s,
        h = !0;

    if (i && (l += i[0] + i[2]), t && r) {
      h = !1;
      var u = r.outerHeight,
          c = r.outerWidth;
      if (null != u && l > u) t = "", o = [];else if (null != c) for (var d = Oi(c - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
        minChar: r.minChar,
        placeholder: r.placeholder
      }), f = 0, p = o.length; p > f; f++) {
        o[f] = Bi(o[f], d);
      }
    }

    return {
      lines: o,
      height: s,
      outerHeight: l,
      lineHeight: a,
      canCacheByTextString: h
    };
  }

  function Ni(t, e) {
    var i = {
      lines: [],
      width: 0,
      height: 0
    };
    if (null != t && (t += ""), !t) return i;

    for (var n, r = Jf.lastIndex = 0; null != (n = Jf.exec(t));) {
      var a = n.index;
      a > r && Hi(i, t.substring(r, a)), Hi(i, n[2], n[1]), r = Jf.lastIndex;
    }

    r < t.length && Hi(i, t.substring(r, t.length));
    var o = i.lines,
        s = 0,
        l = 0,
        h = [],
        u = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;
    u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));

    for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            M = _.textHeight = k(x.textHeight, zi(b));
        if (w && (M += w[0] + w[2]), _.height = M, _.lineHeight = D(x.textLineHeight, e.textLineHeight, M), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
          lines: [],
          width: 0,
          height: 0
        };
        _.textWidth = Ti(_.text, b);
        var S = x.textWidth,
            T = null == S || "auto" === S;
        if ("string" == typeof S && "%" === S.charAt(S.length - 1)) _.percentWidth = S, h.push(_), S = 0;else {
          if (T) {
            S = _.textWidth;
            var C = x.textBackgroundColor,
                I = C && C.image;
            I && (I = wi(I), Si(I) && (S = Math.max(S, I.width * M / I.height)));
          }

          var A = w ? w[1] + w[3] : 0;
          S += A;
          var P = null != d ? d - m : null;
          null != P && S > P && (!T || A > P ? (_.text = "", _.textWidth = S = 0) : (_.text = Li(_.text, P - A, b, c.ellipsis, {
            minChar: c.minChar
          }), _.textWidth = Ti(_.text, b), S = _.textWidth + A));
        }
        m += _.width = S, x && (v = Math.max(v, _.lineHeight));
      }

      g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);
    }

    i.outerWidth = i.width = k(e.textWidth, l), i.outerHeight = i.height = k(e.textHeight, s), u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);

    for (var p = 0; p < h.length; p++) {
      var _ = h[p],
          L = _.percentWidth;
      _.width = parseInt(L, 10) / 100 * l;
    }

    return i;
  }

  function Hi(t, e, i) {
    for (var n = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = {
        styleName: i,
        text: s,
        isLineHolder: !s && !n
      };
      if (o) a.push({
        tokens: [l]
      });else {
        var h = (a[a.length - 1] || (a[0] = {
          tokens: []
        })).tokens,
            u = h.length;
        1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l);
      }
    }
  }

  function Wi(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
    return e && O(e) || t.textFont || t.font;
  }

  function Vi(t, e) {
    var i,
        n,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        h = e.height,
        u = e.r;
    0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? i = n = r = a = u : u instanceof Array ? 1 === u.length ? i = n = r = a = u[0] : 2 === u.length ? (i = r = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], a = u[3]) : i = n = r = a = 0;
    var c;
    i + n > l && (c = i + n, i *= l / c, n *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + a > h && (c = i + a, i *= h / c, a *= h / c), t.moveTo(o + i, s), t.lineTo(o + l - n, s), 0 !== n && t.arc(o + l - n, s + n, n, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + i), 0 !== i && t.arc(o + i, s + i, i, Math.PI, 1.5 * Math.PI);
  }

  function Gi(t) {
    return Xi(t), f(t.rich, Xi), t;
  }

  function Xi(t) {
    if (t) {
      t.font = Wi(t);
      var e = t.textAlign;
      "middle" === e && (e = "center"), t.textAlign = null == e || np[e] ? e : "left";
      var i = t.textVerticalAlign || t.textBaseline;
      "center" === i && (i = "middle"), t.textVerticalAlign = null == i || rp[i] ? i : "top";
      var n = t.textPadding;
      n && (t.textPadding = P(t.textPadding));
    }
  }

  function Yi(t, e, i, n, r, a) {
    n.rich ? qi(t, e, i, n, r, a) : Ui(t, e, i, n, r, a);
  }

  function Ui(t, e, i, n, r, a) {
    var o,
        s = Ki(n),
        l = !1,
        h = e.__attrCachedBy === Nf.PLAIN_TEXT;
    a !== Hf ? (a && (o = a.style, l = !s && h && o), e.__attrCachedBy = s ? Nf.NONE : Nf.PLAIN_TEXT) : h && (e.__attrCachedBy = Nf.NONE);
    var u = n.font || ip;
    l && u === (o.font || ip) || (e.font = u);
    var c = t.__computedFont;
    t.__styleFont !== u && (t.__styleFont = u, c = t.__computedFont = e.font);
    var d = n.textPadding,
        f = n.textLineHeight,
        p = t.__textCotentBlock;
    (!p || t.__dirtyText) && (p = t.__textCotentBlock = Fi(i, c, d, f, n.truncate));
    var g = p.outerHeight,
        v = p.lines,
        m = p.lineHeight,
        y = tn(sp, t, n, r),
        _ = y.baseX,
        x = y.baseY,
        w = y.textAlign || "left",
        b = y.textVerticalAlign;
    Zi(e, n, r, _, x);
    var M = Ai(x, g, b),
        S = _,
        T = M;

    if (s || d) {
      var C = Ti(i, c),
          I = C;
      d && (I += d[1] + d[3]);
      var k = Di(_, I, w);
      s && Qi(t, e, n, k, M, I, g), d && (S = on(_, w, d), T += d[0]);
    }

    e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = n.opacity || 1;

    for (var D = 0; D < ap.length; D++) {
      var A = ap[D],
          P = A[0],
          L = A[1],
          O = n[P];
      l && O === o[P] || (e[L] = Ff(e, L, O || A[2]));
    }

    T += m / 2;
    var B = n.textStrokeWidth,
        E = l ? o.textStrokeWidth : null,
        z = !l || B !== E,
        R = !l || z || n.textStroke !== o.textStroke,
        F = nn(n.textStroke, B),
        N = rn(n.textFill);
    if (F && (z && (e.lineWidth = B), R && (e.strokeStyle = F)), N && (l && n.textFill === o.textFill || (e.fillStyle = N)), 1 === v.length) F && e.strokeText(v[0], S, T), N && e.fillText(v[0], S, T);else for (var D = 0; D < v.length; D++) {
      F && e.strokeText(v[D], S, T), N && e.fillText(v[D], S, T), T += m;
    }
  }

  function qi(t, e, i, n, r, a) {
    a !== Hf && (e.__attrCachedBy = Nf.NONE);
    var o = t.__textCotentBlock;
    (!o || t.__dirtyText) && (o = t.__textCotentBlock = Ni(i, n)), ji(t, e, o, n, r);
  }

  function ji(t, e, i, n, r) {
    var a = i.width,
        o = i.outerWidth,
        s = i.outerHeight,
        l = n.textPadding,
        h = tn(sp, t, n, r),
        u = h.baseX,
        c = h.baseY,
        d = h.textAlign,
        f = h.textVerticalAlign;
    Zi(e, n, r, u, c);
    var p = Di(u, o, d),
        g = Ai(c, s, f),
        v = p,
        m = g;
    l && (v += l[3], m += l[0]);
    var y = v + a;
    Ki(n) && Qi(t, e, n, p, g, o, s);

    for (var _ = 0; _ < i.lines.length; _++) {
      for (var x, w = i.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, T = w.width, C = 0, I = v, k = y, D = M - 1; M > C && (x = b[C], !x.textAlign || "left" === x.textAlign);) {
        $i(t, e, x, n, S, m, I, "left"), T -= x.width, I += x.width, C++;
      }

      for (; D >= 0 && (x = b[D], "right" === x.textAlign);) {
        $i(t, e, x, n, S, m, k, "right"), T -= x.width, k -= x.width, D--;
      }

      for (I += (a - (I - v) - (y - k) - T) / 2; D >= C;) {
        x = b[C], $i(t, e, x, n, S, m, I + x.width / 2, "center"), I += x.width, C++;
      }

      m += S;
    }
  }

  function Zi(t, e, i, n, r) {
    if (i && e.textRotation) {
      var a = e.textOrigin;
      "center" === a ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r);
    }
  }

  function $i(t, e, i, n, r, a, o, s) {
    var l = n.rich[i.styleName] || {};
    l.text = i.text;
    var h = i.textVerticalAlign,
        u = a + r / 2;
    "top" === h ? u = a + i.height / 2 : "bottom" === h && (u = a + r - i.height / 2), !i.isLineHolder && Ki(l) && Qi(t, e, l, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, u - i.height / 2, i.width, i.height);
    var c = i.textPadding;
    c && (o = on(o, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), en(e, "shadowBlur", D(l.textShadowBlur, n.textShadowBlur, 0)), en(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), en(e, "shadowOffsetX", D(l.textShadowOffsetX, n.textShadowOffsetX, 0)), en(e, "shadowOffsetY", D(l.textShadowOffsetY, n.textShadowOffsetY, 0)), en(e, "textAlign", s), en(e, "textBaseline", "middle"), en(e, "font", i.font || ip);
    var d = nn(l.textStroke || n.textStroke, p),
        f = rn(l.textFill || n.textFill),
        p = k(l.textStrokeWidth, n.textStrokeWidth);
    d && (en(e, "lineWidth", p), en(e, "strokeStyle", d), e.strokeText(i.text, o, u)), f && (en(e, "fillStyle", f), e.fillText(i.text, o, u));
  }

  function Ki(t) {
    return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor);
  }

  function Qi(t, e, i, n, r, a, o) {
    var s = i.textBackgroundColor,
        l = i.textBorderWidth,
        h = i.textBorderColor,
        u = w(s);

    if (en(e, "shadowBlur", i.textBoxShadowBlur || 0), en(e, "shadowColor", i.textBoxShadowColor || "transparent"), en(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), en(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || l && h) {
      e.beginPath();
      var c = i.textBorderRadius;
      c ? Vi(e, {
        x: n,
        y: r,
        width: a,
        height: o,
        r: c
      }) : e.rect(n, r, a, o), e.closePath();
    }

    if (u) {
      if (en(e, "fillStyle", s), null != i.fillOpacity) {
        var d = e.globalAlpha;
        e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = d;
      } else e.fill();
    } else if (b(s)) {
      var f = s.image;
      f = bi(f, null, t, Ji, s), f && Si(f) && e.drawImage(f, n, r, a, o);
    }
    if (l && h) if (en(e, "lineWidth", l), en(e, "strokeStyle", h), null != i.strokeOpacity) {
      var d = e.globalAlpha;
      e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = d;
    } else e.stroke();
  }

  function Ji(t, e) {
    e.image = t;
  }

  function tn(t, e, i, n) {
    var r = i.x || 0,
        a = i.y || 0,
        o = i.textAlign,
        s = i.textVerticalAlign;

    if (n) {
      var l = i.textPosition;
      if (l instanceof Array) r = n.x + an(l[0], n.width), a = n.y + an(l[1], n.height);else {
        var h = e && e.calculateTextPosition ? e.calculateTextPosition(op, i, n) : Pi(op, i, n);
        r = h.x, a = h.y, o = o || h.textAlign, s = s || h.textVerticalAlign;
      }
      var u = i.textOffset;
      u && (r += u[0], a += u[1]);
    }

    return t = t || {}, t.baseX = r, t.baseY = a, t.textAlign = o, t.textVerticalAlign = s, t;
  }

  function en(t, e, i) {
    return t[e] = Ff(t, e, i), t[e];
  }

  function nn(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }

  function rn(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }

  function an(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }

  function on(t, e, i) {
    return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3];
  }

  function sn(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }

  function ln(t) {
    t = t || {}, Df.call(this, t);

    for (var e in t) {
      t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    }

    this.style = new Vf(t.style, this), this._rect = null, this.__clipPaths = null;
  }

  function hn(t) {
    ln.call(this, t);
  }

  function un(t) {
    return parseInt(t, 10);
  }

  function cn(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1;
  }

  function dn(t, e, i) {
    return pp.copy(t.getBoundingRect()), t.transform && pp.applyTransform(t.transform), gp.width = e, gp.height = i, !pp.intersect(gp);
  }

  function fn(t, e) {
    if (t === e) return !1;
    if (!t || !e || t.length !== e.length) return !0;

    for (var i = 0; i < t.length; i++) {
      if (t[i] !== e[i]) return !0;
    }

    return !1;
  }

  function pn(t, e) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e);
    }
  }

  function gn(t, e) {
    var i = document.createElement("div");
    return i.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i;
  }

  function vn(t) {
    return "mousewheel" === t && Cd.browser.firefox ? "DOMMouseScroll" : t;
  }

  function mn(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e;
  }

  function yn(t) {
    t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
      t.touching = !1, t.touchTimer = null;
    }, 700);
  }

  function _n(t) {
    t && (t.zrByTouch = !0);
  }

  function xn(t, e) {
    return de(t.dom, new bn(t, e), !0);
  }

  function wn(t, e) {
    for (var i = e, n = !1; i && 9 !== i.nodeType && !(n = i.domBelongToZr || i !== e && i === t.painterRoot);) {
      i = i.parentNode;
    }

    return n;
  }

  function bn(t, e) {
    this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }

  function Mn(t, e) {
    var i = e.domHandlers;
    Cd.pointerEventsSupported ? f(xp.pointer, function (n) {
      Tn(e, n, function (e) {
        i[n].call(t, e);
      });
    }) : (Cd.touchEventsSupported && f(xp.touch, function (n) {
      Tn(e, n, function (r) {
        i[n].call(t, r), yn(e);
      });
    }), f(xp.mouse, function (n) {
      Tn(e, n, function (r) {
        r = ce(r), e.touching || i[n].call(t, r);
      });
    }));
  }

  function Sn(t, e) {
    function i(i) {
      function n(n) {
        n = ce(n), wn(t, n.target) || (n = xn(t, n), e.domHandlers[i].call(t, n));
      }

      Tn(e, i, n, {
        capture: !0
      });
    }

    Cd.pointerEventsSupported ? f(wp.pointer, i) : Cd.touchEventsSupported || f(wp.mouse, i);
  }

  function Tn(t, e, i, n) {
    t.mounted[e] = i, t.listenerOpts[e] = n, fe(t.domTarget, vn(e), i, n);
  }

  function Cn(t) {
    var e = t.mounted;

    for (var i in e) {
      e.hasOwnProperty(i) && pe(t.domTarget, vn(i), e[i], t.listenerOpts[i]);
    }

    t.mounted = {};
  }

  function In(t, e) {
    if (t._mayPointerCapture = null, _p && t._pointerCapturing ^ e) {
      t._pointerCapturing = e;
      var i = t._globalHandlerScope;
      e ? Sn(t, i) : Cn(i);
    }
  }

  function kn(t, e) {
    this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = !1;
  }

  function Dn(t, e) {
    Xd.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new kn(t, Mp), _p && (this._globalHandlerScope = new kn(document, Sp)), this._pointerCapturing = !1, this._mayPointerCapture = null, Mn(this, this._localHandlerScope);
  }

  function An(t, e) {
    var i = new Dp(Sd(), t, e);
    return i;
  }

  function Pn(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }

  function Ln(t, e, i) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};

      for (var n = 0, r = i.length; r > n; n++) {
        var a = i[n];
        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }

  function On(t) {
    return !Pp(t) || Lp(t) || t instanceof Date ? t : t.value;
  }

  function Bn(t) {
    return Pp(t) && !(t instanceof Array);
  }

  function En(t, e) {
    e = (e || []).slice();
    var i = p(t || [], function (t) {
      return {
        exist: t
      };
    });
    return Ap(e, function (t, n) {
      if (Pp(t)) {
        for (var r = 0; r < i.length; r++) {
          if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void (e[n] = null);
        }

        for (var r = 0; r < i.length; r++) {
          var a = i[r].exist;
          if (!(i[r].option || null != a.id && null != t.id || null == t.name || Fn(t) || Fn(a) || a.name !== t.name + "")) return i[r].option = t, void (e[n] = null);
        }
      }
    }), Ap(e, function (t) {
      if (Pp(t)) {
        for (var e = 0; e < i.length; e++) {
          var n = i[e].exist;

          if (!i[e].option && !Fn(n) && null == t.id) {
            i[e].option = t;
            break;
          }
        }

        e >= i.length && i.push({
          option: t
        });
      }
    }), i;
  }

  function zn(t) {
    var e = R();
    Ap(t, function (t) {
      var i = t.exist;
      i && e.set(i.id, t);
    }), Ap(t, function (t) {
      var i = t.option;
      L(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {});
    }), Ap(t, function (t, i) {
      var n = t.exist,
          r = t.option,
          a = t.keyInfo;

      if (Pp(r)) {
        if (a.name = null != r.name ? r.name + "" : n ? n.name : Op + i, n) a.id = n.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;

          do {
            a.id = "\x00" + a.name + "\x00" + o++;
          } while (e.get(a.id));
        }
        e.set(a.id, t);
      }
    });
  }

  function Rn(t) {
    var e = t.name;
    return !(!e || !e.indexOf(Op));
  }

  function Fn(t) {
    return Pp(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");
  }

  function Nn(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : void 0;
  }

  function Hn() {
    var t = "__\x00ec_inner_" + Ep++ + "_" + Math.random().toFixed(5);
    return function (e) {
      return e[t] || (e[t] = {});
    };
  }

  function Wn(t, e, i) {
    if (w(e)) {
      var n = {};
      n[e + "Index"] = 0, e = n;
    }

    var r = i && i.defaultMainType;
    !r || Vn(e, r + "Index") || Vn(e, r + "Id") || Vn(e, r + "Name") || (e[r + "Index"] = 0);
    var a = {};
    return Ap(e, function (n, r) {
      var n = e[r];
      if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = n);
      var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          l = (o[2] || "").toLowerCase();

      if (!(!s || !l || null == n || "index" === l && "none" === n || i && i.includeMainTypes && h(i.includeMainTypes, s) < 0)) {
        var u = {
          mainType: s
        };
        ("index" !== l || "all" !== n) && (u[l] = n);
        var c = t.queryComponents(u);
        a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }

  function Vn(t, e) {
    return t && t.hasOwnProperty(e);
  }

  function Gn(t, e, i) {
    t.setAttribute ? t.setAttribute(e, i) : t[e] = i;
  }

  function Xn(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }

  function Yn(t) {
    return "auto" === t ? Cd.domSupported ? "html" : "richText" : t || "html";
  }

  function Un(t) {
    var e = {
      main: "",
      sub: ""
    };
    return t && (t = t.split(zp), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }

  function qn(t) {
    L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }

  function jn(t, e) {
    t.$constructor = t, t.extend = function (t) {
      bd && f(e, function (e) {
        t[e] || console.warn("Method `" + e + "` should be implemented" + (t.type ? " in " + t.type : "") + ".");
      });

      var i = this,
          n = function n() {
        t.$constructor ? t.$constructor.apply(this, arguments) : i.apply(this, arguments);
      };

      return o(n.prototype, t), n.extend = this.extend, n.superCall = $n, n.superApply = Kn, u(n, this), n.superClass = i, n;
    };
  }

  function Zn(t) {
    var e = ["__\x00is_clz", Fp++, Math.random().toFixed(3)].join("_");
    t.prototype[e] = !0, bd && L(!t.isInstance, 'The method "is" can not be defined.'), t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }

  function $n(t, e) {
    var i = A(arguments, 2);
    return this.superClass.prototype[e].apply(t, i);
  }

  function Kn(t, e, i) {
    return this.superClass.prototype[e].apply(t, i);
  }

  function Qn(t, e) {
    function i(t) {
      var e = n[t.main];
      return e && e[Rp] || (e = n[t.main] = {}, e[Rp] = !0), e;
    }

    e = e || {};
    var n = {};

    if (t.registerClass = function (t, e) {
      if (e) if (qn(e), e = Un(e), e.sub) {
        if (e.sub !== Rp) {
          var r = i(e);
          r[e.sub] = t;
        }
      } else bd && n[e.main] && console.warn(e.main + " exists."), n[e.main] = t;
      return t;
    }, t.getClass = function (t, e, i) {
      var r = n[t];
      if (r && r[Rp] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
      return r;
    }, t.getClassesByMainType = function (t) {
      t = Un(t);
      var e = [],
          i = n[t.main];
      return i && i[Rp] ? f(i, function (t, i) {
        i !== Rp && e.push(t);
      }) : e.push(i), e;
    }, t.hasClass = function (t) {
      return t = Un(t), !!n[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];
      return f(n, function (e, i) {
        t.push(i);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = Un(t);
      var e = n[t.main];
      return e && e[Rp];
    }, t.parseClassType = Un, e.registerWhenExtend) {
      var r = t.extend;
      r && (t.extend = function (e) {
        var i = r.call(this, e);
        return t.registerClass(i, e.type);
      });
    }

    return t;
  }

  function Jn(t) {
    return t > -Up && Up > t;
  }

  function tr(t) {
    return t > Up || -Up > t;
  }

  function er(t, e, i, n, r) {
    var a = 1 - r;
    return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i);
  }

  function ir(t, e, i, n, r) {
    var a = 1 - r;
    return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r);
  }

  function nr(t, e, i, n, r, a) {
    var o = n + 3 * (e - i) - t,
        s = 3 * (i - 2 * e + t),
        l = 3 * (e - t),
        h = t - r,
        u = s * s - 3 * o * l,
        c = s * l - 9 * o * h,
        d = l * l - 3 * s * h,
        f = 0;
    if (Jn(u) && Jn(c)) {
      if (Jn(s)) a[0] = 0;else {
        var p = -l / s;
        p >= 0 && 1 >= p && (a[f++] = p);
      }
    } else {
      var g = c * c - 4 * u * d;

      if (Jn(g)) {
        var v = c / u,
            p = -s / o + v,
            m = -v / 2;
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);
      } else if (g > 0) {
        var y = Yp(g),
            _ = u * s + 1.5 * o * (-c + y),
            x = u * s + 1.5 * o * (-c - y);

        _ = 0 > _ ? -Xp(-_, Zp) : Xp(_, Zp), x = 0 > x ? -Xp(-x, Zp) : Xp(x, Zp);
        var p = (-s - (_ + x)) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p);
      } else {
        var w = (2 * u * s - 3 * o * c) / (2 * Yp(u * u * u)),
            b = Math.acos(w) / 3,
            M = Yp(u),
            S = Math.cos(b),
            p = (-s - 2 * M * S) / (3 * o),
            m = (-s + M * (S + jp * Math.sin(b))) / (3 * o),
            T = (-s + M * (S - jp * Math.sin(b))) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), T >= 0 && 1 >= T && (a[f++] = T);
      }
    }
    return f;
  }

  function rr(t, e, i, n, r) {
    var a = 6 * i - 12 * e + 6 * t,
        o = 9 * e + 3 * n - 3 * t - 9 * i,
        s = 3 * e - 3 * t,
        l = 0;

    if (Jn(o)) {
      if (tr(a)) {
        var h = -s / a;
        h >= 0 && 1 >= h && (r[l++] = h);
      }
    } else {
      var u = a * a - 4 * o * s;
      if (Jn(u)) r[0] = -a / (2 * o);else if (u > 0) {
        var c = Yp(u),
            h = (-a + c) / (2 * o),
            d = (-a - c) / (2 * o);
        h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }

    return l;
  }

  function ar(t, e, i, n, r, a) {
    var o = (e - t) * r + t,
        s = (i - e) * r + e,
        l = (n - i) * r + i,
        h = (s - o) * r + o,
        u = (l - s) * r + s,
        c = (u - h) * r + h;
    a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n;
  }

  function or(t, e, i, n, r, a, o, s, l, h, u) {
    var c,
        d,
        f,
        p,
        g,
        v = .005,
        m = 1 / 0;
    $p[0] = l, $p[1] = h;

    for (var y = 0; 1 > y; y += .05) {
      Kp[0] = er(t, i, r, o, y), Kp[1] = er(e, n, a, s, y), p = Vd($p, Kp), m > p && (c = y, m = p);
    }

    m = 1 / 0;

    for (var _ = 0; 32 > _ && !(qp > v); _++) {
      d = c - v, f = c + v, Kp[0] = er(t, i, r, o, d), Kp[1] = er(e, n, a, s, d), p = Vd(Kp, $p), d >= 0 && m > p ? (c = d, m = p) : (Qp[0] = er(t, i, r, o, f), Qp[1] = er(e, n, a, s, f), g = Vd(Qp, $p), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
    }

    return u && (u[0] = er(t, i, r, o, c), u[1] = er(e, n, a, s, c)), Yp(m);
  }

  function sr(t, e, i, n) {
    var r = 1 - n;
    return r * (r * t + 2 * n * e) + n * n * i;
  }

  function lr(t, e, i, n) {
    return 2 * ((1 - n) * (e - t) + n * (i - e));
  }

  function hr(t, e, i, n, r) {
    var a = t - 2 * e + i,
        o = 2 * (e - t),
        s = t - n,
        l = 0;

    if (Jn(a)) {
      if (tr(o)) {
        var h = -s / o;
        h >= 0 && 1 >= h && (r[l++] = h);
      }
    } else {
      var u = o * o - 4 * a * s;

      if (Jn(u)) {
        var h = -o / (2 * a);
        h >= 0 && 1 >= h && (r[l++] = h);
      } else if (u > 0) {
        var c = Yp(u),
            h = (-o + c) / (2 * a),
            d = (-o - c) / (2 * a);
        h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }

    return l;
  }

  function ur(t, e, i) {
    var n = t + i - 2 * e;
    return 0 === n ? .5 : (t - e) / n;
  }

  function cr(t, e, i, n, r) {
    var a = (e - t) * n + t,
        o = (i - e) * n + e,
        s = (o - a) * n + a;
    r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i;
  }

  function dr(t, e, i, n, r, a, o, s, l) {
    var h,
        u = .005,
        c = 1 / 0;
    $p[0] = o, $p[1] = s;

    for (var d = 0; 1 > d; d += .05) {
      Kp[0] = sr(t, i, r, d), Kp[1] = sr(e, n, a, d);
      var f = Vd($p, Kp);
      c > f && (h = d, c = f);
    }

    c = 1 / 0;

    for (var p = 0; 32 > p && !(qp > u); p++) {
      var g = h - u,
          v = h + u;
      Kp[0] = sr(t, i, r, g), Kp[1] = sr(e, n, a, g);
      var f = Vd(Kp, $p);
      if (g >= 0 && c > f) h = g, c = f;else {
        Qp[0] = sr(t, i, r, v), Qp[1] = sr(e, n, a, v);
        var m = Vd(Qp, $p);
        1 >= v && c > m ? (h = v, c = m) : u *= .5;
      }
    }

    return l && (l[0] = sr(t, i, r, h), l[1] = sr(e, n, a, h)), Yp(c);
  }

  function fr(t, e, i, n, r, a) {
    r[0] = Jp(t, i), r[1] = Jp(e, n), a[0] = tg(t, i), a[1] = tg(e, n);
  }

  function pr(t, e, i, n, r, a, o, s, l, h) {
    var u,
        c = rr,
        d = er,
        f = c(t, i, r, o, sg);

    for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
      var p = d(t, i, r, o, sg[u]);
      l[0] = Jp(p, l[0]), h[0] = tg(p, h[0]);
    }

    for (f = c(e, n, a, s, lg), u = 0; f > u; u++) {
      var g = d(e, n, a, s, lg[u]);
      l[1] = Jp(g, l[1]), h[1] = tg(g, h[1]);
    }

    l[0] = Jp(t, l[0]), h[0] = tg(t, h[0]), l[0] = Jp(o, l[0]), h[0] = tg(o, h[0]), l[1] = Jp(e, l[1]), h[1] = tg(e, h[1]), l[1] = Jp(s, l[1]), h[1] = tg(s, h[1]);
  }

  function gr(t, e, i, n, r, a, o, s) {
    var l = ur,
        h = sr,
        u = tg(Jp(l(t, i, r), 1), 0),
        c = tg(Jp(l(e, n, a), 1), 0),
        d = h(t, i, r, u),
        f = h(e, n, a, c);
    o[0] = Jp(t, r, d), o[1] = Jp(e, a, f), s[0] = tg(t, r, d), s[1] = tg(e, a, f);
  }

  function vr(t, e, i, n, r, a, o, s, l) {
    var h = $,
        u = K,
        c = Math.abs(r - a);
    if (1e-4 > c % ng && c > 1e-4) return s[0] = t - i, s[1] = e - n, l[0] = t + i, void (l[1] = e + n);

    if (rg[0] = ig(r) * i + t, rg[1] = eg(r) * n + e, ag[0] = ig(a) * i + t, ag[1] = eg(a) * n + e, h(s, rg, ag), u(l, rg, ag), r %= ng, 0 > r && (r += ng), a %= ng, 0 > a && (a += ng), r > a && !o ? a += ng : a > r && o && (r += ng), o) {
      var d = a;
      a = r, r = d;
    }

    for (var f = 0; a > f; f += Math.PI / 2) {
      f > r && (og[0] = ig(f) * i + t, og[1] = eg(f) * n + e, h(s, og, s), u(l, og, l));
    }
  }

  function mr(t, e, i, n, r, a, o) {
    if (0 === r) return !1;
    var s = r,
        l = 0,
        h = t;
    if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;
    if (t === i) return Math.abs(a - t) <= s / 2;
    l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
    var u = l * a - o + h,
        c = u * u / (l * l + 1);
    return s / 2 * s / 2 >= c;
  }

  function yr(t, e, i, n, r, a, o, s, l, h, u) {
    if (0 === l) return !1;
    var c = l;
    if (u > e + c && u > n + c && u > a + c && u > s + c || e - c > u && n - c > u && a - c > u && s - c > u || h > t + c && h > i + c && h > r + c && h > o + c || t - c > h && i - c > h && r - c > h && o - c > h) return !1;
    var d = or(t, e, i, n, r, a, o, s, h, u, null);
    return c / 2 >= d;
  }

  function _r(t, e, i, n, r, a, o, s, l) {
    if (0 === o) return !1;
    var h = o;
    if (l > e + h && l > n + h && l > a + h || e - h > l && n - h > l && a - h > l || s > t + h && s > i + h && s > r + h || t - h > s && i - h > s && r - h > s) return !1;
    var u = dr(t, e, i, n, r, a, s, l, null);
    return h / 2 >= u;
  }

  function xr(t) {
    return t %= bg, 0 > t && (t += bg), t;
  }

  function wr(t, e, i, n, r, a, o, s, l) {
    if (0 === o) return !1;
    var h = o;
    s -= t, l -= e;
    var u = Math.sqrt(s * s + l * l);
    if (u - h > i || i > u + h) return !1;
    if (Math.abs(n - r) % Mg < 1e-4) return !0;

    if (a) {
      var c = n;
      n = xr(r), r = xr(c);
    } else n = xr(n), r = xr(r);

    n > r && (r += Mg);
    var d = Math.atan2(l, s);
    return 0 > d && (d += Mg), d >= n && r >= d || d + Mg >= n && r >= d + Mg;
  }

  function br(t, e, i, n, r, a) {
    if (a > e && a > n || e > a && n > a) return 0;
    if (n === e) return 0;
    var o = e > n ? 1 : -1,
        s = (a - e) / (n - e);
    (1 === s || 0 === s) && (o = e > n ? .5 : -.5);
    var l = s * (i - t) + t;
    return l === r ? 1 / 0 : l > r ? o : 0;
  }

  function Mr(t, e) {
    return Math.abs(t - e) < Cg;
  }

  function Sr() {
    var t = kg[0];
    kg[0] = kg[1], kg[1] = t;
  }

  function Tr(t, e, i, n, r, a, o, s, l, h) {
    if (h > e && h > n && h > a && h > s || e > h && n > h && a > h && s > h) return 0;
    var u = nr(e, n, a, s, h, Ig);
    if (0 === u) return 0;

    for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
      var v = Ig[g],
          m = 0 === v || 1 === v ? .5 : 1,
          y = er(t, i, r, o, v);
      l > y || (0 > p && (p = rr(e, n, a, s, kg), kg[1] < kg[0] && p > 1 && Sr(), c = er(e, n, a, s, kg[0]), p > 1 && (d = er(e, n, a, s, kg[1]))), f += 2 === p ? v < kg[0] ? e > c ? m : -m : v < kg[1] ? c > d ? m : -m : d > s ? m : -m : v < kg[0] ? e > c ? m : -m : c > s ? m : -m);
    }

    return f;
  }

  function Cr(t, e, i, n, r, a, o, s) {
    if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;
    var l = hr(e, n, a, s, Ig);
    if (0 === l) return 0;
    var h = ur(e, n, a);

    if (h >= 0 && 1 >= h) {
      for (var u = 0, c = sr(e, n, a, h), d = 0; l > d; d++) {
        var f = 0 === Ig[d] || 1 === Ig[d] ? .5 : 1,
            p = sr(t, i, r, Ig[d]);
        o > p || (u += Ig[d] < h ? e > c ? f : -f : c > a ? f : -f);
      }

      return u;
    }

    var f = 0 === Ig[0] || 1 === Ig[0] ? .5 : 1,
        p = sr(t, i, r, Ig[0]);
    return o > p ? 0 : e > a ? f : -f;
  }

  function Ir(t, e, i, n, r, a, o, s) {
    if (s -= e, s > i || -i > s) return 0;
    var l = Math.sqrt(i * i - s * s);
    Ig[0] = -l, Ig[1] = l;
    var h = Math.abs(n - r);
    if (1e-4 > h) return 0;

    if (1e-4 > h % Tg) {
      n = 0, r = Tg;
      var u = a ? 1 : -1;
      return o >= Ig[0] + t && o <= Ig[1] + t ? u : 0;
    }

    if (a) {
      var l = n;
      n = xr(r), r = xr(l);
    } else n = xr(n), r = xr(r);

    n > r && (r += Tg);

    for (var c = 0, d = 0; 2 > d; d++) {
      var f = Ig[d];

      if (f + t > o) {
        var p = Math.atan2(s, f),
            u = a ? 1 : -1;
        0 > p && (p = Tg + p), (p >= n && r >= p || p + Tg >= n && r >= p + Tg) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u);
      }
    }

    return c;
  }

  function kr(t, e, i, n, r) {
    for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
      var c = t[u++];

      switch (c === Sg.M && u > 1 && (i || (a += br(o, s, l, h, n, r))), 1 === u && (o = t[u], s = t[u + 1], l = o, h = s), c) {
        case Sg.M:
          l = t[u++], h = t[u++], o = l, s = h;
          break;

        case Sg.L:
          if (i) {
            if (mr(o, s, t[u], t[u + 1], e, n, r)) return !0;
          } else a += br(o, s, t[u], t[u + 1], n, r) || 0;

          o = t[u++], s = t[u++];
          break;

        case Sg.C:
          if (i) {
            if (yr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
          } else a += Tr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], n, r) || 0;

          o = t[u++], s = t[u++];
          break;

        case Sg.Q:
          if (i) {
            if (_r(o, s, t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
          } else a += Cr(o, s, t[u++], t[u++], t[u], t[u + 1], n, r) || 0;

          o = t[u++], s = t[u++];
          break;

        case Sg.A:
          var d = t[u++],
              f = t[u++],
              p = t[u++],
              g = t[u++],
              v = t[u++],
              m = t[u++];
          u += 1;

          var y = 1 - t[u++],
              _ = Math.cos(v) * p + d,
              x = Math.sin(v) * g + f;

          u > 1 ? a += br(o, s, _, x, n, r) : (l = _, h = x);
          var w = (n - d) * g / p + d;

          if (i) {
            if (wr(d, f, g, v, v + m, y, e, w, r)) return !0;
          } else a += Ir(d, f, g, v, v + m, y, w, r);

          o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
          break;

        case Sg.R:
          l = o = t[u++], h = s = t[u++];

          var b = t[u++],
              M = t[u++],
              _ = l + b,
              x = h + M;

          if (i) {
            if (mr(l, h, _, h, e, n, r) || mr(_, h, _, x, e, n, r) || mr(_, x, l, x, e, n, r) || mr(l, x, l, h, e, n, r)) return !0;
          } else a += br(_, h, _, x, n, r), a += br(l, x, l, h, n, r);

          break;

        case Sg.Z:
          if (i) {
            if (mr(o, s, l, h, e, n, r)) return !0;
          } else a += br(o, s, l, h, n, r);

          o = l, s = h;
      }
    }

    return i || Mr(s, h) || (a += br(o, s, l, h, n, r) || 0), 0 !== a;
  }

  function Dr(t, e, i) {
    return kr(t, 0, !1, e, i);
  }

  function Ar(t, e, i, n) {
    return kr(t, e, !0, i, n);
  }

  function Pr(t) {
    ln.call(this, t), this.path = null;
  }

  function Lr(t, e, i, n, r, a, o, s, l, h, u) {
    var c = l * (Hg / 180),
        d = Ng(c) * (t - i) / 2 + Fg(c) * (e - n) / 2,
        f = -1 * Fg(c) * (t - i) / 2 + Ng(c) * (e - n) / 2,
        p = d * d / (o * o) + f * f / (s * s);
    p > 1 && (o *= Rg(p), s *= Rg(p));

    var g = (r === a ? -1 : 1) * Rg((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
        v = g * o * f / s,
        m = g * -s * d / o,
        y = (t + i) / 2 + Ng(c) * v - Fg(c) * m,
        _ = (e + n) / 2 + Fg(c) * v + Ng(c) * m,
        x = Gg([1, 0], [(d - v) / o, (f - m) / s]),
        w = [(d - v) / o, (f - m) / s],
        b = [(-1 * d - v) / o, (-1 * f - m) / s],
        M = Gg(w, b);

    Vg(w, b) <= -1 && (M = Hg), Vg(w, b) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * Hg), 1 === a && 0 > M && (M += 2 * Hg), u.addData(h, y, _, o, s, x, M, c, a);
  }

  function Or(t) {
    if (!t) return new wg();

    for (var e, i = 0, n = 0, r = i, a = n, o = new wg(), s = wg.CMD, l = t.match(Xg), h = 0; h < l.length; h++) {
      for (var u, c = l[h], d = c.charAt(0), f = c.match(Yg) || [], p = f.length, g = 0; p > g; g++) {
        f[g] = parseFloat(f[g]);
      }

      for (var v = 0; p > v;) {
        var m,
            y,
            _,
            x,
            w,
            b,
            M,
            S = i,
            T = n;

        switch (d) {
          case "l":
            i += f[v++], n += f[v++], u = s.L, o.addData(u, i, n);
            break;

          case "L":
            i = f[v++], n = f[v++], u = s.L, o.addData(u, i, n);
            break;

          case "m":
            i += f[v++], n += f[v++], u = s.M, o.addData(u, i, n), r = i, a = n, d = "l";
            break;

          case "M":
            i = f[v++], n = f[v++], u = s.M, o.addData(u, i, n), r = i, a = n, d = "L";
            break;

          case "h":
            i += f[v++], u = s.L, o.addData(u, i, n);
            break;

          case "H":
            i = f[v++], u = s.L, o.addData(u, i, n);
            break;

          case "v":
            n += f[v++], u = s.L, o.addData(u, i, n);
            break;

          case "V":
            n = f[v++], u = s.L, o.addData(u, i, n);
            break;

          case "C":
            u = s.C, o.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), i = f[v - 2], n = f[v - 1];
            break;

          case "c":
            u = s.C, o.addData(u, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n), i += f[v - 2], n += f[v - 1];
            break;

          case "S":
            m = i, y = n;
            var C = o.len(),
                I = o.data;
            e === s.C && (m += i - I[C - 4], y += n - I[C - 3]), u = s.C, S = f[v++], T = f[v++], i = f[v++], n = f[v++], o.addData(u, m, y, S, T, i, n);
            break;

          case "s":
            m = i, y = n;
            var C = o.len(),
                I = o.data;
            e === s.C && (m += i - I[C - 4], y += n - I[C - 3]), u = s.C, S = i + f[v++], T = n + f[v++], i += f[v++], n += f[v++], o.addData(u, m, y, S, T, i, n);
            break;

          case "Q":
            S = f[v++], T = f[v++], i = f[v++], n = f[v++], u = s.Q, o.addData(u, S, T, i, n);
            break;

          case "q":
            S = f[v++] + i, T = f[v++] + n, i += f[v++], n += f[v++], u = s.Q, o.addData(u, S, T, i, n);
            break;

          case "T":
            m = i, y = n;
            var C = o.len(),
                I = o.data;
            e === s.Q && (m += i - I[C - 4], y += n - I[C - 3]), i = f[v++], n = f[v++], u = s.Q, o.addData(u, m, y, i, n);
            break;

          case "t":
            m = i, y = n;
            var C = o.len(),
                I = o.data;
            e === s.Q && (m += i - I[C - 4], y += n - I[C - 3]), i += f[v++], n += f[v++], u = s.Q, o.addData(u, m, y, i, n);
            break;

          case "A":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], M = f[v++], S = i, T = n, i = f[v++], n = f[v++], u = s.A, Lr(S, T, i, n, b, M, _, x, w, u, o);
            break;

          case "a":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], M = f[v++], S = i, T = n, i += f[v++], n += f[v++], u = s.A, Lr(S, T, i, n, b, M, _, x, w, u, o);
        }
      }

      ("z" === d || "Z" === d) && (u = s.Z, o.addData(u), i = r, n = a), e = u;
    }

    return o.toStatic(), o;
  }

  function Br(t, e) {
    var i = Or(t);
    return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(i.data);
        var e = t.getContext();
        e && t.rebuildPath(e);
      } else {
        var e = t;
        i.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      zg(i, t), this.dirty(!0);
    }, e;
  }

  function Er(t, e) {
    return new Pr(Br(t, e));
  }

  function zr(t, e) {
    return Pr.extend(Br(t, e));
  }

  function Rr(t, e) {
    for (var i = [], n = t.length, r = 0; n > r; r++) {
      var a = t[r];
      a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path);
    }

    var o = new Pr(e);
    return o.createPathProxy(), o.buildPath = function (t) {
      t.appendPath(i);
      var e = t.getContext();
      e && t.rebuildPath(e);
    }, o;
  }

  function Fr(t, e, i, n, r, a, o) {
    var s = .5 * (i - t),
        l = .5 * (n - e);
    return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
  }

  function Nr(t, e, i) {
    var n = e.points,
        r = e.smooth;

    if (n && n.length >= 2) {
      if (r && "spline" !== r) {
        var a = Jg(n, r, i, e.smoothConstraint);
        t.moveTo(n[0][0], n[0][1]);

        for (var o = n.length, s = 0; (i ? o : o - 1) > s; s++) {
          var l = a[2 * s],
              h = a[2 * s + 1],
              u = n[(s + 1) % o];
          t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
        }
      } else {
        "spline" === r && (n = Qg(n, i)), t.moveTo(n[0][0], n[0][1]);

        for (var s = 1, c = n.length; c > s; s++) {
          t.lineTo(n[s][0], n[s][1]);
        }
      }

      i && t.closePath();
    }
  }

  function Hr(t, e, i) {
    if (e) {
      var n = e.x1,
          r = e.x2,
          a = e.y1,
          o = e.y2;
      t.x1 = n, t.x2 = r, t.y1 = a, t.y2 = o;
      var s = i && i.lineWidth;
      s && (iv(2 * n) === iv(2 * r) && (t.x1 = t.x2 = Vr(n, s, !0)), iv(2 * a) === iv(2 * o) && (t.y1 = t.y2 = Vr(a, s, !0)));
    }
  }

  function Wr(t, e, i) {
    if (e) {
      var n = e.x,
          r = e.y,
          a = e.width,
          o = e.height;
      t.x = n, t.y = r, t.width = a, t.height = o;
      var s = i && i.lineWidth;
      s && (t.x = Vr(n, s, !0), t.y = Vr(r, s, !0), t.width = Math.max(Vr(n + a, s, !1) - t.x, 0 === a ? 0 : 1), t.height = Math.max(Vr(r + o, s, !1) - t.y, 0 === o ? 0 : 1));
    }
  }

  function Vr(t, e, i) {
    if (!e) return t;
    var n = iv(2 * t);
    return (n + iv(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2;
  }

  function Gr(t, e, i) {
    var n = t.cpx2,
        r = t.cpy2;
    return null === n || null === r ? [(i ? ir : er)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? ir : er)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? lr : sr)(t.x1, t.cpx1, t.x2, e), (i ? lr : sr)(t.y1, t.cpy1, t.y2, e)];
  }

  function Xr(t) {
    ln.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;
  }

  function Yr(t) {
    return Pr.extend(t);
  }

  function Ur(t, e) {
    return zr(t, e);
  }

  function qr(t, e) {
    Sv[t] = e;
  }

  function jr(t) {
    return Sv.hasOwnProperty(t) ? Sv[t] : void 0;
  }

  function Zr(t, e, i, n) {
    var r = Er(t, e);
    return i && ("center" === n && (i = Kr(i, r.getBoundingRect())), Qr(r, i)), r;
  }

  function $r(t, e, i) {
    var n = new hn({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function onload(t) {
        if ("center" === i) {
          var r = {
            width: t.width,
            height: t.height
          };
          n.setStyle(Kr(e, r));
        }
      }
    });
    return n;
  }

  function Kr(t, e) {
    var i,
        n = e.width / e.height,
        r = t.height * n;
    r <= t.width ? i = t.height : (r = t.width, i = r / n);
    var a = t.x + t.width / 2,
        o = t.y + t.height / 2;
    return {
      x: a - r / 2,
      y: o - i / 2,
      width: r,
      height: i
    };
  }

  function Qr(t, e) {
    if (t.applyTransform) {
      var i = t.getBoundingRect(),
          n = i.calculateTransform(e);
      t.applyTransform(n);
    }
  }

  function Jr(t) {
    return Hr(t.shape, t.shape, t.style), t;
  }

  function ta(t) {
    return Wr(t.shape, t.shape, t.style), t;
  }

  function ea(t) {
    return null != t && "none" !== t;
  }

  function ia(t) {
    if ("string" != typeof t) return t;
    var e = Iv.get(t);
    return e || (e = Ve(t, -.1), 1e4 > kv && (Iv.set(t, e), kv++)), e;
  }

  function na(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = !1;
      var e = t.__hoverStl;
      if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);
      var i = t.__cachedNormalStl = {};
      t.__cachedNormalZ2 = t.z2;
      var n = t.style;

      for (var r in e) {
        null != e[r] && (i[r] = n[r]);
      }

      i.fill = n.fill, i.stroke = n.stroke;
    }
  }

  function ra(t) {
    var e = t.__hoverStl;

    if (e && !t.__highlighted) {
      var i = t.__zr,
          n = t.useHoverLayer && i && "canvas" === i.painter.type;

      if (t.__highlighted = n ? "layer" : "plain", !(t.isGroup || !i && t.useHoverLayer)) {
        var r = t,
            a = t.style;
        n && (r = i.addHover(t), a = r.style), Ia(a), n || na(r), a.extendFrom(e), aa(a, e, "fill"), aa(a, e, "stroke"), Ca(a), n || (t.dirty(!1), t.z2 += yv);
      }
    }
  }

  function aa(t, e, i) {
    !ea(e[i]) && ea(t[i]) && (t[i] = ia(t[i]));
  }

  function oa(t) {
    var e = t.__highlighted;
    if (e && (t.__highlighted = !1, !t.isGroup)) if ("layer" === e) t.__zr && t.__zr.removeHover(t);else {
      var i = t.style,
          n = t.__cachedNormalStl;
      n && (Ia(i), t.setStyle(n), Ca(i));
      var r = t.__cachedNormalZ2;
      null != r && t.z2 - r === yv && (t.z2 = r);
    }
  }

  function sa(t, e, i) {
    var n,
        r = wv,
        a = wv;
    t.__highlighted && (r = xv, n = !0), e(t, i), t.__highlighted && (a = xv, n = !0), t.isGroup && t.traverse(function (t) {
      !t.isGroup && e(t, i);
    }), n && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a);
  }

  function la(t, e) {
    e = t.__hoverStl = e !== !1 && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, oa(t), ra(t));
  }

  function ha(t) {
    !fa(this, t) && !this.__highByOuter && sa(this, ra);
  }

  function ua(t) {
    !fa(this, t) && !this.__highByOuter && sa(this, oa);
  }

  function ca(t) {
    this.__highByOuter |= 1 << (t || 0), sa(this, ra);
  }

  function da(t) {
    !(this.__highByOuter &= ~(1 << (t || 0))) && sa(this, oa);
  }

  function fa(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }

  function pa(t, e) {
    ga(t, !0), sa(t, la, e);
  }

  function ga(t, e) {
    var i = e === !1;

    if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !i || t.__highDownDispatcher) {
      var n = i ? "off" : "on";
      t[n]("mouseover", ha)[n]("mouseout", ua), t[n]("emphasis", ca)[n]("normal", da), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !i;
    }
  }

  function va(t) {
    return !(!t || !t.__highDownDispatcher);
  }

  function ma(t) {
    var e = Mv[t];
    return null == e && 32 >= bv && (e = Mv[t] = bv++), e;
  }

  function ya(t, e, i, n, r, a, o) {
    r = r || mv;
    var s,
        l = r.labelFetcher,
        h = r.labelDataIndex,
        u = r.labelDimIndex,
        c = r.labelProp,
        d = i.getShallow("show"),
        f = n.getShallow("show");
    (d || f) && (l && (s = l.getFormattedLabel(h, "normal", null, u, c)), null == s && (s = x(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
    var p = d ? s : null,
        g = f ? k(l ? l.getFormattedLabel(h, "emphasis", null, u, c) : null, s) : null;
    (null != p || null != g) && (xa(t, i, a, r), xa(e, n, o, r, !0)), t.text = p, e.text = g;
  }

  function _a(t, e, i) {
    var n = t.style;
    e && (Ia(n), t.setStyle(e), Ca(n)), n = t.__hoverStl, i && n && (Ia(n), o(n, i), Ca(n));
  }

  function xa(t, e, i, n, r) {
    return ba(t, e, n, r), i && o(t, i), t;
  }

  function wa(t, e, i) {
    var n,
        r = {
      isRectText: !0
    };
    i === !1 ? n = !0 : r.autoColor = i, ba(t, e, r, n);
  }

  function ba(t, e, i, n) {
    if (i = i || mv, i.isRectText) {
      var r;
      i.getTextPosition ? r = i.getTextPosition(e, n) : (r = e.getShallow("position") || (n ? null : "inside"), "outside" === r && (r = "top")), t.textPosition = r, t.textOffset = e.getShallow("offset");
      var a = e.getShallow("rotate");
      null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = k(e.getShallow("distance"), n ? null : 5);
    }

    var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        h = Ma(e);

    if (h) {
      o = {};

      for (var u in h) {
        if (h.hasOwnProperty(u)) {
          var c = e.getModel(["rich", u]);
          Sa(o[u] = {}, c, l, i, n);
        }
      }
    }

    return t.rich = o, Sa(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t;
  }

  function Ma(t) {
    for (var e; t && t !== t.ecModel;) {
      var i = (t.option || mv).rich;

      if (i) {
        e = e || {};

        for (var n in i) {
          i.hasOwnProperty(n) && (e[n] = 1);
        }
      }

      t = t.parentModel;
    }

    return e;
  }

  function Sa(t, e, i, n, r, a) {
    i = !r && i || mv, t.textFill = Ta(e.getShallow("color"), n) || i.color, t.textStroke = Ta(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = k(e.getShallow("textBorderWidth"), i.textBorderWidth), r || (a && (t.insideRollbackOpt = n, Ca(t)), null == t.textFill && (t.textFill = n.autoColor)), t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = Ta(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ta(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY;
  }

  function Ta(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }

  function Ca(t) {
    var e,
        i = t.textPosition,
        n = t.insideRollbackOpt;

    if (n && null == t.textFill) {
      var r = n.autoColor,
          a = n.isRectText,
          o = n.useInsideStyle,
          s = o !== !1 && (o === !0 || a && i && "string" == typeof i && i.indexOf("inside") >= 0),
          l = !s && null != r;
      (s || l) && (e = {
        textFill: t.textFill,
        textStroke: t.textStroke,
        textStrokeWidth: t.textStrokeWidth
      }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = r);
    }

    t.insideRollback = e;
  }

  function Ia(t) {
    var e = t.insideRollback;
    e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);
  }

  function ka(t, e) {
    var i = e && e.getModel("textStyle");
    return O([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "));
  }

  function Da(t, e, i, n, r, a) {
    "function" == typeof r && (a = r, r = null);
    var o = n && n.isAnimationEnabled();

    if (o) {
      var s = t ? "Update" : "",
          l = n.getShallow("animationDuration" + s),
          h = n.getShallow("animationEasing" + s),
          u = n.getShallow("animationDelay" + s);
      "function" == typeof u && (u = u(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(i, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(i), a && a());
    } else e.stopAnimation(), e.attr(i), a && a();
  }

  function Aa(t, e, i, n, r) {
    Da(!0, t, e, i, n, r);
  }

  function Pa(t, e, i, n, r) {
    Da(!1, t, e, i, n, r);
  }

  function La(t, e) {
    for (var i = Me([]); t && t !== e;) {
      Te(i, t.getLocalTransform(), i), t = t.parent;
    }

    return i;
  }

  function Oa(t, e, i) {
    return e && !d(e) && (e = sf.getLocalTransform(e)), i && (e = De([], e)), Z([], t, e);
  }

  function Ba(t, e, i) {
    var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return a = Oa(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }

  function Ea(t, e, i) {
    function n(t) {
      var e = {};
      return t.traverse(function (t) {
        !t.isGroup && t.anid && (e[t.anid] = t);
      }), e;
    }

    function r(t) {
      var e = {
        position: H(t.position),
        rotation: t.rotation
      };
      return t.shape && (e.shape = o({}, t.shape)), e;
    }

    if (t && e) {
      var a = n(t);
      e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];

          if (e) {
            var n = r(t);
            t.attr(r(e)), Aa(t, n, i, t.dataIndex);
          }
        }
      });
    }
  }

  function za(t, e) {
    return p(t, function (t) {
      var i = t[0];
      i = gv(i, e.x), i = vv(i, e.x + e.width);
      var n = t[1];
      return n = gv(n, e.y), n = vv(n, e.y + e.height), [i, n];
    });
  }

  function Ra(t, e) {
    var i = gv(t.x, e.x),
        n = vv(t.x + t.width, e.x + e.width),
        r = gv(t.y, e.y),
        a = vv(t.y + t.height, e.y + e.height);
    return n >= i && a >= r ? {
      x: i,
      y: r,
      width: n - i,
      height: a - r
    } : void 0;
  }

  function Fa(t, e, i) {
    e = o({
      rectHover: !0
    }, e);
    var n = e.style = {
      strokeNoScale: !0
    };
    return i = i || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (n.image = t.slice(8), s(n, i), new hn(e)) : Zr(t.replace("path://", ""), e, i, "center") : void 0;
  }

  function Na(t, e, i, n, r) {
    for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
      var s = r[a];
      if (Ha(t, e, i, n, s[0], s[1], o[0], o[1])) return !0;
      o = s;
    }
  }

  function Ha(t, e, i, n, r, a, o, s) {
    var l = i - t,
        h = n - e,
        u = o - r,
        c = s - a,
        d = Wa(u, c, l, h);
    if (Va(d)) return !1;
    var f = t - r,
        p = e - a,
        g = Wa(f, p, l, h) / d;
    if (0 > g || g > 1) return !1;
    var v = Wa(f, p, u, c) / d;
    return 0 > v || v > 1 ? !1 : !0;
  }

  function Wa(t, e, i, n) {
    return t * n - i * e;
  }

  function Va(t) {
    return 1e-6 >= t && t >= -1e-6;
  }

  function Ga(t, e, i) {
    this.parentModel = e, this.ecModel = i, this.option = t;
  }

  function Xa(t, e, i) {
    for (var n = 0; n < e.length && (!e[n] || (t = t && "object" == _typeof(t) ? t[e[n]] : null, null != t)); n++) {
      ;
    }

    return null == t && i && (t = i.get(e)), t;
  }

  function Ya(t, e) {
    var i = Ev(t).getParent;
    return i ? i.call(t, e) : t.parentModel;
  }

  function Ua(t) {
    return [t || "", zv++, Math.random().toFixed(5)].join("_");
  }

  function qa(t) {
    var e = {};
    return t.registerSubTypeDefaulter = function (t, i) {
      t = Un(t), e[t.main] = i;
    }, t.determineSubType = function (i, n) {
      var r = n.type;

      if (!r) {
        var a = Un(i).main;
        t.hasSubTypes(i) && e[a] && (r = e[a](n));
      }

      return r;
    }, t;
  }

  function ja(t, e) {
    function i(t) {
      var i = {},
          a = [];
      return f(t, function (o) {
        var s = n(i, o),
            l = s.originalDeps = e(o),
            u = r(l, t);
        s.entryCount = u.length, 0 === s.entryCount && a.push(o), f(u, function (t) {
          h(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = n(i, t);
          h(e.successor, t) < 0 && e.successor.push(o);
        });
      }), {
        graph: i,
        noEntryList: a
      };
    }

    function n(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e];
    }

    function r(t, e) {
      var i = [];
      return f(t, function (t) {
        h(e, t) >= 0 && i.push(t);
      }), i;
    }

    t.topologicalTravel = function (t, e, n, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && h.push(t);
      }

      function o(t) {
        u[t] = !0, a(t);
      }

      if (t.length) {
        var s = i(e),
            l = s.graph,
            h = s.noEntryList,
            u = {};

        for (f(t, function (t) {
          u[t] = !0;
        }); h.length;) {
          var c = h.pop(),
              d = l[c],
              p = !!u[c];
          p && (n.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a);
        }

        f(u, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }

  function Za(t) {
    return t.replace(/^\s+|\s+$/g, "");
  }

  function $a(t, e, i, n) {
    var r = e[1] - e[0],
        a = i[1] - i[0];
    if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
    if (n) {
      if (r > 0) {
        if (t <= e[0]) return i[0];
        if (t >= e[1]) return i[1];
      } else {
        if (t >= e[0]) return i[0];
        if (t <= e[1]) return i[1];
      }
    } else {
      if (t === e[0]) return i[0];
      if (t === e[1]) return i[1];
    }
    return (t - e[0]) / r * a + i[0];
  }

  function Ka(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;

      case "left":
      case "top":
        t = "0%";
        break;

      case "right":
      case "bottom":
        t = "100%";
    }

    return "string" == typeof t ? Za(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t;
  }

  function Qa(t, e, i) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t;
  }

  function Ja(t) {
    var e = t.toString(),
        i = e.indexOf("e");

    if (i > 0) {
      var n = +e.slice(i + 1);
      return 0 > n ? -n : 0;
    }

    var r = e.indexOf(".");
    return 0 > r ? 0 : e.length - 1 - r;
  }

  function to(t, e) {
    var i = Math.log,
        n = Math.LN10,
        r = Math.floor(i(t[1] - t[0]) / n),
        a = Math.round(i(Math.abs(e[1] - e[0])) / n),
        o = Math.min(Math.max(-r + a, 0), 20);
    return isFinite(o) ? o : 20;
  }

  function eo(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e;
  }

  function io(t) {
    return t > -Rv && Rv > t;
  }

  function no(t) {
    if (t instanceof Date) return t;

    if ("string" == typeof t) {
      var e = Fv.exec(t);
      if (!e) return new Date(0 / 0);

      if (e[8]) {
        var i = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }

      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }

    return new Date(null == t ? 0 / 0 : Math.round(t));
  }

  function ro(t) {
    return Math.pow(10, ao(t));
  }

  function ao(t) {
    if (0 === t) return 0;
    var e = Math.floor(Math.log(t) / Math.LN10);
    return t / Math.pow(10, e) >= 10 && e++, e;
  }

  function oo(t, e) {
    var i,
        n = ao(t),
        r = Math.pow(10, n),
        a = t / r;
    return i = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = i * r, n >= -20 ? +t.toFixed(0 > n ? -n : 0) : t;
  }

  function so(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }

  function lo(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
  }

  function ho(t) {
    return null == t ? "" : (t + "").replace(Hv, function (t, e) {
      return Wv[e];
    });
  }

  function uo(t, e, i) {
    _(e) || (e = [e]);
    var n = e.length;
    if (!n) return "";

    for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Vv[a];
      t = t.replace(Gv(o), Gv(o, 0));
    }

    for (var s = 0; n > s; s++) {
      for (var l = 0; l < r.length; l++) {
        var h = e[s][r[l]];
        t = t.replace(Gv(Vv[l], s), i ? ho(h) : h);
      }
    }

    return t;
  }

  function co(t, e) {
    t = w(t) ? {
      color: t,
      extraCssText: e
    } : t || {};
    var i = t.color,
        n = t.type,
        e = t.extraCssText,
        r = t.renderMode || "html",
        a = t.markerId || "X";
    return i ? "html" === r ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + ho(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + ho(i) + ";" + (e || "") + '"></span>' : {
      renderMode: r,
      content: "{marker" + a + "|}  ",
      style: {
        color: i
      }
    } : "";
  }

  function fo(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }

  function po(t, e, i) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var n = no(e),
        r = i ? "UTC" : "",
        a = n["get" + r + "FullYear"](),
        o = n["get" + r + "Month"]() + 1,
        s = n["get" + r + "Date"](),
        l = n["get" + r + "Hours"](),
        h = n["get" + r + "Minutes"](),
        u = n["get" + r + "Seconds"](),
        c = n["get" + r + "Milliseconds"]();
    return t = t.replace("MM", fo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", fo(s, 2)).replace("d", s).replace("hh", fo(l, 2)).replace("h", l).replace("mm", fo(h, 2)).replace("m", h).replace("ss", fo(u, 2)).replace("s", u).replace("SSS", fo(c, 3));
  }

  function go(t, e, i, n, r) {
    var a = 0,
        o = 0;
    null == n && (n = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function (l, h) {
      var u,
          c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(h + 1),
          g = p && p.getBoundingRect();

      if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);
        u = a + v, u > n || l.newline ? (a = 0, u = v, o += s + i, s = f.height) : s = Math.max(s, f.height);
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);
        c = o + m, c > r || l.newline ? (a += s + i, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);
      }

      l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + i : o = c + i);
    });
  }

  function vo(t, e, i) {
    i = Nv(i || 0);
    var n = e.width,
        r = e.height,
        a = Ka(t.left, n),
        o = Ka(t.top, r),
        s = Ka(t.right, n),
        l = Ka(t.bottom, r),
        h = Ka(t.width, n),
        u = Ka(t.height, r),
        c = i[2] + i[0],
        d = i[1] + i[3],
        f = t.aspect;

    switch (isNaN(h) && (h = n - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > n / r ? h = .8 * n : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = n - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
      case "center":
        a = n / 2 - h / 2 - i[3];
        break;

      case "right":
        a = n - h - d;
    }

    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        o = r / 2 - u / 2 - i[0];
        break;

      case "bottom":
        o = r - u - c;
    }

    a = a || 0, o = o || 0, isNaN(h) && (h = n - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
    var p = new si(a + i[3], o + i[0], h, u);
    return p.margin = i, p;
  }

  function mo(t, e, i) {
    function n(i, n) {
      var o = {},
          l = 0,
          h = {},
          u = 0,
          c = 2;
      if (Yv(i, function (e) {
        h[e] = t[e];
      }), Yv(i, function (t) {
        r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;
      }), s[n]) return a(e, i[1]) ? h[i[2]] = null : a(e, i[2]) && (h[i[1]] = null), h;

      if (u !== c && l) {
        if (l >= c) return o;

        for (var d = 0; d < i.length; d++) {
          var f = i[d];

          if (!r(o, f) && r(t, f)) {
            o[f] = t[f];
            break;
          }
        }

        return o;
      }

      return h;
    }

    function r(t, e) {
      return t.hasOwnProperty(e);
    }

    function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }

    function o(t, e, i) {
      Yv(t, function (t) {
        e[t] = i[t];
      });
    }

    !b(i) && (i = {});
    var s = i.ignoreSize;
    !_(s) && (s = [s, s]);
    var l = n(qv[0], 0),
        h = n(qv[1], 1);
    o(qv[0], t, l), o(qv[1], t, h);
  }

  function yo(t) {
    return _o({}, t);
  }

  function _o(t, e) {
    return e && t && Yv(Uv, function (i) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }), t;
  }

  function xo(t) {
    var e = [];
    return f($v.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = p(e, function (t) {
      return Un(t).main;
    }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }

  function wo(t, e) {
    for (var i = t.length, n = 0; i > n; n++) {
      if (t[n].length > e) return t[n];
    }

    return t[i - 1];
  }

  function bo(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === rm ? {} : []), this.sourceFormat = t.sourceFormat || am, this.seriesLayoutBy = t.seriesLayoutBy || sm, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }

  function Mo(t) {
    var e = t.option.source,
        i = am;
    if (S(e)) i = om;else if (_(e)) {
      0 === e.length && (i = im);

      for (var n = 0, r = e.length; r > n; n++) {
        var a = e[n];

        if (null != a) {
          if (_(a)) {
            i = im;
            break;
          }

          if (b(a)) {
            i = nm;
            break;
          }
        }
      }
    } else if (b(e)) {
      for (var o in e) {
        if (e.hasOwnProperty(o) && d(e[o])) {
          i = rm;
          break;
        }
      }
    } else if (null != e) throw new Error("Invalid data");
    um(t).sourceFormat = i;
  }

  function So(t) {
    return um(t).source;
  }

  function To(t) {
    um(t).datasetMap = R();
  }

  function Co(t) {
    var e = t.option,
        i = e.data,
        n = S(i) ? om : em,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = Lo(t);

    if (l) {
      var h = l.option;
      i = h.source, n = um(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions;
    }

    var u = Io(i, n, a, o, s);
    um(t).source = new bo({
      data: i,
      fromDataset: r,
      seriesLayoutBy: a,
      sourceFormat: n,
      dimensionsDefine: u.dimensionsDefine,
      startIndex: u.startIndex,
      dimensionsDetectCount: u.dimensionsDetectCount,
      encodeDefine: e.encode
    });
  }

  function Io(t, e, i, n, r) {
    if (!t) return {
      dimensionsDefine: ko(r)
    };
    var a, o;
    if (e === im) "auto" === n || null == n ? Do(function (t) {
      null != t && "-" !== t && (w(t) ? null == o && (o = 1) : o = 0);
    }, i, t, 10) : o = n ? 1 : 0, r || 1 !== o || (r = [], Do(function (t, e) {
      r[e] = null != t ? t : "";
    }, i, t)), a = r ? r.length : i === lm ? t.length : t[0] ? t[0].length : null;else if (e === nm) r || (r = Ao(t));else if (e === rm) r || (r = [], f(t, function (t, e) {
      r.push(e);
    }));else if (e === em) {
      var s = On(t[0]);
      a = _(s) && s.length || 1;
    } else e === om && bd && L(!!r, "dimensions must be given if data is TypedArray.");
    return {
      startIndex: o,
      dimensionsDefine: ko(r),
      dimensionsDetectCount: a
    };
  }

  function ko(t) {
    if (t) {
      var e = R();
      return p(t, function (t) {
        if (t = o({}, b(t) ? t : {
          name: t
        }), null == t.name) return t;
        t.name += "", null == t.displayName && (t.displayName = t.name);
        var i = e.get(t.name);
        return i ? t.name += "-" + i.count++ : e.set(t.name, {
          count: 1
        }), t;
      });
    }
  }

  function Do(t, e, i, n) {
    if (null == n && (n = 1 / 0), e === lm) for (var r = 0; r < i.length && n > r; r++) {
      t(i[r] ? i[r][0] : null, r);
    } else for (var a = i[0] || [], r = 0; r < a.length && n > r; r++) {
      t(a[r], r);
    }
  }

  function Ao(t) {
    for (var e, i = 0; i < t.length && !(e = t[i++]);) {
      ;
    }

    if (e) {
      var n = [];
      return f(e, function (t, e) {
        n.push(e);
      }), n;
    }
  }

  function Po(t, e, i) {
    function n(t, e, i) {
      for (var n = 0; i > n; n++) {
        t.push(e + n);
      }
    }

    function r(t) {
      var e = t.dimsDef;
      return e ? e.length : 1;
    }

    var a = {},
        o = Lo(e);
    if (!o || !t) return a;
    var s,
        l,
        h = [],
        u = [],
        c = e.ecModel,
        d = um(c).datasetMap,
        p = o.uid + "_" + i.seriesLayoutBy;
    t = t.slice(), f(t, function (e, i) {
      !b(e) && (t[i] = {
        name: e
      }), "ordinal" === e.type && null == s && (s = i, l = r(t[i])), a[e.name] = [];
    });
    var g = d.get(p) || d.set(p, {
      categoryWayDim: l,
      valueWayDim: 0
    });
    return f(t, function (t, e) {
      var i = t.name,
          o = r(t);

      if (null == s) {
        var l = g.valueWayDim;
        n(a[i], l, o), n(u, l, o), g.valueWayDim += o;
      } else if (s === e) n(a[i], 0, o), n(h, 0, o);else {
        var l = g.categoryWayDim;
        n(a[i], l, o), n(u, l, o), g.categoryWayDim += o;
      }
    }), h.length && (a.itemName = h), u.length && (a.seriesName = u), a;
  }

  function Lo(t) {
    var e = t.option,
        i = e.data;
    return i ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }

  function Oo(t, e) {
    return Bo(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }

  function Bo(t, e, i, n, r, a) {
    function o(t) {
      var e = w(t);
      return null != t && isFinite(t) && "" !== t ? e ? hm.Might : hm.Not : e && "-" !== t ? hm.Must : void 0;
    }

    var s,
        l = 5;
    if (S(t)) return hm.Not;
    var h, u;

    if (n) {
      var c = n[a];
      b(c) ? (h = c.name, u = c.type) : w(c) && (h = c);
    }

    if (null != u) return "ordinal" === u ? hm.Must : hm.Not;
    if (e === im) {
      if (i === lm) {
        for (var d = t[a], f = 0; f < (d || []).length && l > f; f++) {
          if (null != (s = o(d[r + f]))) return s;
        }
      } else for (var f = 0; f < t.length && l > f; f++) {
        var p = t[r + f];
        if (p && null != (s = o(p[a]))) return s;
      }
    } else if (e === nm) {
      if (!h) return hm.Not;

      for (var f = 0; f < t.length && l > f; f++) {
        var g = t[f];
        if (g && null != (s = o(g[h]))) return s;
      }
    } else if (e === rm) {
      if (!h) return hm.Not;
      var d = t[h];
      if (!d || S(d)) return hm.Not;

      for (var f = 0; f < d.length && l > f; f++) {
        if (null != (s = o(d[f]))) return s;
      }
    } else if (e === em) for (var f = 0; f < t.length && l > f; f++) {
      var g = t[f],
          v = On(g);
      if (!_(v)) return hm.Not;
      if (null != (s = o(v[a]))) return s;
    }
    return hm.Not;
  }

  function Eo(t, e) {
    if (e) {
      var i = e.seiresIndex,
          n = e.seriesId,
          r = e.seriesName;
      return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r;
    }
  }

  function zo(t, e) {
    var i = t.color && !t.colorLayer;
    f(e, function (e, a) {
      "colorLayer" === a && i || $v.hasClass(a) || ("object" == _typeof(e) ? t[a] = t[a] ? r(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e));
    });
  }

  function Ro(t) {
    t = t, this.option = {}, this.option[cm] = 1, this._componentsMap = R({
      series: []
    }), this._seriesIndices, this._seriesIndicesMap, zo(t, this._theme.option), r(t, Qv, !1), this.mergeOption(t);
  }

  function Fo(t, e) {
    _(e) || (e = e ? [e] : []);
    var i = {};
    return f(e, function (e) {
      i[e] = (t.get(e) || []).slice();
    }), i;
  }

  function No(t, e, i) {
    var n = e.type ? e.type : i ? i.subType : $v.determineSubType(t, e);
    return n;
  }

  function Ho(t, e) {
    t._seriesIndicesMap = R(t._seriesIndices = p(e, function (t) {
      return t.componentIndex;
    }) || []);
  }

  function Wo(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }

  function Vo(t) {
    if (bd && !t._seriesIndices) throw new Error("Option should contains series.");
  }

  function Go(t) {
    f(fm, function (e) {
      this[e] = m(t[e], t);
    }, this);
  }

  function Xo() {
    this._coordinateSystems = [];
  }

  function Yo(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }

  function Uo(t, e, i) {
    var n,
        r,
        a = [],
        o = [],
        s = t.timeline;

    if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};
      var l = t.media;
      gm(l, function (t) {
        t && t.option && (t.query ? o.push(t) : n || (n = t));
      });
    }

    return r || (r = t), r.timeline || (r.timeline = s), gm([r].concat(a).concat(p(o, function (t) {
      return t.option;
    })), function (t) {
      gm(e, function (e) {
        e(t, i);
      });
    }), {
      baseOption: r,
      timelineOptions: a,
      mediaDefault: n,
      mediaList: o
    };
  }

  function qo(t, e, i) {
    var n = {
      width: e,
      height: i,
      aspectratio: e / i
    },
        r = !0;
    return f(t, function (t, e) {
      var i = e.match(_m);

      if (i && i[1] && i[2]) {
        var a = i[1],
            o = i[2].toLowerCase();
        jo(n[o], t, a) || (r = !1);
      }
    }), r;
  }

  function jo(t, e, i) {
    return "min" === i ? t >= e : "max" === i ? e >= t : t === e;
  }

  function Zo(t, e) {
    return t.join(",") === e.join(",");
  }

  function $o(t, e) {
    e = e || {}, gm(e, function (e, i) {
      if (null != e) {
        var n = t[i];

        if ($v.hasClass(i)) {
          e = Pn(e), n = Pn(n);
          var r = En(n, e);
          t[i] = mm(r, function (t) {
            return t.option && t.exist ? ym(t.exist, t.option, !0) : t.exist || t.option;
          });
        } else t[i] = ym(n, e, !0);
      }
    });
  }

  function Ko(t) {
    var e = t && t.itemStyle;
    if (e) for (var i = 0, n = bm.length; n > i; i++) {
      var a = bm[i],
          o = e.normal,
          s = e.emphasis;
      o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }

  function Qo(t, e, i) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var n = t[e].normal,
          r = t[e].emphasis;
      n && (i ? (t[e].normal = t[e].emphasis = null, s(t[e], n)) : t[e] = n), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }

  function Jo(t) {
    Qo(t, "itemStyle"), Qo(t, "lineStyle"), Qo(t, "areaStyle"), Qo(t, "label"), Qo(t, "labelLine"), Qo(t, "upperLabel"), Qo(t, "edgeLabel");
  }

  function ts(t, e) {
    var i = wm(t) && t[e],
        n = wm(i) && i.textStyle;
    if (n) for (var r = 0, a = Bp.length; a > r; r++) {
      var e = Bp[r];
      n.hasOwnProperty(e) && (i[e] = n[e]);
    }
  }

  function es(t) {
    t && (Jo(t), ts(t, "label"), t.emphasis && ts(t.emphasis, "label"));
  }

  function is(t) {
    if (wm(t)) {
      Ko(t), Jo(t), ts(t, "label"), ts(t, "upperLabel"), ts(t, "edgeLabel"), t.emphasis && (ts(t.emphasis, "label"), ts(t.emphasis, "upperLabel"), ts(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (Ko(e), es(e));
      var i = t.markLine;
      i && (Ko(i), es(i));
      var n = t.markArea;
      n && es(n);
      var r = t.data;

      if ("graph" === t.type) {
        r = r || t.nodes;
        var a = t.links || t.edges;
        if (a && !S(a)) for (var o = 0; o < a.length; o++) {
          es(a[o]);
        }
        f(t.categories, function (t) {
          Jo(t);
        });
      }

      if (r && !S(r)) for (var o = 0; o < r.length; o++) {
        es(r[o]);
      }
      var e = t.markPoint;
      if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) {
        es(s[o]);
      }
      var i = t.markLine;
      if (i && i.data) for (var l = i.data, o = 0; o < l.length; o++) {
        _(l[o]) ? (es(l[o][0]), es(l[o][1])) : es(l[o]);
      }
      "gauge" === t.type ? (ts(t, "axisLabel"), ts(t, "title"), ts(t, "detail")) : "treemap" === t.type ? (Qo(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
        Jo(t);
      })) : "tree" === t.type && Jo(t.leaves);
    }
  }

  function ns(t) {
    return _(t) ? t : t ? [t] : [];
  }

  function rs(t) {
    return (_(t) ? t[0] : t) || {};
  }

  function as(t, e) {
    e = e.split(",");

    for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++) {
      ;
    }

    return i;
  }

  function os(t, e, i, n) {
    e = e.split(",");

    for (var r, a = t, o = 0; o < e.length - 1; o++) {
      r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    }

    (n || null == a[e[o]]) && (a[e[o]] = i);
  }

  function ss(t) {
    f(Sm, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }

  function ls(t) {
    f(t, function (e, i) {
      var n = [],
          r = [0 / 0, 0 / 0],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, h) {
        var u = o.get(e.stackedDimension, h);
        if (isNaN(u)) return r;
        var c, d;
        s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);

        for (var f = 0 / 0, p = i - 1; p >= 0; p--) {
          var g = t[p];

          if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
            var v = g.data.getByRawIndex(g.stackResultDimension, d);

            if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
              u += v, f = v;
              break;
            }
          }
        }

        return n[0] = u, n[1] = f, n;
      });
      o.hostModel.setData(l), e.data = l;
    });
  }

  function hs(t, e) {
    bo.isInstance(t) || (t = bo.seriesDataToSource(t)), this._source = t;
    var i = this._data = t.data,
        n = t.sourceFormat;

    if (n === om) {
      if (bd && null == e) throw new Error("Typed array data must specify dimension size");
      this._offset = 0, this._dimSize = e, this._data = i;
    }

    var r = Dm[n === im ? n + "_" + t.seriesLayoutBy : n];
    bd && L(r, "Invalide sourceFormat: " + n), o(this, r);
  }

  function us() {
    return this._data.length;
  }

  function cs(t) {
    return this._data[t];
  }

  function ds(t) {
    for (var e = 0; e < t.length; e++) {
      this._data.push(t[e]);
    }
  }

  function fs(t, e, i) {
    return null != i ? t[i] : t;
  }

  function ps(t, e, i, n) {
    return gs(t[n], this._dimensionInfos[e]);
  }

  function gs(t, e) {
    var i = e && e.type;

    if ("ordinal" === i) {
      var n = e && e.ordinalMeta;
      return n ? n.parseAndCollect(t) : t;
    }

    return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +no(t)), null == t || "" === t ? 0 / 0 : +t;
  }

  function vs(t, e, i) {
    if (t) {
      var n = t.getRawDataItem(e);

      if (null != n) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(i);
        return s && (r = s.name, a = s.index), Am[o](n, e, a, r);
      }
    }
  }

  function ms(t) {
    return new ys(t);
  }

  function ys(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;
  }

  function _s(t, e, i, n, r, a) {
    Em.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
      start: i,
      end: n,
      count: n - i,
      next: Em.next
    }, t.context);
  }

  function xs(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
    var i, n;
    !e && t._reset && (i = t._reset(t.context), i && i.progress && (n = i.forceFirstProgress, i = i.progress), _(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
    var r = t._downstream;
    return r && r.dirty(), n;
  }

  function ws(t) {
    var e = t.name;
    Rn(t) || (t.name = bs(t) || e);
  }

  function bs(t) {
    var e = t.getRawData(),
        i = e.mapDimension("seriesName", !0),
        n = [];
    return f(i, function (t) {
      var i = e.getDimensionInfo(t);
      i.displayName && n.push(i.displayName);
    }), n.join(" ");
  }

  function Ms(t) {
    return t.model.getRawData().count();
  }

  function Ss(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), Ts;
  }

  function Ts(t, e) {
    e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }

  function Cs(t, e) {
    f(t.CHANGABLE_METHODS, function (i) {
      t.wrapMethod(i, y(Is, e));
    });
  }

  function Is(t) {
    var e = ks(t);
    e && e.setOutputEnd(this.count());
  }

  function ks(t) {
    var e = (t.ecModel || {}).scheduler,
        i = e && e.getPipeline(t.uid);

    if (i) {
      var n = i.currentTask;

      if (n) {
        var r = n.agentStubMap;
        r && (n = r.get(t.uid));
      }

      return n;
    }
  }

  function Ds() {
    this.group = new Of(), this.uid = Ua("viewChart"), this.renderTask = ms({
      plan: Ls,
      reset: Os
    }), this.renderTask.context = {
      view: this
    };
  }

  function As(t, e, i) {
    if (t && (t.trigger(e, i), t.isGroup && !va(t))) for (var n = 0, r = t.childCount(); r > n; n++) {
      As(t.childAt(n), e, i);
    }
  }

  function Ps(t, e, i) {
    var n = Nn(t, e),
        r = e && null != e.highlightKey ? ma(e.highlightKey) : null;
    null != n ? f(Pn(n), function (e) {
      As(t.getItemGraphicEl(e), i, r);
    }) : t.eachItemGraphicEl(function (t) {
      As(t, i, r);
    });
  }

  function Ls(t) {
    return Vm(t.model);
  }

  function Os(t) {
    var e = t.model,
        i = t.ecModel,
        n = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && Wm(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return "render" !== l && o[l](e, i, n, r), Xm[l];
  }

  function Bs(t, e, i) {
    function n() {
      u = new Date().getTime(), c = null, t.apply(o, s || []);
    }

    var r,
        a,
        o,
        s,
        l,
        h = 0,
        u = 0,
        c = null;
    e = e || 0;

    var d = function d() {
      r = new Date().getTime(), o = this, s = arguments;
      var t = l || e,
          d = l || i;
      l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(n, t) : a >= 0 ? n() : c = setTimeout(n, -a), h = r;
    };

    return d.clear = function () {
      c && (clearTimeout(c), c = null);
    }, d.debounceNextCall = function (t) {
      l = t;
    }, d;
  }

  function Es(t, e, i, n) {
    var r = t[e];

    if (r) {
      var a = r[Ym] || r,
          o = r[qm],
          s = r[Um];

      if (s !== i || o !== n) {
        if (null == i || !n) return t[e] = a;
        r = t[e] = Bs(a, i, "debounce" === n), r[Ym] = a, r[qm] = n, r[Um] = i;
      }

      return r;
    }
  }

  function zs(t, e, i, n) {
    this.ecInstance = t, this.api = e, this.unfinished;
    var i = this._dataProcessorHandlers = i.slice(),
        n = this._visualHandlers = n.slice();
    this._allHandlers = i.concat(n), this._stageTaskMap = R();
  }

  function Rs(t, e, i, n, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }

    r = r || {};
    var o;
    f(e, function (e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
            l = s.seriesTaskMap,
            h = s.overallTask;

        if (h) {
          var u,
              c = h.agentStubMap;
          c.each(function (t) {
            a(r, t) && (t.dirty(), u = !0);
          }), u && h.dirty(), ty(h, n);
          var d = t.getPerformArgs(h, r.block);
          c.each(function (t) {
            t.perform(d);
          }), o |= h.perform(d);
        } else l && l.each(function (s) {
          a(r, s) && s.dirty();
          var l = t.getPerformArgs(s, r.block);
          l.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model), ty(s, n), o |= s.perform(l);
        });
      }
    }), t.unfinished |= o;
  }

  function Fs(t, e, i, n, r) {
    function a(i) {
      var a = i.uid,
          s = o.get(a) || o.set(a, ms({
        plan: Xs,
        reset: Ys,
        count: qs
      }));
      s.context = {
        model: i,
        ecModel: n,
        api: r,
        useClearVisual: e.isVisual && !e.isLayout,
        plan: e.plan,
        reset: e.reset,
        scheduler: t
      }, js(t, i, s);
    }

    var o = i.seriesTaskMap || (i.seriesTaskMap = R()),
        s = e.seriesType,
        l = e.getTargetSeries;
    e.createOnAllSeries ? n.eachRawSeries(a) : s ? n.eachRawSeriesByType(s, a) : l && l(n, r).each(a);
    var h = t._pipelineMap;
    o.each(function (t, e) {
      h.get(e) || (t.dispose(), o.removeKey(e));
    });
  }

  function Ns(t, e, i, n, r) {
    function a(e) {
      var i = e.uid,
          n = s.get(i);
      n || (n = s.set(i, ms({
        reset: Ws,
        onDirty: Gs
      })), o.dirty()), n.context = {
        model: e,
        overallProgress: u,
        modifyOutputEnd: c
      }, n.agent = o, n.__block = u, js(t, e, n);
    }

    var o = i.overallTask = i.overallTask || ms({
      reset: Hs
    });
    o.context = {
      ecModel: n,
      api: r,
      overallReset: e.overallReset,
      scheduler: t
    };
    var s = o.agentStubMap = o.agentStubMap || R(),
        l = e.seriesType,
        h = e.getTargetSeries,
        u = !0,
        c = e.modifyOutputEnd;
    l ? n.eachRawSeriesByType(l, a) : h ? h(n, r).each(a) : (u = !1, f(n.getSeries(), a));
    var d = t._pipelineMap;
    s.each(function (t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
    });
  }

  function Hs(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }

  function Ws(t) {
    return t.overallProgress && Vs;
  }

  function Vs() {
    this.agent.dirty(), this.getDownstream().dirty();
  }

  function Gs() {
    this.agent && this.agent.dirty();
  }

  function Xs(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }

  function Ys(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = Pn(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? p(e, function (t, e) {
      return Us(e);
    }) : ey;
  }

  function Us(t) {
    return function (e, i) {
      var n = i.data,
          r = i.resetDefines[t];
      if (r && r.dataEach) for (var a = e.start; a < e.end; a++) {
        r.dataEach(n, a);
      } else r && r.progress && r.progress(e, n);
    };
  }

  function qs(t) {
    return t.data.count();
  }

  function js(t, e, i) {
    var n = e.uid,
        r = t._pipelineMap.get(n);

    !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, i.__pipeline = r;
  }

  function Zs(t) {
    iy = null;

    try {
      t(ny, ry);
    } catch (e) {}

    return iy;
  }

  function $s(t, e) {
    for (var i in e.prototype) {
      t[i] = F;
    }
  }

  function Ks(t) {
    if (w(t)) {
      var e = new DOMParser();
      t = e.parseFromString(t, "text/xml");
    }

    for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) {
      t = t.nextSibling;
    }

    return t;
  }

  function Qs() {
    this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;
  }

  function Js(t, e) {
    for (var i = t.firstChild; i;) {
      if (1 === i.nodeType) {
        var n = i.getAttribute("offset");
        n = n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
        var r = i.getAttribute("stop-color") || "#000000";
        e.addColorStop(n, r);
      }

      i = i.nextSibling;
    }
  }

  function tl(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));
  }

  function el(t) {
    for (var e = O(t).split(dy), i = [], n = 0; n < e.length; n += 2) {
      var r = parseFloat(e[n]),
          a = parseFloat(e[n + 1]);
      i.push([r, a]);
    }

    return i;
  }

  function il(t, e, i, n) {
    var r = e.__inheritedStyle || {},
        a = "text" === e.type;
    if (1 === t.nodeType && (rl(t, e), o(r, al(t)), !n)) for (var s in gy) {
      if (gy.hasOwnProperty(s)) {
        var l = t.getAttribute(s);
        null != l && (r[gy[s]] = l);
      }
    }
    var h = a ? "textFill" : "fill",
        u = a ? "textStroke" : "stroke";
    e.style = e.style || new Vf();
    var c = e.style;
    null != r.fill && c.set(h, nl(r.fill, i)), null != r.stroke && c.set(u, nl(r.stroke, i)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
      var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
      null != r[t] && c.set(e, parseFloat(r[t]));
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
      null != r[t] && c.set(t, r[t]);
    }), r.lineDash && (e.style.lineDash = O(r.lineDash).split(dy)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r;
  }

  function nl(t, e) {
    var i = e && t && t.match(vy);

    if (i) {
      var n = O(i[1]),
          r = e[n];
      return r;
    }

    return t;
  }

  function rl(t, e) {
    var i = t.getAttribute("transform");

    if (i) {
      i = i.replace(/,/g, " ");
      var n = null,
          r = [];
      i.replace(my, function (t, e, i) {
        r.push(e, i);
      });

      for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
            s = r[a - 1];

        switch (n = n || be(), s) {
          case "translate":
            o = O(o).split(dy), Ce(n, n, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
            break;

          case "scale":
            o = O(o).split(dy), ke(n, n, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
            break;

          case "rotate":
            o = O(o).split(dy), Ie(n, n, parseFloat(o[0]));
            break;

          case "skew":
            o = O(o).split(dy), console.warn("Skew transform is not supported yet");
            break;

          case "matrix":
            var o = O(o).split(dy);
            n[0] = parseFloat(o[0]), n[1] = parseFloat(o[1]), n[2] = parseFloat(o[2]), n[3] = parseFloat(o[3]), n[4] = parseFloat(o[4]), n[5] = parseFloat(o[5]);
        }
      }

      e.setLocalTransform(n);
    }
  }

  function al(t) {
    var e = t.getAttribute("style"),
        i = {};
    if (!e) return i;
    var n = {};
    yy.lastIndex = 0;

    for (var r; null != (r = yy.exec(e));) {
      n[r[1]] = r[2];
    }

    for (var a in gy) {
      gy.hasOwnProperty(a) && null != n[a] && (i[gy[a]] = n[a]);
    }

    return i;
  }

  function ol(t, e, i) {
    var n = e / t.width,
        r = i / t.height,
        a = Math.min(n, r),
        o = [a, a],
        s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2];
    return {
      scale: o,
      position: s
    };
  }

  function sl(t, e) {
    return function (i, n, r) {
      return !e && this._disposed ? void Sl(this.id) : (i = i && i.toLowerCase(), void Xd.prototype[t].call(this, i, n, r));
    };
  }

  function ll() {
    Xd.call(this);
  }

  function hl(t, e, i) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }

    i = i || {}, "string" == typeof e && (e = t_[e]), this.id, this.group, this._dom = t;
    var a = "canvas";
    bd && (a = ("undefined" == typeof window ? global : window).__ECHARTS__DEFAULT__RENDERER__ || a);
    var o = this._zr = An(t, {
      renderer: i.renderer || a,
      devicePixelRatio: i.devicePixelRatio,
      width: i.width,
      height: i.height
    });
    this._throttledZrFlush = Bs(m(o.flush, o), 17);
    var e = n(e);
    e && Cm(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Xo();
    var s = this._api = kl(this);
    gi(Jy, r), gi($y, r), this._scheduler = new zs(this, s, $y, Jy), Xd.call(this, this._ecEventProcessor = new Dl()), this._messageCenter = new ll(), this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), ml(o, this), B(this);
  }

  function ul(t, e, i) {
    if (this._disposed) return void Sl(this.id);

    var n,
        r = this._model,
        a = this._coordSysMgr.getCoordinateSystems();

    e = Wn(r, e);

    for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s[t] && null != (n = s[t](r, e, i))) return n;
    }

    bd && console.warn("No coordinate system that supports " + t + " found by the given finder.");
  }

  function cl(t) {
    var e = t._model,
        i = t._scheduler;
    i.restorePipelines(e), i.prepareStageTasks(), yl(t, "component", e, i), yl(t, "chart", e, i), i.plan();
  }

  function dl(t, e, i, n, r) {
    function a(n) {
      n && n.__alive && n[e] && n[e](n.__model, o, t._api, i);
    }

    var o = t._model;
    if (!n) return void My(t._componentsViews.concat(t._chartsViews), a);
    var s = {};
    s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
    var l = {
      mainType: n,
      query: s
    };
    r && (l.subType = r);
    var h = i.excludeSeriesId;
    null != h && (h = R(Pn(h))), o && o.eachComponent(l, function (e) {
      h && null != h.get(e.id) || a(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }

  function fl(t, e) {
    var i = t._chartsMap,
        n = t._scheduler;
    e.eachSeries(function (t) {
      n.updateStreamModes(t, i[t.__viewId]);
    });
  }

  function pl(t, e) {
    var i = t.type,
        n = t.escapeConnect,
        r = jy[i],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        h = l.pop();
    l = null != l[0] && Cy(l[0]), this[Vy] = !0;
    var u = [t],
        c = !1;
    t.batch && (c = !0, u = p(t.batch, function (e) {
      return e = s(o({}, e), t), e.batch = null, e;
    }));
    var d,
        f = [],
        g = "highlight" === i || "downplay" === i;
    My(u, function (t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? dl(this, h, t, "series") : l && dl(this, h, t, l.main, l.sub);
    }, this), "none" === h || g || l || (this[Gy] ? (cl(this), Uy.update.call(this, t), this[Gy] = !1) : Uy[h].call(this, t)), d = c ? {
      type: a.event || i,
      escapeConnect: n,
      batch: f
    } : f[0], this[Vy] = !1, !e && this._messageCenter.trigger(d.type, d);
  }

  function gl(t) {
    for (var e = this._pendingActions; e.length;) {
      var i = e.shift();
      pl.call(this, i, t);
    }
  }

  function vl(t) {
    !t && this.trigger("updated");
  }

  function ml(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[Gy] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }

  function yl(t, e, i, n) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];

      if (!r) {
        var u = Cy(t.type),
            c = a ? Fm.getClass(u.main, u.sub) : Ds.getClass(u.sub);
        bd && by(c, u.sub + " does not exist."), r = new c(), r.init(i, h), s[e] = r, o.push(r), l.add(r.group);
      }

      t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
        mainType: t.mainType,
        index: t.componentIndex
      }, !a && n.prepareView(r, t, i, h);
    }

    for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) {
      o[u].__alive = !1;
    }

    a ? i.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : i.eachSeries(r);

    for (var u = 0; u < o.length;) {
      var c = o[u];
      c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }

  function _l(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }

  function xl(t, e, i, n) {
    wl(t, e, i, n), My(t._chartsViews, function (t) {
      t.__alive = !1;
    }), bl(t, e, i, n), My(t._chartsViews, function (t) {
      t.__alive || t.remove(e, i);
    });
  }

  function wl(t, e, i, n, r) {
    My(r || t._componentsViews, function (t) {
      var r = t.__model;
      t.render(r, e, i, n), Il(r, t);
    });
  }

  function bl(t, e, i, n, r) {
    var a,
        o = t._scheduler;
    e.eachSeries(function (e) {
      var i = t._chartsMap[e.__viewId];
      i.__alive = !0;
      var s = i.renderTask;
      o.updatePayload(s, n), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), i.group.silent = !!e.get("silent"), Il(e, i), Cl(e, i);
    }), o.unfinished |= a, Tl(t, e), $m(t._zr.dom, e);
  }

  function Ml(t, e) {
    My(Qy, function (i) {
      i(t, e);
    });
  }

  function Sl(t) {
    bd && console.warn("Instance " + t + " has been disposed");
  }

  function Tl(t, e) {
    var i = t._zr,
        n = i.storage,
        r = 0;
    n.traverse(function () {
      r++;
    }), r > e.get("hoverLayerThreshold") && !Cd.node && e.eachSeries(function (e) {
      if (!e.preventUsingHoverLayer) {
        var i = t._chartsMap[e.__viewId];
        i.__alive && i.group.traverse(function (t) {
          t.useHoverLayer = !0;
        });
      }
    });
  }

  function Cl(t, e) {
    var i = t.get("blendMode") || null;
    bd && !Cd.canvasSupported && i && "source-over" !== i && console.warn("Only canvas support blendMode"), e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", i);
      });
    });
  }

  function Il(t, e) {
    var i = t.get("z"),
        n = t.get("zlevel");
    e.group.traverse(function (t) {
      "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n));
    });
  }

  function kl(t) {
    var e = t._coordSysMgr;
    return o(new Go(t), {
      getCoordinateSystems: m(e.getCoordinateSystems, e),
      getComponentByElement: function getComponentByElement(e) {
        for (; e;) {
          var i = e.__ecComponentInfo;
          if (null != i) return t._model.getComponent(i.mainType, i.index);
          e = e.parent;
        }
      }
    });
  }

  function Dl() {
    this.eventInfo;
  }

  function Al(t) {
    function e(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n[a] = e;
      }
    }

    var i = 0,
        n = 1,
        r = 2,
        a = "__connectUpdateStatus";
    My(Zy, function (o, s) {
      t._messageCenter.on(s, function (o) {
        if (n_[t.group] && t[a] !== i) {
          if (o && o.escapeConnect) return;
          var s = t.makeActionFromEvent(o),
              l = [];
          My(i_, function (e) {
            e !== t && e.group === t.group && l.push(e);
          }), e(l, i), My(l, function (t) {
            t[a] !== n && t.dispatchAction(s);
          }), e(l, r);
        }
      });
    });
  }

  function Pl(t, e, i) {
    if (bd) {
      if (kp.replace(".", "") - 0 < ky.zrender.replace(".", "") - 0) throw new Error("zrender/src " + kp + " is too old for ECharts " + Iy + ". Current version need ZRender " + ky.zrender + "+");
      if (!t) throw new Error("Initialize failed: invalid dom.");
    }

    var n = El(t);
    if (n) return bd && console.warn("There is a chart instance already initialized on the dom."), n;
    bd && (!T(t) || "CANVAS" === t.nodeName.toUpperCase() || (t.clientWidth || i && null != i.width) && (t.clientHeight || i && null != i.height) || console.warn("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload."));
    var r = new hl(t, e, i);
    return r.id = "ec_" + r_++, i_[r.id] = r, Gn(t, o_, r.id), Al(r), r;
  }

  function Ll(t) {
    if (_(t)) {
      var e = t;
      t = null, My(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + a_++, My(e, function (e) {
        e.group = t;
      });
    }

    return n_[t] = !0, t;
  }

  function Ol(t) {
    n_[t] = !1;
  }

  function Bl(t) {
    "string" == typeof t ? t = i_[t] : t instanceof hl || (t = El(t)), t instanceof hl && !t.isDisposed() && t.dispose();
  }

  function El(t) {
    return i_[Xn(t, o_)];
  }

  function zl(t) {
    return i_[t];
  }

  function Rl(t, e) {
    t_[t] = e;
  }

  function Fl(t) {
    Ky.push(t);
  }

  function Nl(t, e) {
    Ul($y, t, e, Ay);
  }

  function Hl(t) {
    Qy.push(t);
  }

  function Wl(t, e, i) {
    "function" == typeof e && (i = e, e = "");
    var n = Ty(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || n).toLowerCase(), e = t.event, by(Xy.test(n) && Xy.test(e)), jy[n] || (jy[n] = {
      action: i,
      actionInfo: t
    }), Zy[e] = n;
  }

  function Vl(t, e) {
    Xo.register(t, e);
  }

  function Gl(t) {
    var e = Xo.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
  }

  function Xl(t, e) {
    Ul(Jy, t, e, By, "layout");
  }

  function Yl(t, e) {
    Ul(Jy, t, e, Ry, "visual");
  }

  function Ul(t, e, i, n, r) {
    if ((Sy(e) || Ty(e)) && (i = e, e = n), bd) {
      if (isNaN(e) || null == e) throw new Error("Illegal priority");
      My(t, function (t) {
        by(t.__raw !== i);
      });
    }

    var a = zs.wrapStageHandler(i, r);
    return a.__prio = e, a.__raw = i, t.push(a), a;
  }

  function ql(t, e) {
    e_[t] = e;
  }

  function jl(t) {
    return $v.extend(t);
  }

  function Zl(t) {
    return Fm.extend(t);
  }

  function $l(t) {
    return Rm.extend(t);
  }

  function Kl(t) {
    return Ds.extend(t);
  }

  function Ql(t) {
    i("createCanvas", t);
  }

  function Jl(t, e, i) {
    xy.registerMap(t, e, i);
  }

  function th(t) {
    var e = xy.retrieveMap(t);
    return e && e[0] && {
      geoJson: e[0].geoJSON,
      specialAreas: e[0].specialAreas
    };
  }

  function eh(t, e, i) {
    i = i || {};
    var n,
        r,
        a,
        o,
        s = i.byIndex,
        l = i.stackedCoordDimension,
        h = !(!t || !t.get("stack"));

    if (f(e, function (t, i) {
      w(t) && (e[i] = t = {
        name: t
      }), h && !t.isExtraCoord && (s || n || !t.ordinalMeta || (n = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), !r || s || n || (s = !0), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", n && (n.createInvertedIndices = !0);
      var u = r.coordDim,
          c = r.type,
          d = 0;
      f(e, function (t) {
        t.coordDim === u && d++;
      }), e.push({
        name: a,
        coordDim: u,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      }), d++, e.push({
        name: o,
        coordDim: o,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      });
    }

    return {
      stackedDimension: r && r.name,
      stackedByDimension: n && n.name,
      isStackedByIndex: s,
      stackedOverDimension: o,
      stackResultDimension: a
    };
  }

  function ih(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }

  function nh(t, e) {
    return ih(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }

  function rh(t) {
    return t.get("stack") || h_ + t.seriesIndex;
  }

  function ah(t) {
    return t.dim + t.index;
  }

  function oh(t, e) {
    var i = [];
    return e.eachSeriesByType(t, function (t) {
      dh(t) && !fh(t) && i.push(t);
    }), i;
  }

  function sh(t) {
    var e = {};
    f(t, function (t) {
      var i = t.coordinateSystem,
          n = i.getBaseAxis();
      if ("time" === n.type || "value" === n.type) for (var r = t.getData(), a = n.dim + "_" + n.index, o = r.mapDimension(n.dim), s = 0, l = r.count(); l > s; ++s) {
        var h = r.get(o, s);
        e[a] ? e[a].push(h) : e[a] = [h];
      }
    });
    var i = [];

    for (var n in e) {
      if (e.hasOwnProperty(n)) {
        var r = e[n];

        if (r) {
          r.sort(function (t, e) {
            return t - e;
          });

          for (var a = null, o = 1; o < r.length; ++o) {
            var s = r[o] - r[o - 1];
            s > 0 && (a = null === a ? s : Math.min(a, s));
          }

          i[n] = a;
        }
      }
    }

    return i;
  }

  function lh(t) {
    var e = sh(t),
        i = [];
    return f(t, function (t) {
      var n,
          r = t.coordinateSystem,
          a = r.getBaseAxis(),
          o = a.getExtent();
      if ("category" === a.type) n = a.getBandWidth();else if ("value" === a.type || "time" === a.type) {
        var s = a.dim + "_" + a.index,
            l = e[s],
            h = Math.abs(o[1] - o[0]),
            u = a.scale.getExtent(),
            c = Math.abs(u[1] - u[0]);
        n = l ? h / c * l : h;
      } else {
        var d = t.getData();
        n = Math.abs(o[1] - o[0]) / d.count();
      }
      var f = Ka(t.get("barWidth"), n),
          p = Ka(t.get("barMaxWidth"), n),
          g = Ka(t.get("barMinWidth") || 1, n),
          v = t.get("barGap"),
          m = t.get("barCategoryGap");
      i.push({
        bandWidth: n,
        barWidth: f,
        barMaxWidth: p,
        barMinWidth: g,
        barGap: v,
        barCategoryGap: m,
        axisKey: ah(a),
        stackId: rh(t)
      });
    }), hh(i);
  }

  function hh(t) {
    var e = {};
    f(t, function (t) {
      var i = t.axisKey,
          n = t.bandWidth,
          r = e[i] || {
        bandWidth: n,
        remainedWidth: n,
        autoWidthCount: 0,
        categoryGap: "20%",
        gap: "30%",
        stacks: {}
      },
          a = r.stacks;
      e[i] = r;
      var o = t.stackId;
      a[o] || r.autoWidthCount++, a[o] = a[o] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (a[o].maxWidth = l);
      var h = t.barMinWidth;
      h && (a[o].minWidth = h);
      var u = t.barGap;
      null != u && (r.gap = u);
      var c = t.barCategoryGap;
      null != c && (r.categoryGap = c);
    });
    var i = {};
    return f(e, function (t, e) {
      i[e] = {};
      var n = t.stacks,
          r = t.bandWidth,
          a = Ka(t.categoryGap, r),
          o = Ka(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          h = (s - a) / (l + (l - 1) * o);
      h = Math.max(h, 0), f(n, function (t) {
        var e = t.maxWidth,
            i = t.minWidth;

        if (t.width) {
          var n = t.width;
          e && (n = Math.min(n, e)), i && (n = Math.max(n, i)), t.width = n, s -= n + o * n, l--;
        } else {
          var n = h;
          e && n > e && (n = Math.min(e, s)), i && i > n && (n = i), n !== h && (t.width = n, s -= n + o * n, l--);
        }
      }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
      var u,
          c = 0;
      f(n, function (t) {
        t.width || (t.width = h), u = t, c += t.width * (1 + o);
      }), u && (c -= u.width * o);
      var d = -c / 2;
      f(n, function (t, n) {
        i[e][n] = i[e][n] || {
          bandWidth: r,
          offset: d,
          width: t.width
        }, d += t.width * (1 + o);
      });
    }), i;
  }

  function uh(t, e, i) {
    if (t && e) {
      var n = t[ah(e)];
      return null != n && null != i && (n = n[rh(i)]), n;
    }
  }

  function ch(t, e) {
    var i = oh(t, e),
        n = lh(i),
        r = {};
    f(i, function (t) {
      var e = t.getData(),
          i = t.coordinateSystem,
          a = i.getBaseAxis(),
          o = rh(t),
          s = n[ah(a)][o],
          l = s.offset,
          h = s.width,
          u = i.getOtherAxis(a),
          c = t.get("barMinHeight") || 0;
      r[o] = r[o] || [], e.setLayout({
        bandWidth: s.bandWidth,
        offset: l,
        size: h
      });

      for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = ih(e, d), g = u.isHorizontal(), v = ph(a, u, p), m = 0, y = e.count(); y > m; m++) {
        var _ = e.get(d, m),
            x = e.get(f, m),
            w = _ >= 0 ? "p" : "n",
            b = v;

        p && (r[o][x] || (r[o][x] = {
          p: v,
          n: v
        }), b = r[o][x][w]);
        var M, S, T, C;

        if (g) {
          var I = i.dataToPoint([_, x]);
          M = b, S = I[1] + l, T = I[0] - v, C = h, Math.abs(T) < c && (T = (0 > T ? -1 : 1) * c), isNaN(T) || p && (r[o][x][w] += T);
        } else {
          var I = i.dataToPoint([x, _]);
          M = I[0] + l, S = b, T = h, C = I[1] - v, Math.abs(C) < c && (C = (0 >= C ? -1 : 1) * c), isNaN(C) || p && (r[o][x][w] += C);
        }

        e.setItemLayout(m, {
          x: M,
          y: S,
          width: T,
          height: C
        });
      }
    }, this);
  }

  function dh(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }

  function fh(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }

  function ph(t, e) {
    return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0));
  }

  function gh(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
  }

  function vh(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }

  function mh(t) {
    return t._map || (t._map = R(t.categories));
  }

  function yh(t) {
    return b(t) && null != t.value ? t.value : t + "";
  }

  function _h(t, e, i, n) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = oo(a / e, !0);
    null != i && i > o && (o = r.interval = i), null != n && o > n && (o = r.interval = n);
    var s = r.intervalPrecision = xh(o),
        l = r.niceTickExtent = [v_(Math.ceil(t[0] / o) * o, s), v_(Math.floor(t[1] / o) * o, s)];
    return bh(l, t), r;
  }

  function xh(t) {
    return Ja(t) + 2;
  }

  function wh(t, e, i) {
    t[e] = Math.max(Math.min(t[e], i[1]), i[0]);
  }

  function bh(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), wh(t, 0, e), wh(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }

  function Mh(t, e) {
    return L_(t, P_(e));
  }

  function Sh(t, e) {
    var i,
        n,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = t.getExtent();
    "ordinal" === a ? i = e.getCategories().length : (n = e.get("boundaryGap"), _(n) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (bd && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), n = [0, 0]), n[0] = Ka(n[0], 1), n[1] = Ka(n[1], 1), r = l[1] - l[0] || Math.abs(l[0])), "dataMin" === o ? o = l[0] : "function" == typeof o && (o = o({
      min: l[0],
      max: l[1]
    })), "dataMax" === s ? s = l[1] : "function" == typeof s && (s = s({
      min: l[0],
      max: l[1]
    }));
    var h = null != o,
        u = null != s;
    null == o && (o = "ordinal" === a ? i ? 0 : 0 / 0 : l[0] - n[0] * r), null == s && (s = "ordinal" === a ? i ? i - 1 : 0 / 0 : l[1] + n[1] * r), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !h && (o = 0), 0 > o && 0 > s && !u && (s = 0));
    var c = e.ecModel;

    if (c && "time" === a) {
      var d,
          p = oh("bar", c);

      if (f(p, function (t) {
        d |= t.getBaseAxis() === e.axis;
      }), d) {
        var g = lh(p),
            v = Th(o, s, e, g);
        o = v.min, s = v.max;
      }
    }

    return {
      extent: [o, s],
      fixMin: h,
      fixMax: u
    };
  }

  function Th(t, e, i, n) {
    var r = i.axis.getExtent(),
        a = r[1] - r[0],
        o = uh(n, i.axis);
    if (void 0 === o) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    f(o, function (t) {
      s = Math.min(t.offset, s);
    });
    var l = -1 / 0;
    f(o, function (t) {
      l = Math.max(t.offset + t.width, l);
    }), s = Math.abs(s), l = Math.abs(l);
    var h = s + l,
        u = e - t,
        c = 1 - (s + l) / a,
        d = u / c - u;
    return e += d * (l / h), t -= d * (s / h), {
      min: t,
      max: e
    };
  }

  function Ch(t, e) {
    var i = Sh(t, e),
        n = i.extent,
        r = e.get("splitNumber");
    "log" === t.type && (t.base = e.get("logBase"));
    var a = t.type;
    t.setExtent(n[0], n[1]), t.niceExtent({
      splitNumber: r,
      fixMin: i.fixMin,
      fixMax: i.fixMax,
      minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null,
      maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null
    });
    var o = e.get("interval");
    null != o && t.setInterval && t.setInterval(o);
  }

  function Ih(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new g_(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);

      case "value":
        return new y_();

      default:
        return (gh.getClass(e) || y_).create(t);
    }
  }

  function kh(t) {
    var e = t.scale.getExtent(),
        i = e[0],
        n = e[1];
    return !(i > 0 && n > 0 || 0 > i && 0 > n);
  }

  function Dh(t) {
    var e = t.getLabelModel().get("formatter"),
        i = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "string" == typeof e ? e = function (e) {
      return function (i) {
        return i = t.scale.getLabel(i), e.replace("{value}", null != i ? i : "");
      };
    }(e) : "function" == typeof e ? function (n, r) {
      return null != i && (r = n - i), e(Ah(t, n), r);
    } : function (e) {
      return t.scale.getLabel(e);
    };
  }

  function Ah(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }

  function Ph(t) {
    var e = t.model,
        i = t.scale;

    if (e.get("axisLabel.show") && !i.isBlank()) {
      var n,
          r,
          a = "category" === t.type,
          o = i.getExtent();
      a ? r = i.count() : (n = i.getTicks(), r = n.length);
      var s,
          l = t.getLabelModel(),
          h = Dh(t),
          u = 1;
      r > 40 && (u = Math.ceil(r / 40));

      for (var c = 0; r > c; c += u) {
        var d = n ? n[c] : o[0] + c,
            f = h(d),
            p = l.getTextRect(f),
            g = Lh(p, l.get("rotate") || 0);
        s ? s.union(g) : s = g;
      }

      return s;
    }
  }

  function Lh(t, e) {
    var i = e * Math.PI / 180,
        n = t.plain(),
        r = n.width,
        a = n.height,
        o = r * Math.abs(Math.cos(i)) + Math.abs(a * Math.sin(i)),
        s = r * Math.abs(Math.sin(i)) + Math.abs(a * Math.cos(i)),
        l = new si(n.x, n.y, o, s);
    return l;
  }

  function Oh(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e;
  }

  function Bh(t) {
    return "category" === t.type && 0 === Oh(t.getLabelModel());
  }

  function Eh(t) {
    return this._axes[t];
  }

  function zh(t) {
    F_.call(this, t);
  }

  function Rh(t) {
    return "category" === t.type ? Nh(t) : Vh(t);
  }

  function Fh(t, e) {
    return "category" === t.type ? Wh(t, e) : {
      ticks: t.scale.getTicks()
    };
  }

  function Nh(t) {
    var e = t.getLabelModel(),
        i = Hh(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: i.labelCategoryInterval
    } : i;
  }

  function Hh(t, e) {
    var i = Gh(t, "labels"),
        n = Oh(e),
        r = Xh(i, n);
    if (r) return r;
    var a, o;
    return x(n) ? a = $h(t, n) : (o = "auto" === n ? Uh(t) : n, a = Zh(t, o)), Yh(i, n, {
      labels: a,
      labelCategoryInterval: o
    });
  }

  function Wh(t, e) {
    var i = Gh(t, "ticks"),
        n = Oh(e),
        r = Xh(i, n);
    if (r) return r;
    var a, o;
    if ((!e.get("show") || t.scale.isBlank()) && (a = []), x(n)) a = $h(t, n, !0);else if ("auto" === n) {
      var s = Hh(t, t.getLabelModel());
      o = s.labelCategoryInterval, a = p(s.labels, function (t) {
        return t.tickValue;
      });
    } else o = n, a = Zh(t, o, !0);
    return Yh(i, n, {
      ticks: a,
      tickCategoryInterval: o
    });
  }

  function Vh(t) {
    var e = t.scale.getTicks(),
        i = Dh(t);
    return {
      labels: p(e, function (e, n) {
        return {
          formattedLabel: i(e, n),
          rawLabel: t.scale.getLabel(e),
          tickValue: e
        };
      })
    };
  }

  function Gh(t, e) {
    return N_(t)[e] || (N_(t)[e] = []);
  }

  function Xh(t, e) {
    for (var i = 0; i < t.length; i++) {
      if (t[i].key === e) return t[i].value;
    }
  }

  function Yh(t, e, i) {
    return t.push({
      key: e,
      value: i
    }), i;
  }

  function Uh(t) {
    var e = N_(t).autoInterval;
    return null != e ? e : N_(t).autoInterval = t.calculateCategoryInterval();
  }

  function qh(t) {
    var e = jh(t),
        i = Dh(t),
        n = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));

    for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(n)), c = Math.abs(h * Math.sin(n)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
          g = 0,
          v = Ci(i(l), e.font, "center", "top");
      p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
    }

    var m = d / u,
        y = f / c;
    isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);

    var _ = Math.max(0, Math.floor(Math.min(m, y))),
        x = N_(t.model),
        w = t.getExtent(),
        b = x.lastAutoInterval,
        M = x.lastTickCount;

    return null != b && null != M && Math.abs(b - _) <= 1 && Math.abs(M - o) <= 1 && b > _ && x.axisExtend0 === w[0] && x.axisExtend1 === w[1] ? _ = b : (x.lastTickCount = o, x.lastAutoInterval = _, x.axisExtend0 = w[0], x.axisExtend1 = w[1]), _;
  }

  function jh(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    };
  }

  function Zh(t, e, i) {
    function n(t) {
      l.push(i ? t : {
        formattedLabel: r(t),
        rawLabel: a.getLabel(t),
        tickValue: t
      });
    }

    var r = Dh(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        h = Math.max((e || 0) + 1, 1),
        u = o[0],
        c = a.count();
    0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
    var d = Bh(t),
        f = s.get("showMinLabel") || d,
        p = s.get("showMaxLabel") || d;
    f && u !== o[0] && n(o[0]);

    for (var g = u; g <= o[1]; g += h) {
      n(g);
    }

    return p && g - h !== o[1] && n(o[1]), l;
  }

  function $h(t, e, i) {
    var n = t.scale,
        r = Dh(t),
        a = [];
    return f(n.getTicks(), function (t) {
      var o = n.getLabel(t);
      e(t, o) && a.push(i ? t : {
        formattedLabel: r(t),
        rawLabel: o,
        tickValue: t
      });
    }), a;
  }

  function Kh(t, e) {
    var i = t[1] - t[0],
        n = e,
        r = i / n / 2;
    t[0] += r, t[1] -= r;
  }

  function Qh(t, e, i, n) {
    function r(t, e) {
      return t = Qa(t), e = Qa(e), d ? t > e : e > t;
    }

    var a = e.length;

    if (t.onBand && !i && a) {
      var o,
          s,
          l = t.getExtent();
      if (1 === a) e[0].coord = l[0], o = e[1] = {
        coord: l[0]
      };else {
        var h = e[a - 1].tickValue - e[0].tickValue,
            u = (e[a - 1].coord - e[0].coord) / h;
        f(e, function (t) {
          t.coord -= u / 2;
        });
        var c = t.scale.getExtent();
        s = 1 + c[1] - e[a - 1].tickValue, o = {
          coord: e[a - 1].coord + u * s
        }, e.push(o);
      }
      var d = l[0] > l[1];
      r(e[0].coord, l[0]) && (n ? e[0].coord = l[0] : e.shift()), n && r(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), r(l[1], o.coord) && (n ? o.coord = l[1] : e.pop()), n && r(o.coord, l[1]) && e.push({
        coord: l[1]
      });
    }
  }

  function Jh(t, e) {
    return e.type || (e.data ? "category" : "value");
  }

  function tu(t, e) {
    return t.getCoordSysModel() === e;
  }

  function eu(t, e, i) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this.model = t;
  }

  function iu(t, e, i, n) {
    function r(t) {
      return t.dim + "_" + t.index;
    }

    i.getAxesOnZeroOf = function () {
      return a ? [a] : [];
    };

    var a,
        o = t[e],
        s = i.model,
        l = s.get("axisLine.onZero"),
        h = s.get("axisLine.onZeroAxisIndex");

    if (l) {
      if (null != h) nu(o[h]) && (a = o[h]);else for (var u in o) {
        if (o.hasOwnProperty(u) && nu(o[u]) && !n[r(o[u])]) {
          a = o[u];
          break;
        }
      }
      a && (n[r(a)] = !0);
    }
  }

  function nu(t) {
    return t && "category" !== t.type && "time" !== t.type && kh(t);
  }

  function ru(t, e) {
    var i = t.getExtent(),
        n = i[0] + i[1];
    t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e;
    } : function (t) {
      return n - t + e;
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e;
    } : function (t) {
      return n - t + e;
    };
  }

  function au(t) {
    return p(K_, function (e) {
      var i = t.getReferringComponents(e)[0];
      if (bd && !i) throw new Error(e + ' "' + I(t.get(e + "Index"), t.get(e + "Id"), 0) + '" not found');
      return i;
    });
  }

  function ou(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }

  function su(t) {
    return t;
  }

  function lu(t, e, i, n, r) {
    this._old = t, this._new = e, this._oldKeyGetter = i || su, this._newKeyGetter = n || su, this.context = r;
  }

  function hu(t, e, i, n, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[n](t[a], a),
          s = e[o];
      null == s ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }

  function uu(t) {
    var e = {},
        i = e.encode = {},
        n = R(),
        r = [],
        a = [],
        o = e.userOutput = {
      dimensionNames: t.dimensions.slice(),
      encode: {}
    };
    f(t.dimensions, function (e) {
      var s = t.getDimensionInfo(e),
          l = s.coordDim;

      if (l) {
        bd && L(null == Q_.get(l));
        var h = s.coordDimIndex;
        cu(i, l)[h] = e, s.isExtraCoord || (n.set(l, 1), fu(s.type) && (r[0] = e), cu(o.encode, l)[h] = s.index), s.defaultTooltip && a.push(e);
      }

      Q_.each(function (t, e) {
        var n = cu(i, e),
            r = s.otherDims[e];
        null != r && r !== !1 && (n[r] = s.name);
      });
    });
    var s = [],
        l = {};
    n.each(function (t, e) {
      var n = i[e];
      l[e] = n[0], s = s.concat(n);
    }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;
    var h = i.label;
    h && h.length && (r = h.slice());
    var u = i.tooltip;
    return u && u.length ? a = u.slice() : a.length || (a = r.slice()), i.defaultedLabel = r, i.defaultedTooltip = a, e;
  }

  function cu(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }

  function du(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }

  function fu(t) {
    return !("ordinal" === t || "time" === t);
  }

  function pu(t) {
    null != t && o(this, t), this.otherDims = {};
  }

  function gu(t) {
    return t._rawCount > 65535 ? rx : ox;
  }

  function vu(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t);
  }

  function mu(t, e) {
    f(sx.concat(e.__wrappedMethods || []), function (i) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }), t.__wrappedMethods = e.__wrappedMethods, f(lx, function (i) {
      t[i] = n(e[i]);
    }), t._calculationInfo = o(e._calculationInfo);
  }

  function yu(t, e, i, n, r) {
    var a = nx[e.type],
        o = n - 1,
        s = e.name,
        l = t[s][o];

    if (l && l.length < i) {
      for (var h = new a(Math.min(r - o * i, i)), u = 0; u < l.length; u++) {
        h[u] = l[u];
      }

      t[s][o] = h;
    }

    for (var c = n * i; r > c; c += i) {
      t[s].push(new a(Math.min(r - c, i)));
    }
  }

  function _u(t) {
    var e = t._invertedIndicesMap;
    f(e, function (i, n) {
      var r = t._dimensionInfos[n],
          a = r.ordinalMeta;

      if (a) {
        i = e[n] = new ax(a.categories.length);

        for (var o = 0; o < i.length; o++) {
          i[o] = ex;
        }

        for (var o = 0; o < t._count; o++) {
          i[t.get(n, o)] = o;
        }
      }
    });
  }

  function xu(t, e, i) {
    var n;

    if (null != e) {
      var r = t._chunkSize,
          a = Math.floor(i / r),
          o = i % r,
          s = t.dimensions[e],
          l = t._storage[s][a];

      if (l) {
        n = l[o];
        var h = t._dimensionInfos[s].ordinalMeta;
        h && h.categories.length && (n = h.categories[n]);
      }
    }

    return n;
  }

  function wu(t) {
    return t;
  }

  function bu(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }

  function Mu(t, e) {
    var i = t._idList[e];
    return null == i && (i = xu(t, t._idDimIdx, e)), null == i && (i = ix + e), i;
  }

  function Su(t) {
    return _(t) || (t = [t]), t;
  }

  function Tu(t, e) {
    for (var i = 0; i < e.length; i++) {
      t._dimensionInfos[e[i]] || console.error("Unkown dimension " + e[i]);
    }
  }

  function Cu(t, e) {
    var i = t.dimensions,
        n = new hx(p(i, t.getDimensionInfo, t), t.hostModel);
    mu(n, t);

    for (var r = n._storage = {}, a = t._storage, o = 0; o < i.length; o++) {
      var s = i[o];
      a[s] && (h(e, s) >= 0 ? (r[s] = Iu(a[s]), n._rawExtent[s] = ku(), n._extent[s] = null) : r[s] = a[s]);
    }

    return n;
  }

  function Iu(t) {
    for (var e = new Array(t.length), i = 0; i < t.length; i++) {
      e[i] = vu(t[i]);
    }

    return e;
  }

  function ku() {
    return [1 / 0, -1 / 0];
  }

  function Du(t, e, i) {
    function r(t, e, i) {
      null != Q_.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, h.set(e, !0));
    }

    bo.isInstance(e) || (e = bo.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();

    for (var a = (i.dimsDef || []).slice(), l = R(), h = R(), u = [], c = Au(e, t, a, i.dimCount), d = 0; c > d; d++) {
      var p = a[d] = o({}, b(a[d]) ? a[d] : {
        name: a[d]
      }),
          g = p.name,
          v = u[d] = new pu();
      null != g && null == l.get(g) && (v.name = v.displayName = g, l.set(g, d)), null != p.type && (v.type = p.type), null != p.displayName && (v.displayName = p.displayName);
    }

    var m = i.encodeDef;
    !m && i.encodeDefaulter && (m = i.encodeDefaulter(e, c)), m = R(m), m.each(function (t, e) {
      if (t = Pn(t).slice(), 1 === t.length && !w(t[0]) && t[0] < 0) return void m.set(e, !1);
      var i = m.set(e, []);
      f(t, function (t, n) {
        w(t) && (t = l.get(t)), null != t && c > t && (i[n] = t, r(u[t], e, n));
      });
    });
    var y = 0;
    f(t, function (t) {
      var e, t, i, a;
      if (w(t)) e = t, t = {};else {
        e = t.name;
        var o = t.ordinalMeta;
        t.ordinalMeta = null, t = n(t), t.ordinalMeta = o, i = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }
      var l = m.get(e);

      if (l !== !1) {
        var l = Pn(l);
        if (!l.length) for (var h = 0; h < (i && i.length || 1); h++) {
          for (; y < u.length && null != u[y].coordDim;) {
            y++;
          }

          y < u.length && l.push(y++);
        }
        f(l, function (n, o) {
          var l = u[n];

          if (r(s(l, t), e, o), null == l.name && i) {
            var h = i[o];
            !b(h) && (h = {
              name: h
            }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip;
          }

          a && s(l.otherDims, a);
        });
      }
    });
    var _ = i.generateCoord,
        x = i.generateCoordCount,
        M = null != x;
    x = _ ? x || 1 : 0;

    for (var S = _ || "value", T = 0; c > T; T++) {
      var v = u[T] = u[T] || new pu(),
          C = v.coordDim;
      null == C && (v.coordDim = Pu(S, h, M), v.coordDimIndex = 0, (!_ || 0 >= x) && (v.isExtraCoord = !0), x--), null == v.name && (v.name = Pu(v.coordDim, l)), null != v.type || Oo(e, T, v.name) !== hm.Must && (!v.isExtraCoord || null == v.otherDims.itemName && null == v.otherDims.seriesName) || (v.type = "ordinal");
    }

    return u;
  }

  function Au(t, e, i, n) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
    return f(e, function (t) {
      var e = t.dimsDef;
      e && (r = Math.max(r, e.length));
    }), r;
  }

  function Pu(t, e, i) {
    if (i || null != e.get(t)) {
      for (var n = 0; null != e.get(t + n);) {
        n++;
      }

      t += n;
    }

    return e.set(t, !0), t;
  }

  function Lu(t) {
    this.coordSysName = t, this.coordSysDims = [], this.axisMap = R(), this.categoryAxisMap = R(), this.firstCategoryDimIndex = null;
  }

  function Ou(t) {
    var e = t.get("coordinateSystem"),
        i = new Lu(e),
        n = fx[e];
    return n ? (n(t, i, i.axisMap, i.categoryAxisMap), i) : void 0;
  }

  function Bu(t) {
    return "category" === t.get("type");
  }

  function Eu(t, e, i) {
    i = i || {}, bo.isInstance(t) || (t = bo.seriesDataToSource(t));
    var n,
        r = e.get("coordinateSystem"),
        a = Xo.get(r),
        o = Ou(e);
    o && (n = p(o.coordSysDims, function (t) {
      var e = {
        name: t
      },
          i = o.axisMap.get(t);

      if (i) {
        var n = i.get("type");
        e.type = du(n);
      }

      return e;
    })), n || (n = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
    var s,
        l,
        h = dx(t, {
      coordDimensions: n,
      generateCoord: i.generateCoord,
      encodeDefaulter: i.useEncodeDefaulter ? y(Po, n, e) : null
    });
    o && f(h, function (t, e) {
      var i = t.coordDim,
          n = o.categoryAxisMap.get(i);
      n && (null == s && (s = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
    }), l || null == s || (h[s].otherDims.itemName = 0);
    var u = eh(e, h),
        c = new hx(h, e);
    c.setCalculationInfo(u);
    var d = null != s && zu(t) ? function (t, e, i, n) {
      return n === s ? i : this.defaultDimValueGetter(t, e, i, n);
    } : null;
    return c.hasItemOption = !1, c.initData(t, null, d), c;
  }

  function zu(t) {
    if (t.sourceFormat === em) {
      var e = Ru(t.data || []);
      return null != e && !_(On(e));
    }
  }

  function Ru(t) {
    for (var e = 0; e < t.length && null == t[e];) {
      e++;
    }

    return t[e];
  }

  function Fu(t, e) {
    var i = t.mapDimension("defaultedLabel", !0),
        n = i.length;
    if (1 === n) return vs(t, e, i[0]);

    if (n) {
      for (var r = [], a = 0; a < i.length; a++) {
        var o = vs(t, e, i[a]);
        r.push(o);
      }

      return r.join(" ");
    }
  }

  function Nu(t, e, i, n, r, a) {
    var o = i.getModel("label"),
        s = i.getModel("emphasis.label");
    ya(t, e, o, s, {
      labelFetcher: r,
      labelDataIndex: a,
      defaultText: Fu(r.getData(), a),
      isRectText: !0,
      autoColor: n
    }), Hu(t), Hu(e);
  }

  function Hu(t, e) {
    "outside" === t.textPosition && (t.textPosition = e);
  }

  function Wu(t, e, i) {
    var n = t.getArea(),
        r = t.getBaseAxis().isHorizontal(),
        a = n.x,
        o = n.y,
        s = n.width,
        l = n.height,
        h = i.get("lineStyle.width") || 2;
    a -= h / 2, o -= h / 2, s += h, l += h, a = Math.floor(a), s = Math.round(s);
    var u = new rv({
      shape: {
        x: a,
        y: o,
        width: s,
        height: l
      }
    });
    return e && (u.shape[r ? "width" : "height"] = 0, Pa(u, {
      shape: {
        width: s,
        height: l
      }
    }, i)), u;
  }

  function Vu(t, e, i) {
    var n = t.getArea(),
        r = new $g({
      shape: {
        cx: Qa(t.cx, 1),
        cy: Qa(t.cy, 1),
        r0: Qa(n.r0, 1),
        r: Qa(n.r, 1),
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        clockwise: n.clockwise
      }
    });
    return e && (r.shape.endAngle = n.startAngle, Pa(r, {
      shape: {
        endAngle: n.endAngle
      }
    }, i)), r;
  }

  function Gu(t, e, i) {
    return t ? "polar" === t.type ? Vu(t, e, i) : "cartesian2d" === t.type ? Wu(t, e, i) : null : null;
  }

  function Xu(t, e) {
    var i = t.getArea && t.getArea();

    if ("cartesian2d" === t.type) {
      var n = t.getBaseAxis();

      if ("category" !== n.type || !n.onBand) {
        var r = e.getLayout("bandWidth");
        n.isHorizontal() ? (i.x -= r, i.width += 2 * r) : (i.y -= r, i.height += 2 * r);
      }
    }

    return i;
  }

  function Yu(t, e, i) {
    i.style.text = null, Aa(i, {
      shape: {
        width: 0
      }
    }, e, t, function () {
      i.parent && i.parent.remove(i);
    });
  }

  function Uu(t, e, i) {
    i.style.text = null, Aa(i, {
      shape: {
        r: i.shape.r0
      }
    }, e, t, function () {
      i.parent && i.parent.remove(i);
    });
  }

  function qu(t) {
    return null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle;
  }

  function ju(t, e, i, n, r, a, o, l) {
    var h = e.getItemVisual(i, "color"),
        u = e.getItemVisual(i, "opacity"),
        c = e.getVisual("borderColor"),
        d = n.getModel("itemStyle"),
        f = n.getModel("emphasis.itemStyle").getBarItemStyle();
    l || t.setShape("r", d.get("barBorderRadius") || 0), t.useStyle(s({
      stroke: qu(r) ? "none" : c,
      fill: qu(r) ? "none" : h,
      opacity: u
    }, d.getBarItemStyle()));
    var p = n.getShallow("cursor");
    p && t.attr("cursor", p);
    var g = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
    l || Nu(t.style, f, n, h, a, i, g), qu(r) && (f.fill = f.stroke = "none"), pa(t, f);
  }

  function Zu(t, e) {
    var i = t.get(yx) || 0,
        n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width),
        r = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
    return Math.min(i, n, r);
  }

  function $u(t, e, i) {
    var n = t.getData(),
        r = [],
        a = n.getLayout("valueAxisHorizontal") ? 1 : 0;
    r[1 - a] = n.getLayout("valueAxisStart");
    var o = n.getLayout("largeDataIndices"),
        s = n.getLayout("barWidth"),
        l = t.getModel("backgroundStyle"),
        h = t.get("showBackground", !0);

    if (h) {
      var u = n.getLayout("largeBackgroundPoints"),
          c = [];
      c[1 - a] = n.getLayout("backgroundStart");
      var d = new Cx({
        shape: {
          points: u
        },
        incremental: !!i,
        __startPoint: c,
        __baseDimIdx: a,
        __largeDataIndices: o,
        __barWidth: s,
        silent: !0,
        z2: 0
      });
      Ju(d, l, n), e.add(d);
    }

    var f = new Cx({
      shape: {
        points: n.getLayout("largePoints")
      },
      incremental: !!i,
      __startPoint: r,
      __baseDimIdx: a,
      __largeDataIndices: o,
      __barWidth: s
    });
    e.add(f), Qu(f, t, n), f.seriesIndex = t.seriesIndex, t.get("silent") || (f.on("mousedown", Ix), f.on("mousemove", Ix));
  }

  function Ku(t, e, i) {
    var n = t.__baseDimIdx,
        r = 1 - n,
        a = t.shape.points,
        o = t.__largeDataIndices,
        s = Math.abs(t.__barWidth / 2),
        l = t.__startPoint[r];
    _x[0] = e, _x[1] = i;

    for (var h = _x[n], u = _x[1 - n], c = h - s, d = h + s, f = 0, p = a.length / 2; p > f; f++) {
      var g = 2 * f,
          v = a[g + n],
          m = a[g + r];
      if (v >= c && d >= v && (m >= l ? u >= l && m >= u : u >= m && l >= u)) return o[f];
    }

    return -1;
  }

  function Qu(t, e, i) {
    var n = i.getVisual("borderColor") || i.getVisual("color"),
        r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
    t.useStyle(r), t.style.fill = null, t.style.stroke = n, t.style.lineWidth = i.getLayout("barWidth");
  }

  function Ju(t, e, i) {
    var n = e.get("borderColor") || e.get("color"),
        r = e.getItemStyle(["color", "borderColor"]);
    t.useStyle(r), t.style.fill = null, t.style.stroke = n, t.style.lineWidth = i.getLayout("barWidth");
  }

  function tc(t, e, i) {
    var n,
        r = "polar" === i.type;
    return n = r ? i.getArea() : i.grid.getRect(), r ? {
      cx: n.cx,
      cy: n.cy,
      r0: t ? n.r0 : e.r0,
      r: t ? n.r : e.r,
      startAngle: t ? e.startAngle : 0,
      endAngle: t ? e.endAngle : 2 * Math.PI
    } : {
      x: t ? e.x : n.x,
      y: t ? n.y : e.y,
      width: t ? e.width : n.width,
      height: t ? n.height : e.height
    };
  }

  function ec(t, e, i) {
    var n = "polar" === t.type ? $g : rv;
    return new n({
      shape: tc(e, i, t),
      silent: !0,
      z2: 0
    });
  }

  function ic(t, e) {
    if ("image" !== this.type) {
      var i = this.style,
          n = this.shape;
      n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1);
    }
  }

  function nc(t, e, i, n, r, a, o) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? $r(t.slice(8), new si(e, i, n, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? Zr(t.slice(7), {}, new si(e, i, n, r), o ? "center" : "cover") : new Ex({
      shape: {
        symbolType: t,
        x: e,
        y: i,
        width: n,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = ic, l.setColor(a), l;
  }

  function rc(t, e, i, n) {
    var r,
        a,
        o = eo(i - t.rotation),
        s = n[0] > n[1],
        l = "start" === e && !s || "start" !== e && s;
    return io(o - zx / 2) ? (a = l ? "bottom" : "top", r = "center") : io(o - 1.5 * zx) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * zx > o && o > zx / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: o,
      textAlign: r,
      textVerticalAlign: a
    };
  }

  function ac(t, e, i) {
    if (!Bh(t.axis)) {
      var n = t.get("axisLabel.showMinLabel"),
          r = t.get("axisLabel.showMaxLabel");
      e = e || [], i = i || [];
      var a = e[0],
          o = e[1],
          s = e[e.length - 1],
          l = e[e.length - 2],
          h = i[0],
          u = i[1],
          c = i[i.length - 1],
          d = i[i.length - 2];
      n === !1 ? (oc(a), oc(h)) : sc(a, o) && (n ? (oc(o), oc(u)) : (oc(a), oc(h))), r === !1 ? (oc(s), oc(c)) : sc(l, s) && (r ? (oc(l), oc(d)) : (oc(s), oc(c)));
    }
  }

  function oc(t) {
    t && (t.ignore = !0);
  }

  function sc(t, e) {
    var i = t && t.getBoundingRect().clone(),
        n = e && e.getBoundingRect().clone();

    if (i && n) {
      var r = Me([]);
      return Ie(r, r, -t.rotation), i.applyTransform(Te([], r, t.getLocalTransform())), n.applyTransform(Te([], r, e.getLocalTransform())), i.intersect(n);
    }
  }

  function lc(t) {
    return "middle" === t || "center" === t;
  }

  function hc(t, e, i, n, r) {
    for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
      var h = t[l].coord;
      o[0] = h, o[1] = 0, s[0] = h, s[1] = i, e && (Z(o, o, e), Z(s, s, e));
      var u = new ov({
        anid: r + "_" + t[l].tickValue,
        subPixelOptimize: !0,
        shape: {
          x1: o[0],
          y1: o[1],
          x2: s[0],
          y2: s[1]
        },
        style: n,
        z2: 2,
        silent: !0
      });
      a.push(u);
    }

    return a;
  }

  function uc(t, e, i) {
    var n = e.axis,
        r = e.getModel("axisTick");

    if (r.get("show") && !n.scale.isBlank()) {
      for (var a = r.getModel("lineStyle"), o = i.tickDirection * r.get("length"), l = n.getTicksCoords(), h = hc(l, t._transform, o, s(a.getLineStyle(), {
        stroke: e.get("axisLine.lineStyle.color")
      }), "ticks"), u = 0; u < h.length; u++) {
        t.group.add(h[u]);
      }

      return h;
    }
  }

  function cc(t, e, i) {
    var n = e.axis,
        r = e.getModel("minorTick");

    if (r.get("show") && !n.scale.isBlank()) {
      var a = n.getMinorTicksCoords();
      if (a.length) for (var o = r.getModel("lineStyle"), l = i.tickDirection * r.get("length"), h = s(o.getLineStyle(), s(e.getModel("axisTick").getLineStyle(), {
        stroke: e.get("axisLine.lineStyle.color")
      })), u = 0; u < a.length; u++) {
        for (var c = hc(a[u], t._transform, l, h, "minorticks_" + u), d = 0; d < c.length; d++) {
          t.group.add(c[d]);
        }
      }
    }
  }

  function dc(t, e, i) {
    var n = e.axis,
        r = I(i.axisLabelShow, e.get("axisLabel.show"));

    if (r && !n.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
          o = a.get("margin"),
          s = n.getViewLabels(),
          l = (I(i.labelRotate, a.get("rotate")) || 0) * zx / 180,
          h = Hx(i.rotation, l, i.labelDirection),
          u = e.getCategories && e.getCategories(!0),
          c = [],
          d = Wx(e),
          p = e.get("triggerEvent");
      return f(s, function (r, s) {
        var l = r.tickValue,
            f = r.formattedLabel,
            g = r.rawLabel,
            v = a;
        u && u[l] && u[l].textStyle && (v = new Ga(u[l].textStyle, a, e.ecModel));
        var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
            y = n.dataToCoord(l),
            _ = [y, i.labelOffset + i.labelDirection * o],
            x = new Ug({
          anid: "label_" + l,
          position: _,
          rotation: h.rotation,
          silent: d,
          z2: 10
        });
        xa(x.style, v, {
          text: f,
          textAlign: v.getShallow("align", !0) || h.textAlign,
          textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
          textFill: "function" == typeof m ? m("category" === n.type ? g : "value" === n.type ? l + "" : l, s) : m
        }), p && (x.eventData = Nx(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform();
      }), c;
    }
  }

  function fc(t, e) {
    var i = {
      axesInfo: {},
      seriesInvolved: !1,
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return pc(i, t, e), i.seriesInvolved && vc(i, t), i;
  }

  function pc(t, e, i) {
    var n = e.getComponent("tooltip"),
        r = e.getComponent("axisPointer"),
        a = r.get("link", !0) || [],
        o = [];
    Vx(i.getCoordinateSystems(), function (i) {
      function s(n, s, l) {
        var u = l.model.getModel("axisPointer", r),
            d = u.get("show");

        if (d && ("auto" !== d || n || bc(u))) {
          null == s && (s = u.get("triggerTooltip")), u = n ? gc(l, c, r, e, n, s) : u;
          var f = u.get("snap"),
              p = Mc(l.model),
              g = s || f || "category" === l.type,
              v = t.axesInfo[p] = {
            key: p,
            axis: l,
            coordSys: i,
            axisPointerModel: u,
            triggerTooltip: s,
            involveSeries: g,
            snap: f,
            useHandle: bc(u),
            seriesModels: []
          };
          h[p] = v, t.seriesInvolved |= g;
          var m = mc(a, l);

          if (null != m) {
            var y = o[m] || (o[m] = {
              axesInfo: {}
            });
            y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;
          }
        }
      }

      if (i.axisPointerEnabled) {
        var l = Mc(i.model),
            h = t.coordSysAxesInfo[l] = {};
        t.coordSysMap[l] = i;
        var u = i.model,
            c = u.getModel("tooltip", n);

        if (Vx(i.getAxes(), Gx(s, !1, null)), i.getTooltipAxes && n && c.get("show")) {
          var d = "axis" === c.get("trigger"),
              f = "cross" === c.get("axisPointer.type"),
              p = i.getTooltipAxes(c.get("axisPointer.axis"));
          (d || f) && Vx(p.baseAxes, Gx(s, f ? "cross" : !0, d)), f && Vx(p.otherAxes, Gx(s, "cross", !1));
        }
      }
    });
  }

  function gc(t, e, i, r, a, o) {
    var l = e.getModel("axisPointer"),
        h = {};
    Vx(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
      h[t] = n(l.get(t));
    }), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");
    var u = h.label || (h.label = {});

    if (null == u.show && (u.show = !1), "cross" === a) {
      var c = l.get("label.show");

      if (u.show = null != c ? c : !0, !o) {
        var d = h.lineStyle = l.get("crossStyle");
        d && s(u, d.textStyle);
      }
    }

    return t.model.getModel("axisPointer", new Ga(h, i, r));
  }

  function vc(t, e) {
    e.eachSeries(function (e) {
      var i = e.coordinateSystem,
          n = e.get("tooltip.trigger", !0),
          r = e.get("tooltip.show", !0);
      i && "none" !== n && n !== !1 && "item" !== n && r !== !1 && e.get("axisPointer.show", !0) !== !1 && Vx(t.coordSysAxesInfo[Mc(i.model)], function (t) {
        var n = t.axis;
        i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());
      });
    }, this);
  }

  function mc(t, e) {
    for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};
      if (yc(a[n + "AxisId"], i.id) || yc(a[n + "AxisIndex"], i.componentIndex) || yc(a[n + "AxisName"], i.name)) return r;
    }
  }

  function yc(t, e) {
    return "all" === t || _(t) && h(t, e) >= 0 || t === e;
  }

  function _c(t) {
    var e = xc(t);

    if (e) {
      var i = e.axisPointerModel,
          n = e.axis.scale,
          r = i.option,
          a = i.get("status"),
          o = i.get("value");
      null != o && (o = n.parse(o));
      var s = bc(i);
      null == a && (r.status = s ? "show" : "hide");
      var l = n.getExtent().slice();
      l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }

  function xc(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[Mc(t)];
  }

  function wc(t) {
    var e = xc(t);
    return e && e.axisPointerModel;
  }

  function bc(t) {
    return !!t.get("handle.show");
  }

  function Mc(t) {
    return t.type + "||" + t.id;
  }

  function Sc(t, e, i, n, r, a) {
    var o = Xx.getAxisPointerClass(t.axisPointerClass);

    if (o) {
      var s = wc(e);
      s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, n, a) : Tc(t, n);
    }
  }

  function Tc(t, e, i) {
    var n = t._axisPointer;
    n && n.dispose(e, i), t._axisPointer = null;
  }

  function Cc(t, e, i) {
    i = i || {};
    var n = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero" : s,
        h = r.dim,
        u = n.getRect(),
        c = [u.x, u.x + u.width, u.y, u.y + u.height],
        d = {
      left: 0,
      right: 1,
      top: 0,
      bottom: 1,
      onZero: 2
    },
        f = e.get("offset") || 0,
        p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];

    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
    }

    a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
    var v = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), I(i.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
    var m = e.get("axisLabel.rotate");
    return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
  }

  function Ic(t, e, i, n) {
    var r = i.axis;

    if (!r.scale.isBlank()) {
      var a = i.getModel("splitArea"),
          o = a.getModel("areaStyle"),
          l = o.get("color"),
          h = n.coordinateSystem.getRect(),
          u = r.getTicksCoords({
        tickModel: a,
        clamp: !0
      });

      if (u.length) {
        var c = l.length,
            d = t.__splitAreaColors,
            f = R(),
            p = 0;
        if (d) for (var g = 0; g < u.length; g++) {
          var v = d.get(u[g].tickValue);

          if (null != v) {
            p = (v + (c - 1) * g) % c;
            break;
          }
        }
        var m = r.toGlobalCoord(u[0].coord),
            y = o.getAreaStyle();
        l = _(l) ? l : [l];

        for (var g = 1; g < u.length; g++) {
          var x,
              w,
              b,
              M,
              S = r.toGlobalCoord(u[g].coord);
          r.isHorizontal() ? (x = m, w = h.y, b = S - x, M = h.height, m = x + b) : (x = h.x, w = m, b = h.width, M = S - w, m = w + M);
          var T = u[g - 1].tickValue;
          null != T && f.set(T, p), e.add(new rv({
            anid: null != T ? "area_" + T : null,
            shape: {
              x: x,
              y: w,
              width: b,
              height: M
            },
            style: s({
              fill: l[p]
            }, y),
            silent: !0
          })), p = (p + 1) % c;
        }

        t.__splitAreaColors = f;
      }
    }
  }

  function kc(t) {
    t.__splitAreaColors = null;
  }

  function Dc(t, e, i, n, r) {
    var a = t.axis;

    if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return void i.showPointer(t, e);
      var s = Ac(e, t),
          l = s.payloadBatch,
          h = s.snapToValue;
      l[0] && null == r.seriesIndex && o(r, l[0]), !n && t.snap && a.containData(h) && null != h && (e = h), i.showPointer(t, e, l, r), i.showTooltip(t, s, h);
    }
  }

  function Ac(t, e) {
    var i = e.axis,
        n = i.dim,
        r = t,
        a = [],
        o = Number.MAX_VALUE,
        s = -1;
    return $x(e.seriesModels, function (e) {
      var l,
          h,
          u = e.getData().mapDimension(n, !0);

      if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(u, t, i);
        h = c.dataIndices, l = c.nestestValue;
      } else {
        if (h = e.getData().indicesOfNearest(u[0], t, "category" === i.type ? .5 : null), !h.length) return;
        l = e.getData().get(u[0], h[0]);
      }

      if (null != l && isFinite(l)) {
        var d = t - l,
            f = Math.abs(d);
        o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), $x(h, function (t) {
          a.push({
            seriesIndex: e.seriesIndex,
            dataIndexInside: t,
            dataIndex: e.getData().getRawIndex(t)
          });
        }));
      }
    }), {
      payloadBatch: a,
      snapToValue: r
    };
  }

  function Pc(t, e, i, n) {
    t[e.key] = {
      value: i,
      payloadBatch: n
    };
  }

  function Lc(t, e, i, n) {
    var r = i.payloadBatch,
        a = e.axis,
        o = a.model,
        s = e.axisPointerModel;

    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
          h = Mc(l),
          u = t.map[h];
      u || (u = t.map[h] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, t.list.push(u)), u.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: n,
        valueLabelOpt: {
          precision: s.get("label.precision"),
          formatter: s.get("label.formatter")
        },
        seriesDataIndices: r.slice()
      });
    }
  }

  function Oc(t, e, i) {
    var n = i.axesInfo = [];
    $x(e, function (e, i) {
      var r = e.axisPointerModel.option,
          a = t[i];
      a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && n.push({
        axisDim: e.axis.dim,
        axisIndex: e.axis.model.componentIndex,
        value: r.value
      });
    });
  }

  function Bc(t, e, i, n) {
    if (Fc(e) || !t.list.length) return void n({
      type: "hideTip"
    });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    n({
      type: "showTip",
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: i.tooltipOption,
      position: i.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list
    });
  }

  function Ec(t, e, i) {
    var n = i.getZr(),
        r = "axisPointerLastHighlights",
        a = Qx(n)[r] || {},
        o = Qx(n)[r] = {};
    $x(t, function (t) {
      var e = t.axisPointerModel.option;
      "show" === e.status && $x(e.seriesDataIndices, function (t) {
        var e = t.seriesIndex + " | " + t.dataIndex;
        o[e] = t;
      });
    });
    var s = [],
        l = [];
    f(a, function (t, e) {
      !o[e] && l.push(t);
    }), f(o, function (t, e) {
      !a[e] && s.push(t);
    }), l.length && i.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      batch: l
    }), s.length && i.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      batch: s
    });
  }

  function zc(t, e) {
    for (var i = 0; i < (t || []).length; i++) {
      var n = t[i];
      if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n;
    }
  }

  function Rc(t) {
    var e = t.axis.model,
        i = {},
        n = i.axisDim = t.axis.dim;
    return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex, i.axisName = i[n + "AxisName"] = e.name, i.axisId = i[n + "AxisId"] = e.id, i;
  }

  function Fc(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }

  function Nc(t, e, i) {
    if (!Cd.node) {
      var n = e.getZr();
      tw(n).records || (tw(n).records = {}), Hc(n, e);
      var r = tw(n).records[t] || (tw(n).records[t] = {});
      r.handler = i;
    }
  }

  function Hc(t, e) {
    function i(i, n) {
      t.on(i, function (i) {
        var r = Xc(e);
        ew(tw(t).records, function (t) {
          t && n(t, i, r.dispatchAction);
        }), Wc(r.pendings, e);
      });
    }

    tw(t).initialized || (tw(t).initialized = !0, i("click", y(Gc, "click")), i("mousemove", y(Gc, "mousemove")), i("globalout", Vc));
  }

  function Wc(t, e) {
    var i,
        n = t.showTip.length,
        r = t.hideTip.length;
    n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, e.dispatchAction(i));
  }

  function Vc(t, e, i) {
    t.handler("leave", null, i);
  }

  function Gc(t, e, i, n) {
    e.handler(t, i, n);
  }

  function Xc(t) {
    var e = {
      showTip: [],
      hideTip: []
    },
        i = function i(n) {
      var r = e[n.type];
      r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n));
    };

    return {
      dispatchAction: i,
      pendings: e
    };
  }

  function Yc(t, e) {
    if (!Cd.node) {
      var i = e.getZr(),
          n = (tw(i).records || {})[t];
      n && (tw(i).records[t] = null);
    }
  }

  function Uc() {}

  function qc(t, e, i, n) {
    jc(nw(i).lastProp, n) || (nw(i).lastProp = n, e ? Aa(i, n, t) : (i.stopAnimation(), i.attr(n)));
  }

  function jc(t, e) {
    if (b(t) && b(e)) {
      var i = !0;
      return f(e, function (e, n) {
        i = i && jc(t[n], e);
      }), !!i;
    }

    return t === e;
  }

  function Zc(t, e) {
    t[e.get("label.show") ? "show" : "hide"]();
  }

  function $c(t) {
    return {
      position: t.position.slice(),
      rotation: t.rotation || 0
    };
  }

  function Kc(t, e, i) {
    var n = e.get("z"),
        r = e.get("zlevel");
    t && t.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != r && (t.zlevel = r), t.silent = i);
    });
  }

  function Qc(t) {
    var e,
        i = t.get("type"),
        n = t.getModel(i + "Style");
    return "line" === i ? (e = n.getLineStyle(), e.fill = null) : "shadow" === i && (e = n.getAreaStyle(), e.stroke = null), e;
  }

  function Jc(t, e, i, n, r) {
    var a = i.get("value"),
        o = ed(a, e.axis, e.ecModel, i.get("seriesDataIndices"), {
      precision: i.get("label.precision"),
      formatter: i.get("label.formatter")
    }),
        s = i.getModel("label"),
        l = Nv(s.get("padding") || 0),
        h = s.getFont(),
        u = Ci(o, h),
        c = r.position,
        d = u.width + l[1] + l[3],
        f = u.height + l[0] + l[2],
        p = r.align;
    "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
    var g = r.verticalAlign;
    "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), td(c, d, f, n);
    var v = s.get("backgroundColor");
    v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
      shape: {
        x: 0,
        y: 0,
        width: d,
        height: f,
        r: s.get("borderRadius")
      },
      position: c.slice(),
      style: {
        text: o,
        textFont: h,
        textFill: s.getTextColor(),
        textPosition: "inside",
        textPadding: l,
        fill: v,
        stroke: s.get("borderColor") || "transparent",
        lineWidth: s.get("borderWidth") || 0,
        shadowBlur: s.get("shadowBlur"),
        shadowColor: s.get("shadowColor"),
        shadowOffsetX: s.get("shadowOffsetX"),
        shadowOffsetY: s.get("shadowOffsetY")
      },
      z2: 10
    };
  }

  function td(t, e, i, n) {
    var r = n.getWidth(),
        a = n.getHeight();
    t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, a) - i, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
  }

  function ed(t, e, i, n, r) {
    t = e.scale.parse(t);
    var a = e.scale.getLabel(t, {
      precision: r.precision
    }),
        o = r.formatter;

    if (o) {
      var s = {
        value: Ah(e, t),
        axisDimension: e.dim,
        axisIndex: e.index,
        seriesData: []
      };
      f(n, function (t) {
        var e = i.getSeriesByIndex(t.seriesIndex),
            n = t.dataIndexInside,
            r = e && e.getDataParams(n);
        r && s.seriesData.push(r);
      }), w(o) ? a = o.replace("{value}", a) : x(o) && (a = o(s));
    }

    return a;
  }

  function id(t, e, i) {
    var n = be();
    return Ie(n, n, i.rotation), Ce(n, n, i.position), Oa([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n);
  }

  function nd(t, e, i, n, r, a) {
    var o = Rx.innerTextLayout(i.rotation, 0, i.labelDirection);
    i.labelMargin = r.get("label.margin"), Jc(e, n, r, a, {
      position: id(n.axis, t, i),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    });
  }

  function rd(t, e, i) {
    return i = i || 0, {
      x1: t[i],
      y1: t[1 - i],
      x2: e[i],
      y2: e[1 - i]
    };
  }

  function ad(t, e, i) {
    return i = i || 0, {
      x: t[i],
      y: t[1 - i],
      width: e[i],
      height: e[1 - i]
    };
  }

  function od(t, e) {
    var i = {};
    return i[e.dim + "AxisIndex"] = e.index, t.getCartesian(i);
  }

  function sd(t) {
    return "x" === t.dim ? 0 : 1;
  }

  function ld(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
        i = "left " + t + "s " + e + ",top " + t + "s " + e;
    return p(uw, function (t) {
      return t + "transition:" + i;
    }).join(";");
  }

  function hd(t) {
    var e = [],
        i = t.get("fontSize"),
        n = t.getTextColor();
    n && e.push("color:" + n), e.push("font:" + t.getFont());
    var r = t.get("lineHeight");
    null == r && (r = Math.round(3 * i / 2)), i && e.push("line-height:" + r + "px");
    var a = t.get("textShadowColor"),
        o = t.get("textShadowBlur") || 0,
        s = t.get("textShadowOffsetX") || 0,
        l = t.get("textShadowOffsetY") || 0;
    return o && e.push("text-shadow:" + s + "px " + l + "px " + o + "px " + a), lw(["decoration", "align"], function (i) {
      var n = t.get(i);
      n && e.push("text-" + i + ":" + n);
    }), e.join(";");
  }

  function ud(t) {
    var e = [],
        i = t.get("transitionDuration"),
        n = t.get("backgroundColor"),
        r = t.getModel("textStyle"),
        a = t.get("padding");
    return i && e.push(ld(i)), n && (Cd.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + Ge(n)), e.push("filter:alpha(opacity=70)"))), lw(["width", "color", "radius"], function (i) {
      var n = "border-" + i,
          r = hw(n),
          a = t.get(r);
      null != a && e.push(n + ":" + a + ("color" === i ? "" : "px"));
    }), e.push(hd(r)), null != a && e.push("padding:" + Nv(a).join("px ") + "px"), e.join(";") + ";";
  }

  function cd(t, e, i, n, r) {
    var a = e && e.painter;

    if (i) {
      var o = a && a.getViewportRoot();
      o && re(t, o, document.body, n, r);
    } else {
      t[0] = n, t[1] = r;
      var s = a && a.getViewportRootOffset();
      s && (t[0] += s.offsetLeft, t[1] += s.offsetTop);
    }

    t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
  }

  function dd(t, e, i) {
    if (Cd.wxa) return null;
    var n = document.createElement("div");
    n.domBelongToZr = !0, this.el = n;
    var r = this._zr = e.getZr(),
        a = this._appendToBody = i && i.appendToBody;
    this._styleCoord = [0, 0, 0, 0], cd(this._styleCoord, r, a, e.getWidth() / 2, e.getHeight() / 2), a ? document.body.appendChild(n) : t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
    var o = this;
    n.onmouseenter = function () {
      o._enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0;
    }, n.onmousemove = function (t) {
      if (t = t || window.event, !o._enterable) {
        var e = r.handler,
            i = r.painter.getViewportRoot();
        de(i, t, !0), e.dispatch("mousemove", t);
      }
    }, n.onmouseleave = function () {
      o._enterable && o._show && o.hideLater(o._hideDelay), o._inContent = !1;
    };
  }

  function fd(t, e, i, n) {
    t[0] = i, t[1] = n, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
  }

  function pd(t) {
    var e = this._zr = t.getZr();
    this._styleCoord = [0, 0, 0, 0], fd(this._styleCoord, e, t.getWidth() / 2, t.getHeight() / 2), this._show = !1, this._hideTimeout;
  }

  function gd(t) {
    for (var e = t.pop(); t.length;) {
      var i = t.pop();
      i && (Ga.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {
        formatter: i
      }), e = new Ga(i, e, e.ecModel));
    }

    return e;
  }

  function vd(t, e) {
    return t.dispatchAction || m(e.dispatchAction, e);
  }

  function md(t, e, i, n, r, a, o) {
    var s = i.getOuterSize(),
        l = s.width,
        h = s.height;
    return null != a && (t + l + a > n ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e];
  }

  function yd(t, e, i, n, r) {
    var a = i.getOuterSize(),
        o = a.width,
        s = a.height;
    return t = Math.min(t + o, n) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
  }

  function _d(t, e, i) {
    var n = i[0],
        r = i[1],
        a = 5,
        o = 0,
        s = 0,
        l = e.width,
        h = e.height;

    switch (t) {
      case "inside":
        o = e.x + l / 2 - n / 2, s = e.y + h / 2 - r / 2;
        break;

      case "top":
        o = e.x + l / 2 - n / 2, s = e.y - r - a;
        break;

      case "bottom":
        o = e.x + l / 2 - n / 2, s = e.y + h + a;
        break;

      case "left":
        o = e.x - n - a, s = e.y + h / 2 - r / 2;
        break;

      case "right":
        o = e.x + l + a, s = e.y + h / 2 - r / 2;
    }

    return [o, s];
  }

  function xd(t) {
    return "center" === t || "middle" === t;
  }

  var wd;
  "undefined" != typeof window ? wd = window.__DEV__ : "undefined" != typeof global && (wd = global.__DEV__), "undefined" == typeof wd && (wd = !0);

  var bd = wd,
      Md = 2311,
      Sd = function Sd() {
    return Md++;
  },
      Td = {};

  Td = "object" == (typeof wx === "undefined" ? "undefined" : _typeof(wx)) && "function" == typeof wx.getSystemInfoSync ? {
    browser: {},
    os: {},
    node: !1,
    wxa: !0,
    canvasSupported: !0,
    svgSupported: !1,
    touchEventsSupported: !0,
    domSupported: !1
  } : "undefined" == typeof document && "undefined" != typeof self ? {
    browser: {},
    os: {},
    node: !1,
    worker: !0,
    canvasSupported: !0,
    domSupported: !1
  } : "undefined" == typeof navigator ? {
    browser: {},
    os: {},
    node: !0,
    worker: !1,
    canvasSupported: !0,
    svgSupported: !0,
    domSupported: !1
  } : e(navigator.userAgent);

  var Cd = Td,
      Id = {
    "[object Function]": 1,
    "[object RegExp]": 1,
    "[object Date]": 1,
    "[object Error]": 1,
    "[object CanvasGradient]": 1,
    "[object CanvasPattern]": 1,
    "[object Image]": 1,
    "[object Canvas]": 1
  },
      kd = {
    "[object Int8Array]": 1,
    "[object Uint8Array]": 1,
    "[object Uint8ClampedArray]": 1,
    "[object Int16Array]": 1,
    "[object Uint16Array]": 1,
    "[object Int32Array]": 1,
    "[object Uint32Array]": 1,
    "[object Float32Array]": 1,
    "[object Float64Array]": 1
  },
      Dd = Object.prototype.toString,
      Ad = Array.prototype,
      Pd = Ad.forEach,
      Ld = Ad.filter,
      Od = Ad.slice,
      Bd = Ad.map,
      Ed = Ad.reduce,
      zd = {},
      Rd = function Rd() {
    return zd.createCanvas();
  };

  zd.createCanvas = function () {
    return document.createElement("canvas");
  };

  var Fd,
      Nd = "__ec_primitive__";
  z.prototype = {
    constructor: z,
    get: function get(t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null;
    },
    set: function set(t, e) {
      return this.data[t] = e;
    },
    each: function each(t, e) {
      void 0 !== e && (t = m(t, e));

      for (var i in this.data) {
        this.data.hasOwnProperty(i) && t(this.data[i], i);
      }
    },
    removeKey: function removeKey(t) {
      delete this.data[t];
    }
  };
  var Hd = "undefined" == typeof Float32Array ? Array : Float32Array,
      Wd = q,
      Vd = j;
  Q.prototype = {
    constructor: Q,
    _dragStart: function _dragStart(t) {
      for (var e = t.target; e && !e.draggable;) {
        e = e.parent;
      }

      e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(J(e, t), "dragstart", t.event));
    },
    _drag: function _drag(t) {
      var e = this._draggingTarget;

      if (e) {
        var i = t.offsetX,
            n = t.offsetY,
            r = i - this._x,
            a = n - this._y;
        this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(J(e, t), "drag", t.event);
        var o = this.findHover(i, n, e).target,
            s = this._dropTarget;
        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(J(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(J(o, t), "dragenter", t.event));
      }
    },
    _dragEnd: function _dragEnd(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.dispatchToElement(J(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(J(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    }
  };

  var Gd = Array.prototype.slice,
      Xd = function Xd(t) {
    this._$handlers = {}, this._$eventProcessor = t;
  };

  Xd.prototype = {
    constructor: Xd,
    one: function one(t, e, i, n) {
      return ee(this, t, e, i, n, !0);
    },
    on: function on(t, e, i, n) {
      return ee(this, t, e, i, n, !1);
    },
    isSilent: function isSilent(t) {
      var e = this._$handlers;
      return !e[t] || !e[t].length;
    },
    off: function off(t, e) {
      var i = this._$handlers;
      if (!t) return this._$handlers = {}, this;

      if (e) {
        if (i[t]) {
          for (var n = [], r = 0, a = i[t].length; a > r; r++) {
            i[t][r].h !== e && n.push(i[t][r]);
          }

          i[t] = n;
        }

        i[t] && 0 === i[t].length && delete i[t];
      } else delete i[t];

      return this;
    },
    trigger: function trigger(t) {
      var e = this._$handlers[t],
          i = this._$eventProcessor;

      if (e) {
        var n = arguments,
            r = n.length;
        r > 3 && (n = Gd.call(n, 1));

        for (var a = e.length, o = 0; a > o;) {
          var s = e[o];
          if (i && i.filter && null != s.query && !i.filter(t, s.query)) o++;else {
            switch (r) {
              case 1:
                s.h.call(s.ctx);
                break;

              case 2:
                s.h.call(s.ctx, n[1]);
                break;

              case 3:
                s.h.call(s.ctx, n[1], n[2]);
                break;

              default:
                s.h.apply(s.ctx, n);
            }

            s.one ? (e.splice(o, 1), a--) : o++;
          }
        }
      }

      return i && i.afterTrigger && i.afterTrigger(t), this;
    },
    triggerWithContext: function triggerWithContext(t) {
      var e = this._$handlers[t],
          i = this._$eventProcessor;

      if (e) {
        var n = arguments,
            r = n.length;
        r > 4 && (n = Gd.call(n, 1, n.length - 1));

        for (var a = n[n.length - 1], o = e.length, s = 0; o > s;) {
          var l = e[s];
          if (i && i.filter && null != l.query && !i.filter(t, l.query)) s++;else {
            switch (r) {
              case 1:
                l.h.call(a);
                break;

              case 2:
                l.h.call(a, n[1]);
                break;

              case 3:
                l.h.call(a, n[1], n[2]);
                break;

              default:
                l.h.apply(a, n);
            }

            l.one ? (e.splice(s, 1), o--) : s++;
          }
        }
      }

      return i && i.afterTrigger && i.afterTrigger(t), this;
    }
  };

  var Yd = Math.log(2),
      Ud = "___zrEVENTSAVED",
      qd = [],
      jd = "undefined" != typeof window && !!window.addEventListener,
      Zd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      $d = [],
      Kd = jd ? function (t) {
    t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
  } : function (t) {
    t.returnValue = !1, t.cancelBubble = !0;
  },
      Qd = function Qd() {
    this._track = [];
  };

  Qd.prototype = {
    constructor: Qd,
    recognize: function recognize(t, e, i) {
      return this._doTrack(t, e, i), this._recognize(t);
    },
    clear: function clear() {
      return this._track.length = 0, this;
    },
    _doTrack: function _doTrack(t, e, i) {
      var n = t.touches;

      if (n) {
        for (var r = {
          points: [],
          touches: [],
          target: e,
          event: t
        }, a = 0, o = n.length; o > a; a++) {
          var s = n[a],
              l = he(i, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }

        this._track.push(r);
      }
    },
    _recognize: function _recognize(t) {
      for (var e in Jd) {
        if (Jd.hasOwnProperty(e)) {
          var i = Jd[e](this._track, t);
          if (i) return i;
        }
      }
    }
  };
  var Jd = {
    pinch: function pinch(t, e) {
      var i = t.length;

      if (i) {
        var n = (t[i - 1] || {}).points,
            r = (t[i - 2] || {}).points || n;

        if (r && r.length > 1 && n && n.length > 1) {
          var a = ge(n) / ge(r);
          !isFinite(a) && (a = 1), e.pinchScale = a;
          var o = ve(n);
          return e.pinchX = o[0], e.pinchY = o[1], {
            type: "pinch",
            target: t[0].target,
            event: e
          };
        }
      }
    }
  },
      tf = "silent";

  _e.prototype.dispose = function () {};

  var ef = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      nf = function nf(t, e, i, n) {
    Xd.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new _e(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, Q.call(this), this.setHandlerProxy(i);
  };

  nf.prototype = {
    constructor: nf,
    setHandlerProxy: function setHandlerProxy(t) {
      this.proxy && this.proxy.dispose(), t && (f(ef, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    },
    mousemove: function mousemove(t) {
      var e = t.zrX,
          i = t.zrY,
          n = we(this, e, i),
          r = this._hovered,
          a = r.target;
      a && !a.__zr && (r = this.findHover(r.x, r.y), a = r.target);
      var o = this._hovered = n ? {
        x: e,
        y: i
      } : this.findHover(e, i),
          s = o.target,
          l = this.proxy;
      l.setCursor && l.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(o, "mousemove", t), s && s !== a && this.dispatchToElement(o, "mouseover", t);
    },
    mouseout: function mouseout(t) {
      var e = t.zrEventControl,
          i = t.zrIsToLocalDOM;
      "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !i && this.trigger("globalout", {
        type: "globalout",
        event: t
      });
    },
    resize: function resize() {
      this._hovered = {};
    },
    dispatch: function dispatch(t, e) {
      var i = this[t];
      i && i.call(this, e);
    },
    dispose: function dispose() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    },
    setCursorStyle: function setCursorStyle(t) {
      var e = this.proxy;
      e.setCursor && e.setCursor(t);
    },
    dispatchToElement: function dispatchToElement(t, e, i) {
      t = t || {};
      var n = t.target;

      if (!n || !n.silent) {
        for (var r = "on" + e, a = me(e, t, i); n && (n[r] && (a.cancelBubble = n[r].call(n, a)), n.trigger(e, a), n = n.parent, !a.cancelBubble);) {
          ;
        }

        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    },
    findHover: function findHover(t, e, i) {
      for (var n = this.storage.getDisplayList(), r = {
        x: t,
        y: e
      }, a = n.length - 1; a >= 0; a--) {
        var o;

        if (n[a] !== i && !n[a].ignore && (o = xe(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), o !== tf)) {
          r.target = n[a];
          break;
        }
      }

      return r;
    },
    processGesture: function processGesture(t, e) {
      this._gestureMgr || (this._gestureMgr = new Qd());
      var i = this._gestureMgr;
      "start" === e && i.clear();
      var n = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);

      if ("end" === e && i.clear(), n) {
        var r = n.type;
        t.gestureEvent = r, this.dispatchToElement({
          target: n.target
        }, r, n.event);
      }
    }
  }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    nf.prototype[t] = function (e) {
      var i,
          n,
          r = e.zrX,
          a = e.zrY,
          o = we(this, r, a);
      if ("mouseup" === t && o || (i = this.findHover(r, a), n = i.target), "mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n;else if ("mouseup" === t) this._upEl = n;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || Wd(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null;
      }
      this.dispatchToElement(i, t, e);
    };
  }), c(nf, Xd), c(nf, Q);

  var rf = "undefined" == typeof Float32Array ? Array : Float32Array,
      af = Me,
      of = 5e-5,
      sf = function sf(t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      lf = sf.prototype;

  lf.transform = null, lf.needLocalTransform = function () {
    return Ae(this.rotation) || Ae(this.position[0]) || Ae(this.position[1]) || Ae(this.scale[0] - 1) || Ae(this.scale[1] - 1);
  };
  var hf = [];
  lf.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        i = this.needLocalTransform(),
        n = this.transform;
    if (!i && !e) return void (n && af(n));
    n = n || be(), i ? this.getLocalTransform(n) : af(n), e && (i ? Te(n, t.transform, n) : Se(n, t.transform)), this.transform = n;
    var r = this.globalScaleRatio;

    if (null != r && 1 !== r) {
      this.getGlobalScale(hf);
      var a = hf[0] < 0 ? -1 : 1,
          o = hf[1] < 0 ? -1 : 1,
          s = ((hf[0] - a) * r + a) / hf[0] || 0,
          l = ((hf[1] - o) * r + o) / hf[1] || 0;
      n[0] *= s, n[1] *= s, n[2] *= l, n[3] *= l;
    }

    this.invTransform = this.invTransform || be(), De(this.invTransform, n);
  }, lf.getLocalTransform = function (t) {
    return sf.getLocalTransform(this, t);
  }, lf.setTransform = function (t) {
    var e = this.transform,
        i = t.dpr || 1;
    e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0);
  }, lf.restoreTransform = function (t) {
    var e = t.dpr || 1;
    t.setTransform(e, 0, 0, e, 0, 0);
  };
  var uf = [],
      cf = be();
  lf.setLocalTransform = function (t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
          i = t[2] * t[2] + t[3] * t[3],
          n = this.position,
          r = this.scale;
      Ae(e - 1) && (e = Math.sqrt(e)), Ae(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), n[0] = t[4], n[1] = t[5], r[0] = e, r[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e);
    }
  }, lf.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;
      t && t.transform && (Te(uf, t.invTransform, e), e = uf);
      var i = this.origin;
      i && (i[0] || i[1]) && (cf[4] = i[0], cf[5] = i[1], Te(uf, e, cf), uf[4] -= i[0], uf[5] -= i[1], e = uf), this.setLocalTransform(e);
    }
  }, lf.getGlobalScale = function (t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, lf.transformCoordToLocal = function (t, e) {
    var i = [t, e],
        n = this.invTransform;
    return n && Z(i, i, n), i;
  }, lf.transformCoordToGlobal = function (t, e) {
    var i = [t, e],
        n = this.transform;
    return n && Z(i, i, n), i;
  }, sf.getLocalTransform = function (t, e) {
    e = e || [], af(e);
    var i = t.origin,
        n = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];
    return i && (e[4] -= i[0], e[5] -= i[1]), ke(e, e, n), r && Ie(e, e, r), i && (e[4] += i[0], e[5] += i[1]), e[4] += a[0], e[5] += a[1], e;
  };
  var df = {
    linear: function linear(t) {
      return t;
    },
    quadraticIn: function quadraticIn(t) {
      return t * t;
    },
    quadraticOut: function quadraticOut(t) {
      return t * (2 - t);
    },
    quadraticInOut: function quadraticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    cubicIn: function cubicIn(t) {
      return t * t * t;
    },
    cubicOut: function cubicOut(t) {
      return --t * t * t + 1;
    },
    cubicInOut: function cubicInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    quarticIn: function quarticIn(t) {
      return t * t * t * t;
    },
    quarticOut: function quarticOut(t) {
      return 1 - --t * t * t * t;
    },
    quarticInOut: function quarticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    quinticIn: function quinticIn(t) {
      return t * t * t * t * t;
    },
    quinticOut: function quinticOut(t) {
      return --t * t * t * t * t + 1;
    },
    quinticInOut: function quinticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    sinusoidalIn: function sinusoidalIn(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    },
    sinusoidalOut: function sinusoidalOut(t) {
      return Math.sin(t * Math.PI / 2);
    },
    sinusoidalInOut: function sinusoidalInOut(t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    },
    exponentialIn: function exponentialIn(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    },
    exponentialOut: function exponentialOut(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    exponentialInOut: function exponentialInOut(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    },
    circularIn: function circularIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    circularOut: function circularOut(t) {
      return Math.sqrt(1 - --t * t);
    },
    circularInOut: function circularInOut(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    elasticIn: function elasticIn(t) {
      var e,
          i = .1,
          n = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n)));
    },
    elasticOut: function elasticOut(t) {
      var e,
          i = .1,
          n = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1);
    },
    elasticInOut: function elasticInOut(t) {
      var e,
          i = .1,
          n = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1);
    },
    backIn: function backIn(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    backOut: function backOut(t) {
      var e = 1.70158;
      return --t * t * ((e + 1) * t + e) + 1;
    },
    backInOut: function backInOut(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    },
    bounceIn: function bounceIn(t) {
      return 1 - df.bounceOut(1 - t);
    },
    bounceOut: function bounceOut(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    bounceInOut: function bounceInOut(t) {
      return .5 > t ? .5 * df.bounceIn(2 * t) : .5 * df.bounceOut(2 * t - 1) + .5;
    }
  };
  Pe.prototype = {
    constructor: Pe,
    step: function step(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
      var i = (t - this._startTime - this._pausedTime) / this._life;

      if (!(0 > i)) {
        i = Math.min(i, 1);
        var n = this.easing,
            r = "string" == typeof n ? df[n] : n,
            a = "function" == typeof r ? r(i) : i;
        return this.fire("frame", a), 1 === i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;
      }
    },
    restart: function restart(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;
      this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
    },
    fire: function fire(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    },
    pause: function pause() {
      this._paused = !0;
    },
    resume: function resume() {
      this._paused = !1;
    }
  };

  var ff = function ff() {
    this.head = null, this.tail = null, this._len = 0;
  },
      pf = ff.prototype;

  pf.insert = function (t) {
    var e = new gf(t);
    return this.insertEntry(e), e;
  }, pf.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, pf.remove = function (t) {
    var e = t.prev,
        i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, pf.len = function () {
    return this._len;
  }, pf.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };

  var gf = function gf(t) {
    this.value = t, this.next, this.prev;
  },
      vf = function vf(t) {
    this._list = new ff(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      mf = vf.prototype;

  mf.put = function (t, e) {
    var i = this._list,
        n = this._map,
        r = null;

    if (null == n[t]) {
      var a = i.len(),
          o = this._lastRemovedEntry;

      if (a >= this._maxSize && a > 0) {
        var s = i.head;
        i.remove(s), delete n[s.key], r = s.value, this._lastRemovedEntry = s;
      }

      o ? o.value = e : o = new gf(e), o.key = t, i.insertEntry(o), n[t] = o;
    }

    return r;
  }, mf.get = function (t) {
    var e = this._map[t],
        i = this._list;
    return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0;
  }, mf.clear = function () {
    this._list.clear(), this._map = {};
  };

  var yf = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1]
  },
      _f = new vf(20),
      xf = null,
      wf = Array.prototype.slice,
      bf = function bf(t, e, i, n) {
    this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || Ye, this._setter = n || Ue, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };

  bf.prototype = {
    when: function when(t, e) {
      var i = this._tracks;

      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          if (!i[n]) {
            i[n] = [];

            var r = this._getter(this._target, n);

            if (null == r) continue;
            0 !== t && i[n].push({
              time: 0,
              value: ti(r)
            });
          }

          i[n].push({
            time: t,
            value: e[n]
          });
        }
      }

      return this;
    },
    during: function during(t) {
      return this._onframeList.push(t), this;
    },
    pause: function pause() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].pause();
      }

      this._paused = !0;
    },
    resume: function resume() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].resume();
      }

      this._paused = !1;
    },
    isPaused: function isPaused() {
      return !!this._paused;
    },
    _doneCallback: function _doneCallback() {
      this._tracks = {}, this._clipList.length = 0;

      for (var t = this._doneList, e = t.length, i = 0; e > i; i++) {
        t[i].call(this);
      }
    },
    start: function start(t, e) {
      var i,
          n = this,
          r = 0,
          a = function a() {
        r--, r || n._doneCallback();
      };

      for (var o in this._tracks) {
        if (this._tracks.hasOwnProperty(o)) {
          var s = ni(this, t, a, this._tracks[o], o, e);
          s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s);
        }
      }

      if (i) {
        var l = i.onframe;

        i.onframe = function (t, e) {
          l(t, e);

          for (var i = 0; i < n._onframeList.length; i++) {
            n._onframeList[i](t, e);
          }
        };
      }

      return r || this._doneCallback(), this;
    },
    stop: function stop(t) {
      for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
        var r = e[n];
        t && r.onframe(this._target, 1), i && i.removeClip(r);
      }

      e.length = 0;
    },
    delay: function delay(t) {
      return this._delay = t, this;
    },
    done: function done(t) {
      return t && this._doneList.push(t), this;
    },
    getClips: function getClips() {
      return this._clipList;
    }
  };
  var Mf = 1;
  "undefined" != typeof window && (Mf = Math.max(window.devicePixelRatio || 1, 1));

  var Sf = 0,
      Tf = Mf,
      Cf = function Cf() {};

  1 === Sf && (Cf = console.error);

  var If = Cf,
      kf = function kf() {
    this.animators = [];
  };

  kf.prototype = {
    constructor: kf,
    animate: function animate(t, e) {
      var i,
          n = !1,
          r = this,
          a = this.__zr;

      if (t) {
        var o = t.split("."),
            s = r;
        n = "shape" === o[0];

        for (var l = 0, u = o.length; u > l; l++) {
          s && (s = s[o[l]]);
        }

        s && (i = s);
      } else i = r;

      if (!i) return void If('Property "' + t + '" is not existed in element ' + r.id);
      var c = r.animators,
          d = new bf(i, e);
      return d.during(function () {
        r.dirty(n);
      }).done(function () {
        c.splice(h(c, d), 1);
      }), c.push(d), a && a.animation.addAnimator(d), d;
    },
    stopAnimation: function stopAnimation(t) {
      for (var e = this.animators, i = e.length, n = 0; i > n; n++) {
        e[n].stop(t);
      }

      return e.length = 0, this;
    },
    animateTo: function animateTo(t, e, i, n, r, a) {
      ri(this, t, e, i, n, r, a);
    },
    animateFrom: function animateFrom(t, e, i, n, r, a) {
      ri(this, t, e, i, n, r, a, !0);
    }
  };

  var Df = function Df(t) {
    sf.call(this, t), Xd.call(this, t), kf.call(this, t), this.id = t.id || Sd();
  };

  Df.prototype = {
    type: "element",
    name: "",
    __zr: null,
    ignore: !1,
    clipPath: null,
    isGroup: !1,
    drift: function drift(t, e) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;

        case "vertical":
          t = 0;
      }

      var i = this.transform;
      i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1);
    },
    beforeUpdate: function beforeUpdate() {},
    afterUpdate: function afterUpdate() {},
    update: function update() {
      this.updateTransform();
    },
    traverse: function traverse() {},
    attrKV: function attrKV(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var i = this[t];
          i || (i = this[t] = []), i[0] = e[0], i[1] = e[1];
        }
      } else this[t] = e;
    },
    hide: function hide() {
      this.ignore = !0, this.__zr && this.__zr.refresh();
    },
    show: function show() {
      this.ignore = !1, this.__zr && this.__zr.refresh();
    },
    attr: function attr(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (b(t)) for (var i in t) {
        t.hasOwnProperty(i) && this.attrKV(i, t[i]);
      }
      return this.dirty(!1), this;
    },
    setClipPath: function setClipPath(t) {
      var e = this.__zr;
      e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
    },
    removeClipPath: function removeClipPath() {
      var t = this.clipPath;
      t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
    },
    addSelfToZr: function addSelfToZr(t) {
      this.__zr = t;
      var e = this.animators;
      if (e) for (var i = 0; i < e.length; i++) {
        t.animation.addAnimator(e[i]);
      }
      this.clipPath && this.clipPath.addSelfToZr(t);
    },
    removeSelfFromZr: function removeSelfFromZr(t) {
      this.__zr = null;
      var e = this.animators;
      if (e) for (var i = 0; i < e.length; i++) {
        t.animation.removeAnimator(e[i]);
      }
      this.clipPath && this.clipPath.removeSelfFromZr(t);
    }
  }, c(Df, kf), c(Df, sf), c(Df, Xd);
  var Af = Z,
      Pf = Math.min,
      Lf = Math.max;
  si.prototype = {
    constructor: si,
    union: function union(t) {
      var e = Pf(t.x, this.x),
          i = Pf(t.y, this.y);
      this.width = Lf(t.x + t.width, this.x + this.width) - e, this.height = Lf(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i;
    },
    applyTransform: function () {
      var t = [],
          e = [],
          i = [],
          n = [];
      return function (r) {
        if (r) {
          t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, Af(t, t, r), Af(e, e, r), Af(i, i, r), Af(n, n, r), this.x = Pf(t[0], e[0], i[0], n[0]), this.y = Pf(t[1], e[1], i[1], n[1]);
          var a = Lf(t[0], e[0], i[0], n[0]),
              o = Lf(t[1], e[1], i[1], n[1]);
          this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(),
    calculateTransform: function calculateTransform(t) {
      var e = this,
          i = t.width / e.width,
          n = t.height / e.height,
          r = be();
      return Ce(r, r, [-e.x, -e.y]), ke(r, r, [i, n]), Ce(r, r, [t.x, t.y]), r;
    },
    intersect: function intersect(t) {
      if (!t) return !1;
      t instanceof si || (t = si.create(t));
      var e = this,
          i = e.x,
          n = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          h = t.y + t.height;
      return !(o > n || i > s || l > a || r > h);
    },
    contain: function contain(t, e) {
      var i = this;
      return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
    },
    clone: function clone() {
      return new si(this.x, this.y, this.width, this.height);
    },
    copy: function copy(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    },
    plain: function plain() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }
  }, si.create = function (t) {
    return new si(t.x, t.y, t.width, t.height);
  };

  var Of = function Of(t) {
    t = t || {}, Df.call(this, t);

    for (var e in t) {
      t.hasOwnProperty(e) && (this[e] = t[e]);
    }

    this._children = [], this.__storage = null, this.__dirty = !0;
  };

  Of.prototype = {
    constructor: Of,
    isGroup: !0,
    type: "group",
    silent: !1,
    children: function children() {
      return this._children.slice();
    },
    childAt: function childAt(t) {
      return this._children[t];
    },
    childOfName: function childOfName(t) {
      for (var e = this._children, i = 0; i < e.length; i++) {
        if (e[i].name === t) return e[i];
      }
    },
    childCount: function childCount() {
      return this._children.length;
    },
    add: function add(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    },
    addBefore: function addBefore(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var i = this._children,
            n = i.indexOf(e);
        n >= 0 && (i.splice(n, 0, t), this._doAdd(t));
      }

      return this;
    },
    _doAdd: function _doAdd(t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__storage,
          i = this.__zr;
      e && e !== t.__storage && (e.addToStorage(t), t instanceof Of && t.addChildrenToStorage(e)), i && i.refresh();
    },
    remove: function remove(t) {
      var e = this.__zr,
          i = this.__storage,
          n = this._children,
          r = h(n, t);
      return 0 > r ? this : (n.splice(r, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof Of && t.delChildrenFromStorage(i)), e && e.refresh(), this);
    },
    removeAll: function removeAll() {
      var t,
          e,
          i = this._children,
          n = this.__storage;

      for (e = 0; e < i.length; e++) {
        t = i[e], n && (n.delFromStorage(t), t instanceof Of && t.delChildrenFromStorage(n)), t.parent = null;
      }

      return i.length = 0, this;
    },
    eachChild: function eachChild(t, e) {
      for (var i = this._children, n = 0; n < i.length; n++) {
        var r = i[n];
        t.call(e, r, n);
      }

      return this;
    },
    traverse: function traverse(t, e) {
      for (var i = 0; i < this._children.length; i++) {
        var n = this._children[i];
        t.call(e, n), "group" === n.type && n.traverse(t, e);
      }

      return this;
    },
    addChildrenToStorage: function addChildrenToStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var i = this._children[e];
        t.addToStorage(i), i instanceof Of && i.addChildrenToStorage(t);
      }
    },
    delChildrenFromStorage: function delChildrenFromStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var i = this._children[e];
        t.delFromStorage(i), i instanceof Of && i.delChildrenFromStorage(t);
      }
    },
    dirty: function dirty() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
    },
    getBoundingRect: function getBoundingRect(t) {
      for (var e = null, i = new si(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
        var o = n[a];

        if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);
          l ? (i.copy(s), i.applyTransform(l), e = e || i.clone(), e.union(i)) : (e = e || s.clone(), e.union(s));
        }
      }

      return e || i;
    }
  }, u(Of, Df);

  var Bf = 32,
      Ef = 7,
      zf = function zf() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };

  zf.prototype = {
    constructor: zf,
    traverse: function traverse(t, e) {
      for (var i = 0; i < this._roots.length; i++) {
        this._roots[i].traverse(t, e);
      }
    },
    getDisplayList: function getDisplayList(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList;
    },
    updateDisplayList: function updateDisplayList(t) {
      this._displayListLen = 0;

      for (var e = this._roots, i = this._displayList, n = 0, r = e.length; r > n; n++) {
        this._updateAndAddDisplayable(e[n], null, t);
      }

      i.length = this._displayListLen, Cd.canvasSupported && gi(i, vi);
    },
    _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, i) {
      if (!t.ignore || i) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
        var n = t.clipPath;

        if (n) {
          e = e ? e.slice() : [];

          for (var r = n, a = t; r;) {
            r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
          }
        }

        if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];
            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i);
          }

          t.__dirty = !1;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    },
    addRoot: function addRoot(t) {
      t.__storage !== this && (t instanceof Of && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    },
    delRoot: function delRoot(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var i = this._roots[e];
          i instanceof Of && i.delChildrenFromStorage(this);
        }

        return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
      }

      if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) {
        this.delRoot(t[e]);
      } else {
        var r = h(this._roots, t);
        r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Of && t.delChildrenFromStorage(this));
      }
    },
    addToStorage: function addToStorage(t) {
      return t && (t.__storage = this, t.dirty(!1)), this;
    },
    delFromStorage: function delFromStorage(t) {
      return t && (t.__storage = null), this;
    },
    dispose: function dispose() {
      this._renderList = this._roots = null;
    },
    displayableSortFunc: vi
  };

  var Rf = {
    shadowBlur: 1,
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    textShadowBlur: 1,
    textShadowOffsetX: 1,
    textShadowOffsetY: 1,
    textBoxShadowBlur: 1,
    textBoxShadowOffsetX: 1,
    textBoxShadowOffsetY: 1
  },
      Ff = function Ff(t, e, i) {
    return Rf.hasOwnProperty(e) ? i *= t.dpr : i;
  },
      Nf = {
    NONE: 0,
    STYLE_BIND: 1,
    PLAIN_TEXT: 2
  },
      Hf = 9,
      Wf = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      Vf = function Vf(t) {
    this.extendFrom(t, !1);
  };

  Vf.prototype = {
    constructor: Vf,
    fill: "#000",
    stroke: null,
    opacity: 1,
    fillOpacity: null,
    strokeOpacity: null,
    lineDash: null,
    lineDashOffset: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineWidth: 1,
    strokeNoScale: !1,
    text: null,
    font: null,
    textFont: null,
    fontStyle: null,
    fontWeight: null,
    fontSize: null,
    fontFamily: null,
    textTag: null,
    textFill: "#000",
    textStroke: null,
    textWidth: null,
    textHeight: null,
    textStrokeWidth: 0,
    textLineHeight: null,
    textPosition: "inside",
    textRect: null,
    textOffset: null,
    textAlign: null,
    textVerticalAlign: null,
    textDistance: 5,
    textShadowColor: "transparent",
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBoxShadowColor: "transparent",
    textBoxShadowBlur: 0,
    textBoxShadowOffsetX: 0,
    textBoxShadowOffsetY: 0,
    transformText: !1,
    textRotation: 0,
    textOrigin: null,
    textBackgroundColor: null,
    textBorderColor: null,
    textBorderWidth: 0,
    textBorderRadius: 0,
    textPadding: null,
    rich: null,
    truncate: null,
    blend: null,
    bind: function bind(t, e, i) {
      var n = this,
          r = i && i.style,
          a = !r || t.__attrCachedBy !== Nf.STYLE_BIND;
      t.__attrCachedBy = Nf.STYLE_BIND;

      for (var o = 0; o < Wf.length; o++) {
        var s = Wf[o],
            l = s[0];
        (a || n[l] !== r[l]) && (t[l] = Ff(t, l, n[l] || s[1]));
      }

      if ((a || n.fill !== r.fill) && (t.fillStyle = n.fill), (a || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
        var h = n.lineWidth;
        t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    },
    hasFill: function hasFill() {
      var t = this.fill;
      return null != t && "none" !== t;
    },
    hasStroke: function hasStroke() {
      var t = this.stroke;
      return null != t && "none" !== t && this.lineWidth > 0;
    },
    extendFrom: function extendFrom(t, e) {
      if (t) for (var i in t) {
        !t.hasOwnProperty(i) || e !== !0 && (e === !1 ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i]);
      }
    },
    set: function set(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
    },
    clone: function clone() {
      var t = new this.constructor();
      return t.extendFrom(this, !0), t;
    },
    getGradient: function getGradient(t, e, i) {
      for (var n = "radial" === e.type ? yi : mi, r = n(t, e, i), a = e.colorStops, o = 0; o < a.length; o++) {
        r.addColorStop(a[o].offset, a[o].color);
      }

      return r;
    }
  };

  for (var Gf = Vf.prototype, Xf = 0; Xf < Wf.length; Xf++) {
    var Yf = Wf[Xf];
    Yf[0] in Gf || (Gf[Yf[0]] = Yf[1]);
  }

  Vf.getGradient = Gf.getGradient;

  var Uf = function Uf(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };

  Uf.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };

  var qf = function qf(t, e, i) {
    var n;
    i = i || Tf, "string" == typeof t ? n = xi(t, e, i) : b(t) && (n = t, t = n.id), this.id = t, this.dom = n;
    var r = n.style;
    r && (n.onselectstart = _i, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i;
  };

  qf.prototype = {
    constructor: qf,
    __dirty: !0,
    __used: !1,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: !1,
    getElementCount: function getElementCount() {
      return this.__endIndex - this.__startIndex;
    },
    initContext: function initContext() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    },
    createBackBuffer: function createBackBuffer() {
      var t = this.dpr;
      this.domBack = xi("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t);
    },
    resize: function resize(t, e) {
      var i = this.dpr,
          n = this.dom,
          r = n.style,
          a = this.domBack;
      r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 !== i && this.ctxBack.scale(i, i));
    },
    clear: function clear(t, e) {
      var i = this.dom,
          n = this.ctx,
          r = i.width,
          a = i.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;

      if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i, 0, 0, r / l, a / l)), n.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var h;
        e.colorStops ? (h = e.__canvasGradient || Vf.getGradient(n, e, {
          x: 0,
          y: 0,
          width: r,
          height: a
        }), e.__canvasGradient = h) : e.image && (h = Uf.prototype.getCanvasPattern.call(e, n)), n.save(), n.fillStyle = h || e, n.fillRect(0, 0, r, a), n.restore();
      }

      if (o) {
        var u = this.domBack;
        n.save(), n.globalAlpha = s, n.drawImage(u, 0, 0, r, a), n.restore();
      }
    }
  };

  var jf = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      Zf = new vf(50),
      $f = {},
      Kf = 0,
      Qf = 5e3,
      Jf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      tp = "12px sans-serif",
      ep = {};

  ep.measureText = function (t, e) {
    var i = l();
    return i.font = e || tp, i.measureText(t);
  };

  var ip = tp,
      np = {
    left: 1,
    right: 1,
    center: 1
  },
      rp = {
    top: 1,
    bottom: 1,
    middle: 1
  },
      ap = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
      op = {},
      sp = {},
      lp = new si(),
      hp = function hp() {};

  hp.prototype = {
    constructor: hp,
    drawRectText: function drawRectText(t, e) {
      var i = this.style;
      e = i.textRect || e, this.__dirty && Gi(i, !0);
      var n = i.text;

      if (null != n && (n += ""), sn(n, i)) {
        t.save();
        var r = this.transform;
        i.transformText ? this.setTransform(t) : r && (lp.copy(e), lp.applyTransform(r), e = lp), Yi(this, t, n, i, e, Hf), t.restore();
      }
    }
  }, ln.prototype = {
    constructor: ln,
    type: "displayable",
    __dirty: !0,
    invisible: !1,
    z: 0,
    z2: 0,
    zlevel: 0,
    draggable: !1,
    dragging: !1,
    silent: !1,
    culling: !1,
    cursor: "pointer",
    rectHover: !1,
    progressive: !1,
    incremental: !1,
    globalScaleRatio: 1,
    beforeBrush: function beforeBrush() {},
    afterBrush: function afterBrush() {},
    brush: function brush() {},
    getBoundingRect: function getBoundingRect() {},
    contain: function contain(t, e) {
      return this.rectContain(t, e);
    },
    traverse: function traverse(t, e) {
      t.call(e, this);
    },
    rectContain: function rectContain(t, e) {
      var i = this.transformCoordToLocal(t, e),
          n = this.getBoundingRect();
      return n.contain(i[0], i[1]);
    },
    dirty: function dirty() {
      this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();
    },
    animateStyle: function animateStyle(t) {
      return this.animate("style", t);
    },
    attrKV: function attrKV(t, e) {
      "style" !== t ? Df.prototype.attrKV.call(this, t, e) : this.style.set(e);
    },
    setStyle: function setStyle(t, e) {
      return this.style.set(t, e), this.dirty(!1), this;
    },
    useStyle: function useStyle(t) {
      return this.style = new Vf(t, this), this.dirty(!1), this;
    },
    calculateTextPosition: null
  }, u(ln, Df), c(ln, hp), hn.prototype = {
    constructor: hn,
    type: "image",
    brush: function brush(t, e) {
      var i = this.style,
          n = i.image;
      i.bind(t, this, e);
      var r = this._image = bi(n, this._image, this, this.onload);

      if (r && Si(r)) {
        var a = i.x || 0,
            o = i.y || 0,
            s = i.width,
            l = i.height,
            h = r.width / r.height;

        if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
          var u = i.sx || 0,
              c = i.sy || 0;
          t.drawImage(r, u, c, i.sWidth, i.sHeight, a, o, s, l);
        } else if (i.sx && i.sy) {
          var u = i.sx,
              c = i.sy,
              d = s - u,
              f = l - c;
          t.drawImage(r, u, c, d, f, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);

        null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    },
    getBoundingRect: function getBoundingRect() {
      var t = this.style;
      return this._rect || (this._rect = new si(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    }
  }, u(hn, ln);

  var up = 1e5,
      cp = 314159,
      dp = .01,
      fp = .001,
      pp = new si(0, 0, 0, 0),
      gp = new si(0, 0, 0, 0),
      vp = function vp(t, e, i) {
    this.type = "canvas";
    var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
    this._opts = i = o({}, i || {}), this.dpr = i.devicePixelRatio || Tf, this._singleCanvas = n, this.root = t;
    var r = t.style;
    r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
    var a = this._zlevelList = [],
        s = this._layers = {};

    if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
      var l = t.width,
          h = t.height;
      null != i.width && (l = i.width), null != i.height && (h = i.height), this.dpr = i.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
      var u = new qf(t, this, this.dpr);
      u.__builtin__ = !0, u.initContext(), s[cp] = u, u.zlevel = cp, a.push(cp), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);
      var c = this._domRoot = gn(this._width, this._height);
      t.appendChild(c);
    }

    this._hoverlayer = null, this._hoverElements = [];
  };

  vp.prototype = {
    constructor: vp,
    getType: function getType() {
      return "canvas";
    },
    isSingleCanvas: function isSingleCanvas() {
      return this._singleCanvas;
    },
    getViewportRoot: function getViewportRoot() {
      return this._domRoot;
    },
    getViewportRootOffset: function getViewportRootOffset() {
      var t = this.getViewportRoot();
      return t ? {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      } : void 0;
    },
    refresh: function refresh(t) {
      var e = this.storage.getDisplayList(!0),
          i = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);

      for (var n = 0; n < i.length; n++) {
        var r = i[n],
            a = this._layers[r];

        if (!a.__builtin__ && a.refresh) {
          var o = 0 === n ? this._backgroundColor : null;
          a.refresh(o);
        }
      }

      return this.refreshHover(), this;
    },
    addHover: function addHover(t, e) {
      if (!t.__hoverMir) {
        var i = new t.constructor({
          style: t.style,
          shape: t.shape,
          z: t.z,
          z2: t.z2,
          silent: t.silent
        });
        return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i;
      }
    },
    removeHover: function removeHover(t) {
      var e = t.__hoverMir,
          i = this._hoverElements,
          n = h(i, e);
      n >= 0 && i.splice(n, 1), t.__hoverMir = null;
    },
    clearHover: function clearHover() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var i = t[e].__from;
        i && (i.__hoverMir = null);
      }

      t.length = 0;
    },
    refreshHover: function refreshHover() {
      var t = this._hoverElements,
          e = t.length,
          i = this._hoverlayer;

      if (i && i.clear(), e) {
        gi(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(up));
        var n = {};
        i.ctx.save();

        for (var r = 0; e > r;) {
          var a = t[r],
              o = a.__from;
          o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }

        i.ctx.restore();
      }
    },
    getHoverLayer: function getHoverLayer() {
      return this.getLayer(up);
    },
    _paintList: function _paintList(t, e, i) {
      if (this._redrawId === i) {
        e = e || !1, this._updateLayerStatus(t);

        var n = this._doPaintList(t, e);

        if (this._needsManuallyCompositing && this._compositeManually(), !n) {
          var r = this;
          jf(function () {
            r._paintList(t, e, i);
          });
        }
      }
    },
    _compositeManually: function _compositeManually() {
      var t = this.getLayer(cp).ctx,
          e = this._domRoot.width,
          i = this._domRoot.height;
      t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (n) {
        n.virtual && t.drawImage(n.dom, 0, 0, e, i);
      });
    },
    _doPaintList: function _doPaintList(t, e) {
      for (var i = [], n = 0; n < this._zlevelList.length; n++) {
        var r = this._zlevelList[n],
            a = this._layers[r];
        a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && i.push(a);
      }

      for (var o = !0, s = 0; s < i.length; s++) {
        var a = i[s],
            l = a.ctx,
            h = {};
        l.save();
        var u = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            d = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
        if (a.__startIndex === a.__endIndex) a.clear(!1, p);else if (u === a.__startIndex) {
          var g = t[u];
          g.incremental && g.notClear && !e || a.clear(!1, p);
        }
        -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);

        for (var v = u; v < a.__endIndex; v++) {
          var m = t[v];

          if (this._doPaintEl(m, a, e, h), m.__dirty = m.__dirtyText = !1, c) {
            var y = Date.now() - d;
            if (y > 15) break;
          }
        }

        a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore();
      }

      return Cd.wxa && f(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    },
    _doPaintEl: function _doPaintEl(t, e, i, n) {
      var r = e.ctx,
          a = t.transform;

      if (!(!e.__dirty && !i || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && dn(t, this._width, this._height))) {
        var o = t.__clipPaths,
            s = n.prevElClipPaths;
        (!s || fn(o, s)) && (s && (r.restore(), n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), pn(o, r), n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    },
    getLayer: function getLayer(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = cp);
      var i = this._layers[t];
      return i || (i = new qf("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? r(i, this._layerConfig[t], !0) : this._layerConfig[t - dp] && r(i, this._layerConfig[t - dp], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
    },
    insertLayer: function insertLayer(t, e) {
      var i = this._layers,
          n = this._zlevelList,
          r = n.length,
          a = null,
          o = -1,
          s = this._domRoot;
      if (i[t]) return void If("ZLevel " + t + " has been used already");
      if (!cn(e)) return void If("Layer of zlevel " + t + " is not valid");

      if (r > 0 && t > n[0]) {
        for (o = 0; r - 1 > o && !(n[o] < t && n[o + 1] > t); o++) {
          ;
        }

        a = i[n[o]];
      }

      if (n.splice(o + 1, 0, t), i[t] = e, !e.virtual) if (a) {
        var l = a.dom;
        l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    },
    eachLayer: function eachLayer(t, e) {
      var i,
          n,
          r = this._zlevelList;

      for (n = 0; n < r.length; n++) {
        i = r[n], t.call(e, this._layers[i], i);
      }
    },
    eachBuiltinLayer: function eachBuiltinLayer(t, e) {
      var i,
          n,
          r,
          a = this._zlevelList;

      for (r = 0; r < a.length; r++) {
        n = a[r], i = this._layers[n], i.__builtin__ && t.call(e, i, n);
      }
    },
    eachOtherLayer: function eachOtherLayer(t, e) {
      var i,
          n,
          r,
          a = this._zlevelList;

      for (r = 0; r < a.length; r++) {
        n = a[r], i = this._layers[n], i.__builtin__ || t.call(e, i, n);
      }
    },
    getLayers: function getLayers() {
      return this._layers;
    },
    _updateLayerStatus: function _updateLayerStatus(t) {
      function e(t) {
        a && (a.__endIndex !== t && (a.__dirty = !0), a.__endIndex = t);
      }

      if (this.eachBuiltinLayer(function (t) {
        t.__dirty = t.__used = !1;
      }), this._singleCanvas) for (var i = 1; i < t.length; i++) {
        var n = t[i];

        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }

      for (var r, a = null, o = 0, i = 0; i < t.length; i++) {
        var s,
            n = t[i],
            l = n.zlevel;
        r !== l && (r = l, o = 0), n.incremental ? (s = this.getLayer(l + fp, this._needsManuallyCompositing), s.incremental = !0, o = 1) : s = this.getLayer(l + (o > 0 ? dp : 0), this._needsManuallyCompositing), s.__builtin__ || If("ZLevel " + l + " has been used by unkown layer " + s.id), s !== a && (s.__used = !0, s.__startIndex !== i && (s.__dirty = !0), s.__startIndex = i, s.__drawIndex = s.incremental ? -1 : i, e(i), a = s), n.__dirty && (s.__dirty = !0, s.incremental && s.__drawIndex < 0 && (s.__drawIndex = i));
      }

      e(i), this.eachBuiltinLayer(function (t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    },
    clear: function clear() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    },
    _clearLayer: function _clearLayer(t) {
      t.clear();
    },
    setBackgroundColor: function setBackgroundColor(t) {
      this._backgroundColor = t;
    },
    configLayer: function configLayer(t, e) {
      if (e) {
        var i = this._layerConfig;
        i[t] ? r(i[t], e, !0) : i[t] = e;

        for (var n = 0; n < this._zlevelList.length; n++) {
          var a = this._zlevelList[n];

          if (a === t || a === t + dp) {
            var o = this._layers[a];
            r(o, i[t], !0);
          }
        }
      }
    },
    delLayer: function delLayer(t) {
      var e = this._layers,
          i = this._zlevelList,
          n = e[t];
      n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(h(i, t), 1));
    },
    resize: function resize(t, e) {
      if (this._domRoot.style) {
        var i = this._domRoot;
        i.style.display = "none";
        var n = this._opts;

        if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width !== t || e !== this._height) {
          i.style.width = t + "px", i.style.height = e + "px";

          for (var r in this._layers) {
            this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          }

          f(this._progressiveLayers, function (i) {
            i.resize(t, e);
          }), this.refresh(!0);
        }

        this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;
        this._width = t, this._height = e, this.getLayer(cp).resize(t, e);
      }

      return this;
    },
    clearLayer: function clearLayer(t) {
      var e = this._layers[t];
      e && e.clear();
    },
    dispose: function dispose() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    },
    getRenderedCanvas: function getRenderedCanvas(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[cp].dom;
      var e = new qf("image", this, t.pixelRatio || this.dpr);

      if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();
        var i = e.dom.width,
            n = e.dom.height,
            r = e.ctx;
        this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
        var l = o[s];

        this._doPaintEl(l, e, !0, a);
      }

      return e.dom;
    },
    getWidth: function getWidth() {
      return this._width;
    },
    getHeight: function getHeight() {
      return this._height;
    },
    _getSize: function _getSize(t) {
      var e = this._opts,
          i = ["width", "height"][t],
          n = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];
      if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
      var o = this.root,
          s = document.defaultView.getComputedStyle(o);
      return (o[n] || un(s[i]) || un(o.style[i])) - (un(s[r]) || 0) - (un(s[a]) || 0) | 0;
    },
    pathToImage: function pathToImage(t, e) {
      e = e || this.dpr;
      var i = document.createElement("canvas"),
          n = i.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          h = a.hasStroke() ? a.lineWidth : 0,
          u = Math.max(h / 2, -s + o),
          c = Math.max(h / 2, s + o),
          d = Math.max(h / 2, -l + o),
          f = Math.max(h / 2, l + o),
          p = r.width + u + c,
          g = r.height + d + f;
      i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
      var v = {
        position: t.position,
        rotation: t.rotation,
        scale: t.scale
      };
      t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
      var m = hn,
          y = new m({
        style: {
          x: 0,
          y: 0,
          image: i
        }
      });
      return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
    }
  };

  var mp = function mp(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, Xd.call(this);
  };

  mp.prototype = {
    constructor: mp,
    addClip: function addClip(t) {
      this._clips.push(t);
    },
    addAnimator: function addAnimator(t) {
      t.animation = this;

      for (var e = t.getClips(), i = 0; i < e.length; i++) {
        this.addClip(e[i]);
      }
    },
    removeClip: function removeClip(t) {
      var e = h(this._clips, t);
      e >= 0 && this._clips.splice(e, 1);
    },
    removeAnimator: function removeAnimator(t) {
      for (var e = t.getClips(), i = 0; i < e.length; i++) {
        this.removeClip(e[i]);
      }

      t.animation = null;
    },
    _update: function _update() {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; n > o; o++) {
        var s = i[o],
            l = s.step(t, e);
        l && (r.push(l), a.push(s));
      }

      for (var o = 0; n > o;) {
        i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
      }

      n = r.length;

      for (var o = 0; n > o; o++) {
        a[o].fire(r[o]);
      }

      this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    },
    _startLoop: function _startLoop() {
      function t() {
        e._running && (jf(t), !e._paused && e._update());
      }

      var e = this;
      this._running = !0, jf(t);
    },
    start: function start() {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    },
    stop: function stop() {
      this._running = !1;
    },
    pause: function pause() {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
    },
    resume: function resume() {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
    },
    clear: function clear() {
      this._clips = [];
    },
    isFinished: function isFinished() {
      return !this._clips.length;
    },
    animate: function animate(t, e) {
      e = e || {};
      var i = new bf(t, e.loop, e.getter, e.setter);
      return this.addAnimator(i), i;
    }
  }, c(mp, Xd);

  var yp = 300,
      _p = Cd.domSupported,
      xp = function () {
    var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        e = ["touchstart", "touchend", "touchmove"],
        i = {
      pointerdown: 1,
      pointerup: 1,
      pointermove: 1,
      pointerout: 1
    },
        n = p(t, function (t) {
      var e = t.replace("mouse", "pointer");
      return i.hasOwnProperty(e) ? e : t;
    });
    return {
      mouse: t,
      touch: e,
      pointer: n
    };
  }(),
      wp = {
    mouse: ["mousemove", "mouseup"],
    pointer: ["pointermove", "pointerup"]
  },
      bp = bn.prototype;

  bp.stopPropagation = bp.stopImmediatePropagation = bp.preventDefault = F;
  var Mp = {
    mousedown: function mousedown(t) {
      t = de(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t);
    },
    mousemove: function mousemove(t) {
      t = de(this.dom, t);
      var e = this._mayPointerCapture;
      !e || t.zrX === e[0] && t.zrY === e[1] || In(this, !0), this.trigger("mousemove", t);
    },
    mouseup: function mouseup(t) {
      t = de(this.dom, t), In(this, !1), this.trigger("mouseup", t);
    },
    mouseout: function mouseout(t) {
      t = de(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");
      var e = t.toElement || t.relatedTarget;
      t.zrIsToLocalDOM = wn(this, e), this.trigger("mouseout", t);
    },
    touchstart: function touchstart(t) {
      t = de(this.dom, t), _n(t), this._lastTouchMoment = new Date(), this.handler.processGesture(t, "start"), Mp.mousemove.call(this, t), Mp.mousedown.call(this, t);
    },
    touchmove: function touchmove(t) {
      t = de(this.dom, t), _n(t), this.handler.processGesture(t, "change"), Mp.mousemove.call(this, t);
    },
    touchend: function touchend(t) {
      t = de(this.dom, t), _n(t), this.handler.processGesture(t, "end"), Mp.mouseup.call(this, t), +new Date() - this._lastTouchMoment < yp && Mp.click.call(this, t);
    },
    pointerdown: function pointerdown(t) {
      Mp.mousedown.call(this, t);
    },
    pointermove: function pointermove(t) {
      mn(t) || Mp.mousemove.call(this, t);
    },
    pointerup: function pointerup(t) {
      Mp.mouseup.call(this, t);
    },
    pointerout: function pointerout(t) {
      mn(t) || Mp.mouseout.call(this, t);
    }
  };
  f(["click", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Mp[t] = function (e) {
      e = de(this.dom, e), this.trigger(t, e);
    };
  });
  var Sp = {
    pointermove: function pointermove(t) {
      mn(t) || Sp.mousemove.call(this, t);
    },
    pointerup: function pointerup(t) {
      Sp.mouseup.call(this, t);
    },
    mousemove: function mousemove(t) {
      this.trigger("mousemove", t);
    },
    mouseup: function mouseup(t) {
      var e = this._pointerCapturing;
      In(this, !1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));
    }
  },
      Tp = Dn.prototype;
  Tp.dispose = function () {
    Cn(this._localHandlerScope), _p && Cn(this._globalHandlerScope);
  }, Tp.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, c(Dn, Xd);

  var Cp = !Cd.canvasSupported,
      Ip = {
    canvas: vp
  },
      kp = "4.3.2",
      Dp = function Dp(t, e, i) {
    i = i || {}, this.dom = e, this.id = t;
    var n = this,
        r = new zf(),
        a = i.renderer;

    if (Cp) {
      if (!Ip.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
      a = "vml";
    } else a && Ip[a] || (a = "canvas");

    var o = new Ip[a](e, r, i, t);
    this.storage = r, this.painter = o;
    var s = Cd.node || Cd.worker ? null : new Dn(o.getViewportRoot(), o.root);
    this.handler = new nf(r, o, s, o.root), this.animation = new mp({
      stage: {
        update: m(this.flush, this)
      }
    }), this.animation.start(), this._needsRefresh;
    var l = r.delFromStorage,
        h = r.addToStorage;
    r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(n);
    }, r.addToStorage = function (t) {
      h.call(r, t), t.addSelfToZr(n);
    };
  };

  Dp.prototype = {
    constructor: Dp,
    getId: function getId() {
      return this.id;
    },
    add: function add(t) {
      this.storage.addRoot(t), this._needsRefresh = !0;
    },
    remove: function remove(t) {
      this.storage.delRoot(t), this._needsRefresh = !0;
    },
    configLayer: function configLayer(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
    },
    setBackgroundColor: function setBackgroundColor(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
    },
    refreshImmediately: function refreshImmediately() {
      this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1;
    },
    refresh: function refresh() {
      this._needsRefresh = !0;
    },
    flush: function flush() {
      var t;
      this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");
    },
    addHover: function addHover(t, e) {
      if (this.painter.addHover) {
        var i = this.painter.addHover(t, e);
        return this.refreshHover(), i;
      }
    },
    removeHover: function removeHover(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    },
    clearHover: function clearHover() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    },
    refreshHover: function refreshHover() {
      this._needsRefreshHover = !0;
    },
    refreshHoverImmediately: function refreshHoverImmediately() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
    },
    resize: function resize(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    },
    clearAnimation: function clearAnimation() {
      this.animation.clear();
    },
    getWidth: function getWidth() {
      return this.painter.getWidth();
    },
    getHeight: function getHeight() {
      return this.painter.getHeight();
    },
    pathToImage: function pathToImage(t, e) {
      return this.painter.pathToImage(t, e);
    },
    setCursorStyle: function setCursorStyle(t) {
      this.handler.setCursorStyle(t);
    },
    findHover: function findHover(t, e) {
      return this.handler.findHover(t, e);
    },
    on: function on(t, e, i) {
      this.handler.on(t, e, i);
    },
    off: function off(t, e) {
      this.handler.off(t, e);
    },
    trigger: function trigger(t, e) {
      this.handler.trigger(t, e);
    },
    clear: function clear() {
      this.storage.delRoot(), this.painter.clear();
    },
    dispose: function dispose() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null;
    }
  };

  var Ap = f,
      Pp = b,
      Lp = _,
      Op = "series\x00",
      Bp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      Ep = 0,
      zp = ".",
      Rp = "___EC__COMPONENT__CONTAINER___",
      Fp = 0,
      Np = function Np(t) {
    for (var e = 0; e < t.length; e++) {
      t[e][1] || (t[e][1] = t[e][0]);
    }

    return function (e, i, n) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];

        if (!(i && h(i, o) >= 0 || n && h(n, o) < 0)) {
          var s = e.getShallow(o);
          null != s && (r[t[a][0]] = s);
        }
      }

      return r;
    };
  },
      Hp = Np([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      Wp = {
    getLineStyle: function getLineStyle(t) {
      var e = Hp(this, t);
      return e.lineDash = this.getLineDash(e.lineWidth), e;
    },
    getLineDash: function getLineDash(t) {
      null == t && (t = 1);
      var e = this.get("type"),
          i = Math.max(t, 2),
          n = 4 * t;
      return "solid" === e || null == e ? !1 : "dashed" === e ? [n, n] : [i, i];
    }
  },
      Vp = Np([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      Gp = {
    getAreaStyle: function getAreaStyle(t, e) {
      return Vp(this, t, e);
    }
  },
      Xp = Math.pow,
      Yp = Math.sqrt,
      Up = 1e-8,
      qp = 1e-4,
      jp = Yp(3),
      Zp = 1 / 3,
      $p = N(),
      Kp = N(),
      Qp = N(),
      Jp = Math.min,
      tg = Math.max,
      eg = Math.sin,
      ig = Math.cos,
      ng = 2 * Math.PI,
      rg = N(),
      ag = N(),
      og = N(),
      sg = [],
      lg = [],
      hg = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
  },
      ug = [],
      cg = [],
      dg = [],
      fg = [],
      pg = Math.min,
      gg = Math.max,
      vg = Math.cos,
      mg = Math.sin,
      yg = Math.sqrt,
      _g = Math.abs,
      xg = "undefined" != typeof Float32Array,
      wg = function wg(t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };

  wg.prototype = {
    constructor: wg,
    _xi: 0,
    _yi: 0,
    _x0: 0,
    _y0: 0,
    _ux: 0,
    _uy: 0,
    _len: 0,
    _lineDash: null,
    _dashOffset: 0,
    _dashIdx: 0,
    _dashSum: 0,
    setScale: function setScale(t, e, i) {
      i = i || 0, this._ux = _g(i / Tf / t) || 0, this._uy = _g(i / Tf / e) || 0;
    },
    getContext: function getContext() {
      return this._ctx;
    },
    beginPath: function beginPath(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    },
    moveTo: function moveTo(t, e) {
      return this.addData(hg.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    },
    lineTo: function lineTo(t, e) {
      var i = _g(t - this._xi) > this._ux || _g(e - this._yi) > this._uy || this._len < 5;
      return this.addData(hg.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this;
    },
    bezierCurveTo: function bezierCurveTo(t, e, i, n, r, a) {
      return this.addData(hg.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this;
    },
    quadraticCurveTo: function quadraticCurveTo(t, e, i, n) {
      return this.addData(hg.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this;
    },
    arc: function arc(t, e, i, n, r, a) {
      return this.addData(hg.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = vg(r) * i + t, this._yi = mg(r) * i + e, this;
    },
    arcTo: function arcTo(t, e, i, n, r) {
      return this._ctx && this._ctx.arcTo(t, e, i, n, r), this;
    },
    rect: function rect(t, e, i, n) {
      return this._ctx && this._ctx.rect(t, e, i, n), this.addData(hg.R, t, e, i, n), this;
    },
    closePath: function closePath() {
      this.addData(hg.Z);
      var t = this._ctx,
          e = this._x0,
          i = this._y0;
      return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this;
    },
    fill: function fill(t) {
      t && t.fill(), this.toStatic();
    },
    stroke: function stroke(t) {
      t && t.stroke(), this.toStatic();
    },
    setLineDash: function setLineDash(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;

        for (var e = 0, i = 0; i < t.length; i++) {
          e += t[i];
        }

        this._dashSum = e;
      }

      return this;
    },
    setLineDashOffset: function setLineDashOffset(t) {
      return this._dashOffset = t, this;
    },
    len: function len() {
      return this._len;
    },
    setData: function setData(t) {
      var e = t.length;
      this.data && this.data.length === e || !xg || (this.data = new Float32Array(e));

      for (var i = 0; e > i; i++) {
        this.data[i] = t[i];
      }

      this._len = e;
    },
    appendPath: function appendPath(t) {
      t instanceof Array || (t = [t]);

      for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++) {
        i += t[r].len();
      }

      xg && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));

      for (var r = 0; e > r; r++) {
        for (var a = t[r].data, o = 0; o < a.length; o++) {
          this.data[n++] = a[o];
        }
      }

      this._len = n;
    },
    addData: function addData(t) {
      if (this._saveData) {
        var e = this.data;
        this._len + arguments.length > e.length && (this._expandData(), e = this.data);

        for (var i = 0; i < arguments.length; i++) {
          e[this._len++] = arguments[i];
        }

        this._prevCmd = t;
      }
    },
    _expandData: function _expandData() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) {
          t[e] = this.data[e];
        }

        this.data = t;
      }
    },
    _needsDash: function _needsDash() {
      return this._lineDash;
    },
    _dashedLineTo: function _dashedLineTo(t, e) {
      var i,
          n,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          h = this._yi,
          u = t - l,
          c = e - h,
          d = yg(u * u + c * c),
          f = l,
          p = h,
          g = o.length;

      for (u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 === u && (c > 0 && e >= p || 0 > c && p >= e);) {
        n = this._dashIdx, i = o[n], f += u * i, p += c * i, this._dashIdx = (n + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? pg(f, t) : gg(f, t), c >= 0 ? pg(p, e) : gg(p, e));
      }

      u = f - t, c = p - e, this._dashOffset = -yg(u * u + c * c);
    },
    _dashedBezierTo: function _dashedBezierTo(t, e, i, n, r, a) {
      var o,
          s,
          l,
          h,
          u,
          c = this._dashSum,
          d = this._dashOffset,
          f = this._lineDash,
          p = this._ctx,
          g = this._xi,
          v = this._yi,
          m = er,
          y = 0,
          _ = this._dashIdx,
          x = f.length,
          w = 0;

      for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) {
        s = m(g, t, i, r, o + .1) - m(g, t, i, r, o), l = m(v, e, n, a, o + .1) - m(v, e, n, a, o), y += yg(s * s + l * l);
      }

      for (; x > _ && (w += f[_], !(w > d)); _++) {
        ;
      }

      for (o = (w - d) / y; 1 >= o;) {
        h = m(g, t, i, r, o), u = m(v, e, n, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += f[_] / y, _ = (_ + 1) % x;
      }

      _ % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -yg(s * s + l * l);
    },
    _dashedQuadraticTo: function _dashedQuadraticTo(t, e, i, n) {
      var r = i,
          a = n;
      i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a);
    },
    toStatic: function toStatic() {
      var t = this.data;
      t instanceof Array && (t.length = this._len, xg && (this.data = new Float32Array(t)));
    },
    getBoundingRect: function getBoundingRect() {
      ug[0] = ug[1] = dg[0] = dg[1] = Number.MAX_VALUE, cg[0] = cg[1] = fg[0] = fg[1] = -Number.MAX_VALUE;

      for (var t = this.data, e = 0, i = 0, n = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];

        switch (1 === a && (e = t[a], i = t[a + 1], n = e, r = i), o) {
          case hg.M:
            n = t[a++], r = t[a++], e = n, i = r, dg[0] = n, dg[1] = r, fg[0] = n, fg[1] = r;
            break;

          case hg.L:
            fr(e, i, t[a], t[a + 1], dg, fg), e = t[a++], i = t[a++];
            break;

          case hg.C:
            pr(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], dg, fg), e = t[a++], i = t[a++];
            break;

          case hg.Q:
            gr(e, i, t[a++], t[a++], t[a], t[a + 1], dg, fg), e = t[a++], i = t[a++];
            break;

          case hg.A:
            var s = t[a++],
                l = t[a++],
                h = t[a++],
                u = t[a++],
                c = t[a++],
                d = t[a++] + c;
            a += 1;
            var f = 1 - t[a++];
            1 === a && (n = vg(c) * h + s, r = mg(c) * u + l), vr(s, l, h, u, c, d, f, dg, fg), e = vg(d) * h + s, i = mg(d) * u + l;
            break;

          case hg.R:
            n = e = t[a++], r = i = t[a++];
            var p = t[a++],
                g = t[a++];
            fr(n, r, n + p, r + g, dg, fg);
            break;

          case hg.Z:
            e = n, i = r;
        }

        $(ug, ug, dg), K(cg, cg, fg);
      }

      return 0 === a && (ug[0] = ug[1] = cg[0] = cg[1] = 0), new si(ug[0], ug[1], cg[0] - ug[0], cg[1] - ug[1]);
    },
    rebuildPath: function rebuildPath(t) {
      for (var e, i, n, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {
        var d = s[c++];

        switch (1 === c && (n = s[c], r = s[c + 1], e = n, i = r), d) {
          case hg.M:
            e = n = s[c++], i = r = s[c++], t.moveTo(n, r);
            break;

          case hg.L:
            a = s[c++], o = s[c++], (_g(a - n) > l || _g(o - r) > h || c === u - 1) && (t.lineTo(a, o), n = a, r = o);
            break;

          case hg.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
            break;

          case hg.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
            break;

          case hg.A:
            var f = s[c++],
                p = s[c++],
                g = s[c++],
                v = s[c++],
                m = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > v ? g : v,
                b = g > v ? 1 : g / v,
                M = g > v ? v / g : 1,
                S = Math.abs(g - v) > .001,
                T = m + y;
            S ? (t.translate(f, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / M), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, T, 1 - x), 1 === c && (e = vg(m) * g + f, i = mg(m) * v + p), n = vg(T) * g + f, r = mg(T) * v + p;
            break;

          case hg.R:
            e = n = s[c], i = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
            break;

          case hg.Z:
            t.closePath(), n = e, r = i;
        }
      }
    }
  }, wg.CMD = hg;
  var bg = 2 * Math.PI,
      Mg = 2 * Math.PI,
      Sg = wg.CMD,
      Tg = 2 * Math.PI,
      Cg = 1e-4,
      Ig = [-1, -1, -1],
      kg = [-1, -1],
      Dg = Uf.prototype.getCanvasPattern,
      Ag = Math.abs,
      Pg = new wg(!0);
  Pr.prototype = {
    constructor: Pr,
    type: "path",
    __dirtyPath: !0,
    strokeContainThreshold: 5,
    segmentIgnoreThreshold: 0,
    subPixelOptimize: !1,
    brush: function brush(t, e) {
      var i = this.style,
          n = this.path || Pg,
          r = i.hasStroke(),
          a = i.hasFill(),
          o = i.fill,
          s = i.stroke,
          l = a && !!o.colorStops,
          h = r && !!s.colorStops,
          u = a && !!o.image,
          c = r && !!s.image;

      if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;
        l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, o, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d));
      }

      l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Dg.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Dg.call(s, t));
      var f = i.lineDash,
          p = i.lineDashOffset,
          g = !!t.setLineDash,
          v = this.getGlobalScale();
      if (n.setScale(v[0], v[1], this.segmentIgnoreThreshold), this.__dirtyPath || f && !g && r ? (n.beginPath(t), f && !g && (n.setLineDash(f), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != i.fillOpacity) {
        var m = t.globalAlpha;
        t.globalAlpha = i.fillOpacity * i.opacity, n.fill(t), t.globalAlpha = m;
      } else n.fill(t);
      if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != i.strokeOpacity) {
        var m = t.globalAlpha;
        t.globalAlpha = i.strokeOpacity * i.opacity, n.stroke(t), t.globalAlpha = m;
      } else n.stroke(t);
      f && g && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    },
    buildPath: function buildPath() {},
    createPathProxy: function createPathProxy() {
      this.path = new wg();
    },
    getBoundingRect: function getBoundingRect() {
      var t = this._rect,
          e = this.style,
          i = !t;

      if (i) {
        var n = this.path;
        n || (n = this.path = new wg()), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect();
      }

      if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());

        if (this.__dirty || i) {
          r.copy(t);
          var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;
          e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }

        return r;
      }

      return t;
    },
    contain: function contain(t, e) {
      var i = this.transformCoordToLocal(t, e),
          n = this.getBoundingRect(),
          r = this.style;

      if (t = i[0], e = i[1], n.contain(t, e)) {
        var a = this.path.data;

        if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;
          if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Ar(a, o / s, t, e))) return !0;
        }

        if (r.hasFill()) return Dr(a, t, e);
      }

      return !1;
    },
    dirty: function dirty(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    },
    animateShape: function animateShape(t) {
      return this.animate("shape", t);
    },
    attrKV: function attrKV(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : ln.prototype.attrKV.call(this, t, e);
    },
    setShape: function setShape(t, e) {
      var i = this.shape;

      if (i) {
        if (b(t)) for (var n in t) {
          t.hasOwnProperty(n) && (i[n] = t[n]);
        } else i[t] = e;
        this.dirty(!0);
      }

      return this;
    },
    getLineScale: function getLineScale() {
      var t = this.transform;
      return t && Ag(t[0] - 1) > 1e-10 && Ag(t[3] - 1) > 1e-10 ? Math.sqrt(Ag(t[0] * t[3] - t[2] * t[1])) : 1;
    }
  }, Pr.extend = function (t) {
    var e = function e(_e2) {
      Pr.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);
      var i = t.shape;

      if (i) {
        this.shape = this.shape || {};
        var n = this.shape;

        for (var r in i) {
          !n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r]);
        }
      }

      t.init && t.init.call(this, _e2);
    };

    u(e, Pr);

    for (var i in t) {
      "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
    }

    return e;
  }, u(Pr, ln);

  var Lg = wg.CMD,
      Og = [[], [], []],
      Bg = Math.sqrt,
      Eg = Math.atan2,
      zg = function zg(t, e) {
    var i,
        n,
        r,
        a,
        o,
        s,
        l = t.data,
        h = Lg.M,
        u = Lg.C,
        c = Lg.L,
        d = Lg.R,
        f = Lg.A,
        p = Lg.Q;

    for (r = 0, a = 0; r < l.length;) {
      switch (i = l[r++], a = r, n = 0, i) {
        case h:
          n = 1;
          break;

        case c:
          n = 1;
          break;

        case u:
          n = 3;
          break;

        case p:
          n = 2;
          break;

        case f:
          var g = e[4],
              v = e[5],
              m = Bg(e[0] * e[0] + e[1] * e[1]),
              y = Bg(e[2] * e[2] + e[3] * e[3]),
              _ = Eg(-e[1] / y, e[0] / m);

          l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
          break;

        case d:
          s[0] = l[r++], s[1] = l[r++], Z(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], Z(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }

      for (o = 0; n > o; o++) {
        var s = Og[o];
        s[0] = l[r++], s[1] = l[r++], Z(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      Rg = Math.sqrt,
      Fg = Math.sin,
      Ng = Math.cos,
      Hg = Math.PI,
      Wg = function Wg(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      Vg = function Vg(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Wg(t) * Wg(e));
  },
      Gg = function Gg(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Vg(t, e));
  },
      Xg = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
      Yg = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
      Ug = function Ug(t) {
    ln.call(this, t);
  };

  Ug.prototype = {
    constructor: Ug,
    type: "text",
    brush: function brush(t, e) {
      var i = this.style;
      this.__dirty && Gi(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
      var n = i.text;
      return null != n && (n += ""), sn(n, i) ? (this.setTransform(t), Yi(this, t, n, i, null, e), void this.restoreTransform(t)) : void (t.__attrCachedBy = Nf.NONE);
    },
    getBoundingRect: function getBoundingRect() {
      var t = this.style;

      if (this.__dirty && Gi(t, !0), !this._rect) {
        var e = t.text;
        null != e ? e += "" : e = "";
        var i = Ci(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);

        if (i.x += t.x || 0, i.y += t.y || 0, nn(t.textStroke, t.textStrokeWidth)) {
          var n = t.textStrokeWidth;
          i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n;
        }

        this._rect = i;
      }

      return this._rect;
    }
  }, u(Ug, ln);

  var qg = Pr.extend({
    type: "circle",
    shape: {
      cx: 0,
      cy: 0,
      r: 0
    },
    buildPath: function buildPath(t, e, i) {
      i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
    }
  }),
      jg = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      Zg = function Zg(t) {
    return Cd.browser.ie && Cd.browser.version >= 11 ? function () {
      var e,
          i = this.__clipPaths,
          n = this.style;
      if (i) for (var r = 0; r < i.length; r++) {
        var a = i[r],
            o = a && a.shape,
            s = a && a.type;

        if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < jg.length; l++) {
            jg[l][2] = n[jg[l][0]], n[jg[l][0]] = jg[l][1];
          }

          e = !0;
          break;
        }
      }
      if (t.apply(this, arguments), e) for (var l = 0; l < jg.length; l++) {
        n[jg[l][0]] = jg[l][2];
      }
    } : t;
  },
      $g = Pr.extend({
    type: "sector",
    shape: {
      cx: 0,
      cy: 0,
      r0: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    brush: Zg(Pr.prototype.brush),
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          h = Math.cos(o),
          u = Math.sin(o);
      t.moveTo(h * r + i, u * r + n), t.lineTo(h * a + i, u * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t.closePath();
    }
  }),
      Kg = Pr.extend({
    type: "ring",
    shape: {
      cx: 0,
      cy: 0,
      r: 0,
      r0: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = 2 * Math.PI;
      t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0);
    }
  }),
      Qg = function Qg(t, e) {
    for (var i = t.length, n = [], r = 0, a = 1; i > a; a++) {
      r += q(t[a - 1], t[a]);
    }

    var o = r / 2;
    o = i > o ? i : o;

    for (var a = 0; o > a; a++) {
      var s,
          l,
          h,
          u = a / (o - 1) * (e ? i : i - 1),
          c = Math.floor(u),
          d = u - c,
          f = t[c % i];
      e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], h = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], l = t[c > i - 2 ? i - 1 : c + 1], h = t[c > i - 3 ? i - 1 : c + 2]);
      var p = d * d,
          g = d * p;
      n.push([Fr(s[0], f[0], l[0], h[0], d, p, g), Fr(s[1], f[1], l[1], h[1], d, p, g)]);
    }

    return n;
  },
      Jg = function Jg(t, e, i, n) {
    var r,
        a,
        o,
        s,
        l = [],
        h = [],
        u = [],
        c = [];

    if (n) {
      o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];

      for (var d = 0, f = t.length; f > d; d++) {
        $(o, o, t[d]), K(s, s, t[d]);
      }

      $(o, o, n[0]), K(s, s, n[1]);
    }

    for (var d = 0, f = t.length; f > d; d++) {
      var p = t[d];
      if (i) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {
        if (0 === d || d === f - 1) {
          l.push(H(t[d]));
          continue;
        }

        r = t[d - 1], a = t[d + 1];
      }
      V(h, a, r), Y(h, h, e);
      var g = q(p, r),
          v = q(p, a),
          m = g + v;
      0 !== m && (g /= m, v /= m), Y(u, h, -g), Y(c, h, v);

      var y = W([], p, u),
          _ = W([], p, c);

      n && (K(y, y, o), $(y, y, s), K(_, _, o), $(_, _, s)), l.push(y), l.push(_);
    }

    return i && l.push(l.shift()), l;
  },
      tv = Pr.extend({
    type: "polygon",
    shape: {
      points: null,
      smooth: !1,
      smoothConstraint: null
    },
    buildPath: function buildPath(t, e) {
      Nr(t, e, !0);
    }
  }),
      ev = Pr.extend({
    type: "polyline",
    shape: {
      points: null,
      smooth: !1,
      smoothConstraint: null
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      Nr(t, e, !1);
    }
  }),
      iv = Math.round,
      nv = {},
      rv = Pr.extend({
    type: "rect",
    shape: {
      r: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i, n, r, a;
      this.subPixelOptimize ? (Wr(nv, e, this.style), i = nv.x, n = nv.y, r = nv.width, a = nv.height, nv.r = e.r, e = nv) : (i = e.x, n = e.y, r = e.width, a = e.height), e.r ? Vi(t, e) : t.rect(i, n, r, a), t.closePath();
    }
  }),
      av = {},
      ov = Pr.extend({
    type: "line",
    shape: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      percent: 1
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      var i, n, r, a;
      this.subPixelOptimize ? (Hr(av, e, this.style), i = av.x1, n = av.y1, r = av.x2, a = av.y2) : (i = e.x1, n = e.y1, r = e.x2, a = e.y2);
      var o = e.percent;
      0 !== o && (t.moveTo(i, n), 1 > o && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), t.lineTo(r, a));
    },
    pointAt: function pointAt(t) {
      var e = this.shape;
      return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    }
  }),
      sv = [],
      lv = Pr.extend({
    type: "bezier-curve",
    shape: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      cpx1: 0,
      cpy1: 0,
      percent: 1
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      var i = e.x1,
          n = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          h = e.cpy2,
          u = e.percent;
      0 !== u && (t.moveTo(i, n), null == l || null == h ? (1 > u && (cr(i, o, r, u, sv), o = sv[1], r = sv[2], cr(n, s, a, u, sv), s = sv[1], a = sv[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (ar(i, o, l, r, u, sv), o = sv[1], l = sv[2], r = sv[3], ar(n, s, h, a, u, sv), s = sv[1], h = sv[2], a = sv[3]), t.bezierCurveTo(o, s, l, h, r, a)));
    },
    pointAt: function pointAt(t) {
      return Gr(this.shape, t, !1);
    },
    tangentAt: function tangentAt(t) {
      var e = Gr(this.shape, t, !0);
      return U(e, e);
    }
  }),
      hv = Pr.extend({
    type: "arc",
    shape: {
      cx: 0,
      cy: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          h = Math.sin(a);
      t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, a, o, !s);
    }
  }),
      uv = Pr.extend({
    type: "compound",
    shape: {
      paths: null
    },
    _updatePathDirty: function _updatePathDirty() {
      for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) {
        t = t || e[i].__dirtyPath;
      }

      this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    },
    beforeBrush: function beforeBrush() {
      this._updatePathDirty();

      for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) {
        t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1], t[i].segmentIgnoreThreshold);
      }
    },
    buildPath: function buildPath(t, e) {
      for (var i = e.paths || [], n = 0; n < i.length; n++) {
        i[n].buildPath(t, i[n].shape, !0);
      }
    },
    afterBrush: function afterBrush() {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {
        t[e].__dirtyPath = !1;
      }
    },
    getBoundingRect: function getBoundingRect() {
      return this._updatePathDirty(), Pr.prototype.getBoundingRect.call(this);
    }
  }),
      cv = function cv(t) {
    this.colorStops = t || [];
  };

  cv.prototype = {
    constructor: cv,
    addColorStop: function addColorStop(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      });
    }
  };

  var dv = function dv(t, e, i, n, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, cv.call(this, r);
  };

  dv.prototype = {
    constructor: dv
  }, u(dv, cv);

  var fv = function fv(t, e, i, n, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = r || !1, cv.call(this, n);
  };

  fv.prototype = {
    constructor: fv
  }, u(fv, cv), Xr.prototype.incremental = !0, Xr.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;
  }, Xr.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, Xr.prototype.addDisplayables = function (t, e) {
    e = e || !1;

    for (var i = 0; i < t.length; i++) {
      this.addDisplayable(t[i], e);
    }
  }, Xr.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      t && t(this._displayables[e]);
    }

    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      t && t(this._temporaryDisplayables[e]);
    }
  }, Xr.prototype.update = function () {
    this.updateTransform();

    for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];
      e.parent = this, e.update(), e.parent = null;
    }

    for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];
      e.parent = this, e.update(), e.parent = null;
    }
  }, Xr.prototype.brush = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var i = this._displayables[e];
      i.beforeBrush && i.beforeBrush(t), i.brush(t, e === this._cursor ? null : this._displayables[e - 1]), i.afterBrush && i.afterBrush(t);
    }

    this._cursor = e;

    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var i = this._temporaryDisplayables[e];
      i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), i.afterBrush && i.afterBrush(t);
    }

    this._temporaryDisplayables = [], this.notClear = !0;
  };
  var pv = [];
  Xr.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new si(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var i = this._displayables[e],
            n = i.getBoundingRect().clone();
        i.needLocalTransform() && n.applyTransform(i.getLocalTransform(pv)), t.union(n);
      }

      this._rect = t;
    }

    return this._rect;
  }, Xr.prototype.contain = function (t, e) {
    var i = this.transformCoordToLocal(t, e),
        n = this.getBoundingRect();
    if (n.contain(i[0], i[1])) for (var r = 0; r < this._displayables.length; r++) {
      var a = this._displayables[r];
      if (a.contain(t, e)) return !0;
    }
    return !1;
  }, u(Xr, ln);
  var gv = Math.max,
      vv = Math.min,
      mv = {},
      yv = 1,
      _v = {
    color: "textFill",
    textBorderColor: "textStroke",
    textBorderWidth: "textStrokeWidth"
  },
      xv = "emphasis",
      wv = "normal",
      bv = 1,
      Mv = {},
      Sv = {},
      Tv = Rr,
      Cv = Vr,
      Iv = R(),
      kv = 0;
  qr("circle", qg), qr("sector", $g), qr("ring", Kg), qr("polygon", tv), qr("polyline", ev), qr("rect", rv), qr("line", ov), qr("bezierCurve", lv), qr("arc", hv);
  var Dv = (Object.freeze || Object)({
    Z2_EMPHASIS_LIFT: yv,
    CACHED_LABEL_STYLE_PROPERTIES: _v,
    extendShape: Yr,
    extendPath: Ur,
    registerShape: qr,
    getShapeClass: jr,
    makePath: Zr,
    makeImage: $r,
    mergePath: Tv,
    resizePath: Qr,
    subPixelOptimizeLine: Jr,
    subPixelOptimizeRect: ta,
    subPixelOptimize: Cv,
    setElementHoverStyle: la,
    setHoverStyle: pa,
    setAsHighDownDispatcher: ga,
    isHighDownDispatcher: va,
    getHighlightDigit: ma,
    setLabelStyle: ya,
    modifyLabelStyle: _a,
    setTextStyle: xa,
    setText: wa,
    getFont: ka,
    updateProps: Aa,
    initProps: Pa,
    getTransform: La,
    applyTransform: Oa,
    transformDirection: Ba,
    groupTransition: Ea,
    clipPointsByRect: za,
    clipRectByRect: Ra,
    createIcon: Fa,
    linePolygonIntersect: Na,
    lineLineIntersect: Ha,
    Group: Of,
    Image: hn,
    Text: Ug,
    Circle: qg,
    Sector: $g,
    Ring: Kg,
    Polygon: tv,
    Polyline: ev,
    Rect: rv,
    Line: ov,
    BezierCurve: lv,
    Arc: hv,
    IncrementalDisplayable: Xr,
    CompoundPath: uv,
    LinearGradient: dv,
    RadialGradient: fv,
    BoundingRect: si
  }),
      Av = ["textStyle", "color"],
      Pv = {
    getTextColor: function getTextColor(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(Av) : null);
    },
    getFont: function getFont() {
      return ka({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    },
    getTextRect: function getTextRect(t) {
      return Ci(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"));
    }
  },
      Lv = Np([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      Ov = {
    getItemStyle: function getItemStyle(t, e) {
      var i = Lv(this, t, e),
          n = this.getBorderLineDash();
      return n && (i.lineDash = n), i;
    },
    getBorderLineDash: function getBorderLineDash() {
      var t = this.get("borderType");
      return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    }
  },
      Bv = c,
      Ev = Hn();
  Ga.prototype = {
    constructor: Ga,
    init: null,
    mergeOption: function mergeOption(t) {
      r(this.option, t, !0);
    },
    get: function get(t, e) {
      return null == t ? this.option : Xa(this.option, this.parsePath(t), !e && Ya(this, t));
    },
    getShallow: function getShallow(t, e) {
      var i = this.option,
          n = null == i ? i : i[t],
          r = !e && Ya(this, t);
      return null == n && r && (n = r.getShallow(t)), n;
    },
    getModel: function getModel(t, e) {
      var i,
          n = null == t ? this.option : Xa(this.option, t = this.parsePath(t));
      return e = e || (i = Ya(this, t)) && i.getModel(t), new Ga(n, e, this.ecModel);
    },
    isEmpty: function isEmpty() {
      return null == this.option;
    },
    restoreData: function restoreData() {},
    clone: function clone() {
      var t = this.constructor;
      return new t(n(this.option));
    },
    setReadOnly: function setReadOnly() {},
    parsePath: function parsePath(t) {
      return "string" == typeof t && (t = t.split(".")), t;
    },
    customizeGetParent: function customizeGetParent(t) {
      Ev(this).getParent = t;
    },
    isAnimationEnabled: function isAnimationEnabled() {
      if (!Cd.node) {
        if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    }
  }, jn(Ga), Zn(Ga), Bv(Ga, Wp), Bv(Ga, Gp), Bv(Ga, Pv), Bv(Ga, Ov);

  var zv = 0,
      Rv = 1e-4,
      Fv = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      Nv = P,
      Hv = /([&<>"'])/g,
      Wv = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
      Vv = ["a", "b", "c", "d", "e", "f", "g"],
      Gv = function Gv(t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      Xv = Li,
      Yv = f,
      Uv = ["left", "right", "top", "bottom", "width", "height"],
      qv = [["width", "left", "right"], ["height", "top", "bottom"]],
      jv = (y(go, "vertical"), y(go, "horizontal"), {
    getBoxLayoutParams: function getBoxLayoutParams() {
      return {
        left: this.get("left"),
        top: this.get("top"),
        right: this.get("right"),
        bottom: this.get("bottom"),
        width: this.get("width"),
        height: this.get("height")
      };
    }
  }),
      Zv = Hn(),
      $v = Ga.extend({
    type: "component",
    id: "",
    name: "",
    mainType: "",
    subType: "",
    componentIndex: 0,
    defaultOption: null,
    ecModel: null,
    dependentModels: [],
    uid: null,
    layoutMode: null,
    $constructor: function $constructor(t, e, i, n) {
      Ga.call(this, t, e, i, n), this.uid = Ua("ec_cpt_model");
    },
    init: function init(t, e, i) {
      this.mergeDefaultAndTheme(t, i);
    },
    mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var i = this.layoutMode,
          n = i ? yo(t) : {},
          a = e.getTheme();
      r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), i && mo(t, n, i);
    },
    mergeOption: function mergeOption(t) {
      r(this.option, t, !0);
      var e = this.layoutMode;
      e && mo(this.option, t, e);
    },
    optionUpdated: function optionUpdated() {},
    getDefaultOption: function getDefaultOption() {
      var t = Zv(this);

      if (!t.defaultOption) {
        for (var e = [], i = this.constructor; i;) {
          var n = i.prototype.defaultOption;
          n && e.push(n), i = i.superClass;
        }

        for (var a = {}, o = e.length - 1; o >= 0; o--) {
          a = r(a, e[o], !0);
        }

        t.defaultOption = a;
      }

      return t.defaultOption;
    },
    getReferringComponents: function getReferringComponents(t) {
      return this.ecModel.queryComponents({
        mainType: t,
        index: this.get(t + "Index", !0),
        id: this.get(t + "Id", !0)
      });
    }
  });

  Qn($v, {
    registerWhenExtend: !0
  }), qa($v), ja($v, xo), c($v, jv);
  var Kv = "";
  "undefined" != typeof navigator && (Kv = navigator.platform || "");
  var Qv = {
    color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    textStyle: {
      fontFamily: Kv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal"
    },
    blendMode: null,
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 300,
    animationEasing: "exponentialOut",
    animationEasingUpdate: "cubicOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1
  },
      Jv = Hn(),
      tm = {
    clearColorPalette: function clearColorPalette() {
      Jv(this).colorIdx = 0, Jv(this).colorNameMap = {};
    },
    getColorFromPalette: function getColorFromPalette(t, e, i) {
      e = e || this;
      var n = Jv(e),
          r = n.colorIdx || 0,
          a = n.colorNameMap = n.colorNameMap || {};
      if (a.hasOwnProperty(t)) return a[t];
      var o = Pn(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != i && s ? wo(s, i) : o;

      if (l = l || o, l && l.length) {
        var h = l[r];
        return t && (a[t] = h), n.colorIdx = (r + 1) % l.length, h;
      }
    }
  },
      em = "original",
      im = "arrayRows",
      nm = "objectRows",
      rm = "keyedColumns",
      am = "unknown",
      om = "typedArray",
      sm = "column",
      lm = "row";
  bo.seriesDataToSource = function (t) {
    return new bo({
      data: t,
      sourceFormat: S(t) ? om : em,
      fromDataset: !1
    });
  }, Zn(bo);
  var hm = {
    Must: 1,
    Might: 2,
    Not: 3
  },
      um = Hn(),
      cm = "\x00_ec_inner",
      dm = Ga.extend({
    init: function init(t, e, i, n) {
      i = i || {}, this.option = null, this._theme = new Ga(i), this._optionManager = n;
    },
    setOption: function setOption(t, e) {
      L(!(cm in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    },
    resetOption: function resetOption(t) {
      var e = !1,
          i = this._optionManager;

      if (!t || "recreate" === t) {
        var n = i.mountOption("recreate" === t);
        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : Ro.call(this, n), e = !0;
      }

      if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = i.getTimelineOption(this);
        r && (this.mergeOption(r), e = !0);
      }

      if (!t || "recreate" === t || "media" === t) {
        var a = i.getMediaOption(this, this._api);
        a.length && f(a, function (t) {
          this.mergeOption(t, e = !0);
        }, this);
      }

      return e;
    },
    mergeOption: function mergeOption(t) {
      function e(e, n) {
        var r = Pn(t[e]),
            s = En(a.get(e), r);
        zn(s), f(s, function (t) {
          var i = t.option;
          b(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = No(e, i, t.exist));
        });
        var l = Fo(a, n);
        i[e] = [], a.set(e, []), f(s, function (t, n) {
          var r = t.exist,
              s = t.option;

          if (L(b(s) || r, "Empty component definition"), s) {
            var h = $v.getClass(e, t.keyInfo.subType, !0);
            if (r && r.constructor === h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {
              var u = o({
                dependentModels: l,
                componentIndex: n
              }, t.keyInfo);
              r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0);
            }
          } else r.mergeOption({}, this), r.optionUpdated({}, !1);

          a.get(e)[n] = r, i[e][n] = r.option;
        }, this), "series" === e && Ho(this, a.get("series"));
      }

      var i = this.option,
          a = this._componentsMap,
          s = [];
      To(this), f(t, function (t, e) {
        null != t && ($v.hasClass(e) ? e && s.push(e) : i[e] = null == i[e] ? n(t) : r(i[e], t, !0));
      }), $v.topologicalTravel(s, $v.getAllClassMainTypes(), e, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || []);
    },
    getOption: function getOption() {
      var t = n(this.option);
      return f(t, function (e, i) {
        if ($v.hasClass(i)) {
          for (var e = Pn(e), n = e.length - 1; n >= 0; n--) {
            Fn(e[n]) && e.splice(n, 1);
          }

          t[i] = e;
        }
      }), delete t[cm], t;
    },
    getTheme: function getTheme() {
      return this._theme;
    },
    getComponent: function getComponent(t, e) {
      var i = this._componentsMap.get(t);

      return i ? i[e || 0] : void 0;
    },
    queryComponents: function queryComponents(t) {
      var e = t.mainType;
      if (!e) return [];

      var i = t.index,
          n = t.id,
          r = t.name,
          a = this._componentsMap.get(e);

      if (!a || !a.length) return [];
      var o;
      if (null != i) _(i) || (i = [i]), o = v(p(i, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != n) {
        var s = _(n);

        o = v(a, function (t) {
          return s && h(n, t.id) >= 0 || !s && t.id === n;
        });
      } else if (null != r) {
        var l = _(r);

        o = v(a, function (t) {
          return l && h(r, t.name) >= 0 || !l && t.name === r;
        });
      } else o = a.slice();
      return Wo(o, t);
    },
    findComponents: function findComponents(t) {
      function e(t) {
        var e = r + "Index",
            i = r + "Id",
            n = r + "Name";
        return !t || null == t[e] && null == t[i] && null == t[n] ? null : {
          mainType: r,
          index: t[e],
          id: t[i],
          name: t[n]
        };
      }

      function i(e) {
        return t.filter ? v(e, t.filter) : e;
      }

      var n = t.query,
          r = t.mainType,
          a = e(n),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);
      return i(Wo(o, t));
    },
    eachComponent: function eachComponent(t, e, i) {
      var n = this._componentsMap;
      if ("function" == typeof t) i = e, e = t, n.each(function (t, n) {
        f(t, function (t, r) {
          e.call(i, n, t, r);
        });
      });else if (w(t)) f(n.get(t), e, i);else if (b(t)) {
        var r = this.findComponents(t);
        f(r, e, i);
      }
    },
    getSeriesByName: function getSeriesByName(t) {
      var e = this._componentsMap.get("series");

      return v(e, function (e) {
        return e.name === t;
      });
    },
    getSeriesByIndex: function getSeriesByIndex(t) {
      return this._componentsMap.get("series")[t];
    },
    getSeriesByType: function getSeriesByType(t) {
      var e = this._componentsMap.get("series");

      return v(e, function (e) {
        return e.subType === t;
      });
    },
    getSeries: function getSeries() {
      return this._componentsMap.get("series").slice();
    },
    getSeriesCount: function getSeriesCount() {
      return this._componentsMap.get("series").length;
    },
    eachSeries: function eachSeries(t, e) {
      Vo(this), f(this._seriesIndices, function (i) {
        var n = this._componentsMap.get("series")[i];

        t.call(e, n, i);
      }, this);
    },
    eachRawSeries: function eachRawSeries(t, e) {
      f(this._componentsMap.get("series"), t, e);
    },
    eachSeriesByType: function eachSeriesByType(t, e, i) {
      Vo(this), f(this._seriesIndices, function (n) {
        var r = this._componentsMap.get("series")[n];

        r.subType === t && e.call(i, r, n);
      }, this);
    },
    eachRawSeriesByType: function eachRawSeriesByType(t, e, i) {
      return f(this.getSeriesByType(t), e, i);
    },
    isSeriesFiltered: function isSeriesFiltered(t) {
      return Vo(this), null == this._seriesIndicesMap.get(t.componentIndex);
    },
    getCurrentSeriesIndices: function getCurrentSeriesIndices() {
      return (this._seriesIndices || []).slice();
    },
    filterSeries: function filterSeries(t, e) {
      Vo(this);
      var i = v(this._componentsMap.get("series"), t, e);
      Ho(this, i);
    },
    restoreData: function restoreData(t) {
      var e = this._componentsMap;
      Ho(this, e.get("series"));
      var i = [];
      e.each(function (t, e) {
        i.push(e);
      }), $v.topologicalTravel(i, $v.getAllClassMainTypes(), function (i) {
        f(e.get(i), function (e) {
          ("series" !== i || !Eo(e, t)) && e.restoreData();
        });
      });
    }
  });
  c(dm, tm);
  var fm = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      pm = {};
  Xo.prototype = {
    constructor: Xo,
    create: function create(t, e) {
      var i = [];
      f(pm, function (n) {
        var r = n.create(t, e);
        i = i.concat(r || []);
      }), this._coordinateSystems = i;
    },
    update: function update(t, e) {
      f(this._coordinateSystems, function (i) {
        i.update && i.update(t, e);
      });
    },
    getCoordinateSystems: function getCoordinateSystems() {
      return this._coordinateSystems.slice();
    }
  }, Xo.register = function (t, e) {
    pm[t] = e;
  }, Xo.get = function (t) {
    return pm[t];
  };
  var gm = f,
      vm = n,
      mm = p,
      ym = r,
      _m = /^(min|max)?(.+)$/;
  Yo.prototype = {
    constructor: Yo,
    setOption: function setOption(t, e) {
      t && f(Pn(t.series), function (t) {
        t && t.data && S(t.data) && B(t.data);
      }), t = vm(t);
      var i = this._optionBackup,
          n = Uo.call(this, t, e, !i);
      this._newBaseOption = n.baseOption, i ? ($o(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n;
    },
    mountOption: function mountOption(t) {
      var e = this._optionBackup;
      return this._timelineOptions = mm(e.timelineOptions, vm), this._mediaList = mm(e.mediaList, vm), this._mediaDefault = vm(e.mediaDefault), this._currentMediaIndices = [], vm(t ? e.baseOption : this._newBaseOption);
    },
    getTimelineOption: function getTimelineOption(t) {
      var e,
          i = this._timelineOptions;

      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = vm(i[n.getCurrentIndex()], !0));
      }

      return e;
    },
    getMediaOption: function getMediaOption() {
      var t = this._api.getWidth(),
          e = this._api.getHeight(),
          i = this._mediaList,
          n = this._mediaDefault,
          r = [],
          a = [];

      if (!i.length && !n) return a;

      for (var o = 0, s = i.length; s > o; o++) {
        qo(i[o].query, t, e) && r.push(o);
      }

      return !r.length && n && (r = [-1]), r.length && !Zo(r, this._currentMediaIndices) && (a = mm(r, function (t) {
        return vm(-1 === t ? n.option : i[t].option);
      })), this._currentMediaIndices = r, a;
    }
  };

  var xm = f,
      wm = b,
      bm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      Mm = function Mm(t, e) {
    xm(ns(t.series), function (t) {
      wm(t) && is(t);
    });
    var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), xm(i, function (e) {
      xm(ns(t[e]), function (t) {
        t && (ts(t, "axisLabel"), ts(t.axisPointer, "label"));
      });
    }), xm(ns(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;
      ts(e, "axisLabel"), ts(e && e.axisPointer, "label");
    }), xm(ns(t.calendar), function (t) {
      Qo(t, "itemStyle"), ts(t, "dayLabel"), ts(t, "monthLabel"), ts(t, "yearLabel");
    }), xm(ns(t.radar), function (t) {
      ts(t, "name");
    }), xm(ns(t.geo), function (t) {
      wm(t) && (es(t), xm(ns(t.regions), function (t) {
        es(t);
      }));
    }), xm(ns(t.timeline), function (t) {
      es(t), Qo(t, "label"), Qo(t, "itemStyle"), Qo(t, "controlStyle", !0);
      var e = t.data;
      _(e) && f(e, function (t) {
        b(t) && (Qo(t, "label"), Qo(t, "itemStyle"));
      });
    }), xm(ns(t.toolbox), function (t) {
      Qo(t, "iconStyle"), xm(t.feature, function (t) {
        Qo(t, "iconStyle");
      });
    }), ts(rs(t.axisPointer), "label"), ts(rs(t.tooltip).axisPointer, "label");
  },
      Sm = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      Tm = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      Cm = function Cm(t, e) {
    Mm(t, e), t.series = Pn(t.series), f(t.series, function (t) {
      if (b(t)) {
        var e = t.type;
        if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);else if ("gauge" === e) {
          var i = as(t, "pointer.color");
          null != i && os(t, "itemStyle.color", i);
        }
        ss(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), f(Tm, function (e) {
      var i = t[e];
      i && (_(i) || (i = [i]), f(i, function (t) {
        ss(t);
      }));
    });
  },
      Im = function Im(t) {
    var e = R();
    t.eachSeries(function (t) {
      var i = t.get("stack");

      if (i) {
        var n = e.get(i) || e.set(i, []),
            r = t.getData(),
            a = {
          stackResultDimension: r.getCalculationInfo("stackResultDimension"),
          stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
          stackedDimension: r.getCalculationInfo("stackedDimension"),
          stackedByDimension: r.getCalculationInfo("stackedByDimension"),
          isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
          data: r,
          seriesModel: t
        };
        if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
        n.length && r.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(a);
      }
    }), e.each(ls);
  },
      km = hs.prototype;

  km.pure = !1, km.persistent = !0, km.getSource = function () {
    return this._source;
  };
  var Dm = {
    arrayRows_column: {
      pure: !0,
      count: function count() {
        return Math.max(0, this._data.length - this._source.startIndex);
      },
      getItem: function getItem(t) {
        return this._data[t + this._source.startIndex];
      },
      appendData: ds
    },
    arrayRows_row: {
      pure: !0,
      count: function count() {
        var t = this._data[0];
        return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      },
      getItem: function getItem(t) {
        t += this._source.startIndex;

        for (var e = [], i = this._data, n = 0; n < i.length; n++) {
          var r = i[n];
          e.push(r ? r[t] : null);
        }

        return e;
      },
      appendData: function appendData() {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      }
    },
    objectRows: {
      pure: !0,
      count: us,
      getItem: cs,
      appendData: ds
    },
    keyedColumns: {
      pure: !0,
      count: function count() {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];
        return e ? e.length : 0;
      },
      getItem: function getItem(t) {
        for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
          var r = this._data[i[n].name];
          e.push(r ? r[t] : null);
        }

        return e;
      },
      appendData: function appendData(t) {
        var e = this._data;
        f(t, function (t, i) {
          for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) {
            n.push(t[r]);
          }
        });
      }
    },
    original: {
      count: us,
      getItem: cs,
      appendData: ds
    },
    typedArray: {
      persistent: !1,
      pure: !0,
      count: function count() {
        return this._data ? this._data.length / this._dimSize : 0;
      },
      getItem: function getItem(t, e) {
        t -= this._offset, e = e || [];

        for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) {
          e[n] = this._data[i + n];
        }

        return e;
      },
      appendData: function appendData(t) {
        bd && L(S(t), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = t;
      },
      clean: function clean() {
        this._offset += this.count(), this._data = null;
      }
    }
  },
      Am = {
    arrayRows: fs,
    objectRows: function objectRows(t, e, i, n) {
      return null != i ? t[n] : t;
    },
    keyedColumns: fs,
    original: function original(t, e, i) {
      var n = On(t);
      return null != i && n instanceof Array ? n[i] : n;
    },
    typedArray: fs
  },
      Pm = {
    arrayRows: ps,
    objectRows: function objectRows(t, e) {
      return gs(t[e], this._dimensionInfos[e]);
    },
    keyedColumns: ps,
    original: function original(t, e, i, n) {
      var r = t && (null == t.value ? t : t.value);
      return !this._rawData.pure && Bn(t) && (this.hasItemOption = !0), gs(r instanceof Array ? r[n] : r, this._dimensionInfos[e]);
    },
    typedArray: function typedArray(t, e, i, n) {
      return t[n];
    }
  },
      Lm = /\{@(.+?)\}/g,
      Om = {
    getDataParams: function getDataParams(t, e) {
      var i = this.getData(e),
          n = this.getRawValue(t, e),
          r = i.getRawIndex(t),
          a = i.getName(t),
          o = i.getRawDataItem(t),
          s = i.getItemVisual(t, "color"),
          l = i.getItemVisual(t, "borderColor"),
          h = this.ecModel.getComponent("tooltip"),
          u = h && h.get("renderMode"),
          c = Yn(u),
          d = this.mainType,
          f = "series" === d,
          p = i.userOutput;
      return {
        componentType: d,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: f ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: f ? this.id : null,
        seriesName: f ? this.name : null,
        name: a,
        dataIndex: r,
        data: o,
        dataType: e,
        value: n,
        color: s,
        borderColor: l,
        dimensionNames: p ? p.dimensionNames : null,
        encode: p ? p.encode : null,
        marker: co({
          color: s,
          renderMode: c
        }),
        $vars: ["seriesName", "name", "value"]
      };
    },
    getFormattedLabel: function getFormattedLabel(t, e, i, n, r) {
      e = e || "normal";
      var a = this.getData(i),
          o = a.getItemModel(t),
          s = this.getDataParams(t, i);
      null != n && s.value instanceof Array && (s.value = s.value[n]);
      var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
      if ("function" == typeof l) return s.status = e, s.dimensionIndex = n, l(s);

      if ("string" == typeof l) {
        var h = uo(l, s);
        return h.replace(Lm, function (e, i) {
          var n = i.length;
          return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), vs(a, t, i);
        });
      }
    },
    getRawValue: function getRawValue(t, e) {
      return vs(this.getData(e), t);
    },
    formatTooltip: function formatTooltip() {}
  },
      Bm = ys.prototype;

  Bm.perform = function (t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t;
    }

    var i = this._upstream,
        n = t && t.skip;

    if (this._dirty && i) {
      var r = this.context;
      r.data = r.outputData = i.context.outputData;
    }

    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !n && (a = this._plan(this.context));
    var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        h = t && t.modDataCount || 0;
    (o !== l || s !== h) && (a = "reset");
    var u;
    (this._dirty || "reset" === a) && (this._dirty = !1, u = xs(this, n)), this._modBy = l, this._modDataCount = h;
    var c = t && t.step;

    if (i ? (bd && L(null != i._outputDueEnd), this._dueEnd = i._outputDueEnd) : (bd && L(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
      var d = this._dueIndex,
          f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);

      if (!n && (u || f > d)) {
        var p = this._progress;
        if (_(p)) for (var g = 0; g < p.length; g++) {
          _s(this, p[g], d, f, l, h);
        } else _s(this, p, d, f, l, h);
      }

      this._dueIndex = f;
      var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
      bd && L(v >= this._outputDueEnd), this._outputDueEnd = v;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;

    return this.unfinished();
  };

  var Em = function () {
    function t() {
      return i > n ? n++ : null;
    }

    function e() {
      var t = n % o * r + Math.ceil(n / o),
          e = n >= i ? null : a > t ? t : n;
      return n++, e;
    }

    var i,
        n,
        r,
        a,
        o,
        s = {
      reset: function reset(l, h, u, c) {
        n = l, i = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
      }
    };
    return s;
  }();

  Bm.dirty = function () {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, Bm.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, Bm.pipe = function (t) {
    bd && L(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, Bm.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, Bm.getUpstream = function () {
    return this._upstream;
  }, Bm.getDownstream = function () {
    return this._downstream;
  }, Bm.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };
  var zm = Hn(),
      Rm = $v.extend({
    type: "series.__base__",
    seriesIndex: 0,
    coordinateSystem: null,
    defaultOption: null,
    legendVisualProvider: null,
    visualColorAccessPath: "itemStyle.color",
    visualBorderColorAccessPath: "itemStyle.borderColor",
    layoutMode: null,
    init: function init(t, e, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = ms({
        count: Ms,
        reset: Ss
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(t, i), Co(this);
      var n = this.getInitialData(t, i);
      Cs(n, this), this.dataTask.context.data = n, bd && L(n, "getInitialData returned invalid data."), zm(this).dataBeforeProcessed = n, ws(this);
    },
    mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var i = this.layoutMode,
          n = i ? yo(t) : {},
          a = this.subType;
      $v.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Ln(t, "label", ["show"]), this.fillDataTextStyle(t.data), i && mo(t, n, i);
    },
    mergeOption: function mergeOption(t, e) {
      t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
      var i = this.layoutMode;
      i && mo(this.option, t, i), Co(this);
      var n = this.getInitialData(t, e);
      Cs(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, zm(this).dataBeforeProcessed = n, ws(this);
    },
    fillDataTextStyle: function fillDataTextStyle(t) {
      if (t && !S(t)) for (var e = ["show"], i = 0; i < t.length; i++) {
        t[i] && t[i].label && Ln(t[i], "label", e);
      }
    },
    getInitialData: function getInitialData() {},
    appendData: function appendData(t) {
      var e = this.getRawData();
      e.appendData(t.data);
    },
    getData: function getData(t) {
      var e = ks(this);

      if (e) {
        var i = e.context.data;
        return null == t ? i : i.getLinkedData(t);
      }

      return zm(this).data;
    },
    setData: function setData(t) {
      var e = ks(this);

      if (e) {
        var i = e.context;
        i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t);
      }

      zm(this).data = t;
    },
    getSource: function getSource() {
      return So(this);
    },
    getRawData: function getRawData() {
      return zm(this).dataBeforeProcessed;
    },
    getBaseAxis: function getBaseAxis() {
      var t = this.coordinateSystem;
      return t && t.getBaseAxis && t.getBaseAxis();
    },
    formatTooltip: function formatTooltip(t, e, i, n) {
      function r(i) {
        function r(t, i) {
          var r = c.getDimensionInfo(i);

          if (r && r.otherDims.tooltip !== !1) {
            var d = r.type,
                f = "sub" + o.seriesIndex + "at" + u,
                p = co({
              color: y,
              type: "subItem",
              renderMode: n,
              markerId: f
            }),
                g = "string" == typeof p ? p : p.content,
                v = (a ? g + ho(r.displayName || "-") + ": " : "") + ho("ordinal" === d ? t + "" : "time" === d ? e ? "" : po("yyyy/MM/dd hh:mm:ss", t) : so(t));
            v && s.push(v), l && (h[f] = y, ++u);
          }
        }

        var a = g(i, function (t, e, i) {
          var n = c.getDimensionInfo(i);
          return t |= n && n.tooltip !== !1 && null != n.displayName;
        }, 0),
            s = [];
        d.length ? f(d, function (e) {
          r(vs(c, t, e), e);
        }) : f(i, r);
        var p = a ? l ? "\n" : "<br/>" : "",
            v = p + s.join(p || ", ");
        return {
          renderMode: n,
          content: v,
          style: h
        };
      }

      function a(t) {
        return {
          renderMode: n,
          content: ho(so(t)),
          style: h
        };
      }

      var o = this;
      n = n || "html";

      var s = "html" === n ? "<br/>" : "\n",
          l = "richText" === n,
          h = {},
          u = 0,
          c = this.getData(),
          d = c.mapDimension("defaultedTooltip", !0),
          p = d.length,
          v = this.getRawValue(t),
          m = _(v),
          y = c.getItemVisual(t, "color");

      b(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
      var x = p > 1 || m && !p ? r(v) : a(p ? vs(c, t, d[0]) : m ? v[0] : v),
          w = x.content,
          M = o.seriesIndex + "at" + u,
          S = co({
        color: y,
        type: "item",
        renderMode: n,
        markerId: M
      });
      h[M] = y, ++u;
      var T = c.getName(t),
          C = this.name;
      Rn(this) || (C = ""), C = C ? ho(C) + (e ? ": " : s) : "";
      var I = "string" == typeof S ? S : S.content,
          k = e ? I + C + w : C + I + (T ? ho(T) + ": " + w : w);
      return {
        html: k,
        markers: h
      };
    },
    isAnimationEnabled: function isAnimationEnabled() {
      if (Cd.node) return !1;
      var t = this.getShallow("animation");
      return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
    },
    restoreData: function restoreData() {
      this.dataTask.dirty();
    },
    getColorFromPalette: function getColorFromPalette(t, e, i) {
      var n = this.ecModel,
          r = tm.getColorFromPalette.call(this, t, e, i);
      return r || (r = n.getColorFromPalette(t, e, i)), r;
    },
    coordDimToDataDim: function coordDimToDataDim(t) {
      return this.getRawData().mapDimension(t, !0);
    },
    getProgressive: function getProgressive() {
      return this.get("progressive");
    },
    getProgressiveThreshold: function getProgressiveThreshold() {
      return this.get("progressiveThreshold");
    },
    getAxisTooltipData: null,
    getTooltipPosition: null,
    pipeTask: null,
    preventIncremental: null,
    pipelineContext: null
  });
  c(Rm, Om), c(Rm, tm);

  var Fm = function Fm() {
    this.group = new Of(), this.uid = Ua("viewComponent");
  };

  Fm.prototype = {
    constructor: Fm,
    init: function init() {},
    render: function render() {},
    dispose: function dispose() {},
    filterForExposedEvent: null
  };
  var Nm = Fm.prototype;
  Nm.updateView = Nm.updateLayout = Nm.updateVisual = function () {}, jn(Fm), Qn(Fm, {
    registerWhenExtend: !0
  });

  var Hm = function Hm() {
    var t = Hn();
    return function (e) {
      var i = t(e),
          n = e.pipelineContext,
          r = i.large,
          a = i.progressiveRender,
          o = i.large = n && n.large,
          s = i.progressiveRender = n && n.progressiveRender;
      return !!(r ^ o || a ^ s) && "reset";
    };
  },
      Wm = Hn(),
      Vm = Hm();

  Ds.prototype = {
    type: "chart",
    init: function init() {},
    render: function render() {},
    highlight: function highlight(t, e, i, n) {
      Ps(t.getData(), n, "emphasis");
    },
    downplay: function downplay(t, e, i, n) {
      Ps(t.getData(), n, "normal");
    },
    remove: function remove() {
      this.group.removeAll();
    },
    dispose: function dispose() {},
    incrementalPrepareRender: null,
    incrementalRender: null,
    updateTransform: null,
    filterForExposedEvent: null
  };
  var Gm = Ds.prototype;
  Gm.updateView = Gm.updateLayout = Gm.updateVisual = function (t, e, i, n) {
    this.render(t, e, i, n);
  }, jn(Ds, ["dispose"]), Qn(Ds, {
    registerWhenExtend: !0
  }), Ds.markUpdateMethod = function (t, e) {
    Wm(t).updateMethod = e;
  };

  var Xm = {
    incrementalPrepareRender: {
      progress: function progress(t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      }
    },
    render: {
      forceFirstProgress: !0,
      progress: function progress(t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      }
    }
  },
      Ym = "\x00__throttleOriginMethod",
      Um = "\x00__throttleRate",
      qm = "\x00__throttleType",
      jm = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function reset(t, e) {
      var i = t.getData(),
          n = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(n),
          a = !x(r) || r instanceof cv ? null : r;
      (!r || a) && (r = t.getColorFromPalette(t.name, null, e.getSeriesCount())), i.setVisual("color", r);
      var o = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),
          s = t.get(o);

      if (i.setVisual("borderColor", s), !e.isSeriesFiltered(t)) {
        a && i.each(function (e) {
          i.setItemVisual(e, "color", a(t.getDataParams(e)));
        });

        var l = function l(t, e) {
          var i = t.getItemModel(e),
              r = i.get(n, !0),
              a = i.get(o, !0);
          null != r && t.setItemVisual(e, "color", r), null != a && t.setItemVisual(e, "borderColor", a);
        };

        return {
          dataEach: i.hasItemOption ? l : null
        };
      }
    }
  },
      Zm = {
    legend: {
      selector: {
        all: "全选",
        inverse: "反选"
      }
    },
    toolbox: {
      brush: {
        title: {
          rect: "矩形选择",
          polygon: "圈选",
          lineX: "横向选择",
          lineY: "纵向选择",
          keep: "保持选择",
          clear: "清除选择"
        }
      },
      dataView: {
        title: "数据视图",
        lang: ["数据视图", "关闭", "刷新"]
      },
      dataZoom: {
        title: {
          zoom: "区域缩放",
          back: "区域缩放还原"
        }
      },
      magicType: {
        title: {
          line: "切换为折线图",
          bar: "切换为柱状图",
          stack: "切换为堆叠",
          tiled: "切换为平铺"
        }
      },
      restore: {
        title: "还原"
      },
      saveAsImage: {
        title: "保存为图片",
        lang: ["右键另存为图片"]
      }
    },
    series: {
      typeNames: {
        pie: "饼图",
        bar: "柱状图",
        line: "折线图",
        scatter: "散点图",
        effectScatter: "涟漪散点图",
        radar: "雷达图",
        tree: "树图",
        treemap: "矩形树图",
        boxplot: "箱型图",
        candlestick: "K线图",
        k: "K线图",
        heatmap: "热力图",
        map: "地图",
        parallel: "平行坐标图",
        lines: "线图",
        graph: "关系图",
        sankey: "桑基图",
        funnel: "漏斗图",
        gauge: "仪表盘图",
        pictorialBar: "象形柱图",
        themeRiver: "主题河流图",
        sunburst: "旭日图"
      }
    },
    aria: {
      general: {
        withTitle: "这是一个关于“{title}”的图表。",
        withoutTitle: "这是一个图表，"
      },
      series: {
        single: {
          prefix: "",
          withName: "图表类型是{seriesType}，表示{seriesName}。",
          withoutName: "图表类型是{seriesType}。"
        },
        multiple: {
          prefix: "它由{seriesCount}个图表系列组成。",
          withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
          withoutName: "第{seriesId}个系列是一个{seriesType}，",
          separator: {
            middle: "；",
            end: "。"
          }
        }
      },
      data: {
        allData: "其数据是——",
        partialData: "其中，前{displayCnt}项是——",
        withName: "{name}的数据是{value}",
        withoutName: "{value}",
        separator: {
          middle: "，",
          end: ""
        }
      }
    }
  },
      $m = function $m(t, e) {
    function i(t, e) {
      if ("string" != typeof t) return t;
      var i = t;
      return f(e, function (t, e) {
        i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), i;
    }

    function n(t) {
      var e = o.get(t);

      if (null == e) {
        for (var i = t.split("."), n = Zm.aria, r = 0; r < i.length; ++r) {
          n = n[i[r]];
        }

        return n;
      }

      return e;
    }

    function r() {
      var t = e.getModel("title").option;
      return t && t.length && (t = t[0]), t && t.text;
    }

    function a(t) {
      return Zm.series.typeNames[t] || "自定义图";
    }

    var o = e.getModel("aria");

    if (o.get("show")) {
      if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
      var s = 0;
      e.eachSeries(function () {
        ++s;
      }, this);
      var l,
          h = o.get("data.maxCount") || 10,
          u = o.get("series.maxCount") || 10,
          c = Math.min(s, u);

      if (!(1 > s)) {
        var d = r();
        l = d ? i(n("general.withTitle"), {
          title: d
        }) : n("general.withoutTitle");
        var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
        l += i(n(g), {
          seriesCount: s
        }), e.eachSeries(function (t, e) {
          if (c > e) {
            var r,
                o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";
            r = n(o ? l + "withName" : l + "withoutName"), r = i(r, {
              seriesId: t.seriesIndex,
              seriesName: t.get("name"),
              seriesType: a(t.subType)
            });
            var u = t.getData();
            window.data = u, r += u.count() > h ? i(n("data.partialData"), {
              displayCnt: h
            }) : n("data.allData");

            for (var d = [], f = 0; f < u.count(); f++) {
              if (h > f) {
                var g = u.getName(f),
                    v = vs(u, f);
                d.push(i(n(g ? "data.withName" : "data.withoutName"), {
                  name: g,
                  value: v
                }));
              }
            }

            r += d.join(n("data.separator.middle")) + n("data.separator.end"), p.push(r);
          }
        }), l += p.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"), t.setAttribute("aria-label", l);
      }
    }
  },
      Km = Math.PI,
      Qm = function Qm(t, e) {
    e = e || {}, s(e, {
      text: "loading",
      textColor: "#000",
      fontSize: "12px",
      maskColor: "rgba(255, 255, 255, 0.8)",
      showSpinner: !0,
      color: "#c23531",
      spinnerRadius: 10,
      lineWidth: 5,
      zlevel: 0
    });
    var i = new Of(),
        n = new rv({
      style: {
        fill: e.maskColor
      },
      zlevel: e.zlevel,
      z: 1e4
    });
    i.add(n);
    var r = e.fontSize + " sans-serif",
        a = new rv({
      style: {
        fill: "none",
        text: e.text,
        font: r,
        textPosition: "right",
        textDistance: 10,
        textFill: e.textColor
      },
      zlevel: e.zlevel,
      z: 10001
    });

    if (i.add(a), e.showSpinner) {
      var o = new hv({
        shape: {
          startAngle: -Km / 2,
          endAngle: -Km / 2 + .1,
          r: e.spinnerRadius
        },
        style: {
          stroke: e.color,
          lineCap: "round",
          lineWidth: e.lineWidth
        },
        zlevel: e.zlevel,
        z: 10001
      });
      o.animateShape(!0).when(1e3, {
        endAngle: 3 * Km / 2
      }).start("circularInOut"), o.animateShape(!0).when(1e3, {
        startAngle: 3 * Km / 2
      }).delay(300).start("circularInOut"), i.add(o);
    }

    return i.resize = function () {
      var i = Ti(e.text, r),
          s = e.showSpinner ? e.spinnerRadius : 0,
          l = (t.getWidth() - 2 * s - (e.showSpinner && i ? 10 : 0) - i) / 2 - (e.showSpinner ? 0 : i / 2),
          h = t.getHeight() / 2;
      e.showSpinner && o.setShape({
        cx: l,
        cy: h
      }), a.setShape({
        x: l - s,
        y: h - s,
        width: 2 * s,
        height: 2 * s
      }), n.setShape({
        x: 0,
        y: 0,
        width: t.getWidth(),
        height: t.getHeight()
      });
    }, i.resize(), i;
  },
      Jm = zs.prototype;

  Jm.restoreData = function (t, e) {
    t.restoreData(e), this._stageTaskMap.each(function (t) {
      var e = t.overallTask;
      e && e.dirty();
    });
  }, Jm.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var i = this._pipelineMap.get(t.__pipeline.id),
          n = i.context,
          r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
          a = r ? i.step : null,
          o = n && n.modDataCount,
          s = null != o ? Math.ceil(o / a) : null;

      return {
        step: a,
        modBy: s,
        modDataCount: o
      };
    }
  }, Jm.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, Jm.updateStreamModes = function (t, e) {
    var i = this._pipelineMap.get(t.uid),
        n = t.getData(),
        r = n.count(),
        a = i.progressiveEnabled && e.incrementalPrepareRender && r >= i.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r : null;

    t.pipelineContext = i.context = {
      progressiveRender: a,
      modDataCount: s,
      large: o
    };
  }, Jm.restorePipelines = function (t) {
    var e = this,
        i = e._pipelineMap = R();
    t.eachSeries(function (t) {
      var n = t.getProgressive(),
          r = t.uid;
      i.set(r, {
        id: r,
        head: null,
        tail: null,
        threshold: t.getProgressiveThreshold(),
        progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
        blockIndex: -1,
        step: Math.round(n || 700),
        count: 0
      }), js(e, t, t.dataTask);
    });
  }, Jm.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        i = this.api;
    f(this._allHandlers, function (n) {
      var r = t.get(n.uid) || t.set(n.uid, []);
      n.reset && Fs(this, n, r, e, i), n.overallReset && Ns(this, n, r, e, i);
    }, this);
  }, Jm.prepareView = function (t, e, i, n) {
    var r = t.renderTask,
        a = r.context;
    a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, js(this, e, r);
  }, Jm.performDataProcessorTasks = function (t, e) {
    Rs(this, this._dataProcessorHandlers, t, e, {
      block: !0
    });
  }, Jm.performVisualTasks = function (t, e, i) {
    Rs(this, this._visualHandlers, t, e, i);
  }, Jm.performSeriesTasks = function (t) {
    var e;
    t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, Jm.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;

      do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;
          break;
        }

        e = e.getUpstream();
      } while (e);
    });
  };

  var ty = Jm.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  },
      ey = Us(0);

  zs.wrapStageHandler = function (t, e) {
    return x(t) && (t = {
      overallReset: t,
      seriesType: Zs(t)
    }), t.uid = Ua("stageHandler"), e && (t.visualType = e), t;
  };

  var iy,
      ny = {},
      ry = {};
  $s(ny, dm), $s(ry, Go), ny.eachSeriesByType = ny.eachRawSeriesByType = function (t) {
    iy = t;
  }, ny.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (iy = t.subType);
  };

  var ay = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      oy = {
    color: ay,
    colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], ay]
  },
      sy = "#eee",
      ly = function ly() {
    return {
      axisLine: {
        lineStyle: {
          color: sy
        }
      },
      axisTick: {
        lineStyle: {
          color: sy
        }
      },
      axisLabel: {
        textStyle: {
          color: sy
        }
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#aaa"
        }
      },
      splitArea: {
        areaStyle: {
          color: sy
        }
      }
    };
  },
      hy = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      uy = {
    color: hy,
    backgroundColor: "#333",
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: sy
        },
        crossStyle: {
          color: sy
        },
        label: {
          color: "#000"
        }
      }
    },
    legend: {
      textStyle: {
        color: sy
      }
    },
    textStyle: {
      color: sy
    },
    title: {
      textStyle: {
        color: sy
      }
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: sy
        }
      }
    },
    dataZoom: {
      textStyle: {
        color: sy
      }
    },
    visualMap: {
      textStyle: {
        color: sy
      }
    },
    timeline: {
      lineStyle: {
        color: sy
      },
      itemStyle: {
        normal: {
          color: hy[1]
        }
      },
      label: {
        normal: {
          textStyle: {
            color: sy
          }
        }
      },
      controlStyle: {
        normal: {
          color: sy,
          borderColor: sy
        }
      }
    },
    timeAxis: ly(),
    logAxis: ly(),
    valueAxis: ly(),
    categoryAxis: ly(),
    line: {
      symbol: "circle"
    },
    graph: {
      color: hy
    },
    gauge: {
      title: {
        textStyle: {
          color: sy
        }
      }
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: "#FD1050",
          color0: "#0CF49B",
          borderColor: "#FD1050",
          borderColor0: "#0CF49B"
        }
      }
    }
  };

  uy.categoryAxis.splitLine.show = !1, $v.extend({
    type: "dataset",
    defaultOption: {
      seriesLayoutBy: sm,
      sourceHeader: null,
      dimensions: null,
      source: null
    },
    optionUpdated: function optionUpdated() {
      Mo(this);
    }
  }), Fm.extend({
    type: "dataset"
  });
  var cy = Pr.extend({
    type: "ellipse",
    shape: {
      cx: 0,
      cy: 0,
      rx: 0,
      ry: 0
    },
    buildPath: function buildPath(t, e) {
      var i = .5522848,
          n = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * i,
          l = o * i;
      t.moveTo(n - a, r), t.bezierCurveTo(n - a, r - l, n - s, r - o, n, r - o), t.bezierCurveTo(n + s, r - o, n + a, r - l, n + a, r), t.bezierCurveTo(n + a, r + l, n + s, r + o, n, r + o), t.bezierCurveTo(n - s, r + o, n - a, r + l, n - a, r), t.closePath();
    }
  }),
      dy = /[\s,]+/;
  Qs.prototype.parse = function (t, e) {
    e = e || {};
    var i = Ks(t);
    if (!i) throw new Error("Illegal svg");
    var n = new Of();
    this._root = n;
    var r = i.getAttribute("viewBox") || "",
        a = parseFloat(i.getAttribute("width") || e.width),
        o = parseFloat(i.getAttribute("height") || e.height);
    isNaN(a) && (a = null), isNaN(o) && (o = null), il(i, n, null, !0);

    for (var s = i.firstChild; s;) {
      this._parseNode(s, n), s = s.nextSibling;
    }

    var l, h;

    if (r) {
      var u = O(r).split(dy);
      u.length >= 4 && (l = {
        x: parseFloat(u[0] || 0),
        y: parseFloat(u[1] || 0),
        width: parseFloat(u[2]),
        height: parseFloat(u[3])
      });
    }

    if (l && null != a && null != o && (h = ol(l, a, o), !e.ignoreViewBox)) {
      var c = n;
      n = new Of(), n.add(c), c.scale = h.scale.slice(), c.position = h.position.slice();
    }

    return e.ignoreRootClip || null == a || null == o || n.setClipPath(new rv({
      shape: {
        x: 0,
        y: 0,
        width: a,
        height: o
      }
    })), {
      root: n,
      width: a,
      height: o,
      viewBoxRect: l,
      viewBoxTransform: h
    };
  }, Qs.prototype._parseNode = function (t, e) {
    var i = t.nodeName.toLowerCase();
    "defs" === i ? this._isDefine = !0 : "text" === i && (this._isText = !0);
    var n;

    if (this._isDefine) {
      var r = py[i];

      if (r) {
        var a = r.call(this, t),
            o = t.getAttribute("id");
        o && (this._defs[o] = a);
      }
    } else {
      var r = fy[i];
      r && (n = r.call(this, t, e), e.add(n));
    }

    for (var s = t.firstChild; s;) {
      1 === s.nodeType && this._parseNode(s, n), 3 === s.nodeType && this._isText && this._parseText(s, n), s = s.nextSibling;
    }

    "defs" === i ? this._isDefine = !1 : "text" === i && (this._isText = !1);
  }, Qs.prototype._parseText = function (t, e) {
    if (1 === t.nodeType) {
      var i = t.getAttribute("dx") || 0,
          n = t.getAttribute("dy") || 0;
      this._textX += parseFloat(i), this._textY += parseFloat(n);
    }

    var r = new Ug({
      style: {
        text: t.textContent,
        transformText: !0
      },
      position: [this._textX || 0, this._textY || 0]
    });
    tl(e, r), il(t, r, this._defs);
    var a = r.style.fontSize;
    a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
    var o = r.getBoundingRect();
    return this._textX += o.width, e.add(r), r;
  };

  var fy = {
    g: function g(t, e) {
      var i = new Of();
      return tl(e, i), il(t, i, this._defs), i;
    },
    rect: function rect(t, e) {
      var i = new rv();
      return tl(e, i), il(t, i, this._defs), i.setShape({
        x: parseFloat(t.getAttribute("x") || 0),
        y: parseFloat(t.getAttribute("y") || 0),
        width: parseFloat(t.getAttribute("width") || 0),
        height: parseFloat(t.getAttribute("height") || 0)
      }), i;
    },
    circle: function circle(t, e) {
      var i = new qg();
      return tl(e, i), il(t, i, this._defs), i.setShape({
        cx: parseFloat(t.getAttribute("cx") || 0),
        cy: parseFloat(t.getAttribute("cy") || 0),
        r: parseFloat(t.getAttribute("r") || 0)
      }), i;
    },
    line: function line(t, e) {
      var i = new ov();
      return tl(e, i), il(t, i, this._defs), i.setShape({
        x1: parseFloat(t.getAttribute("x1") || 0),
        y1: parseFloat(t.getAttribute("y1") || 0),
        x2: parseFloat(t.getAttribute("x2") || 0),
        y2: parseFloat(t.getAttribute("y2") || 0)
      }), i;
    },
    ellipse: function ellipse(t, e) {
      var i = new cy();
      return tl(e, i), il(t, i, this._defs), i.setShape({
        cx: parseFloat(t.getAttribute("cx") || 0),
        cy: parseFloat(t.getAttribute("cy") || 0),
        rx: parseFloat(t.getAttribute("rx") || 0),
        ry: parseFloat(t.getAttribute("ry") || 0)
      }), i;
    },
    polygon: function polygon(t, e) {
      var i = t.getAttribute("points");
      i && (i = el(i));
      var n = new tv({
        shape: {
          points: i || []
        }
      });
      return tl(e, n), il(t, n, this._defs), n;
    },
    polyline: function polyline(t, e) {
      var i = new Pr();
      tl(e, i), il(t, i, this._defs);
      var n = t.getAttribute("points");
      n && (n = el(n));
      var r = new ev({
        shape: {
          points: n || []
        }
      });
      return r;
    },
    image: function image(t, e) {
      var i = new hn();
      return tl(e, i), il(t, i, this._defs), i.setStyle({
        image: t.getAttribute("xlink:href"),
        x: t.getAttribute("x"),
        y: t.getAttribute("y"),
        width: t.getAttribute("width"),
        height: t.getAttribute("height")
      }), i;
    },
    text: function text(t, e) {
      var i = t.getAttribute("x") || 0,
          n = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;
      this._textX = parseFloat(i) + parseFloat(r), this._textY = parseFloat(n) + parseFloat(a);
      var o = new Of();
      return tl(e, o), il(t, o, this._defs), o;
    },
    tspan: function tspan(t, e) {
      var i = t.getAttribute("x"),
          n = t.getAttribute("y");
      null != i && (this._textX = parseFloat(i)), null != n && (this._textY = parseFloat(n));
      var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Of();
      return tl(e, o), il(t, o, this._defs), this._textX += r, this._textY += a, o;
    },
    path: function path(t, e) {
      var i = t.getAttribute("d") || "",
          n = Er(i);
      return tl(e, n), il(t, n, this._defs), n;
    }
  },
      py = {
    lineargradient: function lineargradient(t) {
      var e = parseInt(t.getAttribute("x1") || 0, 10),
          i = parseInt(t.getAttribute("y1") || 0, 10),
          n = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new dv(e, i, n, r);
      return Js(t, a), a;
    },
    radialgradient: function radialgradient() {}
  },
      gy = {
    fill: "fill",
    stroke: "stroke",
    "stroke-width": "lineWidth",
    opacity: "opacity",
    "fill-opacity": "fillOpacity",
    "stroke-opacity": "strokeOpacity",
    "stroke-dasharray": "lineDash",
    "stroke-dashoffset": "lineDashOffset",
    "stroke-linecap": "lineCap",
    "stroke-linejoin": "lineJoin",
    "stroke-miterlimit": "miterLimit",
    "font-family": "fontFamily",
    "font-size": "fontSize",
    "font-style": "fontStyle",
    "font-weight": "fontWeight",
    "text-align": "textAlign",
    "alignment-baseline": "textBaseline"
  },
      vy = /url\(\s*#(.*?)\)/,
      my = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
      yy = /([^\s:;]+)\s*:\s*([^:;]+)/g,
      _y = R(),
      xy = {
    registerMap: function registerMap(t, e, i) {
      var n;
      return _(e) ? n = e : e.svg ? n = [{
        type: "svg",
        source: e.svg,
        specialAreas: e.specialAreas
      }] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [{
        type: "geoJSON",
        source: e,
        specialAreas: i
      }]), f(n, function (t) {
        var e = t.type;
        "geoJson" === e && (e = t.type = "geoJSON");
        var i = wy[e];
        bd && L(i, "Illegal map type: " + e), i(t);
      }), _y.set(t, n);
    },
    retrieveMap: function retrieveMap(t) {
      return _y.get(t);
    }
  },
      wy = {
    geoJSON: function geoJSON(t) {
      var e = t.source;
      t.geoJSON = w(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
    },
    svg: function svg(t) {
      t.svgXML = Ks(t.source);
    }
  },
      by = L,
      My = f,
      Sy = x,
      Ty = b,
      Cy = $v.parseClassType,
      Iy = "4.9.0",
      ky = {
    zrender: "4.3.2"
  },
      Dy = 1,
      Ay = 1e3,
      Py = 800,
      Ly = 900,
      Oy = 5e3,
      By = 1e3,
      Ey = 1100,
      zy = 2e3,
      Ry = 3e3,
      Fy = 3500,
      Ny = 4e3,
      Hy = 5e3,
      Wy = {
    PROCESSOR: {
      FILTER: Ay,
      SERIES_FILTER: Py,
      STATISTIC: Oy
    },
    VISUAL: {
      LAYOUT: By,
      PROGRESSIVE_LAYOUT: Ey,
      GLOBAL: zy,
      CHART: Ry,
      POST_CHART_LAYOUT: Fy,
      COMPONENT: Ny,
      BRUSH: Hy
    }
  },
      Vy = "__flagInMainProcess",
      Gy = "__optionUpdated",
      Xy = /^[a-zA-Z0-9_]+$/;

  ll.prototype.on = sl("on", !0), ll.prototype.off = sl("off", !0), ll.prototype.one = sl("one", !0), c(ll, Xd);
  var Yy = hl.prototype;
  Yy._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;

      if (this[Gy]) {
        var e = this[Gy].silent;
        this[Vy] = !0, cl(this), Uy.update.call(this), this[Vy] = !1, this[Gy] = !1, gl.call(this, e), vl.call(this, e);
      } else if (t.unfinished) {
        var i = Dy,
            n = this._model,
            r = this._api;
        t.unfinished = !1;

        do {
          var a = +new Date();
          t.performSeriesTasks(n), t.performDataProcessorTasks(n), fl(this, n), t.performVisualTasks(n), bl(this, this._model, r, "remain"), i -= +new Date() - a;
        } while (i > 0 && t.unfinished);

        t.unfinished || this._zr.flush();
      }
    }
  }, Yy.getDom = function () {
    return this._dom;
  }, Yy.getZr = function () {
    return this._zr;
  }, Yy.setOption = function (t, e, i) {
    if (bd && by(!this[Vy], "`setOption` should not be called during main process."), this._disposed) return void Sl(this.id);
    var n;

    if (Ty(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[Vy] = !0, !this._model || e) {
      var r = new Yo(this._api),
          a = this._theme,
          o = this._model = new dm();
      o.scheduler = this._scheduler, o.init(null, null, a, r);
    }

    this._model.setOption(t, Ky), i ? (this[Gy] = {
      silent: n
    }, this[Vy] = !1) : (cl(this), Uy.update.call(this), this._zr.flush(), this[Gy] = !1, this[Vy] = !1, gl.call(this, n), vl.call(this, n));
  }, Yy.setTheme = function () {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, Yy.getModel = function () {
    return this._model;
  }, Yy.getOption = function () {
    return this._model && this._model.getOption();
  }, Yy.getWidth = function () {
    return this._zr.getWidth();
  }, Yy.getHeight = function () {
    return this._zr.getHeight();
  }, Yy.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, Yy.getRenderedCanvas = function (t) {
    if (Cd.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
      var e = this._zr;
      return e.painter.getRenderedCanvas(t);
    }
  }, Yy.getSvgDataURL = function () {
    if (Cd.svgSupported) {
      var t = this._zr,
          e = t.storage.getDisplayList();
      return f(e, function (t) {
        t.stopAnimation(!0);
      }), t.painter.toDataURL();
    }
  }, Yy.getDataURL = function (t) {
    if (this._disposed) return void Sl(this.id);
    t = t || {};
    var e = t.excludeComponents,
        i = this._model,
        n = [],
        r = this;
    My(e, function (t) {
      i.eachComponent({
        mainType: t
      }, function (t) {
        var e = r._componentsMap[t.__viewId];
        e.group.ignore || (n.push(e), e.group.ignore = !0);
      });
    });
    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
    return My(n, function (t) {
      t.group.ignore = !1;
    }), a;
  }, Yy.getConnectedDataURL = function (t) {
    if (this._disposed) return void Sl(this.id);

    if (Cd.canvasSupported) {
      var e = "svg" === t.type,
          i = this.group,
          r = Math.min,
          a = Math.max,
          o = 1 / 0;

      if (n_[i]) {
        var s = o,
            l = o,
            h = -o,
            u = -o,
            c = [],
            d = t && t.pixelRatio || 1;
        f(i_, function (o) {
          if (o.group === i) {
            var d = e ? o.getZr().painter.getSvgDom().innerHTML : o.getRenderedCanvas(n(t)),
                f = o.getDom().getBoundingClientRect();
            s = r(f.left, s), l = r(f.top, l), h = a(f.right, h), u = a(f.bottom, u), c.push({
              dom: d,
              left: f.left,
              top: f.top
            });
          }
        }), s *= d, l *= d, h *= d, u *= d;
        var p = h - s,
            g = u - l,
            v = Rd(),
            m = An(v, {
          renderer: e ? "svg" : "canvas"
        });

        if (m.resize({
          width: p,
          height: g
        }), e) {
          var y = "";
          return My(c, function (t) {
            var e = t.left - s,
                i = t.top - l;
            y += '<g transform="translate(' + e + "," + i + ')">' + t.dom + "</g>";
          }), m.painter.getSvgRoot().innerHTML = y, t.connectedBackgroundColor && m.painter.setBackgroundColor(t.connectedBackgroundColor), m.refreshImmediately(), m.painter.toDataURL();
        }

        return t.connectedBackgroundColor && m.add(new rv({
          shape: {
            x: 0,
            y: 0,
            width: p,
            height: g
          },
          style: {
            fill: t.connectedBackgroundColor
          }
        })), My(c, function (t) {
          var e = new hn({
            style: {
              x: t.left * d - s,
              y: t.top * d - l,
              image: t.dom
            }
          });
          m.add(e);
        }), m.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"));
      }

      return this.getDataURL(t);
    }
  }, Yy.convertToPixel = y(ul, "convertToPixel"), Yy.convertFromPixel = y(ul, "convertFromPixel"), Yy.containPixel = function (t, e) {
    if (this._disposed) return void Sl(this.id);
    var i,
        n = this._model;
    return t = Wn(n, t), f(t, function (t, n) {
      n.indexOf("Models") >= 0 && f(t, function (t) {
        var r = t.coordinateSystem;
        if (r && r.containPoint) i |= !!r.containPoint(e);else if ("seriesModels" === n) {
          var a = this._chartsMap[t.__viewId];
          a && a.containPoint ? i |= a.containPoint(e, t) : bd && console.warn(n + ": " + (a ? "The found component do not support containPoint." : "No view mapping to the found component."));
        } else bd && console.warn(n + ": containPoint is not supported");
      }, this);
    }, this), !!i;
  }, Yy.getVisual = function (t, e) {
    var i = this._model;
    t = Wn(i, t, {
      defaultMainType: "series"
    });
    var n = t.seriesModel;
    bd && (n || console.warn("There is no specified seires model"));
    var r = n.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
    return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
  }, Yy.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, Yy.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };
  var Uy = {
    prepareAndUpdate: function prepareAndUpdate(t) {
      cl(this), Uy.update.call(this, t);
    },
    update: function update(t) {
      var e = this._model,
          i = this._api,
          n = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;

      if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, i), a.performDataProcessorTasks(e, t), fl(this, e), r.update(e, i), _l(e), a.performVisualTasks(e, t), xl(this, e, i, t);
        var o = e.get("backgroundColor") || "transparent";
        if (Cd.canvasSupported) n.setBackgroundColor(o);else {
          var s = He(o);
          o = Xe(s, "rgb"), 0 === s[3] && (o = "transparent");
        }
        Ml(e, i);
      }
    },
    updateTransform: function updateTransform(t) {
      var e = this._model,
          i = this,
          n = this._api;

      if (e) {
        var r = [];
        e.eachComponent(function (a, o) {
          var s = i.getViewOfComponentModel(o);
          if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, n, t);
            l && l.update && r.push(s);
          } else r.push(s);
        });
        var a = R();
        e.eachSeries(function (r) {
          var o = i._chartsMap[r.__viewId];

          if (o.updateTransform) {
            var s = o.updateTransform(r, e, n, t);
            s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), _l(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
          dirtyMap: a
        }), bl(i, e, n, t, a), Ml(e, this._api);
      }
    },
    updateView: function updateView(t) {
      var e = this._model;
      e && (Ds.markUpdateMethod(t, "updateView"), _l(e), this._scheduler.performVisualTasks(e, t, {
        setDirty: !0
      }), xl(this, this._model, this._api, t), Ml(e, this._api));
    },
    updateVisual: function updateVisual(t) {
      Uy.update.call(this, t);
    },
    updateLayout: function updateLayout(t) {
      Uy.update.call(this, t);
    }
  };
  Yy.resize = function (t) {
    if (bd && by(!this[Vy], "`resize` should not be called during main process."), this._disposed) return void Sl(this.id);

    this._zr.resize(t);

    var e = this._model;

    if (this._loadingFX && this._loadingFX.resize(), e) {
      var i = e.resetOption("media"),
          n = t && t.silent;
      this[Vy] = !0, i && cl(this), Uy.update.call(this), this[Vy] = !1, gl.call(this, n), vl.call(this, n);
    }
  }, Yy.showLoading = function (t, e) {
    if (this._disposed) return void Sl(this.id);
    if (Ty(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), !e_[t]) return void (bd && console.warn("Loading effects " + t + " not exists."));
    var i = e_[t](this._api, e),
        n = this._zr;
    this._loadingFX = i, n.add(i);
  }, Yy.hideLoading = function () {
    return this._disposed ? void Sl(this.id) : (this._loadingFX && this._zr.remove(this._loadingFX), void (this._loadingFX = null));
  }, Yy.makeActionFromEvent = function (t) {
    var e = o({}, t);
    return e.type = Zy[t.type], e;
  }, Yy.dispatchAction = function (t, e) {
    if (this._disposed) return void Sl(this.id);

    if (Ty(e) || (e = {
      silent: !!e
    }), jy[t.type] && this._model) {
      if (this[Vy]) return void this._pendingActions.push(t);
      pl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Cd.browser.weChat && this._throttledZrFlush(), gl.call(this, e.silent), vl.call(this, e.silent);
    }
  }, Yy.appendData = function (t) {
    if (this._disposed) return void Sl(this.id);
    var e = t.seriesIndex,
        i = this.getModel(),
        n = i.getSeriesByIndex(e);
    bd && by(t.data && n), n.appendData(t), this._scheduler.unfinished = !0;
  }, Yy.on = sl("on", !1), Yy.off = sl("off", !1), Yy.one = sl("one", !1);
  var qy = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  Yy._initEvents = function () {
    My(qy, function (t) {
      var e = function e(_e3) {
        var i,
            n = this.getModel(),
            r = _e3.target,
            a = "globalout" === t;
        if (a) i = {};else if (r && null != r.dataIndex) {
          var s = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
          i = s && s.getDataParams(r.dataIndex, r.dataType, r) || {};
        } else r && r.eventData && (i = o({}, r.eventData));

        if (i) {
          var l = i.componentType,
              h = i.componentIndex;
          ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", h = i.seriesIndex);
          var u = l && null != h && n.getComponent(l, h),
              c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
          bd && (a || u && c || console.warn("model or view can not be found by params")), i.event = _e3, i.type = t, this._ecEventProcessor.eventInfo = {
            targetEl: r,
            packedEvent: i,
            model: u,
            view: c
          }, this.trigger(t, i);
        }
      };

      e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this);
    }, this), My(Zy, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, Yy.isDisposed = function () {
    return this._disposed;
  }, Yy.clear = function () {
    return this._disposed ? void Sl(this.id) : void this.setOption({
      series: []
    }, !0);
  }, Yy.dispose = function () {
    if (this._disposed) return void Sl(this.id);
    this._disposed = !0, Gn(this.getDom(), o_, "");
    var t = this._api,
        e = this._model;
    My(this._componentsViews, function (i) {
      i.dispose(e, t);
    }), My(this._chartsViews, function (i) {
      i.dispose(e, t);
    }), this._zr.dispose(), delete i_[this.id];
  }, c(hl, Xd), Dl.prototype = {
    constructor: Dl,
    normalizeQuery: function normalizeQuery(t) {
      var e = {},
          i = {},
          n = {};

      if (w(t)) {
        var r = Cy(t);
        e.mainType = r.main || null, e.subType = r.sub || null;
      } else {
        var a = ["Index", "Name", "Id"],
            o = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        f(t, function (t, r) {
          for (var s = !1, l = 0; l < a.length; l++) {
            var h = a[l],
                u = r.lastIndexOf(h);

            if (u > 0 && u === r.length - h.length) {
              var c = r.slice(0, u);
              "data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0);
            }
          }

          o.hasOwnProperty(r) && (i[r] = t, s = !0), s || (n[r] = t);
        });
      }

      return {
        cptQuery: e,
        dataQuery: i,
        otherQuery: n
      };
    },
    filter: function filter(t, e) {
      function i(t, e, i, n) {
        return null == t[i] || e[n || i] === t[i];
      }

      var n = this.eventInfo;
      if (!n) return !0;
      var r = n.targetEl,
          a = n.packedEvent,
          o = n.model,
          s = n.view;
      if (!o || !s) return !0;
      var l = e.cptQuery,
          h = e.dataQuery;
      return i(l, o, "mainType") && i(l, o, "subType") && i(l, o, "index", "componentIndex") && i(l, o, "name") && i(l, o, "id") && i(h, a, "name") && i(h, a, "dataIndex") && i(h, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));
    },
    afterTrigger: function afterTrigger() {
      this.eventInfo = null;
    }
  };
  var jy = {},
      Zy = {},
      $y = [],
      Ky = [],
      Qy = [],
      Jy = [],
      t_ = {},
      e_ = {},
      i_ = {},
      n_ = {},
      r_ = new Date() - 0,
      a_ = new Date() - 0,
      o_ = "_echarts_instance_",
      s_ = Ol;
  Yl(zy, jm), Fl(Cm), Nl(Ly, Im), ql("default", Qm), Wl({
    type: "highlight",
    event: "highlight",
    update: "highlight"
  }, F), Wl({
    type: "downplay",
    event: "downplay",
    update: "downplay"
  }, F), Rl("light", oy), Rl("dark", uy);
  var l_ = {},
      h_ = "__ec_stack_",
      u_ = .5,
      c_ = "undefined" != typeof Float32Array ? Float32Array : Array,
      d_ = {
    seriesType: "bar",
    plan: Hm(),
    reset: function reset(t) {
      function e(t, e) {
        for (var i, d = t.count, f = new c_(2 * d), p = new c_(2 * d), g = new c_(d), v = [], m = [], y = 0, _ = 0; null != (i = t.next());) {
          m[u] = e.get(s, i), m[1 - u] = e.get(l, i), v = n.dataToPoint(m, null, v), p[y] = h ? r.x + r.width : v[0], f[y++] = v[0], p[y] = h ? v[1] : r.y + r.height, f[y++] = v[1], g[_++] = i;
        }

        e.setLayout({
          largePoints: f,
          largeDataIndices: g,
          largeBackgroundPoints: p,
          barWidth: c,
          valueAxisStart: ph(a, o, !1),
          backgroundStart: h ? r.x : r.y,
          valueAxisHorizontal: h
        });
      }

      if (dh(t) && fh(t)) {
        var i = t.getData(),
            n = t.coordinateSystem,
            r = n.grid.getRect(),
            a = n.getBaseAxis(),
            o = n.getOtherAxis(a),
            s = i.mapDimension(o.dim),
            l = i.mapDimension(a.dim),
            h = o.isHorizontal(),
            u = h ? 0 : 1,
            c = uh(lh([t]), a, t).width;
        return c > u_ || (c = u_), {
          progress: e
        };
      }
    }
  };
  gh.prototype.parse = function (t) {
    return t;
  }, gh.prototype.getSetting = function (t) {
    return this._setting[t];
  }, gh.prototype.contain = function (t) {
    var e = this._extent;
    return t >= e[0] && t <= e[1];
  }, gh.prototype.normalize = function (t) {
    var e = this._extent;
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, gh.prototype.scale = function (t) {
    var e = this._extent;
    return t * (e[1] - e[0]) + e[0];
  }, gh.prototype.unionExtent = function (t) {
    var e = this._extent;
    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, gh.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, gh.prototype.getExtent = function () {
    return this._extent.slice();
  }, gh.prototype.setExtent = function (t, e) {
    var i = this._extent;
    isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
  }, gh.prototype.isBlank = function () {
    return this._isBlank;
  }, gh.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, gh.prototype.getLabel = null, jn(gh), Qn(gh, {
    registerWhenExtend: !0
  }), vh.createByAxisModel = function (t) {
    var e = t.option,
        i = e.data,
        n = i && p(i, yh);
    return new vh({
      categories: n,
      needCollect: !n,
      deduplication: e.dedplication !== !1
    });
  };
  var f_ = vh.prototype;
  f_.getOrdinal = function (t) {
    return mh(this).get(t);
  }, f_.parseAndCollect = function (t) {
    var e,
        i = this._needCollect;
    if ("string" != typeof t && !i) return t;
    if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
    var n = mh(this);
    return e = n.get(t), null == e && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = 0 / 0), e;
  };
  var p_ = gh.prototype,
      g_ = gh.extend({
    type: "ordinal",
    init: function init(t, e) {
      (!t || _(t)) && (t = new vh({
        categories: t
      })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    },
    parse: function parse(t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    },
    contain: function contain(t) {
      return t = this.parse(t), p_.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    },
    normalize: function normalize(t) {
      return p_.normalize.call(this, this.parse(t));
    },
    scale: function scale(t) {
      return Math.round(p_.scale.call(this, t));
    },
    getTicks: function getTicks() {
      for (var t = [], e = this._extent, i = e[0]; i <= e[1];) {
        t.push(i), i++;
      }

      return t;
    },
    getLabel: function getLabel(t) {
      return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
    },
    count: function count() {
      return this._extent[1] - this._extent[0] + 1;
    },
    unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    },
    getOrdinalMeta: function getOrdinalMeta() {
      return this._ordinalMeta;
    },
    niceTicks: F,
    niceExtent: F
  });

  g_.create = function () {
    return new g_();
  };

  var v_ = Qa,
      m_ = Qa,
      y_ = gh.extend({
    type: "interval",
    _interval: 0,
    _intervalPrecision: 2,
    setExtent: function setExtent(t, e) {
      var i = this._extent;
      isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e));
    },
    unionExtent: function unionExtent(t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), y_.prototype.setExtent.call(this, e[0], e[1]);
    },
    getInterval: function getInterval() {
      return this._interval;
    },
    setInterval: function setInterval(t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = xh(t);
    },
    getTicks: function getTicks(t) {
      var e = this._interval,
          i = this._extent,
          n = this._niceExtent,
          r = this._intervalPrecision,
          a = [];
      if (!e) return a;
      var o = 1e4;
      i[0] < n[0] && a.push(t ? m_(n[0] - e, r) : i[0]);

      for (var s = n[0]; s <= n[1] && (a.push(s), s = m_(s + e, r), s !== a[a.length - 1]);) {
        if (a.length > o) return [];
      }

      var l = a.length ? a[a.length - 1] : n[1];
      return i[1] > l && a.push(t ? m_(l + e, r) : i[1]), a;
    },
    getMinorTicks: function getMinorTicks(t) {
      for (var e = this.getTicks(!0), i = [], n = this.getExtent(), r = 1; r < e.length; r++) {
        for (var a = e[r], o = e[r - 1], s = 0, l = [], h = a - o, u = h / t; t - 1 > s;) {
          var c = Qa(o + (s + 1) * u);
          c > n[0] && c < n[1] && l.push(c), s++;
        }

        i.push(l);
      }

      return i;
    },
    getLabel: function getLabel(t, e) {
      if (null == t) return "";
      var i = e && e.precision;
      return null == i ? i = Ja(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = m_(t, i, !0), so(t);
    },
    niceTicks: function niceTicks(t, e, i) {
      t = t || 5;
      var n = this._extent,
          r = n[1] - n[0];

      if (isFinite(r)) {
        0 > r && (r = -r, n.reverse());

        var a = _h(n, t, e, i);

        this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    },
    niceExtent: function niceExtent(t) {
      var e = this._extent;
      if (e[0] === e[1]) if (0 !== e[0]) {
        var i = e[0];
        t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2);
      } else e[1] = 1;
      var n = e[1] - e[0];
      isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
      var r = this._interval;
      t.fixMin || (e[0] = m_(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = m_(Math.ceil(e[1] / r) * r));
    }
  });

  y_.create = function () {
    return new y_();
  };

  var __ = y_.prototype,
      x_ = Math.ceil,
      w_ = Math.floor,
      b_ = 1e3,
      M_ = 60 * b_,
      S_ = 60 * M_,
      T_ = 24 * S_,
      C_ = function C_(t, e, i, n) {
    for (; n > i;) {
      var r = i + n >>> 1;
      t[r][1] < e ? i = r + 1 : n = r;
    }

    return i;
  },
      I_ = y_.extend({
    type: "time",
    getLabel: function getLabel(t) {
      var e = this._stepLvl,
          i = new Date(t);
      return po(e[0], i, this.getSetting("useUTC"));
    },
    niceExtent: function niceExtent(t) {
      var e = this._extent;

      if (e[0] === e[1] && (e[0] -= T_, e[1] += T_), e[1] === -1 / 0 && 1 / 0 === e[0]) {
        var i = new Date();
        e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - T_;
      }

      this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
      var n = this._interval;
      t.fixMin || (e[0] = Qa(w_(e[0] / n) * n)), t.fixMax || (e[1] = Qa(x_(e[1] / n) * n));
    },
    niceTicks: function niceTicks(t, e, i) {
      t = t || 10;
      var n = this._extent,
          r = n[1] - n[0],
          a = r / t;
      null != e && e > a && (a = e), null != i && a > i && (a = i);
      var o = k_.length,
          s = C_(k_, a, 0, o),
          l = k_[Math.min(s, o - 1)],
          h = l[1];

      if ("year" === l[0]) {
        var u = r / h,
            c = oo(u / t, !0);
        h *= c;
      }

      var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(x_((n[0] - d) / h) * h + d), Math.round(w_((n[1] - d) / h) * h + d)];
      bh(f, n), this._stepLvl = l, this._interval = h, this._niceExtent = f;
    },
    parse: function parse(t) {
      return +no(t);
    }
  });

  f(["contain", "normalize"], function (t) {
    I_.prototype[t] = function (e) {
      return __[t].call(this, this.parse(e));
    };
  });
  var k_ = [["hh:mm:ss", b_], ["hh:mm:ss", 5 * b_], ["hh:mm:ss", 10 * b_], ["hh:mm:ss", 15 * b_], ["hh:mm:ss", 30 * b_], ["hh:mm\nMM-dd", M_], ["hh:mm\nMM-dd", 5 * M_], ["hh:mm\nMM-dd", 10 * M_], ["hh:mm\nMM-dd", 15 * M_], ["hh:mm\nMM-dd", 30 * M_], ["hh:mm\nMM-dd", S_], ["hh:mm\nMM-dd", 2 * S_], ["hh:mm\nMM-dd", 6 * S_], ["hh:mm\nMM-dd", 12 * S_], ["MM-dd\nyyyy", T_], ["MM-dd\nyyyy", 2 * T_], ["MM-dd\nyyyy", 3 * T_], ["MM-dd\nyyyy", 4 * T_], ["MM-dd\nyyyy", 5 * T_], ["MM-dd\nyyyy", 6 * T_], ["week", 7 * T_], ["MM-dd\nyyyy", 10 * T_], ["week", 14 * T_], ["week", 21 * T_], ["month", 31 * T_], ["week", 42 * T_], ["month", 62 * T_], ["week", 70 * T_], ["quarter", 95 * T_], ["month", 31 * T_ * 4], ["month", 31 * T_ * 5], ["half-year", 380 * T_ / 2], ["month", 31 * T_ * 8], ["month", 31 * T_ * 10], ["year", 380 * T_]];

  I_.create = function (t) {
    return new I_({
      useUTC: t.ecModel.get("useUTC")
    });
  };

  var D_ = gh.prototype,
      A_ = y_.prototype,
      P_ = Ja,
      L_ = Qa,
      O_ = Math.floor,
      B_ = Math.ceil,
      E_ = Math.pow,
      z_ = Math.log,
      R_ = gh.extend({
    type: "log",
    base: 10,
    $constructor: function $constructor() {
      gh.apply(this, arguments), this._originalScale = new y_();
    },
    getTicks: function getTicks(t) {
      var e = this._originalScale,
          i = this._extent,
          n = e.getExtent();
      return p(A_.getTicks.call(this, t), function (t) {
        var r = Qa(E_(this.base, t));
        return r = t === i[0] && e.__fixMin ? Mh(r, n[0]) : r, r = t === i[1] && e.__fixMax ? Mh(r, n[1]) : r;
      }, this);
    },
    getMinorTicks: A_.getMinorTicks,
    getLabel: A_.getLabel,
    scale: function scale(t) {
      return t = D_.scale.call(this, t), E_(this.base, t);
    },
    setExtent: function setExtent(t, e) {
      var i = this.base;
      t = z_(t) / z_(i), e = z_(e) / z_(i), A_.setExtent.call(this, t, e);
    },
    getExtent: function getExtent() {
      var t = this.base,
          e = D_.getExtent.call(this);
      e[0] = E_(t, e[0]), e[1] = E_(t, e[1]);
      var i = this._originalScale,
          n = i.getExtent();
      return i.__fixMin && (e[0] = Mh(e[0], n[0])), i.__fixMax && (e[1] = Mh(e[1], n[1])), e;
    },
    unionExtent: function unionExtent(t) {
      this._originalScale.unionExtent(t);

      var e = this.base;
      t[0] = z_(t[0]) / z_(e), t[1] = z_(t[1]) / z_(e), D_.unionExtent.call(this, t);
    },
    unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    },
    niceTicks: function niceTicks(t) {
      t = t || 10;
      var e = this._extent,
          i = e[1] - e[0];

      if (!(1 / 0 === i || 0 >= i)) {
        var n = ro(i),
            r = t / i * n;

        for (.5 >= r && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) {
          n *= 10;
        }

        var a = [Qa(B_(e[0] / n) * n), Qa(O_(e[1] / n) * n)];
        this._interval = n, this._niceExtent = a;
      }
    },
    niceExtent: function niceExtent(t) {
      A_.niceExtent.call(this, t);
      var e = this._originalScale;
      e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    }
  });
  f(["contain", "normalize"], function (t) {
    R_.prototype[t] = function (e) {
      return e = z_(e) / z_(this.base), D_[t].call(this, e);
    };
  }), R_.create = function () {
    return new R_();
  };

  var F_ = function F_(t) {
    this._axes = {}, this._dimList = [], this.name = t || "";
  };

  F_.prototype = {
    constructor: F_,
    type: "cartesian",
    getAxis: function getAxis(t) {
      return this._axes[t];
    },
    getAxes: function getAxes() {
      return p(this._dimList, Eh, this);
    },
    getAxesByScale: function getAxesByScale(t) {
      return t = t.toLowerCase(), v(this.getAxes(), function (e) {
        return e.scale.type === t;
      });
    },
    addAxis: function addAxis(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    },
    dataToCoord: function dataToCoord(t) {
      return this._dataCoordConvert(t, "dataToCoord");
    },
    coordToData: function coordToData(t) {
      return this._dataCoordConvert(t, "coordToData");
    },
    _dataCoordConvert: function _dataCoordConvert(t, e) {
      for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
        var a = i[r],
            o = this._axes[a];
        n[a] = o[e](t[a]);
      }

      return n;
    }
  }, zh.prototype = {
    constructor: zh,
    type: "cartesian2d",
    dimensions: ["x", "y"],
    getBaseAxis: function getBaseAxis() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    },
    containPoint: function containPoint(t) {
      var e = this.getAxis("x"),
          i = this.getAxis("y");
      return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]));
    },
    containData: function containData(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    },
    dataToPoint: function dataToPoint(t, e, i) {
      var n = this.getAxis("x"),
          r = this.getAxis("y");
      return i = i || [], i[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), i;
    },
    clampData: function clampData(t, e) {
      var i = this.getAxis("x").scale,
          n = this.getAxis("y").scale,
          r = i.getExtent(),
          a = n.getExtent(),
          o = i.parse(t[0]),
          s = n.parse(t[1]);
      return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
    },
    pointToData: function pointToData(t, e) {
      var i = this.getAxis("x"),
          n = this.getAxis("y");
      return e = e || [], e[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), e;
    },
    getOtherAxis: function getOtherAxis(t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    },
    getArea: function getArea() {
      var t = this.getAxis("x").getGlobalExtent(),
          e = this.getAxis("y").getGlobalExtent(),
          i = Math.min(t[0], t[1]),
          n = Math.min(e[0], e[1]),
          r = Math.max(t[0], t[1]) - i,
          a = Math.max(e[0], e[1]) - n,
          o = new si(i, n, r, a);
      return o;
    }
  }, u(zh, F_);

  var N_ = Hn(),
      H_ = [0, 1],
      W_ = function W_(t, e, i) {
    this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1;
  };

  W_.prototype = {
    constructor: W_,
    contain: function contain(t) {
      var e = this._extent,
          i = Math.min(e[0], e[1]),
          n = Math.max(e[0], e[1]);
      return t >= i && n >= t;
    },
    containData: function containData(t) {
      return this.scale.contain(t);
    },
    getExtent: function getExtent() {
      return this._extent.slice();
    },
    getPixelPrecision: function getPixelPrecision(t) {
      return to(t || this.scale.getExtent(), this._extent);
    },
    setExtent: function setExtent(t, e) {
      var i = this._extent;
      i[0] = t, i[1] = e;
    },
    dataToCoord: function dataToCoord(t, e) {
      var i = this._extent,
          n = this.scale;
      return t = n.normalize(t), this.onBand && "ordinal" === n.type && (i = i.slice(), Kh(i, n.count())), $a(t, H_, i, e);
    },
    coordToData: function coordToData(t, e) {
      var i = this._extent,
          n = this.scale;
      this.onBand && "ordinal" === n.type && (i = i.slice(), Kh(i, n.count()));
      var r = $a(t, i, H_, e);
      return this.scale.scale(r);
    },
    pointToData: function pointToData() {},
    getTicksCoords: function getTicksCoords(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(),
          i = Fh(this, e),
          n = i.ticks,
          r = p(n, function (t) {
        return {
          coord: this.dataToCoord(t),
          tickValue: t
        };
      }, this),
          a = e.get("alignWithLabel");
      return Qh(this, r, a, t.clamp), r;
    },
    getMinorTicksCoords: function getMinorTicksCoords() {
      if ("ordinal" === this.scale.type) return [];
      var t = this.model.getModel("minorTick"),
          e = t.get("splitNumber");
      e > 0 && 100 > e || (e = 5);
      var i = this.scale.getMinorTicks(e),
          n = p(i, function (t) {
        return p(t, function (t) {
          return {
            coord: this.dataToCoord(t),
            tickValue: t
          };
        }, this);
      }, this);
      return n;
    },
    getViewLabels: function getViewLabels() {
      return Rh(this).labels;
    },
    getLabelModel: function getLabelModel() {
      return this.model.getModel("axisLabel");
    },
    getTickModel: function getTickModel() {
      return this.model.getModel("axisTick");
    },
    getBandWidth: function getBandWidth() {
      var t = this._extent,
          e = this.scale.getExtent(),
          i = e[1] - e[0] + (this.onBand ? 1 : 0);
      0 === i && (i = 1);
      var n = Math.abs(t[1] - t[0]);
      return Math.abs(n) / i;
    },
    isHorizontal: null,
    getRotate: null,
    calculateCategoryInterval: function calculateCategoryInterval() {
      return qh(this);
    }
  };

  var V_ = function V_(t, e, i, n, r) {
    W_.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom";
  };

  V_.prototype = {
    constructor: V_,
    index: 0,
    getAxesOnZeroOf: null,
    model: null,
    isHorizontal: function isHorizontal() {
      var t = this.position;
      return "top" === t || "bottom" === t;
    },
    getGlobalExtent: function getGlobalExtent(t) {
      var e = this.getExtent();
      return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
    },
    getOtherAxis: function getOtherAxis() {
      this.grid.getOtherAxis();
    },
    pointToData: function pointToData(t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
    },
    toLocalCoord: null,
    toGlobalCoord: null
  }, u(V_, W_);
  var G_ = {
    show: !0,
    zlevel: 0,
    z: 0,
    inverse: !1,
    name: "",
    nameLocation: "end",
    nameRotate: null,
    nameTruncate: {
      maxWidth: null,
      ellipsis: "...",
      placeholder: "."
    },
    nameTextStyle: {},
    nameGap: 15,
    silent: !1,
    triggerEvent: !1,
    tooltip: {
      show: !1
    },
    axisPointer: {},
    axisLine: {
      show: !0,
      onZero: !0,
      onZeroAxisIndex: null,
      lineStyle: {
        color: "#333",
        width: 1,
        type: "solid"
      },
      symbol: ["none", "none"],
      symbolSize: [10, 15]
    },
    axisTick: {
      show: !0,
      inside: !1,
      length: 5,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: !0,
      inside: !1,
      rotate: 0,
      showMinLabel: null,
      showMaxLabel: null,
      margin: 8,
      fontSize: 12
    },
    splitLine: {
      show: !0,
      lineStyle: {
        color: ["#ccc"],
        width: 1,
        type: "solid"
      }
    },
    splitArea: {
      show: !1,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
      X_ = {};
  X_.categoryAxis = r({
    boundaryGap: !0,
    deduplication: null,
    splitLine: {
      show: !1
    },
    axisTick: {
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, G_), X_.valueAxis = r({
    boundaryGap: [0, 0],
    splitNumber: 5,
    minorTick: {
      show: !1,
      splitNumber: 5,
      length: 3,
      lineStyle: {}
    },
    minorSplitLine: {
      show: !1,
      lineStyle: {
        color: "#eee",
        width: 1
      }
    }
  }, G_), X_.timeAxis = s({
    scale: !0,
    min: "dataMin",
    max: "dataMax"
  }, X_.valueAxis), X_.logAxis = s({
    scale: !0,
    logBase: 10
  }, X_.valueAxis);

  var Y_ = ["value", "category", "time", "log"],
      U_ = function U_(t, e, i, n) {
    f(Y_, function (o) {
      e.extend({
        type: t + "Axis." + o,
        mergeDefaultAndTheme: function mergeDefaultAndTheme(e, n) {
          var a = this.layoutMode,
              s = a ? yo(e) : {},
              l = n.getTheme();
          r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = i(t, e), a && mo(e, s, a);
        },
        optionUpdated: function optionUpdated() {
          var t = this.option;
          "category" === t.type && (this.__ordinalMeta = vh.createByAxisModel(this));
        },
        getCategories: function getCategories(t) {
          var e = this.option;
          return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
        },
        getOrdinalMeta: function getOrdinalMeta() {
          return this.__ordinalMeta;
        },
        defaultOption: a([{}, X_[o + "Axis"], n], !0)
      });
    }), $v.registerSubTypeDefaulter(t + "Axis", y(i, t));
  },
      q_ = {
    getMin: function getMin(t) {
      var e = this.option,
          i = t || null == e.rangeStart ? e.min : e.rangeStart;
      return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !C(i) && (i = this.axis.scale.parse(i)), i;
    },
    getMax: function getMax(t) {
      var e = this.option,
          i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
      return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !C(i) && (i = this.axis.scale.parse(i)), i;
    },
    getNeedCrossZero: function getNeedCrossZero() {
      var t = this.option;
      return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;
    },
    getCoordSysModel: F,
    setRange: function setRange(t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    },
    resetRange: function resetRange() {
      this.option.rangeStart = this.option.rangeEnd = null;
    }
  },
      j_ = $v.extend({
    type: "cartesian2dAxis",
    axis: null,
    init: function init() {
      j_.superApply(this, "init", arguments), this.resetRange();
    },
    mergeOption: function mergeOption() {
      j_.superApply(this, "mergeOption", arguments), this.resetRange();
    },
    restoreData: function restoreData() {
      j_.superApply(this, "restoreData", arguments), this.resetRange();
    },
    getCoordSysModel: function getCoordSysModel() {
      return this.ecModel.queryComponents({
        mainType: "grid",
        index: this.option.gridIndex,
        id: this.option.gridId
      })[0];
    }
  });

  r(j_.prototype, q_);
  var Z_ = {
    offset: 0
  };
  U_("x", j_, Jh, Z_), U_("y", j_, Jh, Z_), $v.extend({
    type: "grid",
    dependencies: ["xAxis", "yAxis"],
    layoutMode: "box",
    coordinateSystem: null,
    defaultOption: {
      show: !1,
      zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 60,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }
  });
  var $_ = eu.prototype;
  $_.type = "grid", $_.axisPointerEnabled = !0, $_.getRect = function () {
    return this._rect;
  }, $_.update = function (t, e) {
    var i = this._axesMap;
    this._updateScale(t, this.model), f(i.x, function (t) {
      Ch(t.scale, t.model);
    }), f(i.y, function (t) {
      Ch(t.scale, t.model);
    });
    var n = {};
    f(i.x, function (t) {
      iu(i, "y", t, n);
    }), f(i.y, function (t) {
      iu(i, "x", t, n);
    }), this.resize(this.model, e);
  }, $_.resize = function (t, e, i) {
    function n() {
      f(a, function (t) {
        var e = t.isHorizontal(),
            i = e ? [0, r.width] : [0, r.height],
            n = t.inverse ? 1 : 0;
        t.setExtent(i[n], i[1 - n]), ru(t, e ? r.x : r.y);
      });
    }

    var r = vo(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    });
    this._rect = r;
    var a = this._axesList;
    n(), !i && t.get("containLabel") && (f(a, function (t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = Ph(t);

        if (e) {
          var i = t.isHorizontal() ? "height" : "width",
              n = t.model.get("axisLabel.margin");
          r[i] -= e[i] + n, "top" === t.position ? r.y += e.height + n : "left" === t.position && (r.x += e.width + n);
        }
      }
    }), n());
  }, $_.getAxis = function (t, e) {
    var i = this._axesMap[t];

    if (null != i) {
      if (null == e) for (var n in i) {
        if (i.hasOwnProperty(n)) return i[n];
      }
      return i[e];
    }
  }, $_.getAxes = function () {
    return this._axesList.slice();
  }, $_.getCartesian = function (t, e) {
    if (null != t && null != e) {
      var i = "x" + t + "y" + e;
      return this._coordsMap[i];
    }

    b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);

    for (var n = 0, r = this._coordsList; n < r.length; n++) {
      if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e) return r[n];
    }
  }, $_.getCartesians = function () {
    return this._coordsList.slice();
  }, $_.convertToPixel = function (t, e, i) {
    var n = this._findConvertTarget(t, e);

    return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null;
  }, $_.convertFromPixel = function (t, e, i) {
    var n = this._findConvertTarget(t, e);

    return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null;
  }, $_._findConvertTarget = function (t, e) {
    var i,
        n,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        l = this._coordsList;
    if (r) i = r.coordinateSystem, h(l, i) < 0 && (i = null);else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) n = this.getAxis("x", a.componentIndex);else if (o) n = this.getAxis("y", o.componentIndex);else if (s) {
      var u = s.coordinateSystem;
      u === this && (i = this._coordsList[0]);
    }
    return {
      cartesian: i,
      axis: n
    };
  }, $_.containPoint = function (t) {
    var e = this._coordsList[0];
    return e ? e.containPoint(t) : void 0;
  }, $_._initCartesian = function (t, e) {
    function i(i) {
      return function (o, s) {
        if (tu(o, t, e)) {
          var l = o.get("position");
          "x" === i ? "top" !== l && "bottom" !== l && (l = n.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = n.left ? "right" : "left"), n[l] = !0;
          var h = new V_(i, Ih(o), [0, 0], o.get("type"), l),
              u = "category" === h.type;
          h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[i][s] = h, a[i]++;
        }
      };
    }

    var n = {
      left: !1,
      right: !1,
      top: !1,
      bottom: !1
    },
        r = {
      x: {},
      y: {}
    },
        a = {
      x: 0,
      y: 0
    };
    return e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, i) {
      f(r.y, function (n, r) {
        var a = "x" + i + "y" + r,
            o = new zh(a);
        o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(n);
      }, this);
    }, this)) : (this._axesMap = {}, void (this._axesList = []));
  }, $_._updateScale = function (t, e) {
    function i(t, e) {
      f(t.mapDimension(e.dim, !0), function (i) {
        e.scale.unionExtentFromData(t, nh(t, i));
      });
    }

    f(this._axesList, function (t) {
      t.scale.setExtent(1 / 0, -1 / 0);
    }), t.eachSeries(function (n) {
      if (ou(n)) {
        var r = au(n, t),
            a = r[0],
            o = r[1];
        if (!tu(a, e, t) || !tu(o, e, t)) return;
        var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = n.getData(),
            h = s.getAxis("x"),
            u = s.getAxis("y");
        "list" === l.type && (i(l, h, n), i(l, u, n));
      }
    }, this);
  }, $_.getTooltipAxes = function (t) {
    var e = [],
        i = [];
    return f(this.getCartesians(), function (n) {
      var r = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(),
          a = n.getOtherAxis(r);
      h(e, r) < 0 && e.push(r), h(i, a) < 0 && i.push(a);
    }), {
      baseAxes: e,
      otherAxes: i
    };
  };
  var K_ = ["xAxis", "yAxis"];
  eu.create = function (t, e) {
    var i = [];
    return t.eachComponent("grid", function (n, r) {
      var a = new eu(n, t, e);
      a.name = "grid_" + r, a.resize(n, e, !0), n.coordinateSystem = a, i.push(a);
    }), t.eachSeries(function (e) {
      if (ou(e)) {
        var i = au(e, t),
            n = i[0],
            r = i[1],
            a = n.getCoordSysModel();

        if (bd) {
          if (!a) throw new Error('Grid "' + I(n.get("gridIndex"), n.get("gridId"), 0) + '" not found');
          if (n.getCoordSysModel() !== r.getCoordSysModel()) throw new Error("xAxis and yAxis must use the same grid");
        }

        var o = a.coordinateSystem;
        e.coordinateSystem = o.getCartesian(n.componentIndex, r.componentIndex);
      }
    }), i;
  }, eu.dimensions = eu.prototype.dimensions = zh.prototype.dimensions, Xo.register("cartesian2d", eu), lu.prototype = {
    constructor: lu,
    add: function add(t) {
      return this._add = t, this;
    },
    update: function update(t) {
      return this._update = t, this;
    },
    remove: function remove(t) {
      return this._remove = t, this;
    },
    execute: function execute() {
      var t,
          e = this._old,
          i = this._new,
          n = {},
          r = {},
          a = [],
          o = [];

      for (hu(e, n, a, "_oldKeyGetter", this), hu(i, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];

        if (null != l) {
          var h = l.length;
          h ? (1 === h && (r[s] = null), l = l.shift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }

      for (var t = 0; t < o.length; t++) {
        var s = o[t];

        if (r.hasOwnProperty(s)) {
          var l = r[s];
          if (null == l) continue;
          if (l.length) for (var u = 0, h = l.length; h > u; u++) {
            this._add && this._add(l[u]);
          } else this._add && this._add(l);
        }
      }
    }
  };

  var Q_ = R(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      J_ = b,
      tx = "undefined",
      ex = -1,
      ix = "e\x00\x00",
      nx = {
    "float": (typeof Float64Array === "undefined" ? "undefined" : _typeof(Float64Array)) === tx ? Array : Float64Array,
    "int": (typeof Int32Array === "undefined" ? "undefined" : _typeof(Int32Array)) === tx ? Array : Int32Array,
    ordinal: Array,
    number: Array,
    time: Array
  },
      rx = (typeof Uint32Array === "undefined" ? "undefined" : _typeof(Uint32Array)) === tx ? Array : Uint32Array,
      ax = (typeof Int32Array === "undefined" ? "undefined" : _typeof(Int32Array)) === tx ? Array : Int32Array,
      ox = (typeof Uint16Array === "undefined" ? "undefined" : _typeof(Uint16Array)) === tx ? Array : Uint16Array,
      sx = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      lx = ["_extent", "_approximateExtent", "_rawExtent"],
      hx = function hx(t, e) {
    t = t || ["x", "y"];

    for (var i = {}, n = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];
      w(o) ? o = new pu({
        name: o
      }) : o instanceof pu || (o = new pu(o));
      var s = o.name;
      o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, n.push(s), i[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }

    this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = uu(this), this._invertedIndicesMap = r, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput;
  },
      ux = hx.prototype;

  ux.type = "list", ux.hasItemOption = !0, ux.getDimension = function (t) {
    return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), t;
  }, ux.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, ux.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, ux.mapDimension = function (t, e) {
    var i = this._dimensionsSummary;
    if (null == e) return i.encodeFirstDimNotExtra[t];
    var n = i.encode[t];
    return e === !0 ? (n || []).slice() : n && n[e];
  }, ux.initData = function (t, e, i) {
    var n = bo.isInstance(t) || d(t);
    if (n && (t = new hs(t, this.dimensions.length)), bd && !n && ("function" != typeof t.getItem || "function" != typeof t.count)) throw new Error("Inavlid data provider.");
    this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = Pm[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._dimValueGetterArrayRows = Pm.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
  }, ux.getProvider = function () {
    return this._rawData;
  }, ux.appendData = function (t) {
    bd && L(!this._indices, "appendData can only be called on raw data.");
    var e = this._rawData,
        i = this.count();
    e.appendData(t);
    var n = e.count();
    e.persistent || (n += i), this._initDataFromProvider(i, n);
  }, ux.appendValues = function (t, e) {
    for (var i = this._chunkSize, n = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), h = this._chunkCount, u = 0; a > u; u++) {
      var c = r[u];
      o[c] || (o[c] = ku()), n[c] || (n[c] = []), yu(n, this._dimensionInfos[c], i, h, l), this._chunkCount = n[c].length;
    }

    for (var d = new Array(a), f = s; l > f; f++) {
      for (var p = f - s, g = Math.floor(f / i), v = f % i, m = 0; a > m; m++) {
        var c = r[m],
            y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);

        n[c][g][v] = y;
        var _ = o[c];
        y < _[0] && (_[0] = y), y > _[1] && (_[1] = y);
      }

      e && (this._nameList[f] = e[p]);
    }

    this._rawCount = this._count = l, this._extent = {}, _u(this);
  }, ux._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {
        var g = o[p];
        c[g] || (c[g] = ku());
        var v = l[g];
        0 === v.otherDims.itemName && (i = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), yu(a, v, n, f, e), this._chunkCount = a[g].length;
      }

      for (var m = new Array(s), y = t; e > y; y++) {
        m = r.getItem(y, m);

        for (var _ = Math.floor(y / n), x = y % n, w = 0; s > w; w++) {
          var g = o[w],
              b = a[g][_],
              M = this._dimValueGetter(m, g, y, w);

          b[x] = M;
          var S = c[g];
          M < S[0] && (S[0] = M), M > S[1] && (S[1] = M);
        }

        if (!r.pure) {
          var T = h[y];
          if (m && null == T) if (null != m.name) h[y] = T = m.name;else if (null != i) {
            var C = o[i],
                I = a[C][_];

            if (I) {
              T = I[x];
              var k = l[C].ordinalMeta;
              k && k.categories.length && (T = k.categories[T]);
            }
          }
          var D = null == m ? null : m.id;
          null == D && null != T && (d[T] = d[T] || 0, D = T, d[T] > 0 && (D += "__ec__" + d[T]), d[T]++), null != D && (u[y] = D);
        }
      }

      !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, _u(this);
    }
  }, ux.count = function () {
    return this._count;
  }, ux.getIndices = function () {
    var t,
        e = this._indices;

    if (e) {
      var i = e.constructor,
          n = this._count;

      if (i === Array) {
        t = new i(n);

        for (var r = 0; n > r; r++) {
          t[r] = e[r];
        }
      } else t = new i(e.buffer, 0, n);
    } else for (var i = gu(this), t = new i(this.count()), r = 0; r < t.length; r++) {
      t[r] = r;
    }

    return t;
  }, ux.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;
    var i = this._storage;
    if (!i[t]) return 0 / 0;
    e = this.getRawIndex(e);
    var n = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = i[t][n],
        o = a[r];
    return o;
  }, ux.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
    var i = this._storage[t];
    if (!i) return 0 / 0;
    var n = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = i[n];
    return a[r];
  }, ux._getFast = function (t, e) {
    var i = Math.floor(e / this._chunkSize),
        n = e % this._chunkSize,
        r = this._storage[t][i];
    return r[n];
  }, ux.getValues = function (t, e) {
    var i = [];
    _(t) || (e = t, t = this.dimensions);

    for (var n = 0, r = t.length; r > n; n++) {
      i.push(this.get(t[n], e));
    }

    return i;
  }, ux.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, i = 0, n = e.length; n > i; i++) {
      if (isNaN(this.get(e[i], t))) return !1;
    }

    return !0;
  }, ux.getDataExtent = function (t) {
    t = this.getDimension(t);
    var e = this._storage[t],
        i = ku();
    if (!e) return i;
    var n,
        r = this.count(),
        a = !this._indices;
    if (a) return this._rawExtent[t].slice();
    if (n = this._extent[t]) return n.slice();
    n = i;

    for (var o = n[0], s = n[1], l = 0; r > l; l++) {
      var h = this._getFast(t, this.getRawIndex(l));

      o > h && (o = h), h > s && (s = h);
    }

    return n = [o, s], this._extent[t] = n, n;
  }, ux.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, ux.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, ux.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, ux.setCalculationInfo = function (t, e) {
    J_(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, ux.getSum = function (t) {
    var e = this._storage[t],
        i = 0;
    if (e) for (var n = 0, r = this.count(); r > n; n++) {
      var a = this.get(t, n);
      isNaN(a) || (i += a);
    }
    return i;
  }, ux.getMedian = function (t) {
    var e = [];
    this.each(t, function (t) {
      isNaN(t) || e.push(t);
    });
    var i = [].concat(e).sort(function (t, e) {
      return t - e;
    }),
        n = this.count();
    return 0 === n ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
  }, ux.rawIndexOf = function (t, e) {
    var i = t && this._invertedIndicesMap[t];
    if (bd && !i) throw new Error("Do not supported yet");
    var n = i[e];
    return null == n || isNaN(n) ? ex : n;
  }, ux.indexOfName = function (t) {
    for (var e = 0, i = this.count(); i > e; e++) {
      if (this.getName(e) === t) return e;
    }

    return -1;
  }, ux.indexOfRawIndex = function (t) {
    if (t >= this._rawCount || 0 > t) return -1;
    if (!this._indices) return t;
    var e = this._indices,
        i = e[t];
    if (null != i && i < this._count && i === t) return t;

    for (var n = 0, r = this._count - 1; r >= n;) {
      var a = (n + r) / 2 | 0;
      if (e[a] < t) n = a + 1;else {
        if (!(e[a] > t)) return a;
        r = a - 1;
      }
    }

    return -1;
  }, ux.indicesOfNearest = function (t, e, i) {
    var n = this._storage,
        r = n[t],
        a = [];
    if (!r) return a;
    null == i && (i = 1 / 0);

    for (var o = 1 / 0, s = -1, l = 0, h = 0, u = this.count(); u > h; h++) {
      var c = e - this.get(t, h),
          d = Math.abs(c);
      i >= d && ((o > d || d === o && c >= 0 && 0 > s) && (o = d, s = c, l = 0), c === s && (a[l++] = h));
    }

    return a.length = l, a;
  }, ux.getRawIndex = wu, ux.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));

    for (var e = [], i = 0; i < this.dimensions.length; i++) {
      var n = this.dimensions[i];
      e.push(this.get(n, t));
    }

    return e;
  }, ux.getName = function (t) {
    var e = this.getRawIndex(t);
    return this._nameList[e] || xu(this, this._nameDimIdx, e) || "";
  }, ux.getId = function (t) {
    return Mu(this, this.getRawIndex(t));
  }, ux.each = function (t, e, i, n) {
    if (this._count) {
      "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Su(t), this.getDimension, this), bd && Tu(this, t);

      for (var r = t.length, a = 0; a < this.count(); a++) {
        switch (r) {
          case 0:
            e.call(i, a);
            break;

          case 1:
            e.call(i, this.get(t[0], a), a);
            break;

          case 2:
            e.call(i, this.get(t[0], a), this.get(t[1], a), a);
            break;

          default:
            for (var o = 0, s = []; r > o; o++) {
              s[o] = this.get(t[o], a);
            }

            s[o] = a, e.apply(i, s);
        }
      }
    }
  }, ux.filterSelf = function (t, e, i, n) {
    if (this._count) {
      "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Su(t), this.getDimension, this), bd && Tu(this, t);

      for (var r = this.count(), a = gu(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
        var d,
            f = this.getRawIndex(c);
        if (0 === l) d = e.call(i, c);else if (1 === l) {
          var g = this._getFast(u, f);

          d = e.call(i, g, c);
        } else {
          for (var v = 0; l > v; v++) {
            s[v] = this._getFast(u, f);
          }

          s[v] = c, d = e.apply(i, s);
        }
        d && (o[h++] = f);
      }

      return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? bu : wu, this;
    }
  }, ux.selectRange = function (t) {
    if (this._count) {
      var e = [];

      for (var i in t) {
        t.hasOwnProperty(i) && e.push(i);
      }

      bd && Tu(this, e);
      var n = e.length;

      if (n) {
        var r = this.count(),
            a = gu(this),
            o = new a(r),
            s = 0,
            l = e[0],
            h = t[l][0],
            u = t[l][1],
            c = !1;

        if (!this._indices) {
          var d = 0;

          if (1 === n) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];
                (y >= h && u >= y || isNaN(y)) && (o[s++] = d), d++;
              }
            }

            c = !0;
          } else if (2 === n) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                    M = b[m];
                (y >= h && u >= y || isNaN(y)) && (M >= x && w >= M || isNaN(M)) && (o[s++] = d), d++;
              }
            }

            c = !0;
          }
        }

        if (!c) if (1 === n) for (var m = 0; r > m; m++) {
          var S = this.getRawIndex(m),
              y = this._getFast(l, S);

          (y >= h && u >= y || isNaN(y)) && (o[s++] = S);
        } else for (var m = 0; r > m; m++) {
          for (var T = !0, S = this.getRawIndex(m), p = 0; n > p; p++) {
            var C = e[p],
                y = this._getFast(i, S);

            (y < t[C][0] || y > t[C][1]) && (T = !1);
          }

          T && (o[s++] = this.getRawIndex(m));
        }
        return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? bu : wu, this;
      }
    }
  }, ux.mapArray = function (t, e, i, n) {
    "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
    var r = [];
    return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, i), r;
  }, ux.map = function (t, e, i, n) {
    i = i || n || this, t = p(Su(t), this.getDimension, this), bd && Tu(this, t);
    var r = Cu(this, t);
    r._indices = this._indices, r.getRawIndex = r._indices ? bu : wu;

    for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {
      for (var f = 0; l > f; f++) {
        u[f] = this.get(t[f], d);
      }

      u[l] = d;
      var g = e && e.apply(i, u);

      if (null != g) {
        "object" != _typeof(g) && (o[0] = g, g = o);

        for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              M = a[x];
          M && (M[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }

    return r;
  }, ux.downSample = function (t, e, i, n) {
    for (var r = Cu(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (gu(this))(h), f = 0, p = 0; h > p; p += s) {
      s > h - p && (s = h - p, o.length = s);

      for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
            m = Math.floor(v / u),
            y = v % u;
        o[g] = l[m][y];
      }

      var _ = i(o),
          x = this.getRawIndex(Math.min(p + n(o, _) || 0, h - 1)),
          w = Math.floor(x / u),
          b = x % u;

      l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
    }

    return r._count = f, r._indices = d, r.getRawIndex = bu, r;
  }, ux.getItemModel = function (t) {
    var e = this.hostModel;
    return new Ga(this.getRawDataItem(t), e, e && e.ecModel);
  }, ux.diff = function (t) {
    var e = this;
    return new lu(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return Mu(t, e);
    }, function (t) {
      return Mu(e, t);
    });
  }, ux.getVisual = function (t) {
    var e = this._visual;
    return e && e[t];
  }, ux.setVisual = function (t, e) {
    if (J_(t)) for (var i in t) {
      t.hasOwnProperty(i) && this.setVisual(i, t[i]);
    } else this._visual = this._visual || {}, this._visual[t] = e;
  }, ux.setLayout = function (t, e) {
    if (J_(t)) for (var i in t) {
      t.hasOwnProperty(i) && this.setLayout(i, t[i]);
    } else this._layout[t] = e;
  }, ux.getLayout = function (t) {
    return this._layout[t];
  }, ux.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, ux.setItemLayout = function (t, e, i) {
    this._itemLayouts[t] = i ? o(this._itemLayouts[t] || {}, e) : e;
  }, ux.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, ux.getItemVisual = function (t, e, i) {
    var n = this._itemVisuals[t],
        r = n && n[e];
    return null != r || i ? r : this.getVisual(e);
  }, ux.setItemVisual = function (t, e, i) {
    var n = this._itemVisuals[t] || {},
        r = this.hasItemVisual;
    if (this._itemVisuals[t] = n, J_(e)) for (var a in e) {
      e.hasOwnProperty(a) && (n[a] = e[a], r[a] = !0);
    } else n[e] = i, r[e] = !0;
  }, ux.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };

  var cx = function cx(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };

  ux.setItemGraphicEl = function (t, e) {
    var i = this.hostModel;
    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(cx, e)), this._graphicEls[t] = e;
  }, ux.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, ux.eachItemGraphicEl = function (t, e) {
    f(this._graphicEls, function (i, n) {
      i && t && t.call(e, i, n);
    });
  }, ux.cloneShallow = function (t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);
      t = new hx(e, this.hostModel);
    }

    if (t._storage = this._storage, mu(t, this), this._indices) {
      var i = this._indices.constructor;
      t._indices = new i(this._indices);
    } else t._indices = null;

    return t.getRawIndex = t._indices ? bu : wu, t;
  }, ux.wrapMethod = function (t, e) {
    var i = this[t];
    "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = i.apply(this, arguments);
      return e.apply(this, [t].concat(A(arguments)));
    });
  }, ux.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], ux.CHANGABLE_METHODS = ["filterSelf", "selectRange"];

  var dx = function dx(t, e) {
    return e = e || {}, Du(e.coordDimensions || [], t, {
      dimsDef: e.dimensionsDefine || t.dimensionsDefine,
      encodeDef: e.encodeDefine || t.encodeDefine,
      dimCount: e.dimensionsCount,
      encodeDefaulter: e.encodeDefaulter,
      generateCoord: e.generateCoord,
      generateCoordCount: e.generateCoordCount
    });
  },
      fx = {
    cartesian2d: function cartesian2d(t, e, i, n) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];

      if (bd) {
        if (!r) throw new Error('xAxis "' + I(t.get("xAxisIndex"), t.get("xAxisId"), 0) + '" not found');
        if (!a) throw new Error('yAxis "' + I(t.get("xAxisIndex"), t.get("yAxisId"), 0) + '" not found');
      }

      e.coordSysDims = ["x", "y"], i.set("x", r), i.set("y", a), Bu(r) && (n.set("x", r), e.firstCategoryDimIndex = 0), Bu(a) && (n.set("y", a), null == e.firstCategoryDimIndex & (e.firstCategoryDimIndex = 1));
    },
    singleAxis: function singleAxis(t, e, i, n) {
      var r = t.getReferringComponents("singleAxis")[0];
      if (bd && !r) throw new Error("singleAxis should be specified.");
      e.coordSysDims = ["single"], i.set("single", r), Bu(r) && (n.set("single", r), e.firstCategoryDimIndex = 0);
    },
    polar: function polar(t, e, i, n) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");

      if (bd) {
        if (!o) throw new Error("angleAxis option not found");
        if (!a) throw new Error("radiusAxis option not found");
      }

      e.coordSysDims = ["radius", "angle"], i.set("radius", a), i.set("angle", o), Bu(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), Bu(o) && (n.set("angle", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
    },
    geo: function geo(t, e) {
      e.coordSysDims = ["lng", "lat"];
    },
    parallel: function parallel(t, e, i, n) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();
      f(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];
        i.set(l, s), Bu(s) && null == e.firstCategoryDimIndex && (n.set(l, s), e.firstCategoryDimIndex = a);
      });
    }
  },
      px = Rm.extend({
    type: "series.__base_bar__",
    getInitialData: function getInitialData() {
      return Eu(this.getSource(), this, {
        useEncodeDefaulter: !0
      });
    },
    getMarkerPosition: function getMarkerPosition(t) {
      var e = this.coordinateSystem;

      if (e) {
        var i = e.dataToPoint(e.clampData(t)),
            n = this.getData(),
            r = n.getLayout("offset"),
            a = n.getLayout("size"),
            o = e.getBaseAxis().isHorizontal() ? 0 : 1;
        return i[o] += r + a / 2, i;
      }

      return [0 / 0, 0 / 0];
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      barMinHeight: 0,
      barMinAngle: 0,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod",
      itemStyle: {},
      emphasis: {}
    }
  });

  px.extend({
    type: "series.bar",
    dependencies: ["grid", "polar"],
    brushSelector: "rect",
    getProgressive: function getProgressive() {
      return this.get("large") ? this.get("progressive") : !1;
    },
    getProgressiveThreshold: function getProgressiveThreshold() {
      var t = this.get("progressiveThreshold"),
          e = this.get("largeThreshold");
      return e > t && (t = e), t;
    },
    defaultOption: {
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      }
    }
  });
  var gx = Np([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      vx = {
    getBarItemStyle: function getBarItemStyle(t) {
      var e = gx(this, t);

      if (this.getBorderLineDash) {
        var i = this.getBorderLineDash();
        i && (e.lineDash = i);
      }

      return e;
    }
  },
      mx = Yr({
    type: "sausage",
    shape: {
      cx: 0,
      cy: 0,
      r0: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = .5 * (a - r),
          s = r + o,
          l = e.startAngle,
          h = e.endAngle,
          u = e.clockwise,
          c = Math.cos(l),
          d = Math.sin(l),
          f = Math.cos(h),
          p = Math.sin(h),
          g = u ? h - l < 2 * Math.PI : l - h < 2 * Math.PI;
      g && (t.moveTo(c * r + i, d * r + n), t.arc(c * s + i, d * s + n, o, -Math.PI + l, l, !u)), t.arc(i, n, a, l, h, !u), t.moveTo(f * a + i, p * a + n), t.arc(f * s + i, p * s + n, o, h - 2 * Math.PI, h - Math.PI, !u), 0 !== r && (t.arc(i, n, r, h, l, u), t.moveTo(c * r + i, p * r + n)), t.closePath();
    }
  }),
      yx = ["itemStyle", "barBorderWidth"],
      _x = [0, 0];
  o(Ga.prototype, vx), Kl({
    type: "bar",
    render: function render(t, e, i) {
      this._updateDrawMode(t);

      var n = t.get("coordinateSystem");
      return "cartesian2d" === n || "polar" === n ? this._isLargeDraw ? this._renderLarge(t, e, i) : this._renderNormal(t, e, i) : bd && console.warn("Only cartesian2d and polar supported for bar."), this.group;
    },
    incrementalPrepareRender: function incrementalPrepareRender(t) {
      this._clear(), this._updateDrawMode(t);
    },
    incrementalRender: function incrementalRender(t, e) {
      this._incrementalRenderLarge(t, e);
    },
    _updateDrawMode: function _updateDrawMode(t) {
      var e = t.pipelineContext.large;
      (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear());
    },
    _renderNormal: function _renderNormal(t) {
      var e,
          i = this.group,
          n = t.getData(),
          r = this._data,
          a = t.coordinateSystem,
          o = a.getBaseAxis();
      "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
      var s = t.isAnimationEnabled() ? t : null,
          l = t.get("clip", !0),
          h = Xu(a, n);
      i.removeClipPath();

      var u = t.get("roundCap", !0),
          c = t.get("showBackground", !0),
          d = t.getModel("backgroundStyle"),
          f = d.get("barBorderRadius") || 0,
          p = [],
          g = this._backgroundEls || [],
          v = function v(t) {
        var i = Tx[a.type](n, t),
            r = ec(a, e, i);
        return r.useStyle(d.getBarItemStyle()), "cartesian2d" === a.type && r.setShape("r", f), p[t] = r, r;
      };

      n.diff(r).add(function (r) {
        var o = n.getItemModel(r),
            d = Tx[a.type](n, r, o);

        if (c && v(r), n.hasValue(r)) {
          if (l) {
            var f = Mx[a.type](h, d);
            if (f) return void i.remove(p);
          }

          var p = Sx[a.type](r, d, e, s, !1, u);
          n.setItemGraphicEl(r, p), i.add(p), ju(p, n, r, o, d, t, e, "polar" === a.type);
        }
      }).update(function (o, m) {
        var y = n.getItemModel(o),
            _ = Tx[a.type](n, o, y);

        if (c) {
          var x;
          0 === g.length ? x = v(m) : (x = g[m], x.useStyle(d.getBarItemStyle()), "cartesian2d" === a.type && x.setShape("r", f), p[o] = x);
          var w = Tx[a.type](n, o),
              b = tc(e, w, a);
          Aa(x, {
            shape: b
          }, s, o);
        }

        var M = r.getItemGraphicEl(m);
        if (!n.hasValue(o)) return void i.remove(M);

        if (l) {
          var S = Mx[a.type](h, _);
          if (S) return void i.remove(M);
        }

        M ? Aa(M, {
          shape: _
        }, s, o) : M = Sx[a.type](o, _, e, s, !0, u), n.setItemGraphicEl(o, M), i.add(M), ju(M, n, o, y, _, t, e, "polar" === a.type);
      }).remove(function (t) {
        var e = r.getItemGraphicEl(t);
        "cartesian2d" === a.type ? e && Yu(t, s, e) : e && Uu(t, s, e);
      }).execute();
      var m = this._backgroundGroup || (this._backgroundGroup = new Of());
      m.removeAll();

      for (var y = 0; y < p.length; ++y) {
        m.add(p[y]);
      }

      i.add(m), this._backgroundEls = p, this._data = n;
    },
    _renderLarge: function _renderLarge(t) {
      this._clear(), $u(t, this.group);
      var e = t.get("clip", !0) ? Gu(t.coordinateSystem, !1, t) : null;
      e ? this.group.setClipPath(e) : this.group.removeClipPath();
    },
    _incrementalRenderLarge: function _incrementalRenderLarge(t, e) {
      this._removeBackground(), $u(e, this.group, !0);
    },
    dispose: F,
    remove: function remove(t) {
      this._clear(t);
    },
    _clear: function _clear(t) {
      var e = this.group,
          i = this._data;
      t && t.get("animation") && i && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], i.eachItemGraphicEl(function (e) {
        "sector" === e.type ? Uu(e.dataIndex, t, e) : Yu(e.dataIndex, t, e);
      })) : e.removeAll(), this._data = null;
    },
    _removeBackground: function _removeBackground() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }
  });
  var xx = Math.max,
      bx = Math.min,
      Mx = {
    cartesian2d: function cartesian2d(t, e) {
      var i = e.width < 0 ? -1 : 1,
          n = e.height < 0 ? -1 : 1;
      0 > i && (e.x += e.width, e.width = -e.width), 0 > n && (e.y += e.height, e.height = -e.height);
      var r = xx(e.x, t.x),
          a = bx(e.x + e.width, t.x + t.width),
          o = xx(e.y, t.y),
          s = bx(e.y + e.height, t.y + t.height);
      e.x = r, e.y = o, e.width = a - r, e.height = s - o;
      var l = e.width < 0 || e.height < 0;
      return 0 > i && (e.x += e.width, e.width = -e.width), 0 > n && (e.y += e.height, e.height = -e.height), l;
    },
    polar: function polar(t, e) {
      var i = e.r0 <= e.r ? 1 : -1;

      if (0 > i) {
        var n = e.r;
        e.r = e.r0, e.r0 = n;
      }

      var n = bx(e.r, t.r),
          r = xx(e.r0, t.r0);
      e.r = n, e.r0 = r;
      var a = 0 > n - r;

      if (0 > i) {
        var n = e.r;
        e.r = e.r0, e.r0 = n;
      }

      return a;
    }
  },
      Sx = {
    cartesian2d: function cartesian2d(t, e, i, n, r) {
      var a = new rv({
        shape: o({}, e),
        z2: 1
      });

      if (a.name = "item", n) {
        var s = a.shape,
            l = i ? "height" : "width",
            h = {};
        s[l] = 0, h[l] = e[l], Dv[r ? "updateProps" : "initProps"](a, {
          shape: h
        }, n, t);
      }

      return a;
    },
    polar: function polar(t, e, i, n, r, a) {
      var o = e.startAngle < e.endAngle,
          l = !i && a ? mx : $g,
          h = new l({
        shape: s({
          clockwise: o
        }, e),
        z2: 1
      });

      if (h.name = "item", n) {
        var u = h.shape,
            c = i ? "r" : "endAngle",
            d = {};
        u[c] = i ? 0 : e.startAngle, d[c] = e[c], Dv[r ? "updateProps" : "initProps"](h, {
          shape: d
        }, n, t);
      }

      return h;
    }
  },
      Tx = {
    cartesian2d: function cartesian2d(t, e, i) {
      var n = t.getItemLayout(e),
          r = i ? Zu(i, n) : 0,
          a = n.width > 0 ? 1 : -1,
          o = n.height > 0 ? 1 : -1;
      return {
        x: n.x + a * r / 2,
        y: n.y + o * r / 2,
        width: n.width - a * r,
        height: n.height - o * r
      };
    },
    polar: function polar(t, e) {
      var i = t.getItemLayout(e);
      return {
        cx: i.cx,
        cy: i.cy,
        r0: i.r0,
        r: i.r,
        startAngle: i.startAngle,
        endAngle: i.endAngle
      };
    }
  },
      Cx = Pr.extend({
    type: "largeBar",
    shape: {
      points: []
    },
    buildPath: function buildPath(t, e) {
      for (var i = e.points, n = this.__startPoint, r = this.__baseDimIdx, a = 0; a < i.length; a += 2) {
        n[r] = i[a + r], t.moveTo(n[0], n[1]), t.lineTo(i[a], i[a + 1]);
      }
    }
  }),
      Ix = Bs(function (t) {
    var e = this,
        i = Ku(e, t.offsetX, t.offsetY);
    e.dataIndex = i >= 0 ? i : null;
  }, 30, !1),
      kx = Yr({
    type: "triangle",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = e.width / 2,
          a = e.height / 2;
      t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath();
    }
  }),
      Dx = Yr({
    type: "diamond",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = e.width / 2,
          a = e.height / 2;
      t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath();
    }
  }),
      Ax = Yr({
    type: "pin",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.x,
          n = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = n - a + o + s,
          h = Math.asin(s / o),
          u = Math.cos(h) * o,
          c = Math.sin(h),
          d = Math.cos(h),
          f = .6 * o,
          p = .7 * o;
      t.moveTo(i - u, l + s), t.arc(i, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath();
    }
  }),
      Px = Yr({
    type: "arrow",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.height,
          n = e.width,
          r = e.x,
          a = e.y,
          o = n / 3 * 2;
      t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath();
    }
  }),
      Lx = {
    line: ov,
    rect: rv,
    roundRect: rv,
    square: rv,
    circle: qg,
    diamond: Dx,
    pin: Ax,
    arrow: Px,
    triangle: kx
  },
      Ox = {
    line: function line(t, e, i, n, r) {
      r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2;
    },
    rect: function rect(t, e, i, n, r) {
      r.x = t, r.y = e, r.width = i, r.height = n;
    },
    roundRect: function roundRect(t, e, i, n, r) {
      r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4;
    },
    square: function square(t, e, i, n, r) {
      var a = Math.min(i, n);
      r.x = t, r.y = e, r.width = a, r.height = a;
    },
    circle: function circle(t, e, i, n, r) {
      r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2;
    },
    diamond: function diamond(t, e, i, n, r) {
      r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
    },
    pin: function pin(t, e, i, n, r) {
      r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
    },
    arrow: function arrow(t, e, i, n, r) {
      r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
    },
    triangle: function triangle(t, e, i, n, r) {
      r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
    }
  },
      Bx = {};
  f(Lx, function (t, e) {
    Bx[e] = new t();
  });

  var Ex = Yr({
    type: "symbol",
    shape: {
      symbolType: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    calculateTextPosition: function calculateTextPosition(t, e, i) {
      var n = Pi(t, e, i),
          r = this.shape;
      return r && "pin" === r.symbolType && "inside" === e.textPosition && (n.y = i.y + .4 * i.height), n;
    },
    buildPath: function buildPath(t, e, i) {
      var n = e.symbolType;

      if ("none" !== n) {
        var r = Bx[n];
        r || (n = "rect", r = Bx[n]), Ox[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i);
      }
    }
  }),
      zx = Math.PI,
      Rx = function Rx(t, e) {
    this.opt = e, this.axisModel = t, s(e, {
      labelOffset: 0,
      nameDirection: 1,
      tickDirection: 1,
      labelDirection: 1,
      silent: !0
    }), this.group = new Of();
    var i = new Of({
      position: e.position.slice(),
      rotation: e.rotation
    });
    i.updateTransform(), this._transform = i.transform, this._dumbGroup = i;
  };

  Rx.prototype = {
    constructor: Rx,
    hasBuilder: function hasBuilder(t) {
      return !!Fx[t];
    },
    add: function add(t) {
      Fx[t].call(this);
    },
    getGroup: function getGroup() {
      return this.group;
    }
  };

  var Fx = {
    axisLine: function axisLine() {
      var t = this.opt,
          e = this.axisModel;

      if (e.get("axisLine.show")) {
        var i = this.axisModel.axis.getExtent(),
            n = this._transform,
            r = [i[0], 0],
            a = [i[1], 0];
        n && (Z(r, r, n), Z(a, a, n));
        var s = o({
          lineCap: "round"
        }, e.getModel("axisLine.lineStyle").getLineStyle());
        this.group.add(new ov({
          anid: "line",
          subPixelOptimize: !0,
          shape: {
            x1: r[0],
            y1: r[1],
            x2: a[0],
            y2: a[1]
          },
          style: s,
          strokeContainThreshold: t.strokeContainThreshold || 5,
          silent: !0,
          z2: 1
        }));
        var l = e.get("axisLine.symbol"),
            h = e.get("axisLine.symbolSize"),
            u = e.get("axisLine.symbolOffset") || 0;

        if ("number" == typeof u && (u = [u, u]), null != l) {
          "string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);
          var c = h[0],
              d = h[1];
          f([{
            rotate: t.rotation + Math.PI / 2,
            offset: u[0],
            r: 0
          }, {
            rotate: t.rotation - Math.PI / 2,
            offset: u[1],
            r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
          }], function (e, i) {
            if ("none" !== l[i] && null != l[i]) {
              var n = nc(l[i], -c / 2, -d / 2, c, d, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
              n.attr({
                rotation: e.rotate,
                position: o,
                silent: !0,
                z2: 11
              }), this.group.add(n);
            }
          }, this);
        }
      }
    },
    axisTickLabel: function axisTickLabel() {
      var t = this.axisModel,
          e = this.opt,
          i = uc(this, t, e),
          n = dc(this, t, e);
      ac(t, n, i), cc(this, t, e);
    },
    axisName: function axisName() {
      var t = this.opt,
          e = this.axisModel,
          i = I(t.axisName, e.get("name"));

      if (i) {
        var n,
            r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            h = this.axisModel.axis.getExtent(),
            u = h[0] > h[1] ? -1 : 1,
            c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, lc(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");
        null != d && (d = d * zx / 180);
        var f;
        lc(r) ? n = Hx(t.rotation, null != d ? d : t.rotation, a) : (n = rc(t, r, d || 0, h), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(n.rotation)), !isFinite(f) && (f = null)));

        var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = I(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? Xv(i, m, p, v, {
          minChar: 2,
          placeholder: g.placeholder
        }) : i,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = {
          componentType: x,
          name: i,
          $vars: ["name"]
        };

        w[x + "Index"] = e.componentIndex;
        var b = new Ug({
          anid: "name",
          __fullText: i,
          __truncatedText: y,
          position: c,
          rotation: n.rotation,
          silent: Wx(e),
          z2: 1,
          tooltip: _ && _.show ? o({
            content: i,
            formatter: function formatter() {
              return i;
            },
            formatterParams: w
          }, _) : null
        });
        xa(b.style, s, {
          text: y,
          textFont: p,
          textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
          textAlign: s.get("align") || n.textAlign,
          textVerticalAlign: s.get("verticalAlign") || n.textVerticalAlign
        }), e.get("triggerEvent") && (b.eventData = Nx(e), b.eventData.targetType = "axisName", b.eventData.name = i), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    }
  },
      Nx = Rx.makeAxisEventDataBase = function (t) {
    var e = {
      componentType: t.mainType,
      componentIndex: t.componentIndex
    };
    return e[t.mainType + "Index"] = t.componentIndex, e;
  },
      Hx = Rx.innerTextLayout = function (t, e, i) {
    var n,
        r,
        a = eo(e - t);
    return io(a) ? (r = i > 0 ? "top" : "bottom", n = "center") : io(a - zx) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = a > 0 && zx > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
      rotation: a,
      textAlign: n,
      textVerticalAlign: r
    };
  },
      Wx = Rx.isLabelSilent = function (t) {
    var e = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  },
      Vx = f,
      Gx = y,
      Xx = Zl({
    type: "axis",
    _axisPointer: null,
    axisPointerClass: null,
    render: function render(t, e, i, n) {
      this.axisPointerClass && _c(t), Xx.superApply(this, "render", arguments), Sc(this, t, e, i, n, !0);
    },
    updateAxisPointer: function updateAxisPointer(t, e, i, n) {
      Sc(this, t, e, i, n, !1);
    },
    remove: function remove(t, e) {
      var i = this._axisPointer;
      i && i.remove(e), Xx.superApply(this, "remove", arguments);
    },
    dispose: function dispose(t, e) {
      Tc(this, e), Xx.superApply(this, "dispose", arguments);
    }
  }),
      Yx = [];

  Xx.registerAxisPointerClass = function (t, e) {
    if (bd && Yx[t]) throw new Error("axisPointer " + t + " exists");
    Yx[t] = e;
  }, Xx.getAxisPointerClass = function (t) {
    return t && Yx[t];
  };
  var Ux = ["axisLine", "axisTickLabel", "axisName"],
      qx = ["splitArea", "splitLine", "minorSplitLine"],
      jx = Xx.extend({
    type: "cartesianAxis",
    axisPointerClass: "CartesianAxisPointer",
    render: function render(t, e, i, n) {
      this.group.removeAll();
      var r = this._axisGroup;

      if (this._axisGroup = new Of(), this.group.add(this._axisGroup), t.get("show")) {
        var a = t.getCoordSysModel(),
            o = Cc(a, t),
            s = new Rx(t, o);
        f(Ux, s.add, s), this._axisGroup.add(s.getGroup()), f(qx, function (e) {
          t.get(e + ".show") && this["_" + e](t, a);
        }, this), Ea(r, this._axisGroup, t), jx.superCall(this, "render", t, e, i, n);
      }
    },
    remove: function remove() {
      kc(this);
    },
    _splitLine: function _splitLine(t, e) {
      var i = t.axis;

      if (!i.scale.isBlank()) {
        var n = t.getModel("splitLine"),
            r = n.getModel("lineStyle"),
            a = r.get("color");
        a = _(a) ? a : [a];

        for (var o = e.coordinateSystem.getRect(), l = i.isHorizontal(), h = 0, u = i.getTicksCoords({
          tickModel: n
        }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
          var g = i.toGlobalCoord(u[p].coord);
          l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
          var v = h++ % a.length,
              m = u[p].tickValue;

          this._axisGroup.add(new ov({
            anid: null != m ? "line_" + u[p].tickValue : null,
            subPixelOptimize: !0,
            shape: {
              x1: c[0],
              y1: c[1],
              x2: d[0],
              y2: d[1]
            },
            style: s({
              stroke: a[v]
            }, f),
            silent: !0
          }));
        }
      }
    },
    _minorSplitLine: function _minorSplitLine(t, e) {
      var i = t.axis,
          n = t.getModel("minorSplitLine"),
          r = n.getModel("lineStyle"),
          a = e.coordinateSystem.getRect(),
          o = i.isHorizontal(),
          s = i.getMinorTicksCoords();
      if (s.length) for (var l = [], h = [], u = r.getLineStyle(), c = 0; c < s.length; c++) {
        for (var d = 0; d < s[c].length; d++) {
          var f = i.toGlobalCoord(s[c][d].coord);
          o ? (l[0] = f, l[1] = a.y, h[0] = f, h[1] = a.y + a.height) : (l[0] = a.x, l[1] = f, h[0] = a.x + a.width, h[1] = f), this._axisGroup.add(new ov({
            anid: "minor_line_" + s[c][d].tickValue,
            subPixelOptimize: !0,
            shape: {
              x1: l[0],
              y1: l[1],
              x2: h[0],
              y2: h[1]
            },
            style: u,
            silent: !0
          }));
        }
      }
    },
    _splitArea: function _splitArea(t, e) {
      Ic(this, this._axisGroup, t, e);
    }
  });
  jx.extend({
    type: "xAxis"
  }), jx.extend({
    type: "yAxis"
  }), Zl({
    type: "grid",
    render: function render(t) {
      this.group.removeAll(), t.get("show") && this.group.add(new rv({
        shape: t.coordinateSystem.getRect(),
        style: s({
          fill: t.get("backgroundColor")
        }, t.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }
  }), Fl(function (t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  }), Xl(Wy.VISUAL.LAYOUT, y(ch, "bar")), Xl(Wy.VISUAL.PROGRESSIVE_LAYOUT, d_), Yl({
    seriesType: "bar",
    reset: function reset(t) {
      t.getData().setVisual("legendSymbol", "roundRect");
    }
  });

  var Zx = function Zx(t, e) {
    var i,
        n = [],
        r = t.seriesIndex;
    if (null == r || !(i = e.getSeriesByIndex(r))) return {
      point: []
    };
    var a = i.getData(),
        o = Nn(a, t);
    if (null == o || 0 > o || _(o)) return {
      point: []
    };
    var s = a.getItemGraphicEl(o),
        l = i.coordinateSystem;
    if (i.getTooltipPosition) n = i.getTooltipPosition(o) || [];else if (l && l.dataToPoint) n = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
      return a.mapDimension(t);
    }), o, !0)) || [];else if (s) {
      var h = s.getBoundingRect().clone();
      h.applyTransform(s.transform), n = [h.x + h.width / 2, h.y + h.height / 2];
    }
    return {
      point: n,
      el: s
    };
  },
      $x = f,
      Kx = y,
      Qx = Hn(),
      Jx = function Jx(t, e, i) {
    var n = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || m(i.dispatchAction, i),
        s = e.getComponent("axisPointer").coordSysAxesInfo;

    if (s) {
      Fc(r) && (r = Zx({
        seriesIndex: a.seriesIndex,
        dataIndex: a.dataIndex
      }, e).point);
      var l = Fc(r),
          h = a.axesInfo,
          u = s.axesInfo,
          c = "leave" === n || Fc(r),
          d = {},
          f = {},
          p = {
        list: [],
        map: {}
      },
          g = {
        showPointer: Kx(Pc, f),
        showTooltip: Kx(Lc, p)
      };
      $x(s.coordSysMap, function (t, e) {
        var i = l || t.containPoint(r);
        $x(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
              n = zc(h, t);

          if (!c && i && (!h || n)) {
            var a = n && n.value;
            null != a || l || (a = e.pointToData(r)), null != a && Dc(t, a, g, !1, d);
          }
        });
      });
      var v = {};
      return $x(u, function (t, e) {
        var i = t.linkGroup;
        i && !f[e] && $x(i.axesInfo, function (e, n) {
          var r = f[n];

          if (e !== t && r) {
            var a = r.value;
            i.mapper && (a = t.axis.scale.parse(i.mapper(a, Rc(e), Rc(t)))), v[t.key] = a;
          }
        });
      }), $x(v, function (t, e) {
        Dc(u[e], t, g, !0, d);
      }), Oc(f, u, d), Bc(p, r, t, o), Ec(u, o, i), d;
    }
  },
      tw = (jl({
    type: "axisPointer",
    coordSysAxesInfo: null,
    defaultOption: {
      show: "auto",
      triggerOn: null,
      zlevel: 0,
      z: 50,
      type: "line",
      snap: !1,
      triggerTooltip: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#aaa",
        width: 1,
        type: "solid"
      },
      shadowStyle: {
        color: "rgba(150,150,150,0.3)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        shadowBlur: 3,
        shadowColor: "#aaa"
      },
      handle: {
        show: !1,
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40
      }
    }
  }), Hn()),
      ew = f,
      iw = Zl({
    type: "axisPointer",
    render: function render(t, e, i) {
      var n = e.getComponent("tooltip"),
          r = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
      Nc("axisPointer", i, function (t, e, i) {
        "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && i({
          type: "updateAxisPointer",
          currTrigger: t,
          x: e && e.offsetX,
          y: e && e.offsetY
        });
      });
    },
    remove: function remove(t, e) {
      Yc(e.getZr(), "axisPointer"), iw.superApply(this._model, "remove", arguments);
    },
    dispose: function dispose(t, e) {
      Yc("axisPointer", e), iw.superApply(this._model, "dispose", arguments);
    }
  }),
      nw = Hn(),
      rw = n,
      aw = m;

  Uc.prototype = {
    _group: null,
    _lastGraphicKey: null,
    _handle: null,
    _dragging: !1,
    _lastValue: null,
    _lastStatus: null,
    _payloadInfo: null,
    animationThreshold: 15,
    render: function render(t, e, i, n) {
      var r = e.get("value"),
          a = e.get("status");

      if (this._axisModel = t, this._axisPointerModel = e, this._api = i, n || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;
        var o = this._group,
            s = this._handle;
        if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
        o && o.show(), s && s.show();
        var l = {};
        this.makeElOption(l, r, t, e, i);
        var h = l.graphicKey;
        h !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = h;
        var u = this._moveAnimation = this.determineAnimation(t, e);

        if (o) {
          var c = y(qc, e, u);
          this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
        } else o = this._group = new Of(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), i.getZr().add(o);

        Kc(o, e, !0), this._renderHandle(r);
      }
    },
    remove: function remove(t) {
      this.clear(t);
    },
    dispose: function dispose(t) {
      this.clear(t);
    },
    determineAnimation: function determineAnimation(t, e) {
      var i = e.get("animation"),
          n = t.axis,
          r = "category" === n.type,
          a = e.get("snap");
      if (!a && !r) return !1;

      if ("auto" === i || null == i) {
        var o = this.animationThreshold;
        if (r && n.getBandWidth() > o) return !0;

        if (a) {
          var s = xc(t).seriesDataCount,
              l = n.getExtent();
          return Math.abs(l[0] - l[1]) / s > o;
        }

        return !1;
      }

      return i === !0;
    },
    makeElOption: function makeElOption() {},
    createPointerEl: function createPointerEl(t, e) {
      var i = e.pointer;

      if (i) {
        var n = nw(t).pointerEl = new Dv[i.type](rw(e.pointer));
        t.add(n);
      }
    },
    createLabelEl: function createLabelEl(t, e, i, n) {
      if (e.label) {
        var r = nw(t).labelEl = new rv(rw(e.label));
        t.add(r), Zc(r, n);
      }
    },
    updatePointerEl: function updatePointerEl(t, e, i) {
      var n = nw(t).pointerEl;
      n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
        shape: e.pointer.shape
      }));
    },
    updateLabelEl: function updateLabelEl(t, e, i, n) {
      var r = nw(t).labelEl;
      r && (r.setStyle(e.label.style), i(r, {
        shape: e.label.shape,
        position: e.label.position
      }), Zc(r, n));
    },
    _renderHandle: function _renderHandle(t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
            i = this._api.getZr(),
            n = this._handle,
            r = e.getModel("handle"),
            a = e.get("status");

        if (!r.get("show") || !a || "hide" === a) return n && i.remove(n), void (this._handle = null);
        var o;
        this._handle || (o = !0, n = this._handle = Fa(r.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function onmousemove(t) {
            Kd(t.event);
          },
          onmousedown: aw(this._onHandleDragMove, this, 0, 0),
          drift: aw(this._onHandleDragMove, this),
          ondragend: aw(this._onHandleDragEnd, this)
        }), i.add(n)), Kc(n, e, !1);
        var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
        n.setStyle(r.getItemStyle(null, s));
        var l = r.get("size");
        _(l) || (l = [l, l]), n.attr("scale", [l[0] / 2, l[1] / 2]), Es(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);
      }
    },
    _moveHandleToValue: function _moveHandleToValue(t, e) {
      qc(this._axisPointerModel, !e && this._moveAnimation, this._handle, $c(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    },
    _onHandleDragMove: function _onHandleDragMove(t, e) {
      var i = this._handle;

      if (i) {
        this._dragging = !0;
        var n = this.updateHandleTransform($c(i), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = n, i.stopAnimation(), i.attr($c(n)), nw(i).lastProp = null, this._doDispatchAxisPointer();
      }
    },
    _doDispatchAxisPointer: function _doDispatchAxisPointer() {
      var t = this._handle;

      if (t) {
        var e = this._payloadInfo,
            i = this._axisModel;

        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: i.axis.dim,
            axisIndex: i.componentIndex
          }]
        });
      }
    },
    _onHandleDragEnd: function _onHandleDragEnd() {
      this._dragging = !1;
      var t = this._handle;

      if (t) {
        var e = this._axisPointerModel.get("value");

        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    },
    getHandleTransform: null,
    updateHandleTransform: null,
    clear: function clear(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(),
          i = this._group,
          n = this._handle;
      e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null);
    },
    doClear: function doClear() {},
    buildLabel: function buildLabel(t, e, i) {
      return i = i || 0, {
        x: t[i],
        y: t[1 - i],
        width: e[i],
        height: e[1 - i]
      };
    }
  }, Uc.prototype.constructor = Uc, jn(Uc);
  var ow = Uc.extend({
    makeElOption: function makeElOption(t, e, i, n, r) {
      var a = i.axis,
          o = a.grid,
          s = n.get("type"),
          l = od(o, a).getOtherAxis(a).getGlobalExtent(),
          h = a.toGlobalCoord(a.dataToCoord(e, !0));

      if (s && "none" !== s) {
        var u = Qc(n),
            c = sw[s](a, h, l);
        c.style = u, t.graphicKey = c.type, t.pointer = c;
      }

      var d = Cc(o.model, i);
      nd(e, t, d, i, n, r);
    },
    getHandleTransform: function getHandleTransform(t, e, i) {
      var n = Cc(e.axis.grid.model, e, {
        labelInside: !1
      });
      return n.labelMargin = i.get("handle.margin"), {
        position: id(e.axis, t, n),
        rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
      };
    },
    updateHandleTransform: function updateHandleTransform(t, e, i) {
      var n = i.axis,
          r = n.grid,
          a = n.getGlobalExtent(!0),
          o = od(r, n).getOtherAxis(n).getGlobalExtent(),
          s = "x" === n.dim ? 0 : 1,
          l = t.position;
      l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
      var h = (o[1] + o[0]) / 2,
          u = [h, h];
      u[s] = l[s];
      var c = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        position: l,
        rotation: t.rotation,
        cursorPoint: u,
        tooltipOption: c[s]
      };
    }
  }),
      sw = {
    line: function line(t, e, i) {
      var n = rd([e, i[0]], [e, i[1]], sd(t));
      return {
        type: "Line",
        subPixelOptimize: !0,
        shape: n
      };
    },
    shadow: function shadow(t, e, i) {
      var n = Math.max(1, t.getBandWidth()),
          r = i[1] - i[0];
      return {
        type: "Rect",
        shape: ad([e - n / 2, i[0]], [n, r], sd(t))
      };
    }
  };
  Xx.registerAxisPointerClass("CartesianAxisPointer", ow), Fl(function (t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !_(e) && (t.axisPointer.link = [e]);
    }
  }), Nl(Wy.PROCESSOR.STATISTIC, function (t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = fc(t, e);
  }), Wl({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, Jx), jl({
    type: "tooltip",
    dependencies: ["axisPointer"],
    defaultOption: {
      zlevel: 0,
      z: 60,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      confine: !1,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: .4,
      enterable: !1,
      backgroundColor: "rgba(50,50,50,0.7)",
      borderColor: "#333",
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          textStyle: {}
        }
      },
      textStyle: {
        color: "#fff",
        fontSize: 14
      }
    }
  });
  var lw = f,
      hw = lo,
      uw = ["", "-webkit-", "-moz-", "-o-"],
      cw = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
  dd.prototype = {
    constructor: dd,
    _enterable: !0,
    update: function update(t) {
      var e = this._container,
          i = e.currentStyle || document.defaultView.getComputedStyle(e),
          n = e.style;
      "absolute" !== n.position && "absolute" !== i.position && (n.position = "relative");
      var r = t.get("alwaysShowContent");
      r && this._moveTooltipIfResized();
    },
    _moveTooltipIfResized: function _moveTooltipIfResized() {
      var t = this._styleCoord[2],
          e = this._styleCoord[3],
          i = t * this._zr.getWidth(),
          n = e * this._zr.getHeight();

      this.moveTo(i, n);
    },
    show: function show(t) {
      clearTimeout(this._hideTimeout);
      var e = this.el,
          i = this._styleCoord;
      e.style.cssText = cw + ud(t) + ";left:" + i[0] + "px;top:" + i[1] + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0;
    },
    setContent: function setContent(t) {
      this.el.innerHTML = null == t ? "" : t;
    },
    setEnterable: function setEnterable(t) {
      this._enterable = t;
    },
    getSize: function getSize() {
      var t = this.el;
      return [t.clientWidth, t.clientHeight];
    },
    moveTo: function moveTo(t, e) {
      var i = this._styleCoord;
      cd(i, this._zr, this._appendToBody, t, e);
      var n = this.el.style;
      n.left = i[0] + "px", n.top = i[1] + "px";
    },
    hide: function hide() {
      this.el.style.display = "none", this._show = !1;
    },
    hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
    },
    isShow: function isShow() {
      return this._show;
    },
    dispose: function dispose() {
      this.el.parentNode.removeChild(this.el);
    },
    getOuterSize: function getOuterSize() {
      var t = this.el.clientWidth,
          e = this.el.clientHeight;

      if (document.defaultView && document.defaultView.getComputedStyle) {
        var i = document.defaultView.getComputedStyle(this.el);
        i && (t += parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), e += parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10));
      }

      return {
        width: t,
        height: e
      };
    }
  }, pd.prototype = {
    constructor: pd,
    _enterable: !0,
    update: function update(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveTooltipIfResized();
    },
    _moveTooltipIfResized: function _moveTooltipIfResized() {
      var t = this._styleCoord[2],
          e = this._styleCoord[3],
          i = t * this._zr.getWidth(),
          n = e * this._zr.getHeight();

      this.moveTo(i, n);
    },
    show: function show() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0;
    },
    setContent: function setContent(t, e, i) {
      this.el && this._zr.remove(this.el);

      for (var n = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
        var l = r.indexOf(o),
            h = r.substr(s + a.length, l - s - a.length);
        n["marker" + h] = h.indexOf("sub") > -1 ? {
          textWidth: 4,
          textHeight: 4,
          textBorderRadius: 2,
          textBackgroundColor: e[h],
          textOffset: [3, 0]
        } : {
          textWidth: 10,
          textHeight: 10,
          textBorderRadius: 5,
          textBackgroundColor: e[h]
        }, r = r.substr(l + 1), s = r.indexOf("{marker");
      }

      var u = i.getModel("textStyle"),
          c = u.get("fontSize"),
          d = i.get("textLineHeight");
      null == d && (d = Math.round(3 * c / 2)), this.el = new Ug({
        style: xa({}, u, {
          rich: n,
          text: t,
          textBackgroundColor: i.get("backgroundColor"),
          textBorderRadius: i.get("borderRadius"),
          textFill: i.get("textStyle.color"),
          textPadding: i.get("padding"),
          textLineHeight: d
        }),
        z: i.get("z")
      }), this._zr.add(this.el);
      var f = this;
      this.el.on("mouseover", function () {
        f._enterable && (clearTimeout(f._hideTimeout), f._show = !0), f._inContent = !0;
      }), this.el.on("mouseout", function () {
        f._enterable && f._show && f.hideLater(f._hideDelay), f._inContent = !1;
      });
    },
    setEnterable: function setEnterable(t) {
      this._enterable = t;
    },
    getSize: function getSize() {
      var t = this.el.getBoundingRect();
      return [t.width, t.height];
    },
    moveTo: function moveTo(t, e) {
      if (this.el) {
        var i = this._styleCoord;
        fd(i, this._zr, t, e), this.el.attr("position", [i[0], i[1]]);
      }
    },
    hide: function hide() {
      this.el && this.el.hide(), this._show = !1;
    },
    hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
    },
    isShow: function isShow() {
      return this._show;
    },
    dispose: function dispose() {
      clearTimeout(this._hideTimeout), this.el && this._zr.remove(this.el);
    },
    getOuterSize: function getOuterSize() {
      var t = this.getSize();
      return {
        width: t[0],
        height: t[1]
      };
    }
  };
  var dw = m,
      fw = f,
      pw = Ka,
      gw = new rv({
    shape: {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }
  });
  Zl({
    type: "tooltip",
    init: function init(t, e) {
      if (!Cd.node) {
        var i = t.getComponent("tooltip"),
            n = i.get("renderMode");
        this._renderMode = Yn(n);
        var r;
        "html" === this._renderMode ? (r = new dd(e.getDom(), e, {
          appendToBody: i.get("appendToBody", !0)
        }), this._newLine = "<br/>") : (r = new pd(e), this._newLine = "\n"), this._tooltipContent = r;
      }
    },
    render: function render(t, e, i) {
      if (!Cd.node) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
        var n = this._tooltipContent;
        n.update(t), n.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
      }
    },
    _initGlobalListener: function _initGlobalListener() {
      var t = this._tooltipModel,
          e = t.get("triggerOn");
      Nc("itemTooltip", this._api, dw(function (t, i, n) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(i, n) : "leave" === t && this._hide(n));
      }, this));
    },
    _keepShow: function _keepShow() {
      var t = this._tooltipModel,
          e = this._ecModel,
          i = this._api;

      if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var n = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
          !i.isDisposed() && n.manuallyShowTip(t, e, i, {
            x: n._lastX,
            y: n._lastY
          });
        });
      }
    },
    manuallyShowTip: function manuallyShowTip(t, e, i, n) {
      if (n.from !== this.uid && !Cd.node) {
        var r = vd(n, i);
        this._ticket = "";
        var a = n.dataByCoordSys;

        if (n.tooltip && null != n.x && null != n.y) {
          var o = gw;
          o.position = [n.x, n.y], o.update(), o.tooltip = n.tooltip, this._tryShow({
            offsetX: n.x,
            offsetY: n.y,
            target: o
          }, r);
        } else if (a) this._tryShow({
          offsetX: n.x,
          offsetY: n.y,
          position: n.position,
          dataByCoordSys: n.dataByCoordSys,
          tooltipOption: n.tooltipOption
        }, r);else if (null != n.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, i, n)) return;
          var s = Zx(n, e),
              l = s.point[0],
              h = s.point[1];
          null != l && null != h && this._tryShow({
            offsetX: l,
            offsetY: h,
            position: n.position,
            target: s.el
          }, r);
        } else null != n.x && null != n.y && (i.dispatchAction({
          type: "updateAxisPointer",
          x: n.x,
          y: n.y
        }), this._tryShow({
          offsetX: n.x,
          offsetY: n.y,
          position: n.position,
          target: i.getZr().findHover(n.x, n.y).target
        }, r));
      }
    },
    manuallyHideTip: function manuallyHideTip(t, e, i, n) {
      var r = this._tooltipContent;
      !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, n.from !== this.uid && this._hide(vd(n, i));
    },
    _manuallyAxisShowTip: function _manuallyAxisShowTip(t, e, i, n) {
      var r = n.seriesIndex,
          a = n.dataIndex,
          o = e.getComponent("axisPointer").coordSysAxesInfo;

      if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);

        if (s) {
          var l = s.getData(),
              t = gd([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
          if ("axis" === t.get("trigger")) return i.dispatchAction({
            type: "updateAxisPointer",
            seriesIndex: r,
            dataIndex: a,
            position: n.position
          }), !0;
        }
      }
    },
    _tryShow: function _tryShow(t, e) {
      var i = t.target,
          n = this._tooltipModel;

      if (n) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;
        var r = t.dataByCoordSys;
        r && r.length ? this._showAxisTooltip(r, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e));
      }
    },
    _showOrMove: function _showOrMove(t, e) {
      var i = t.get("showDelay");
      e = m(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e();
    },
    _showAxisTooltip: function _showAxisTooltip(t, e) {
      var i = this._ecModel,
          n = this._tooltipModel,
          a = [e.offsetX, e.offsetY],
          o = [],
          s = [],
          l = gd([e.tooltipOption, n]),
          h = this._renderMode,
          u = this._newLine,
          c = {};
      fw(t, function (t) {
        fw(t.dataByAxis, function (t) {
          var e = i.getComponent(t.axisDim + "Axis", t.axisIndex),
              n = t.value,
              a = [];

          if (e && null != n) {
            var l = ed(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
            f(t.seriesDataIndices, function (o) {
              var u = i.getSeriesByIndex(o.seriesIndex),
                  d = o.dataIndexInside,
                  f = u && u.getDataParams(d);

              if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = Ah(e.axis, n), f.axisValueLabel = l, f) {
                s.push(f);
                var p,
                    g = u.formatTooltip(d, !0, null, h);

                if (b(g)) {
                  p = g.html;
                  var v = g.markers;
                  r(c, v);
                } else p = g;

                a.push(p);
              }
            });
            var d = l;
            o.push("html" !== h ? a.join(u) : (d ? ho(d) + u : "") + a.join(u));
          }
        });
      }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
      var d = e.position;

      this._showOrMove(l, function () {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c);
      });
    },
    _showSeriesItemTooltip: function _showSeriesItemTooltip(t, e, i) {
      var n = this._ecModel,
          r = e.seriesIndex,
          a = n.getSeriesByIndex(r),
          o = e.dataModel || a,
          s = e.dataIndex,
          l = e.dataType,
          h = o.getData(l),
          u = gd([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
          c = u.get("trigger");

      if (null == c || "item" === c) {
        var d,
            f,
            p = o.getDataParams(s, l),
            g = o.formatTooltip(s, !1, l, this._renderMode);
        b(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
        var v = "item_" + o.name + "_" + s;
        this._showOrMove(u, function () {
          this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);
        }), i({
          type: "showTip",
          dataIndexInside: s,
          dataIndex: h.getRawIndex(s),
          seriesIndex: r,
          from: this.uid
        });
      }
    },
    _showComponentItemTooltip: function _showComponentItemTooltip(t, e, i) {
      var n = e.tooltip;

      if ("string" == typeof n) {
        var r = n;
        n = {
          content: r,
          formatter: r
        };
      }

      var a = new Ga(n, this._tooltipModel, this._ecModel),
          o = a.get("content"),
          s = Math.random();
      this._showOrMove(a, function () {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
      }), i({
        type: "showTip",
        from: this.uid
      });
    },
    _showTooltipContent: function _showTooltipContent(t, e, i, n, r, a, o, s, l) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var h = this._tooltipContent,
            u = t.get("formatter");
        o = o || t.get("position");
        var c = e;
        if (u && "string" == typeof u) c = uo(u, i, !0);else if ("function" == typeof u) {
          var d = dw(function (e, n) {
            e === this._ticket && (h.setContent(n, l, t), this._updatePosition(t, o, r, a, h, i, s));
          }, this);
          this._ticket = n, c = u(i, n, d);
        }
        h.setContent(c, l, t), h.show(t), this._updatePosition(t, o, r, a, h, i, s);
      }
    },
    _updatePosition: function _updatePosition(t, e, i, n, r, a, o) {
      var s = this._api.getWidth(),
          l = this._api.getHeight();

      e = e || t.get("position");
      var h = r.getSize(),
          u = t.get("align"),
          c = t.get("verticalAlign"),
          d = o && o.getBoundingRect().clone();
      if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([i, n], a, r.el, d, {
        viewSize: [s, l],
        contentSize: h.slice()
      })), _(e)) i = pw(e[0], s), n = pw(e[1], l);else if (b(e)) {
        e.width = h[0], e.height = h[1];
        var f = vo(e, {
          width: s,
          height: l
        });
        i = f.x, n = f.y, u = null, c = null;
      } else if ("string" == typeof e && o) {
        var p = _d(e, d, h);

        i = p[0], n = p[1];
      } else {
        var p = md(i, n, r, s, l, u ? null : 20, c ? null : 20);
        i = p[0], n = p[1];
      }

      if (u && (i -= xd(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (n -= xd(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
        var p = yd(i, n, r, s, l);
        i = p[0], n = p[1];
      }

      r.moveTo(i, n);
    },
    _updateContentNotChangedOnAxis: function _updateContentNotChangedOnAxis(t) {
      var e = this._lastDataByCoordSys,
          i = !!e && e.length === t.length;
      return i && fw(e, function (e, n) {
        var r = e.dataByAxis || {},
            a = t[n] || {},
            o = a.dataByAxis || [];
        i &= r.length === o.length, i && fw(r, function (t, e) {
          var n = o[e] || {},
              r = t.seriesDataIndices || [],
              a = n.seriesDataIndices || [];
          i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === a.length, i && fw(r, function (t, e) {
            var n = a[e];
            i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex;
          });
        });
      }), this._lastDataByCoordSys = t, !!i;
    },
    _hide: function _hide(t) {
      this._lastDataByCoordSys = null, t({
        type: "hideTip",
        from: this.uid
      });
    },
    dispose: function dispose(t, e) {
      Cd.node || (this._tooltipContent.dispose(), Yc("itemTooltip", e));
    }
  }), Wl({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, function () {}), Wl({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, function () {}), t.version = Iy, t.dependencies = ky, t.PRIORITY = Wy, t.init = Pl, t.connect = Ll, t.disConnect = Ol, t.disconnect = s_, t.dispose = Bl, t.getInstanceByDom = El, t.getInstanceById = zl, t.registerTheme = Rl, t.registerPreprocessor = Fl, t.registerProcessor = Nl, t.registerPostUpdate = Hl, t.registerAction = Wl, t.registerCoordinateSystem = Vl, t.getCoordinateSystemDimensions = Gl, t.registerLayout = Xl, t.registerVisual = Yl, t.registerLoading = ql, t.extendComponentModel = jl, t.extendComponentView = Zl, t.extendSeriesModel = $l, t.extendChartView = Kl, t.setCanvasCreator = Ql, t.registerMap = Jl, t.getMap = th, t.dataTool = l_;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"]))

/***/ }),

/***/ "./node_modules/echarts-taro3-react/lib/ec-canvas/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/echarts-taro3-react/lib/ec-canvas/index.css ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/echarts-taro3-react/lib/ec-canvas/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/echarts-taro3-react/lib/ec-canvas/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _createSuper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js");

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var taro_1 = __importDefault(__webpack_require__(/*! @tarojs/taro */ "./node_modules/echarts-taro3-react/node_modules/@tarojs/taro/index.js"));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/echarts-taro3-react/node_modules/react/cjs/react.production.min.js"));

var components_1 = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");

var wx_canvas_1 = __importDefault(__webpack_require__(/*! ./wx-canvas */ "./node_modules/echarts-taro3-react/lib/ec-canvas/wx-canvas.js"));

var echarts = __importStar(__webpack_require__(/*! ./echarts */ "./node_modules/echarts-taro3-react/lib/ec-canvas/echarts.js"));

__webpack_require__(/*! ./index.css */ "./node_modules/echarts-taro3-react/lib/ec-canvas/index.css");

function wrapTouch(event) {
  for (var i = 0; i < event.touches.length; ++i) {
    var touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }

  return event;
}

var EcCanvasTaro = /*#__PURE__*/function (_react_1$Component) {
  _inherits(EcCanvasTaro, _react_1$Component);

  var _super = _createSuper(EcCanvasTaro);

  function EcCanvasTaro() {
    var _this;

    _classCallCheck(this, EcCanvasTaro);

    _this = _super.apply(this, arguments);

    _this.touchStart = function (e) {
      if (_this.chart && e.touches.length > 0) {
        var touch = e.touches[0];

        var handler = _this.chart.getZr().handler;

        handler.dispatch("mousedown", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch("mousemove", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), "start");
      }
    };

    _this.touchMove = function (e) {
      if (_this.chart && e.touches.length > 0) {
        var touch = e.touches[0];

        var handler = _this.chart.getZr().handler;

        handler.dispatch("mousemove", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), "change");
      }
    };

    _this.touchEnd = function (e) {
      if (_this.chart) {
        var touch = e.changedTouches ? e.changedTouches[0] : {};

        var handler = _this.chart.getZr().handler;

        handler.dispatch("mouseup", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch("click", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), "end");
      }
    };

    return _this;
  }

  _createClass(EcCanvasTaro, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      echarts.registerPreprocessor(function (option) {
        if (option && option.series) {
          if (option.series.length > 0) {
            option.series.forEach(function (series) {
              series.progressive = 0;
            });
          } else if (_typeof(option.series) === "object") {
            option.series.progressive = 0;
          }
        }
      });

      if (!this.props.ec) {
        console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" ' + 'canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');
        return;
      }

      if (!this.props.ec.lazyLoad) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init(callback) {
      var _this2 = this;

      setTimeout(function () {
        _this2.initByNewWay(callback);
      }, 30);
    }
  }, {
    key: "initByNewWay",
    value: function initByNewWay(callback) {
      var _this3 = this;

      var query = taro_1.default.createSelectorQuery();
      var _this$props = this.props,
          ec = _this$props.ec,
          canvasId = _this$props.canvasId;
      query.select(".ec-canvas.".concat(canvasId)).fields({
        node: true,
        size: true
      }).exec(function (res) {
        var canvasNode = res[0].node;
        _this3.canvasNode = canvasNode;
        var canvasDpr = taro_1.default.getSystemInfoSync().pixelRatio;
        var canvasWidth = res[0].width;
        var canvasHeight = res[0].height;
        var ctx = canvasNode.getContext("2d");
        var canvas = new wx_canvas_1.default(ctx, canvasId, true, canvasNode);
        echarts.setCanvasCreator(function () {
          return canvas;
        });

        if (typeof callback === "function") {
          _this3.chart = callback(canvas, canvasWidth, canvasHeight, canvasDpr);
        } else if (typeof ec.onInit === "function") {
          _this3.chart = ec.onInit(canvas, canvasWidth, canvasHeight, canvasDpr);
        }
      });
    }
  }, {
    key: "canvasToTempFilePath",
    value: function canvasToTempFilePath(opt) {
      var query = taro_1.default.createSelectorQuery().in(this);
      query.select(".ec-canvas").fields({
        node: true,
        size: true
      }).exec(function (res) {
        var canvasNode = res[0].node;
        opt.canvas = canvasNode;
        taro_1.default.canvasToTempFilePath(opt);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var canvasId = this.props.canvasId;
      return react_1.default.createElement(components_1.Canvas, {
        type: "2d",
        className: "ec-canvas ".concat(canvasId),
        canvasId: canvasId,
        onTouchStart: this.touchStart,
        onTouchMove: this.touchMove,
        onTouchEnd: this.touchEnd
      });
    }
  }]);

  return EcCanvasTaro;
}(react_1.Component);

exports.default = EcCanvasTaro;

/***/ }),

/***/ "./node_modules/echarts-taro3-react/lib/ec-canvas/wx-canvas.js":
/*!*********************************************************************!*\
  !*** ./node_modules/echarts-taro3-react/lib/ec-canvas/wx-canvas.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WxCanvas = /*#__PURE__*/function () {
  function WxCanvas(ctx, canvasId, isNew, canvasNode) {
    _classCallCheck(this, WxCanvas);

    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;

    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this._initStyle(ctx);
    } // this._initCanvas(zrender, ctx);


    this._initEvent();
  }

  _createClass(WxCanvas, [{
    key: "getContext",
    value: function getContext(contextType) {
      if (contextType === '2d') {
        return this.ctx;
      }
    } // canvasToTempFilePath(opt) {
    //   if (!opt.canvasId) {
    //     opt.canvasId = this.canvasId;
    //   }
    //   return wx.canvasToTempFilePath(opt, this);
    // }

  }, {
    key: "setChart",
    value: function setChart(chart) {
      this.chart = chart;
    }
  }, {
    key: "attachEvent",
    value: function attachEvent() {// noop
    }
  }, {
    key: "detachEvent",
    value: function detachEvent() {// noop
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas(zrender, ctx) {
      zrender.util.getContext = function () {
        return ctx;
      };

      zrender.util.$override('measureText', function (text, font) {
        ctx.font = font || '12px sans-serif';
        return ctx.measureText(text);
      });
    }
  }, {
    key: "_initStyle",
    value: function _initStyle(ctx) {
      var _arguments = arguments;
      var styles = ['fillStyle', 'strokeStyle', 'globalAlpha', 'textAlign', 'textBaseAlign', 'shadow', 'lineWidth', 'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];
      styles.forEach(function (style) {
        Object.defineProperty(ctx, style, {
          set: function set(value) {
            if (style !== 'fillStyle' && style !== 'strokeStyle' || value !== 'none' && value !== null) {
              ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);
            }
          }
        });
      });

      ctx.createRadialGradient = function () {
        return ctx.createCircularGradient(_arguments);
      };
    }
  }, {
    key: "_initEvent",
    value: function _initEvent() {
      var _this = this;

      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown'
      }, {
        wxName: 'touchMove',
        ecName: 'mousemove'
      }, {
        wxName: 'touchEnd',
        ecName: 'mouseup'
      }, {
        wxName: 'touchEnd',
        ecName: 'click'
      }];
      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.touches[0];

          _this.chart.getZr().handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y
          });
        };
      });
    }
  }, {
    key: "width",
    get: function get() {
      if (this.canvasNode) return this.canvasNode.width;
      return 0;
    },
    set: function set(w) {
      if (this.canvasNode) this.canvasNode.width = w;
    }
  }, {
    key: "height",
    get: function get() {
      if (this.canvasNode) return this.canvasNode.height;
      return 0;
    },
    set: function set(h) {
      if (this.canvasNode) this.canvasNode.height = h;
    }
  }]);

  return WxCanvas;
}();

exports.default = WxCanvas;

/***/ }),

/***/ "./node_modules/echarts-taro3-react/lib/echart/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/echarts-taro3-react/lib/echart/index.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _createSuper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js");

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/echarts-taro3-react/node_modules/react/cjs/react.production.min.js")); // import { View, Input } from "@tarojs/components";


var echarts = __importStar(__webpack_require__(/*! ../ec-canvas/echarts */ "./node_modules/echarts-taro3-react/lib/ec-canvas/echarts.js"));

var ec_canvas_1 = __importDefault(__webpack_require__(/*! ../ec-canvas */ "./node_modules/echarts-taro3-react/lib/ec-canvas/index.js"));

var BaseChart = /*#__PURE__*/function (_react_1$Component) {
  _inherits(BaseChart, _react_1$Component);

  var _super = _createSuper(BaseChart);

  function BaseChart() {
    var _this;

    _classCallCheck(this, BaseChart);

    _this = _super.apply(this, arguments);
    _this.state = {
      ec: {
        lazyLoad: true
      }
    };

    _this.refresh = function (data) {
      _this.Chart.init(function (canvas, width, height, canvasDpr) {
        var chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: canvasDpr
        });
        canvas.setChart(chart);
        chart.setOption(data);
        chart.on("click", function (params) {
          if (typeof _this.props.onClick === "function") {
            _this.props.onClick(params);
          }
        });
        chart.on("dblclick", function (params) {
          if (typeof _this.props.onDblclick === "function") {
            _this.props.onDblclick(params);
          }
        });
        chart.on("mousewheel", function (params) {
          if (typeof _this.props.onMousewheel === "function") {
            _this.props.onMousewheel(params);
          }
        });
        chart.on("mouseout", function (params) {
          if (typeof _this.props.onMouseout === "function") {
            _this.props.onMouseout(params);
          }
        });
        chart.on("mouseup", function (params) {
          if (typeof _this.props.onMouseup === "function") {
            _this.props.onMouseup(params);
          }
        });
        chart.on("mousedown", function (params) {
          if (typeof _this.props.onMousedown === "function") {
            _this.props.onMousedown(params);
          }
        });
        chart.on("mousemove", function (params) {
          if (typeof _this.props.onMousemove === "function") {
            _this.props.onMousemove(params);
          }
        });
        return chart;
      });
    };

    _this.refChart = function (node) {
      return _this.Chart = node;
    };

    return _this;
  }

  _createClass(BaseChart, [{
    key: "render",
    value: function render() {
      var canvasId = this.props.canvasId;
      return react_1.default.createElement(ec_canvas_1.default, {
        ref: this.refChart,
        canvasId: canvasId,
        ec: this.state.ec
      });
    }
  }]);

  return BaseChart;
}(react_1.Component);

exports.default = BaseChart;

/***/ }),

/***/ "./node_modules/echarts-taro3-react/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/echarts-taro3-react/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: EChart */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EcCanvas = exports.EChart = void 0;

var echart_1 = __webpack_require__(/*! ./echart */ "./node_modules/echarts-taro3-react/lib/echart/index.js");

Object.defineProperty(exports, "EChart", {
  enumerable: true,
  get: function get() {
    return __importDefault(echart_1).default;
  }
});

var ec_canvas_1 = __webpack_require__(/*! ./ec-canvas */ "./node_modules/echarts-taro3-react/lib/ec-canvas/index.js");

Object.defineProperty(exports, "EcCanvas", {
  enumerable: true,
  get: function get() {
    return __importDefault(ec_canvas_1).default;
  }
});

/***/ }),

/***/ "./node_modules/echarts-taro3-react/node_modules/react/cjs/react.production.min.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/echarts-taro3-react/node_modules/react/cjs/react.production.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var l = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) {
      h[m] = arguments[m + 2];
    }

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) {
    void 0 === d[e] && (d[e] = f[e]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = _typeof(a);

  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== _typeof(a) ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
  } else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function map(a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function forEach(a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function count(a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function toArray(a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function only(a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) {
      K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
    }
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) {
      f[m] = arguments[m + 2];
    }

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.14.0";

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: jsx, jsxs */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var f = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),
    g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var l = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),
    n = 60103,
    p = 60106;

exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
    r = 60110,
    t = 60112;
exports.Suspense = 60113;
var u = 60115,
    v = 60116;

if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}

var x = "function" === typeof Symbol && Symbol.iterator;

function y(a) {
  if (null === a || "object" !== _typeof(a)) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var A = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    B = {};

function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (a, b) {
  if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
  current: null
},
    H = Object.prototype.hasOwnProperty,
    I = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function J(a, b, c) {
  var e,
      d = {},
      k = null,
      h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
    H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) {
      f[m] = arguments[m + 2];
    }

    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) {
    void 0 === d[e] && (d[e] = g[e]);
  }
  return {
    $$typeof: n,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}

function K(a, b) {
  return {
    $$typeof: n,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function L(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === n;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var M = /\/+/g;

function N(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function O(a, b, c, e, d) {
  var k = _typeof(a);

  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case n:
        case p:
          h = !0;
      }

  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
    k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
  } else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}

function P(a, b, c) {
  if (null == a) return a;
  var e = [],
      d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}

function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }

  if (1 === a._status) return a._result;
  throw a._result;
}

var R = {
  current: null
};

function S() {
  var a = R.current;
  if (null === a) throw Error(z(321));
  return a;
}

var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: P,
  forEach: function forEach(a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function count(a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!L(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = l({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) {
      H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
  }

  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) {
      g[m] = arguments[m + 2];
    }

    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = J;

exports.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};

exports.isValidElement = L;

exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return S().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return S().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return S().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return S().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return S().useRef(a);
};

exports.useState = function (a) {
  return S().useState(a);
};

exports.version = "17.0.2";

/***/ }),

/***/ "./node_modules/taro-ui/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/taro-ui/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: AtAccordion, AtActionSheet, AtActionSheetItem, AtActivityIndicator, AtAvatar, AtBadge, AtButton, AtCalendar, AtCard, AtCheckbox, AtComponent, AtCountdown, AtCurtain, AtDivider, AtDrawer, AtFab, AtFloatLayout, AtForm, AtGrid, AtIcon, AtImagePicker, AtIndexes, AtInput, AtInputNumber, AtList, AtListItem, AtLoadMore, AtLoading, AtMessage, AtModal, AtModalAction, AtModalContent, AtModalHeader, AtNavBar, AtNoticebar, AtPagination, AtProgress, AtRadio, AtRange, AtRate, AtSearchBar, AtSegmentedControl, AtSlider, AtSteps, AtSwipeAction, AtSwitch, AtTabBar, AtTabs, AtTabsPane, AtTag, AtTextarea, AtTimeline, AtToast */
/*! exports used: AtCard, AtCountdown, AtGrid, AtList, AtListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, document) {/* unused harmony export AtAccordion */
/* unused harmony export AtActionSheet */
/* unused harmony export AtActionSheetItem */
/* unused harmony export AtActivityIndicator */
/* unused harmony export AtAvatar */
/* unused harmony export AtBadge */
/* unused harmony export AtButton */
/* unused harmony export AtCalendar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtCard; });
/* unused harmony export AtCheckbox */
/* unused harmony export AtComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AtCountdown; });
/* unused harmony export AtCurtain */
/* unused harmony export AtDivider */
/* unused harmony export AtDrawer */
/* unused harmony export AtFab */
/* unused harmony export AtFloatLayout */
/* unused harmony export AtForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AtGrid; });
/* unused harmony export AtIcon */
/* unused harmony export AtImagePicker */
/* unused harmony export AtIndexes */
/* unused harmony export AtInput */
/* unused harmony export AtInputNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AtList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AtListItem; });
/* unused harmony export AtLoadMore */
/* unused harmony export AtLoading */
/* unused harmony export AtMessage */
/* unused harmony export AtModal */
/* unused harmony export AtModalAction */
/* unused harmony export AtModalContent */
/* unused harmony export AtModalHeader */
/* unused harmony export AtNavBar */
/* unused harmony export AtNoticebar */
/* unused harmony export AtPagination */
/* unused harmony export AtProgress */
/* unused harmony export AtRadio */
/* unused harmony export AtRange */
/* unused harmony export AtRate */
/* unused harmony export AtSearchBar */
/* unused harmony export AtSegmentedControl */
/* unused harmony export AtSlider */
/* unused harmony export AtSteps */
/* unused harmony export AtSwipeAction */
/* unused harmony export AtSwitch */
/* unused harmony export AtTabBar */
/* unused harmony export AtTabs */
/* unused harmony export AtTabsPane */
/* unused harmony export AtTag */
/* unused harmony export AtTextarea */
/* unused harmony export AtTimeline */
/* unused harmony export AtToast */
/* harmony import */ var D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /* global define */
  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg);

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function isAsyncMode(a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function isContextConsumer(a) {
  return z(a) === k;
};

var isContextProvider = function isContextProvider(a) {
  return z(a) === h;
};

var isElement = function isElement(a) {
  return "object" === Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a && a.$$typeof === c;
};

var isForwardRef = function isForwardRef(a) {
  return z(a) === n;
};

var isFragment = function isFragment(a) {
  return z(a) === e;
};

var isLazy = function isLazy(a) {
  return z(a) === t;
};

var isMemo = function isMemo(a) {
  return z(a) === r;
};

var isPortal = function isPortal(a) {
  return z(a) === d;
};

var isProfiler = function isProfiler(a) {
  return z(a) === g;
};

var isStrictMode = function isStrictMode(a) {
  return z(a) === f;
};

var isSuspense = function isSuspense(a) {
  return z(a) === p;
};

var isValidElementType = function isValidElementType(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};
var reactIs_development = createCommonjsModule(function (module, exports) {
  if (true) {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;
var reactIs = createCommonjsModule(function (module) {
  if (false) {} else {
    module.exports = reactIs_development;
  }
});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;
var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning$1() {};

if (true) {
  printWarning$1 = function printWarning$1(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  shim.isRequired = shim;

  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.


  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (true) {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {}
});

var AtActionSheetBody =
/** @class */
function (_super) {
  __extends(AtActionSheetBody, _super);

  function AtActionSheetBody() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtActionSheetBody.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__body', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, this.props.children);
  };

  return AtActionSheetBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtActionSheetFooter =
/** @class */
function (_super) {
  __extends(AtActionSheetFooter, _super);

  function AtActionSheetFooter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (typeof _this.props.onClick === 'function') {
        (_a = _this.props).onClick.apply(_a, __spread(args));
      }
    };

    return _this;
  }

  AtActionSheetFooter.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__footer', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      onClick: this.handleClick,
      className: rootClass
    }, this.props.children);
  };

  return AtActionSheetFooter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActionSheetFooter.propTypes = {
  onClick: propTypes.func
};

var AtActionSheetHeader =
/** @class */
function (_super) {
  __extends(AtActionSheetHeader, _super);

  function AtActionSheetHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtActionSheetHeader.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__header', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, this.props.children);
  };

  return AtActionSheetHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtActionSheet =
/** @class */
function (_super) {
  __extends(AtActionSheet, _super);

  function AtActionSheet(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClose = function () {
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }
    };

    _this.handleCancel = function () {
      if (typeof _this.props.onCancel === 'function') {
        return _this.props.onCancel();
      }

      _this.close();
    };

    _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  AtActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
      !isOpened && this.handleClose();
    }
  };

  AtActionSheet.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        cancelText = _a.cancelText,
        className = _a.className;
    var _isOpened = this.state._isOpened;
    var rootClass = classnames('at-action-sheet', {
      'at-action-sheet--active': _isOpened
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass,
      onTouchMove: this.handleTouchMove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      onClick: this.close,
      className: 'at-action-sheet__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-action-sheet__container'
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetHeader, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetBody, null, this.props.children), cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetFooter, {
      onClick: this.handleCancel
    }, cancelText)));
  };

  return AtActionSheet;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
};
AtActionSheet.propTypes = {
  title: propTypes.string,
  onClose: propTypes.func,
  onCancel: propTypes.func,
  isOpened: propTypes.bool.isRequired,
  cancelText: propTypes.string
};

var AtActionSheetItem =
/** @class */
function (_super) {
  __extends(AtActionSheetItem, _super);

  function AtActionSheetItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (args) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(args);
      }
    };

    return _this;
  }

  AtActionSheetItem.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__item', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass,
      onClick: this.handleClick
    }, this.props.children);
  };

  return AtActionSheetItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActionSheetItem.propTypes = {
  onClick: propTypes.func
};
var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

function delay(delayTime) {
  if (delayTime === void 0) {
    delayTime = 25;
  }

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delayTime);
  });
}

function delayQuerySelector(selectorStr, delayTime) {
  if (delayTime === void 0) {
    delayTime = 500;
  }

  return new Promise(function (resolve) {
    var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createSelectorQuery();
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function uuid(len, radix) {
  if (len === void 0) {
    len = 8;
  }

  if (radix === void 0) {
    radix = 16;
  }

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      value[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r // rfc4122 requires these characters

    /* eslint-disable-next-line */
    = void 0; // rfc4122 requires these characters

    /* eslint-disable-next-line */

    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4'; // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return value.join('');
}

function getEventDetail(event) {
  var detail;

  switch (ENV) {
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;

    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }

  return detail;
}

function isTest() {
  return "development" === 'test';
}

var scrollTop = 0;

function handleTouchScroll(flag) {
  if (ENV !== _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
    return;
  }

  if (flag) {
    scrollTop = document.documentElement.scrollTop; // 使body脱离文档流

    document.body.classList.add('at-frozen'); // 把脱离文档流的body拉上去！否则页面会回到顶部！

    document.body.style.top = -scrollTop + "px";
  } else {
    document.body.style.top = '';
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}

function pxTransform(size) {
  if (!size) return '';
  var designWidth = 750;
  var deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  };
  return size / deviceRatio[designWidth] + "rpx";
}

function objectToString(style) {
  if (style && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr_1 = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
    });
    return styleStr_1;
  } else if (style && typeof style === 'string') {
    return style;
  }

  return '';
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */


function mergeStyle(style1, style2) {
  if (style1 && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
    return Object.assign({}, style1, style2);
  }

  return objectToString(style1) + objectToString(style2);
}

var AtLoading =
/** @class */
function (_super) {
  __extends(AtLoading, _super);

  function AtLoading() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtLoading.prototype.render = function () {
    var _a = this.props,
        color = _a.color,
        size = _a.size;
    var loadingSize = typeof size === 'string' ? size : String(size);
    var sizeStyle = {
      width: size ? "" + pxTransform(parseInt(loadingSize)) : '',
      height: size ? "" + pxTransform(parseInt(loadingSize)) : ''
    };
    var colorStyle = {
      border: color ? "1px solid " + color : '',
      borderColor: color ? color + " transparent transparent transparent" : ''
    };
    var ringStyle = Object.assign({}, colorStyle, sizeStyle);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-loading',
      style: sizeStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-loading__ring',
      style: ringStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-loading__ring',
      style: ringStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-loading__ring',
      style: ringStyle
    }));
  };

  return AtLoading;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtLoading.defaultProps = {
  size: 0,
  color: ''
};
AtLoading.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  color: propTypes.oneOfType([propTypes.string, propTypes.number])
};

var AtActivityIndicator =
/** @class */
function (_super) {
  __extends(AtActivityIndicator, _super);

  function AtActivityIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtActivityIndicator.prototype.render = function () {
    var _a = this.props,
        color = _a.color,
        size = _a.size,
        mode = _a.mode,
        content = _a.content,
        isOpened = _a.isOpened;
    var rootClass = classnames('at-activity-indicator', {
      'at-activity-indicator--center': mode === 'center',
      'at-activity-indicator--isopened': isOpened
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-activity-indicator__body'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtLoading, {
      size: size,
      color: color
    })), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-activity-indicator__content'
    }, content));
  };

  return AtActivityIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActivityIndicator.defaultProps = {
  size: 0,
  mode: 'normal',
  color: '',
  content: '',
  className: '',
  isOpened: true
};
AtActivityIndicator.propTypes = {
  size: propTypes.number,
  mode: propTypes.string,
  color: propTypes.string,
  content: propTypes.string,
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  isOpened: propTypes.bool
};
var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};

var AtAvatar =
/** @class */
function (_super) {
  __extends(AtAvatar, _super);

  function AtAvatar(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP
    };
    return _this;
  }

  AtAvatar.prototype.render = function () {
    var _a;

    var _b = this.props,
        size = _b.size,
        circle = _b.circle,
        image = _b.image,
        text = _b.text,
        openData = _b.openData,
        customStyle = _b.customStyle;
    var rootClassName = ['at-avatar'];
    var iconSize = SIZE_CLASS[size || 'normal'];
    var classObject = (_a = {}, _a["at-avatar--" + iconSize] = iconSize, _a['at-avatar--circle'] = circle, _a);
    var letter = '';
    if (text) letter = text[0];
    var elem;

    if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
        type: openData.type
      });
    } else if (image) {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: 'at-avatar__img',
        src: image
      });
    } else {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-avatar__text'
      }, letter);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle
    }, elem);
  };

  return AtAvatar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  customStyle: {},
  className: ''
};
AtAvatar.propTypes = {
  size: propTypes.oneOf(['large', 'normal', 'small']),
  circle: propTypes.bool,
  text: propTypes.string,
  image: propTypes.string,
  openData: propTypes.object,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string])
};

var AtBadge =
/** @class */
function (_super) {
  __extends(AtBadge, _super);

  function AtBadge(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  AtBadge.prototype.formatValue = function (value, maxValue) {
    if (value === '' || value === null || typeof value === 'undefined') return '';
    var numValue = +value;

    if (Number.isNaN(numValue)) {
      return value;
    }

    return numValue > maxValue ? maxValue + "+" : numValue;
  };

  AtBadge.prototype.render = function () {
    var _a = this.props,
        dot = _a.dot,
        value = _a.value,
        _b = _a.maxValue,
        maxValue = _b === void 0 ? 99 : _b,
        customStyle = _a.customStyle;
    var rootClassName = ['at-badge'];
    var val = this.formatValue(value, maxValue);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, this.props.className),
      style: customStyle
    }, this.props.children, dot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-badge__dot'
    }) : val !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-badge__num'
    }, val));
  };

  return AtBadge;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
};
AtBadge.propTypes = {
  dot: propTypes.bool,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  maxValue: propTypes.number,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string])
};
var SIZE_CLASS$1 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
};

var AtButton =
/** @class */
function (_super) {
  __extends(AtButton, _super);

  function AtButton(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY
    };
    return _this;
  }

  AtButton.prototype.onClick = function (event) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(event);
    }
  };

  AtButton.prototype.onGetUserInfo = function (event) {
    this.props.onGetUserInfo && this.props.onGetUserInfo(event);
  };

  AtButton.prototype.onContact = function (event) {
    this.props.onContact && this.props.onContact(event);
  };

  AtButton.prototype.onGetPhoneNumber = function (event) {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
  };

  AtButton.prototype.onError = function (event) {
    this.props.onError && this.props.onError(event);
  };

  AtButton.prototype.onOpenSetting = function (event) {
    this.props.onOpenSetting && this.props.onOpenSetting(event);
  };

  AtButton.prototype.onSumit = function (event) {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true
      });
    }
  };

  AtButton.prototype.onReset = function (event) {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true
      });
    }
  };

  AtButton.prototype.render = function () {
    var _a;

    var _b = this.props,
        _c = _b.size,
        size = _c === void 0 ? 'normal' : _c,
        _d = _b.type,
        type = _d === void 0 ? '' : _d,
        circle = _b.circle,
        full = _b.full,
        loading = _b.loading,
        disabled = _b.disabled,
        customStyle = _b.customStyle,
        formType = _b.formType,
        openType = _b.openType,
        lang = _b.lang,
        sessionFrom = _b.sessionFrom,
        sendMessageTitle = _b.sendMessageTitle,
        sendMessagePath = _b.sendMessagePath,
        sendMessageImg = _b.sendMessageImg,
        showMessageCard = _b.showMessageCard,
        appParameter = _b.appParameter;
    var _e = this.state,
        isWEAPP = _e.isWEAPP,
        isALIPAY = _e.isALIPAY,
        isWEB = _e.isWEB;
    var rootClassName = ['at-button'];
    var classObject = (_a = {}, _a["at-button--" + SIZE_CLASS$1[size]] = SIZE_CLASS$1[size], _a['at-button--disabled'] = disabled, _a["at-button--" + type] = TYPE_CLASS[type], _a['at-button--circle'] = circle, _a['at-button--full'] = full, _a);
    var loadingColor = type === 'primary' ? '#fff' : '';
    var loadingSize = size === 'small' ? '30' : 0;
    var loadingComponent = null;

    if (loading) {
      loadingComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-button__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtLoading, {
        color: loadingColor,
        size: loadingSize
      }));
      rootClassName.push('at-button--icon');
    }

    var webButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: 'at-button__wxbutton',
      lang: lang,
      formType: formType
    });
    var button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: 'at-button__wxbutton',
      formType: formType,
      openType: openType,
      lang: lang,
      sessionFrom: sessionFrom,
      sendMessageTitle: sendMessageTitle,
      sendMessagePath: sendMessagePath,
      sendMessageImg: sendMessageImg,
      showMessageCard: showMessageCard,
      appParameter: appParameter,
      onGetUserInfo: this.onGetUserInfo.bind(this),
      onGetPhoneNumber: this.onGetPhoneNumber.bind(this),
      onOpenSetting: this.onOpenSetting.bind(this),
      onError: this.onError.bind(this),
      onContact: this.onContact.bind(this)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle,
      onClick: this.onClick.bind(this)
    }, isWEB && !disabled && webButton, isWEAPP && !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.onSumit.bind(this),
      onReset: this.onReset.bind(this)
    }, button), isALIPAY && !disabled && button, loadingComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-button__text'
    }, this.props.children));
  };

  return AtButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtButton.defaultProps = {
  size: 'normal',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  // Button props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: ''
};
AtButton.propTypes = {
  size: propTypes.oneOf(['normal', 'small']),
  type: propTypes.oneOf(['primary', 'secondary', '']),
  circle: propTypes.bool,
  full: propTypes.bool,
  loading: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  formType: propTypes.oneOf(['submit', 'reset', '']),
  openType: propTypes.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', 'getAuthorize', 'contactShare', '']),
  lang: propTypes.string,
  sessionFrom: propTypes.string,
  sendMessageTitle: propTypes.string,
  sendMessagePath: propTypes.string,
  sendMessageImg: propTypes.string,
  showMessageCard: propTypes.bool,
  appParameter: propTypes.string,
  onGetUserInfo: propTypes.func,
  onContact: propTypes.func,
  onGetPhoneNumber: propTypes.func,
  onError: propTypes.func,
  onOpenSetting: propTypes.func
};

var AtCard =
/** @class */
function (_super) {
  __extends(AtCard, _super);

  function AtCard() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (args) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(args);
      }
    };

    return _this;
  }

  AtCard.prototype.render = function () {
    var _a;

    var _b = this.props,
        title = _b.title,
        note = _b.note,
        extra = _b.extra,
        extraStyle = _b.extraStyle,
        thumb = _b.thumb,
        isFull = _b.isFull,
        icon = _b.icon,
        renderIcon = _b.renderIcon;
    var rootClass = classnames('at-card', {
      'at-card--full': isFull
    }, this.props.className);
    var iconClass = classnames((_a = {
      'at-icon': true
    }, _a["at-icon-" + (icon && icon.value)] = icon && icon.value, _a['at-card__header-icon'] = true, _a));
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && icon.size + "px" || ''
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      onClick: this.handleClick,
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-card__header'
    }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-card__header-thumb'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: 'at-card__header-thumb-info',
      mode: 'scaleToFill',
      src: thumb
    })), renderIcon || '', !thumb && icon && icon.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: iconClass,
      style: iconStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-card__header-title'
    }, title), extra && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      style: _assign({}, extraStyle),
      className: 'at-card__header-extra'
    }, extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-card__content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-card__content-info'
    }, this.props.children), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-card__content-note'
    }, note)));
  };

  return AtCard;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  extraStyle: {}
};
AtCard.propTypes = {
  note: propTypes.string,
  isFull: propTypes.bool,
  thumb: propTypes.string,
  title: propTypes.string,
  extra: propTypes.string,
  icon: propTypes.object,
  onClick: propTypes.func,
  renderIcon: propTypes.oneOfType([propTypes.string, propTypes.element]),
  extraStyle: propTypes.object // 自定义extra样式

};

var AtCheckbox =
/** @class */
function (_super) {
  __extends(AtCheckbox, _super);

  function AtCheckbox() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCheckbox.prototype.handleClick = function (idx) {
    var _a = this.props,
        selectedList = _a.selectedList,
        options = _a.options;
    var option = options[idx];
    var disabled = option.disabled,
        value = option.value;
    if (disabled) return;
    var selectedSet = new Set(selectedList);

    if (!selectedSet.has(value)) {
      selectedSet.add(value);
    } else {
      selectedSet.delete(value);
    }

    this.props.onChange(__spread(selectedSet));
  };

  AtCheckbox.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        options = _a.options,
        selectedList = _a.selectedList;
    var rootCls = classnames('at-checkbox', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, options.map(function (option, idx) {
      var value = option.value,
          disabled = option.disabled,
          label = option.label,
          desc = option.desc;
      var optionCls = classnames('at-checkbox__option', {
        'at-checkbox__option--disabled': disabled,
        'at-checkbox__option--selected': selectedList.includes(value)
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: optionCls,
        key: value,
        onClick: _this.handleClick.bind(_this, idx)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-checkbox__option-wrap'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-checkbox__option-cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-checkbox__icon-cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-icon at-icon-check'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-checkbox__title'
      }, label)), desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-checkbox__desc'
      }, desc)));
    }));
  };

  return AtCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCheckbox.defaultProps = {
  customStyle: '',
  className: '',
  options: [],
  selectedList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtCheckbox.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  options: propTypes.array,
  selectedList: propTypes.array,
  onChange: propTypes.func
};

var AtList =
/** @class */
function (_super) {
  __extends(AtList, _super);

  function AtList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtList.prototype.render = function () {
    var rootClass = classnames('at-list', {
      'at-list--no-border': !this.props.hasBorder
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, this.props.children);
  };

  return AtList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtList.defaultProps = {
  hasBorder: true
};
AtList.propTypes = {
  hasBorder: propTypes.bool
};

var AtListItem =
/** @class */
function (_super) {
  __extends(AtListItem, _super);

  function AtListItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (event) {
      if (typeof _this.props.onClick === 'function' && !_this.props.disabled) {
        _this.props.onClick(event);
      }
    };

    _this.handleSwitchChange = function (event) {
      if (typeof _this.props.onSwitchChange === 'function' && !_this.props.disabled) {
        _this.props.onSwitchChange(event);
      }
    };

    return _this;
  }

  AtListItem.prototype.handleSwitchClick = function (e) {
    e.stopPropagation();
  };

  AtListItem.prototype.render = function () {
    var _a;

    var _b = this.props,
        note = _b.note,
        arrow = _b.arrow,
        thumb = _b.thumb,
        iconInfo = _b.iconInfo,
        disabled = _b.disabled,
        isSwitch = _b.isSwitch,
        hasBorder = _b.hasBorder,
        extraThumb = _b.extraThumb,
        switchColor = _b.switchColor,
        switchIsCheck = _b.switchIsCheck;
    var _c = this.props,
        extraText = _c.extraText,
        title = _c.title;
    extraText = String(extraText);
    title = String(title);
    var rootClass = classnames('at-list__item', {
      'at-list__item--thumb': thumb,
      'at-list__item--multiple': note,
      'at-list__item--disabled': disabled,
      'at-list__item--no-border': !hasBorder
    }, this.props.className);
    var iconClass = classnames(iconInfo && iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(iconInfo && iconInfo.prefixClass || 'at-icon') + "-" + (iconInfo && iconInfo.value)] = iconInfo && iconInfo.value, _a), iconInfo && iconInfo.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-list__item-container'
    }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-list__item-thumb item-thumb'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: 'item-thumb__info',
      mode: 'scaleToFill',
      src: thumb
    })), iconInfo && iconInfo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-list__item-icon item-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: iconClass,
      style: mergeStyle({
        color: iconInfo.color || '',
        fontSize: (iconInfo.size || 24) + "px"
      }, iconInfo.customStyle || '')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-list__item-content item-content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-content__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-content__info-title'
    }, title), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-content__info-note'
    }, note))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-list__item-extra item-extra'
    }, extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-extra__info'
    }, extraText), extraThumb && !extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-extra__image'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: 'item-extra__image-info',
      mode: 'aspectFit',
      src: extraThumb
    })), isSwitch && !extraThumb && !extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-extra__switch',
      onClick: this.handleSwitchClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      color: switchColor,
      disabled: disabled,
      checked: switchIsCheck,
      onChange: this.handleSwitchChange
    })), arrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'item-extra__icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "at-icon item-extra__icon-arrow at-icon-chevron-" + arrow
    })) : null)));
  };

  return AtListItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtListItem.defaultProps = {
  note: '',
  disabled: false,
  title: '',
  thumb: '',
  isSwitch: false,
  hasBorder: true,
  switchColor: '#6190E8',
  switchIsCheck: false,
  extraText: '',
  extraThumb: '',
  iconInfo: {
    value: ''
  }
};
AtListItem.propTypes = {
  note: propTypes.string,
  disabled: propTypes.bool,
  title: propTypes.string,
  thumb: propTypes.string,
  onClick: propTypes.func,
  isSwitch: propTypes.bool,
  hasBorder: propTypes.bool,
  switchColor: propTypes.string,
  switchIsCheck: propTypes.bool,
  extraText: propTypes.string,
  extraThumb: propTypes.string,
  onSwitchChange: propTypes.func,
  arrow: propTypes.oneOf(['up', 'down', 'right']),
  iconInfo: propTypes.shape({
    size: propTypes.number,
    value: propTypes.string,
    color: propTypes.string,
    prefixClass: propTypes.string,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string])
  })
};

var AtDrawer =
/** @class */
function (_super) {
  __extends(AtDrawer, _super);

  function AtDrawer(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      animShow: false,
      _show: props.show
    };
    return _this;
  }

  AtDrawer.prototype.componentDidMount = function () {
    var _show = this.state._show;
    if (_show) this.animShow();
  };

  AtDrawer.prototype.onItemClick = function (index) {
    this.props.onItemClick && this.props.onItemClick(index);
    this.animHide();
  };

  AtDrawer.prototype.onHide = function () {
    var _this = this;

    this.setState({
      _show: false
    }, function () {
      _this.props.onClose && _this.props.onClose();
    });
  };

  AtDrawer.prototype.animHide = function () {
    var _this = this;

    this.setState({
      animShow: false
    });
    setTimeout(function () {
      _this.onHide();
    }, 300);
  };

  AtDrawer.prototype.animShow = function () {
    var _this = this;

    this.setState({
      _show: true
    });
    setTimeout(function () {
      _this.setState({
        animShow: true
      });
    }, 200);
  };

  AtDrawer.prototype.onMaskClick = function () {
    this.animHide();
  };

  AtDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var show = nextProps.show;

    if (show !== this.state._show) {
      show ? this.animShow() : this.animHide();
    }
  };

  AtDrawer.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        mask = _a.mask,
        width = _a.width,
        right = _a.right,
        items = _a.items;
    var _b = this.state,
        animShow = _b.animShow,
        _show = _b._show;
    var rootClassName = ['at-drawer'];
    var maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0
    };
    var listStyle = {
      width: width,
      transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
    };
    var classObject = {
      'at-drawer--show': animShow,
      'at-drawer--right': right,
      'at-drawer--left': !right
    };
    return _show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, classObject, this.props.className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-drawer__mask',
      style: maskStyle,
      onClick: this.onMaskClick.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-drawer__content',
      style: listStyle
    }, !!items && items.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtList, null, items.map(function (name, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtListItem, {
        key: name + "-" + index,
        "data-index": index,
        onClick: _this.onItemClick.bind(_this, index),
        title: name,
        arrow: 'right'
      });
    })) : this.props.children)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], null);
  };

  return AtDrawer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: []
};
AtDrawer.propTypes = {
  show: propTypes.bool,
  mask: propTypes.bool,
  width: propTypes.string,
  items: propTypes.arrayOf(propTypes.string),
  onItemClick: propTypes.func,
  onClose: propTypes.func
};

var AtFloatLayout =
/** @class */
function (_super) {
  __extends(AtFloatLayout, _super);

  function AtFloatLayout(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClose = function () {
      if (typeof _this.props.onClose === 'function') {
        // TODO: Fix typings
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this.props.onClose();
      }
    };

    _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  AtFloatLayout.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened);
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  };

  AtFloatLayout.prototype.render = function () {
    var _isOpened = this.state._isOpened;
    var _a = this.props,
        title = _a.title,
        scrollY = _a.scrollY,
        scrollX = _a.scrollX,
        scrollTop = _a.scrollTop,
        scrollLeft = _a.scrollLeft,
        upperThreshold = _a.upperThreshold,
        lowerThreshold = _a.lowerThreshold,
        scrollWithAnimation = _a.scrollWithAnimation;
    var rootClass = classnames('at-float-layout', {
      'at-float-layout--active': _isOpened
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass,
      onTouchMove: this.handleTouchMove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      onClick: this.close,
      className: 'at-float-layout__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-float-layout__container layout'
    }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'layout-header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'layout-header__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'layout-header__btn-close',
      onClick: this.close
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'layout-body'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
      scrollY: scrollY,
      scrollX: scrollX,
      scrollTop: scrollTop,
      scrollLeft: scrollLeft,
      upperThreshold: upperThreshold,
      lowerThreshold: lowerThreshold,
      scrollWithAnimation: scrollWithAnimation,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScroll: this.props.onScroll,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScrollToLower: this.props.onScrollToLower,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScrollToUpper: this.props.onScrollToUpper,
      className: 'layout-body__content'
    }, this.props.children))));
  };

  return AtFloatLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,
  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false
};
AtFloatLayout.propTypes = {
  title: propTypes.string,
  isOpened: propTypes.bool,
  scrollY: propTypes.bool,
  scrollX: propTypes.bool,
  scrollTop: propTypes.number,
  scrollLeft: propTypes.number,
  upperThreshold: propTypes.number,
  lowerThreshold: propTypes.number,
  scrollWithAnimation: propTypes.bool,
  onClose: propTypes.func,
  onScroll: propTypes.func,
  onScrollToLower: propTypes.func,
  onScrollToUpper: propTypes.func
};

var AtForm =
/** @class */
function (_super) {
  __extends(AtForm, _super);

  function AtForm() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtForm.prototype.onSubmit = function () {
    this.props.onSubmit && this.props.onSubmit(arguments);
  };

  AtForm.prototype.onReset = function () {
    this.props.onReset && this.props.onReset(arguments);
  };

  AtForm.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        reportSubmit = _a.reportSubmit;
    var rootCls = classnames('at-form', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: rootCls,
      style: customStyle,
      onSubmit: this.onSubmit.bind(this),
      reportSubmit: reportSubmit,
      onReset: this.onReset.bind(this)
    }, this.props.children);
  };

  return AtForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false
};
AtForm.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  reportSubmit: propTypes.bool,
  onSubmit: propTypes.func,
  onReset: propTypes.func
};
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;
/** Detect free variable `global` from Node.js. */

var freeGlobal = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;
/** Built-in value references. */

var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;
/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;
/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;
/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);

  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex;
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }

  var type = Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(index);

  if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return eq_1(object[index], value);
  }

  return false;
}

var _isIterateeCall = isIterateeCall;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return value != null && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == 'object';
}

var isObjectLike_1 = isObjectLike;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol_1(value)) {
    return NAN;
  }

  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var toNumber_1 = toNumber;
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber_1(value);

  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}

var toFinite_1 = toFinite;
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */

function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

var toInteger_1 = toInteger;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeCeil = Math.ceil,
    nativeMax = Math.max;
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(array, size, guard) {
  if (guard ? _isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax(toInteger_1(size), 0);
  }

  var length = array == null ? 0 : array.length;

  if (!length || size < 1) {
    return [];
  }

  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, index += size);
  }

  return result;
}

var chunk_1 = chunk;

var AtGrid =
/** @class */
function (_super) {
  __extends(AtGrid, _super);

  function AtGrid() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (item, index, row, event) {
      var _a = _this.props,
          onClick = _a.onClick,
          _b = _a.columnNum,
          columnNum = _b === void 0 ? 3 : _b;

      if (typeof onClick === 'function') {
        var clickIndex = row * columnNum + index;
        onClick(item, clickIndex, event);
      }
    };

    return _this;
  }

  AtGrid.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        data = _a.data,
        mode = _a.mode,
        _b = _a.columnNum,
        columnNum = _b === void 0 ? 3 : _b,
        hasBorder = _a.hasBorder;

    if (Array.isArray(data) && data.length === 0) {
      return null;
    }

    var gridGroup = chunk_1(data, columnNum);
    var bodyClass = classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
      'at-grid-item--no-border': !hasBorder
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-grid', this.props.className)
    }, gridGroup.map(function (item, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-grid__flex',
        key: "at-grid-group-" + i
      }, item.map(function (childItem, index) {
        var _a;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          key: "at-grid-item-" + index,
          className: classnames(bodyClass, {
            'at-grid-item--last': index === columnNum - 1
          }),
          onClick: _this.handleClick.bind(_this, childItem, index, i),
          style: {
            flex: "0 0 " + 100 / columnNum + "%"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-grid-item__content'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-grid-item__content-inner'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'content-inner__icon'
        }, childItem.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          className: 'content-inner__img',
          src: childItem.image,
          mode: 'scaleToFill'
        }), childItem.iconInfo && !childItem.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          className: classnames(childItem.iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(childItem.iconInfo.prefixClass || 'at-icon') + "-" + childItem.iconInfo.value] = childItem.iconInfo.value, _a), childItem.iconInfo.className),
          style: mergeStyle({
            color: childItem.iconInfo.color,
            fontSize: (childItem.iconInfo.size || 24) + "px"
          }, // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          childItem.iconInfo.customStyle)
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          className: 'content-inner__text'
        }, childItem.value))));
      }));
    }));
  };

  return AtGrid;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
};
AtGrid.propTypes = {
  mode: propTypes.string,
  onClick: propTypes.func,
  hasBorder: propTypes.bool,
  columnNum: propTypes.number,
  data: propTypes.arrayOf(propTypes.shape({
    image: propTypes.string,
    value: propTypes.string,
    iconInfo: propTypes.shape({
      size: propTypes.number,
      value: propTypes.string,
      color: propTypes.string,
      prefixClass: propTypes.string,
      customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
      className: propTypes.oneOfType([propTypes.array, propTypes.string])
    })
  }))
};

var AtIcon =
/** @class */
function (_super) {
  __extends(AtIcon, _super);

  function AtIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtIcon.prototype.handleClick = function () {
    this.props.onClick && this.props.onClick(arguments);
  };

  AtIcon.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        prefixClass = _a.prefixClass,
        value = _a.value,
        size = _a.size,
        color = _a.color;
    var rootStyle = {
      fontSize: "" + pxTransform(parseInt(String(size)) * 2),
      color: color
    };
    var iconName = value ? prefixClass + "-" + value : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: classnames(prefixClass, iconName, className),
      style: mergeStyle(rootStyle, customStyle),
      onClick: this.handleClick.bind(this)
    });
  };

  return AtIcon;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24
};
AtIcon.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  prefixClass: propTypes.string,
  value: propTypes.string,
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onClick: propTypes.func
};

function getInputProps(props) {
  var actualProps = {
    type: props.type,
    maxLength: props.maxlength,
    disabled: props.disabled,
    password: false
  };

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number';
      actualProps.maxLength = 11;
      break;

    case 'password':
      actualProps.type = 'text';
      actualProps.password = true;
      break;
  }

  if (!props.disabled && !props.editable) {
    actualProps.disabled = true;
  }

  return actualProps;
}

var AtInput =
/** @class */
function (_super) {
  __extends(AtInput, _super);

  function AtInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this; // TODO: 有待考证是否为合理方式处理 #840


    _this.inputClearing = false;

    _this.handleInput = function (event) {
      return _this.props.onChange(event.detail.value, event);
    };

    _this.handleFocus = function (event) {
      if (typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(event.detail.value, event);
      }
    };

    _this.handleBlur = function (event) {
      if (typeof _this.props.onBlur === 'function') {
        _this.props.onBlur(event.detail.value, event);
      }

      if (event.type === 'blur' && !_this.inputClearing) {
        // fix # 583 AtInput 不触发 onChange 的问题
        _this.props.onChange(event.detail.value, event);
      } // 还原状态


      _this.inputClearing = false;
    };

    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event.detail.value, event);
      }
    };

    _this.handleClick = function (event) {
      if (!_this.props.editable && typeof _this.props.onClick === 'function') {
        _this.props.onClick(event);
      }
    };

    _this.handleClearValue = function (event) {
      _this.inputClearing = true;

      _this.props.onChange('', event);
    };

    _this.handleKeyboardHeightChange = function (event) {
      if (typeof _this.props.onKeyboardHeightChange === 'function') {
        _this.props.onKeyboardHeightChange(event);
      }
    };

    _this.handleErrorClick = function (event) {
      if (typeof _this.props.onErrorClick === 'function') {
        _this.props.onErrorClick(event);
      }
    };

    return _this;
  }

  AtInput.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        name = _a.name,
        cursorSpacing = _a.cursorSpacing,
        confirmType = _a.confirmType,
        cursor = _a.cursor,
        selectionStart = _a.selectionStart,
        selectionEnd = _a.selectionEnd,
        adjustPosition = _a.adjustPosition,
        border = _a.border,
        title = _a.title,
        error = _a.error,
        clear = _a.clear,
        placeholder = _a.placeholder,
        placeholderStyle = _a.placeholderStyle,
        placeholderClass = _a.placeholderClass,
        autoFocus = _a.autoFocus,
        focus = _a.focus,
        value = _a.value,
        required = _a.required;

    var _b = getInputProps(this.props),
        type = _b.type,
        maxlength = _b.maxlength,
        disabled = _b.disabled,
        password = _b.password;

    var rootCls = classnames('at-input', {
      'at-input--without-border': !border
    }, className);
    var containerCls = classnames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled
    });
    var overlayCls = classnames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    });
    var placeholderCls = classnames('placeholder', placeholderClass);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: containerCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: overlayCls,
      onClick: this.handleClick
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      className: "at-input__title " + (required && 'at-input__title--required'),
      for: name
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      className: 'at-input__input',
      id: name,
      name: name,
      type: type,
      password: password,
      placeholderStyle: placeholderStyle,
      placeholderClass: placeholderCls,
      placeholder: placeholder,
      cursorSpacing: cursorSpacing,
      maxlength: maxlength,
      autoFocus: autoFocus,
      focus: focus,
      value: value,
      confirmType: confirmType,
      cursor: cursor,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      adjustPosition: adjustPosition,
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      onKeyboardHeightChange: this.handleKeyboardHeightChange
    }), clear && value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-input__icon',
      onTouchEnd: this.handleClearValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-close-circle at-input__icon-close'
    })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-input__icon',
      onTouchStart: this.handleErrorClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-alert-circle at-input__icon-alert'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-input__children'
    }, this.props.children)));
  };

  return AtInput;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: 'done',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  required: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtInput.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array]),
  customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  name: propTypes.string,
  placeholder: propTypes.string,
  placeholderStyle: propTypes.string,
  placeholderClass: propTypes.string,
  title: propTypes.string,
  confirmType: propTypes.string,
  cursor: propTypes.oneOfType([propTypes.string, propTypes.number]),
  selectionStart: propTypes.oneOfType([propTypes.string, propTypes.number]),
  selectionEnd: propTypes.oneOfType([propTypes.string, propTypes.number]),
  adjustPosition: propTypes.bool,
  cursorSpacing: propTypes.oneOfType([propTypes.string, propTypes.number]),
  maxlength: propTypes.oneOfType([propTypes.string, propTypes.number]),
  type: propTypes.string,
  disabled: propTypes.bool,
  border: propTypes.bool,
  editable: propTypes.bool,
  error: propTypes.bool,
  clear: propTypes.bool,
  autoFocus: propTypes.bool,
  focus: propTypes.bool,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onConfirm: propTypes.func,
  onErrorClick: propTypes.func,
  onClick: propTypes.func,
  required: propTypes.bool
};
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
var isArray_1 = isArray;
/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _baseToString = baseToString;
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString; // TODO: Check all types
// 实现两数相加并保留小数点后最短尾数

function addNum(num1, num2) {
  var sq1, sq2;

  try {
    sq1 = toString_1(num1).split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  }

  try {
    sq2 = toString_1(num2).split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  }

  var m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
} // 格式化数字，处理01变成1,并且不处理1. 这种情况


function parseValue(num) {
  if (num === '') return '0';
  var numStr = toString_1(num);

  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return toString_1(parseFloat(num));
  }

  return toString_1(num);
}

var AtInputNumber =
/** @class */
function (_super) {
  __extends(AtInputNumber, _super);

  function AtInputNumber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleValue = function (value) {
      var _a = _this.props,
          _b = _a.max,
          max = _b === void 0 ? 100 : _b,
          _c = _a.min,
          min = _c === void 0 ? 0 : _c;
      var resultValue = value === '' ? min : value; // 此处不能使用 Math.max，会是字符串变数字，并丢失 .

      if (resultValue > max) {
        resultValue = max;

        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }

      if (resultValue < min) {
        resultValue = min;

        _this.handleError({
          type: 'LOW',
          errorValue: resultValue
        });
      }

      if (resultValue && !Number(resultValue)) {
        resultValue = parseFloat(String(resultValue)) || min;

        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }

      resultValue = parseValue(String(resultValue));
      return resultValue;
    };

    _this.handleInput = function (e) {
      var value = e.target.value;
      var disabled = _this.props.disabled;
      if (disabled) return '';

      var newValue = _this.handleValue(value);

      _this.props.onChange(Number(newValue), e);

      return newValue;
    };

    _this.handleBlur = function (event) {
      return _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.handleError = function (errorValue) {
      if (!_this.props.onErrorInput) {
        return;
      }

      _this.props.onErrorInput(errorValue);
    };

    return _this;
  }

  AtInputNumber.prototype.handleClick = function (clickType, e) {
    var _a = this.props,
        disabled = _a.disabled,
        value = _a.value,
        _b = _a.min,
        min = _b === void 0 ? 0 : _b,
        _c = _a.max,
        max = _c === void 0 ? 100 : _c,
        _d = _a.step,
        step = _d === void 0 ? 1 : _d;
    var lowThanMin = clickType === 'minus' && value <= min;
    var overThanMax = clickType === 'plus' && value >= max;

    if (lowThanMin || overThanMax || disabled) {
      var deltaValue_1 = clickType === 'minus' ? -step : step;
      var errorValue = addNum(Number(value), deltaValue_1);

      if (disabled) {
        this.handleError({
          type: 'DISABLED',
          errorValue: errorValue
        });
      } else {
        this.handleError({
          type: lowThanMin ? 'LOW' : 'OVER',
          errorValue: errorValue
        });
      }

      return;
    }

    var deltaValue = clickType === 'minus' ? -step : step;
    var newValue = addNum(Number(value), deltaValue);
    newValue = Number(this.handleValue(newValue));
    this.props.onChange(newValue, e);
  };

  AtInputNumber.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        width = _a.width,
        disabled = _a.disabled,
        value = _a.value,
        type = _a.type,
        _b = _a.min,
        min = _b === void 0 ? 0 : _b,
        _c = _a.max,
        max = _c === void 0 ? 100 : _c,
        size = _a.size,
        disabledInput = _a.disabledInput;
    var inputStyle = {
      width: width ? "" + pxTransform(width) : ''
    };
    var inputValue = Number(this.handleValue(value));
    var rootCls = classnames('at-input-number', {
      'at-input-number--lg': size === 'large'
    }, className);
    var minusBtnCls = classnames('at-input-number__btn', {
      'at-input-number--disabled': inputValue <= min || disabled
    });
    var plusBtnCls = classnames('at-input-number__btn', {
      'at-input-number--disabled': inputValue >= max || disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: minusBtnCls,
      onClick: this.handleClick.bind(this, 'minus')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-subtract at-input-number__btn-subtract'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      className: 'at-input-number__input',
      style: inputStyle,
      type: type,
      value: String(inputValue),
      disabled: disabledInput || disabled,
      onInput: this.handleInput,
      onBlur: this.handleBlur
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: plusBtnCls,
      onClick: this.handleClick.bind(this, 'plus')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-add at-input-number__btn-add'
    })));
  };

  return AtInputNumber;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtInputNumber.defaultProps = {
  customStyle: '',
  className: '',
  disabled: false,
  disabledInput: false,
  value: 1,
  type: 'number',
  width: 0,
  min: 0,
  max: 100,
  step: 1,
  size: 'normal',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtInputNumber.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.oneOf(['number', 'digit']),
  disabled: propTypes.bool,
  width: propTypes.number,
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  size: propTypes.oneOf(['normal', 'large']),
  disabledInput: propTypes.bool,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onErrorInput: propTypes.func
};

var AtModalAction =
/** @class */
function (_super) {
  __extends(AtModalAction, _super);

  function AtModalAction() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtModalAction.prototype.render = function () {
    var rootClass = classnames('at-modal__footer', {
      'at-modal__footer--simple': this.props.isSimple
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-modal__action'
    }, this.props.children));
  };

  return AtModalAction;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtModalAction.defaultProps = {
  isSimple: false
};
AtModalAction.propTypes = {
  isSimple: propTypes.bool
};

var AtModalContent =
/** @class */
function (_super) {
  __extends(AtModalContent, _super);

  function AtModalContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtModalContent.prototype.render = function () {
    var rootClass = classnames('at-modal__content', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
      scrollY: true,
      className: rootClass
    }, this.props.children);
  };

  return AtModalContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtModalHeader =
/** @class */
function (_super) {
  __extends(AtModalHeader, _super);

  function AtModalHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtModalHeader.prototype.render = function () {
    var rootClass = classnames('at-modal__header', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, this.props.children);
  };

  return AtModalHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtModal =
/** @class */
function (_super) {
  __extends(AtModal, _super);

  function AtModal(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClickOverlay = function () {
      if (_this.props.closeOnClickOverlay) {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      }
    };

    _this.handleClose = function (event) {
      if (typeof _this.props.onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        _this.props.onClose(event);
      }
    };

    _this.handleCancel = function (event) {
      if (typeof _this.props.onCancel === 'function') {
        _this.props.onCancel(event);
      }
    };

    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event);
      }
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  AtModal.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened);
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  };

  AtModal.prototype.render = function () {
    var _a = this.state,
        _isOpened = _a._isOpened,
        isWEB = _a.isWEB;
    var _b = this.props,
        title = _b.title,
        content = _b.content,
        cancelText = _b.cancelText,
        confirmText = _b.confirmText;
    var rootClass = classnames('at-modal', {
      'at-modal--active': _isOpened
    }, this.props.className);

    if (title || content) {
      var isRenderAction = cancelText || confirmText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: rootClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        onClick: this.handleClickOverlay,
        className: 'at-modal__overlay'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-modal__container'
      }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], null, title)), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'content-simple'
      }, isWEB ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"] // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      , {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        dangerouslySetInnerHTML: {
          __html: content.replace(/\n/g, '<br/>')
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], null, content))), isRenderAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalAction, {
        isSimple: true
      }, cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.handleCancel
      }, cancelText), confirmText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.handleConfirm
      }, confirmText))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      onTouchMove: this.handleTouchMove,
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-modal__overlay',
      onClick: this.handleClickOverlay
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-modal__container'
    }, this.props.children));
  };

  return AtModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true
};
AtModal.propTypes = {
  title: propTypes.string,
  isOpened: propTypes.bool,
  onCancel: propTypes.func,
  onConfirm: propTypes.func,
  onClose: propTypes.func,
  content: propTypes.string,
  closeOnClickOverlay: propTypes.bool,
  cancelText: propTypes.string,
  confirmText: propTypes.string
};

var AtNavBar =
/** @class */
function (_super) {
  __extends(AtNavBar, _super);

  function AtNavBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtNavBar.prototype.handleClickLeftView = function (event) {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
  };

  AtNavBar.prototype.handleClickSt = function (event) {
    this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
  };

  AtNavBar.prototype.handleClickNd = function (event) {
    this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
  };

  AtNavBar.prototype.render = function () {
    var _a, _b, _c;

    var _d = this.props,
        customStyle = _d.customStyle,
        className = _d.className,
        color = _d.color,
        fixed = _d.fixed,
        border = _d.border,
        leftIconType = _d.leftIconType,
        leftText = _d.leftText,
        title = _d.title,
        rightFirstIconType = _d.rightFirstIconType,
        rightSecondIconType = _d.rightSecondIconType;
    var linkStyle = {
      color: color
    };
    var defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24
    };
    var leftIconInfo = leftIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), leftIconType) : _assign(_assign({}, defaultIconInfo), {
      value: leftIconType
    });
    var leftIconClass = classnames(leftIconInfo.prefixClass, (_a = {}, _a[leftIconInfo.prefixClass + "-" + leftIconInfo.value] = leftIconInfo.value, _a), leftIconInfo.className);
    var rightFirstIconInfo = rightFirstIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightFirstIconType) : _assign(_assign({}, defaultIconInfo), {
      value: rightFirstIconType
    });
    var rightFirstIconClass = classnames(rightFirstIconInfo.prefixClass, (_b = {}, _b[rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value] = rightFirstIconInfo.value, _b), rightFirstIconInfo.className);
    var rightSecondIconInfo = rightSecondIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightSecondIconType) : _assign(_assign({}, defaultIconInfo), {
      value: rightSecondIconType
    });
    var rightSecondIconClass = classnames(rightSecondIconInfo.prefixClass, (_c = {}, _c[rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value] = rightSecondIconInfo.value, _c), rightSecondIconInfo.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-nav-bar': true,
        'at-nav-bar--fixed': fixed,
        'at-nav-bar--no-border': !border
      }, className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-nav-bar__left-view',
      onClick: this.handleClickLeftView.bind(this),
      style: linkStyle
    }, leftIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: leftIconClass,
      style: mergeStyle({
        color: leftIconInfo.color,
        fontSize: "" + pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
      }, leftIconInfo.customStyle)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-nav-bar__text'
    }, leftText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-nav-bar__title'
    }, title || this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-nav-bar__right-view'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightSecondIconType
      }),
      style: linkStyle,
      onClick: this.handleClickNd.bind(this)
    }, rightSecondIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: rightSecondIconClass,
      style: mergeStyle({
        color: rightSecondIconInfo.color,
        fontSize: "" + pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
      }, rightSecondIconInfo.customStyle)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightFirstIconType
      }),
      style: linkStyle,
      onClick: this.handleClickSt.bind(this)
    }, rightFirstIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: rightFirstIconClass,
      style: mergeStyle({
        color: rightFirstIconInfo.color,
        fontSize: "" + pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
      }, rightFirstIconInfo.customStyle)
    }))));
  };

  return AtNavBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: ''
};
AtNavBar.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  fixed: propTypes.bool,
  border: propTypes.bool,
  color: propTypes.string,
  leftIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
  leftText: propTypes.string,
  title: propTypes.string,
  rightFirstIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
  rightSecondIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
  onClickLeftIcon: propTypes.func,
  onClickRgIconSt: propTypes.func,
  onClickRgIconNd: propTypes.func
};

var AtNoticebar =
/** @class */
function (_super) {
  __extends(AtNoticebar, _super);

  function AtNoticebar(props) {
    var _this = _super.call(this, props) || this;

    var animElemId = "J_" + Math.ceil(Math.random() * 10e5).toString(36);
    _this.state = {
      show: true,
      animElemId: animElemId,
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  AtNoticebar.prototype.onClose = function (event) {
    this.setState({
      show: false
    });
    this.props.onClose && this.props.onClose(event);
  };

  AtNoticebar.prototype.onGotoMore = function (event) {
    this.props.onGotoMore && this.props.onGotoMore(event);
  };

  AtNoticebar.prototype.UNSAFE_componentWillReceiveProps = function () {
    if (!this.timeout) {
      this.interval && clearInterval(this.interval);
      this.initAnimation();
    }
  };

  AtNoticebar.prototype.componentDidMount = function () {
    if (!this.props.marquee) return;
    this.initAnimation();
  };

  AtNoticebar.prototype.initAnimation = function () {
    var _this = this;

    var _a = this.state,
        isWEAPP = _a.isWEAPP,
        isALIPAY = _a.isALIPAY;
    this.timeout = setTimeout(function () {
      _this.timeout = null;

      if (_this.state.isWEB) {
        var _a = _this.props.speed,
            speed = _a === void 0 ? 100 : _a;
        var elem = document.querySelector("." + _this.state.animElemId);
        if (!elem) return;
        var width = elem.getBoundingClientRect().width;
        var dura = width / +speed;

        _this.setState({
          dura: dura
        });
      } else if (isWEAPP || isALIPAY) {
        var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createSelectorQuery();
        query.select("." + _this.state.animElemId).boundingClientRect().exec(function (res) {
          var queryRes = res[0];
          if (!queryRes) return;
          var width = queryRes.width;
          var _a = _this.props.speed,
              speed = _a === void 0 ? 100 : _a;
          var dura = width / +speed;
          var animation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: dura * 1000,
            timingFunction: 'linear'
          });
          var resetAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: 0,
            timingFunction: 'linear'
          });
          var resetOpacityAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: 0,
            timingFunction: 'linear'
          });

          var animBody = function animBody() {
            resetOpacityAnimation.opacity(0).step();

            _this.setState({
              animationData: resetOpacityAnimation.export()
            });

            setTimeout(function () {
              resetAnimation.translateX(0).step();

              _this.setState({
                animationData: resetAnimation.export()
              });
            }, 300);
            setTimeout(function () {
              resetOpacityAnimation.opacity(1).step();

              _this.setState({
                animationData: resetOpacityAnimation.export()
              });
            }, 600);
            setTimeout(function () {
              animation.translateX(-width).step();

              _this.setState({
                animationData: animation.export()
              });
            }, 900);
          };

          animBody();
          _this.interval = setInterval(animBody, dura * 1000 + 1000);
        });
      }
    }, 1000);
  };

  AtNoticebar.prototype.render = function () {
    var _a = this.props,
        single = _a.single,
        icon = _a.icon,
        marquee = _a.marquee,
        customStyle = _a.customStyle,
        className = _a.className,
        _b = _a.moreText,
        moreText = _b === void 0 ? '查看详情' : _b;
    var _c = this.props,
        showMore = _c.showMore,
        close = _c.close;
    var _d = this.state,
        dura = _d.dura,
        show = _d.show,
        animElemId = _d.animElemId,
        animationData = _d.animationData,
        isWEAPP = _d.isWEAPP,
        isALIPAY = _d.isALIPAY;
    var rootClassName = ['at-noticebar'];
    if (!single) showMore = false;
    var style = {};
    var innerClassName = ['at-noticebar__content-inner'];

    if (marquee) {
      close = false;
      style['animation-duration'] = dura + "s";
      innerClassName.push(animElemId);
    }

    var classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
      'at-noticebar--single': !marquee && single
    };
    var iconClass = ['at-icon'];
    if (icon) iconClass.push("at-icon-" + icon);
    return show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, classObject, className),
      style: customStyle
    }, close && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-noticebar__close',
      onClick: this.onClose.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-close'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-noticebar__content'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-noticebar__content-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: classnames(iconClass, iconClass)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-noticebar__content-text'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      id: animElemId,
      animation: animationData,
      className: classnames(innerClassName),
      style: style
    }, this.props.children))), showMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-noticebar__more',
      onClick: this.onGotoMore.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'text'
    }, moreText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-noticebar__more-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-chevron-right'
    }))));
  };

  return AtNoticebar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {}
};
AtNoticebar.propTypes = {
  close: propTypes.bool,
  single: propTypes.bool,
  marquee: propTypes.bool,
  speed: propTypes.number,
  moreText: propTypes.string,
  showMore: propTypes.bool,
  icon: propTypes.string,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  onClose: propTypes.func,
  onGotoMore: propTypes.func
};
var MIN_MAXPAGE = 1;

var getMaxPage = function getMaxPage(maxPage) {
  if (maxPage === void 0) {
    maxPage = 0;
  }

  if (maxPage <= 0) return MIN_MAXPAGE;
  return maxPage;
};

var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (_val, index) {
    return index + 1;
  });
  return range;
};

var AtPagination =
/** @class */
function (_super) {
  __extends(AtPagination, _super);

  function AtPagination(props) {
    var _this = _super.call(this, props) || this;

    var _a = _this.props,
        current = _a.current,
        _b = _a.pageSize,
        pageSize = _b === void 0 ? 20 : _b,
        total = _a.total;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    _this.state = {
      currentPage: current || 1,
      maxPage: maxPage,
      pickerRange: createPickerRange(maxPage)
    };
    return _this;
  }

  AtPagination.prototype.onPrev = function () {
    var currentPage = this.state.currentPage;
    var originCur = currentPage;
    currentPage -= 1;
    currentPage = Math.max(1, currentPage);
    if (originCur === currentPage) return;
    this.props.onPageChange && this.props.onPageChange({
      type: 'prev',
      current: currentPage
    });
    this.setState({
      currentPage: currentPage
    });
  };

  AtPagination.prototype.onNext = function () {
    var currentPage = this.state.currentPage;
    var originCur = currentPage;
    var maxPage = this.state.maxPage;
    currentPage += 1;
    currentPage = Math.min(maxPage, currentPage);
    if (originCur === currentPage) return;
    this.props.onPageChange && this.props.onPageChange({
      type: 'next',
      current: currentPage
    });
    this.setState({
      currentPage: currentPage
    });
  };

  AtPagination.prototype.UNSAFE_componentWillReceiveProps = function (props) {
    var total = props.total,
        _a = props.pageSize,
        pageSize = _a === void 0 ? 20 : _a,
        current = props.current;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));

    if (maxPage !== this.state.maxPage) {
      this.setState({
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      });
    }

    if (typeof current === 'number' && current !== this.state.currentPage) {
      this.setState({
        currentPage: current
      });
    }
  }; // onPickerChange (evt) {
  //   const { value } = evt.detail
  //   const current = +value + 1
  //   if (current === this.state.currentPage) return
  //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
  //   this.setState({
  //     currentPage: current,
  //   })
  // }


  AtPagination.prototype.render = function () {
    var _a = this.props,
        icon = _a.icon,
        // pickerSelect,
    customStyle = _a.customStyle;
    var _b = this.state,
        currentPage = _b.currentPage,
        maxPage = _b.maxPage // pickerRange,
    ;
    var rootClassName = ['at-pagination'];
    var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
    var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
    var classObject = {
      'at-pagination--icon': icon
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-pagination__btn-prev'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onPrev.bind(this),
      size: 'small',
      disabled: prevDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-chevron-left'
    })), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onPrev.bind(this),
      size: 'small',
      disabled: prevDisabled
    }, "\u4E0A\u4E00\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-pagination__number'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-pagination__number-current'
    }, currentPage), "/", maxPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-pagination__btn-next'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onNext.bind(this),
      size: 'small',
      disabled: nextDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-chevron-right'
    })), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onNext.bind(this),
      size: 'small',
      disabled: nextDisabled
    }, "\u4E0B\u4E00\u9875")));
  };

  return AtPagination;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  customStyle: {}
};
AtPagination.propTypes = {
  current: propTypes.number,
  total: propTypes.number,
  pageSize: propTypes.number,
  icon: propTypes.bool,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  onPageChange: propTypes.func
};

var AtProgress =
/** @class */
function (_super) {
  __extends(AtProgress, _super);

  function AtProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtProgress.prototype.render = function () {
    var _a;

    var color = this.props.color;
    var percent = this.props.percent;
    var _b = this.props,
        strokeWidth = _b.strokeWidth,
        status = _b.status,
        isHidePercent = _b.isHidePercent;

    if (typeof percent !== 'number') {
      percent = 0;
    }

    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }

    var rootClass = classnames('at-progress', (_a = {}, _a["at-progress--" + status] = !!status, _a), this.props.className);
    var iconClass = classnames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success'
    });
    var progressStyle = {
      width: percent && +percent + "%",
      height: strokeWidth && +strokeWidth + "px",
      backgroundColor: color
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-progress__outer'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-progress__outer-inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-progress__outer-inner-background',
      style: progressStyle
    }))), !isHidePercent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-progress__content'
    }, !status || status === 'progress' ? percent + "%" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: iconClass
    })));
  };

  return AtProgress;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtProgress.propTypes = {
  color: propTypes.string,
  status: propTypes.string,
  percent: propTypes.number,
  strokeWidth: propTypes.number,
  isHidePercent: propTypes.bool
};

var AtRadio =
/** @class */
function (_super) {
  __extends(AtRadio, _super);

  function AtRadio() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtRadio.prototype.handleClick = function (option, event) {
    if (option.disabled) return;
    this.props.onClick(option.value, event);
  };

  AtRadio.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        options = _a.options,
        value = _a.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-radio', className),
      style: customStyle
    }, options.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: option.value,
        onClick: _this.handleClick.bind(_this, option),
        className: classnames({
          'at-radio__option': true,
          'at-radio__option--disabled': option.disabled
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-radio__option-wrap'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-radio__option-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-radio__title'
      }, option.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames({
          'at-radio__icon': true,
          'at-radio__icon--checked': value === option.value
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-icon at-icon-check'
      }))), option.desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-radio__desc'
      }, option.desc)));
    }));
  };

  return AtRadio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtRadio.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  value: propTypes.string,
  options: propTypes.array,
  onClick: propTypes.func
};

var AtRate =
/** @class */
function (_super) {
  __extends(AtRate, _super);

  function AtRate() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtRate.prototype.handleClick = function (event) {
    this.props.onChange && this.props.onChange(event);
  };

  AtRate.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        _b = _a.value,
        value = _b === void 0 ? 0 : _b,
        _c = _a.max,
        max = _c === void 0 ? 5 : _c,
        size = _a.size,
        _d = _a.margin,
        margin = _d === void 0 ? 5 : _d;
    var iconStyle = {
      marginRight: pxTransform(margin)
    };
    var starIconStyle = {
      fontSize: size ? size + "px" : ''
    }; // 生成星星颜色 className 数组，方便在jsx中直接map

    var classNameArr = [];
    var floorValue = Math.floor(value);
    var ceilValue = Math.ceil(value);

    for (var i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('at-rate__icon at-rate__icon--on');
      } else if (ceilValue - 1 === i) {
        classNameArr.push('at-rate__icon at-rate__icon--half');
      } else {
        classNameArr.push('at-rate__icon at-rate__icon--off');
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-rate', className),
      style: customStyle
    }, classNameArr.map(function (cls, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: cls,
        key: "at-rate-star-" + i,
        style: iconStyle,
        onClick: _this.handleClick.bind(_this, i + 1)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-icon at-icon-star-2',
        style: starIconStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-rate__left'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-icon at-icon-star-2',
        style: starIconStyle
      })));
    }));
  };

  return AtRate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtRate.defaultProps = {
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5
};
AtRate.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  value: propTypes.number,
  max: propTypes.number,
  margin: propTypes.number,
  onChange: propTypes.func
};

var AtSegmentedControl =
/** @class */
function (_super) {
  __extends(AtSegmentedControl, _super);

  function AtSegmentedControl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtSegmentedControl.prototype.handleClick = function (index, event) {
    if (this.props.disabled) return;
    this.props.onClick(index, event);
  };

  AtSegmentedControl.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        _b = _a.customStyle,
        customStyle = _b === void 0 ? '' : _b,
        className = _a.className,
        disabled = _a.disabled,
        values = _a.values,
        selectedColor = _a.selectedColor,
        current = _a.current,
        color = _a.color,
        _c = _a.fontSize,
        fontSize = _c === void 0 ? 28 : _c;
    var rootStyle = {
      borderColor: selectedColor
    };
    var itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color
    };
    var selectedItemStyle = {
      color: color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor
    };
    var rootCls = classnames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: mergeStyle(rootStyle, customStyle)
    }, values.map(function (value, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i
        }),
        style: current === i ? selectedItemStyle : itemStyle,
        key: value,
        onClick: _this.handleClick.bind(_this, i)
      }, value);
    }));
  };

  return AtSegmentedControl;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 28,
  disabled: false,
  selectedColor: '',
  values: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtSegmentedControl.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  current: propTypes.number,
  color: propTypes.string,
  fontSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  values: propTypes.array,
  onClick: propTypes.func
};

var AtSwitch =
/** @class */
function (_super) {
  __extends(AtSwitch, _super);

  function AtSwitch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleChange = function (event) {
      var _a = event.detail,
          value = _a.value,
          checked = _a.checked;
      var state = typeof value === 'undefined' ? checked : value;
      _this.props.onChange && _this.props.onChange(state);
    };

    return _this;
  }

  AtSwitch.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        disabled = _a.disabled,
        border = _a.border,
        title = _a.title,
        checked = _a.checked,
        color = _a.color;
    var rootCls = classnames('at-switch', {
      'at-switch--without-border': !border
    }, className);
    var containerCls = classnames('at-switch__container', {
      'at-switch--disabled': disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-switch__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: containerCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-switch__mask'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      className: 'at-switch__switch',
      checked: checked,
      color: color,
      onChange: this.handleChange
    })));
  };

  return AtSwitch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false
};
AtSwitch.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  title: propTypes.string,
  color: propTypes.string,
  checked: propTypes.bool,
  border: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func
};

var AtTabBar =
/** @class */
function (_super) {
  __extends(AtTabBar, _super);

  function AtTabBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }
  // componentDidMount () {
  //   const curEnv = Taro.getEnv()
  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }


  AtTabBar.prototype.handleClick = function (index, event) {
    this.props.onClick(index, event);
  };

  AtTabBar.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        _b = _a.customStyle,
        customStyle = _b === void 0 ? '' : _b,
        className = _a.className,
        fixed = _a.fixed,
        backgroundColor = _a.backgroundColor,
        tabList = _a.tabList,
        current = _a.current,
        color = _a.color,
        iconSize = _a.iconSize,
        fontSize = _a.fontSize,
        selectedColor = _a.selectedColor; // const { isIPhoneX } = this.state

    var defaultStyle = {
      color: color || ''
    };
    var selectedStyle = {
      color: selectedColor || ''
    };
    var titleStyle = {
      fontSize: fontSize ? fontSize + "px" : ''
    };
    var rootStyle = {
      backgroundColor: backgroundColor || ''
    };
    var imgStyle = {
      width: iconSize + "px",
      height: iconSize + "px"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed // 'at-tab-bar--ipx': isIPhoneX

      }, className),
      style: mergeStyle(rootStyle, customStyle)
    }, tabList.map(function (item, i) {
      var _a;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames('at-tab-bar__item', {
          'at-tab-bar__item--active': current === i
        }),
        style: current === i ? selectedStyle : defaultStyle,
        key: item.title,
        onClick: _this.handleClick.bind(_this, i)
      }, item.iconType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: !!item.dot,
        value: item.text,
        maxValue: Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-tab-bar__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: classnames("" + (item.iconPrefixClass || 'at-icon'), (_a = {}, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.selectedIconType] = current === i && item.selectedIconType, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.iconType] = !(current === i && item.selectedIconType), _a)),
        style: {
          color: current === i ? selectedColor : color,
          fontSize: iconSize ? iconSize + "px" : ''
        }
      }))) : null, item.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: !!item.dot,
        value: item.text,
        maxValue: Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-tab-bar__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current !== i
        }),
        mode: 'widthFix',
        src: item.selectedImage || item.image,
        style: imgStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current === i
        }),
        mode: 'widthFix',
        src: item.image,
        style: imgStyle
      }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: item.iconType || item.image ? false : !!item.dot,
        value: item.iconType || item.image ? '' : item.text,
        maxValue: item.iconType || item.image ? 0 : Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-tab-bar__title',
        style: titleStyle
      }, item.title))));
    }));
  };

  return AtTabBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  current: 0,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtTabBar.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  fixed: propTypes.bool,
  backgroundColor: propTypes.string,
  current: propTypes.number,
  iconSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  color: propTypes.string,
  selectedColor: propTypes.string,
  tabList: propTypes.array,
  onClick: propTypes.func
};
var ENV$1 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;

var AtTabs =
/** @class */
function (_super) {
  __extends(AtTabs, _super);

  function AtTabs(props) {
    var _this = _super.call(this, props) || this;

    _this.updateState = function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV$1) {
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);

              _this.setState({
                _scrollIntoView: "tab" + _this._tabId + index
              });

              break;
            }

          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB:
            {
              var index = Math.max(idx - 1, 0);
              var prevTabItem = _this.tabHeaderRef.childNodes[index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }

          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    };

    _this.state = {
      _scrollLeft: 0,
      _scrollTop: 0,
      _scrollIntoView: ''
    };
    _this._tabId = isTest() ? 'tabs-AOTU2018' : uuid(); // 触摸时的原点

    _this._touchDot = 0; // 定时器

    _this._timer = null; // 滑动时间间隔

    _this._interval = 0; // 是否已经在滑动

    _this._isMoving = false;
    return _this;
  }

  AtTabs.prototype.handleClick = function (index, event) {
    this.props.onClick(index, event);
  };

  AtTabs.prototype.handleTouchStart = function (e) {
    var _this = this;

    var _a = this.props,
        swipeable = _a.swipeable,
        tabDirection = _a.tabDirection;
    if (!swipeable || tabDirection === 'vertical') return; // 获取触摸时的原点

    this._touchDot = e.touches[0].pageX; // 使用js计时器记录时间

    this._timer = setInterval(function () {
      _this._interval++;
    }, 100);
  };

  AtTabs.prototype.handleTouchMove = function (e) {
    var _a = this.props,
        swipeable = _a.swipeable,
        tabDirection = _a.tabDirection,
        current = _a.current,
        tabList = _a.tabList;
    if (!swipeable || tabDirection === 'vertical') return;
    var touchMove = e.touches[0].pageX;
    var moveDistance = touchMove - this._touchDot;
    var maxIndex = tabList.length;

    if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true;
        this.handleClick(current + 1, e); // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true;
        this.handleClick(current - 1, e);
      }
    }
  };

  AtTabs.prototype.handleTouchEnd = function () {
    var _a = this.props,
        swipeable = _a.swipeable,
        tabDirection = _a.tabDirection;
    if (!swipeable || tabDirection === 'vertical') return;
    clearInterval(this._timer);
    this._interval = 0;
    this._isMoving = false;
  };

  AtTabs.prototype.getTabHeaderRef = function () {
    if (ENV$1 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId);
    }
  };

  AtTabs.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef();
    }

    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current);
    }
  };

  AtTabs.prototype.componentDidMount = function () {
    this.getTabHeaderRef();
    this.updateState(this.props.current);
  };

  AtTabs.prototype.componentWillUnmount = function () {
    this.tabHeaderRef = null;
  };

  AtTabs.prototype.render = function () {
    var _a;

    var _this = this;

    var _b = this.props,
        _c = _b.customStyle,
        customStyle = _c === void 0 ? '' : _c,
        className = _b.className,
        height = _b.height,
        tabDirection = _b.tabDirection,
        animated = _b.animated,
        tabList = _b.tabList,
        scroll = _b.scroll,
        current = _b.current;
    var _d = this.state,
        _scrollLeft = _d._scrollLeft,
        _scrollTop = _d._scrollTop,
        _scrollIntoView = _d._scrollIntoView;
    var heightStyle = {
      height: height
    };
    var underlineStyle = {
      height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
      width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
    };
    var bodyStyle = {};
    var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";

    if (tabDirection === 'horizontal') {
      transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
    }

    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    });

    if (!animated) {
      bodyStyle.transition = 'unset';
    }

    var tabItems = tabList.map(function (item, idx) {
      var itemCls = classnames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: itemCls,
        id: "tab" + _this._tabId + idx,
        key: item.title,
        onClick: _this.handleClick.bind(_this, idx)
      }, item.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-tabs__item-underline'
      }));
    });
    var rootCls = classnames((_a = {
      'at-tabs': true,
      'at-tabs--scroll': scroll
    }, _a["at-tabs--" + tabDirection] = true, _a["at-tabs--" + ENV$1] = true, _a), className);
    var scrollX = tabDirection === 'horizontal';
    var scrollY = tabDirection === 'vertical';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: mergeStyle(heightStyle, customStyle)
    }, scroll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
      id: this._tabId,
      className: 'at-tabs__header',
      style: heightStyle,
      scrollX: scrollX,
      scrollY: scrollY,
      scrollWithAnimation: true,
      scrollLeft: _scrollLeft,
      scrollTop: _scrollTop,
      scrollIntoView: _scrollIntoView
    }, tabItems) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      id: this._tabId,
      className: 'at-tabs__header'
    }, tabItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-tabs__body',
      onTouchStart: this.handleTouchStart.bind(this),
      onTouchEnd: this.handleTouchEnd.bind(this),
      onTouchMove: this.handleTouchMove.bind(this),
      style: mergeStyle(bodyStyle, heightStyle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-tabs__underline',
      style: underlineStyle
    }), this.props.children));
  };

  return AtTabs;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTabs.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtTabs.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  height: propTypes.string,
  tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
  current: propTypes.number,
  swipeable: propTypes.bool,
  scroll: propTypes.bool,
  animated: propTypes.bool,
  tabList: propTypes.array,
  onClick: propTypes.func
};

var AtTabsPane =
/** @class */
function (_super) {
  __extends(AtTabsPane, _super);

  function AtTabsPane() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtTabsPane.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        tabDirection = _a.tabDirection,
        index = _a.index,
        current = _a.current;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current
      }, className),
      style: customStyle
    }, this.props.children);
  };

  return AtTabsPane;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTabsPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
};
AtTabsPane.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
  index: propTypes.number,
  current: propTypes.number
};
var SIZE_CLASS$2 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS$1 = {
  primary: 'primary'
};

var AtTag =
/** @class */
function (_super) {
  __extends(AtTag, _super);

  function AtTag() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtTag.prototype.onClick = function (event) {
    var _a = this.props,
        _b = _a.name,
        name = _b === void 0 ? '' : _b,
        _c = _a.active,
        active = _c === void 0 ? false : _c,
        disabled = _a.disabled,
        onClick = _a.onClick;

    if (!disabled) {
      typeof onClick === 'function' && onClick({
        name: name,
        active: active
      }, event);
    }
  };

  AtTag.prototype.render = function () {
    var _a;

    var _b = this.props,
        _c = _b.size,
        size = _c === void 0 ? 'normal' : _c,
        _d = _b.type,
        type = _d === void 0 ? '' : _d,
        _e = _b.circle,
        circle = _e === void 0 ? false : _e,
        _f = _b.disabled,
        disabled = _f === void 0 ? false : _f,
        _g = _b.active,
        active = _g === void 0 ? false : _g,
        customStyle = _b.customStyle;
    var rootClassName = ['at-tag'];
    var classObject = (_a = {}, _a["at-tag--" + SIZE_CLASS$2[size]] = SIZE_CLASS$2[size], _a["at-tag--" + type] = TYPE_CLASS$1[type], _a['at-tag--disabled'] = disabled, _a['at-tag--active'] = active, _a['at-tag--circle'] = circle, _a);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle,
      onClick: this.onClick.bind(this)
    }, this.props.children);
  };

  return AtTag;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {}
};
AtTag.propTypes = {
  size: propTypes.oneOf(['normal', 'small']),
  type: propTypes.oneOf(['', 'primary']),
  name: propTypes.string,
  circle: propTypes.bool,
  active: propTypes.bool,
  disabled: propTypes.bool,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  onClick: propTypes.func
};

function getMaxLength(maxLength, textOverflowForbidden) {
  if (!textOverflowForbidden) {
    return maxLength + 500;
  }

  return maxLength;
}

var ENV$2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

var AtTextarea =
/** @class */
function (_super) {
  __extends(AtTextarea, _super);

  function AtTextarea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleInput = function (event) {
      _this.props.onChange(event.target.value, event);
    };

    _this.handleFocus = function (event) {
      _this.props.onFocus && _this.props.onFocus(event);
    };

    _this.handleBlur = function (event) {
      _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };

    _this.handleLinechange = function (event) {
      _this.props.onLinechange && _this.props.onLinechange(event);
    };

    return _this;
  }

  AtTextarea.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        value = _a.value,
        cursorSpacing = _a.cursorSpacing,
        placeholder = _a.placeholder,
        placeholderStyle = _a.placeholderStyle,
        placeholderClass = _a.placeholderClass,
        _b = _a.maxLength,
        maxLength = _b === void 0 ? 200 : _b,
        count = _a.count,
        disabled = _a.disabled,
        autoFocus = _a.autoFocus,
        focus = _a.focus,
        showConfirmBar = _a.showConfirmBar,
        selectionStart = _a.selectionStart,
        selectionEnd = _a.selectionEnd,
        fixed = _a.fixed,
        _c = _a.textOverflowForbidden,
        textOverflowForbidden = _c === void 0 ? true : _c,
        height = _a.height;

    var _maxLength = parseInt(maxLength.toString());

    var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
    var textareaStyle = height ? "height:" + pxTransform(Number(height)) : '';
    var rootCls = classnames('at-textarea', "at-textarea--" + ENV$2, {
      'at-textarea--error': _maxLength < value.length
    }, className);
    var placeholderCls = classnames('placeholder', placeholderClass);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      className: 'at-textarea__textarea',
      style: textareaStyle,
      placeholderStyle: placeholderStyle,
      placeholderClass: placeholderCls,
      cursorSpacing: cursorSpacing,
      value: value,
      maxlength: actualMaxLength,
      placeholder: placeholder,
      disabled: disabled,
      autoFocus: autoFocus,
      focus: focus,
      showConfirmBar: showConfirmBar,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      fixed: fixed,
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm,
      onLineChange: this.handleLinechange
    }), count && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-textarea__counter'
    }, value.length, "/", _maxLength));
  };

  return AtTextarea;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTextarea.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxLength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  focus: false,
  showConfirmBar: false,
  selectionStart: -1,
  selectionEnd: -1,
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtTextarea.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  value: propTypes.string.isRequired,
  cursorSpacing: propTypes.number,
  maxLength: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholderClass: propTypes.string,
  placeholderStyle: propTypes.string,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  autoFocus: propTypes.bool,
  focus: propTypes.bool,
  showConfirmBar: propTypes.bool,
  selectionStart: propTypes.number,
  selectionEnd: propTypes.number,
  count: propTypes.bool,
  textOverflowForbidden: propTypes.bool,
  fixed: propTypes.bool,
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onLinechange: propTypes.func,
  onChange: propTypes.func.isRequired,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onConfirm: propTypes.func
};

var AtTimeline =
/** @class */
function (_super) {
  __extends(AtTimeline, _super);

  function AtTimeline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtTimeline.prototype.render = function () {
    var _a = this.props,
        pending = _a.pending,
        items = _a.items,
        customStyle = _a.customStyle;
    var rootClassName = ['at-timeline'];
    if (pending) rootClassName.push('at-timeline--pending');
    var rootClassObject = {
      'at-timeline--pending': pending
    };
    var itemElems = items.map(function (item, index) {
      var _a;

      var _b = item.title,
          title = _b === void 0 ? '' : _b,
          color = item.color,
          icon = item.icon,
          _c = item.content,
          content = _c === void 0 ? [] : _c;
      var iconClass = classnames((_a = {
        'at-icon': true
      }, _a["at-icon-" + icon] = icon, _a));
      var itemRootClassName = ['at-timeline-item'];
      if (color) itemRootClassName.push("at-timeline-item--" + color);
      var dotClass = [];

      if (icon) {
        dotClass.push('at-timeline-item__icon');
      } else {
        dotClass.push('at-timeline-item__dot');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames(itemRootClassName),
        key: "at-timeline-item-" + index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-timeline-item__tail'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames(dotClass)
      }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: iconClass
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-timeline-item__content'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-timeline-item__content-item'
      }, title), content.map(function (sub, subIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-timeline-item__content-item at-timeline-item__content--sub',
          key: subIndex
        }, sub);
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames(rootClassName, rootClassObject, this.props.className),
      style: customStyle
    }, itemElems);
  };

  return AtTimeline;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
};
AtTimeline.propTypes = {
  pending: propTypes.bool,
  items: propTypes.arrayOf(propTypes.object),
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string])
};
var error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGwtJREFUeAHtnUusndV1x7mAIYABG/MUYGzLBCUtFHcCtB3YZgISGaCodOQ4QGGSoJAgV5FiOTAALBowY6tFASoUmYyS0EoRYPEonUUKRETYKNhWEnCwFZvWEIzB/f3v/T773HPP2Wt/79da0v/uc85+rfVfa93vsff5zswpLpUwcPz48aUMvAKsTMpLKC8Ey0bKc3h9JjhjpOTlKUfBpyPlEV4fBAdGyv283gPeUzkzM/NnSpeSGZgpebzBDUciXITR1yW4NilXU54P6pTDTPYueBO8lZRvkjgf8tolJwOeIBmJIyGuoMs6sD7B8oxD1N18LxO+DHaqJGH+ULcCXZ7PE8TwXnKESBNC5ZeNLm2v3oWCacLs9CNM2F2eIBP4ISlu4uM7wM3gr0FfeTqObb8BL4EdJMv/ULqMMNBXx4+YGPeSpFhJyw0JdA0xRNE1zLMCyaKL/8HLoBOEpNCFtI4USox/AIPmA/tT0ZHldaBk0ZFFNwAGKYMLCJLiNDx9K/gG+Br4EnCZzsBfqPo5eAb8J8nyxfSm/asZTIKQGItwn44U3wdX1+TK/2WedxLsptTaxehaxiHej653aP1DMrouonWSJSBdQ9E6yqVANlyT4FzKOkQ2bAU6BfusjgmbnqP3CUJi6AhxN/gXsLwiwvcw7tsgTYbZkiB6v6L55g2LjZfxQZosaflVPlsxr2F5b/Yx1GPg37FRRxiXrjFA0CwGm8D7oGzZx4BPg43gyrZyI90SHaWrdC5bxK04XtxWDlyvMQZw1lKwBRwEZcl+BvoJuBd09g6XdE9skC2yqSwR1+Jc22tc2sgAzjkN3AcOgTJE/x0fB2vaaG8ZOsk28AQo6ygr7uUD3QhxaQsDOORG8CtQVD5mgOfArWAwTpatic2yXRwUFfnihrbEx2D1wAnLwHbwBcgr6rsT3AXquhvUWp/BwXkJFzspi/Iq3+ium0udDED6DLgbHAB55Qgdt4Gr6tS9S3OJm4QjcZVX5CP5qvd3TFvhW4i+HrwB8sphOj4MtE3dJYIBcQUeAeIur8hn10dM503yMAC5p4LN4BjII/pPpv5adHPJwYC4SzjMe+SW734ATs0xvXeZxgCEXgx+CfLIH+n0ANC391xKYEBcJpyK2zwiX15cgio+BESuBXkc8Qn9dG/e91pVFEbiNuFYXGcV+XRtRar1f1jI0ymVAvxzkFVeoMOq/rPUDgvFNRDnWUWnXPKxn3JlcSWEXQJeBFllLx1uzzKXty2PAXEP5IOsIl/roRYuFgMQtQ5kXdk9Sp+t4GxrfK+vlgF8oOsT+UI+ySLy+bpqtev46BC0AXyWhVXavgK+0nHTe6e+fAJeBVlEvtdXElzGGYAY3WnKsnKra5OHgJ+/jpPZkvfyTeKjLNeRioEHWmJC82pAxgx4DGQRHY7XN6+9axDDgHwFsp42KyaGvfoOAaeDH4Ms4hd0MVHZsjY4OM+NF8XG6S0zpR51MPxs8AsQKzpM+y3BetxTySz4T6dc8mGWUy7FyLBuvmDwBeANECu+qFRJyDYzKE7PuvirWLmgGW1rnlWGgrdArKjt5TWr6dNVzIB8CrLGQb+TBEJ0WpXlyPE67f1rnBUHa1PDy7dAPo4VxU4/T7cwTBfkWa45fkb7s5pyns9bDwPyMZCvY0Ux1K8LdwzSrdynYxmg3VNgMF95rScU2zuLfJ34nCJKFEv9uQWMMVnWOR5trytdsyoZIE4ejUqPuUZ6Llf3BVu0Qh4jWkG9v/sWuwVFGFAMAMVCjHR7xR0LN4BYYz05ikRWj/oSM0qSGFFsdXPvFopre0HsxkM/repRgJdhCrETe7qlGOvWLmAU1raC2L03T5VBqI/RPwaIoadAjCjWuvF9EhTVdoLYLzvp9p7frepfbJdikWIDxN4CVsy1f2c3Sm4BMaIFIl/nKCWU+juIYgTELiZuaTUTGKI9NjEb0bTFwFfIW+3N9iinWAEx21KO0W5tezQf0QTF9GgebSq0RG18b9UId/7SZkAxA2Ljq12PFEJxXXfEPLeqvRlu+8hbNMwAMaYzFMWQJYrF9lyPoMxmS+Okvt3niA0HgE9vM0AcxV7jbrZHq6EFCutZuTFZ/SLt2pPVNXDjU5TPgGIIKJYsUUw2+yxgFNAmRG1BtqQ796nL96mPWDIDBFvsOptis7lNjUyux9pborta/oCFkoNk6MMppkDMHdO7G+EK5ZaBmKd8P9iIgj5p7xkg/h4ElihG6/8RHybdbmlG/SvArzt6H6rNGKjYSmKMIijba9UQVW4A2kkZEj160p94WKtnhjeZYgwo1kKiWL2xFnaYSPtjYn4wc2stCvkkg2eAeNSzgC1RzFa/749J9DO/luylQT+/XD/4cGwfAYo1oJiz5L5KtWd27Yk5ZGlBvf8EQaWe8MHHGVDMRcSlYre6PYAM/sMIJV4YV97fOwN1MEBsxvyITzW7OZh8MThoJMgn1K+qgwyfo34G8K0W6J4B2jT4J/BT0Jqf0UaXVUAxGBLF8OLS2WPQTaFZk7pqsrOgNeh2JfgO+BH4JvDfLczIKZxpS5GSYlx02tKmJInZq7Upo/nh5hCgH2v8YJyZsff6r9K6wEOnr4OPxnR9h/fXha322pQBuFJyaMFtmjyftm26REHFqmIxJNr6VF6sMti3Q7Mldd9rmpzx+dFrORhPjtQUOfxvxvv4+/kMiCMQSg7xuX9+r2bfoc8DUsqQb5WiJZMsAtYtNBHYut8hR6fvgpB4kgSiBOJikkP8/j4wTO1V6KPfSbSSWjG9yFIuZhuInju03BjoyZmZmSNGmyaqLb21R+cliPIjyZh3Ek5e4uOYfUxq1xpJYvFJQyHFhmI7v0CSVs13gZAcpnJJ/lmq64led4UUH6nzI8mIG+Al9sghCnXh3rpH7qDTEqDYDIliO//qOp1vC42e1D08wm2rXqKfnoihC/IY8STBexCVJTlazRm2PBLh+NtyBy2D7zAmOEL9RbknqKEj+l0H5MgYabXDq6YLgnqTHOIKey4CitGQ7MjFKyPqEGUtumzLNXjNnbCjV46vgr6+coRd20BIFOPZLxHodE9oVOq0hbg1C0RW0KCrJ8kUkvrMjWIUKFZDcs8UaqZ/zGivhUakbuf03u2sQWdPkjHXDIETxSoIyWtjtITfMtJKYGXdneFR2lmLXZ4kiWuGwgV23glColiP30NI4y2h0aj7GJzbzhSwtUL3wSfJkDhQrALFbEji9xEyyu7QSNQ9Z4dhu1tgw2CTZIi2K2ZBSHZHRSwj3BQaJam7JWqwljfClsElyRBtVhhi9y1J7IaKvzNDlt5PhkagTjsh868+mhrU2wBbBpMkOWztzY5nxSxQ7IbE2p4ym2nWY+YfrzeEq58NxnqfJEOw0YoUOHg8lB3UvRkcgwZaebTuXq0JDtLRSuxWknwIYqRTK+4YlOUfgDjo5eZN7FpjOFexP31nCJV3GAO0at9/2bmI7VkCSUnS+lOQHDb1MjnSWIGP/SAkd6RtVY5vd18/WjnhdecWByfYMPUjtkn/msqbwcGpjU5WaBv4yzDd2iRJdIvdsi6bb044OGll/15ZMTw9ByDU2tp+b//4WmgRPHT+SKLkAL5Jc8y9cHIvCMmusS5zb+lxRahXUrd6Yucefoi9nU0SdPfkmBKTcLM6ieVQccWC7rTeEOpB3b4FnXr+ATZ3LknQ2ZPDiEvFMgjJiW8ajl6DTD/3mpvQOncz1OpeddeuSfC4rodeBjFfkx3KNcekwLNieWEuQK71YIaNk2Yawmdw0/ojSQ4de323KhSXcLURhGTvvP601PqHJVfO6zSwN5CT9dSltrtbbdatjWECX3qQoCUn10NoebPR+r02Glq3TnCUNUkq/y+NTq0/utXtp5j54O09EBLd7j+xDmL9t3s7ZtK+t+GaRFsRdH4au06iRwpZ3OamLRk7yzrH+sSG3HP2qKMV07N+Sy/SLSe+0yNiCpmSI0kqWUxMkiPLBbknx3zPWzE9L0Gund93wTtrsAUd+vxB00mSMTkO4AtPjoUBacX0yZyA8EMgJGsXju+fQFiWaxJtArSO1CapGefsxH4x0+gKGsDjWhCSQ7PT0mJpqFVSd1kFOvZiSPipLUmSubLsOC6ckL1w0gQj4PKyJLZDxVJ908raAnx4wvj+0QgDcFh5kiRzeHKM8F70JZxajyZdo4v0lcZEkzdvGZ2GVJ3xmuRCuMl0d0vJoT5AfS3RHTa/5rBYmqu3YnulEmSFMZZ1MWN0H0b1SJLootiS6CRJkkN3q2KSwy/ILebn11uxvUIJcun8PgveWVm2oMNQP0iSJPb7JGaSjBw5suytCn9tdKjOmWy3FduXKkEs8nv9LcLJvOX/tKwjyUhy+JEjvzusnlZsL4tJkJhVY0uRQdWPHElynW7lSA59E9CPHNmjzIrt2QSx/kPFODm7aj3vkTdJPDlqDQwrti/Ubd7fgpCcXFGsVfd+TAaxWW8Bx97KLWXhsR8s57MC31wbCnzqfqtTrMXG8HMrikYjr57MQI5rEuuIron0n89PqyZTnuVTK7YXK0HOMEb81Kj3aoOBjKdbxmieHBZBGeqt2D4jJkGOZpjQm05hoKQk8SPHFH5zfmzF9hm6BrEeC39Wzsm92wQG4FvXJLHXGTQ9IX7NMYHPIh/BrH7kNSQfK0GOhVpQ15sHVRchs8y+cJo1STw5ynRAMpZi24j9YzrFcukGA8e7oWa/tFSC2Odh/bK5UWt09ECB2I2Hqa66s6VvJvot95SRckrrBtVRJYh1JX9mObr4KDmTIyXOkyRlorzSiu1P/QhSHtnBkQomRzq2J0nKRDmlH0HK4bHYKCUlR6pEmiT+bcGUkfxl1BHkiDH+EqPeqwMMZEwOrXMIlihJMn3pyhpwoPVWbB/RKZa1o1HOcMnBQI7k0HdJ1gNPkhx85+hixfZBJYjlDOv7Ijn06n+XPMmh1XbwFux4ktQTIlZsH4g5gliD1GNKh2bJmxypiZ4kKROVl1Zszx5BrFMs6yu5lVvRpQmKJkdqqydJykSlpRXbs0eQDwwVrjbqvTphoKzkSAn1JEmZqKy0Ynu/TrH2GNNfY9R7NQyUnRwpqUmS6OLdulZUF7+7lRIXV1qxvUeOtR4c91HcXMNtpeQAsTt0c208rGOOoXkQTj8CIVmjBPFHjxaIDPirPDlS9eqcK52zryVcxj16VATQ2B9enSMSmgjYJubMQU3ru8DjWhCS2a/j6hpE8u5cMfWvda42tWNfK2A2y65cXT+U8h1yrkn0eB+/JikeWFZMz+ZEmiDWM5WswYqr26ERmkqOlCJPkpSJQqUV07M5kSaIVm9DYg0W6turuqaTIyXTkyRlIndpxfTJnMDp/iOeETwrOUCld6si1JjXBH30bKdW6TRPwZa+gbP3QEh0GjsntPKfgU7JmFLCUeuSI1W1zbqlOraphK9sPwMt5em0F4RkY5uMrFMXSGltcqQ8dEHHVNemS7jaCEKyJ9UxvQbRe/0GRUjWhyr7WgeLjdytysqnX5NkYsyK5YW5QCBsCKUUdfsyqdCDxkoO0Knz+y7qXHeoKJZBSDYs0InWV4R6JHWrF3Ts6QfY27nkSF3RZd1TG6oq4WZ1Esuh4vKJ89NjV6gXdfdO7NizD7Gzs8mRuqIPNqS2lFkqhkFI5v0s2+g1iPRYeO41Xzvr3G1+6w6+g7lOXHNY1Po1yVSGrBiengMExx2h1KLO+smqqVp1oULJATp1zWHx2kebLJtD9YphEJI7pvanl9ZDvgj1pm7N1AE6XIFdvUuO1B19ti21MaaEh78FIVHsXxQciwZvhkag7vHgAB2sxKbeJkfqjiHYmNo6rYSDJ0BIrD2JswuG20IjUPc+OG2aEl37HFt6nxypT4Zka2pzWipmgWI3JNvS9lNLet8UGiGpu3XqAB2qwJbBJEfqliHaLNux+9YkdkPFTSlPwZIRdodGoe654AAdqMSGwSVH6pYh2q6YBSHZnfJjloyyJTQSdfpVqnPNgVraAN0HmxypS4bEAbaeB6xfUtuScmOWDLYSWHez7jIHamED7Bp8cqRuGQoX2HkXCIlifWXKS1RJh9dCI1K3M2qgFjVCZ0+OMX8MgRPFKgjJq2O02G8Z7Z7QiNQp666yR2pHC3T15Jjiij5zoxgF1tnQPVOomf4xg54PPgEhsW+LTZ+ithoM8OQw2O4rR9hlLVsoxs836JlcTccdICRHqAyvPE4eurZP0c+TI5LtHFxdGzl0I80Um0AxGpIduZVj1NtCIyd1D+eeoOKO6OfJkZHjjJy9Q/uzMk5RW3N0ewRYcltuhRhZq4/WFvjDtLF+qSe3Dnk7otMl4E8gRrRB0X/SLCFbXIDYTZt35vVRlf3QfwlQbIZEsX1qIT0YwLpFJgU2F5qkgs7o9LQUixBPjgn8w1tskjwxoXvjH6H/5gjfF1+qYJJFwHqgwwHanNM4KyMKoM8fgCWeHCOcjb+EvJgk+e54v6bfo/c5QDEZEsX0olJ0ZaBvh2ZK6h4oZbKSBkEna9+/J0cE1/AYShI9HX15xDC1NkGnB4Al3ypNKWb6EvjAmPGPalfapAUHQpfnA/p6cmTgFx71cDpdkI+KkuPrGYappSk6KVYViyHRrt5yY5UBN4VmTOri97NUTBf6XAUmPbVeF+5+QZ6RfzhT4H0T/Ah8B1yZcYhamqPXFmDJptKVYcbF4KAxsxZdVpU+ec4B0eUq8FOgpNB/lWfAJTmH824tZwDfrgLW4rZieHElpjBwTHa+UMnkPqgzYDBAfL4ALKnuLIeZ9WtUk05bxpW63bDFq52BUhkgAG8fD8IJ7xW7S0udeHwwJrhvwsTjH+kW2tnjff29M1AFA4o1YC1FKEbvq2L+eWMyiVbXf6XZDNk6r6O/cQYqYoA43GrEoqoVs/U8S4GJbgTWFuKjtPlKRZz4sM7ALAOKMaBYC4li9YZaKWPC7SGNkrpXKIvtdanVKp+sSwwotsCrSayFiu2124U2y8CBkFZJ3UO1K+cTDoIB4uuhiPhTjC5rhBAmvjtCwc9ps74RBX3S3jKgmAKKLUvubowENJsBb1gaUq+lfV+ga8xT/ZpYsZTEFEVQFJszjVqPAteDY0E15ypfpPDrkUa91f3JFUNAsWSJYvL6VliMIpstbZP66lYxW8GEK1E1A8RRzG4OhdsPqtYlenyUUVb/UloZonPGtdEDe0NnYIQBxQ6Iue5QLLbrbAWFLgbWNmOazLaZ/BNXI2T4S2dglAHi5vIM8XXxaN/WvMaA2Ax/i7bV7olpDSuuSFEGFCtAMWOJrjvWFp2v0v4oGHuO+DptW/tEjEpJ8sGjGVCMAMVKjLT/GhcrYu8yyOCfgXr2x0S7xBu2hQHFRhIjFKbozla7rjumEYmisfepZfVT08bxz4fNgGJDARIh3Vtnw6h14LMI49Tk0WGHgls/zoBiIjJ2FGPrxvt34j2KbwDaSRkj93fCKFeycgYIlvtjAoY2iq0NlStU5QQYEPMIFvEhYz1JqnRGB8ZWDCSxQGFKqx41lZtezHzMNPVkAz/dys10tzsSArGnVYqWx7pt7Yj2GKNNjU/LqkjRxZnf3RrhsM8v5Wsgn8eKYqnZTYhlOwSDTge/iGWAdroF7OskZTuiZePJx4mvKaJEMXR6y8woRx0M05frY7bHp0xpgchX3Muhv3WjyLcgdhFQMaHY6ffDQDDwAhCzbYBms6K2vnerdeFdTCH5FGSNgwuKzdqR3hCjJMlyJNEmyLUdMc/VNBiQL4F8GiuKlWEkR8odBut0K8s1iTaibQHd2E6QGurlCQbku8SH8mWsKEb6fVp1gqGxFxiuC/csd7dEqvbc+Nd3x7hs+1v5LPEdRbQoNvp5QR7rMAiYAVnWScSu9t6sj53D2zXLgHyV+IwiWhQT/bqVW8QNkKEVd62mx4q+WfYg8FOuIsRX2Fe+SXwU8y1Ams6KYqAfK+Rlcwsx2rsVu8Fxlk3+vAr8CY5lO6PgePJJ4huKaJHvu723qiBvZncIynM41qMn9XzWYV7MmazW10A+SHwhn2QRnTZ3c1duffTOzQRReS7o5Iy9wH96oW6HJfOJ+8QHFJnEb7xk9Rn06vxVt3WznL+mXtEPqazKOqe3z8eAuAYxP16T+ict5Vu/dZ+P9rleEJh1USkl/5OE/HJ/rLGIMT3rC7/63UIFuLjOKr74W1Y8wLweKRTz3K1JTpIjvgda9TvuZXHTxDjiEuiuY5bVcJqfEPmynY/maYLQMuaEUJ1ybQZZVmFpfkL0lG/1X1KGPkMcQ9wlHMY81Z+mC0S+kw/81nxVAQS5ehaw9ubklcN0fBhcVJWOfRtXXCWcibu8Ip+141m5fXPQuD0QrdV3/fRC3v9kdD1+BGwDV42P7+/nGBA3CUfiKq/IR/KVr4rXHViQvgxsB1p9zSvquxPcCc6t24a2zScOEi52UhblVb5p5sdr2kZsk/rghBtAzA+L0iwoH1P7HLgFDOYrv7I1sVm2i4OiIl/c2GRM+NxjDOAQOVk/UX0IlCFa2X0crBmbqjdvZVtio2wtQ8S9fDCYfy6dCwacsxT8EBwEZcl+BvoJuBes7hwpicLSPbFBtsimskRcaz3Evx7dleDAWYvBJlDWf0eGOiH7ePU02AiubCsn0i3R8ceU0rlsEbfieHFbOSiqV+/vLOA8raT/M9gElhclbEr/PXz+NnhnFDMzM+/zvnLBxsuY5JoxfJX3K0AVso9B/xX8Gzb+pYoJ2jJm7xMkJZogWsRrbaX+Prg6/bzi8iPG3wWUOCr3g4PgQFIeovwUHB0peXnKGeDMkVKLm7obdGFS6huVXwZKCpXngTpkN5NsBc+SGJ/VMWHTcwwmQVKiSRRdQN4KvgG+BnyvFiQEREeIn4NnwH+RGJ8H2vauanAJMupBkkX/mf8RKFn+HgyaD+xP5Tgv/hsoKZ4nKXSkG6R4QCRuJ1lW8lKnYEJn71Ql5uQt3qXjs+A/SIrf5R2kT/08QSZ4k2S5iY//CdwM/gr0lScdKX4DXgY7SIo3KF1GGOir40dMLPaSZNGmxnVgfYK6LvCLKT69ty60lRDCTpLiw+lNvcYTJGMMkDBX0GU0YZZnHKLu5rolO5oQv69bgS7P5wlS0HvJEeY6hklxLa91DXN+waGzdj9MB11DvAXeTOFHCJgoIJ4gBcgLdSVxtO1iBViZlJdSai1jdD1DK9Ba8xDSdQ9ezlsX0RrJ/4HR9RO9/gDsAe+pJBH+TOlSMgP/D3W7PKH+6NniAAAAAElFTkSuQmCC";
var success = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGfFJREFUeAHtnWusXmWVx3soFES0QAsFp+lQLuIFCHyZUjRDWz4pYIxA0SiUW4uGYRwlVRg6ZVRmxjBRHD/QSdPqSImXTjKSiKLggEIpycQBA8g9HO5QaAslU7BQOPP7H/bb8563736eZ99vayX/s/e7n9ta/7XW2ZdnX0ammBTCwNjY2AF0fBiYGy1nsZwJZvQt38v63mBa35LVKW+CHX3L7axvAZv7lptYfxKMajkyMvIKS5OcGRjJub/OdUciHITRx0U4NloeyXI6KFO2Mdjj4D5wf7S8j8R5mXWTlAxYgiQkjoSYTZOFYFGEOQm7KLv6Uwx4G7hdSxLmubIVaPJ4liAe70V7iF5CaPlBT5O6Fz+Kgr2Eud32MG53WYIM4YekmM/mxeAUcAxoK09j2PYA+G+wnmS5m6VJHwNtdXyfiWGrJMVcap4TQecQXRSdw6wTSBad/HdeOp0gJIVOpLWnUGJ8HHSaD+zvifYsG4CSRXsWXQDopHQuIEiKqXj6E+BccDrYB5jEM/Bnin4Brge/Ilneia/avpLOJAiJsRfu057icnBUSa7U3MUjEXT48hLon894jd/98x2a/5D0z4tonuT9oH/+RJeWdRh4dATNr5QhjzHIt4EOwd4qY8Cqx2h9gpAY2kNcCL4G5hRAuA5HlAQPR8teQjxCECkZChdsVPL0kqW3/FC0rQgfP03f14C12Kg9jEnTGCBo9gPLwQsgb3mYDq8DZ4Ky/nsndoF0i3SUrtI5bxG34ni/xMpZg2oYwFkHgJVgC8hLRuloLfgC+EA1lmUfVbqDzwPZMgryEnEtznV7jUkdGcA5U8Gl4FWQhzxGJ3J6ay/5yrbIRtmah4h7+UAXQkzqwgAOORHcA7LKVjpYBU6qi21l6YHN8yPbxUFWkS/mlaW7jRPDAE6YAVaDd0BaeZOGN4IzgK4YdVrgYBr4DBAn4iatyCfyjS4gmJTJAKSPgAvBZpBWXqbhClDbk+wyOR02FtzoH9CVQFylFflIviriatowtbu9DaKPBxtBWnmehl8FehbDJIABcQW+Ap4DaUU+Oz5gOKuShgHI3QPoP/5OkEZGafQl0PnDqDT8q424A18EoyCNyHfaI+2RVgdrN4QBCD0Y3ALSiK7/nwf2HNK1bUrBgLgES0DauRX58uAUQ1uTQQYgcgHQYVFS0bX5ZcD+Ww2SmtNvcQuWAnGdVOTTBTmp0r1uIE/kax7ibZBEdPVEE2F28l1S2MC1TubXAHGfRHTIJR/bP7EkvoKwWeC3IKn8kQadm8NIwm2RdeFecyn3JnUa9eVrvdTCxMcARC0ESe+f2kabvwM2g+sjuOBy+QB8GcgnSUQ+X1iwes3uHoLOAW8lYZW668Ghzba8fdrLJ+CnIInI93okwWSQAYi5DCQ5hn2d+rqN3aTGDOCjC8B2ECqKgctqbFK5qkGGZsWvCWUvqvcgS71MwaQBDOCrj4I/Rb4LXSgmuj37DgG6nv4foYxF9X7E0mbBG5AY/Sris31BUl+rfjfnryLCbmIZKtpNn99Puq03jwF8uAQkOeRSjOzbPEszaIzBBwLdmxMq2j1/JMOQ1rRGDODLD4MHQp1PPcXKgTUyoThVZCi4H4TKrVS0RzqLc0klPcun4DehQUA9xUy7kwQDdRyaZM/xE+rrDR8mLWQA3+4FfgxCRbHTzsMtDNMJeZJzju9Tv9tXMVqYFIMmycfgeyBUFEPtOnHHIJGgq0+hcuUgkfa73QwQGFeEBgf1FEvt+eeJMaHzHLp57aJ2h4JZF8cAvteTh4qBENF7uZovWKoZ8hB5g0qfbr7FZkEWBoiBTwHFQog0e8YdC3VvVcjtI7oHR+/JNTEGphALp4KQe/IUW828dwvFFwUaSTWbALS8mMwAMbEEhP5zXTi5dc1/YZie5wi9Zf3rNTfH1KuIAWJoOQgRxVoznidBUT0JGPqw07UVcW/DNoQBYuk7IEQUc/V/MhElV4ZYQ50bQHsu1TUk4JqmpmIErAMhsrLW9mHBAhDyDPmvqafvdZgYA14GFCvgZuATXSJe4O2wigooplfzPO+zgHK9t9VuV6/CSQ0eUzED/hf4RDFYr1cKoZDOO/SuI5/oOeUjG+wnU71CBoidI0DIs+6Kxfqcj6DMChAiZ1fIrw3dAgYIsrNCAo06K2phLoroXbk69vPJqloobEo0ngEC7TpfsFGumKz2XcAooCsMugXZJ3pflX1NtvGhWQ8DiKW9Qcj7txSb1V0pZXDdXOaT16hQ1ldl6+FB06JwBhRTQLHlk2refINWM0DI9zk+VzhbNkAnGSD+PuvLjihGy/+IDwOvDlBubSc9Z0aXxgAxuCYgDleXppAGQqF5wHcj2UvUsa+eluqZ7g2mGAOKNZcoVk8shR0Gmgo02eeT80pRyAbpPAME4hJfMFKumC3+3c0McmmAMndSp7qrB50PmW4RoFgDijmfXFooM4yu3dmrHi30oMuxhSpinRsDAwwo5oDvISvFbnGH/XR+FfDJdwd0t5/GQCkMEJght8YXc8cvg+tFX1s82fEc5e8rhQ0bxBgYYCCK0Wc9MaoYzv9FhHQa8nSX3Ws14DT7WS4DxOliT4KoeHmuWtHhPuBF9eyQjbkOap0ZAykZIEbvcsSpivSIbn63PtHZ36hXj5ya0h5rZgzkygBx+klPrKr4klwGpSM9zfWUenTIvbkMZp0YAzkxQKz65uoU09mfaqUTfULLJ2fmZJd1YwzkwgABe4YvaCm/INNgdKBZ80c9Az1EeX2e3spksTVuCwOKSaBP9blEsZ1+dp3Gp7l6j8rObQupZke7GCA+9WZPn5yW2mp6Xu/p/QnK2/Uq+tRsWcO6MaDYBIpRl6xPpTc97g/ecPVM2cWpOrdGxkBJDBCjyzwxrBjfP7E6NFrq6Xgr5Xsn7tgaGAMlMqAYBb47QJbGqeQ6ufadW/xsZGRkR1zHtt0YqAMDUYz+zKOLL9YnNyfj5gLfA1EnTW5lv4yBejJALM8HLlGsHz5M+7g9iL654Hqe43Ey024tGcaobasdA8Tq3Sj1uEMxxfoXhpW7EmRY/d62db0VWxoDDWHAF7NhH+JhV5N6d9QQokzNDjJAXKc6bRi2B/Hdsn4Xu6wnOsixmdxgBojZUdTf4DFh8WD5sAQ5ZbDSwO/rB37bzw4zwH9mPYb9cfCXDaDBd5i1yGkDRuoTBq6rVzsoTz6p4hzVCpvIAHHwHvBvA/Hye34fXld70G06UAzHiWL/oFj9KfQ9jXVHbGMr6AwDxIm+1fE7MEweYeN76koGuimJXTLpMGuPAUPcu5gpU24bqG8/O8YAkaWPH/0SnBxj+gfZHnZFKKaDgjff7ul/Ug5YgnjYsuIJBgKSo1f5hN5KDZe+f/KTEmSX/hg/27Xfoex1MG1XA1vpFAP43nVYNRg6K+tKjmIYbB9UeOD37J7+/XuQhb2NMcsNXCp7M6bMNreYAYLHd1jVb/1b/Ph5/4Y6rUcxfJdHp1250J8gw3ctEz35jt0matpaaxhImByyewVBeH/NCUh+mAURTw3sZgZ/zqu50aZezgwoOUDc1arB+NDvb+asQiHdoae+TuCSpyYNTM2DXLUp2wamTmpkP1rNAP5uZXLIaYrlKKZZxMrEfAhVTomt9m7Bza2OBjNuEgO4PGlyfGNSBw34gY03e2J+/I6S3jnIcR6bHvSUW3FLGFByYIprnmPQ0m9xznHV4MYG/PbF9HhOhCbIIw0w2FTMyEDK5KjtJV0PHb6YnthpQMwfPLubuFlTjw5W3BQGlBygdSfkcfxj68nAJX/Y1ZZavo/iHLKrsq20jgH8nzQ5vtV0ErD5EFd2KCfGbWRFtyu7ZFvTyTD94xnA8Z1Ljh4b2O7bMRygS14nuLKDsv/pdWjLdjGAbzubHPKkYtsT+yfoJH2ux+2+kxlPcyuuIwNKDvRKcrXqaq5W/UMdbcmgky+25ypBDvMM4OvE09yK68ZAiuTQpdy2JYfc4ovtw5QgvhPwR+vmYNMnPQMpk6Opl3J9RPli+xAlyAxPL5s85VbcEAZSJIcOq9qaHPKaL7ZnhCTIlob439R0MJAyOdp4WNXPki+2xxNkZn+LIeubh2yzTQ1iwJIj1lm+2J6pS10PAZdk/45brH5WUDQDOLbTl3Jd/MKNvr/pkoeUIM84amx3DWBl9WYAvyZNjm/W26L8tYMj1+O3zyhBNjkSZGv+KlmPZTCQIjkaf/tIGl7hSd+5iZNNSpBX4krZ/kKaQa1NtQzgt6R7jk4mh7ykGHfE/yuqoLeVxMnkRw+r9buNHsAAjrTkCOCpVwW+XI+av64E2RmXHWx/rNeRLevPAP6y5EjoJsW4I/53WoIkJLSu1S050nkmJEHsECsdt7VpZcmR3hVw5z3Ecp2kv5h+aGtZBgOWHNlYhr8XQZyMn6TbZd5sHFfWGq/aOUdG9uHQe5n36bj0YbtNFGZ0QFHNLTnyYVYx7oj/p3WS3rpbTbBpDvgYaOXHfrAr6Z6jczPkIekDj0G3mmygokt8z4uE6FJKHYw4AtzRZ8zbrF8LavtBl6TEYIslR1LSYurD5aHAJRu0B7nRVYOyY2L6r9Vm9NQnwR6NseU2tu9bK4VTKIMNSZOjszPkIfTC5zEx8dLbfKOeB/HeEx8yWA3qnIcOR8XosZDtN2F1Y5ME3ZM+Q97Wx2RjXJxqs+9hwS0hCTIr1dDlNzreM2RjkyRFcrT9SUCPq4OLfbG9WQnim+vQN+eaID47ZEPjkiRlcrT9ScC84tEX25uUIE96RjvaU16X4v9CkZ0ByjQmSSw5AryZrYovtp/USXprXhyHLVeAUKn1iTtG2Al5tuD3toZj74vjlCCtevUo9vwzCJVaJgnKW3J4wzt7BXje5gmUA8ZHoZLvHaWNmQuRQdjT2CRBd0uO7LHv7QGew15eHQVU6z5/0MQkseTwxnVuFeD6ZOCSSZ8/+IGrJmXLctOsxI7QuzF7EnS1PUe5sbHME/M/kDq6iiXxfbbXd7b/bi81+8tbAf8elf4lUK3Krm4pOdAxyYuk/6ml78oNdFUu1XwxPZETOKjVH/HEvtruSZQc4HcgVOz2kRzyA7KDPuI5PhSVW/8ZaGysXZKgU9LkuDqH2Oh8F/A+FfiuYB00iSgauB49pHjsryY1aOAPbKhNkqBL0uSwPUdOMQf384BLntxtKGr/0NWCsst3a9TADdhReZKgQ9LksD1HjrEG/74J5fET9ElD0ugc4JJbJjVo8A+MrCxJGNuSo+LYwQe3ugKdsnN2U5GNsz2N9GjitN0aNnQDtpSeJIxpyVFxvCiGgetNPhSP/cVQNSmIe+BIjSR/PbRhQzdiT2lJwliWHDWIE8UwcEn8Z9lo9e+ulpRdVQMbc1UBmwpPEsaw5MjVa+k7wxf/CFyyKrZ3Wi12taTs97GNG1yAXYUlCX1bctQoNvBH/zsL+LmbLI5Vl6qaD3lntyYTG3awOj22gwYXYFfuSUKflhw1ign8sT9QDMeJYn/y/Meg/lS4L651tH3pYJu2/Ma+3JKEviw5ahYY+GRpFMNxi/u8KtNSr8lxyZ3eThpcAcMzJwl9WHLUMAbwy52uwKbsWq/aVJrv6US7obnejhpcAftSJwltLTlq6Hv8cjhwnT5QPDY/SHUqur6ZoI7a/O3scY6wMXGS0MaSIyjCyq+kmAUuCf8WDr3k11n5XOQ2IjwkTZIkd+Xa7SO5ecrfEb7M758+nc0F+eyO/LrXukbCJKF6kFhylOh1PHKSxyuK9WSnDTTwndDET6iUaHwZQ8FFkj2JxxdjlhxlOK1vDByyyuOUO/qqh63Soe+SmL6rsHdYb82vha15JIklR8mhoBgFrm+AUDyWfOqCRtPBG2rtkItLtrfS4eAhS5JYclTgPXx2sSN+VaQYTzf5TcP16sEhT1C2ZwV2VzYk9qZJEkuOCjym2ASKUZesT60avZ7m6jkq2/3e+dQjNqMhdidJEkuOityKn84NiN/TUqtH53p213cL/IPU6b0dJfVYTWuIzSFJYslRkWMVk+Ah4BLFdrbYpYMLXCNEZWdWxEOlw2L71Q5uvlGpch0fHL+c5fBNr+iCzDTRk77j5nuhwz2ZB2poB3BzMtBn7J4Bz4FbwKKGmtMatfHBvcAlium9cjGYji5xjRSVfTKXwawTYyAjA8TjqQHxeknGYSaaM9g+wPXBdemzcaKFrRkD1TFALN6tgHTIC5Ttk6uGdLjcMWCvKP5prFy1sc6MgeEMEIhn94LRsVw+vHWGrQy2H9jiGFRFz4L9MgxjTY2B1AwQe+8DOg90iWK4mBil45WukaOy76S20BoaAxkYIP6+GxCfxT2qweD6GpXvYztvUeeYDHZaU2MgMQPE3LFAsecSxe67X41KPEJgAwa41KVBVKY3R4wEdmnVjIFMDCjWgC61++TSTAOFNEYDza7f49OE8iUh/VkdYyArA8TaeQHxqJidmnWsoPYMdCJ4x6PUJsqL3Z0FaWuV2syAYgy85IlFxeq8UnlgwNUepVS8plSlbLDOMUCMrQ2Iw9WlE4NSM8DmAOU+W7pyNmAnGCD2PhcQf4rRGZUQwsAXBij4GnWOqkRBG7S1DCimgGLLJxdWRgKa6erBRp+GlOvGsc48nluZQzoyMLGkW5/+CHyi2Kz2aioKHA92+jSl/LqO+M/MLJgBYmlVQLwpJo8vWJWw7lFkRYDCqnJWWI9WyxgYzgAxFHKvlWLtyuE9VLAVZfT0lp6D8Im+LHpEBSrakC1ggNg5EoScdygWsz0pmDdfKHQweB74RBM27817fOuv3QwoZoDvISjFnmLw4FqygWILwNvAJ7+iQj5Pc9WSCVMqTwYUK+DXvqCiXOcdC/IcO/e+UDDkjl/Zug5Ue4Uhd+utw7wZUIyAG0CIFHenbl6GYYXOR34bYg117Nb4vIhvaT/EyLWBsaSYq9d5R5xPUHQW0GONIfK1uH5se7cZIHi+HhJA1FGszWoUWyi8EPjuz6fK+E2Pdudvo7xbvLLExfkKjgBRjC0sXqMCRkDxc4Dvrl9xICNPLUAF67KBDBALp0cxwcIpiq1mv9kTAy5zmjhR+Aarn2qgP03lHBkgBj4NFAshclmOQ1fXFZZeE2ItdXSZLvvb7qoz1UbOwAC+vyiKARZeuSbDUPVqiqm6VPcjr8kTFa6olwWmTdEM4PorJ9zvXVMstWuKAIP2BDd5TZ+o8D1W20VC0VHWwP7lY/D9Cbd71xRD7fzkBobtC0Juj++x9GNWbMa9gYEfojK+nQZ+0nN2wFKxs29I342tg4EHgvsDyOhV+Q0rxbzoq7EsNl9x+RTc2nNywFIxc2DzLQ+wQIaCJHuSB6j/4YCurUoDGMCXHwF/AqGiWOlGcvT8h8E63EpyTrKd+jah2COwoUt8qFf0yJehohhp92FVnC8xXCfuSa5uidQfgm4SFkdkA7bjM92untTXqt/OE/JQn0GArmKEzpNQdVy0e/5o6BhWr1oG8NUxQJ/qSyKKCbuK2XMdZGjGPeS2lB7J2k2f32tvy3oygI/05pvXe04LWCoG2jFDnrdLIEb3bum+rCTyUyofkrcu1l82BvDJoWB9EkdSV75v9r1V2Wjzt4agRSD0Vnmqjouedf9bUM67V/1mdLaGfAC+DEKeHafaLpHPF3aWuCSGQ5SeJwl96GoXw6zomeX5ScayuvkxAPcngZD3VVFtksjXzXqeIz/a0vUEYXoycSUIecadartEx7BrQDWvm0xnbqNbwfVMsBYkOYek+rhv5eNmPAlYRy9Bnl4E8TxIKnon61Jg5BfkWHELlgF91iypyKcLClKtW91CpF4pFPLerWFOepiNS0C3r6fnGDLiMuJU3KYR+bKer+bJkadSu4JQ/bdaAXaCNDJKoy8Ce0dwSs+JO/AlMArSiHwnH9pePaUPvM0gV+8C1r05aUVfQf0KsJfXedl+t4K4Al8FaQ51aTYu8lk93pUbaHdjq0G0Zt81AaXzjLTyMg31kI6dzMdEAtzo5Fsciau0Ih/JVzYrHsNzYZshfQZYDZJePaHJLnmTtRvBZ8C0wpRtSMdwoMOoM4A4ETdpRT6Rb+wfUNW+xwnzQMiHRanmlK2UrgKdm0uRzZHt4iCryBcnVh0XNn4fAzhEM7j6RPWrIA95jE50jf7IvmFatSrbIhtlax4i7uUDu6OhrpGCc/TV06tAmmvzNBsqo2zVRNjnwQfqartPL+ke2SBbRkFeIq71z8S+auxzQl3KcdZ+YDlIel8XTbzyEDWuA2eCmXWxeVAP6RbpKF3TzlnQNFbErThu7SPRrb+ygPP2IXAuAsvBnMEgyuH3GH08Ah6OlrvWR0ZGtubQv7cLbNSJ8NED+FD0uwgfP03f/wrWYOOfWbZWiiCvlmQRRHo7im6lvhyU9dXdzYylhBEeBy+DLUDbtXwN7IjwJktBoqtpgiY1hfcDJYH2VloeBHRu1EuKsvZijzHmt8E6EuMtlq2XziRIz5Mkik4gPwHOBacD7WFM4hnQHuIX4HpwM4nxdnzV9pV0LkH6XUiy7M9vfVhUyfIx0Gk+sL8nOmy8Cygp/pOkeLVX0LWlBUTkcZJlLqs6BBNae2k3MjduocPAdeAGkuKJuEpd2m4JMsTbJMt8Np8NTgF6OURbedKe4gFwG1hPUmxkadLHQFsd32ditlWSRSfEC8GiCGWd4GdTPL61TrSVEMLtJIUuHJjEMGAJEkNM3GYSZjZl/QkzJ65uTbbrkmx/QjxbE70aoYYlSEY3RXuY4+imh2NZ1znM9IxdJ22+jQY6h7gf3NeD7SFgIoNYgmQgz9WUxNFtF4eBudHyEJaawxB68xmage6f89C6RPMhmh/pzY38H+v98ydafxE8CUa1JBFeYWmSMwP/D9ulVgFLdbgRAAAAAElFTkSuQmCC";
var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
var statusImg = {
  error: error,
  success: success,
  loading: loading
};

var AtToast =
/** @class */
function (_super) {
  __extends(AtToast, _super);

  function AtToast(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (event) {
      var _a = _this.props,
          onClick = _a.onClick,
          status = _a.status;

      if (status === 'loading') {
        return;
      }

      if (onClick) {
        return onClick(event);
      }

      _this.close();
    };

    var isOpened = props.isOpened,
        duration = props.duration;

    if (isOpened) {
      _this.makeTimer(duration || 0);
    }

    _this._timer = null;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  AtToast.prototype.clearTimmer = function () {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  };

  AtToast.prototype.makeTimer = function (duration) {
    var _this = this;

    if (duration === 0) {
      return;
    }

    this._timer = setTimeout(function () {
      _this.close();
    }, +duration);
  };

  AtToast.prototype.close = function () {
    var _isOpened = this.state._isOpened;

    if (_isOpened) {
      this.setState({
        _isOpened: false
      }, this.handleClose // TODO: Fix dirty hack
      );
      this.clearTimmer();
    }
  };

  AtToast.prototype.handleClose = function (event) {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event);
    }
  };

  AtToast.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened,
        duration = nextProps.duration;

    if (!isOpened) {
      this.close();
      return;
    }

    if (!this.state._isOpened) {
      this.setState({
        _isOpened: true
      });
    } else {
      this.clearTimmer();
    }

    this.makeTimer(duration || 0);
  };

  AtToast.prototype.render = function () {
    var _a, _b;

    var _isOpened = this.state._isOpened;
    var _c = this.props,
        customStyle = _c.customStyle,
        text = _c.text,
        icon = _c.icon,
        status = _c.status,
        image = _c.image,
        hasMask = _c.hasMask;
    /* eslint-disable @typescript-eslint/no-non-null-assertion */

    var realImg = image || statusImg[status] || null;
    var isRenderIcon = !!(icon && !(image || statusImg[status]));
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    var bodyClass = classnames('toast-body', (_a = {
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon
    }, _a["at-toast__body--" + status] = !!status, _a));
    var iconClass = classnames('at-icon', (_b = {}, _b["at-icon-" + icon] = icon, _b));
    return _isOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-toast', this.props.className)
    }, hasMask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-toast__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: bodyClass,
      style: customStyle,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'toast-body-content'
    }, realImg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'toast-body-content__img'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: 'toast-body-content__img-item',
      src: realImg,
      mode: 'scaleToFill'
    })) : null, isRenderIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'toast-body-content__icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: iconClass
    })), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'toast-body-content__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], null, text))))) : null;
  };

  return AtToast;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
};
AtToast.propTypes = {
  text: propTypes.string,
  icon: propTypes.string,
  hasMask: propTypes.bool,
  image: propTypes.string,
  isOpened: propTypes.bool,
  duration: propTypes.number,
  status: propTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: propTypes.func,
  onClose: propTypes.func
};

var AtAccordion =
/** @class */
function (_super) {
  __extends(AtAccordion, _super);

  function AtAccordion(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (event) {
      var open = _this.props.open;
      if (!_this.isCompleted) return;
      _this.props.onClick && _this.props.onClick(!open, event);
    };

    _this.isCompleted = true;
    _this.startOpen = false;
    _this.state = {
      wrapperHeight: 0
    };
    return _this;
  }

  AtAccordion.prototype.toggleWithAnimation = function () {
    var _this = this;

    var _a = this.props,
        open = _a.open,
        isAnimation = _a.isAnimation;
    if (!this.isCompleted || !isAnimation) return;
    this.isCompleted = false;
    delayQuerySelector('.at-accordion__body', 0).then(function (rect) {
      var height = parseInt(rect[0].height.toString());
      var startHeight = open ? height : 0;
      var endHeight = open ? 0 : height;
      _this.startOpen = false;

      _this.setState({
        wrapperHeight: startHeight
      }, function () {
        setTimeout(function () {
          _this.setState({
            wrapperHeight: endHeight
          }, function () {
            setTimeout(function () {
              _this.isCompleted = true;

              _this.setState({});
            }, 700);
          });
        }, 100);
      });
    });
  };

  AtAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.open !== this.props.open) {
      this.startOpen = !!nextProps.open && !!nextProps.isAnimation;
      this.toggleWithAnimation();
    }
  };

  AtAccordion.prototype.render = function () {
    var _a;

    var _b = this.props,
        customStyle = _b.customStyle,
        className = _b.className,
        title = _b.title,
        icon = _b.icon,
        hasBorder = _b.hasBorder,
        open = _b.open,
        note = _b.note;
    var wrapperHeight = this.state.wrapperHeight;
    var rootCls = classnames('at-accordion', className);
    var prefixClass = icon && icon.prefixClass || 'at-icon';
    var iconCls = classnames((_a = {}, _a[prefixClass] = true, _a[prefixClass + "-" + (icon && icon.value)] = icon && icon.value, _a['at-accordion__icon'] = true, _a));
    var headerCls = classnames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    });
    var arrowCls = classnames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!open
    });
    var contentCls = classnames('at-accordion__content', {
      'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
    });
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && icon.size + "px" || ''
    };
    var contentStyle = {
      height: wrapperHeight + "px"
    };

    if (this.isCompleted) {
      contentStyle.height = '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: headerCls,
      onClick: this.handleClick
    }, icon && icon.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: iconCls,
      style: iconStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-accordion__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-accordion__info__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-accordion__info__note'
    }, note)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: arrowCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-chevron-down'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: contentStyle,
      className: contentCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-accordion__body'
    }, this.props.children)));
  };

  return AtAccordion;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: {
    value: ''
  },
  hasBorder: true,
  isAnimation: true
};
AtAccordion.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  open: propTypes.bool,
  isAnimation: propTypes.bool,
  title: propTypes.string,
  note: propTypes.string,
  icon: propTypes.object,
  hasBorder: propTypes.bool,
  onClick: propTypes.func
};

var AtSlider =
/** @class */
function (_super) {
  __extends(AtSlider, _super);

  function AtSlider(props) {
    var _this = _super.call(this, props) || this;

    var _a = props.value,
        value = _a === void 0 ? 0 : _a,
        _b = props.min,
        min = _b === void 0 ? 0 : _b,
        _c = props.max,
        max = _c === void 0 ? 100 : _c;
    _this.state = {
      _value: AtSlider.clampNumber(value, min, max)
    };
    return _this;
  }

  AtSlider.clampNumber = function (value, lower, upper) {
    return Math.max(lower, Math.min(upper, value));
  };

  AtSlider.prototype.handleChanging = function (e) {
    var _value = this.state._value;
    var value = e.detail.value;

    if (value !== _value) {
      this.setState({
        _value: value
      });
    }

    this.props.onChanging && this.props.onChanging(value);
  };

  AtSlider.prototype.handleChange = function (e) {
    var value = e.detail.value;
    this.setState({
      _value: value
    });
    this.props.onChange && this.props.onChange(value);
  };

  AtSlider.prototype.UNSAFE_componentWillReceiveProps = function (props) {
    var _a = props.value,
        value = _a === void 0 ? 0 : _a,
        _b = props.min,
        min = _b === void 0 ? 0 : _b,
        _c = props.max,
        max = _c === void 0 ? 100 : _c;
    this.setState({
      _value: AtSlider.clampNumber(value, min, max)
    });
  };

  AtSlider.prototype.render = function () {
    var _value = this.state._value;
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        min = _a.min,
        max = _a.max,
        step = _a.step,
        disabled = _a.disabled,
        activeColor = _a.activeColor,
        backgroundColor = _a.backgroundColor,
        blockSize = _a.blockSize,
        blockColor = _a.blockColor,
        showValue = _a.showValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-slider': true,
        'at-slider--disabled': disabled
      }, className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-slider__inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
      min: min,
      max: max,
      step: step,
      value: _value,
      disabled: disabled,
      activeColor: activeColor,
      backgroundColor: backgroundColor,
      blockSize: blockSize,
      blockColor: blockColor,
      onChanging: this.handleChanging.bind(this),
      onChange: this.handleChange.bind(this)
    })), showValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-slider__text'
    }, "" + _value));
  };

  return AtSlider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSlider.defaultProps = {
  customStyle: '',
  className: '',
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  disabled: false,
  activeColor: '#6190e8',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false
};
AtSlider.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  value: propTypes.number,
  disabled: propTypes.bool,
  activeColor: propTypes.string,
  backgroundColor: propTypes.string,
  blockSize: propTypes.number,
  blockColor: propTypes.string,
  showValue: propTypes.bool,
  onChange: propTypes.func,
  onChanging: propTypes.func
};

var AtSwipeActionOptions =
/** @class */
function (_super) {
  __extends(AtSwipeActionOptions, _super);

  function AtSwipeActionOptions() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtSwipeActionOptions.prototype.render = function () {
    var rootClass = classnames('at-swipe-action__options', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      id: "swipeActionOptions-" + this.props.componentId,
      className: rootClass,
      style: this.props.customStyle
    }, this.props.children);
  };

  return AtSwipeActionOptions;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtSwipeAction =
/** @class */
function (_super) {
  __extends(AtSwipeAction, _super);

  function AtSwipeAction(props) {
    var _this = _super.call(this, props) || this;

    _this.handleOpened = function (event) {
      var onOpened = _this.props.onOpened;

      if (typeof onOpened === 'function') {
        onOpened(event);
      }
    };

    _this.handleClosed = function (event) {
      var onClosed = _this.props.onClosed;

      if (typeof onClosed === 'function') {
        onClosed(event);
      }
    };

    _this.handleClick = function (item, index, event) {
      var _a = _this.props,
          onClick = _a.onClick,
          autoClose = _a.autoClose;

      if (typeof onClick === 'function') {
        onClick(item, index, event);
      }

      if (autoClose) {
        _this._reset(false); // TODO: Check behavior


        _this.handleClosed(event);
      }
    };

    _this.onTouchEnd = function (e) {
      if (_this.moveX === -_this.maxOffsetSize) {
        _this._reset(true);

        _this.handleOpened(e);

        return;
      }

      if (_this.moveX === 0) {
        _this._reset(false);

        _this.handleClosed(e);

        return;
      }

      if (_this.state._isOpened && _this.moveX < 0) {
        _this._reset(false);

        _this.handleClosed(e);

        return;
      }

      if (Math.abs(_this.moveX) < _this.maxOffsetSize * _this.moveRatio) {
        _this._reset(false);

        _this.handleClosed(e);
      } else {
        _this._reset(true);

        _this.handleOpened(e);
      }
    };

    _this.onChange = function (e) {
      _this.moveX = e.detail.x;
    };

    var isOpened = props.isOpened,
        maxDistance = props.maxDistance,
        areaWidth = props.areaWidth,
        moveRatio = props.moveRatio;
    _this.maxOffsetSize = maxDistance;
    _this.state = {
      componentId: uuid(),
      // eslint-disable-next-line no-extra-boolean-cast
      offsetSize: !!isOpened ? -_this.maxOffsetSize : 0,
      _isOpened: !!isOpened,
      needAnimation: false
    };
    _this.moveX = _this.state.offsetSize;
    _this.eleWidth = areaWidth;
    _this.moveRatio = moveRatio || 0.5;
    return _this;
  }

  AtSwipeAction.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;
    var _isOpened = this.state._isOpened;

    if (isOpened !== _isOpened) {
      this.moveX = isOpened ? 0 : this.maxOffsetSize;

      this._reset(!!isOpened); // TODO: Check behavior

    }
  };

  AtSwipeAction.prototype._reset = function (isOpened) {
    var _this = this;

    if (isOpened) {
      if (false) {} else {
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      }
    } else {
      this.setState({
        offsetSize: this.moveX
      }, function () {
        _this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      });
    }
  };

  AtSwipeAction.prototype.render = function () {
    var _this = this;

    var _a = this.state,
        componentId = _a.componentId,
        offsetSize = _a.offsetSize;
    var options = this.props.options;
    var rootClass = classnames('at-swipe-action', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      id: "swipeAction-" + componentId,
      className: rootClass,
      style: {
        width: this.eleWidth + "px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["MovableArea"], {
      className: 'at-swipe-action__area',
      style: {
        width: this.eleWidth + this.maxOffsetSize + "px",
        transform: "translate(-" + this.maxOffsetSize + "px, 0)"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["MovableView"], {
      className: 'at-swipe-action__content',
      direction: 'horizontal',
      damping: 50,
      x: offsetSize,
      onTouchEnd: this.onTouchEnd,
      onChange: this.onChange,
      style: {
        width: this.eleWidth + "px",
        left: this.maxOffsetSize + "px"
      }
    }, this.props.children, Array.isArray(options) && options.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtSwipeActionOptions, {
      options: options,
      componentId: componentId,
      customStyle: {
        transform: "translate(" + this.maxOffsetSize + "px, 0)",
        opacity: 1
      }
    }, options.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: item.text + "-" + key,
        style: item.style,
        onClick: function onClick(e) {
          return _this.handleClick(item, key, e);
        },
        className: classnames('at-swipe-action__option', item.className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'option__text'
      }, item.text));
    })) : null)));
  };

  return AtSwipeAction;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSwipeAction.defaultProps = {
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false,
  maxDistance: 0,
  areaWidth: 0
};
AtSwipeAction.propTypes = {
  isOpened: propTypes.bool,
  disabled: propTypes.bool,
  autoClose: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    text: propTypes.string,
    style: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.array])
  })),
  onClick: propTypes.func,
  onOpened: propTypes.func,
  onClosed: propTypes.func
};

var AtSearchBar =
/** @class */
function (_super) {
  __extends(AtSearchBar, _super);

  function AtSearchBar(props) {
    var _this = _super.call(this, props) || this;

    _this.handleFocus = function (event) {
      _this.setState({
        isFocus: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    };

    _this.handleBlur = function (event) {
      _this.setState({
        isFocus: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.handleChange = function (e) {
      _this.props.onChange(e.target.value, e);
    };

    _this.handleClear = function (event) {
      if (_this.props.onClear) {
        _this.props.onClear(event);
      } else {
        _this.props.onChange('', event);
      }
    };

    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };

    _this.handleActionClick = function (event) {
      _this.props.onActionClick && _this.props.onActionClick(event);
    };

    _this.state = {
      isFocus: !!props.focus
    };
    return _this;
  }

  AtSearchBar.prototype.render = function () {
    var _a = this.props,
        value = _a.value,
        placeholder = _a.placeholder,
        maxLength = _a.maxLength,
        fixed = _a.fixed,
        disabled = _a.disabled,
        showActionButton = _a.showActionButton,
        _b = _a.actionName,
        actionName = _b === void 0 ? '搜索' : _b,
        inputType = _a.inputType,
        // 处理issue#464
    className = _a.className,
        customStyle = _a.customStyle;
    var isFocus = this.state.isFocus;
    var fontSize = 14;
    var rootCls = classnames('at-search-bar', {
      'at-search-bar--fixed': fixed
    }, className);
    var placeholderWrapStyle = {};
    var actionStyle = {};

    if (isFocus || !isFocus && value) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = "0";
      placeholderWrapStyle.flexGrow = 0;
    } else if (!isFocus && !value) {
      placeholderWrapStyle.flexGrow = 1;
      actionStyle.opacity = 0;
      actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + fontSize / 2 + 10) + "px";
    }

    if (showActionButton) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = "0";
    }

    var clearIconStyle = {
      display: 'flex'
    };
    var placeholderStyle = {
      visibility: 'hidden'
    };

    if (!value.length) {
      clearIconStyle.display = 'none';
      placeholderStyle.visibility = 'visible';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-search-bar__input-cnt'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-search-bar__placeholder-wrap',
      style: placeholderWrapStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-search'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-search-bar__placeholder',
      style: placeholderStyle
    }, isFocus ? '' : placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      className: 'at-search-bar__input',
      type: inputType,
      confirmType: 'search',
      value: value,
      focus: isFocus,
      disabled: disabled,
      maxlength: maxLength,
      onInput: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-search-bar__clear',
      style: clearIconStyle,
      onTouchStart: this.handleClear
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-icon at-icon-close-circle'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-search-bar__action',
      style: actionStyle,
      onClick: this.handleActionClick
    }, actionName));
  };

  return AtSearchBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  inputType: 'text',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtSearchBar.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  maxLength: propTypes.number,
  fixed: propTypes.bool,
  focus: propTypes.bool,
  disabled: propTypes.bool,
  showActionButton: propTypes.bool,
  actionName: propTypes.string,
  inputType: propTypes.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onConfirm: propTypes.func,
  onActionClick: propTypes.func,
  onClear: propTypes.func
};

var AtLoadMore =
/** @class */
function (_super) {
  __extends(AtLoadMore, _super);

  function AtLoadMore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtLoadMore.prototype.onClick = function () {
    this.props.onClick && this.props.onClick(arguments);
  };

  AtLoadMore.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        loadingText = _a.loadingText,
        moreText = _a.moreText,
        status = _a.status,
        moreBtnStyle = _a.moreBtnStyle,
        noMoreTextStyle = _a.noMoreTextStyle,
        noMoreText = _a.noMoreText;
    var component = null;

    if (status === 'loading') {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActivityIndicator, {
        mode: 'center',
        content: loadingText
      });
    } else if (status === 'more') {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-load-more__cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
        full: true,
        onClick: this.onClick.bind(this),
        customStyle: moreBtnStyle
      }, moreText));
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-load-more__tip',
        style: noMoreTextStyle
      }, noMoreText);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-load-more', className),
      style: customStyle
    }, component);
  };

  return AtLoadMore;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtLoadMore.defaultProps = {
  customStyle: '',
  className: '',
  noMoreTextStyle: '',
  moreBtnStyle: '',
  status: 'more',
  loadingText: '加载中',
  moreText: '查看更多',
  noMoreText: '没有更多'
};
AtLoadMore.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  noMoreTextStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  moreBtnStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  status: propTypes.oneOf(['more', 'loading', 'noMore']),
  loadingText: propTypes.string,
  moreText: propTypes.string,
  noMoreText: propTypes.string,
  onClick: propTypes.func
};

var AtDivider =
/** @class */
function (_super) {
  __extends(AtDivider, _super);

  function AtDivider() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtDivider.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        content = _a.content,
        height = _a.height,
        fontColor = _a.fontColor,
        fontSize = _a.fontSize,
        lineColor = _a.lineColor;
    var rootStyle = {
      height: height ? "" + pxTransform(Number(height)) : ''
    };
    var fontStyle = {
      color: fontColor,
      'font-size': fontSize ? "" + pxTransform(Number(fontSize)) : ''
    };
    var lineStyle = {
      backgroundColor: lineColor
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-divider', className),
      style: mergeStyle(rootStyle, customStyle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-divider__content',
      style: fontStyle
    }, content === '' ? this.props.children : content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-divider__line',
      style: lineStyle
    }));
  };

  return AtDivider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
};
AtDivider.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  content: propTypes.string,
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fontColor: propTypes.string,
  fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  lineColor: propTypes.string
};

var AtCountdownItem =
/** @class */
function (_super) {
  __extends(AtCountdownItem, _super);

  function AtCountdownItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCountdownItem.prototype.formatNum = function (num) {
    return num <= 9 ? "0" + num : "" + num;
  };

  AtCountdownItem.prototype.render = function () {
    var _a = this.props,
        num = _a.num,
        separator = _a.separator;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-countdown__item'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-countdown__time-box'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-countdown__time'
    }, this.formatNum(num))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'at-countdown__separator'
    }, separator));
  };

  return AtCountdownItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
};
AtCountdownItem.propTypes = {
  num: propTypes.number.isRequired,
  separator: propTypes.string
};

var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};

var AtCountdown =
/** @class */
function (_super) {
  __extends(AtCountdown, _super);

  function AtCountdown(props) {
    var _this = _super.call(this, props) || this;

    var _a = _this.props,
        _b = _a.day,
        day = _b === void 0 ? 0 : _b,
        _c = _a.hours,
        hours = _c === void 0 ? 0 : _c,
        _d = _a.minutes,
        minutes = _d === void 0 ? 0 : _d,
        _e = _a.seconds,
        seconds = _e === void 0 ? 0 : _e;
    _this.seconds = toSeconds(day, hours, minutes, seconds);

    var _f = _this.calculateTime(),
        _day = _f.day,
        _hours = _f.hours,
        _minutes = _f.minutes,
        _seconds = _f.seconds;

    _this.state = {
      _day: _day,
      _hours: _hours,
      _minutes: _minutes,
      _seconds: _seconds
    };
    return _this;
  }

  AtCountdown.prototype.setTimer = function () {
    if (!this.timer) this.countdonwn();
  };

  AtCountdown.prototype.clearTimer = function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  AtCountdown.prototype.calculateTime = function () {
    var _a = __read([0, 0, 0, 0], 4),
        day = _a[0],
        hours = _a[1],
        minutes = _a[2],
        seconds = _a[3];

    if (this.seconds > 0) {
      day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
      hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
      minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
      seconds = Math.floor(this.seconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    }

    return {
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  AtCountdown.prototype.countdonwn = function () {
    var _this = this;

    var _a = this.calculateTime(),
        day = _a.day,
        hours = _a.hours,
        minutes = _a.minutes,
        seconds = _a.seconds;

    this.setState({
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    });
    this.seconds--;

    if (this.seconds < 0) {
      this.clearTimer();
      this.props.onTimeUp && this.props.onTimeUp();
      return;
    }

    this.timer = setTimeout(function () {
      _this.countdonwn();
    }, 1000);
  };

  AtCountdown.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;
    var day = nextProps.day,
        hours = nextProps.hours,
        minutes = nextProps.minutes,
        seconds = nextProps.seconds;
    this.seconds = toSeconds(day, hours, minutes, seconds);
    this.clearTimer();
    this.setTimer();
  };

  AtCountdown.prototype.componentDidMount = function () {
    this.setTimer();
  };

  AtCountdown.prototype.componentWillUnmount = function () {
    this.clearTimer();
  };

  AtCountdown.prototype.componentDidHide = function () {
    this.clearTimer();
  };

  AtCountdown.prototype.componentDidShow = function () {
    this.setTimer();
  };

  AtCountdown.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        format = _a.format,
        isShowDay = _a.isShowDay,
        isCard = _a.isCard,
        isShowHour = _a.isShowHour;
    var _b = this.state,
        _day = _b._day,
        _hours = _b._hours,
        _minutes = _b._minutes,
        _seconds = _b._seconds;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames({
        'at-countdown': true,
        'at-countdown--card': isCard
      }, className),
      style: customStyle
    }, isShowDay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _day,
      separator: format.day
    }), isShowHour && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _hours,
      separator: format.hours
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _minutes,
      separator: format.minutes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _seconds,
      separator: format.seconds
    }));
  };

  return AtCountdown;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isCard: false,
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};
AtCountdown.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  isCard: propTypes.bool,
  isShowDay: propTypes.bool,
  isShowHour: propTypes.bool,
  format: propTypes.object,
  day: propTypes.number,
  hours: propTypes.number,
  minutes: propTypes.number,
  seconds: propTypes.number,
  onTimeUp: propTypes.func
};

var AtSteps =
/** @class */
function (_super) {
  __extends(AtSteps, _super);

  function AtSteps() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtSteps.prototype.handleClick = function (current, event) {
    this.props.onChange(current, event);
  };

  AtSteps.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        items = _a.items,
        current = _a.current;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-steps', className),
      style: customStyle
    }, !!items && items.map(function (item, i) {
      var _a;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: item.title,
        className: classnames({
          'at-steps__item': true,
          'at-steps__item--active': i === current,
          'at-steps__item--inactive': i !== current
        }),
        onClick: _this.handleClick.bind(_this, i)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-steps__circular-wrap'
      }, i !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-steps__left-line'
      }), item.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames({
          'at-icon': true,
          'at-icon-check-circle': item.status === 'success',
          'at-icon-close-circle': item.status === 'error',
          'at-steps__single-icon': true,
          'at-steps__single-icon--success': item.status === 'success',
          'at-steps__single-icon--error': item.status === 'error'
        })
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-steps__circular'
      }, item.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: classnames('at-icon', (_a = {}, _a["at-icon-" + item.icon.value] = item.icon.value, _a['at-steps__circle-icon'] = true, _a))
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: 'at-steps__num'
      }, i + 1)), i !== items.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-steps__right-line'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-steps__title'
      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-steps__desc'
      }, item.desc));
    }));
  };

  return AtSteps;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtSteps.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  current: propTypes.number,
  items: propTypes.array,
  onChange: propTypes.func
};

var AtCurtain =
/** @class */
function (_super) {
  __extends(AtCurtain, _super);

  function AtCurtain() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCurtain.prototype.onClose = function (e) {
    e.stopPropagation();
    this.props.onClose(e);
  };

  AtCurtain.prototype._stopPropagation = function (e) {
    e.stopPropagation();
  };

  AtCurtain.prototype.render = function () {
    var _a;

    var _b = this.props,
        className = _b.className,
        customStyle = _b.customStyle,
        isOpened = _b.isOpened,
        closeBtnPosition = _b.closeBtnPosition;
    var curtainClass = classnames({
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    }, className);
    var btnCloseClass = classnames((_a = {
      'at-curtain__btn-close': true
    }, _a["at-curtain__btn-close--" + closeBtnPosition] = closeBtnPosition, _a));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: curtainClass,
      style: customStyle,
      onClick: this._stopPropagation
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-curtain__container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-curtain__body'
    }, this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: btnCloseClass,
      onClick: this.onClose.bind(this)
    }))));
  };

  return AtCurtain;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
};
AtCurtain.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  isOpened: propTypes.bool,
  closeBtnPosition: propTypes.string,
  onClose: propTypes.func
};

var AtMessage =
/** @class */
function (_super) {
  __extends(AtMessage, _super);

  function AtMessage(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000
    };
    _this._timer = null;
    return _this;
  }

  AtMessage.prototype.bindMessageListener = function () {
    var _this = this;

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.on('atMessage', function (options) {
      if (options === void 0) {
        options = {};
      }

      var message = options.message,
          type = options.type,
          duration = options.duration;
      var newState = {
        _isOpened: true,
        _message: message,
        _type: type,
        _duration: duration || _this.state._duration
      };

      _this.setState(newState, function () {
        clearTimeout(_this._timer);
        _this._timer = setTimeout(function () {
          _this.setState({
            _isOpened: false
          });
        }, _this.state._duration);
      });
    }); // 绑定函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.atMessage = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.trigger.bind(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter, 'atMessage');
  };

  AtMessage.prototype.componentDidShow = function () {
    this.bindMessageListener();
  };

  AtMessage.prototype.componentDidMount = function () {
    this.bindMessageListener();
  };

  AtMessage.prototype.componentDidHide = function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.off('atMessage');
  };

  AtMessage.prototype.componentWillUnmount = function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.off('atMessage');
  };

  AtMessage.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle;
    var _b = this.state,
        _message = _b._message,
        _isOpened = _b._isOpened,
        _type = _b._type;
    var rootCls = classnames({
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    }, "at-message--" + _type, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, _message);
  };

  return AtMessage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtMessage.defaultProps = {
  customStyle: '',
  className: ''
};
AtMessage.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string])
}; // 生成 jsx 二维矩阵

var generateMatrix = function generateMatrix(files, col, showAddBtn) {
  var matrix = [];
  var length = showAddBtn ? files.length + 1 : files.length;
  var row = Math.ceil(length / col);

  for (var i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      var lastArr = files.slice(i * col);

      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({
            type: 'btn',
            uuid: uuid()
          });
        } // 填补剩下的空列


        for (var j = lastArr.length; j < col; j++) {
          lastArr.push({
            type: 'blank',
            uuid: uuid()
          });
        }
      }

      matrix.push(lastArr);
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col));
    }
  }

  return matrix;
};

var ENV$3 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

var AtImagePicker =
/** @class */
function (_super) {
  __extends(AtImagePicker, _super);

  function AtImagePicker() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.chooseFile = function () {
      var _a = _this.props,
          _b = _a.files,
          files = _b === void 0 ? [] : _b,
          multiple = _a.multiple,
          count = _a.count,
          sizeType = _a.sizeType,
          sourceType = _a.sourceType;
      var filePathName = ENV$3 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'; // const count = multiple ? 99 : 1

      var params = {};

      if (multiple) {
        params.count = 99;
      }

      if (count) {
        params.count = count;
      }

      if (sizeType) {
        params.sizeType = sizeType;
      }

      if (sourceType) {
        params.sourceType = sourceType;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.chooseImage(params).then(function (res) {
        var targetFiles = res.tempFilePaths.map(function (path, i) {
          return {
            url: path,
            file: res[filePathName][i]
          };
        });
        var newFiles = files.concat(targetFiles);

        _this.props.onChange(newFiles, 'add');
      }).catch(_this.props.onFail);
    };

    _this.handleImageClick = function (idx) {
      _this.props.onImageClick && _this.props.onImageClick(idx, _this.props.files[idx]);
    };

    _this.handleRemoveImg = function (idx) {
      var _a = _this.props.files,
          files = _a === void 0 ? [] : _a;

      if (ENV$3 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
        window.URL.revokeObjectURL(files[idx].url);
      }

      var newFiles = files.filter(function (_, i) {
        return i !== idx;
      });

      _this.props.onChange(newFiles, 'remove', idx);
    };

    return _this;
  }

  AtImagePicker.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        files = _a.files,
        mode = _a.mode,
        _b = _a.length,
        length = _b === void 0 ? 4 : _b,
        _c = _a.showAddBtn,
        showAddBtn = _c === void 0 ? true : _c;
    var rowLength = length <= 0 ? 1 : length; // 行数

    var matrix = generateMatrix(files, rowLength, showAddBtn);
    var rootCls = classnames('at-image-picker', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, matrix.map(function (row, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-image-picker__flex-box',
        key: i + 1
      }, row.map(function (item, j) {
        return item.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-image-picker__flex-item',
          key: i * length + j
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-image-picker__item'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-image-picker__remove-btn',
          onClick: _this.handleRemoveImg.bind(_this, i * length + j)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          className: 'at-image-picker__preview-img',
          mode: mode,
          src: item.url,
          onClick: _this.handleImageClick.bind(_this, i * length + j)
        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-image-picker__flex-item',
          key: 'empty_' + i * length + j
        }, item.type === 'btn' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'at-image-picker__item at-image-picker__choose-btn',
          onClick: _this.chooseFile
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'add-bar'
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: 'add-bar'
        })));
      }));
    }));
  };

  return AtImagePicker;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtImagePicker.defaultProps = {
  className: '',
  customStyle: '',
  files: [],
  mode: 'aspectFill',
  showAddBtn: true,
  multiple: false,
  length: 4,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtImagePicker.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array]),
  customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
  files: propTypes.array,
  mode: propTypes.oneOf(['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']),
  showAddBtn: propTypes.bool,
  multiple: propTypes.bool,
  length: propTypes.number,
  onChange: propTypes.func,
  onImageClick: propTypes.func,
  onFail: propTypes.func,
  count: propTypes.number,
  sizeType: propTypes.array,
  sourceType: propTypes.array
};

var AtRange =
/** @class */
function (_super) {
  __extends(AtRange, _super);

  function AtRange(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (event) {
      if (_this.currentSlider && !_this.props.disabled) {
        var sliderValue = 0;
        var detail = getEventDetail(event);
        sliderValue = detail.x - _this.left;

        _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
      }
    };

    var _a = props.min,
        min = _a === void 0 ? 0 : _a,
        _b = props.max,
        max = _b === void 0 ? 100 : _b; // range 宽度

    _this.width = 0; // range 到屏幕左边的距离

    _this.left = 0;
    _this.deltaValue = max - min;
    _this.currentSlider = '';
    _this.state = {
      aX: 0,
      bX: 0
    };
    return _this;
  }

  AtRange.prototype.handleTouchMove = function (sliderName, event) {
    if (this.props.disabled) return;
    event.stopPropagation();
    var clientX = event.touches[0].clientX;
    this.setSliderValue(sliderName, clientX - this.left, 'onChange');
  };

  AtRange.prototype.handleTouchEnd = function (sliderName) {
    if (this.props.disabled) return;
    this.currentSlider = sliderName;
    this.triggerEvent('onAfterChange');
  };

  AtRange.prototype.setSliderValue = function (sliderName, targetValue, funcName) {
    var _a, _b;

    var _this = this;

    var distance = Math.min(Math.max(targetValue, 0), this.width);
    var sliderValue = Math.floor(distance / this.width * 100);

    if (funcName) {
      this.setState((_a = {}, _a[sliderName] = sliderValue, _a), function () {
        return _this.triggerEvent(funcName);
      });
    } else {
      this.setState((_b = {}, _b[sliderName] = sliderValue, _b));
    }
  };

  AtRange.prototype.setValue = function (value) {
    var _a = this.props.min,
        min = _a === void 0 ? 0 : _a;
    var aX = Math.round((value[0] - min) / this.deltaValue * 100); // fix issue #670

    var bX = Math.round((value[1] - min) / this.deltaValue * 100); // fix issue #670

    this.setState({
      aX: aX,
      bX: bX
    });
  };

  AtRange.prototype.triggerEvent = function (funcName) {
    var _a = this.props.min,
        min = _a === void 0 ? 0 : _a;
    var _b = this.state,
        aX = _b.aX,
        bX = _b.bX;
    var a = Math.round(aX / 100 * this.deltaValue) + min; // fix issue #670

    var b = Math.round(bX / 100 * this.deltaValue) + min; // fix issue #670

    var result = [a, b].sort(function (x, y) {
      return x - y;
    });

    if (funcName === 'onChange') {
      this.props.onChange && this.props.onChange(result);
    } else if (funcName === 'onAfterChange') {
      this.props.onAfterChange && this.props.onAfterChange(result);
    }
  };

  AtRange.prototype.updatePos = function () {
    var _this = this;

    delayQuerySelector('.at-range__container', 0).then(function (rect) {
      _this.width = Math.round(rect[0].width);
      _this.left = Math.round(rect[0].left);
    });
  };

  AtRange.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var value = nextProps.value;
    this.updatePos();

    if (this.props.value[0] !== value[0] || this.props.value[1] !== value[1]) {
      this.setValue(value);
    }
  };

  AtRange.prototype.componentDidMount = function () {
    var value = this.props.value;
    this.updatePos();
    this.setValue(value);
  };

  AtRange.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        sliderStyle = _a.sliderStyle,
        railStyle = _a.railStyle,
        trackStyle = _a.trackStyle,
        blockSize = _a.blockSize,
        disabled = _a.disabled;
    var rootCls = classnames('at-range', {
      'at-range--disabled': disabled
    }, className);
    var _b = this.state,
        aX = _b.aX,
        bX = _b.bX;
    var sliderCommonStyle = {
      width: blockSize ? blockSize + "PX" : '',
      height: blockSize ? blockSize + "PX" : '',
      marginLeft: blockSize ? -blockSize / 2 + "PX" : ''
    };

    var sliderAStyle = _assign(_assign({}, sliderCommonStyle), {
      left: aX + "%"
    });

    var sliderBStyle = _assign(_assign({}, sliderCommonStyle), {
      left: bX + "%"
    });

    var containerStyle = {
      height: blockSize ? blockSize + "PX" : ''
    };
    var smallerX = Math.min(aX, bX);
    var deltaX = Math.abs(aX - bX);
    var atTrackStyle = {
      left: smallerX + "%",
      width: deltaX + "%"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-range__container',
      style: containerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-range__rail',
      style: railStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-range__track',
      style: mergeStyle(atTrackStyle, trackStyle)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-range__slider',
      style: mergeStyle(sliderAStyle, sliderStyle),
      onTouchMove: this.handleTouchMove.bind(this, 'aX'),
      onTouchEnd: this.handleTouchEnd.bind(this, 'aX')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-range__slider',
      style: mergeStyle(sliderBStyle, sliderStyle),
      onTouchMove: this.handleTouchMove.bind(this, 'bX'),
      onTouchEnd: this.handleTouchEnd.bind(this, 'bX')
    })));
  };

  return AtRange;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0
};
AtRange.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  sliderStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  railStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  trackStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  value: propTypes.array,
  min: propTypes.number,
  max: propTypes.number,
  disabled: propTypes.bool,
  blockSize: propTypes.number,
  onChange: propTypes.func,
  onAfterChange: propTypes.func
};
var ENV$4 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

var AtIndexes =
/** @class */
function (_super) {
  __extends(AtIndexes, _super);

  function AtIndexes(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (item) {
      _this.props.onClick && _this.props.onClick(item);
    };

    _this.handleTouchMove = function (event) {
      event.stopPropagation();
      event.preventDefault();
      var list = _this.props.list;
      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);

      if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
        _this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-" + key;

        _this.jumpTarget(touchView, index);
      }
    };

    _this.handleTouchEnd = function () {
      _this.currentIndex = -1;
    };

    _this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    }; // 右侧导航高度

    _this.menuHeight = 0; // 右侧导航距离顶部高度

    _this.startTop = 0; // 右侧导航元素高度

    _this.itemHeight = 0; // 当前索引

    _this.currentIndex = -1;
    _this.listId = isTest() ? 'indexes-list-AOTU2018' : "list-" + uuid();
    return _this;
  }

  AtIndexes.prototype.jumpTarget = function (_scrollIntoView, idx) {
    var _this = this;

    var _a = this.props,
        _b = _a.topKey,
        topKey = _b === void 0 ? 'Top' : _b,
        list = _a.list;

    var _tipText = idx === 0 ? topKey : list[idx - 1].key;

    if (ENV$4 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      delayQuerySelector('.at-indexes', 0).then(function (rect) {
        var targetOffsetTop = _this.listRef.childNodes[idx].offsetTop;

        var _scrollTop = targetOffsetTop - rect[0].top;

        _this.updateState({
          _scrollTop: _scrollTop,
          _scrollIntoView: _scrollIntoView,
          _tipText: _tipText
        });
      });
      return;
    }

    this.updateState({
      _scrollIntoView: _scrollIntoView,
      _tipText: _tipText
    });
  };

  AtIndexes.prototype.__jumpTarget = function (key) {
    var list = this.props.list; // const index = _findIndex(list, ['key', key])

    var index = list.findIndex(function (item) {
      return item.key === key;
    });
    var targetView = "at-indexes__list-" + key;
    this.jumpTarget(targetView, index + 1);
  };

  AtIndexes.prototype.updateState = function (state) {
    var _this = this;

    var _a = this.props,
        isShowToast = _a.isShowToast,
        isVibrate = _a.isVibrate;
    var _scrollIntoView = state._scrollIntoView,
        _tipText = state._tipText,
        _scrollTop = state._scrollTop; // TODO: Fix dirty hack

    /* eslint-disable @typescript-eslint/no-non-null-assertion */

    this.setState({
      _scrollIntoView: _scrollIntoView,
      _tipText: _tipText,
      _scrollTop: _scrollTop,
      _isShowToast: isShowToast
    },
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    function () {
      clearTimeout(_this.timeoutTimer);
      _this.timeoutTimer = setTimeout(function () {
        _this.setState({
          _tipText: '',
          _isShowToast: false
        });
      }, 3000);
    });

    if (isVibrate) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.vibrateShort();
    }
  };

  AtIndexes.prototype.initData = function () {
    var _this = this;

    delayQuerySelector('.at-indexes__menu').then(function (rect) {
      var len = _this.props.list.length;
      _this.menuHeight = rect[0].height;
      _this.startTop = rect[0].top;
      _this.itemHeight = Math.floor(_this.menuHeight / (len + 1));
    });
  };

  AtIndexes.prototype.handleScroll = function (e) {
    if (e && e.detail) {
      this.setState({
        _scrollTop: e.detail.scrollTop
      });
    }
  };

  AtIndexes.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData();
    }
  };

  AtIndexes.prototype.componentDidMount = function () {
    if (ENV$4 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId);
    }

    this.initData();
  };

  AtIndexes.prototype.UNSAFE_componentWillMount = function () {
    this.props.onScrollIntoView && this.props.onScrollIntoView(this.__jumpTarget.bind(this));
  };

  AtIndexes.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        animation = _a.animation,
        topKey = _a.topKey,
        list = _a.list;
    var _b = this.state,
        _scrollTop = _b._scrollTop,
        _scrollIntoView = _b._scrollIntoView,
        _tipText = _b._tipText,
        _isShowToast = _b._isShowToast,
        isWEB = _b.isWEB;
    var toastStyle = {
      minWidth: pxTransform(100)
    };
    var rootCls = classnames('at-indexes', className);
    var menuList = list.map(function (dataList, i) {
      var key = dataList.key;
      var targetView = "at-indexes__list-" + key;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-indexes__menu-item',
        key: key,
        onClick: _this.jumpTarget.bind(_this, targetView, i + 1)
      }, key);
    });
    var indexesList = list.map(function (dataList) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        id: "at-indexes__list-" + dataList.key,
        className: 'at-indexes__list',
        key: dataList.key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'at-indexes__list-title'
      }, dataList.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtList, null, dataList.items && dataList.items.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtListItem, {
          key: item.name,
          title: item.name,
          onClick: _this.handleClick.bind(_this, item)
        });
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtToast, {
      customStyle: toastStyle,
      isOpened: _isShowToast,
      text: _tipText,
      duration: 2000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-indexes__menu',
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-indexes__menu-item',
      onClick: this.jumpTarget.bind(this, 'at-indexes__top', 0)
    }, topKey), menuList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
      className: 'at-indexes__body',
      id: this.listId,
      scrollY: true,
      scrollWithAnimation: animation,
      // eslint-disable-next-line no-undefined
      scrollTop: isWEB ? _scrollTop : undefined,
      scrollIntoView: !isWEB ? _scrollIntoView : '',
      onScroll: this.handleScroll.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-indexes__content',
      id: 'at-indexes__top'
    }, this.props.children), indexesList));
  };

  return AtIndexes;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtIndexes.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  animation: propTypes.bool,
  isVibrate: propTypes.bool,
  isShowToast: propTypes.bool,
  topKey: propTypes.string,
  list: propTypes.array,
  onClick: propTypes.func,
  onScrollIntoView: propTypes.func
};
AtIndexes.defaultProps = {
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: []
};
var dayjs_min = createCommonjsModule(function (module, exports) {
  !function (t, n) {
    module.exports = n();
  }(commonjsGlobal, function () {
    var t = "millisecond",
        n = "second",
        e = "minute",
        r = "hour",
        i = "day",
        s = "week",
        u = "month",
        o = "quarter",
        a = "year",
        h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        c = function c(t, n, e) {
      var r = String(t);
      return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t;
    },
        d = {
      s: c,
      z: function z(t) {
        var n = -t.utcOffset(),
            e = Math.abs(n),
            r = Math.floor(e / 60),
            i = e % 60;
        return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
      },
      m: function m(t, n) {
        var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
            r = t.clone().add(e, u),
            i = n - r < 0,
            s = t.clone().add(e + (i ? -1 : 1), u);
        return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(h) {
        return {
          M: u,
          y: a,
          w: s,
          d: i,
          D: "date",
          h: r,
          m: e,
          s: n,
          ms: t,
          Q: o
        }[h] || String(h || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
        $ = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        l = "en",
        m = {};

    m[l] = $;

    var y = function y(t) {
      return t instanceof v;
    },
        M = function M(t, n, e) {
      var r;
      if (!t) return l;
      if ("string" == typeof t) m[t] && (r = t), n && (m[t] = n, r = t);else {
        var i = t.name;
        m[i] = t, r = i;
      }
      return !e && r && (l = r), r || !e && l;
    },
        g = function g(t, n, e) {
      if (y(t)) return t.clone();
      var r = n ? "string" == typeof n ? {
        format: n,
        pl: e
      } : n : {};
      return r.date = t, new v(r);
    },
        D = d;

    D.l = M, D.i = y, D.w = function (t, n) {
      return g(t, {
        locale: n.$L,
        utc: n.$u,
        $offset: n.$offset
      });
    };

    var v = function () {
      function c(t) {
        this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
      }

      var d = c.prototype;
      return d.parse = function (t) {
        this.$d = function (t) {
          var n = t.date,
              e = t.utc;
          if (null === n) return new Date(NaN);
          if (D.u(n)) return new Date();
          if (n instanceof Date) return new Date(n);

          if ("string" == typeof n && !/Z$/i.test(n)) {
            var r = n.match(h);
            if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
          }

          return new Date(n);
        }(t), this.init();
      }, d.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, d.$utils = function () {
        return D;
      }, d.isValid = function () {
        return !("Invalid Date" === this.$d.toString());
      }, d.isSame = function (t, n) {
        var e = g(t);
        return this.startOf(n) <= e && e <= this.endOf(n);
      }, d.isAfter = function (t, n) {
        return g(t) < this.startOf(n);
      }, d.isBefore = function (t, n) {
        return this.endOf(n) < g(t);
      }, d.$g = function (t, n, e) {
        return D.u(t) ? this[n] : this.set(e, t);
      }, d.year = function (t) {
        return this.$g(t, "$y", a);
      }, d.month = function (t) {
        return this.$g(t, "$M", u);
      }, d.day = function (t) {
        return this.$g(t, "$W", i);
      }, d.date = function (t) {
        return this.$g(t, "$D", "date");
      }, d.hour = function (t) {
        return this.$g(t, "$H", r);
      }, d.minute = function (t) {
        return this.$g(t, "$m", e);
      }, d.second = function (t) {
        return this.$g(t, "$s", n);
      }, d.millisecond = function (n) {
        return this.$g(n, "$ms", t);
      }, d.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, d.valueOf = function () {
        return this.$d.getTime();
      }, d.startOf = function (t, o) {
        var h = this,
            f = !!D.u(o) || o,
            c = D.p(t),
            d = function d(t, n) {
          var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);
          return f ? e : e.endOf(i);
        },
            $ = function $(t, n) {
          return D.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);
        },
            l = this.$W,
            m = this.$M,
            y = this.$D,
            M = "set" + (this.$u ? "UTC" : "");

        switch (c) {
          case a:
            return f ? d(1, 0) : d(31, 11);

          case u:
            return f ? d(1, m) : d(0, m + 1);

          case s:
            var g = this.$locale().weekStart || 0,
                v = (l < g ? l + 7 : l) - g;
            return d(f ? y - v : y + (6 - v), m);

          case i:
          case "date":
            return $(M + "Hours", 0);

          case r:
            return $(M + "Minutes", 1);

          case e:
            return $(M + "Seconds", 2);

          case n:
            return $(M + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, d.endOf = function (t) {
        return this.startOf(t, !1);
      }, d.$set = function (s, o) {
        var h,
            f = D.p(s),
            c = "set" + (this.$u ? "UTC" : ""),
            d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
            $ = f === i ? this.$D + (o - this.$W) : o;

        if (f === u || f === a) {
          var l = this.clone().set("date", 1);
          l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
        } else d && this.$d[d]($);

        return this.init(), this;
      }, d.set = function (t, n) {
        return this.clone().$set(t, n);
      }, d.get = function (t) {
        return this[D.p(t)]();
      }, d.add = function (t, o) {
        var h,
            f = this;
        t = Number(t);

        var c = D.p(o),
            d = function d(n) {
          var e = g(f);
          return D.w(e.date(e.date() + Math.round(n * t)), f);
        };

        if (c === u) return this.set(u, this.$M + t);
        if (c === a) return this.set(a, this.$y + t);
        if (c === i) return d(1);
        if (c === s) return d(7);
        var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,
            l = this.$d.getTime() + t * $;
        return D.w(l, this);
      }, d.subtract = function (t, n) {
        return this.add(-1 * t, n);
      }, d.format = function (t) {
        var n = this;
        if (!this.isValid()) return "Invalid Date";

        var e = t || "YYYY-MM-DDTHH:mm:ssZ",
            r = D.z(this),
            i = this.$locale(),
            s = this.$H,
            u = this.$m,
            o = this.$M,
            a = i.weekdays,
            h = i.months,
            c = function c(t, r, i, s) {
          return t && (t[r] || t(n, e)) || i[r].substr(0, s);
        },
            d = function d(t) {
          return D.s(s % 12 || 12, t, "0");
        },
            $ = i.meridiem || function (t, n, e) {
          var r = t < 12 ? "AM" : "PM";
          return e ? r.toLowerCase() : r;
        },
            l = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: o + 1,
          MM: D.s(o + 1, 2, "0"),
          MMM: c(i.monthsShort, o, h, 3),
          MMMM: h[o] || h(this, e),
          D: this.$D,
          DD: D.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: c(i.weekdaysMin, this.$W, a, 2),
          ddd: c(i.weekdaysShort, this.$W, a, 3),
          dddd: a[this.$W],
          H: String(s),
          HH: D.s(s, 2, "0"),
          h: d(1),
          hh: d(2),
          a: $(s, u, !0),
          A: $(s, u, !1),
          m: String(u),
          mm: D.s(u, 2, "0"),
          s: String(this.$s),
          ss: D.s(this.$s, 2, "0"),
          SSS: D.s(this.$ms, 3, "0"),
          Z: r
        };

        return e.replace(f, function (t, n) {
          return n || l[t] || r.replace(":", "");
        });
      }, d.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, d.diff = function (t, h, f) {
        var c,
            d = D.p(h),
            $ = g(t),
            l = 6e4 * ($.utcOffset() - this.utcOffset()),
            m = this - $,
            y = D.m(this, $);
        return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3, c)[d] || m, f ? y : D.a(y);
      }, d.daysInMonth = function () {
        return this.endOf(u).$D;
      }, d.$locale = function () {
        return m[this.$L];
      }, d.locale = function (t, n) {
        if (!t) return this.$L;
        var e = this.clone(),
            r = M(t, n, !0);
        return r && (e.$L = r), e;
      }, d.clone = function () {
        return D.w(this.$d, this);
      }, d.toDate = function () {
        return new Date(this.valueOf());
      }, d.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, d.toISOString = function () {
        return this.$d.toISOString();
      }, d.toString = function () {
        return this.$d.toUTCString();
      }, c;
    }();

    return g.prototype = v.prototype, g.extend = function (t, n) {
      return t(n, v, g), g;
    }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
      return g(1e3 * t);
    }, g.en = m[l], g.Ls = m, g;
  });
});
/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject_1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _baseCreate = baseCreate;
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */

function baseLodash() {// No operation performed.
}

var _baseLodash = baseLodash;
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */

function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var _LodashWrapper = LodashWrapper;
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _arrayPush = arrayPush;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;
/** Used for built-in method references. */

var objectProto$2 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments;
/** Built-in value references. */

var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}

var _baseFlatten = baseFlatten;
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */

function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

var _apply = apply;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$1 = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax$1(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant(value) {
  return function () {
    return value;
  };
}

var constant_1 = constant;
/** Used to detect overreaching core-js shims. */

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;
/** Used for built-in method references. */

var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);

  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');

    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _defineProperty = defineProperty;
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity(value) {
  return value;
}

var identity_1 = identity;
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;
/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */

function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;
/* Built-in method references that are verified to be native. */

var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;
/** Used to store function metadata. */

var metaMap = _WeakMap && new _WeakMap();
var _metaMap = metaMap;
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */

function noop() {// No operation performed.
}

var noop_1 = noop;
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */

var getData = !_metaMap ? noop_1 : function (func) {
  return _metaMap.get(func);
};
var _getData = getData;
/** Used to lookup unminified function names. */

var realNames = {};
var _realNames = realNames;
/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */

function getFuncName(func) {
  var result = func.name + '',
      array = _realNames[result],
      length = hasOwnProperty$4.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;

    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }

  return result;
}

var _getFuncName = getFuncName;
/** Used as references for the maximum length and index of an array. */

var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */

function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
} // Ensure `LazyWrapper` is an instance of `baseLodash`.


LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var _LazyWrapper = LazyWrapper;
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _copyArray = copyArray;
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */

function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }

  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone;
/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */

function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }

    if (hasOwnProperty$5.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }

  return new _LodashWrapper(value);
} // Ensure wrappers are instances of `baseLodash`.


lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash = lodash;
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */

function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }

  if (func === other) {
    return true;
  }

  var data = _getData(other);

  return !!data && func === data[0];
}

var _isLaziable = isLaziable;
/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to compose bitmasks for function metadata. */

var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;
/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */

function createFlow(fromRight) {
  return _flatRest(function (funcs) {
    var length = funcs.length,
        index = length,
        prereq = _LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }

    while (index--) {
      var func = funcs[index];

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      if (prereq && !wrapper && _getFuncName(func) == 'wrapper') {
        var wrapper = new _LodashWrapper([], true);
      }
    }

    index = wrapper ? index : length;

    while (++index < length) {
      func = funcs[index];

      var funcName = _getFuncName(func),
          data = funcName == 'wrapper' ? _getData(func) : undefined;

      if (data && _isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[_getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && _isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }

    return function () {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray_1(value)) {
        return wrapper.plant(value).value();
      }

      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }

      return result;
    };
  });
}

var _createFlow = createFlow;
/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */

var flow = _createFlow();

var flow_1 = flow;
var TYPE_PRE_MONTH = -1;
var TYPE_NOW_MONTH = 0;
var TYPE_NEXT_MONTH = 1;
/** Used for built-in method references. */

var objectProto$6 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$6;
  return value === proto;
}

var _isPrototype = isPrototype;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;
/** Used for built-in method references. */

var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _baseKeys = baseKeys;
/* Built-in method references that are verified to be native. */

var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;
/* Built-in method references that are verified to be native. */

var Map = _getNative(_root, 'Map');

var _Map = Map;
/* Built-in method references that are verified to be native. */

var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;
/* Built-in method references that are verified to be native. */

var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;
/** `Object#toString` result references. */

var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag || _Map && getTag(new _Map()) != mapTag || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag || _WeakMap && getTag(new _WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

var _getTag = getTag;
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;
var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? _root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer;
});
/** `Object#toString` result references. */

var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && _freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
});
/* Node.js helper references. */


var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;
/** `Object#toString` result references. */

var mapTag$2 = '[object Map]',
    setTag$2 = '[object Set]';
/** Used for built-in method references. */

var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (isArrayLike_1(value) && (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }

  var tag = _getTag(value);

  if (tag == mapTag$2 || tag == setTag$2) {
    return !value.size;
  }

  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }

  for (var key in value) {
    if (hasOwnProperty$7.call(value, key)) {
      return false;
    }
  }

  return true;
}

var isEmpty_1 = isEmpty;

function handleActive(args, item) {
  var selectedDate = args.selectedDate;
  var _value = item._value;
  var start = selectedDate.start,
      end = selectedDate.end;
  var dayjsEnd = dayjs_min(end);
  var dayjsStart = start ? dayjs_min(start) : dayjsEnd;
  item.isSelected = _value.isSame(dayjsEnd) || _value.isSame(dayjsStart) || _value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd);
  item.isSelectedHead = _value.isSame(dayjsStart);
  item.isSelectedTail = _value.isSame(dayjsEnd);
  item.isToday = _value.diff(dayjs_min(Date.now()).startOf('day'), 'day') === 0;
  return item;
}

function handleMarks(args, item) {
  var options = args.options;
  var _value = item._value;
  var marks = options.marks;
  var markList = marks.filter(function (mark) {
    return dayjs_min(mark.value).startOf('day').isSame(_value);
  });
  item.marks = markList.slice(0, 1);
  return item;
} // export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options
// if (selectedDates.length === 0) return args
// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item
//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }
//   const { start, end } = date
//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')
//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
//   item.isHead = item.isHead || _value.isSame(dayjsStart)
//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })
//   return item
// }


function handleDisabled(args, item) {
  var options = args.options;
  var _value = item._value;
  var minDate = options.minDate,
      maxDate = options.maxDate;
  var dayjsMinDate = dayjs_min(minDate);
  var dayjsMaxDate = dayjs_min(maxDate);
  item.isDisabled = !!(minDate && _value.isBefore(dayjsMinDate)) || !!(maxDate && _value.isAfter(dayjsMaxDate));
  return item;
}

function handleValid(args, item) {
  var options = args.options;
  var _value = item._value;
  var validDates = options.validDates;

  if (!isEmpty_1(validDates)) {
    var isInclude = validDates.some(function (date) {
      return dayjs_min(date.value).startOf('day').isSame(_value);
    });
    item.isDisabled = !isInclude;
  }

  delete item._value;
  return item;
}

var plugins = [handleActive, handleMarks, handleDisabled, handleValid];
var TOTAL = 7 * 6;

function getFullItem(item, options, selectedDate, isShowStatus) {
  if (!isShowStatus) return item;
  var bindedPlugins = plugins.map(function (fn) {
    return fn.bind(null, {
      options: options,
      selectedDate: selectedDate
    });
  });
  return flow_1(bindedPlugins)(item);
}

function generateCalendarGroup(options) {
  return function (generateDate, selectedDate, isShowStatus) {
    var date = dayjs_min(generateDate);
    var format = options.format; // 获取生成日期的第一天 和 最后一天

    var firstDate = date.startOf('month');
    var lastDate = date.endOf('month');
    var preMonthDate = date.subtract(1, 'month');
    var list = [];
    var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天

    var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
    // 生成上个月的日期

    for (var i_1 = 1; i_1 <= preMonthLastDay + 1; i_1++) {
      var thisDate = firstDate.subtract(i_1, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_PRE_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }

    list.reverse(); // 生成这个月的日期

    for (var i_2 = 0; i_2 < nowMonthDays; i_2++) {
      var thisDate = firstDate.add(i_2, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_NOW_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    } // 生成下个月的日期


    var i = 1;

    while (list.length < TOTAL) {
      var thisDate = lastDate.add(i++, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_NEXT_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }

    return {
      list: list,
      value: generateDate
    };
  };
}

var _a;

var MAP = (_a = {}, _a[TYPE_PRE_MONTH] = 'pre', _a[TYPE_NOW_MONTH] = 'now', _a[TYPE_NEXT_MONTH] = 'next', _a);

var AtCalendarList =
/** @class */
function (_super) {
  __extends(AtCalendarList, _super);

  function AtCalendarList() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (item) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(item);
      }
    };

    _this.handleLongClick = function (item) {
      if (typeof _this.props.onLongClick === 'function') {
        _this.props.onLongClick(item);
      }
    };

    return _this;
  }

  AtCalendarList.prototype.render = function () {
    var _this = this;

    var list = this.props.list;
    if (!list || list.length === 0) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-calendar__list flex'
    }, list.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: "list-item-" + item.value,
        onClick: _this.handleClick.bind(_this, item),
        onLongPress: _this.handleLongClick.bind(_this, item),
        className: classnames('flex__item', "flex__item--" + MAP[item.type], {
          'flex__item--today': item.isToday,
          'flex__item--active': item.isActive,
          'flex__item--selected': item.isSelected,
          'flex__item--selected-head': item.isSelectedHead,
          'flex__item--selected-tail': item.isSelectedTail,
          'flex__item--blur': item.isDisabled || item.type === TYPE_PRE_MONTH || item.type === TYPE_NEXT_MONTH
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'flex__item-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'container-text'
      }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'flex__item-extra extra'
      }, item.marks && item.marks.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'extra-marks'
      }, item.marks.map(function (mark, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          key: key,
          className: 'mark'
        }, mark);
      })) : null));
    }));
  };

  return AtCalendarList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtCalendarHeader =
/** @class */
function (_super) {
  __extends(AtCalendarHeader, _super);

  function AtCalendarHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCalendarHeader.prototype.render = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-calendar__header header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u4E00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u4E8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u4E09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u56DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u4E94"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'header__flex-item'
    }, "\u516D")));
  };

  return AtCalendarHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var ANIMTE_DURATION = 300;
var defaultProps = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
};

var AtCalendarBody =
/** @class */
function (_super) {
  __extends(AtCalendarBody, _super);

  function AtCalendarBody(props) {
    var _this = _super.call(this, props) || this;

    _this.changeCount = 0;
    _this.currentSwiperIndex = 1;
    _this.startX = 0;
    _this.swipeStartPoint = 0;
    _this.isPreMonth = false;
    _this.maxWidth = 0;
    _this.isTouching = false;

    _this.getGroups = function (generateDate, selectedDate) {
      var dayjsDate = dayjs_min(generateDate);
      var arr = [];

      var preList = _this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);

      var nowList = _this.generateFunc(generateDate, selectedDate, true);

      var nextList = _this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);

      var preListIndex = _this.currentSwiperIndex === 0 ? 2 : _this.currentSwiperIndex - 1;
      var nextListIndex = _this.currentSwiperIndex === 2 ? 0 : _this.currentSwiperIndex + 1;
      arr[preListIndex] = preList;
      arr[nextListIndex] = nextList;
      arr[_this.currentSwiperIndex] = nowList;
      return arr;
    };

    _this.handleTouchStart = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }

      _this.isTouching = true;
      _this.startX = e.touches[0].clientX;
    };

    _this.handleTouchMove = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }

      if (!_this.isTouching) return;
      var clientX = e.touches[0].clientX;
      var offsetSize = clientX - _this.startX;

      _this.setState({
        offsetSize: offsetSize
      });
    };

    _this.animateMoveSlide = function (offset, callback) {
      _this.setState({
        isAnimate: true
      }, function () {
        _this.setState({
          offsetSize: offset
        });

        setTimeout(function () {
          _this.setState({
            isAnimate: false
          }, function () {
            callback && callback();
          });
        }, ANIMTE_DURATION);
      });
    };

    _this.handleTouchEnd = function () {
      if (!_this.props.isSwiper) {
        return;
      }

      var offsetSize = _this.state.offsetSize;
      _this.isTouching = false;
      var isRight = offsetSize > 0;
      var breakpoint = _this.maxWidth / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        var res = isRight ? _this.maxWidth : -_this.maxWidth;
        return _this.animateMoveSlide(res, function () {
          _this.props.onSwipeMonth(isRight ? -1 : 1);
        });
      }

      _this.animateMoveSlide(0);
    };

    _this.handleChange = function (e) {
      var _a = e.detail,
          current = _a.current,
          source = _a.source;

      if (source === 'touch') {
        _this.currentSwiperIndex = current;
        _this.changeCount += 1;
      }
    };

    _this.handleAnimateFinish = function () {
      if (_this.changeCount > 0) {
        _this.props.onSwipeMonth(_this.isPreMonth ? -_this.changeCount : _this.changeCount);

        _this.changeCount = 0;
      }
    };

    _this.handleSwipeTouchStart = function (e) {
      var _a = e.changedTouches[0],
          clientY = _a.clientY,
          clientX = _a.clientX;
      _this.swipeStartPoint = _this.props.isVertical ? clientY : clientX;
    };

    _this.handleSwipeTouchEnd = function (e) {
      var _a = e.changedTouches[0],
          clientY = _a.clientY,
          clientX = _a.clientX;
      _this.isPreMonth = _this.props.isVertical ? clientY - _this.swipeStartPoint > 0 : clientX - _this.swipeStartPoint > 0;
    };

    var validDates = props.validDates,
        marks = props.marks,
        format = props.format,
        minDate = props.minDate,
        maxDate = props.maxDate,
        generateDate = props.generateDate,
        selectedDate = props.selectedDate,
        selectedDates = props.selectedDates;
    _this.generateFunc = generateCalendarGroup({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });

    var listGroup = _this.getGroups(generateDate, selectedDate);

    _this.state = {
      listGroup: listGroup,
      offsetSize: 0,
      isAnimate: false
    };
    return _this;
  }

  AtCalendarBody.prototype.componentDidMount = function () {
    var _this = this;

    delayQuerySelector('.at-calendar-slider__main').then(function (res) {
      _this.maxWidth = res[0].width;
    });
  };

  AtCalendarBody.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var validDates = nextProps.validDates,
        marks = nextProps.marks,
        format = nextProps.format,
        minDate = nextProps.minDate,
        maxDate = nextProps.maxDate,
        generateDate = nextProps.generateDate,
        selectedDate = nextProps.selectedDate,
        selectedDates = nextProps.selectedDates;
    this.generateFunc = generateCalendarGroup({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });
    var listGroup = this.getGroups(generateDate, selectedDate);
    this.setState({
      offsetSize: 0,
      listGroup: listGroup
    });
  };

  AtCalendarBody.prototype.render = function () {
    var _this = this;

    var isSwiper = this.props.isSwiper;
    var _a = this.state,
        isAnimate = _a.isAnimate,
        offsetSize = _a.offsetSize,
        listGroup = _a.listGroup;

    if (!isSwiper) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'main__body body'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: 'body__slider body__slider--now'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarList, {
        list: listGroup[1].list,
        onClick: this.props.onDayClick,
        onLongClick: this.props.onLongClick
      }))));
    }
    /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */


    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
      circular: true,
      current: 1,
      skipHiddenItemLayout: true,
      className: classnames('main__body'),
      onChange: this.handleChange,
      vertical: this.props.isVertical,
      onAnimationFinish: this.handleAnimateFinish,
      onTouchEnd: this.handleSwipeTouchEnd,
      onTouchStart: this.handleSwipeTouchStart
    }, listGroup.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["SwiperItem"], {
        key: key,
        itemId: key.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarList, {
        list: item.list,
        onClick: _this.props.onDayClick,
        onLongClick: _this.props.onLongClick
      }));
    })));
  };

  AtCalendarBody.defaultProps = defaultProps;
  return AtCalendarBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtCalendarController =
/** @class */
function (_super) {
  __extends(AtCalendarController, _super);

  function AtCalendarController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCalendarController.prototype.render = function () {
    var _a = this.props,
        generateDate = _a.generateDate,
        minDate = _a.minDate,
        maxDate = _a.maxDate,
        monthFormat = _a.monthFormat,
        hideArrow = _a.hideArrow;
    var dayjsDate = dayjs_min(generateDate);
    var dayjsMinDate = !!minDate && dayjs_min(minDate);
    var dayjsMaxDate = !!maxDate && dayjs_min(maxDate);
    var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
    var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
    var minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : '';
    var maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: 'at-calendar__controller controller'
    }, hideArrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('controller__arrow controller__arrow--left', {
        'controller__arrow--disabled': isMinMonth
      }),
      onClick: this.props.onPreMonth.bind(this, isMinMonth)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Picker"], {
      mode: 'date',
      fields: 'month',
      end: maxDateValue,
      start: minDateValue,
      onChange: this.props.onSelectDate,
      value: dayjsDate.format('YYYY-MM')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: 'controller__info'
    }, dayjsDate.format(monthFormat))), hideArrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('controller__arrow controller__arrow--right', {
        'controller__arrow--disabled': isMaxMonth
      }),
      onClick: this.props.onNextMonth.bind(this, isMaxMonth)
    }));
  };

  return AtCalendarController;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var defaultProps$1 = {
  validDates: [],
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
};

var AtCalendar =
/** @class */
function (_super) {
  __extends(AtCalendar, _super);

  function AtCalendar(props) {
    var _this = _super.call(this, props) || this;

    _this.getSingleSelectdState = function (value) {
      var generateDate = _this.state.generateDate;
      var stateValue = {
        selectedDate: _this.getSelectedDate(value.valueOf())
      };
      var dayjsGenerateDate = value.startOf('month');
      var generateDateValue = dayjsGenerateDate.valueOf();

      if (generateDateValue !== generateDate) {
        _this.triggerChangeDate(dayjsGenerateDate);

        stateValue.generateDate = generateDateValue;
      }

      return stateValue;
    };

    _this.getMultiSelectedState = function (value) {
      var selectedDate = _this.state.selectedDate;
      var end = selectedDate.end,
          start = selectedDate.start;
      var valueUnix = value.valueOf();
      var state = {
        selectedDate: selectedDate
      };

      if (end) {
        state.selectedDate = _this.getSelectedDate(valueUnix, 0);
      } else {
        state.selectedDate.end = Math.max(valueUnix, +start);
        state.selectedDate.start = Math.min(valueUnix, +start);
      }

      return state;
    };

    _this.getSelectedDate = function (start, end) {
      var stateValue = {
        start: start,
        end: start
      };

      if (typeof end !== 'undefined') {
        stateValue.end = end;
      }

      return stateValue;
    };

    _this.triggerChangeDate = function (value) {
      var format = _this.props.format;
      if (typeof _this.props.onMonthChange !== 'function') return;

      _this.props.onMonthChange(value.format(format));
    };

    _this.setMonth = function (vectorCount) {
      var format = _this.props.format;
      var generateDate = _this.state.generateDate;

      var _generateDate = dayjs_min(generateDate).add(vectorCount, 'month');

      _this.setState({
        generateDate: _generateDate.valueOf()
      });

      if (vectorCount && typeof _this.props.onMonthChange === 'function') {
        _this.props.onMonthChange(_generateDate.format(format));
      }
    };

    _this.handleClickPreMonth = function (isMinMonth) {
      if (isMinMonth === true) {
        return;
      }

      _this.setMonth(-1);

      if (typeof _this.props.onClickPreMonth === 'function') {
        _this.props.onClickPreMonth();
      }
    };

    _this.handleClickNextMonth = function (isMaxMonth) {
      if (isMaxMonth === true) {
        return;
      }

      _this.setMonth(1);

      if (typeof _this.props.onClickNextMonth === 'function') {
        _this.props.onClickNextMonth();
      }
    }; // picker 选择时间改变时触发


    _this.handleSelectDate = function (e) {
      var value = e.detail.value;

      var _generateDate = dayjs_min(value);

      var _generateDateValue = _generateDate.valueOf();

      if (_this.state.generateDate === _generateDateValue) return;

      _this.triggerChangeDate(_generateDate);

      _this.setState({
        generateDate: _generateDateValue
      });
    };

    _this.handleDayClick = function (item) {
      var isMultiSelect = _this.props.isMultiSelect;
      var isDisabled = item.isDisabled,
          value = item.value;
      if (isDisabled) return;
      var dayjsDate = dayjs_min(value);
      var stateValue = {};

      if (isMultiSelect) {
        stateValue = _this.getMultiSelectedState(dayjsDate);
      } else {
        stateValue = _this.getSingleSelectdState(dayjsDate);
      }

      _this.setState(stateValue, function () {
        _this.handleSelectedDate();
      });

      if (typeof _this.props.onDayClick === 'function') {
        _this.props.onDayClick({
          value: item.value
        });
      }
    };

    _this.handleSelectedDate = function () {
      var selectDate = _this.state.selectedDate;

      if (typeof _this.props.onSelectDate === 'function') {
        var info = {
          start: dayjs_min(selectDate.start).format(_this.props.format)
        };

        if (selectDate.end) {
          info.end = dayjs_min(selectDate.end).format(_this.props.format);
        }

        _this.props.onSelectDate({
          value: info
        });
      }
    };

    _this.handleDayLongClick = function (item) {
      if (typeof _this.props.onDayLongClick === 'function') {
        _this.props.onDayLongClick({
          value: item.value
        });
      }
    };

    var _a = props,
        currentDate = _a.currentDate,
        isMultiSelect = _a.isMultiSelect;
    _this.state = _this.getInitializeState(currentDate, isMultiSelect);
    return _this;
  }

  AtCalendar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var currentDate = nextProps.currentDate,
        isMultiSelect = nextProps.isMultiSelect;
    if (!currentDate || currentDate === this.props.currentDate) return;

    if (isMultiSelect && this.props.isMultiSelect) {
      var _a = currentDate,
          start = _a.start,
          end = _a.end;
      var _b = this.props.currentDate,
          preStart = _b.start,
          preEnd = _b.end;

      if (start === preStart && preEnd === end) {
        return;
      }
    }

    var stateValue = this.getInitializeState(currentDate, isMultiSelect);
    this.setState(stateValue);
  };

  AtCalendar.prototype.getInitializeState = function (currentDate, isMultiSelect) {
    var end;
    var start;
    var generateDateValue;

    if (!currentDate) {
      var dayjsStart = dayjs_min();
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      return {
        generateDate: generateDateValue,
        selectedDate: {
          start: ''
        }
      };
    }

    if (isMultiSelect) {
      var _a = currentDate,
          cStart = _a.start,
          cEnd = _a.end;
      var dayjsStart = dayjs_min(cStart);
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      end = cEnd ? dayjs_min(cEnd).startOf('day').valueOf() : start;
    } else {
      var dayjsStart = dayjs_min(currentDate);
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      end = start;
    }

    return {
      generateDate: generateDateValue,
      selectedDate: this.getSelectedDate(start, end)
    };
  };

  AtCalendar.prototype.render = function () {
    var _a = this.state,
        generateDate = _a.generateDate,
        selectedDate = _a.selectedDate;
    var _b = this.props,
        validDates = _b.validDates,
        marks = _b.marks,
        format = _b.format,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        isSwiper = _b.isSwiper,
        className = _b.className,
        hideArrow = _b.hideArrow,
        isVertical = _b.isVertical,
        monthFormat = _b.monthFormat,
        selectedDates = _b.selectedDates;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames('at-calendar', className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarController, {
      minDate: minDate,
      maxDate: maxDate,
      hideArrow: hideArrow,
      monthFormat: monthFormat,
      generateDate: generateDate,
      onPreMonth: this.handleClickPreMonth,
      onNextMonth: this.handleClickNextMonth,
      onSelectDate: this.handleSelectDate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarBody, {
      validDates: validDates,
      marks: marks,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      isSwiper: isSwiper,
      isVertical: isVertical,
      selectedDate: selectedDate,
      selectedDates: selectedDates,
      generateDate: generateDate,
      onDayClick: this.handleDayClick,
      onSwipeMonth: this.setMonth,
      onLongClick: this.handleDayLongClick
    }));
  };

  AtCalendar.defaultProps = defaultProps$1;
  return AtCalendar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtFab =
/** @class */
function (_super) {
  __extends(AtFab, _super);

  function AtFab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtFab.prototype.onClick = function (e) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  };

  AtFab.prototype.render = function () {
    var _a;

    var _b = this.props,
        size = _b.size,
        className = _b.className,
        children = _b.children;
    var rootClass = classnames('at-fab', className, (_a = {}, _a["at-fab--" + size] = size, _a));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: rootClass,
      onClick: this.onClick.bind(this)
    }, children);
  };

  return AtFab;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtFab.propTypes = {
  size: propTypes.oneOf(['normal', 'small']),
  onClick: propTypes.func
};
AtFab.defaultProps = {
  size: 'normal'
};

var objectToString$2 = function objectToString$2(style) {
  if (style && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr_1 = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
    });
    return styleStr_1;
  } else if (style && typeof style === 'string') {
    return style;
  }

  return '';
};

var AtComponent =
/** @class */
function (_super) {
  __extends(AtComponent, _super);

  function AtComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */


  AtComponent.prototype.mergeStyle = function (style1, style2) {
    if (style1 && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(D_react_test_taro_test_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
      return Object.assign({}, style1, style2);
    }

    return objectToString$2(style1) + objectToString$2(style2);
  };

  return AtComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/flex.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/flex.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=vendors.js.map