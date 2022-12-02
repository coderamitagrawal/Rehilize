import React from "react";
import "./Blog.css";
import blogImage from "../../Assets/img/blogImage.jpg";
import turnoverThrows from "../../Assets/img/turnover-throws-img.png";
import psychological from "../../Assets/img/psychological-img.png";
import talentLuck from "../../Assets/img/talent-or-luck-img.png";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <>
      <div className="main-wrapper blog-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="blog-card-thumb">
                <img src={blogImage} alt="blog" width="100%" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="blog-header">
                <h1>Do you want to be a Tree Planter?</h1>
                <h5>Being Clear About Role Expectations – Part II</h5>
                <div className="blog-user">
                  <div className="blog-user-name">
                    By Dona Baker,
                    <div className="font-normal">RHEALIZE, Co-founder and Head of People Development</div>
                  </div>
                  <div className="blogging-date">Published 25 October 2022</div>
                </div>
                <p className="blog-content">
                In Part I of this two-part series, I wrote that we really need to be clear when explaining the roles in our organization. Most importantly by describing the main focus of the job and what a person needs to have for knowledge, skills, abilities and other attributes (KSAOs) to do their role successfully.
                </p>
                <div className="text-right">
                 <Link to="/blogDetails" className="btn continue-btn pt-1 pb-1">Continue Reading</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Link to="" className="title-big-primary mt-5 mb-3 text-center">
                More Posts
              </Link>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card-wrapper dark-grey-card-bg">
                    <div className="blog-card-small">
                      <div className="blog-card-thumb-small">
                        <img src={turnoverThrows} title="Dona baker" />
                      </div>
                      <div className="blog-text">
                        <h3 className="card-title">Turnover Throws Money and People AwayClarifying Expectations – Part I</h3>
                        <p>
                          Have you ever used a turnover calculator to figure out the real cost of
                          someone leaving your organization? It’s staggering. No matter why an employee exits.
                        </p>
                        <center><Link to="/blogDetails/part3" className="btn button-dark mt-5 w-100">Continue Reading</Link></center>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-wrapper dark-grey-card-bg">
                    <div className="blog-card-small">
                      <div className="blog-card-thumb-small">
                        <img src={psychological} title="Dona baker" />
                      </div>
                      <div className="blog-text">
                        <h3 className="card-title">Psychological Safety: You can’t see what you don’t believe</h3>
                        <p>
                          In her video <strong><a href="https://vimeo.com/609694802" target="blank">Psychological Safety is No Accident,</a></strong> Dr. Eve Purdy advises that senior leaders in organizations often
                          assume their employees feel psychologically safe because they happen to feel safe.
                        </p>
                        <center><Link to="/blogDetails/part2" className="btn button-dark mt-5 w-100">Continue Reading</Link></center>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-wrapper dark-grey-card-bg">
                    <div className="blog-card-small">
                      <div className="blog-card-thumb-small">
                        <img src={talentLuck} title="Dona baker" />
                      </div>
                      <div className="blog-text">
                        <h3 className="card-title">Talent or Luck? What Matters Most</h3>
                        <p>
                          Have you ever used a turnover calculator to figure out the real cost of
                          someone leaving your organization? It’s staggering. No matter why an employee exits.
                        </p>
                        <center><Link to="/blogDetails/part1" className="btn button-dark mt-5 w-100">Continue Reading</Link></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
