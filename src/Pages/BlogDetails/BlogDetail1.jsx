import React, { useEffect, useRef, useState } from "react";
import "./BlogDetails.css";
import Dropdown from "react-bootstrap/Dropdown";
import talentLuck from "../../Assets/img/talent-or-luck-img.png";
import shareIcon from "../../Assets/img/share-icon.png";
import linkedInLogo from "../../Assets/img/linkedIn-logo.png";
import linkIcon from "../../Assets/img/link-icon.png";
import backTo from "../../Assets/img/back-to-icon.png";
import { Link, useLocation } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const BlogDetail1 = () => {
  const [visible, setVisible] = useState(false);
  const location  = useLocation()
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
    if (location.pathname == "/blogDetails/part1"){
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
            <img src={talentLuck} alt="blog" width="100%" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="blog-header blog-detail-header">
            <div className="blog-details-top">
              <div className="blog-detail-heading">
                <h1>Talent or Luck? What Matters Most</h1>
              </div>
              <div className="share-btn">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Share Post
                    <img src={shareIcon} alt="blog" width="100%" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item
                        href={`https://linkedin.com/shareArticle?url=share.com/&blog_title=Talent_or_Luck?_What_Matters_Most?`}
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
            <p id="small-below">
              Tomas Premuzi's video <a href="https://www.youtube.com/watch?v=zeAEFEXvcBg" target="_blank"> Why Do So Many Incompetent Men Become Leaders? </a>at TEDx Nevada raises awareness on the divide between what the media celebrates in popular business figures and the characteristics that actually make a good leader.
            </p>
            <p>
              In his 2021 Forbes article, Talent, Effort Or Luck: Which Matters More For Career Success? Premuzi elaborates on what the research tells us about predictors of a person's potential career success. He summarizes these predictors as:
            </p>
            <ul className="list-bold">
              <li>Talent</li>
            </ul>
            <p>
              Talent accounts for approximately 46% of a person's overall career success. This percentage is broken down into three sub-categories:
            </p>
            <ul className="list-small">
              <li>Cognitive Intelligence – accounts for between 15% – 22% of a person's “talent” depending on the complexity of the work;</li>
              <li>
                Emotional Intelligence – accounts for about 9% of a person’s “talent”;
              </li>
              <li>
                Interests – account for 15% – 22% of “talent” depending on the level of cognitive intelligence required to the work. If higher cognitive intelligence is needed, then interests have a lower influence on a person’s efficacy in doing the work and vice versa.
              </li>
              <li>Effort</li>
            </ul>
            <p>
              Effort accounts for about 9% of a person’s overall career success. How hard a person is willing to work can impact their success, but they have to be willing to go “all in”.
            </p>
            <p>
              e.g., Bezos and Madonna are known to be extremely hard working which has contributed to their success.
            </p>
            <p>However, our effort is governed by what talents and luck come along with our work ethic.</p>
            <ul className="list-bold">
              <li>Luck</li>
            </ul>
            <p>
              Luck accounts for about 45% of a person’s overall career success. These are the “likeability traits” a person has such as: physical attractiveness, socio-economic status, gender, country of origin / residence etc.
            </p>
            <p>
              Premuzi shares that the more likeability traits we have the more opportunities we are given. This is regardless of whether we also have the needed talent and work ethic to go along with these opportunities.
            </p>
            <p>
            Premuzi goes on to say that the qualities that make strong and effective leaders are competence, humility and integrity. These are the “talent” factors and where Premuzi says we should focus our assessment efforts when we are selecting leaders and other employees.
            </p>
            <p>
              Dona Baker, Head of People Development and Co-Founder
            </p>
            <p>
              For information on how Whyworks can help your organization develop and assess competencies please <Link to=""> contact us for your free discovery call.</Link>
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
              <Link to="/Blog" className="btn button-backto">
                Back to Blog Page
              </Link>
            </center>
            <center>
              <Link to="/blogDetails/2" className="btn button-prev">
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

export default BlogDetail1