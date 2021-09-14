import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div>
            <div className="footertop__component">
                <div className="footertop__componentText">
                    <p>Meet the creator</p>
                </div >
                <div className="footertop__componentGithub">
                    <a href="https://github.com/mikeamicucci34">
                        <GitHubIcon/>
                    </a>
                </div>
                <div className="footertop__componentLinkedIn">
                    <a href="https://www.linkedin.com/in/michael-amicucci-428bb9122/">
                        <LinkedInIcon/>
                    </a>
                </div>
            </div>
            <div className="footermid__component">
                <div className="footermid__componentcol">
                    <h4>Get to Know Us</h4>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Sustainability</p>
                    <p>Press Center</p>
                    <p>Investor Relations</p>
                </div>
                <div className="footermid__componentcol">
                    <h4>Make Money with Us</h4>
                    <p>Sell products on Amazon</p>
                    <p>Sell apps on Amazon</p>
                    <p>Become an affiliate</p>
                    <p>Become a delivery driver</p>
                    <p>Start a package delivery</p>
                    <p>Advertise your products</p>
                </div>
                <div className="footermid__componentcol">
                    <h4>Amazon Payment Products</h4>
                    <p>Amazon rewards Visa signature</p>
                    <p>Amazon.com store card</p>
                    <p>Amazon secured card</p>
                    <p>Amazon business card</p>
                    <p>Shop with points</p>
                    <p>Reload your balance</p>
                    <p>Credit card marketplace</p>
                    <p>Amazon currency Converter</p>
                </div>
                <div className="footermid__componentcol">
                    <h4>Let Us Help You</h4>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping rates and policy</p>
                    <p>Amazon Prime</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </div>
            <div className="footerbottom__component">
                <hr/>
                <div className="footerbottom__contents">
                <img src="https://service-client.org/wp-content/uploads/Logo-Amazon-300x144.png"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
