import { RECEIVE_ALL_PRODUCTS } from '../actions/product_actions'


const productsReducer = (oldState = {}, action) => {
switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
        return action.products  
    default:
        return oldState; 
}
}

export default productsReducer;