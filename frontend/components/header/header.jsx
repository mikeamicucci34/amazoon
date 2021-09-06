import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className="header__logo">
                {/* <img src="../../../imgs/amazon_logo.png"
                        /> */}
            </div>
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
            </div>
            <div className="header__nav">
                <Link to='/login' style={{ textDecoration: 'none' }}> 
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello, Sign In
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
                <span className="header___optionLineOne">
                        
                    </span>
                    <span className="header___optionLineTwo">
                        Cart
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
