webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./components/product/Product.jsx":
/*!****************************************!*\
  !*** ./components/product/Product.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.css */ "./components/product/Product.css");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./redux/action.js");
var _jsxFileName = "O:\\MyProject\\myShop\\shop\\components\\product\\Product.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Product(props) {
  var title = props.title,
      description = props.description,
      price = props.price,
      count = props.count,
      id = props.id,
      cartProd = props.cartProd,
      buy = props.buy,
      deleteProduct = props.deleteProduct,
      plusCount = props.plusCount,
      minusCount = props.minusCount;

  if (cartProd) {
    return __jsx("section", {
      className: "cartProduct",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "cartProduct_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("button", {
      onClick: function onClick() {
        return deleteProduct(id);
      },
      className: "cartProduct_buttonDelete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "\xD7"), __jsx("div", {
      className: "cartProduct_description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, description)), __jsx("div", {
      className: "cartProduct_count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("button", {
      onClick: function onClick() {
        return plusCount(id);
      },
      className: " cartProduct_button cartProduct_button__plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "+"), __jsx("span", {
      className: "cartProduct_displayCount",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, count), __jsx("button", {
      onClick: function onClick() {
        return minusCount(id, '-');
      },
      disabled: count === 1,
      className: "cartProduct_button cartProduct_button__minus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "-")), __jsx("span", {
      className: "cartProduct_price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "".concat(price * count, "$"))));
  }

  return __jsx("section", {
    className: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h1", {
    className: "product_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, title), __jsx("p", {
    className: "product_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, description), __jsx("div", {
    className: "product_price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Price:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "".concat(price, "$"))), __jsx("button", {
    onClick: function onClick() {
      return buy(id, 1);
    },
    className: "product_buttonBuy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "buy"));
}

;

function mapDispatchToProps(dispatch) {
  return {
    buy: function buy(id, count) {
      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_4__["buyAction"])(id));
    },
    deleteProduct: function deleteProduct(id) {
      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_4__["deleteAction"])(id));
    },
    plusCount: function plusCount(id) {
      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_4__["plusCountAction"])(id));
    },
    minusCount: function minusCount(id) {
      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_4__["minusCountAction"])(id));
    }
  };
}

;

function mapStateToProps(state, ownProps) {
  var product = ownProps.product;
  return {
    title: product.title,
    description: product.description,
    price: product.price,
    id: product.id,
    count: product.count
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Product));

/***/ })

})
//# sourceMappingURL=cart.js.98f3ea3fc18b30765f14.hot-update.js.map