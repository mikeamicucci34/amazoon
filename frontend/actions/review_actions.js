import * as APIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_ALL_REVIEW"
export const REMOVE_REVIEW = "CREATE_REVIEW"


export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviews = (productId) => dispatch => {
    return (
        APIUtil.fetchReviews(productId).then((reviews) => dispatch(receiveReviews(reviews)))
    )
}

export const fetchReview = (productId) => dispatch => {
    return (
        APIUtil.fetchReview(productId).then((review) => dispatch(receiveReview(review)))
    )
}

export const postReview = (review, productId) => dispatch => {
    return (
        APIUtil.postReview(review, productId).then((review) => dispatch(receiveReview(review)))
    )
}

export const destroyReview = (reviewId, productId) => dispatch => {
    return (
        APIUtil.destroyReview(reviewId, productId).then((reviewId) => dispatch(removeReview(reviewId)))
    )
}

export const updateReview = (review, productId) => dispatch => {
    return (
        APIUtil.updateReview(review, productId).then((review) => dispatch(receiveReview(review)))
    )
}