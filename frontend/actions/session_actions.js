import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = (user) => dispatch => (
    APIUtil.login(user).then((user) => receiveCurrentUser(user),
    err => dispatch(receiveSessionErrors(err)))
) // able to dispatch a function on failed promise (ex. receive session errors function)

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then((user) => receiveCurrentUser(user),
    err => dispatch(receiveSessionErrors(err)))
)

export const logout = () => dispatch => (
    APIUtil.login().then(() => receiveCurrentUser(),
    err => dispatch(receiveSessionErrors(err)))
)


