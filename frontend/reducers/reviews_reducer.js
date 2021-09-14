import { RECEIVE_REVIEW, 
        REMOVE_REVIEW } from '../actions/review_actions'
import { RECEIVE_PRODUCT } from '../actions/product_actions'


const productsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_PRODUCT:
            return  Object.assign(nextState, action.reviews)
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
        default:
            return oldState; 
    }
}

export default productsReducer;