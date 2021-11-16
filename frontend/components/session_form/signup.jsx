import React from 'react'
import { Link } from 'react-router-dom'
import shortid from "shortid";
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            reenter_password: '',
            errorsArray: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    action(field) {
        return e => this.setState({ [field]: e.currentTarget.value}) 
    }

    handleSubmit(e) {
        e.preventDefault();

        const allowed = ['username', 'email','password']

        const filtered = Object.keys(this.state)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = this.state[key];
                return obj;
            }, {});
        this.props.signup(filtered)
            .then(() => this.props.history.push("/"))
    }

    componentWillUnmount() {
       this.props.clearSessionErrors();
    }

    render() {
        const { errors } = this.props
        const keyWords = ['Username', 'Email','Password']
        let errorsObject = {};
    
        if (errors.length > 0) {    
            for (let i = 0; i < errors.length; i++) {
                for (let j = 0; j < keyWords.length; j++) {
                    if (errors[i].includes(keyWords[j])) {
                        errorsObject[keyWords[j]] = `! ${errors[i]}`
                    }
                }
            }
        }
            

        return(
            <div className="signup">
                <Link to='/'>
                    <img 
                        className='signup__logo'
                        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
               </Link>
               <div className="signup__errors">
                   {/* {this.showErrors()} */}
                </div>
                    <div className='signup__container'>
                        <h1>Create account</h1>
                            <form onSubmit={this.handleSubmit}>
                                <h5>Your Name</h5>
                                <input type="text"
                                        value={this.state.username}
                                        onChange={this.action("username")}/>
                                
                                {this.props.errors.length > 0 ? 
                                    <div className="signup_errors">
                                    {errorsObject[keyWords[0]]}
                                    </div> : null}
                                

                                <h5>Email</h5>
                                <input type="text"
                                        value={this.state.email}
                                        onChange={this.action("email")}/>
                                {this.props.errors.length > 0 ? 
                                    <div className="signup_errors">
                                    {errorsObject[keyWords[1]]}
                                    </div> : null}

                                <h5>Password</h5>
                                <input type="password"
                                        value={this.state.password}
                                        onChange={this.action("password")}/>
                                <p>Passwords must be at least 6 characters.</p>
                                {this.props.errors.length > 0 ? 
                                    <div className="signup_errors">
                                    {errorsObject[keyWords[2]]}
                                    </div> : null}

                                <h5>Re-enter Password</h5>
                                <input type="password"
                                        value={this.state.reenter_password}
                                        onChange={this.action("reenter_password")}/>
                                <button type='submit' className="signup__signUpButton">Create your Amazon account</button>
                            </form>
                                <p>By continuing, you agree to Amazon's Conidtions of Use and Privacy Notice</p>
                            <div className='signin__redirect'>
                                <p>Already have an account? {this.props.navLink}</p>
                            </div>
                    </div>
            </div>
        )
    }
}

export default Signup