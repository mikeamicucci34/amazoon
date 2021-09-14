import React from 'react'
import { Link } from 'react-router-dom';

export default class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    action(field) {
        debugger;
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
            // .then(() => this.props.history.push(`/products/${product.id}`))
    }
    
    render() {
        
        const { review } = this.props
        debugger;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Overall Rating</p>
                        <input type="number"
                                value={review.rating}
                                onChange={this.action('rating')}/>
                    </div>
                    <div>
                        <p>Add a Headline</p>
                        <input type="text"
                                value={review.title}
                                onChange={this.action('title')}/>
                    </div>
                    <div>
                        <p>Add a written review</p>
                        <input type="text"
                                value={review.description}
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
   
