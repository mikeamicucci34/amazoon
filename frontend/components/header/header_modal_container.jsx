import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderModal from '../header/header_modal';
import { logout } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(HeaderModal);