import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutComponent extends Component {
  render() {
    return (
      <Container fluid className="sections-container" id="about">
        <Row>
          <Col><h1 className="title-sections">¿Quien Soy?</h1></Col>
        </Row>

        <Row>
          <Col xl={5}>
            <p>
              Soy Ingeniero en Computación, egresado de la
              Universidad Autonoma del Estado de Hidalgo
              con experiencia en desarrollo de software,
              tanto en frontend como en backend.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xl={5}>
            <p>
              Tengo el deseo de seguir superandome a mi mismo, aprendiendo nuevas tecnologías
              para aportar soluciones optimas e involucrarme en proyectos acorde a mi perfil.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xl={5}>
            <p className="second-p-about">
              Soy proactivo, me gusta proponer, dar ideas y que se puedan llevar a cabo. Me adapto facilmente a
              equipos de trabajo en area de Front-end o Back-end.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutComponent;