import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Privacy.css'
import { useEffect } from 'react';


const Privacy = () => {
const location = useLocation()

  useEffect(()=>{
    if(location.pathname == '/privacy'){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  },[])


  return (
    <div class="main-wrapper m-0">
      <div className='container'>
        <Row>
          <Col md={12}>
            <div className='privacy-wrapper'>
              <div className='effective-date mb-5'>
                Effective as of <strong>July 8, 2022</strong>
              </div>
              <center><h1 className='mb-5'>Privacy Policy</h1></center>

              <h3>Introduction and Scope</h3>
              <p>2309225 Alberta Ltd., doing business as "RHEALIZE" ("RHEALIZE)", "we", "us", and "our") considers matters relating to the protection of your personal information and your privacy to be extremely important. In order for RHEALIZE to conduct its business and to manage its relationship with you, we will need to collect, store, use, and disclose some of your personal information. We have developed this privacy policy (the "Privacy Policy") to inform you of the manner in which your personal information will be collected, used and disclosed. This Privacy Policy applies to RHEALIZE.</p>
              <h3>General</h3>
              <p>We will only collect, use and disclose your personal information as permitted by law. Usually this will require that we obtain your consent for the collection, use and disclosure of your personal information for a particular purpose. However, in certain limited circumstances your consent is not required (for example, where the collection, use or disclosure of the information is reasonable for the purposes of an investigation or legal proceeding, or where a statute or regulation authorizes or requires the collection, use or disclosure of personal information without consent). RHEALIZE may collect, use and disclose your personal information without your consent or knowledge in those limited circumstances where your consent or knowledge is not required by law.</p>
              <h3>Personal Information We Collect and How We Collect It</h3>
              <p>We collect personal information primarily for our "Job Seeker" platform which is used to virtually create your electronic resume and connect you with jobs and employers that match your profile and relevant experience. The information we collect includes: first name; last name; home address; email address; employment history, including previous employers, job titles, and descriptions of duties; education, including programs completed; certifications; training/courses completed; professional memberships; history of military service; interests; skills; career goals; information about your ideal work environment, including ideal locations, wages and other preferences; and data from third party psychometric assessments.</p>
              <p>We also use cookies and similar technologies for to collect data analytics on our website for the purposes of research and marketing, in order to determine how users interact with our site. We only collect such information as is reasonably necessary to help us better serve you and our other clients and users and to improve your overall experience interacting on our platform.
              Unless otherwise required or permitted by law or unless otherwise set out in this Privacy Policy: (i) we will only collect your personal information directly from you, and (ii) when we collect your personal information we will inform you of the uses and disclosures that we intend to make of your personal information.</p>
              <h3>Use</h3>
              <p>We will use personal information you provide only for purposes consistent with the reason you provided it and only for which you have consented to or opted in. RHEALIZE will use your personal information to create and store an electronic profile of your employment skills, experience and related education, including an electronic resume, for use in our "Job Seeker" platform for matching you with potential employers and our "Candidate Canvas" dashboard, which provides a private summary of your work-life development.</p>
              <p>RHEALIZE may use data from certain online personal assessment tools (described in the Disclosure section) in conjunction with your personal information to determine the potential employers who are the best matches for your personality and skills.</p>
              <p>We also use personal information to help us develop, deliver, and improve our products, services, and content. We may also use personal information for internal purposes such as auditing, data analysis, and research to improve our products, services, and communications.</p>
              <p>We retain your personal information for as long as is necessary to conduct our business and until you request that your data is removed from our system or for other essential purposes, such as complying with our legal obligations. In the event you cease using the services provided on our website, but do not explicitly request that we remove your personal information from our system, we will retain such information for a period of two (2) years, in accordance with our document retention standards.</p>
              <h3>Disclosure</h3>
              <p>RHEALIZE's platform matches job seekers with potential employers and as such, we will share your electronic resume, including the personal information you provide to us, with potential employers. Through the RHEALIZE platform, you are able to access our "Job Seeker" matching software whereby RHEALIZE will notify you of potential jobs that you may be well matched for. Only once you select "accept" will RHEALIZE suggest you, as a candidate, to the potential employers at which point your personal information is shared with those potential employers.
              In certain circumstances we may disclose your perRHEALIZE's platform matches job seekers with potential employers and as such, we will share your electronic resume, including the personal information you provide to us, with potential employers. Through the RHEALIZE platform, you are able to access our "Job Seeker" matching software whereby RHEALIZE will notify you of potential jobs that you may be well matched for. Only once you select "accept" will RHEALIZE suggest you, as a candidate, to the potential employers at which point your personal information is shared with those potential employers.sonal information without obtaining your further consent:</p>
              <ul>
                <li>
                We may disclose your personal information to comply with securities or other legislation, including the disclosure of your personal information at the request of securities regulators; and
                </li>
                <li>We may disclose your personal information to comply with securities or other legislation, including the disclosure of your personal information at the request of securities regulators; and</li>
              </ul>
              <p>RHEALIZE is committed to our own improvement and to consistently enhancing our users' experience. As part of this commitment, we use several third party online personal assessment products which evaluate our success based on various metrics and statistics. Such personal assessment product providers may share some of your personal information with RHEALIZE through their engagement with RHEALIZE. This personal information will only be used in a manner consistent with their purpose and only if you have opted in to providing such information, and have provided it to the third party through their assessment products. Note that the information collected by third parties, including these online personal assessment products, is governed by the privacy practices and policies of those third parties—not this Privacy Policy. We encourage you to learn about the privacy practices and policies of those third parties. The third party online personal assessment products we currently use are:</p>
              <ul>
                <li>Kolbe A<sup>™</sup>, Kolbe B<sup>™</sup> and Kolbe C<sup>™ </sup>assessments – provided by Kolbe Corp –<a href="https://www.kolbe.com/" target="blank">www.kolbe.com</a> – Copyright © Kolbe Corp. All rights reserved.</li>
                <li>PRINT® assessment – provided by The Paul Hertz Group – <a href="https://www.paulhertzgroup.com " target="blank">https://www.paulhertzgroup.com</a> – Copyright © Paul Hertz Group. All right reserved.</li>
                <li>CliftonStrengths® assessment - provided Gallup, Inc. <a href="https://www.gallup.com/cliftonstrengths/en/252137/home.aspx" target="blank">https://www.gallup.com/cliftonstrengths/en/252137/home.aspx</a> - Copyright © Gallup, Inc. All rights reserved.</li>
                <li>Basic Interest Marker survey – developed by Dr. James Rounds et al at the University of Illinois. Liao, H-Y., Armstrong, P. I., & Rounds, J. (2008). Development and initial validation of public domain basic interest markers [Monograph]. Journal of Vocational Behavior. 73, 159-183.
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0001879107001297?via%3Dihub" target="blank">https://doi.org/10.1016/j.jvb.2007.12.002 https://education.illinois.edu/faculty/james-rounds</a></li>
                <li>Lectical Leadership Decision Making (LDMA) and Lectical Reflective Judgment Assessment (LRJA) – provided by Lectica, Inc. <a href="https://lecticalive.org/about/assessments#gsc.tab=0" target="blank">https://lecticalive.org/about/assessments#gsc.tab=0</a> – Copyright © Lectica, Inc. All rights reserved.</li>
                <li>Qualtrics Surveying platform – used to collect survey responses for the Basic Interest Marker survey. Licensed through a subscription service purchased by RHEALIZE. <a href="https://www.qualtrics.com/au/?rid=ip&prevsite=en&newsite=au&geo=IN&geomatch=au" target="blank">https://www.qualtrics.com/</a></li>
              </ul>
              <p>RHEALIZE also uses other third-party service providers for other purposes, including PayPal for payment processing and MailChimp for email campaigns for users who have chosen to be contacted via email.</p>
              <p>In the event that RHEALIZE transfers or is considering transferring control of its operations to another organization (including through amalgamation), RHEALIZE may transfer and disclose your personal information to that organization, for the limited purpose of enabling the parties involved in the transfer or proposed transfer to evaluate and, if applicable, carry out the transfer. In those cases, RHEALIZE will require that the organization receiving the disclosed personal information agrees that it will only use or disclose your personal information as we are similarly entitled to under this Privacy Policy.</p>
              <p>We may engage other service providers to assist us in our activities, including, without limitation, legal counsel, accountants, auditors, investment advisors and information technology service providers. It may be necessary for us to disclose your personal information to these service providers in some circumstances. When we provide personal information to services providers, we require those services providers to protect the information in the same manner as we do. These service providers may not use your personal information for any purpose other than the reason you provided it to us.</p>
              <h3>Choices</h3>
              <p>You have certain choices relating to your personal information we collect and use. You must opt-in to having your information shared with potential employers as well as to participating in any academic research studies conducted by RHEALIZE.</p>
              <p>At any time, you may request that any or all of your personal data is removed from our systems and RHEALIZE will ensure that it is deleted from our records other than copies which are retained in our computers archival and backup servers, which will be retained in accordance with standard document retention policies.</p>
              <p>You may also request that we provide you with access to the personal information that we hold about you. You may ask us to correct any errors or delete any of the information we have about you. We note, however, that your ability to exercise these choices is not absolute. In some circumstances (for example, if the information is protected by legal privilege or if the information was collected for an investigation or legal proceeding), we may be permitted or obliged to deny such requests. In addition, to protect your privacy and the privacy of others, we may have to verify that you are who you say you are before we can give you access to, or change, information about you.</p>
              <h3>How to Contact Us</h3>
              <p>You may contact us, to ask questions or exercise choices relating to this Privacy Policy, in the following ways:</p>
              <p><strong>Privacy Officer: Lisa Zeppetzauer, President and Co-Founder</strong></p>
              <ul>
                <li>Phone: 780-504-4136</li>
                <li>Email: <a href="mailto:lzepp@rhealize.com" className='mailto'>lzepp@rhealize.com</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Privacy;