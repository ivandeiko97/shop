webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/action.js":
/*!*************************!*\
  !*** ./redux/action.js ***!
  \*************************/
/*! exports provided: BUY_PRODUCT, DELETE_FROM_CART, PLUS_COUNT_PRODUCT, MINUS_COUNT_PRODUCT, buyAction, deleteAction, plusCountAction, minusCountAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUY_PRODUCT", function() { return BUY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_CART", function() { return DELETE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_COUNT_PRODUCT", function() { return PLUS_COUNT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUS_COUNT_PRODUCT", function() { return MINUS_COUNT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyAction", function() { return buyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAction", function() { return deleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plusCountAction", function() { return plusCountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minusCountAction", function() { return minusCountAction; });
var BUY_PRODUCT = 'BUY_PRODUCT';
var DELETE_FROM_CART = 'DELETE_FROM_CART';
var PLUS_COUNT_PRODUCT = 'PLUS_COUNT_PRODUCT';
var MINUS_COUNT_PRODUCT = 'MINUS_COUNT_PRODUCT';
function buyAction(id, count) {
  return {
    type: BUY_PRODUCT,
    id: id
  };
}
;
function deleteAction(id) {
  return {
    type: DELETE_FROM_CART,
    id: id
  };
}
;
function plusCountAction(id) {
  return {
    type: PLUS_COUNT_PRODUCT,
    id: id
  };
}
function minusCountAction(id) {
  return {
    type: MINUS_COUNT_PRODUCT,
    id: id
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.4028afb8e26ab4f19a90.hot-update.js.map