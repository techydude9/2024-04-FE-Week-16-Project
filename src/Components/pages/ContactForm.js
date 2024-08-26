import React from 'react';
import './ContactUs.css';
import {useState} from 'react';
import ThankYou from './ThankYou';

/* This is the ContactForm Component. Its role is to display the Contact Us submission form
    It also will call the ThankYou component when the 'Send' button is pressed on this form. This
    component is called from the ContactUs page */

function ContactForm () {

    // consts for the Signup form and uses States
    const [formFName, setFormFName] = useState('');
    const [formLName, setFormLName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');

    // consts to handle the display of a Thank you modal upon the click of the Send button
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div className='signUpForm col form-group'>
            <p className='card-title'>Connect with Us:</p>
            <form className='card form-control'>
                <label htmlFor='inFName'>First Name:</label>
                <input id='inFName' placeholder='First Name'
                onChange={(e) => setFormFName(e.target.value)}></input>

                <label htmlFor='inLName'>Last Name:</label>
                <input id='inLName' placeholder='Last Name'
                onChange={(e) => setFormLName(e.target.value)}></input>

                <label htmlFor='inEmail'>Email:</label>
                <input id='inEmail' placeholder='Email'
                onChange={(e) => setFormEmail(e.target.value)}></input>

                <label htmlFor='inPhone'>Phone:</label>
                <input id='inPhone' placeholder='Phone'
                onChange={(e) => setFormPhone(e.target.value)}></input>

                <button className='mt-3 btn btn-info' type='button' 
                onClick={handleShow} >Send</button>

                <ThankYou show={show} setShow={setShow} formFName={formFName} formLName={formLName} formEmail={formEmail} formPhone={formPhone} />
            </form>
        </div>
    )

}

export default ContactForm