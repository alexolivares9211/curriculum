import React from 'react';
import {Container} from 'react-bootstrap';

const HeaderComponent = () => {

    return (
        <Container fluid className="header-container" id="home">
            <h1 className="title-header">Curriculum</h1>
            <h1 className="title-header">Ing. Alejandro Muñoz Olivares</h1>
        </Container>
    );
};

export default HeaderComponent;