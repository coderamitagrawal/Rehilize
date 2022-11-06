import React from 'react'
import './About.css'
import donaBaker from "../../Assets/img/user-1.jpg";
import lisaZeppetzauer from "../../Assets/img/user-2.jpg"
import jeffPolovick from "../../Assets/img/user-3.jpg"

const About = () => {
  return (
    <div class="main-wrapper">
      <div class="container-fluid">
        <div class="about-container">
          <h1>ABOUT RHEALIZE</h1>
          <p>For employers and candidates looking to fulfill a role, Whyworks! provides meaningful connections 
            because believe that when the right role connects with the right person, you can reach untapped potential.
          </p>
          <div class="row">
            <div class="col-md-4">
              <div class="about-info">
                <div class="about-header">
                  Improve Employee Retention and Reduce Costs    
                </div>
                <div class="about-content">
                  We can help improve all aspects of employees’ experience while aligning with your strategic and legal requirements. 
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="about-info">
                <div class="about-header">
                  We provide strategicHR consulting
                </div>
                <div class="about-content">
                  From people management and employee engagement to organizational culture and leadership and employee training, we have you covered.
                </div>
              </div>
            </div>
            <div class="col-md  -4">
              <div class="about-info">
                <div class="about-header">
                  Our approach supports the employee experience lifecycle
                </div>
                <div class="about-content">
                  From brand and culture to recruitment, and onboarding to development, retentention and exit, Whyworks! helps you cross the t’s and dot the i’s.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h1 class="title-big mt-5 mb-3 text-center">
                Our Leadership
              </h1>
            </div>
          </div>
          <div class="team-wrapper">
            <div class="card-wrapper grey-card-bg">
              <div class="grey-card-body">
                <div class="image-box">
                  <img src={donaBaker} title="Dona baker"/>
                </div>
              </div>
              <h3>Dona Baker <span>Founding Partner</span></h3>
              <p>Dona is one of the company’s management consultants and head of People and Product Development. 
                She has been an adult educator and facilitator for more than 20 years practicing in Human Resources
                and interpersonal development for most of her working career. She has written two books,
                “The Friction-Free Entrepreneur: How to Partner with Others Who Can Do The Stuff You Can’t” and 
                co-authored “Are You Built to Build?”
              </p>
              <p>Dona is a certified consultant in the Kolbe A™ and related Indexes, PRINT®, Lectica® and CliftonStrengths® assessments and a Certified Talent Management Consultant.</p>
            </div>
            <div class="card-wrapper grey-card-bg">
              <div class="grey-card-body">
                <div class="image-box">
                  <img src={lisaZeppetzauer} title="Lisa Zeppetzauer"/>
                </div>
              </div>
              <h3>Lisa Zeppetzauer <span>Founding Partner</span></h3>
              <p>
                Lisa is one of the company’s management consultants, President, and head of sales. She holds an International Business degree and worked for Swiss and Austrian companies in contract and business development.
              </p>
              <p>Lisa is a certified consultant in the Kolbe A™ and related Indexes and PRINT® assessments.</p>
            </div>
            <div class="card-wrapper grey-card-bg">
              <div class="grey-card-body">
                <div class="image-box">
                  <img src={jeffPolovick} title="Jeff Polovick"/>
                </div>
              </div>
              <h3>Jeff Polovick <span>Founding Partner</span></h3>
              <p>
                Jeff is one of the company’s management consultants. He has more than 45 year’s experience running his own businesses and being a board member for other organizations and companies. He is also an author, having written thebook “Why Can’t We?” abouthis experiences building amulti-million-dollar national automotive company. 
              </p>
              <p>Jeff is a certified consultant in the Kolbe A™ and related Indexes and PRINT® assessments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About