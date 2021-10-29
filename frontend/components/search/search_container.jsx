import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProducts } from '../../actions/product_actions'
import Search from '../search/search_result'

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    products: Object.values(state.entities.products),
    searchQuery: ownProps.match.params.searchQuery
})

const mDTP = dispatch => ({
    fetchProducts: (query) => dispatch(fetchProducts(query)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Search);