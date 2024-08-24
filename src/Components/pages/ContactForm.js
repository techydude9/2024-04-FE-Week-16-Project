import React from 'react';
import './ContactUs.css';
import {useState} from 'react';
import ThankYou from './ThankYou.js';


function ContactForm () {
    const [formFName, setFormFName] = useState('');
    const [formLName, setFormLName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');
   
    function sendTY(){
        console.log('Send Thank You');

        alert(`Thank you! ${formFName} ${formLName} 
        ${formEmail}
        ${formPhone}`);
        // <ThankYou formFName={formFName} formLName={formLName} formEmail={formEmail} formPhone={formPhone} />
        // <ThankYou />
    }

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
                onClick={() => sendTY()} >Send</button>
            </form>
        </div>
    )

}

export default ContactForm