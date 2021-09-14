import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../actions/product_actions';
import SpecificProduct from './specific_product';

const mSTP = (state, ownProps) => {
    debugger;
    return ({
    product: state.entities.products[ownProps.match.params.productId],
    // productId: parseInt(ownProps.match.params.id)
})
}

const mDTP = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId))
})

export default connect(mSTP, mDTP)(SpecificProduct);
