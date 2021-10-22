import { connect } from "react-redux";
import { destroyReview, fetchReviews } from "../../actions/review_actions";
import ReviewIndex from "./review_index";
import { withRouter } from 'react-router'

const mSTP = state => ({
  reviews: Object.values(state.entities.reviews),
  currentUser: state.entities.users[state.session.id],
  users: Object.values(state.entities.users)
});

const mDTP = (dispatch) => ({
    destroyReview: (reviewId, productId) => dispatch(destroyReview(reviewId, productId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));