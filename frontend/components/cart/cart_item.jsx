import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.product.quantity,
            price: this.props.product.price,
            productId: this.props.product.product_id,
            userId: this.props.currentUser.id
        }

        this.changeQty = this.changeQty.bind(this)
    }

    componentDidMount() {
        this.props.fetchCartItems()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantity !== this.state.quantity || prevState.quantity !== this.props.product.quantity ) {
            const updatedCart = {
                id: this.props.product.id,
                quantity: parseFloat(this.state.quantity),
                user_id: this.props.currentUser.id,
                product_id: this.props.product.product_id
            }
            this.props.appendCartItem(updatedCart)
            location.reload()
        }
    }  

    changeQty(e) {
        e.preventDefault();
        this.setState({ quantity: e.target.value })
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
                            <form>
                                Qty:      
                                    <select type="submit" id="qty" onChange={(e) => this.changeQty(e)} value={this.state.quantity}> 
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                            </form>
                            {/* <button>Qty: {product.quantity} </button> */}
                            <p>|</p>
                            <button onClick={() => removeCartItem(product.id)}>Delete</button>
                            <p>|</p>
                        </div>
                    </div>
                    <div className="cart__componentPriceItem">
                        <p> {this.state.price} </p>
                    </div>
                </div>

            </>
        )
    }

}

export default CartItem
