import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BiMenu } from 'react-icons/bi'
import './Navbar.css';

const NavigationBar = () => {
    return (
      <Navbar collapseOnSelect expand="sm" fixed="top" className="navbar">
          <Navbar.Brand className='neon-text' href="#home">
            <span className="fast-flicker">L</span>
            <span className="fast-flicker">I</span>
            <span className="fast-flicker">S</span> 
            <span className="flicker">A</span>
            <span className="fast-flicker g">G</span>
            <span className="flicker">O</span>
            <span className="flicker">O</span>
            <span className="fast-flicker">D</span>
            <span className="fast-flicker">E</span>
            <span className="fast-flicker">L</span>
            <span className="fast-flicker">L</span>
          </Navbar.Brand>
          <Navbar.Toggle    
            className="navbar-toggler" aria-controls="basic-navbar-nav" >
              <BiMenu/>
          </Navbar.Toggle>
          <Navbar.Collapse 
          className="navbar-collapse"
          id="basic-navbar-nav">
            <Nav 
              id="navbar-dropdown" 
              className="me-auto">
                <div className="all-links">
                <Nav.Link 
                  className="nav-links" href="#intro">Home
                </Nav.Link>
                <Nav.Link 
                  className="nav-links" href="#about">About
                </Nav.Link>
                <Nav.Link 
                  className="nav-links" href="#projects">Projects
                </Nav.Link>
                <Nav.Link 
                  className="nav-links" href="#contact">Contact
                </Nav.Link>
                </div>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;
