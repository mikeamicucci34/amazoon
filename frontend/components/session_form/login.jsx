import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="login">
                <Link to='/'>
                    <img 
                        className='login__logo'
                        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
               </Link>
               <div className='login__container'>
                    <h1>Sign-In</h1>
                        <form>
                            <h5>Email</h5>
                            <input type="text"/>
                            <h5>Password</h5>
                            <input type="password"/>
                            <button type='submit' className="login__signInButton">Sign-In</button>
                        </form>
                            <p>By continuing, you agree to Amazon's Conidtions of Use and Privacy Notice</p>
                        <div className='login__redirect'>
                            <button className="login__registerButton">{this.props.navLink}</button>
                        </div>
               </div>
            </div>
        )
    }
}

export default Login
