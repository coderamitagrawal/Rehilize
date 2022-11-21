import React from 'react'
import './Candidate.css'
import { Col, Row, Button  } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const Candidate = () => {
  return (
    <div className="main-wrapper mt-0">
      <section className='inner-page-wrapper'>
        <Row className='m-0'>
          <Col md={6} className="p-0">
            <div className='inner-left'>
              <h1 className='mb-5'>Are you ready to only accept the best for yourself?</h1>
              <h3 className='mb-4'>Understanding You</h3>
              <p className='mb-5 ml-2'>You are a person who has built considerable knowledge and abilities, and you want to be able to use these strengths and skills in a job so you can be challenged and more engaged, but you keep getting pigeon-holed in work that you hate because your resume doesn’t reflect everything you potentially can or want to do – we change that with our unique candidate profiler and follow through with free coaching, <strong>supporting you every step of the way.</strong> </p>
              <p className='mt-5 ml-2'>"I'm grateful that I crossed paths with Dona. It was at a pivotal time in my life where I felt I had plateaued. She brought out the courage I needed to switch careers and taught me a different approach in regards to career planning--ultimately setting the foundation to build a life I love.  With her advice, I landed a job that utilized my natural strengths where I experienced 'flow,' so I still have energy after work to do projects I love.”</p>
              <p className='mt-5'>
                <div className='text-right'><strong>Sylvia Nguyen </strong></div>
                <div className='text-right'><strong>Grant Admin + Service Resource Coordinator Government of Alberta</strong></div>
              </p>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className='inner-right pl-0 page-inner'>
              <h1  className='form-heading-yellow mb-4 w-100 mt-5 mb-5'>
                I’m ready to RHEALIZE my potential
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
                      <Form.Control type="text" placeholder="Last" />
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
                <center>
                  <Button variant="primary" type="submit" className='btn button-dark mb-4 mt-5'>
                    Submit
                  </Button>
                </center>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default Candidate;