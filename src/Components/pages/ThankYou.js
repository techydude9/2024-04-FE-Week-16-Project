import React from 'react';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

function ThankYou({formFName, formLName, formEmail, formPhone}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    console.log('In Thank You');

    return (
        <div>
        <Button className="btn btn-sm" variant="primary" onClick={handleShow}>
          Wanna Say Thank You
        </Button>
  
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

