import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {DARKMODE} from "../lib/utils";

import {Container, Col, Row} from 'react-bootstrap';

const Header = () => {
    return (
        <Container className="p-c">
            <Row>
                <Col>
                    <h1>Curriculum</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Alejandro Muñoz Olivares</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;