import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions'


const productsReducer = (oldState = {}, action) => {
switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
        return action.products 
    case RECEIVE_PRODUCT:
        const addProduct = { [action.product.id]: action.product}
        return Object.assign({}, oldState, addProduct)
    default:
        return oldState; 
    }
}

export default productsReducer;