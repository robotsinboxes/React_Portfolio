import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <div class="navbar navbar-expand-sm navbar-fixed-top">
        <div class="neon-text navbar-brand link-scroll" href="#">
            <span class="fast-flicker">L</span>
            <span class="fast-flicker">I</span>
            <span class="fast-flicker">S</span> 
            <span class="flicker">A</span>
            <span class="fast-flicker g">G</span>
            <span class="flicker">O</span>
            <span class="flicker">O</span>
            <span class="fast-flicker">D</span>
            <span class="fast-flicker">E</span>
            <span class="fast-flicker">L</span>
            <span class="fast-flicker">L</span>
        </div>
        <button 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            class="navbar-toggler">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <a href="#intro" class="nav-link link-scroll">Home</a>
                </li>
                <li class="nav-item">
                <a href="#about" class="nav-link link-scroll">About</a>
                </li>
                <li class="nav-item">
                <a href="#portfolio" class="nav-link link-scroll">Portfolio</a>
                </li>
                <li class="nav-item">
                <a href="#contact" class="nav-link link-scroll">Contact</a>
                </li>
            </ul>
        </div>
      </div>
    )
}

export default Navbar;
