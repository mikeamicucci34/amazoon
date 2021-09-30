import { connect } from 'react-redux';
import ReviewShow from '../reviews/review_show';

const mSTP = (state, ownProps) => {
    return ({
        // productId: state.entities.products[ownProps.params.match.productId]
    })
}

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews(review))
})

export default connect(mSTP, mDTP)(ReviewShow);