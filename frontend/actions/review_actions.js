import * as APIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_ALL_REVIEWS"
export const REMOVE_REVIEW = "CREATE_REVIEW"


export const receiveReview = (review) => ({
    type: RECEIVE_ALL_REVIEWS,
    review
})

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviews = () => dispatch => {
    return (
        APIUtil.fetchReviews().then((reviews) => dispatch(receiveReviews(reviews)))
    )
}

export const postReview = (review) => dispatch => {
    return (
        APIUtil.postReview(review).then((review) => dispatch(receiveReview(review)))
    )
}

export const destroyReview = (reviewId) => dispatch => {
    return (
        APIUtil.destroyReview(reviewId).then((reviewId) => dispatch(removeReview(reviewId)))
    )
}