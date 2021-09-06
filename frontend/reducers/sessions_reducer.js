import { RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER } from "../actions/session_actions";


    const _nullUser = Object.freeze({
        id: null
    })

const sessionsReducer = (oldState = _nullUser, action) => {
    debugger;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id} // setting id of the current user to the id of the current user passed in our action creator
        case LOGOUT_CURRENT_USER: 
            return _nullState; // reset our current user id to null when logged out, able to call _nullState to do this
        default:
            return oldState; 
    }
}

export default sessionsReducer;