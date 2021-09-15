import { connect } from 'react-redux';
import Cart from '../cart/cart';
import { addCartItem, removeCartItem, fetchCartItem, fetchCartItems } from '../../actions/cart_actions'

const mSTP = state => ({
    items: Object.values(state.entities.carts),
    currentUser: state.entities.users[state.session.id] 
})

const mDTP = dispatch => ({
    addCartItem: (item) => dispatch(addCartItem(item)),
    removeCartItem: (itemId) => dispatch(removeCartItem(itemId)),
    fetchCartItem: (item) => dispatch(fetchCartItem(item)),
    fetchCartItems: () => dispatch(fetchCartItems())
})

export default connect(mSTP, mDTP)(Cart);