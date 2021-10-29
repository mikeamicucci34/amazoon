import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { fetchProducts } from '../../../actions/product_actions'
import All from './all'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    fetchProducts: (query) => dispatch(fetchProducts(query)),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(All);