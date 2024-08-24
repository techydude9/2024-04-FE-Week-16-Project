import React from 'react';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ThankYou({formFName, formLName, formEmail, formPhone}) {
    console.log('In Thank You');

    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Thank You!</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>`Thank you! ${formFName} ${formLName} 
        ${formEmail}
        ${formPhone}`</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
        </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default ThankYou