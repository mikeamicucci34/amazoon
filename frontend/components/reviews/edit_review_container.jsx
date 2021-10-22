import { ownerWindow } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditReview from '../reviews/edit_review';
import { updateReview, fetchReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {    
    return ({
        // review: {
        //     id: state.entities.reviews[ownProps.match.params.reviewId].id,
        //     title: state.entities.reviews[ownProps.match.params.reviewId].title,
        //     description: state.entities.reviews[ownProps.match.params.reviewId].description,
        //     rating: state.entities.reviews[ownProps.match.params.reviewId].rating,
        //     product_id: parseInt(ownProps.match.params.productId),
        //     user_id: state.entities.users.id
        // },
        productId: parseInt(ownProps.match.params.productId),
        reviewId: parseInt(ownProps.match.params.reviewId)
    })
}

const mDTP = dispatch => ({
    updateReview: (review, productId) => dispatch(updateReview(review, productId)),
    fetchReview: (reviewId, productId) => dispatch(fetchReview(reviewId, productId))
})

export default withRouter(connect(mSTP, mDTP)(EditReview));