
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Signup',
    navLink: <Link to='/login'>Sign-In</Link>
})

const mDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Signup)
