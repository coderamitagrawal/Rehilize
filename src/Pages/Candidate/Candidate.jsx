import React from 'react'
import './Candidate.css'
import { Link } from 'react-router-dom'

const Candidate = () => {
  return (
    <div class="main-wrapper">
    <div class="container-fluid">
      <h1>Candidate</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="card-wrapper">
            <div class="grey-card-bg">
              <div class="grey-card-body">
                <div class="image-box"></div>
              </div>
              <Link href="#" class="btn button-light w-100">Candidate</Link>
              <p>Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem sint amet et fugiat corporis ut ratione dicta est illum magni nam necessitatibus possimus. Et perspiciatis praesentium qui natus nihil eos pariatur dolores et obcaecati nisi et quod quasi est sint voluptas.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-wrapper">
            <div class="grey-card-bg">
              <div class="grey-card-body">
                <div class="image-box"></div>
              </div>
              <a href="#" class="btn button-light w-100">Candidate</a>
              <p>
                Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem sint amet et fugiat corporis ut ratione dicta est illum magni nam necessitatibus possimus. Et perspiciatis praesentium qui natus nihil eos pariatur dolores et obcaecati nisi et quod quasi est sint voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Candidate;