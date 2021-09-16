import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header_container'
import Product from '../product/product';
import Footer from '../footer/footer'
import SubHeader from '../header/sub_header'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {

        let productIdsForHomeBooks = {}
        const homepageTitles = ["Infinite Jest", "1984", "How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence"]

        this.props.allProducts.forEach( product => {
            for (let i = 0; i < homepageTitles.length; i++) {
               if (product.title === homepageTitles[i]) {
                   productIdsForHomeBooks[product.title] = product.id
               }
            }
        })

        return (
            <div className="home">
                <div className="home__container">
                    <div className="header__container"> 
                        <Header key={3}/>
                    </div>
                    <div>
                        <SubHeader/>
                    </div>
                    <div className="homepage__container">
                        <div className="homepage_containerbackgroundImage">
                        
                        </div>
                        <div className="homepage_containerContents">
                            <div className="homepage_containerAmazonsChoice">
                                <div className="homepage_containerAmazonsChoiceContents">
                                    <h4> Amazon's Choice </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["Infinite Jest"]}`}>
                                        <img src="https://m.media-amazon.com/images/I/41BQ+x2pIsL._AC_UY218_.jpg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="homepage_containerClassicRead">
                                <div className="homepage_containerClassicReadContents">
                                    <h4> Classic Read </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["1984"]}`}>
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/41DoIQLHzlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="homepage_containerDiscounted">
                                <div className="homepage_containerDiscountedContents">
                                    <h4> Recently Discounted </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence"]}`}>
                                        <img src="https://m.media-amazon.com/images/I/41kW6jKAlIL.jpg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="homepage_footer">
                            <Footer/>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}