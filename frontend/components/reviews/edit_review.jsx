import React from 'react'
import { Link } from 'react-router-dom';

export default class EditReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    action(field) {
        // debugger;
        return e => this.setState({ [field]: e.target.value })
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.productId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state, this.props.productId)
            .then(() => this.props.history.push(`/products/${this.state.product_id}`))
    }
    
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Overall Rating</p>
                        <input type="number"
                                value={this.state.rating}
                                onChange={this.action('rating')}/>
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
   