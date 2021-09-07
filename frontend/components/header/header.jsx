import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {

        debugger;
        const { currentUser } = this.props

        const linkto = (
            currentUser ? '/logout' : '/login'
        )

        return (
            <div className='header'>
                <Link to="/" style={{ textDecoration: 'none' }}> 
                    <div className="header__logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccVRi67YuQqLY1iuA0Kxf6lZv7FVYWgidjT_PfDXDNWVA8U1SDWe4WQYSi-dCeqkvWKY&usqp=CAU"/>
                    </div>
                </Link>
                <div className="header__nav">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello
                        </span>
                        <span className="header__optionLineTwo">
                            Select your address
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
                        <span className='header__optionLineOne'>0</span>
                        <span className='header__optionLineTwo'>
                            <ShoppingCartIcon className="header__optionBasket"/>
                            Cart
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
