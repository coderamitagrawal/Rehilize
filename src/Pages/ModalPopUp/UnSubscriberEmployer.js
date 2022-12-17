import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import logoThumb from "../../Assets/img/rhealize-logo.png";
import modalFooterImg from "../../Assets/img/nav-bg.png";
import linkedinIcon from "../../Assets/img/linkedIn-logo.png";

const UnSubscriberEmployer = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="custom-modal-ui unsubscribe-modal"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Link>
          <img src={logoThumb} alt="logo" className="img-fluid modal-logo" />
        </Link>
        <h4 className="modal-text-1">We are sorry to see you go.</h4>
        <h4 className="modal-text-2">
          Thanks for letting us know your preference, we won’t send you any
          further emails of this <br></br> kind and you will be removed from our
          database.
        </h4>
        <h4 className="modal-text-2">
          If you change your mind, you can sign up again at anytime to start
          recieving communications <br></br> again. We would love to have you
          back.
        </h4>
        <div className="contant-link-wrapper modal-info-link my-3">
          <a target="_blank" href="mailto:info@rhrealize.com">
            info@rhrealize.com
          </a>

          <a target="_blank" href="https://www.linkedin.com/company/rhealize">
            <img src={linkedinIcon} className="linkedin-icon" />
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <img src={modalFooterImg} className="img-fluid" alt="footer-line" />
      </Modal.Footer>
    </Modal>
  );
};

export default UnSubscriberEmployer;
