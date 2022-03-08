import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Intro from './components/Intro';
import Quote from './components/Quote';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="main-container">
      <div className="navbar">
            <Navbar />
      </div> 
      <div className="intro">
            <Intro />
      </div> 
      <div className="quote-container">
            <Quote />
      </div> 
      <div className="space-container"></div>
      <div className="abt-container">
            <About />
      </div> 
      <div className="card"> 
            <Projects />
      </div>
      <div className="contact">
            <Contact />
      </div>
      <div className="bg-container">
            <Background />
      </div> 
    </div>
  );
}

export default App;

