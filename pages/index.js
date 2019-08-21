import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import Link from 'next/link';
import Catalog from '../components/catalog/Catalog';
import './style.css'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    return {}
  }

  render () {
    return (
    <Fragment>
      <Header />
      <main>
        <Catalog />
      </main>
    </Fragment>
    )
  }
}


export default connect(
  null,
  null,
)(Index)
