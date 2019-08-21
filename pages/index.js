import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import Link from 'next/link';
import Catalog from '../components/catalog/Catalog';

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
      <Link href="/cart" as={ process.env.BACKEND_URL + '/cart'}>
                <a className="navigation_cartLink">s</a>
                {/* <span className={`navigation_count ${count === 0 ? 'hidden' : ''}`} >{count}</span> */}
     </Link>
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
