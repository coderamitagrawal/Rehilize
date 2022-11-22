import React from 'react'
import './Employer.css'
import { Col, Row, Button  } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import employeeImg from "../../Assets/img/employers-img.png";
import { Link } from "react-router-dom";
const Employer = () => {
  return (
    <div className="main-wrapper mt-0">
      <section className='inner-page-wrapper'>
        <Row className='m-0'>
          <Col md={6} className="p-0">
            <div className='inner-left'>
              <h1>At RHEALIZE we believe that people are perfect … </h1>
              <h1 className='text-right mb-5'>for something.</h1>
              <p className='mb-4'>We spend time with candidates getting to know what that “something” is. And the circumstances in which each candidate thrives. Our goal is to build the groundwork that promotes thoughtful discussion and reflection on candidate-fit for role and company at the early critical stages of hiring.</p>
              <p className='mt-4'>That’s on one side of the “productive employee” equation. The other side of that equation is you. The Decision Maker. You weigh in on who you feel is a great fit for the organization.</p>
              <p className='mt-4'>We also believe accessibility and inclusion are imperative, not optional. So, we put in the time to guide you through a recruitment process that helps reduce the common biases that could be narrowing your candidate pool.</p>
              <p>Finally, we advise on and help implement employee onboarding and management activities that are known to drive the highest employee engagement and retention.</p>
              <center><Link to="" className='btn button-dark mb-4 mt-5'>Schedule a Free<br></br> Consultation</Link></center>
              <div className='mt-5'><img src={employeeImg} alt="img" className="img-fluid" /></div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className='inner-right pl-0 page-inner'>
              <h1  className='form-heading-green mb-4 w-100 mt-5 mb-5'>
                I’m ready to RHEALIZE the potential
              </h1>
              <Form className='contact-card'>
                <Row>
                  <Col md={12}><Form.Label>Name<sup>*</sup></Form.Label></Col>
                  <Col md={6}>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="First" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-5" controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Last" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-5" controlId="formBasicPassword">
                      <Form.Label>Email<sup>*</sup></Form.Label>
                      <Form.Control type="email" placeholder="Email@email.com" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-5" controlId="formBasicPassword">
                      <Form.Label>OCCUPATION - Optional<sup>*</sup></Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>HOW CAN WE HELP? - Optional</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>SIGN ME UP</Form.Label>
                      <div className="form-check check-right check-big">
                        <label className="form-check-label" for="accept">
                          Yes, I would like to receive email according to my subscription preferences. I understand I can unsubscribe at any time.
                        </label>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <div className='sign-up-lable'>
                      <p>Subscribe me to:</p>
                      <div className="form-check check-right mb-2">
                        <label className="form-check-label" for="accept">
                          Newsletter: tips, reviews and features articles (quarterly)
                        </label>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      </div>
                      <div className="form-check check-right  mb-2">
                        <label className="form-check-label" for="accept">
                          Special announcements (quarterly)
                        </label>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      </div>
                      <div className="form-check check-right  mb-2">
                        <label className="form-check-label" for="accept">
                          Services news and expert commentary (monthly)
                        </label>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      </div>
                    </div>
                  </Col>
                </Row>
                <center><Button variant="primary" type="submit" className='btn button-dark mb-4 mt-5'>
                  Submit
                </Button></center>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default Employer