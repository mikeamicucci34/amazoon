import { connect } from 'react-redux';
import ReviewShow from '../reviews/review_show';

const mSTP = (state, ownProps) => ({

})

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews(review))
})

export default connect(mSTP, mDTP)(ReviewShow);