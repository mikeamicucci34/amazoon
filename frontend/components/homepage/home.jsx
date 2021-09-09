import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header_container'
import Product from '../product/product';
import Footer from '../footer/footer'

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
                    <div className="homepage__container">
                        <div className="homepage_containerbackgroundImage">
                        
                        </div>
                        <div className="homepage_containerContents">
                            <Product/>
                            <Product/>
                            <Product/>
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