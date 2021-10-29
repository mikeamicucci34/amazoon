import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Homepage from './home';
import { logout } from '../../actions/session_actions';
import { fetchProducts } from '../../actions/product_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
    

})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProducts: (query) => dispatch(fetchProducts(query))
})

export default withRouter(connect(mSTP, mDTP)(Homepage));