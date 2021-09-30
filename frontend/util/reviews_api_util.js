export const fetchReviews = (productId) => (
    $.ajax({
        method: "GET",
        url: `/api/products/${productId}/reviews`
    })
)

export const fetchReview = (review, productId) => (
    $.ajax({
        method: "GET",
        url: `/api/products/${productId}/reviews/${review.id}`
    })
)

export const postReview = (review, productId) => (
    $.ajax({
        method: "POST",
        url: `/api/products/${productId}/reviews`,
        data: { review }
    })
)

export const destroyReview = (reviewId, productId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}/reviews/${reviewId}`
    })
)

export const updateReview = (review, productId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/products/${productId}/reviews/${review.id}`,
        data: { review }
    })
)