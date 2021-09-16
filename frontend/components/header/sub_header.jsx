import React from 'react'
import { Link } from 'react-router-dom';


function SubHeader() {
    return (
        <div className="subheader__components">
           <Link to="/all">
               <p>All</p> 
           </Link> 
           <Link to="/bestsellers">
                <p>Best Sellers</p>
            </Link>
            <Link to="/humorousfiction">
                <p>Humorous Fiction</p>
            </Link>
            <Link to="/classics">
                <p>Classics</p>
            </Link>
            <Link to="/business">
                <p>Business & Entrepreneurship</p>
            </Link>
            <Link to="/philosophy">
                <p>Philosophy</p>
            </Link>
        </div>
    )
}

export default SubHeader
