import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import { addCartItem } from '../../actions/cart_actions';
import SpecificProduct from './specific_product';
import { logout, fetchUsers } from '../../actions/session_actions'
import { fetchReviews, destroyReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    return ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.entities.users[state.session.id],
    productId: parseInt(ownProps.match.params.productId),
    reviews: Object.values(state.entities.reviews),
    users: Object.values(state.entities.users)
})
}

const mDTP = dispatch => ({
    addCartItem: (product) => dispatch(addCartItem(product)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    destroyReview: (reviewId, productId) => dispatch(destroyReview(reviewId, productId)),
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    logout: () => dispatch(logout()),
    fetchProducts: (query) => dispatch(fetchProducts(query))
})

export default connect(mSTP, mDTP)(SpecificProduct);
