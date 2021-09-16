import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
// import AmazonLogo from '../../../imgs/amazon_logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }



    
    
    render() {
        const { currentUser } = this.props

        const linkto = (
            currentUser ? '/logout' : '/login'
        )

        return (
            <div className='header'>
                <Link to="/" style={{ textDecoration: 'none' }}> 
                    <div className="header__logo">
                        {/* <img src={'../../../imgs/amazon_logo.png'}/> */}
                        <img src="https://service-client.org/wp-content/uploads/Logo-Amazon-300x144.png"/>
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
                <div className="header__search">
                    <input type="text"
                            className="header__searchInput"/>
                    <SearchIcon className="header__searchIcon"/>
                </div>
                <div className="header__nav">
                    <Link to={linkto} style={{ textDecoration: 'none' }}> 
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Hello, {currentUser ? currentUser.username : "Sign In"} 
                            </span>
                            <span className="header__optionLineTwo">
                                Account & Lists
                            </span>
                        </div>
                    </Link>
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
                            0
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
