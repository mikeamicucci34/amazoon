import React from 'react'
import { Link } from 'react-router-dom';
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    action(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.props.createReview(this.state, this.props.productId)
            .then(() => this.props.history.push(`/products/${this.props.productId}`))
    }
    
    render() {

        // for (let i = 1; i <= 5; i++) {
        //     const num = i
        //     const stars = num <= this.state.rating ? (
        //          <StarIcon/>
        //         ) : (
        //         <StarBorderIcon/>
        //         )
        // }

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
                    <p>Overall Rating</p>
                    {starRatings}
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
   
