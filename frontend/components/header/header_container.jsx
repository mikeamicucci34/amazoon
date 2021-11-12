import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { fetchProducts } from '../../actions/product_actions'
import { fetchCartItems } from '../../actions/cart_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    items: Object.values(state.entities.carts)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProducts: (query) => dispatch(fetchProducts(query)),
    fetchCartItems: () => dispatch(fetchCartItems())
})

export default connect(mSTP, mDTP)(Header);