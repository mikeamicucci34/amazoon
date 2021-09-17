import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { fetchProducts } from '../../../actions/product_actions'
import Business from './business'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(Business);