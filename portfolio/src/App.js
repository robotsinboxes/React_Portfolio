import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from './img/cloud.jpg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
// import Background from './components/Background';
import Content from './components/Content';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
// import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div className="background">
      <div>
        <Particles 
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true, 
                  value_area: 900
                }
              },
              shape: {
                type: "square",
                stroke: {
                  width: 4,
                  color: "purple"
                }
              }
            }
          }}
       
        />
        <Nav />
        <Header />
      </div>
    </div>
  );
}

export default App;
