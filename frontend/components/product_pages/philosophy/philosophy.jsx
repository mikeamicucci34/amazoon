import React from 'react'
import Header from '../../header/header_container'
import Product from '../../product/product';
import Footer from '../../footer/footer'
import SubHeader from '../../header/sub_header'
import shortid from 'shortid';
import ProductShow from '../product_show'


class Philosophy extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {

        return(
            <div>
                <div>
                    <Header {...this.props} />
                </div>
                <div>
                    <SubHeader/>
                </div>
                <div className="productPage__home">
                    <div className="productPage__homeSideBar">
                        <h3>Section Coming Soon!</h3>
                        <div className="productPage__homeSideBarBox1">
                            <h4>Condition</h4>
                            <p>New</p>
                            <p>Used</p>
                            <p>Renewed</p>
                        </div>
                        <div className="productPage__homeSideBarBox2">
                            <h4>Amazon Prime</h4>
                            <img src="https://amazoon-seeds.s3.amazonaws.com/prime_logo.png"/>
                        </div>
                        <div className="productPage__homeSideBarBox3">
                            <h4>Climate Pledge Friendly</h4>
                            <p>Climate Pledge Friendly</p>
                        </div>
                        <div className="productPage__homeSideBarBox4">
                            <h4>Customer Reviews</h4>
                            <p> ⭐⭐⭐⭐ </p>
                            <p> ⭐⭐⭐ </p>
                            <p> ⭐⭐ </p>
                            <p> ⭐ </p>
                        </div>
                    </div>
                    <div>
                    {this.props.allProducts.map( product => {
                            if (product.category === "Philosophy") {
                                return <ProductShow key={shortid.generate()} product={product}/>
                            }
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Philosophy
