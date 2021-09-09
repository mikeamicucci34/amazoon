import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer__component">
            <div className="footer__componentText">
                <p>Meet the creator</p>
            </div >
            <div className="footer__componentGithub">
                <a href="https://github.com/mikeamicucci34">
                    <GitHubIcon/>
                </a>
            </div>
            <div className="footer__componentLinkedIn">
                <a href="https://www.linkedin.com/in/michael-amicucci-428bb9122/">
                    <LinkedInIcon/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
