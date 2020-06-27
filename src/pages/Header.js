import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {DARKMODE} from "../lib/utils";

import {Container, Col, Row} from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid className="p-c">
            <h1>Curriculum</h1>
            <h1>Alejandro Muñoz Olivares</h1>
        </Container>
    );
};

export default Header;