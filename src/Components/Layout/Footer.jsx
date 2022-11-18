import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-wrapper">
    <div className="footer-nav">
    <ListGroup>
      <ListGroup.Item><Link to="/">Privacy Policy</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/">Terms of Use</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/">Accessibility</Link></ListGroup.Item>
    </ListGroup>
      <div className="copyright">
        Copyright © 2022  2309225 Alberta o/a RHEALIZE   All Rights Reserved
      </div>
    </div>
  </footer>
  )
}

export default Footer

