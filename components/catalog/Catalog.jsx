import React from 'react';
import Product from '../product/Product';
import { connect } from 'react-redux';

function Catalog({ products }) {
  return (
    <div className="catalog">
      {products.map(product => <Product key={product.id} cartProd={false} product={product}/>)}
    </div>
  )
}

function mapStateToProps(state) {
  const { products } = state;
  return {
    products,
  }
};

export default connect(mapStateToProps, null)(Catalog)
