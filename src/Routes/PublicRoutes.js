import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Candidate from "../Pages/Candidate/Candidate";
import { Blog } from "../Pages/Blog/Blog";
import Employer from "../Pages/Employer/Employer";
import { Contact } from "../Pages/Contact/Contact";
import Privacy from "../Pages/Privacy/Privacy";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import BlogDetail1 from "../Pages/BlogDetails/BlogDetail1";
import BlogDetail2 from "../Pages/BlogDetails/BlogDetail2";
import BlogDetail3 from "../Pages/BlogDetails/BlogDetail3";

const PublicRoutes = () => {
  
  const [path,setPath] = useState('')
  const location = useLocation()

  useEffect(()=>{
    if (location.pathname == "/blogDetails/1" || location.pathname == "/blogDetails/part1"){
      setPath(1)
    }
    if (location.pathname == "/blogDetails/2" || location.pathname == "/blogDetails/part2"){
      setPath(2)
    }
    if (location.pathname == "/blogDetails/3" || location.pathname == "/blogDetails/part3"){
      setPath(3)
    }
    if (location.pathname == "/blogDetails/4"){
      setPath(4)
    }
    if (location.pathname == "/blogDetails" || location.pathname == "/Blog" || location.pathname == "/About" || location.pathname == "/About" || location.pathname == "/Employer" || location.pathname == "/Candidate"){
      setPath('')
    }
  },[location])

  return (
    <>
    {
      path == "1"?<BlogDetail1/>:path == "2"?<BlogDetail2/>:path == "3"?<BlogDetail3/>:path == "4"?<BlogDetails/>:null
    }
  

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

    </>
  );
};
export default PublicRoutes;


