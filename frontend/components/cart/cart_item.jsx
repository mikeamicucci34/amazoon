import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { removeCartItem, product } = this.props

        return (

            <>
                <div className="cart__componentItemComponents">
                    <div>
                        <img src={product.photoUrl}/>
                    </div>
                    <div className="cart__componentItemDetails">
                        <h3>{product.title}</h3>
                        <p>In Stock</p>
                        <p>Eligible for free shipping and returns</p>
                        <div className="cart__componentItemDetailsQty">
                            <button>Qty: {product.quantity} </button>
                            <p>|</p>
                            <button onClick={() => removeCartItem(product.id)}>Delete</button>
                            <p>|</p>
                        </div>
                    </div>
                    <div className="cart__componentPriceItem">
                        <p> {product.price} </p>
                    </div>
                </div>

            </>
        )
    }

}

export default CartItem
