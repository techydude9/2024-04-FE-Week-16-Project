import React from 'react';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


/* This component displays a Thank you Modal when a Contact Us form is completed in the calling component
  This module uses the React Bootstrap Modal to show a thank you message with the data from the form.
  It is intentional that this form data is NOT stored anywhere. */

function ThankYou({show, setShow, formFName, formLName, formEmail, formPhone}) {
   
    const handleClose = () => setShow(false);
      
    console.log('In Thank You');

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thank You</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{`Thank you! ${formFName} ${formLName}, 
                ${formEmail}
                ${formPhone}`}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
}

export default ThankYou

