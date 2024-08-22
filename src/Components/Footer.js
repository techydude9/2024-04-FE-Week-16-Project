import React from 'react';
import './Footer.css';
import LinkedInLogo from '../images/LI-In-Bug.png'


function Footer() {
    return (
        <div className="footerDiv">
            <div className="copyRt">
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://linkedin.com/in/bobruzga'>
                 Ruzga Solutions Group LLC
                 </a>
                 <img src={LinkedInLogo} alt='LinkedIn Logo' />
            </div>
        </div>

    )

}

export default Footer;