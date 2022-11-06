import React from "react";
import "./Blog.css";
import blogImage from "../../Assets/img/blogImage.webp";
import userOne from "../../Assets/img/user-1.jpg";
import { NavLink } from "react-bootstrap";

export const Blog = () => {
  return (
    <>
      <div class="main-wrapper">
        <div class="container-fluid">
          <h1>Title</h1>
          <div class="row">
            <div class="col-md-4">
              <div class="blog-card-thumb">
                <img src={blogImage} alt="blog" width="100%" />
              </div>
            </div>
            <div class="col-md-8">
              <p class="blog-content">
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
          <div class="row">
            <div class="col-sm-12">
              <h1 class="title-big-primary mt-5 mb-3 text-center">
                Past Articles
              </h1>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-6">
                  <div class="card-wrapper grey-card-bg">
                    <div class="blog-card-small">
                      <div class="blog-card-thumb-small">
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
                <div class="col-md-6">
                  <div class="card-wrapper grey-card-bg">
                    <div class="blog-card-small">
                      <div class="blog-card-thumb-small">
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
              </div>
            </div>
            <div class="col-md-2">
              <ul class="blog-category-list">
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
    </>
  );
};
