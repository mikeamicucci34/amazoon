import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
// import AmazonLogo from '../../../imgs/amazon_logo.png'
import HeaderModal from '../header/header_modal';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: " "
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    action() {
        return e => this.setState({ searchQuery: e.target.value })
    }

    handleSearch(e) {
        e.preventDefault();
        if (!this.state.searchQuery) {
            this.setState({ searchQuery: " "})
        }
        this.props.fetchProducts(this.state.searchQuery)
            .then(() => this.props.history.push(`/search/${this.state.searchQuery}`))
    }


    render() {
        const { currentUser, logout } = this.props

        const linkto = (
            currentUser ? '/logout' : '/login'
        )

        return (
            <div className='header'>
                <Link to="/" style={{ textDecoration: 'none' }}> 
                    <div className="header__logo">
                        {/* <img src={'../../../imgs/amazon_logo.png'}/> */}
                        <img src="https://amazoon-seeds.s3.amazonaws.com/amazon_logo.png"/>
                    </div>
                </Link>
                <div className="header__nav">
                    <span className="header__optionMapIcon">
                            <RoomOutlinedIcon/>
                    </span>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            {currentUser ? `Deliver to ${currentUser.username}` : "Hello"}
                        </span>
                        <span className="header__optionLineTwo">
                            {currentUser ? `New York 10002` : "Select your address"}
                        </span>
                    </div>
                </div>
                
                    <form onSubmit={this.handleSearch} className="header__search">
                        <input type="text"
                                value={this.state.searchQuery}
                                onChange={this.action()}
                                className="header__searchInput"
                                />
                    
                        <SearchIcon className="header__searchIcon"/>
                    </form>
                
                <div className="header__nav">
                    <div>
                        <HeaderModal currentUser={currentUser} logout={logout}/>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>

                    <div className="header__option">
                        <span className='header__optionLineOne'>
                            
                        </span>
                        <span className='header__optionLineTwo'>
                            <Link to="/carts">
                            <p><ShoppingCartIcon className="header__optionBasket"/>
                                Cart</p>
                            </Link>
                        </span>
                    </div>

                    {/* <div className="header__option">
                    <span className="header___optionLineOne">
                            
                        </span>
                        <span className="header___optionLineTwo">
                            Cart
                        </span>
                    </div> */}
                </div>
            </div>
        )
    }   
}

export default Header;
