import React from 'react'
import './About.css'
import donaBaker from "../../Assets/img/dona-img.png";
import lisaZeppetzauer from "../../Assets/img/lisa-img.png";
import jeffPolovick from "../../Assets/img/Jeff-img.png";

import { Col,Row, } from 'react-bootstrap';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div class="main-wrapper m-0">
      <section className='about-main-wrapper'>
        <Row className='m-0'>
          <Col md={4} className='p-0'>
            <div className='about-left'>
              <div>
                <h1>About <span>RHEALIZE</span></h1>
                <p className="mb-5">As the crown in our logo suggests, RHEALIZE defines the space where the wants and needs of 
                  employers and candidates meet.</p>
                  <p>Our insights help both sides team up more successfully:</p>
                  <ul className="mb-5 mt-3">
                    <li>Candidates realize the work and life they find most rewarding</li>
                    <li>Employers realize their vision and goals thru an optimized workforce</li>
                  </ul>
                  <h2>Our process</h2>
                  <div className="process-wrapper">
                    <div className="process-list">
                      <h3><span>1.</span>Clarify</h3>
                      <p>Clarify / confirm expected behaviours and outcomes for each role</p>
                    </div>
                    <div className="process-list">
                      <h3><span>2.</span>Explain</h3>
                      <p>Explain these expectations as observable actions</p>
                    </div>
                    <div className="process-list">
                      <h3><span>3.</span>Align</h3>
                      <p>Align Candidates with roles where they are most likely to succeed given their current interests, abilities and circumstances</p>
                    </div>
                  </div>
                  <center><Link to="/Employer" className="btn button-dark mt-5 width-100">Contact us to<br></br> Learn About Our<br></br> Process</Link></center>
                </div>
                <div className='about-left-bottom'>
                  <p>Copyright Notices:</p>
                  <p>Kolbe A™, Kolbe B™, Kolbe C™ and Kolbe Youth™ assessments – provided by Kolbe Corp – Copyright © Kolbe Corp.
                  All rights reserved.</p>
                  <p>PRINT® survey – provided by The Paul Hertz Group – Copyright © Paul Hertz Group. All right reserved.</p>
                  <p>CliftonStrengths® survey – provided Gallup, Inc. − Copyright © Gallup, Inc. All rights reserved.</p>
                  <p>Lectica® and LectaTes>ts™ − provided by Lectica, Inc. Copyright © Lectica, Inc. All rights reserved.</p>
                </div>
            </div>
          </Col>
          <Col md={8} className='p-0'>
            <div className='about-right'>
              <div className='about-right-top'>
                <div className='text-right'><Link to="" className="btn button-light mb-4">Download  Our<br></br> Free Scorecard</Link></div>
                <h1>Our Team</h1>
                <h2>Our RHEALIZE team are certified consultants in several personal and work assessment tools:</h2>
                <ul>
                  <li><strong>PRINT® –</strong> Dona Baker, Lisa Zeppetzauer and Jeff Polovick</li>
                  <li><strong>Kolbe Indexes for adults – </strong>Dona Baker, Lisa Zeppetzauer and Jeff Polovick</li>
                  <li><strong>Kolbe Youth™ Index for kids – </strong>Lisa Zeppetzauer and Jeff Polovick</li>
                  <li><strong>CliftonStrengths® – </strong>Dona Baker</li>
                  <li><strong>Lectica® decision making tests – </strong>Dona Baker</li>
                </ul>
              </div>
              <div className='team-info-wrapper'>
                <div className='team-info-box'>
                  <div className='team-info-left'>
                    <div className='team-pic'>
                        <div className='team-img'><img src={donaBaker} alt="img" className="img-fluid" /></div>
                      <div className='team-name'>
                        Dona Baker<span>(she/her)</span>
                      </div>
                    </div>
                    <p>Co-founder and Head of People Development Certified Talent Management Consultant and Registered Professional Recruiter</p>
                  </div>
                  <div className='team-info-right'>
                    <p>Dona’s most rewarding work has always been helping others figure out what they do best.</p>
                    <p>Her deep interest in this, led her to learning how to describe what it takes to perform any job to a set standard.</p>
                    <p>Also, how to ensure jobs and people are aligned with an organization’s culture and strategies.</p>
                    <p>This has helped Dona get better at matching people to work that makes them happier. Or more secure. Or both.</p>
                    <p>Dona believes that people are perfect … for something. Her mission is to help discover the factors that reveal what that “something” is.</p>

                  </div>
                </div>
                <div className='team-info-box'>
                  <div className='team-info-left'>
                    <div className='team-pic'>
                        <div className='team-img'><img src={lisaZeppetzauer} alt="img" className="img-fluid" /></div>
                      <div className='team-name'>
                      Lisa Zeppetzauer<span>(she/her)</span>
                      </div>
                    </div>
                    <p>Co-founder and Head of People Development Certified Talent Management Consultant and Registered Professional Recruiter</p>
                  </div>
                  <div className='team-info-right'>
                    <p>Dona’s most rewarding work has always been helping others figure out what they do best.</p>
                    <p>Her deep interest in this, led her to learning how to describe what it takes to perform any job to a set standard.</p>
                    <p>Also, how to ensure jobs and people are aligned with an organization’s culture and strategies.</p>
                    <p>This has helped Dona get better at matching people to work that makes them happier. Or more secure. Or both.</p>
                    <p>Dona believes that people are perfect … for something. Her mission is to help discover the factors that reveal what that “something” is.</p>

                  </div>
                </div>
                <div className='team-info-box'>
                  <div className='team-info-left'>
                    <div className='team-pic'>
                        <div className='team-img'><img src={jeffPolovick} alt="img" className="img-fluid" /></div>
                      <div className='team-name'>
                        Dona Baker<span>(he/him)</span>
                      </div>
                    </div>
                    <p>Co-founder and Head of People Development Certified Talent Management Consultant and Registered Professional Recruiter</p>
                  </div>
                  <div className='team-info-right'>
                    <p>Dona’s most rewarding work has always been helping others figure out what they do best.</p>
                    <p>Her deep interest in this, led her to learning how to describe what it takes to perform any job to a set standard.</p>
                    <p>Also, how to ensure jobs and people are aligned with an organization’s culture and strategies.</p>
                    <p>This has helped Dona get better at matching people to work that makes them happier. Or more secure. Or both.</p>
                    <p>Dona believes that people are perfect … for something. Her mission is to help discover the factors that reveal what that “something” is.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
      </section>
      
    </div>
  )
}

export default About