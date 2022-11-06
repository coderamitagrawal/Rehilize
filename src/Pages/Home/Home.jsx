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
              <h1>Candidate</h1>
              <div className="grey-card-bg">
                <div className="grey-card-body">
                  <div className="image-box"></div>
                </div>
                <a href="#" className="btn button-light w-100">Candidate</a>
                <p>Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem sint amet et fugiat corporis ut ratione dicta est illum magni nam necessitatibus possimus. Et perspiciatis praesentium qui natus nihil eos pariatur dolores et obcaecati nisi et quod quasi est sint voluptas.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-wrapper">
              <h1>Employer</h1>
              <div className="grey-card-bg">
                <div className="grey-card-body">
                  <div className="image-box"></div>
                </div>
                <a href="#" className="btn button-dark w-100">Employer</a>
                <p>
                  Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem sint amet et fugiat corporis ut ratione dicta est illum magni nam necessitatibus possimus. Et perspiciatis praesentium qui natus nihil eos pariatur dolores et obcaecati nisi et quod quasi est sint voluptas.
                </p>
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

