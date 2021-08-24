import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const HeaderComponent = () => {

  return (
    <Container fluid id="home">
      <Row>
        <Col><h1 className="title-header">Curriculum</h1></Col>
      </Row>
      <Row>
        <Col><h1 className="title-header">Ing. Alejandro Muñoz Olivares</h1></Col>
      </Row>
    </Container>
  );
};

export default HeaderComponent;