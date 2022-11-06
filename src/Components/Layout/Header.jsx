import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import navBgImage from "../../Assets/img/nav-bg.png";
import rhealizeLogo from "../../Assets/img/rhealize-logo.png";
import {BiMenu} from "react-icons/bi"
import "./layoutStyle.css";

const Header = () => {
  return (
    <div>
      <div className="header-logo text-center">
        <img src={rhealizeLogo} />
      </div>
      <section className="header-nav">
        <div className="header-bg">
          <img src={navBgImage} alt="img" />
        </div>
        <Navbar expand="lg"
        >
        <Navbar.Toggle ><BiMenu aria-controls="basic-navbar-nav" className="menuIcon"/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="nav-wrapper"
        >
          <Nav.Item>
            <Link to="/About">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Candidate">Candidate</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Employer">Employer</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Blog">Blog</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Contact">Contact</Link>
          </Nav.Item>
        </Nav>
        </Navbar.Collapse>
        
        </Navbar>
      </section>
    </div>
  );
};

export default Header;
