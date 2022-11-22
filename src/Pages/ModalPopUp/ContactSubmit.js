import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import logoThumb from "../../Assets/img/rhealize-logo.png"; 
import modalFooterImg from "../../Assets/img/nav-bg.png";

const ContactSubmit = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} className="custom-modal-ui" centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Link>
            <img src={logoThumb} alt="logo" className='img-fluid modal-logo mb-5' />
          </Link>
          <h4 className='modal-text-1'>
            Thank you for your interest.
          </h4>
          <h4 className='modal-text-2'>
            We strive to answer all inquiries within 24 hours.
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <img src={modalFooterImg} className="img-fluid" alt="footer-line" />
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
  )
}

export default ContactSubmit
