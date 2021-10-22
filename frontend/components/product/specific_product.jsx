import { Button } from '@material-ui/core';
import React from 'react'
import Header from '../header/header'
import SubHeader from '../header/sub_header'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessIcon from '@material-ui/icons/Business';
import Footer from '../footer/footer'
import Review from '../reviews/create_review'
import { Link } from 'react-router-dom'
import ReviewShow from '../reviews/review_show'
import shortid from "shortid";
import ReviewIndexContainer from '../reviews/review_index_container'
import ProgressBar from './progress-bar'

class SpecificProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            activeIndex: 1,
            productLoaded: null,
            reviews: this.props.reviews
        
        }


        this.changeQty = this.changeQty.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.colorChange = this.colorChange.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchReviews(this.props.match.params.productId);
        this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ reviews: nextProps.reviews})
    }

    ShouldComponentUpdate(nextProps, nextState) {
        if (this.props.product === undefined) return false
    }

    changeQty(e) {
        e.preventDefault();
        this.setState({ quantity: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser === undefined){
            () => this.props.history.push("/carts")
        } else {
        const cart = {
            quantity: this.state.quantity,
            user_id: this.props.currentUser.id,
            product_id: this.props.productId
        }
        this.props.addCartItem(cart).then(() => this.props.history.push("/carts"))
        }
    }

    colorChange = index => {
        this.setState({ activeIndex: index })
    }

    


    render() {

        // ratingsCount = if (this.props.reviews) {

        // }

        if (this.props.product === undefined) return null

        const kindlePrice = this.props.product.price
        return (
            <>
                <div>
                    <Header {...this.props}/>
                </div>
                <div>
                    <SubHeader/>
                </div>
                <div className="specificProduct__ad">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/falkor/gtm/reader/batch1/KV_Reader_Launch_ILM_Desktop_1x_650x45._CB670228783_.jpg"/>
                </div>
                <div className="specificProduct__container">
                    <div className="specificProduct__containerTop">
                        <div className="specificProduct__containerImage">
                            <img 
                                className="specificProduct__image"
                                src={this.props.product.photoUrl}/> 
                        </div>
                        <div className="specificProduct_continerContent">
                            <div className="specificProduct_continerContentHeader">
                                <div className="specificProduct__containerTitle">
                                    {this.props.product.title}
                                </div>
                                <div className="specificProduct__containerAuthor">
                                    <pre>by {this.props.product.author} (Author)  |  Format: Kindle Edition </pre>
                                </div>
                                <div className="specificProduct__containerRating">
                                    <pre>⭐⭐⭐⭐ 23,280 ratings </pre>
                                </div>
                                <hr/>
                            </div>
                            <div className="specificProduct__containerBookOptions">
                                <div className="specificProduct__BookOption1">
                                    <button className='specificProduct__containerBookOptionsActive'>
                                        Kindle <br/> {this.props.product.price}
                                    </button>
                                </div>
                                <div className="specificProduct__BookOption2">
                                    <button disabled>
                                        <p> Hardcover <br/> {((this.props.product.price) + 10).toFixed(2)} </p>
                                        </button>
                                </div>
                                <div className="specificProduct__BookOption3">
                                    <button disabled>
                                    <p> Paperback <br/> {((this.props.product.price) + 3).toFixed(2)} </p>
                                    </button>
                                </div>
                                <div className="specificProduct__BookOption4">
                                    <button disabled>
                                    Audiobook <br/> {this.props.product.price}
                                    </button>
                                </div>
                            </div>
                            <div className="specificProduct__containerDescription">
                                    {this.props.product.description}  
                            </div>
                            <hr/>
                            <div className="specificProduct__containerDescription"> 

                            </div>
                            <div className="specificProduct__containerFileContent">
                                Due to its large file size, this book may take longer to download
                                <hr/>
                            </div>
                            <div className="specificProduct__containerIcons">
                                <div className="specificProduct__containerIconsPrintLength">
                                    <p>Print Length</p>
                                    <MenuBookIcon/>
                                    <p>{this.props.product.pages} pages</p>
                                </div>
                                <div className="specificProduct__containerIconsLanguage">
                                    <p>Language</p>
                                    <LanguageIcon/>
                                    <p>English</p>
                                </div>
                                <div className="specificProduct__containerIconsPublisher">
                                    <p>Publisher</p>
                                    <BusinessIcon/>
                                    <p>Mike A's Books</p>
                                </div>
                            </div>
                        </div>
                        <div className="specificProduct__checkoutContainer">
                            <div className="specificProduct__checkoutContainerParams">
                                <div>
                                    <pre> Price: {kindlePrice} </pre>
                                </div>
                                <div>
                                    <pre> Sold by: Mike A's Books </pre>
                                </div>
                            </div>
                            <div className="specificProduct__checkoutContainerDisclosure">
                            <p> By purchasing or adding this title to your cart you may be eligible to receive an eBook credit toward select titles. </p>
                            </div>
                            <form className="specificProduct__checkoutContainerForm" onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="qty">Qty:      
                                            <select id="qty" onChange={this.changeQty} value={this.state.quantity}> 
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                            </select>
                                    </label> 
                                </div>
                                <div className="specificProduct__checkoutContainerButton">
                                    {this.props.currentUser ? <button type="submit"> Add to Cart </button> :
                                        <Link to="/login">
                                            <button type="submit"> Add to Cart </button>
                                        </Link>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="specificProduct__containerBottom">
                        <div className="review__container">
                            <div className="review__containerLeftCol">
                                <div className="review__containerCustomerReviewNew">
                                    <div>
                                        <h3>Review this Product</h3>
                                        <p>Share your thoughts with other customers</p>
                                        <Link to={`/products/${this.props.productId}/review`}><button>Write a Customer Review</button></Link>
                                    </div>
                                </div>
                                <div className="progress_bars">
                                    <div className="progress_bars_individual">
                                        <p>5 star</p>
                                        <ProgressBar className="progress_bars5" bgcolor={'black'} completed={60}/> 
                                    </div>
                                    <div className="progress_bars_individual">
                                        <p>4 star</p>
                                        <ProgressBar bgcolor={'black'} completed={60}/> 
                                    </div>
                                     <div className="progress_bars_individual">
                                        <p>3 star</p>
                                        <ProgressBar bgcolor={'black'} completed={60}/> 
                                    </div>
                                    <div className="progress_bars_individual">
                                        <p>2 star</p>
                                        <ProgressBar bgcolor={'black'} completed={60}/> 
                                    </div>
                                    <div className="progress_bars_individual">
                                        <p>1 star</p>
                                        <ProgressBar bgcolor={'black'} completed={60}/> 
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="review__containerRightCol">
                                <ReviewIndexContainer product={this.props.product}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default SpecificProduct;
