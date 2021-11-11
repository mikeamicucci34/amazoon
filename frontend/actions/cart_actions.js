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

export const deleteCartItem = (cart_itemId) => ({
    type: REMOVE_ITEM,
    cart_itemId
})

//delete, add, fetch all, fetch one

export const addCartItem = (item) => dispatch => {
    return (
        APIUtil.addCartItem(item).then((cart_item) => dispatch(receiveCartItem(cart_item)))
    )
}

export const removeCartItem = (itemId) => dispatch => {
    return (
        APIUtil.removeCartItem(itemId).then(() => dispatch(deleteCartItem(itemId)))
    )
}

export const fetchCartItem = (item) => dispatch => {
    return (
        APIUtil.fetchCartItem(item).then((cart_item) => dispatch(receiveCartItem(cart_item)))
    )
}

export const fetchCartItems = () => dispatch => {
    return (
        APIUtil.fetchCartItems().then((cart_items) => dispatch(receiveCartItems(cart_items)))
    )
}

export const appendCartItem = (item) => dispatch => {
    return (
        APIUtil.appendCartItem(item).then((cart_item) => dispatch(receiveCartItem(cart_item)))
    )
}
