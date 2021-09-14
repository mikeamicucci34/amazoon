import React from 'react'
import Header from '../header/header'
import SubHeader from '../header/sub_header'
import Footer from '../footer/footer'
import Product from '../product/product'

function Cart() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <SubHeader/>
            </div>
            <div className="cart__page">
                <div className="cart__component">
                    <div className="cart__componentItems">
                        <h3>Shopping Cart</h3>
                        <div className="cart__componentPrice">
                            <p>Price</p>
                        </div>
                        <div className="cart__componentItemComponents">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/71-OlvG0LhL._AC_AA180_.jpg" alt=""/>
                                {/* {Product.image} */}
                            </div>
                            <div className="cart__componentItemDetails">
                                <h3>Pfister LG534-LPMB Arkitek Kitchen Faucet With Pull-Out Sprayhead</h3>
                                <p>In Stock</p>
                                <p>Eligible for free shipping and returns</p>
                                <div className="cart__componentItemDetailsQty">
                                    <button>Qty:</button>
                                    <p>|</p>
                                    <p>Delete</p>
                                    <p>|</p>
                                    <p>Save for Later</p>
                                    <p>|</p>
                                </div>
                            </div>
                            <div className="cart__componentPriceItem">
                                <p> 199.91 </p>
                            </div>
                        </div>
                        <div className="cart__componentSubtotal">
                               <p> Subtotal (x items) 199.91 </p>
                        </div>
                    </div>
                    <div className="cart__componentCheckout">
                        <p>Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
                        <h3>Subtotal (x items): 199.91</h3>
                        <div className="cart__componentCheckoutButton">
                        <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Cart
