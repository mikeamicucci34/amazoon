import { connect } from 'react-redux';
import Cart from '../cart/cart';
import { addCartItem, removeCartItem, fetchCartItem, fetchCartItems } from '../../actions/cart_actions'
import { logout } from '../../actions/session_actions'
import { fetchProducts } from '../../actions/product_actions'


const mSTP = state => ({
    items: Object.values(state.entities.carts),
    currentUser: state.entities.users[state.session.id] 
})

const mDTP = dispatch => ({
    addCartItem: (item) => dispatch(addCartItem(item)),
    removeCartItem: (itemId) => dispatch(removeCartItem(itemId)),
    fetchCartItem: (item) => dispatch(fetchCartItem(item)),
    fetchCartItems: () => dispatch(fetchCartItems()),
    logout: () => dispatch(logout()),
    fetchProducts: (query) => dispatch(fetchProducts(query))
})

export default connect(mSTP, mDTP)(Cart);