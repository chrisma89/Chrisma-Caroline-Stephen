import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid>
      <Row className="justify-content-between">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="flex-column align-items-center">
          
            <div className="charm-regular">Hello, I'm Chrisma.</div>
            <div className="charm-regular">I'm a Web Developer with a background in dentistry.</div>
            <div className="charm-regular">Explore my projects & get in touch.</div>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-row align-items-end justify-content-end" style={{ padding: "20px" }}>
          <div className="roboto-regular-italic">Design ||</div>
          <div className="roboto-regular-italic">Create ||</div>
          <div className="roboto-regular-italic">Deliver</div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
