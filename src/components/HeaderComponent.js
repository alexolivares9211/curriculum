import React, {useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import '../styles/styles.css';

const HeaderComponent = () => {

    return (
        <Container fluid className="header-container">
            <h1>Curriculum</h1>
            <h1>Alejandro Muñoz Olivares</h1>
        </Container>
    );
};

export default HeaderComponent;