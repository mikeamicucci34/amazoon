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
        const homepageTitles = ["Infinite Jest", "1984", "How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence","The Fountainhead", "Brave New World", "Kafka on the Shore", "On the Road", "White Noise"]

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
                        <Header {...this.props}/>
                    </div>
                    <div>
                        <SubHeader/>
                    </div>
                    <div className="homepage__container">
                        <div className="homepage_containerbackgroundImage">
                        
                        </div>
                        <div className="homepage_containerContents">
                        <div className="homepage_containerContentsRow1">
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
                            <div className="homepage_containerDiscounted">
                                <div className="homepage_containerDiscountedContents">
                                    <h4> Recently Discounted </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["White Noise"]}`}>
                                        <img src="https://amazoon-seeds.s3.amazonaws.com/White+Noise.jpeg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="homepage_containerRow1EndCol">
                                <div className="homepage_containerEndCol1">
                                    <div className="homepage_containerEndCol1Container1">
                                        <p>restock your fridge with fresh</p>
                                        <p>Try ultrafast grocery (function coming soon...)</p>
                                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/composer/uploads/HomepageAdtopper/Fresh_SEPT_ALL_AdTopper_All_ONL_9efgbn9_1x._CB644763423_.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="homepage_containerEndCol2">
                                    <div className="homepage_containerEndCol1Container2">
                                        <p>Item coming soon...</p>
                                        <img src="https://m.media-amazon.com/images/I/61T7vSMjrAL._AC_SL1000_.jpg" alt=""/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="homepage_containerContentsRow2">
                            <div className="homepage_containerAmazonsChoice">
                                <div className="homepage_containerAmazonsChoiceContents">
                                    <h4> Amazon's Choice </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["The Fountainhead"]}`}>
                                        <img src="https://amazoon-seeds.s3.amazonaws.com/The+Fountainhead.jpeg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="homepage_containerClassicRead">
                                <div className="homepage_containerClassicReadContents">
                                    <h4> Classic Read </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["Brave New World"]}`}>
                                        <img src="https://amazoon-seeds.s3.amazonaws.com/Brave+New+World-+With+the+Essay+'Brave+New+World+Revisited'.jpeg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="homepage_containerDiscounted">
                                <div className="homepage_containerDiscountedContents">
                                    <h4> Recently Discounted </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["Kafka on the Shore"]}`}>
                                        <img src="https://amazoon-seeds.s3.amazonaws.com/Kafka+on+the+Shore.jpeg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="homepage_containerDiscounted">
                                <div className="homepage_containerDiscountedContents">
                                    <h4> Recently Discounted </h4>
                                    <Link to={`/products/${productIdsForHomeBooks["On the Road"]}`}>
                                        <img src="https://amazoon-seeds.s3.amazonaws.com/on_the_road.jpg"/>
                                        <p>see more</p>
                                    </Link>
                                </div>
                            </div>
                            </div>
                            {/* <div className="homepage_containerRow1EndCol">
                                <div className="homepage_containerEndCol1">
                                    <div className="homepage_containerEndCol1Container1">
                                        <p>restock your fridge with fresh</p>
                                        <p>Try ultrafast grocery (function coming soon...)</p>
                                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/composer/uploads/HomepageAdtopper/Fresh_SEPT_ALL_AdTopper_All_ONL_9efgbn9_1x._CB644763423_.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="homepage_containerEndCol2">
                                    <div className="homepage_containerEndCol1Container2">
                                        <p>Item coming soon...</p>
                                        <img src="https://m.media-amazon.com/images/I/61T7vSMjrAL._AC_SL1000_.jpg" alt=""/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        
                    </div>
                    <div className="homepage_footer">
                            <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}