import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Login from './login';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Login',
    navLink: <Link to='/signup'>Create your Amazon Account</Link>
})

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(Login)

