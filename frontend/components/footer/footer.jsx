import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footertop__component">
                <div className="footertop__componentText">
                    <p>Meet the creator</p>
                </div >
                <div className="footertop__componentGithub">
                    <a target="_blank" href="https://github.com/mikeamicucci34">
                        <GitHubIcon/>
                    </a>
                </div>
                <div className="footertop__componentLinkedIn">
                    <a target="_blank" href="https://www.linkedin.com/in/michael-amicucci-428bb9122/">
                        <LinkedInIcon/>
                    </a>
                </div>
            </div>
                <div className="footerbottom__component">
                <div className="footerbottom__contents">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src="https://amazoon-seeds.s3.amazonaws.com/Amazoon2.png"/>
                </Link>
                </div>
                </div>
            
        </div>
    )
}

export default Footer;
