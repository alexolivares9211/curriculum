import React, {Component} from 'react';
import {Col, Container, ProgressBar, Row} from "react-bootstrap";

class LanguagesComponent extends Component {
  render() {
    return (
      <Container fluid className="sections-container" id="languages">
        <Row>
          <h1 className="title-sections">Idiomas</h1>
          <Col>
            Español
          </Col>
          <Col xl={6}>
            <ProgressBar now={100} label={`${100}%`} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LanguagesComponent;