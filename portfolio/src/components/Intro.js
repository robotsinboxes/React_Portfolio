import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
        <div className="hello">Hello, friend.</div> 
        <div className="intro-content">
          <h6>I am a Software Engineer</h6>
          <h6>with a passion for the Front End </h6>
          <h6>and <span id="uiux">UI/UX</span> Design.</h6>
        </div>
    </div>
  )
}

export default Intro;

