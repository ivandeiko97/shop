webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/catalog/Catalog.jsx":
/*!****************************************!*\
  !*** ./components/catalog/Catalog.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/Product */ "./components/product/Product.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Catalog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Catalog.css */ "./components/catalog/Catalog.css");
/* harmony import */ var _Catalog_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Catalog_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "O:\\MyProject\\myShop\\shop\\components\\catalog\\Catalog.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Catalog(_ref) {
  var products = _ref.products;
  return __jsx("div", {
    className: "catalog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, products.map(function (product) {
    return __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: product.id,
      cartProd: false,
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
}

function mapStateToProps(state) {
  var products = state.products;
  return {
    products: products
  };
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Catalog));

/***/ })

})
//# sourceMappingURL=index.js.787eaca57b573b2fbb6a.hot-update.js.map