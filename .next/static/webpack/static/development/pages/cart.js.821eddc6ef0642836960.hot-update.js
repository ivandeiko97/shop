webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./components/cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/cart/Cart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/Product */ "./components/product/Product.jsx");
/* harmony import */ var _Cart_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.css */ "./components/cart/Cart.css");
/* harmony import */ var _Cart_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "O:\\MyProject\\myShop\\shop\\components\\cart\\Cart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Cart(_ref) {
  var cart = _ref.cart,
      total = _ref.total;

  if (cart.length !== 0) {
    return __jsx("div", {
      className: "cartCatalog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, cart.map(function (product) {
      return __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: product.id,
        cartProd: true,
        product: product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    }), __jsx("div", {
      className: "cartCatalog_totalPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "total:"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "".concat(total, "$"))));
  }

  return __jsx("section", {
    className: "cartCatalog_empty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, " you cart is empty :("), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Order products")));
}

function mapStateToProps(state) {
  var cart = state.cart;
  return {
    cart: cart,
    total: cart.reduce(function (total, product) {
      return total + product.price * product.count;
    }, 0)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null)(Cart));

/***/ })

})
//# sourceMappingURL=cart.js.821eddc6ef0642836960.hot-update.js.map