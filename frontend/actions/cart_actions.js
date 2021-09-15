import * as APIUtil from '../util/cart_api_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS"


export const receiveCartItems = (cart_items) => ({
    type: RECEIVE_ITEMS,
    cart_items
})

export const receiveCartItem = (cart_item) => ({
    type: RECEIVE_ITEM,
    cart_item
})

export const deleteCartItem = (cart_item) => ({
    type: REMOVE_ITEM,
    cart_item
})

//delete, add, fetch all, fetch one

export const addCartItem = (item) => dispatch => {
    debugger;
    return (
        APIUtil.addCartItem(item).then((cart_item) => dispatch(receiveCartItem(cart_item)))
    )
}

export const removeCartItem = (itemId) => dispatch => {
    return (
        APIUtil.removeCartItem(itemId).then((cart_item) => dispatch(deleteCartItem(cart_item)))
    )
}

export const fetchCartItem = (item) => dispatch => {
    return (
        APIUtil.fetchCartItem(item).then((cart_item) => dispatch(receiveCartItem(cart_item)))
    )
}

export const fetchCartItems = () => dispatch => {
    return (
        APIUtil.fetchCartItems().then((cart_items) => dispatch(receiveCartItem(cart_items)))
    )
}
