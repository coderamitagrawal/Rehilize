import React from "react";
import "./Blog.css";
import blogImage from "../../Assets/img/blogImage.webp";
import userOne from "../../Assets/img/user-1.jpg";
import { NavLink } from "react-bootstrap";

export const Blog = () => {
  return (
    <>
      <div className="main-wrapper blog-wrapper">
        <div className="container-fluid">
          <h1 className="text-uppercase">Title</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="blog-card-thumb">
                <img src={blogImage} alt="blog" width="100%" />
              </div>
            </div>
            <div className="col-md-8">
              <p className="blog-content">
                Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem
                sint amet et fugiat corporis ut ratione dicta est illum magni
                nam necessitatibus possimus. Et perspiciatis praesentium qui
                natus nihil eos pariatur dolores et obcaecati nisi et quod quasi
                est sint voluptas.
              </p>
              <p>
                Lorem ipsum dolor sit amet. Aut ratione iste ut dolore culpa rem
                sint amet et fugiat corporis ut ratione dicta est illum magni
                nam necessitatibus possimus.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="title-big-primary mt-5 mb-3 text-center">
                Past Articles
              </h1>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-5">
                  <div className="card-wrapper dark-grey-card-bg">
                    <div className="blog-card-small">
                      <div className="blog-card-thumb-small">
                        <img src={userOne} title="Dona baker" />
                      </div>
                      <div>
                        <h3 className="card-title">Title</h3>
                        <p>
                          Lorem ipsum dolor sit amet. Aut ratione iste ut dolore
                          culpa rem sint amet et fugiat corporis ut ratione
                          dicta ----- SNIPPET
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card-wrapper dark-grey-card-bg">
                    <div className="blog-card-small">
                      <div className="blog-card-thumb-small">
                        <img src={userOne} title="Dona baker" />
                      </div>
                      <div>
                        <h3>Title</h3>
                        <p>
                          Lorem ipsum dolor sit amet. Aut ratione iste ut dolore
                          culpa rem sint amet et fugiat corporis ut ratione
                          dicta ----- SNIPPET
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <ul className="blog-category-list">
                    <li>
                      <NavLink to="#">Title</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Title</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Title</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Title</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
