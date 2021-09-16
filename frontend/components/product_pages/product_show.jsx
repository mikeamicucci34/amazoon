import React from 'react'
import { Link } from 'react-router-dom'
 
class ProductShow extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
    const { product } = this.props
        debugger;
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
                                <pre>⭐⭐⭐⭐ 23,280 ratings </pre>
                            </div>
                            <div className="productPage__homeProductDisplayItemPrice">
                                {product.price}
                            </div>
                            <div className="productPage__homeProductDisplayItemPrice">
                                (prime logo) FREE Delivery Fri, Sep 17
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ProductShow
