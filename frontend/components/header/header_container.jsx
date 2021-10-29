import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { fetchProducts } from '../../actions/product_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProducts: (query) => dispatch(fetchProducts(query))
})

export default connect(mSTP, mDTP)(Header);