import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger;

        const { removeCartItem } = this.props

        return (

            <>
                <div className="cart__componentItemComponents">
                    <div>
                        <img src={Object.entries(this.props.product)[0].slice(1)[0].photoUrl}/>
                    </div>
                    <div className="cart__componentItemDetails">
                        <h3>{Object.entries(this.props.product)[0].slice(1)[0].title}</h3>
                        <p>In Stock</p>
                        <p>Eligible for free shipping and returns</p>
                        <div className="cart__componentItemDetailsQty">
                            <button>Qty: {Object.entries(this.props.product)[0].slice(1)[0].quantity} </button>
                            <p>|</p>
                            <button onClick={() => removeCartItem(Object.entries(this.props.product)[0].slice(1)[0].id)}>Delete</button>
                            <p>|</p>
                            <p>Save for Later</p>
                            <p>|</p>
                        </div>
                    </div>
                    <div className="cart__componentPriceItem">
                        <p> {Object.entries(this.props.product)[0].slice(1)[0].price} </p>
                    </div>
                </div>

            </>
        )
    }

}

export default CartItem
