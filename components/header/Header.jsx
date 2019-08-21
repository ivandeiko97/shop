import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import './Header.css';

function Header({ count }) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <nav className="navigation">
          <ul className="navigation_list">
            <li className="navigation_catalog">
              <Link href="/" as={ process.env.BACKEND_URL + '/'}>
                <a>Catalog</a>
              </Link>
            </li>
            <li className="navigation_cart">
              <Link href="/cart" as={ process.env.BACKEND_URL + '/cart'}>
                <a className="navigation_cartLink">
                  <span>cart</span>
                  <span className={`navigation_count ${count === 0 ? 'hidden' : ''}`} >{count}</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    count: state.cart.reduce((count, product) => count + product.count, 0),
  }
};

export default connect(
  mapStateToProps,
  null,
)(Header)
