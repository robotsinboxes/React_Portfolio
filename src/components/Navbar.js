import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import './Navbar.css';

const NavigationBar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container className="navbar">
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
          <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navbar-dropdown" className="me-auto">
              <Nav.Link className="nav-links" href="#intro">Home</Nav.Link>
              <Nav.Link className="nav-links" href="#about">About</Nav.Link>
              <Nav.Link className="nav-links" href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link className="nav-links" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    //   <Navbar expand='lg'> 
    //     <div className="navbar navbar-expand-sm navbar-fixed-top">
    //     <div className="neon-text navbar-brand link-scroll" href="#">
    //       <span className="fast-flicker">L</span>
    //       <span className="fast-flicker">I</span>
    //       <span className="fast-flicker">S</span> 
    //       <span className="flicker">A</span>
    //       <span className="fast-flicker g">G</span>
    //       <span className="flicker">O</span>
    //       <span className="flicker">O</span>
    //       <span className="fast-flicker">D</span>
    //       <span className="fast-flicker">E</span>
    //       <span className="fast-flicker">L</span>
    //       <span className="fast-flicker">L</span>
    //     </div>

    //     <button 
    //       type="button" 
    //       data-toggle="collapse" 
    //       data-target="#navbarSupportedContent" 
    //       aria-controls="navbarSupportedContent" 
    //       aria-expanded="false" 
    //       aria-label="Toggle navigation" 
    //       className="navbar-toggler">
    //         <BiMenu/>
    //     </button>

    //     <div className="collapse navbar-collapse"      id="navbarSupportedContent">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <a href="#intro" className="nav-link link-scroll">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#about" className="nav-link link-scroll">About</a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#portfolio" className="nav-link link-scroll">Portfolio</a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#contact" className="nav-link link-scroll">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //     </div>
    // </Navbar>
    )
}

export default NavigationBar;
