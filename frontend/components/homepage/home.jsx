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


    render() {
        return (
            <div className="home">
                <div className="home__container">
                    <div className="header__container"> 
                        <Header/>
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
                                    <img src="https://m.media-amazon.com/images/I/41BQ+x2pIsL._AC_UY218_.jpg"/>
                                    <p>see more</p>
                                </div>
                            </div>
                            <div className="homepage_containerClassicRead">
                                <div className="homepage_containerClassicReadContents">
                                    <h4> Classic Read </h4>
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/41DoIQLHzlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"/>
                                    <p>see more</p>
                                </div>
                            </div>
                            <div className="homepage_containerDiscounted">
                                <div className="homepage_containerDiscountedContents">
                                    <h4> Recently Discounted </h4>
                                    <img src="https://m.media-amazon.com/images/I/41kW6jKAlIL.jpg"/>
                                    <p>see more</p>
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