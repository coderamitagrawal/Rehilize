import { useState, useEffect } from "react";
import axios from "axios";
import { candBaseUrl } from "../../utils/Config";
import { Link, useParams,useLocation } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import "./Style.css";
import linkedinIcon from "../../Assets/img/linkedIn-logo.png";
import CandidateUnsubscribeModal from "../ModalPopUp/CandidateUnsubscribeModal";

const UnSubscribeCandidate = () => {
  const [getCandidateData, setGetCandidateData] = useState();
  const [updateCandidate, setUpdateCandidate] = useState();
  const [isMessage, setIsMessate] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [objectKey, setObjectKey] = useState([]);
  const params = useParams();
  const location =useLocation()
  useEffect(() => {
    if (location.pathname === `/unsubscribe/candidate/${params.id}`) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, []);


  useEffect(() => {
    axios.get(`${candBaseUrl}/${params.id}`).then(
      (response) => {
        setGetCandidateData({ success: response.data });
      },
      (error) => {
        setGetCandidateData({ error: error.message });
      }
    );
  }, []);

  const updateCandidateCheck = (values) => {
    setIsMessate("");
    const formData = [
      values?.firstCheck,
      values?.secondCheck,
      values?.thirdCheck,
      values?.fourthCheck,
      values?.fiveCheck,
      values?.sixCheck,
      values?.sevenCheck,
    ];
    objectKey.push({ unsubscribeReason: formData });
    const updateUnsubscriberEmp = {
      email: getCandidateData?.success[0].email,
      firstName: getCandidateData?.success[0].firstName,
      helpDescription: getCandidateData?.success[0].helpDescription,
      lastName: getCandidateData?.success[0].lastName,
      lastName: getCandidateData?.success[0].lastName,
      signupMe: false,
      unsubscribeReason: objectKey[0].unsubscribeReason,
    };

    const check = formData?.filter((item) => {
      return item == true;
    });

    if (check.length > 0) {
      axios.put(`${candBaseUrl}`, updateUnsubscriberEmp).then(
        (response) => {
          setUpdateCandidate({ success: response.data?.success });
        },
        (error) => {
          setUpdateCandidate({ error: error.message });
        }
      );
      setShow(true);
    } else {
      setIsMessate("Please Select Minimum one option compulsory!");
    }
  };

  return (
    <div className="unsubscribe-page-wrapper">
      {CandidateUnsubscribeModal && (
        <CandidateUnsubscribeModal show={show} onHide={handleClose} />
      )}
      <Container>
        <Row className="justify-content-center">
          <Col md={9}>
            <div className="page-inner">
              <h1>We have recieved your request to unsubscribe.</h1>
              <p className="content-detail">
                If you would like to continue to receive emails but wish to
                reduce the frequency or update the type <br></br>of messages,
                please{" "}
                <Link
                  to={`/candidate/setting/${params.id}`}
                  className="unsubscribe-link"
                >
                  click here
                </Link>{" "}
                to change your preferences.
              </p>

              <Formik
                initialValues={{
                  firstCheck: false,
                  secondCheck: false,
                  thirdCheck: false,
                  fourthCheck: false,
                  fiveCheck: false,
                  sixCheck: false,
                  sevenCheck: false,
                  formType: "employer",
                }}
                // validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  updateCandidateCheck(values);
                  resetForm({ values: "" });
                }}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="contact-card unsubscribe-form-card">
                      <Row>
                        <Col md={12}>
                          <p className="unsubscribe-question">
                            Why do you want to unsubscribe from these emails?:
                            <span>(Please select all that apply)</span>
                          </p>

                          <div className="unsubscribe-checkbox-wrapper">
                            <div className="form-check check-right check-big">
                              <label
                                className="form-check-label"
                                htmlFor="accept"
                              >
                                These emails are not relevant to me
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
                                I no longer want to receive these emails
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
                                I did not request email from this sender
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={values.thirdCheck}
                                onChange={handleChange}
                                id="thirdCheck"
                              />
                            </div>
                            <div className="form-check check-right check-big">
                              <label
                                className="form-check-label"
                                htmlFor="accept"
                              >
                                This is not the content I expected
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={values.fourthCheck}
                                onChange={handleChange}
                                id="fourthCheck"
                              />
                            </div>
                            <div className="form-check check-right check-big">
                              <label
                                className="form-check-label"
                                htmlFor="accept"
                              >
                                I received emails more often than I expected
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={values.fiveCheck}
                                onChange={handleChange}
                                id="fiveCheck"
                              />
                            </div>
                            <div className="form-check check-right check-big">
                              <label
                                className="form-check-label"
                                htmlFor="accept"
                              >
                                This email is spam and should be reported
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={values.sixCheck}
                                onChange={handleChange}
                                id="sixCheck"
                              />
                            </div>

                            <div className="form-check check-right check-big">
                              <label
                                className="form-check-label"
                                htmlFor="accept"
                              >
                                I’ve previously unsubscribed
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={values.sevenCheck}
                                onChange={handleChange}
                                id="sevenCheck"
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
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
                          updateCandidate?.success ? "successMsg" : "errorMsg"
                        }
                      >
                        {updateCandidate?.success
                          ? updateCandidate?.success
                          : updateCandidate?.error}
                      </h5>
                    </div>

                    <div className="contant-link-wrapper ">
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
                        className="mt-2 mb-4"
                      >
                        <img src={linkedinIcon} className="linkedin-img" />
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

export default UnSubscribeCandidate;
