import React from 'react'
import Header from '../header/header'
import SubHeader from '../header/sub_header'
import Footer from '../footer/footer'
import Product from '../product/product'
import CartItem from '../cart/cart_item'
import shortid from "shortid";


class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    render() {
        debugger;

        if (this.props.items.length === 0) {
            return null;
        }

        return (

            <div>
                <div>
                    <Header {...this.props}/>
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
                            <div>
                                { (this.props.items) ?
                                    this.props.items[0].map( (item, idx) => {
                                           return ( 
                                           <CartItem removeCartItem={this.props.removeCartItem} product={item} key={idx} fetchCartItems={this.props.fetchCartItems} />
                                           )
                                    }) :
                                    <div>
                                        nothing in cart
                                    </div>
                                }
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
}

export default Cart
