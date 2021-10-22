import React from 'react'
import { Link } from 'react-router-dom'
import shortid from "shortid";
import { logout } from '../../util/session_api_util';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.demoUser = {
            email: "demouser@gmail.com",
            password: "demouser"
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.engageDemoUser = this.engageDemoUser.bind(this)
    }

    action(field) {
        return e => this.setState({ [field]: e.currentTarget.value}) 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/"))
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    showErrors() {
        return (
            <ul className="login__errors">
                {this.props.errors.map(error => (
                    <div key={shortid.generate()}>
                        {error}
                    </div>
                ))}
            </ul>
        )
    }

    engageDemoUser(e) {
        e.preventDefault();
        this.props.login(this.demoUser)
            .then(() => this.props.history.push("/"))
    }



    render() { 

        return(
            <div className="login">
                <Link to='/'>
                    <img 
                        className='login__logo'
                        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
               </Link>
               <div className="login__errors">
                   {this.showErrors()}
                </div>
                    <div className='login__container'>
                        <h1>Sign-In</h1>
                            <form onSubmit={this.handleSubmit}>
                                <h5>Email</h5>
                                <input type="text"
                                        value={this.state.email}
                                        onChange={this.action("email")}/>
                                <h5>Password</h5>
                                <input type="password"
                                        value={this.state.password}
                                        onChange={this.action("password")}/>
                                <button type='submit' className="login__signInButton">Sign-In</button>
                            </form>
                                <button className="login__signInButton" onClick={this.engageDemoUser}>Demo User</button>
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
