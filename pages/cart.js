import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import CartList from '../components/cart/Cart';

class Cart extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`

    return {}
  }
  render () {
    return  (
    <Fragment>
      <Header />
      <CartList />
    </Fragment>
    )
  }
}

export default connect(
  null,
  null,
)(Cart)