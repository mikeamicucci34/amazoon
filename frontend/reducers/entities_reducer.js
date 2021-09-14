import { combineReducers } from 'redux';
import  usersReducer  from './user_reducer';
// import { sessionsReducer } from './sessions_reducer';
import productsReducer from './products_reducer'
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;