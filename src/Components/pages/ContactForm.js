import React from 'react';
import './ContactUs.css';

function ContactForm () {
    let formFName = '';
	let formLName = '';
	let formEmail = '';
	let formPhone = '';

    return (
        <div className='signUpForm col form-group'>
            <p className='card-title'>Connect with Us:</p>
            <form className='card form-control'>
                <label htmlFor='inFName'>First Name:</label>
                <input id='inFName' placeholder='First Name'
                onClick={(e) => formFName(e.target.value)}></input>

                <label htmlFor='inLName'>Last Name:</label>
                <input id='inLName' placeholder='Last Name'
                onClick={(e) => formLName(e.target.value)}></input>

                <label htmlFor='inEmail'>Email:</label>
                <input id='inEmail' placeholder='Email'
                onClick={(e) => formEmail(e.target.value)}></input>

                <label htmlFor='inPhone'>Phone:</label>
                <input id='inPhone' placeholder='Phone'
                onClick={(e) => formPhone(e.target.value)}></input>

                <button className='mt-3 btn btn-info' type='button' 
                onClick={() => {alert('Thank you!')}} >Send</button>
            </form>
        </div>

    )

}

export default ContactForm