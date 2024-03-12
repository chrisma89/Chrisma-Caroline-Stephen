import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const footerIconStyle = {
  color: "#ECECEC",
  fontSize: "20px", // Adjust the icon size here instead of width and height to ensure scalability
  padding: "20px", // Adjust padding to control the space around the icons
};

const Footer = () => {
  return (
    <div style={{backgroundColor : "#2C2C54"}}>
      <Container fluid style={{ backgroundColor: "#2C2C54", height: "20%" }} className="d-flex align-items-center">
        <Row className="w-100">
          <Col className="d-flex justify-content-start">
            {/* Icons */}
            <a href="https://www.linkedin.com/in/chrisma-caroline-stephen/" target="_blank" style={footerIconStyle}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/chrisma89" target="_blank" style={footerIconStyle}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:chrismacaroline@gmail.com" target="_blank" style={footerIconStyle}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="/images/CV.pdf" target="_blank" style={footerIconStyle}>
              <FontAwesomeIcon icon={faFile} />
            </a>
          </Col>
          
          <Col  className="d-flex justify-content-end">
            {/* Text */}
            <p style={{ color: "#ECECEC", fontSize: "20px", fontFamily: "roboto-black-italic", padding: "20px" }}>
              © Chrisma Caroline Stephen 2024
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

