import { combineReducers } from 'redux';
import { usersReducer } from './user_reducer';
// import { sessionsReducer } from './sessions_reducer';

const entitiesReducer = combineReducers({
    user: usersReducer
});

export default entitiesReducer;