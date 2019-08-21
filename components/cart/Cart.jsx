import React from 'react'
import Product from '../product/Product';
import Link from 'next/link';
import { connect } from 'react-redux';

function Cart({ cart, total }) {
  if (cart.length !== 0) {
    return (
      <div className="cartCatalog">
        {cart.map(product => <Product key={product.id} cartProd={true} product={product}/>)}
        <div className="cartCatalog_totalPrice">
          <span>total:</span>
          <p>{`${total}$`}</p>
        </div>
      </div>
    )
  }
  return (
    <section className="cartCatalog_empty">
      <p> you cart is empty :(</p>
      <Link href="/">
        <a>Order products</a>
      </Link>
    </section>
  )
}

function mapStateToProps(state) {
  const { cart } = state;
  return {
    cart,
    total: cart.reduce((total, product) => total + (product.price * product.count), 0),
  }
}

export default connect(mapStateToProps, null)(Cart);
