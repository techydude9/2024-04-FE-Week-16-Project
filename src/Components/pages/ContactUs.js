import React from 'react';
import './ContactUs.css';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';

function ContactUs() {
		
	return (
		<div className='contactUsPg'>
			<h2>Give us a SHOUT!</h2> 
			<br />
			<div className='row'>
				<div className='col'>
					<ContactTable />
				</div>
				<ContactForm />
			</div>
		</div>
	);
}

export default ContactUs