import React from 'react'
import Header from '../header/header'
import SubHeader from '../header/sub_header'
import Footer from '../footer/footer'
import Product from '../product/product'
import CartItem from '../cart/cart_item'
import shortid from "shortid";
// import Alert from 'react-bootstrap/Alert'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     quantity: this.props.
        // }
        this.state = {
            checkout: ""
        }

        this.wipeCartItems = this.wipeCartItems.bind(this)
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    wipeCartItems() {
        this.props.items.forEach( item => {
            this.props.removeCartItem(item.id)
        })
        this.setState({ checkout: 'Your purchase has been completed!'})
    }

    render() {

        let totalCost = 0 
        this.props.items.forEach( item => {
            totalCost += (item.price * item.quantity)
        })

        let totalQuantity = 0 
        this.props.items.forEach( item => {
            totalQuantity += item.quantity
        })


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
                                { (this.props.items.length > 0) ?
                                    this.props.items.map( (item, idx) => {
                                           return ( 
                                           <CartItem removeCartItem={this.props.removeCartItem} product={item} key={idx} fetchCartItems={this.props.fetchCartItems} />
                                           )
                                    }) :
                                    <div>
                                        Your Cart is Empty
                                    </div>
                                }
                            </div>
                            <div className="cart__componentSubtotal">
                                <p> Subtotal ({totalQuantity} items): ${totalCost} </p>
                            </div>
                        </div>
                        <div className="cart__componentCheckout">
                            <p>Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
                            <h3>Subtotal ({totalQuantity} items): ${totalCost}</h3>
                            <div className="cart__componentCheckoutButton">
                            {this.props.items.length >= 1 ? <button onClick={() => this.wipeCartItems()}>Checkout</button> : null }
                            </div>
                            <h4> {this.state.checkout} </h4>
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
