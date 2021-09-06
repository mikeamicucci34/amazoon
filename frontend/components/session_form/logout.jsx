import React from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { logout } = this.props

        return (
            <div>
                <Link to='/' onClick={() => logout()}>
                    <button>
                        Sign Out!
                    </button>
                </Link>
            </div>
        )
    }
}