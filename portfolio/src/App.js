import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Background from './components/Background';
import Content from './components/Content';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Nav />
        <Background />
    </div>
  );
}

export default App;
