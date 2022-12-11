import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import navBgImage from "../../Assets/img/nav-bg.png";
import rhealizeLogo from "../../Assets/img/rhealize-logo.png";
import { BiMenu } from "react-icons/bi"
import "./layoutStyle.css";

const Header = () => {
  const { pathname } = useLocation()

  return (
    <div>
      <div className="header-logo text-center">
        <Link to="/">
          <img src={rhealizeLogo} />
        </Link>
      </div>
      <section className="header-nav">
        <div className="header-bg">
          <img src={navBgImage} alt="img" className="img-fluid" />
        </div>
        <Navbar expand="lg">
          <Navbar.Toggle ><BiMenu aria-controls="basic-navbar-nav" className="menuIcon" /></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              className="nav-wrapper"
            >
              <Nav.Item>
                <Link to="/" className={`${pathname === '/' ? "activeLink" : ''}`}>Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about" className={`${pathname === '/About' ? "activeLink" : ''}`} >About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/candidate"  className={`${pathname === '/Candidate' ? "activeLink" : ''}`}>Candidate</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/employer"  className={`${pathname === '/Employer' ? "activeLink" : ''}`}>Employer</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/blog"  className={`${pathname === '/Blog' ? "activeLink" : ''}`}>Blog</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contact"  className={`${pathname === '/Contact' ? "activeLink" : ''}`}>Contact</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </div>
  );
};

export default Header;


