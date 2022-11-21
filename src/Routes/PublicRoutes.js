import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Candidate from "../Pages/Candidate/Candidate";
import { Blog } from "../Pages/Blog/Blog";
import Employer from "../Pages/Employer/Employer";
import { Contact } from "../Pages/Contact/Contact";
import Privacy from "../Pages/Privacy/Privacy";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/candidate" element={<Candidate />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/employer" element={<Employer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path = "/blogDetails" element = {<BlogDetails/>}/>
    </Routes>
  );
};
export default PublicRoutes;
