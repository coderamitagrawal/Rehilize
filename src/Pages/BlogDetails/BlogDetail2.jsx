import React, { useEffect, useRef, useState } from "react";
import "./BlogDetails.css";
import Dropdown from "react-bootstrap/Dropdown";
import psychologicalSafety from "../../Assets/img/psychological-safety-details.png";
import shareIcon from "../../Assets/img/share-icon.png";
import linkedInLogo from "../../Assets/img/linkedIn-logo.png";
import linkIcon from "../../Assets/img/link-icon.png";
import backTo from "../../Assets/img/back-to-icon.png";
import { Link, useLocation } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const BlogDetail2 = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation()


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  
  useEffect(()=>{
    if (location.pathname == "/blogDetails/part2"){
      const divHeight = document.getElementById('small-below').offsetTop;
     window.scrollTo({
       top:divHeight
     })
    }
    else{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
   
  },[])

{/*
   useEffect(()=>{
     const divHeight = document.getElementById('main-wrapper blog-wrapper').offsetTop;
     window.scrollTo({
       top:divHeight
     })
   },[]) 
*/}
  return (
    <div className="main-wrapper blog-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="blog-card-thumb">
            <img src={psychologicalSafety} alt="blog" width="100%" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="blog-header blog-detail-header">
            <div className="blog-details-top">
              <div>
                <h1>Psychological Safety: You can’t see what you don’t believe.</h1>
              </div>
              <div className="share-btn">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Share Post
                    <img src={shareIcon} alt="blog" width="100%" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item
                        href={`https://linkedin.com/shareArticle?url=share.com/&blog_title=You_can’t_see_what_you_don’t_believe?`}
                        target="_blank"
                      >
                        <img src={linkIcon} alt="blog" width="100%" />
                        <img src={linkedInLogo} alt="blog" width="100%" />
                      </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <img src={linkIcon} alt="blog" width="100%" />
                      <CopyToClipboard text={"google.com"}>
                      <span> Get Link</span> 
                      </CopyToClipboard>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="blog-user">
              <div className="blogging-date">Published 25 October 2022</div>
              <Link to="/About" className="blog-user-name text-right">
                By Dona Baker,
                <div className="font-normal">
                  RHEALIZE, Co-founder and <br></br>Head of People Development
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-5 mb-5">
          <div className="blog-content">
            <p>
              In her video <a href="https://vimeo.com/609694802" target="_blank"> Psychological Safety is No Accident, </a> Dr. Eve Purdy advises that senior leaders in organizations often assume their employees feel psychologically safe because they happen to feel safe.
            </p>
            <p id="small-below">
              I think it’s reasonable and expected that senior leaders think this way. That’s because all leaders are human beings and susceptible to “availability bias”.
            </p>
            <p>
              Availability bias is what leads us to rely on only our own experience (usually events we have recently seen, heard or read) to form an opinion on how often or extreme a situation is or is likely to be.
            </p>
            <p>
              For example, a friend of mine works as a Communications Manager at a company where they completed an engagement and satisfaction survey on their employees during the Covid pandemic. The company’s senior leadership team results indicated that they were extremely engaged and pumped about the business. They were very positive about the future and thought that they were all getting along well and dealing with the stress of the pandemic.
            </p>
            <p>
              Things were not so rosy for the next level of management, including my friend the Communications Manger and the rest of the employees in the company. The results, in general, indicated that managers and workers felt overworked and disconnected from the goals of the organization and were experiencing a lack of support from leadership. Two departments in particular showed that employees were at high risk for burnout (and associated mental and physical health issues) given what they had reported in their surveys.
            </p>
            <p>
              Even having this information, the leadership team did not believe that the results were true. They would not give the Communications Manager authorization to release the results to the company’s managers and staff members. As senior leadership was feeling a high level of psychological safety and engagement, they naturally thought everyone else was too and that the survey results had to be flawed and likely misleading. They rationalized that they would be creating a negative mind set in employees if they were to share the results of the survey. Rather than do that, the leadership team decided to try to improve everyone’s spirts by holding team building sessions for managers and their departments.
            </p>
            <p>
              I think this leadership team is very typical of many, many companies. They got swayed by the comforting certainty of their own thoughts and feelings and reject the information that contradicts beliefs that come out of their own experience.
            </p>
            <p>
              When we are a senior leader, we need to learn to suspend how we feel and trust the data that is telling us what employees are feeling.
            </p>
            <p>
              For information on how RHEALIZE can help incorporate psychological safety into your organization, <a href="#"> contact us for a discovery call.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-5 mb-5">
          <div className="blog-links">
            {/*
             <center>
               <Link to="/blogDetails" className="btn button-prev">
                 {"<<"} Previous Post {" "}
               </Link>
             </center> 
         */}
            <center>
              <Link to="/blogDetails/1" className="btn button-prev">
              {"<<"}{" "}  Previous Post 
              </Link>
            </center>
            <center>
              <Link to="/blog" className="btn button-backto">
                Back to Blog Page
              </Link>
            </center>
            <center>
              <Link to="/blogDetails/3" className="btn button-prev">
              Next Post {">>"}{" "} 
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
    <div className="back-to-link">
      <div className="back-to-icon">
        <Link>
          <img
            style={{ display: visible ? "inline" : "none" }}
            onClick={handleTop}
            src={backTo}
            alt="blog"
            width="100%"
          />
        </Link>
      </div>
    </div>
  </div>
    
  )
}

export default BlogDetail2