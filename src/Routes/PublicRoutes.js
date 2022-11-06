import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Candidate from "../Pages/Candidate/Candidate";
import { Blog } from "../Pages/Blog/Blog";
import Employer from "../Pages/Employer/Employer";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/candidate" element={<Candidate />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/employer" element={<Employer />} /> */}
    </Routes>
  );
};
export default PublicRoutes;
