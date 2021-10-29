import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions'
import HumorousFiction from './humorous_fiction'
import { logout } from '../../../actions/session_actions';


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    fetchProducts: (query) => dispatch(fetchProducts(query)),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(HumorousFiction);