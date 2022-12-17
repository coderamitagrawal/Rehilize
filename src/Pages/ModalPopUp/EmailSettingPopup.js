import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import logoThumb from "../../Assets/img/rhealize-logo.png"; 
import modalFooterImg from "../../Assets/img/nav-bg.png";
import linkedinIcon from "../../Assets/img/linkedIn-logo.png";

const EmailSettingPopup = (props) => {

  return (
    <Modal show={props.show} onHide={props.onHide} className="custom-modal-ui unsubscribe-modal" centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Link>
            <img src={logoThumb} alt="logo" className='img-fluid modal-logo' />
          </Link>
          <h4 className='modal-text-1 update-message'>
          Thank you for updating your preferences.
          </h4>
          
          <div className="contant-link-wrapper modal-info-link my-3">
                      <a target="_blank" href="mailto:info@rhrealize.com">
                        info@rhrealize.com
                      </a>
                      
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/rhealize"
                      >
                        <img src={linkedinIcon} className="linkedin-icon" />
                      </a>
                    </div>
        </Modal.Body>
        <Modal.Footer>
          <img src={modalFooterImg} className="img-fluid" alt="footer-line" />
        </Modal.Footer>
      </Modal>
  )
}

export default EmailSettingPopup;