import React, {Component} from 'react';
import './App.css';
import Header from "./pages/Header";
import Navigation from "./pages/Navigation";

import {Container} from "react-bootstrap";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Education from "./pages/Education";
import Courses from "./pages/Courses";
import Languages from "./pages/Languages";
import Contact from "./pages/Contact";

class App extends Component {
    render() {
        return (
            <Container fluid className="container-primary">
                <Navigation/>
                <Header/>
                <About />
                <Experience/>
                <Education />
                <Courses />
                <Languages />
                <Contact />
            </Container>
        );
    }
}


export default App;
