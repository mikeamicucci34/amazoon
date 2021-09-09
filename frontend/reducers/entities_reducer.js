import { combineReducers } from 'redux';
import  usersReducer  from './user_reducer';
// import { sessionsReducer } from './sessions_reducer';
import productsReducer from './products_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer
});

export default entitiesReducer;