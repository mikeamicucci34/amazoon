import React from 'react'

export default class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

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
                                <button>Write a Customer Review</button>
                            </div>
                        </div>
                    </div>
                    <div className="review__containeRightCol">
                        <div className="review__reviewContentContainer">
                            <div>
                                <div>
                                    {/* <img src="Icon of person" alt=""/> */}
                                    icon of person
                                </div>
                                <div>
                                    Username of Reviewer
                                </div>
                            </div>
                            <div>
                                <div>
                                    star rating
                                </div>
                                <div>
                                    title of review
                                </div>
                            </div>
                            <div>
                                reviewed in the united states
                            </div>
                            <div>
                                review content review content review content review content review content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
