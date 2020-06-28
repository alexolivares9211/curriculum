import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class AboutComponent extends Component {
    render() {
        return (
            <Container fluid className="sections-container" id="about">
                <h1 className="title-sections">¿Quien Soy?</h1>
            </Container>
        );
    }
}

export default AboutComponent;