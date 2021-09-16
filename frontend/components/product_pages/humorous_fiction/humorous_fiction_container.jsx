import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions'
import HumorousFiction from './humorous_fiction'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mSTP, mDTP)(HumorousFiction);