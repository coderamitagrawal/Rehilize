import React, { useState } from "react";
import "./Candidate.css";
import { Col, Row, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { candBaseUrl } from "../../utils/Config";
import axios from "axios";
import InfoSubmit from "../ModalPopUp/InfoSubmit";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required*"),
  lastName: Yup.string().required("Last Name is Required*"),
  email: Yup.string().email("Invalid email").required("Email is Required*"),
});

const Candidate = () => {

  const location = useLocation()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [response, setResponse] = useState({
    success: "",
    error: "",
  });

  const postCandidate = (values) => {
    
    axios.post(candBaseUrl, values).then(
      (response) => {
        setResponse({ success: response.data.success });
        setShow(true);
      },
      (error) => {
        setResponse({ error: error.message });
      }
    );
  };

  useEffect(()=>{
    if(location.pathname == '/candidate'){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  },[])

  return (
    <div className="main-wrapper mt-0">
      {InfoSubmit && <InfoSubmit show={show} onHide={handleClose} />}
      <section className="inner-page-wrapper">
        <Row className="m-0">
          <Col md={6} className="p-0">
            <div className="inner-left">
              <h1 className="mb-5">
                Are you ready to only accept the best for yourself?
              </h1>
              <h3 className="mb-4">Understanding You</h3>
              <p className="mb-5 ml-2">
                You are a person who has built considerable knowledge and
                abilities, and you want to be able to use these strengths and
                skills in a job so you can be challenged and more engaged, but
                you keep getting pigeon-holed in work that you hate because your
                resume doesn’t reflect everything you potentially can or want to
                do – we change that with our unique candidate profiler and
                follow through with free coaching,{" "}
                <strong>supporting you every step of the way.</strong>{" "}
              </p>
              <p className="mt-5 ml-2">
                "I'm grateful that I crossed paths with Dona. It was at a
                pivotal time in my life where I felt I had plateaued. She
                brought out the courage I needed to switch careers and taught me
                a different approach in regards to career planning--ultimately
                setting the foundation to build a life I love. With her advice,
                I landed a job that utilized my natural strengths where I
                experienced 'flow,' so I still have energy after work to do
                projects I love.”
              </p>
              <div className="text-right">
                <p className="mt-5">
                  <strong>Sylvia Nguyen </strong>
                  <strong className="d-block">
                    Grant Admin + Service Resource Coordinator Government of
                    Alberta
                  </strong>
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="inner-right pl-0 page-inner">
              <h1 className="form-heading-yellow mb-4 w-100 mt-5 mb-5">
                I’m ready to RHEALIZE my potential
              </h1>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  helpDescription: "",
                  signupMe: false,
                  // subscribeNewsLetter: false,
                  // subscribeSpecialAnnouncements: false,
                  // subscribeServces: false,
                  formType:"Candidate"
                }}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                  postCandidate(values);
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
                              className="form-check-input"
                              type="checkbox"
                             checked={values.signupMe}
                              onChange={handleChange}
                              id="signupMe"
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
                      <h5
                        className={response.success ? "successMsg" : "errorMsg"}
                      >
                        {response.success ? response.success : response.error}
                      </h5>
                    </center>
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

export default Candidate;
