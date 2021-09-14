import React from 'react'
import { Link } from 'react-router-dom';

function Product() {
    return (
        <div className="product__container">
            <div className="product__componentImage">
                <img className="product__componentImage" src="https://m.media-amazon.com/images/I/61syYvz7BJL._AC_SL1500_.jpg"/>
            </div>
            <span className="product__componentTitle">
                Hidden Camera - 1080P Spy Camera with Audio and Video - Mini Nanny Cam - Portable Motion Detection Small 
                HD Secret Surveillance Camera Charger
            </span>
            <div className="product__componentRating">
                ⭐⭐⭐⭐
            </div>
            <span className="product__componentPrice">
                $999.99
            </span>
            <div className="product__componentCartContainer">
                <button className="product__componentCart">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product
