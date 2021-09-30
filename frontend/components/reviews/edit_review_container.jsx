import { ownerWindow } from '@material-ui/core';
import { connect } from 'react-redux';
import EditReview from '../reviews/edit_review';
import { updateReview, fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    debugger;
    return ({
        review: {
            id: state.entities.reviews[ownProps.match.params.reviewId].id,
            title: state.entities.reviews[ownProps.match.params.reviewId].title,
            description: state.entities.reviews[ownProps.match.params.reviewId].description,
            rating: state.entities.reviews[ownProps.match.params.reviewId].rating,
            product_id: parseInt(ownProps.match.params.productId),
            user_id: state.entities.users.id
        },
        // product: state.entities.products.last
        productId: parseInt(ownProps.match.params.productId)
    })
}

const mDTP = dispatch => ({
    updateReview: (review, productId) => dispatch(updateReview(review, productId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId))
})

export default connect(mSTP, mDTP)(EditReview);