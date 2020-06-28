import React, {Component} from 'react';

import {Button, Navbar, Nav, Container} from "react-bootstrap";

class NavComponent extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Full-Stack Jr. Developer</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#about">Perfil</Nav.Link>
                        <Nav.Link href="#experience">Experiencia</Nav.Link>
                        <Nav.Link href="#education">Educación</Nav.Link>
                        <Nav.Link href="#courses">Cursos</Nav.Link>
                        <Nav.Link href="#languages">Idiomas</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>

                </Navbar>
            </>
        );
    }
};

export default NavComponent;