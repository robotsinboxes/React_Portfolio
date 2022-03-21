import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navbar';
import Intro from './components/Intro';
import Quote from './components/Quote';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlackRocks from './img/black-rocks-landscape.jpg';
import BlackRocksLg from './img/black-rocks-lg.jpg';
import { Parallax } from 'react-parallax';

function App() {
  return (
    <div className="main-container">
      <div className="nav-container">
            <NavigationBar  />
      </div> 
      <div id="intro" className="intro-container">
            <Parallax bgImage={BlackRocksLg}>
                  <Intro />
            </Parallax>
      </div> 
      <div id="about" className="abt-container">
            <About />
      </div> 
      <div className="quote-container">
            <Parallax bgImage={BlackRocksLg}>
                  <Quote />
            </Parallax>
      </div> 
      {/* <div className="space-container">
            <Background />
      </div> */}
      <div id="projects" className="card-container"> 
            <Projects />
      </div>
      <div id="contact" className="contact-container">
            <Parallax bgImage={BlackRocks}>
                  <Contact />
            </Parallax>
      </div>
      <div className="footer-container">
             <Footer />
      </div>

    </div>
  );
}

export default App;

