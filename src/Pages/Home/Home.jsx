import React from 'react'
import './Home.css'
import candidatesImage from "../../Assets/img/candidate-image.jpg";
import employerImage from "../../Assets/img/employer-image.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <div className="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card-wrapper">
              {/* <h1>Candidate</h1> */}
              <div className="dark-grey-card-bg p-0">
                <div className="image-box">
                  <img src={candidatesImage} alt="img" className="img-fluid" />
                </div>
                <div className="grey-card-body">
                  <p>
                    You have a lot ot offer. We see it.
                  </p>
                  <p>
                    While you're ready for the challenge of a meaningful career, that work should also rise to your challenge - to meet you where your efforts have energy and purpose.
                  </p>
                  <center><Link to="/Candidate" className="btn button-light mt-5">Find your fit</Link></center>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-wrapper">
              {/* <h1>Employer</h1> */}
              <div className="dark-grey-card-bg p-0">
                <div className="image-box">
                  <img src={employerImage} alt="img" className="img-fluid" />
                </div>
                <div className="grey-card-body">
                  <p>Hiring defines your organization’s future. So start by considering how your workplace best engages new talent.</p>
                  <p>What if rethinking roles attracted staff that redefined your business opportunities?</p>  
                  <center><Link to="/Employer" className="btn button-dark mt-5">Get started</Link></center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

