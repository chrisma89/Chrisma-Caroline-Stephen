import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid style={{ padding: "20px" }}>
      <Row className="justify-content-between about">
        <Col xs={12} md={6} className="d-flex justify-content-center" style={{ padding: "10px" }}>
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
      {/* Uncomment and adjust the download link as needed */}
      {/* <Row className="d-flex align-items-center justify-content-center">
        <Col xs={12} className="text-center">
          <a className="roboto-regular-italic" style={{ padding: "20px", fontSize: "25px", textDecoration: "none", color: "black" }} href="./images/CV.pdf" download="CV.pdf">Download Resume</a>
        </Col>
      </Row> */}
    </Container>
  );
};

export default About;
