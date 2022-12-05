import React, { useState,useEffect } from "react";
import "./Employer.css";
import { Col, Row, Button, Form } from "react-bootstrap";
import employeeImg from "../../Assets/img/employers-img.png";
import { Link, useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { empBaseUrl } from "../../utils/Config.js";
import axios from "axios";
import InfoSubmit from "../ModalPopUp/InfoSubmit";
import { jsPDF } from "jspdf";


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required*"),
  lastName: Yup.string().required("Last Name is Required*"),
  email: Yup.string().email("Invalid email").required("Email is Required*"),
});

const Employer = () => {

  const location = useLocation()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [response, setResponse] = useState({
    success: "",
    error: "",
  });

  useEffect(()=>{
    if(location.pathname == '/employer'){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  },[])

  const postEmployer = (values) => {
    axios.post(empBaseUrl, values).then(
      (response) => {
        setResponse({ success: response.data.success });
        setShow(true);
      },
      (error) => {
        setResponse({ error: error.message });
      }
    );
  };


  const generatePdf = () =>{
    const doc = new jsPDF();
    doc.text("Download Pdf RHEALIZE", 10, 10);
    doc.save("Rhealize.pdf");
  }

  return (
    <div className="main-wrapper mt-0">
      {InfoSubmit && <InfoSubmit show={show} onHide={handleClose} />}
      <section className="inner-page-wrapper">
        <Row className="m-0">
          <Col md={6} className="p-0">
            <div className="inner-left">
              <h1>At RHEALIZE we believe that people are perfect … </h1>
              <h1 className="text-right mb-5"><i>for something.</i></h1>
              <p className="mb-4">
                We spend time with candidates getting to know what that
                “something” is. And the circumstances in which each candidate
                thrives. Our goal is to build the groundwork that promotes
                thoughtful discussion and reflection on candidate-fit for role
                and company at the early critical stages of hiring.
              </p>
              <p className="mt-4">
                That’s on one side of the “productive employee” equation. The
                other side of that equation is you. The Decision Maker. You
                weigh in on who you feel is a great fit for the organization.
              </p>
              <p className="mt-4">
                We also believe accessibility and inclusion are imperative, not
                optional. So, we put in the time to guide you through a
                recruitment process that helps reduce the common biases that
                could be narrowing your candidate pool.
              </p>
              <p>
                Finally, we advise on and help implement employee onboarding and
                management activities that are known to drive the highest
                employee engagement and retention.
              </p>
              <p><strong>Assess your organization's readiness for engaging productive people. Download RHEALIZE's free Human Relations Scorecard by clicking below.</strong></p>
              <center>
                <Link onClick={generatePdf} className="btn button-light mb-4 mt-5">
                  Download  Our Free<br></br> Human Relations Scorecard
                </Link>
              </center>
              <div className="mt-5">
                <img src={employeeImg} alt="img" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="inner-right pl-0 page-inner">
              <h1 className="form-heading-green mb-4 w-100 mt-5 mb-5">
                I’m ready to RHEALIZE the potential
              </h1>
              <center><h2 className="mb-5 form-right-title">Schedule a Free Consultation</h2></center>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  jobTitle: "",
                  organization:"",
                  helpDescription: "",
                  signupMe: false,
                  // subscribeNewsLetter: false,
                  // subscribeSpecialAnnouncements: false,
                  // subscribeServces: false,
                  formType:"Employer"
                }}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                  postEmployer(values);
                  resetForm({values:""})
                }}
              >
                {({ handleSubmit, handleChange, errors, touched, values }) => (
                  <Form className="contact-card" onSubmit={handleSubmit}>
                    <Row>
                      <Col md={12}>
                        <Form.Label>
                          Name<sup>*</sup>
                        </Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="First"
                            value={values.firstName}
                            onChange={handleChange}
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className="reqError">{errors.firstName}</div>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group
                          className="mb-5"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Last"
                            value={values.lastName}
                            onChange={handleChange}
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className="reqError">{errors.lastName}</div>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          className="mb-5"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>
                            Email<sup>*</sup>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="E mail"
                            value={values.email}
                            onChange={handleChange}
                          />
                          {errors.email && touched.email ? (
                            <div className="reqError">{errors.email}</div>
                          ) : null}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          className="mb-5"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>
                            JOB TITLE - Optional
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="jobTitle"
                            value={values.jobTitle}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                    <Col md={12}>
                      <Form.Group
                        className="mb-5"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>
                          ORGANIZATION - Optional
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="organization"
                          value={values.organization}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          className="mb-5"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>HOW CAN WE HELP? - Optional</Form.Label>
                          <Form.Control
                            name="helpDescription"
                            value={values.helpDescription}
                            onChange={handleChange}
                            as="textarea"
                            rows={3}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          className="mb-5"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>SIGN ME UP</Form.Label>
                          <div className="form-check check-right check-big">
                            <label className="form-check-label" htmlFor="accept">
                              Yes, I would like to receive email according to my
                              subscription preferences. I understand I can
                              unsubscribe at any time.
                            </label>
                            <input
                              id="signupMe"
                              className="form-check-input"
                              checked = {values.signupMe}
                              type="checkbox"
                              onChange={handleChange}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        {/* <div className="sign-up-lable">
                          <p>Subscribe me to:</p>
                          <div className="form-check check-right mb-2">
                            <label className="form-check-label" for="accept">
                              Newsletter: tips, reviews and features articles
                              (quarterly)
                            </label>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="subscribeNewsLetter"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-check check-right  mb-2">
                            <label className="form-check-label" for="accept">
                              Special announcements (quarterly)
                            </label>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="subscribeSpecialAnnouncements"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-check check-right  mb-2">
                            <label className="form-check-label" for="accept">
                              Services news and expert commentary (monthly)
                            </label>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="subscribeServces"
                              onChange={handleChange}
                            />
                          </div>
                        </div> */}
                      </Col>
                    </Row>
                    <center>
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn button-dark mb-4 mt-5 text-uppercase"
                      >
                        Submit
                      </Button>
                    </center>
                    <h5
                      className={response.success ? "successMsg" : "errorMsg"}
                    >
                      {response.success ? response.success : response.error}
                    </h5>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Employer;

