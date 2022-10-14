import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiMenu } from 'react-icons/hi'
import './Navbar.css';

const style = { color: "rgb(255, 36, 131)", fontSize: "1em" };

const NavigationBar = () => {
   return (
      <Navbar collapseOnSelect expand="sm md" fixed="top" className="navbar">
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
            className="navbar-toggler" 
            aria-controls="basic-navbar-nav" 
            style={style}>
            <HiMenu/>
         </Navbar.Toggle>
         <Navbar.Collapse 
            className="navbar-collapse"
            id="basic-navbar-nav">
            <Nav 
               id="navbar-dropdown" 
               className="me-auto">
               <div className="all-links">
                  <Nav.Link 
                     className="nav-links" href="#intro">
                        <h4 className='link-text'>Home</h4>
                  </Nav.Link>
                  <Nav.Link 
                     className="nav-links" href="#about">
                        <h4 className='link-text'>About</h4>
                  </Nav.Link>
                  <NavDropdown
                     title="Projects" 
                     className="nav-links"
                     id='basic-nav-dropdown'
                     alignRight>
                        <NavDropdown.Item 
                           className="dropdown-link" 
                           href="#design">Design
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                           className="dropdown-link" 
                           href="#development">Development
                        </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link 
                     className="nav-links" href="#contact">
                        <h4 className='link-text'>Contact</h4>
                  </Nav.Link>
               </div>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default NavigationBar;
