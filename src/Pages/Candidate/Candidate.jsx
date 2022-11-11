import React from 'react'
import './Candidate.css'
import { Link } from 'react-router-dom'

const Candidate = () => {
  return (
    <div className="main-wrapper">
    <div className="container-fluid">
      {/* <h1>Candidate</h1> */}
      <div className="row">
        <div className="col-md-12">
          <div className='dark-grey-card-bg'>
            <div className="card-row-wrapper">
              <div className="card-box">
                <div className="card-wrapper">
                  <div className="grey-card-body">
                    <div className="image-box"></div>
                  </div>
                  <Link href="#" className="btn button-light w-100 text-uppercase">Candidate</Link>
                  <p>Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem sint amet et fugiat corporis ut ratione dicta est illum magni nam necessitatibus possimus. Et perspiciatis praesentium qui natus nihil eos pariatur dolores et obcaecati nisi et quod quasi est sint voluptas.</p>
                </div>
              </div>
              <div className="card-box">
                <div className="card-wrapper">
                  <div className="grey-card-body">
                    <div className="image-box"></div>
                  </div>
                  <a href="#" className="btn button-light w-100 text-uppercase">Candidate</a>
                  <p>
                    Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem sint amet et fugiat corporis ut ratione dicta est illum magni nam necessitatibus possimus. Et perspiciatis praesentium qui natus nihil eos pariatur dolores et obcaecati nisi et quod quasi est sint voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Candidate;