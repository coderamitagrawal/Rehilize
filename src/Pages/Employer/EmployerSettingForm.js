import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { Formik } from "formik";
import { Link, useParams,useLocation } from "react-router-dom";
import "./Employer.css";
import linkedinIcon from "../../Assets/img/linkedIn-logo.png";
import { empBaseUrl } from "../../utils/Config";
import axios from "axios";
import EmailSettingPopup from "../ModalPopUp/EmailSettingPopup";
import "../Unsubscribe/Style.css";

const EmployerSettingForm = () => {
  const params = useParams();
  const [getEmployeeSetting, setGetEmployeeSetting] = useState();
  const [updateEmailSetting, setUpdateEmailSetting] = useState();
  const [isMessage, setIsMessage] = useState("");
  const [show, setShow] = useState(false);
  const [objectKey, setObjectKey] = useState([]);
  const handleClose = () => setShow(false);
  const location =useLocation()
  useEffect(() => {
    if (location.pathname === `/employer/setting/${params.id}`) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    axios.get(`${empBaseUrl}/${params.id}`).then(
      (response) => {
        setGetEmployeeSetting({ success: response.data });
      },
      (error) => {
        setGetEmployeeSetting({ error: error.message });
      }
    );
  }, []);

  const EmployerSettingFrom = (values) => {
    setIsMessage("");
    const formData = [
      values?.firstCheck,
      values?.secondCheck,
      values?.thirdCheck,
    ];
    const unsubscribeAllEmail = [values?.fourthCheck];
    const checkForAllValidation = formData.concat(unsubscribeAllEmail);
    objectKey.push({
      emailSetting: formData,
      unsubscribeAllEmail: unsubscribeAllEmail,
    });
    const updatEmailSetting = {
      email: getEmployeeSetting?.success[0].email,
      firstName: getEmployeeSetting?.success[0].firstName,
      helpDescription: getEmployeeSetting?.success[0].helpDescription,
      lastName: getEmployeeSetting?.success[0].lastName,
      lastName: getEmployeeSetting?.success[0].lastName,
      signupMe: false,
      emailSetting: objectKey[0].emailSetting,
      unsubscribeAllEmail: objectKey[0].unsubscribeAllEmail,
    };

    const check = checkForAllValidation?.filter((item) => {
      return item == true;
    });

    if (check.length > 0) {
      axios.put(`${empBaseUrl}`, updatEmailSetting).then(
        (response) => {
          setUpdateEmailSetting({ success: response.data?.success });
        },
        (error) => {
          setUpdateEmailSetting({ error: error.message });
        }
      );
      setShow(true);
    } else {
      setIsMessage("Please Select Minimum one option compulsory!");
    }
  };

  return (
    <div className="unsubscribe-page-wrapper">
      <Container>
        {EmailSettingPopup && (
          <EmailSettingPopup show={show} onHide={handleClose} />
        )}
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="page-inner">
              <h1 className="my-5">
                Updating email preferences for [insert email address]
              </h1>
              <p className="mb-2">
                If you would like to continue to receive emails but wish to
                reduce the frequency or update the type of messages, please
                change your preferences.
              </p>
              <Formik
                initialValues={{
                  firstCheck: false,
                  secondCheck: false,
                  thirdCheck: false,
                  fourthCheck: false,
                  formType: "employer",
                }}
                // validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  EmployerSettingFrom(values);
                  resetForm({ values: "" });
                }}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="contact-card unsubscribe-form-card candidate-unsubscribe-card">
                      <Row>
                        <Col md={12}>
                          <div className="unsubscribe-question unsubscribe-employer-question">
                            Why do you want to unsubscribe from these emails?:
                            <span>(Please select all that apply)</span>
                          </div>

                          <div className="form-check check-right check-big">
                            <label
                              className="form-check-label"
                              htmlFor="accept"
                            >
                              Newsletter: tips, reviews and features articles
                              (monthly)
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={values.firstCheck}
                              onChange={handleChange}
                              id="firstCheck"
                            />
                          </div>

                          <div className="form-check check-right check-big">
                            <label
                              className="form-check-label"
                              htmlFor="accept"
                            >
                              Special announcements (on occasion)
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={values.secondCheck}
                              onChange={handleChange}
                              id="secondCheck"
                            />
                          </div>

                          <div className="form-check check-right check-big">
                            <label
                              className="form-check-label"
                              htmlFor="accept"
                            >
                              Services news and expert commentary (monthly)
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={values.thirdCheck}
                              onChange={handleChange}
                              id="thirdCheck"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <p>
                      Or check here to never receive any emails. (Please note,
                      if you select this option, that you will be removed from
                      our database. You will need to sign up again in future to
                      receive communications.)
                    </p>
                    <div className="contact-card unsubscribe-form-card candidate-unsubscribe-card">
                      <Col md={12}>
                        <div className="form-check check-right check-big">
                          <label className="form-check-label" htmlFor="accept">
                            Unsubscribe from all emails
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={values.fourthCheck}
                            onChange={handleChange}
                            id="fourthCheck"
                          />
                        </div>
                      </Col>
                    </div>
                    <p style={{ color: "red", textAlign: "center" }}>
                      {isMessage ? isMessage : ""}
                    </p>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn button-dark d-flex m-auto justify-content-center text-uppercase unsubscribe-submit-btn"
                    >
                      Submit
                    </Button>

                    <div>
                      <h5
                        className={
                          updateEmailSetting?.success
                            ? "successMsg"
                            : "errorMsg"
                        }
                      >
                        {updateEmailSetting?.success
                          ? updateEmailSetting?.success
                          : updateEmailSetting?.error}
                      </h5>
                    </div>

                    <div className="contant-link-wrapper my-3">
                      <a target="_blank" href="mailto:info@rhrealize.com">
                        info@rhrealize.com
                      </a>
                      <a
                        target="_blank"
                        href="http://www.rhealize.com/"
                        className="web-link"
                      >
                        www.rhealize.com
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/rhealize"
                        className="mt-3 mb-5"
                      >
                        <img src={linkedinIcon} />
                      </a>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployerSettingForm;
