import React from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="Home">
                <div className="home__container">
                    <p>this is the home page</p>
                    <img src="https://m.media-amazon.com/images/I/610o4Ny9RFL._SX3000_.jpg"/>
                </div>
            </div>
        )
    }
}