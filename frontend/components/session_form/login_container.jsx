import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import Login from './login';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Login',
    navLink: <Link to='/signup' style={{ textDecoration: 'none' }}>Create your Amazon Account</Link>
})

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Login)

