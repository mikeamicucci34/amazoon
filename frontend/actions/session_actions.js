import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

export const receiveCurrentUser = (currentUser) => {  
    return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})}

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => {
    
    return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})}

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = (user) => dispatch => (
    APIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
) // able to dispatch a function on failed promise (ex. receive session errors function)

export const signup = (user) => dispatch => {
    
    return (
    APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
    err => { 
        return (
        dispatch(receiveSessionErrors(err.responseJSON)))
    }))
}

export const logout = () => dispatch => (
    APIUtil.logout().then((user) => dispatch(logoutCurrentUser()))
)

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then((users) => dispatch(receiveAllUsers(users)))
)

