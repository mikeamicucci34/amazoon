import * as APIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveALLProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const fetchProducts = (query) => dispatch => (
    APIUtil.fetchProducts(query).then((products) => dispatch(receiveALLProducts(products)))
)

export const fetchProduct = (productId) => dispatch => (
    APIUtil.fetchProduct(productId).then((product) => dispatch(receiveProduct(product)))
)