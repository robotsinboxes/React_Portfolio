import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar navbar-expand-sm navbar-fixed-top">
        <div className="neon-text navbar-brand link-scroll" href="#">
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
        </div>
        <button 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            className="navbar-toggler">
            <span><i className="fa fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse navbar-links" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#intro" className="nav-link link-scroll">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link link-scroll">About</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link link-scroll">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link link-scroll">Contact</a>
                </li>
            </ul>
        </div>
      </div>
    )
}

export default Navbar;
