import React from 'react'
import { Link } from 'react-router-dom'

class HeaderModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            logout: null
        }

        this.engageClick = this.engageClick.bind(this)
        this.click = this.click.bind(this)
    }

   

      engageClick(e) {
        this.setState({hidden: !this.state.hidden})
    }

    click() {
        let carry = false
        this.props.logout();
        this.setState({logout: !carry})
    }

    render() {

        const { currentUser, logout } = this.props

       const modalButton = 
           (currentUser) ? 
                <button onClick={this.click}>
                    Log Out
                </button> 
            :
                <div>
                    <Link to="/login">
                        <button> Sign In / Sign Up </button>
                    </Link>
                </div>

        return(
            <div onClick={this.engageClick} className="header__option">
                <span className="header__optionLineOne">
                    Hello, {currentUser ? currentUser.username : "Sign In"} 
                </span>
                <span className="header__optionLineTwo">
                    Account & Lists
                </span>
                <div className={this.state.hidden ? "header__optionModelClear" : "header__optionModelEngaged"}>
                    {modalButton}
                </div>
            </div>
        )
    }
}

export default HeaderModal
