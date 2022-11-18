import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <>
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card-wrapper">
              {/* <h1>Candidate</h1> */}
              <div className="dark-grey-card-bg">
                <div className="grey-card-body">
                  <div className="image-box">
                    <p>You’re already perfect ... for something.</p>
                  </div>
                </div>
                <a href="#" className="btn button-light text-uppercase w-100">Candidate</a>
                <p>
                  You have a lot ot offer. We see it.
                </p>
                <p>
                  While you're ready for the challenge of a meaningful career, that work should also rise to your challenge - to meet you where your efforts have energy and purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-wrapper">
              {/* <h1>Employer</h1> */}
              <div className="dark-grey-card-bg">
                <div className="grey-card-body">
                  <div className="image-box">
                    <p>Are you prepared for perfection?</p>
                  </div>
                </div>
                <a href="#" className="btn button-dark text-uppercase w-100">Employer</a>
                <p>Hiring defines your organization’s future. So start by considering how your workplace best engages new talent.</p>
                <p>What if rethinking roles attracted staff that redefined your business opportunities?</p>
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

