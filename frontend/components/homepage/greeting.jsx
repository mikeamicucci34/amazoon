import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    popout() {
        <div>
            <button>Sign In!</button>
            <h3>New Customer?
                <Link to='/signup'></Link>
            </h3>
        </div>
    }

    render() {
        const signedOut = () => (
            <div>
                <button onMouseEnter={this.popout}>Hello, Sign In
                    <br/>
                    Account & Orders
                </button>
            </div>
        )

        return (
            <div>
                
            </div>
        )
    }
}