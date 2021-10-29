import React from 'react';
import ReviewShow from './review_show';
import ProgressBar from '../product/progress-bar'
import { Link } from 'react-router-dom'
import { BorderAllTwoTone } from '@material-ui/icons';

export default class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.reviews) return null;

        const reviewCount = this.props.reviews.filter(review => review.product_id === this.props.product.id).length;

        let oneStar = 0;
        let twoStar = 0;
        let threeStar = 0;
        let fourStar = 0;
        let fiveStar = 0;

        const mappedReviews = this.props.reviews.reverse().map((review, idx) => {
                if (review.product_id === this.props.product.id) {
                    switch (review.rating) {
                        case 1:
                            oneStar += 1;
                            break;
                        case 2:
                            twoStar += 1;
                            break;
                        case 3:
                            threeStar += 1;
                            break;
                        case 4:
                            fourStar += 1;
                            break;
                        case 5:
                            fiveStar += 1;
                            break;
                    }
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
        
            let fiveStarPercentage = reviewCount ? Math.trunc((fiveStar/reviewCount) * 100) : "0"
            let fourStarPercentage =  reviewCount ? Math.trunc((fourStar/reviewCount) * 100) : "0"
            let threeStarPercentage =  reviewCount ? Math.trunc((threeStar/reviewCount) * 100) : "0"
            let twoStarPercentage = reviewCount ? Math.trunc((twoStar/reviewCount) * 100) : "0"
            let oneStarPercentage = reviewCount ? Math.trunc((oneStar/reviewCount) * 100) : "0"

        return (
            <>
                <div className="review__containerLeftCol">
                    <div className="review__containerCustomerReviewNew">
                        <div className="reviewButton">
                            <h3>Review this Product</h3>
                            <p>Share your thoughts with other customers</p>
                            <Link to={`/products/${this.props.product.id}/review`}><button>Write a Customer Review</button></Link>
                        </div>
                    </div>
                    <div className="progress_bars">
                        <div className="progress_bars_individual">
                            <p>5 star</p>
                            <ProgressBar className="progress_bars5" completed={fiveStarPercentage}/>
                            <p>{fiveStarPercentage}%</p> 
                        </div>
                        <div className="progress_bars_individual">
                            <p>4 star</p>
                            <ProgressBar completed={fourStarPercentage}/> 
                            <p>{fourStarPercentage}%</p> 
                        </div>
                            <div className="progress_bars_individual">
                            <p>3 star</p>
                            <ProgressBar completed={threeStarPercentage}/>
                            <p>{threeStarPercentage}%</p> 
                        </div>
                        <div className="progress_bars_individual">
                            <p>2 star</p>
                            <ProgressBar completed={twoStarPercentage}/>
                            <p>{twoStarPercentage}%</p> 
                        </div>
                        <div className="progress_bars_individual">
                            <p>1 star</p>
                            <ProgressBar completed={oneStarPercentage}/>
                            <p>{oneStarPercentage}%</p> 
                        </div>
                    </div>
                </div>
                <br/>
                <div className="review__containerRightCol">
                    <div className="mappedReviews">
                        {mappedReviews}
                    </div>
                </div>
            </>
        )
    }
}
