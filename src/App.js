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


function App() {
return (
   <div className="main-container">
      <div className="nav-container">
            <NavigationBar  />
      </div> 
      <div id="intro" className="intro-container">
            <Intro />
      </div> 
      <div id="about" className="abt-container">
            <About />
      </div> 
      <div className="quote-container">
            <Quote />
      </div> 
      {/* <div className="space-container">
            <Background />
      </div> */}
      <div id="projects" className="card-container"> 
            <Projects />
      </div>
      <div id="contact" className="contact-container">
            <Contact />
      </div>
      <div className="footer-container">
            <Footer />
      </div>

   </div>
);
}

export default App;

