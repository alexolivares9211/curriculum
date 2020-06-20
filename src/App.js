import React from 'react';
import './App.css';
import Header from "./pages/Header";
import Navigation from "./pages/Navigation";

import {Container} from "react-bootstrap";

const App = () => (
    <Container className="container-primary">
        <Navigation />
        <Header />
    </Container>
  );

export default App;
