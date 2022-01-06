import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Background from './components/Background';

function App() {
  return (
    <div className="main-container">
      <div className="navbar">
         <Navbar />
      </div> 
       <div className="bg-container">
         <Background />
      </div>  
    </div>
  );
}

export default App;

