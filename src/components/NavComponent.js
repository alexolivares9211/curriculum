import React from 'react';

import {Button, Navbar, Nav, Container} from "react-bootstrap";

const NavComponent = () => {
    return (
        <>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Full-Stack Jr. Developer</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Experiencia</Nav.Link>
                    <Nav.Link href="#pricing">Educación</Nav.Link>
                    <Nav.Link href="#pricing">Cursos</Nav.Link>
                    <Nav.Link href="#pricing">Idiomas</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>

            </Navbar>
        </>
    );

};

export default NavComponent;