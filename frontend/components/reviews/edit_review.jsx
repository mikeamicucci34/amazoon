import React from 'react'
import { Link } from 'react-router-dom';
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default class EditReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            title: "",
            rating: 1,
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    action(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    componentDidMount() {
        this.props.fetchReview(this.props.reviewId, this.props.productId)
        .then(res => this.setState(() => {
            return { 
                id: res.review.id,
                title: res.review.title,
                rating: res.review.rating,
                description: res.review.description    
            }
        }))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state, this.props.productId)
            .then(() => this.props.history.push(`/products/${this.props.productId}`))
    }
    
    render() {

        // if (this.state.review.length === 0) return null; 

        const starRatings = (
            <div>
                {[1,2,3,4,5].map((num, i) => {
                    const starnum = i + 1
                    const stars = starnum <= this.state.rating ? (
                    <StarIcon/>
                    ) : (
                    <StarBorderIcon/>
                    )
                return (
                    <>
                    <label>
                        <input type="radio"
                                name="rating"
                                className="star-ratings"
                                value={this.state.rating}
                                onClick={() => this.setState({ rating: starnum })}/>
                        {stars}
                    </label>
                    </>
                )}
            )}
            </div>
        )

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Overall Rating</p>
                        {starRatings}
                    </div>
                    <div>
                        <p>Add a Headline</p>
                        <input type="text"
                                value={this.state.title}
                                onChange={this.action('title')}/>
                    </div>
                    <div>
                        <p>Add a written review</p>
                        <input type="text"
                                value={this.state.description}
                                onChange={this.action('description')}/>
                    </div>
                    <div>
                        <button type="submit">Submit Review</button>
                    </div>
                </form>
            </div>
        )
    }
}
   