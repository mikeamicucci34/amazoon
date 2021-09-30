import React from 'react'
import { Link } from 'react-router-dom'

export default class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
        // this.destroyReview = this.destroyReview.bind(this)
    }

    destroyReview() {
        this.props.destroyReview(review.id, this.props.productId);
        this.setState({state: this.state})
    }
2
    render() {
        debugger;
        return(
            <div>
                <div className="review__container">
                    <div className="review__containerLeftCol">
                        <div className="review__containerCustomerReviewBars">

                        </div>
                        <div className="review__containerCustomerReviewNew">
                            <div>
                                <h3>Review this Product</h3>
                                <p>Share your thoughts with other customers</p>
                                <Link to={`/products/${this.props.productId}/review`}><button>Write a Customer Review</button></Link>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="review__containeRightCol">
                        <div className="review__reviewContentContainer">
                            {this.props.reviews.map(review => (
                                <>
                                    <div>
                                        <div>
                                            icon of person
                                        </div>
                                        <div>
                                            {this.props.currentUser.username}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            {review.rating}
                                        </div>
                                        <div>
                                            {review.title}
                                        </div>
                                    </div>
                                    <div>
                                        {review.description}
                                    </div>
                                    {this.props.currentUser.id === review.user_id ? 
                                        <>
                                            <button onClick={() => this.props.destroyReview(review.id, this.props.productId).then(() => this.forceUpdate())}>Delete</button>
                                            <Link to={`/products/${this.props.productId}/review/${review.id}`}>
                                                <button>Edit</button>
                                            </Link>
                                        </>
                                        : 
                                        null                                      
                                        }
                                </>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
