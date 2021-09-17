import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../actions/product_actions';
import { addCartItem } from '../../actions/cart_actions';
import SpecificProduct from './specific_product';
import { logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) => {
    // debugger;
    return ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.entities.users[state.session.id],
    productId: parseInt(ownProps.match.params.productId)
    // cart: {
    //     quantity: 1,
    //     user_id: state.session.id,
    //     product_id: parseInt(ownProps.match.params.productId)
    // }
})
}

const mDTP = dispatch => ({
    addCartItem: (product) => dispatch(addCartItem(product)),
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(SpecificProduct);
