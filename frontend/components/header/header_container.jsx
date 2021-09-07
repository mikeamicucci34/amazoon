import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Header);