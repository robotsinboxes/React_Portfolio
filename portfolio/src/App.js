import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Background from './components/Background';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="main-container">
      <div className="navbar">
         <Navbar />
      </div> 
       <div className="bg-container">
         <Background />
      </div> 
      <div id="intro">
      </div>
       <div className="abt-container" id="about">
         <About />
      </div> 
      <div className="card" id="projects"> 
        <Projects />
      </div>
      <div className="contact" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

