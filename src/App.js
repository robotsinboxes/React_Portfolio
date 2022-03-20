import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navbar';
// import Background from './components/Background';
import Intro from './components/Intro';
import Quote from './components/Quote';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="main-container">
      <div className="navbar">
            <NavigationBar />
      </div> 
      <div className="intro">
            <Intro />
      </div> 
      <div className="abt-container">
            <About />
      </div> 
      <div className="quote-container">
            <Quote />
      </div> 
      {/* <div className="space-container">
            <Background />
      </div> */}
      <div className="card-container"> 
            <Projects />
      </div>
      <div className="contact">
            <Contact />
      </div>

    </div>
  );
}

export default App;

