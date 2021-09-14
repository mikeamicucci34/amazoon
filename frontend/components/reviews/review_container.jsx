import { ownerWindow } from '@material-ui/core';
import { connect } from 'react-redux';
import Review from '../reviews/review';

const mSTP = (state, ownProps) => ({
    review: {
        title: "",
        description: "",
        rating: 0
    },
    product: state.entities.products.last
    // product: state.products[ownProps.match.params.productId] 
})

const mDTP = dispatch => ({
    createReview: (review) => postReview(review)
})

export default connect(mSTP, mDTP)(Review);