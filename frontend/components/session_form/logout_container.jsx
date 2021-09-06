import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Logout from './logout';
import { Link } from 'react-router-dom'

// const mSTP = state => ({
//     // currentUser: state.entities.users[state.session.id],
//     navLink: <Link to='/' style={{ textDecoration: 'none' }}>Signout!</Link>
// })

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(Logout)