// fetchReviews - for a specific product
// createReview 
// deleteReview - only if user id matches creator id

export const fetchReviews = () => (
    $.ajax({
        method: "GET",
        url: `/api/reviews`
    })
)

export const postReview = (review) => (
    $.ajax({
        method: "POST",
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
)

export const destroyReview = (reviewId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/reviews/${reviewId}`
    })
)