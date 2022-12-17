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
import UnSubscribeEmployer from "../Pages/Unsubscribe/unSubscribeEmployer";
import UnSubscribeCandidate from "../Pages/Unsubscribe/unSubscribeCandidate";
import EmployerSettingForm from "../Pages/Employer/EmployerSettingForm";
import CandidateSettingForm from "../Pages/Candidate/CandidateSettingForm";

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
    if (location.pathname == "/blogDetails" || location.pathname == "/blog" || location.pathname == "/about" || location.pathname == "/about" || location.pathname == "/employer" || location.pathname == "/candidate" || location.pathname == "/privacy"){
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
      <Route path="/unsubscribe/employer/:id" element={ <UnSubscribeEmployer /> }/>
      <Route path="/unsubscribe/candidate/:id" element={ <UnSubscribeCandidate />  }/>
      <Route path="/employer/setting/:id" element={<EmployerSettingForm />} />
      <Route path="/candidate/setting/:id" element={<CandidateSettingForm />} />
    </Routes>

    </>
  );
};
export default PublicRoutes;



