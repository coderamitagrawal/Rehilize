import React, { useEffect, useRef, useState } from "react";
import "./BlogDetails.css";
import Dropdown from "react-bootstrap/Dropdown";
import turnoverThrows from "../../Assets/img/turnover_throws_details.png";
import shareIcon from "../../Assets/img/share-icon.png";
import linkedInLogo from "../../Assets/img/linkedIn-logo.png";
import linkIcon from "../../Assets/img/link-icon.png";
import backTo from "../../Assets/img/back-to-icon.png";
import { Link, useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";


const BlogDetail3 = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  
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

  useEffect(() => {
    if (location.pathname == "/blogDetails/part3") {
      const divHeight = document.getElementById("small-below").offsetTop;
      window.scrollTo({
        top: divHeight,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  {
    /*
   useEffect(()=>{
     const divHeight = document.getElementById('small-below').offsetTop;
     window.scrollTo({
       top:divHeight
     })
   },[]) 
*/
  }

  return (
    <div className="main-wrapper blog-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="blog-card-thumb">
              <img src={turnoverThrows} alt="blog" width="100%" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="blog-header blog-detail-header">
              <div className="blog-details-top">
                <div>
                  <h1>Turnover Throws Money and People Away</h1>
                  <h5>Being Clear About Role Expectations – Part II</h5>
                </div>
                <div className="share-btn">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Share Post
                      <img src={shareIcon} alt="blog" width="100%" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item
                        href={`https://linkedin.com/shareArticle?url=share.com/&blog_title=Turnover_Throws_Money_and_People_Away?`}
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
                Have you ever used a turnover calculator to figure out the real
                cost of someone leaving your organization? It’s staggering. No
                matter why an employee exits.
              </p>
              <p id="small-below">
                Even the lowest paying positions cost thousands of dollars for
                their replacements. It can cost 10 times as much if the employee
                was in an executive role.
              </p>
              <p>
                Hundreds of billions of dollars are walking out of North
                American work places every year.
              </p>
              <p>
                On top of that are the losses of livelihood and the serious harm
                to the confidence, self-esteem and career advancement of the
                people who are out of a job.
              </p>
              <p>
                It’s clear, there’s a crisis situation. But what can do we do
                about it?
              </p>
              <p>
                Wouldn’t it be great to know which people are more likely to
                work out before we hire them? Or, to know why an existing,
                valued employee is disengaged and then be able to intervene
                before they get fired or leave?
              </p>
              <p>
                If you manage people, you know that employee turnover is
                complex. There isn’t a single, certain reason or solution for
                it.
              </p>
              <p>
                What is certain is that being clear about what you want someone
                to do raises the odds of finding and keeping the person willing
                and able to do that job.
              </p>
              <p>
                Being clear about the job, can also point to qualified people
                inside an organization who are eager to take on that work.
              </p>
              <p>
                Just how clear do we have to be? Very, very clear. At least,
                much clearer than what we are right now.
              </p>
              <p>
                Being clear means that you are thoroughly explaining the main
                focus, attitudes and behaviours needed to do the job properly
                and as expected.
              </p>
              <p>
                <a href="#">
                  <i>Read Next: Being Clear About Role Expectations</i>
                </a>
              </p>
              <p className="small">
                For information on how RHEALIZE can help your organization save
                money and increase worker efficiency by attracting the right
                people to well defined roles (right hiring),{" "}
                <a href="#"> contact us for a discovery call.</a>
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
                <Link to="/blogDetails/2" className="btn button-prev">
                  {"<<"} Previous Post
                </Link>
              </center>
              <center>
                <Link to="/Blog" className="btn button-backto">
                  Back to Blog Page
                </Link>
              </center>
              <center>
                <Link to="/blogDetails/4" className="btn button-prev">
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
  );
};

export default BlogDetail3;
