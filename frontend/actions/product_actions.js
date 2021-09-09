import * as APIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

export const receiveALLProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

export const fetchProducts = () => dispatch => (
    APIUtil.fetchProducts().then((products) => dispatch(receiveALLProducts(products)))
)