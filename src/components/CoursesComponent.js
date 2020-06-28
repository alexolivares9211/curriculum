import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class CoursesComponent extends Component {
    render() {
        return (
            <Container fluid className="sections-container" id="courses">
                <h1 className="title-sections">Cursos</h1>
            </Container>
        );
    }
}

export default CoursesComponent;