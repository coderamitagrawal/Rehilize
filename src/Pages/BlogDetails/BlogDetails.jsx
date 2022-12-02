import React, { useEffect, useRef, useState } from "react";
import "./BlogDetails.css";
import Dropdown from "react-bootstrap/Dropdown";
import blogImage from "../../Assets/img/blogImage.jpg";
import shareIcon from "../../Assets/img/share-icon.png";
import linkedInLogo from "../../Assets/img/linkedIn-logo.png";
import linkIcon from "../../Assets/img/link-icon.png";
import backTo from "../../Assets/img/back-to-icon.png";
import { Link, useLocation } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const BlogDetails = () => {
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

  useEffect(() => {
    if(location.pathname == "/blogDetails"){
      const divHeight = document.getElementById("small-below").offsetTop;
      window.scrollTo({
        top: divHeight,
      });
    }
    else{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    
  }, []);

  return (
    <div className="main-wrapper blog-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="blog-card-thumb">
              <img src={blogImage} alt="blog" width="100%" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="blog-header blog-detail-header">
              <div className="blog-details-top">
                <div>
                  <h1>Do you want to be a Tree Planter?</h1>
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
                        href={`https://linkedin.com/shareArticle?url=share.com/&blog_title=Do_you_want_to_be_a_Tree_Planter?`}
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
                In Part I of this two-part series, I wrote that we really need
                to be clear when explaining the roles in our organization. Most
                importantly by describing the main focus of the job and what a
                person needs to have for knowledge, skills, abilities and other
                attributes (KSAOs) to do their role successfully.
              </p>
              <p className="small" id="small-below">
                For example, I know the President of a tree planting company
                that reforests large tracts of wilderness that have been logged
                or burned by fires.
              </p>
              <p className="small">
                He paints a vivid picture of Tree Planters in his company by
                saying people in the role need to be two things overall –
                physically fit and mentally resilient.
              </p>
              <p className="small">
                He gives each candidate the following story:
              </p>
              <p className="small">
                <i>
                  “Our Tree Planters work in harsh, remote conditions. It’s
                  often wet and cold because you’re sleeping in a tent. Soap is
                  a luxury. There are no bathrooms or showers for miles and
                  miles and miles.
                </i>
              </p>
              <p className="small">
                You’re paid by the piece (tree) you plant. Which means you don’t
                make very much money the first year. You have to learn the
                rhythm of planting and build up your fitness. It involves an
                economy of movement, so you can plant as fast as possible with
                the least wear and tear on your body.
              </p>
              <p className="small">
                You also have to be an enthusiastic and collaborative problem
                solver. Tree planters work in teams. If something goes wrong,
                you have to work together to solve the issue. The team’s safety
                and wellbeing depends on each member being equally up for the
                challenges (weather, bears, illness etc.) you are going to run
                into.”
              </p>
              <p>
                Those candidates who know they don’t have the skills, energies
                or mental fortitude for the work, usually back out immediately.
                Interviews and assessments are then used to evaluate the much
                smaller number of candidates who are left.
              </p>
              <p>
                People who act as “lone wolves” or who crumble emotionally in
                the face of adversity are hazards. They get weeded out early in
                the selection process before they ever make it out to a remote
                work site.
              </p>
              <p>
                So, I asked you in the subject line, “Would you like to be a
                tree planter?” I imagine now that I have explained the job, you
                can easily tell me “yes” or “no”. There likely won’t be that
                many “maybe’s”.
              </p>
              <p>
                That’s the power of being clear about what you really need a
                person to do in the job. You raise the chances of attracting the
                right candidates, the first time. This also helps make for
                happier, more productive and longer-lasting employees.
              </p>
              <p>
                Want to learn more about defining the KSAOs of roles in your
                organization?{" "}
                <Link to="/Employer">
                  Set up a free discovery call with me or a member of my team.
                </Link>
              </p>
              <p>
                We will help you create and implement a plan, that keeps helps
                your organization to stay on the path of success.
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
                <Link to="/blogDetails/3" className="btn button-prev">
                  {"<<"} Previous Post
                </Link>
              </center>
              <center>
                <Link to="/Blog" className="btn button-backto">
                  Back to Blog Page
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

export default BlogDetails;
