import { ownerWindow } from '@material-ui/core';
import { connect } from 'react-redux';
import Review from '../reviews/create_review';
import { postReview, fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    return ({
        review: {
            title: "",
            description: "",
            rating: 1,
            product_id: parseInt(ownProps.match.params.productId),
            user_id: state.entities.users.id
        },
        // product: state.entities.products.last
        productId: parseInt(ownProps.match.params.productId)
    })
}

const mDTP = dispatch => ({
    createReview: (review, productId) => dispatch(postReview(review, productId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId))
})

export default connect(mSTP, mDTP)(Review);