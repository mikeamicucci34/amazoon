import React from 'react';
import ReviewShow from './review_show';

export default class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.reviews) return null;


        const mappedReviews = this.props.reviews.reverse().map((review, idx) => {
                if (review.product_id === this.props.product.id) {
                    return <ReviewShow 
                        users={this.props.users} 
                        currentUser={this.props.currentUser} 
                        review={review} 
                        destroyReview={this.props.destroyReview} 
                        fetchReviews={this.props.fetchReviews}
                        productId={this.props.product.id} 
                        key={idx} />
                }
        })

        return (
            <>
                <div className="mappedReviews">
                    {mappedReviews}
                </div>
            </>
        )
    }
}
