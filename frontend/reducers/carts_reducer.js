import { RECEIVE_ITEM, REMOVE_ITEM, RECEIVE_ITEMS } from '../actions/cart_actions'


const productsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_ITEMS:
            debugger;
            return action.cart_items
        case RECEIVE_ITEM:
            debugger;
            nextState[action.cart_item.id] = action.cart_item
            return nextState;
        case REMOVE_ITEM:
            debugger;
            delete nextState[action.cart_itemId]
            return nextState;
        default:
            return oldState; 
    }
}

export default productsReducer;