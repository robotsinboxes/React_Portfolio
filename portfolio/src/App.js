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
// import Nav from './components/Nav';

function App() {
  return (
    <div className="background">
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
