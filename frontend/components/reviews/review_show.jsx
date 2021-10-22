import React from 'react'
import { Link } from 'react-router-dom'
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
    }  

    handleDelete(e) {
        e.preventDefault();
        this.props.destroyReview(this.props.review.id, this.props.productId)
    }

    render() {
        if (this.props.users === undefined) return null

        const { review, productId, currentUser } = this.props


        const deleteEdit = currentUser ? currentUser.id === review.user_id ? 
                            <>
                                <div className="deleteReview">
                                    <button onClick={(e) => this.handleDelete(e)}>Delete</button>
                                </div>
                                <div className="editReview">
                                    <Link to={`/products/${productId}/review/${review.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </div>
                            </>
                            : 
                            null 
                            :
                            null            

        const username = this.props.users.filter(user => user.id === review.user_id)[0].username

        const reviewStars = [];

        if (!review) return null;

        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                reviewStars.push(<StarIcon key={i}/>);
            } else {
                reviewStars.push(<StarBorderIcon key={i}/>);
            }
        }

       

        return(
            <>
                <div className="review__reviewContentContainer">
                    <div className="reviewPersonContainer">
                        <div className="reviewPersonIcon">
                        </div>
                        <div className="reviewPersonUsername">
                            {username}
                        </div>
                    </div>
                    <div>
                        <div>
                            {reviewStars}
                        </div>
                        <h3>
                            {review.title}
                        </h3>
                    </div>
                    <div className="reviewDescription">
                        {review.description}
                    </div>
                    <div className="deleteEditReviewContainer">
                        {deleteEdit}
                    </div>
                </div>
            </>
        )
    }
}