import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutComponent extends Component {
    render() {
        return (
            <Container fluid className="sections-container" id="about">
                <Row noGutters xl={1}>
                    <Col className="col-1"><h1 className="title-sections">¿Quien Soy?</h1></Col>

                    <Col className="col-2" xl="auto">
                        <p className="pp">
                            Me considero una persona responsable, con iniciativa
                            y con facilidad para integrarme a un equipo de trabajo,
                            con liderazgo y honestidad para cumplir los objetivos
                            asignados.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutComponent;