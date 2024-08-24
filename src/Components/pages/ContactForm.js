import React from 'react';
import './ContactUs.css';
import {useState} from 'react';
import ThankYou from './ThankYou';


function ContactForm () {
    const [formFName, setFormFName] = useState('');
    const [formLName, setFormLName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

      
    function sendTY(){
        console.log('Send Thank You');

       alert(`Thank you! ${formFName} ${formLName} 
        ${formEmail}
        ${formPhone}`); 

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

                <ThankYou formFName={formFName} formLName={formLName} formEmail={formEmail} formPhone={formPhone} />
            </form>
        </div>
    )

}

export default ContactForm