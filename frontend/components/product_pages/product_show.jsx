import React from 'react'
import { Link } from 'react-router-dom'
 
class ProductShow extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
    const { product } = this.props
        return (
            <div>
                <div className="productPage__homeProductDisplay">
                    <div className="productPage__homeProductDisplayItem">
                        <Link to={`/products/${product.id}`}>
                            <div className="productPage__homeProductDisplayItemImage">
                                <img src={product.photoUrl} alt=""/>
                            </div>
                        </Link>
                        <div className="productPage__homeProductDisplayItemDetails">
                            <Link to={`/products/${product.id}`}>
                                <div className="productPage__homeProductDisplayItemTitle">
                                    <h3>{product.title}</h3>
                                </div>
                            </Link>
                            <div className="productPage__homeProductDisplayItemRating">
                                
                            </div>
                            <div className="productPage__homeProductDisplayItemPrice">
                                {product.price}
                            </div>
                            <div className="productPage__homeProductDisplayItemPrice">
                                <img src="https://amazoon-seeds.s3.amazonaws.com/prime_logo.png"/> 
                               <p> FREE Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ProductShow
