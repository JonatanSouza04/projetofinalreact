import React from "react";
import { Routes } from './routes';
import Menu from './components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <div className="App">
        <Container>
           <Menu />
           <Routes />
       </Container>
    </div>
  );
}
