import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { fetchProducts } from '../../../actions/product_actions'
import Classics from './classics'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mSTP, mDTP)(Classics);