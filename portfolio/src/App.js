import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import ContactBtn from './components/ContactBtn';
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <div className="background">
        <About />
        <Particles
          params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
          }
        }} 
        />

      </div> 
        <div className="contact-btn">
            <ContactBtn />
        </div>
   
        <div className="works">
            <Works />
        </div>

        <div className="contact">
            <Contact />
        </div>

      </div>
   
  );
}

export default App;
