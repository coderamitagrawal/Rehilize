import React, { useState } from "react";
import "./Contact.css";
import { Formik, Form, Field } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import * as Yup from "yup";
import InfoSubmit from "../ModalPopUp/InfoSubmit";
import axios from "axios";
import { BaseUrl } from "../../utils/Config.js";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required*"),
  lastName: Yup.string().required("Last Name is Required*"),
  email: Yup.string().email("Invalid email").required("Email is Required*"),
});

export const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [response, setResponse] = useState({
    success: "",
    error: "",
  });

  const postContact = (values) => {
    
    axios.post(`${BaseUrl}addContact`, values).then(
      (response) => {
        setResponse({ success: response.data.success });
         setShow(true) 
      },
      
      (error) => {
        setResponse({ error: error.message });
      }
    );
  };



  return (
    <div className="inner-page-wrapper">
      {InfoSubmit && <InfoSubmit show={show} onHide={handleClose} />}
      <section>
        <Row className="m-0">
          <Col md={4} className="p-0">
            <div className="inner-left">
              <h1 className="mb-5">
                Let’s Work <span>Together</span>
              </h1>
              <p className="mb-5 m-0">
                We help organizations maximize their human capital management by
                using best in class HR systems and tools. Please compleete the
                short form so we can better understand your needs and how we can
                help.
              </p>
            </div>
          </Col>
          <Col md={8} className="p-0">
            <div className="inner-right">
              <div className="contact-form-wrapper">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    helpType: "select option",
                    helpDescription: "",
                    signmeUp: false,
                    // news: false,
                    // Special_announcements: false,
                    // services: false,
                    //formType:"Contact"
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values,{resetForm}) => {
                  postContact(values);
                  resetForm({values:""})
                  }}
                >
                  {({ errors, touched, values }) => (
                    <Form>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="contact-card">
                            <div className="row">
                              <div className="col-md-12">
                                <label className="form-label">Name</label>
                              </div>
                              <div className="col-md-6 mb-5">
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={values.firstName}
                                  />
                                  {errors.firstName && touched.firstName ? (
                                    <div className="reqError">
                                      {errors.firstName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-md-6 mb-5">
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last"
                                    value={values.lastName}
                                  />
                                  {errors.lastName && touched.lastName ? (
                                    <div className="reqError">
                                      {errors.lastName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-5">
                            <div className="contact-card">
                              <label className="form-label">Email</label>
                              <div className="form-group">
                                <label>Email@email.com</label>
                                <Field
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  value={values.email}
                                />
                                {errors.email && touched.email ? (
                                  <div className="reqError">{errors.email}</div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="contact-card">
                            <label className="form-label">
                              HOW CAN WE HELP? - Optional
                            </label>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-select-box">
                                  <Field
                                    as="select"
                                    className="form-control"
                                    name="helpType"
                                  >
                                    <option value="select option">
                                      Please select and option
                                    </option>
                                    <option value="Sourcing qualified candidates">
                                      Sourcing qualified candidates
                                    </option>
                                    <option value="Employee Engagement surveys and training">
                                      Employee Engagement surveys and training
                                    </option>
                                    <option value="Process development and training">
                                      Process development and training
                                    </option>
                                    <option value="Succession planning">
                                      Succession planning
                                    </option>
                                    <option value="Leadership training">
                                      Leadership training
                                    </option>
                                    <option value="Personal assessments">
                                      Personal assessments
                                    </option>
                                    <option value="Other">Other</option>
                                  </Field>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group mt-4">
                                  <Field
                                    as="textarea"
                                    className="form-control"
                                    rows="6"
                                    name="helpDescription"
                                    maxLength={200}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="contact-card">
                            <div className="row mt-4 mb-4">
                              <label className="form-label">SIGN ME UP</label>
                              <div className="col-md-12">
                                <div className="form-check check-right">
                                  <label
                                    className="form-check-label"
                                    htmlFor="accept"
                                  >
                                    No, I do not wish to receive emails from you
                                    with tips on how to improve my employee
                                    hiring and engagement / job search process.
                                  </label>
                                  <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    id="accept"
                                    name="signmeUp"
                                    checked={values.signmeUp}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Col sm={12}>
                          <div className="contact-card">
                            {/* <div className="sign-up-lable">
                              <p>Subscribe me to:</p>
                              <div className="form-check check-right mb-2">
                                <label
                                  className="form-check-label"
                                  for="accept"
                                >
                                  Newsletter: tips, reviews and features
                                  articles (quarterly)
                                </label>
                                <Field
                                  class="form-check-input"
                                  type="checkbox"
                                  id="accept"
                                  name="news"
                                />
                              </div>
                              <div className="form-check check-right  mb-2">
                                <label
                                  className="form-check-label"
                                  for="accept"
                                >
                                  Special announcements (quarterly)
                                </label>
                                <Field
                                  class="form-check-input"
                                  type="checkbox"
                                  id="accept"
                                  name="Special_announcements"
                                />
                              </div>
                              <div className="form-check check-right  mb-2">
                                <label
                                  className="form-check-label"
                                  for="accept"
                                >
                                  Services news and expert commentary (monthly)
                                </label>
                                <Field
                                  class="form-check-input"
                                  type="checkbox"
                                  id="accept"
                                  name="services"
                                />
                              </div>
                            </div> */}
                          </div>
                        </Col>
                        <div className="col-sm-12">
                          <div className="contact-submit text-center">
                            <Button
                              variant="primary"
                              type="submit"
                              className="btn button-dark mb-4 mt-5 text-uppercase"
                            >
                              Submit
                            </Button>
                            
                            
                          </div>
                          <h5
                            className={
                              response.success ? "successMsg" : "errorMsg"
                            }
                          >
                            {response.success
                              ? response.success
                              : response.error}
                          </h5>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

