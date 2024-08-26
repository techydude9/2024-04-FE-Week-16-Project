import React from 'react';
import './Footer.css';
import LinkedInLogo from '../images/LI-In-Bug.png'

/*  This component handles the footer on all the pages. It has a link to my LinkedIn Profile 
    since I don't have a home website or any other interesting thing. It has its own Footer.css
    to handle styling*/
     
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