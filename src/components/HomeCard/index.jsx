import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";
import Skills from "../skills";

function HomeCard() {
  return (
    <>
      <Container
        className="container-fluid flex-column"
        style={{
          fontFamily: "roboto-regular-italic",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <Row
          className="justify-content-start"
          style={{
            fontFamily: "roboto-italic",
            fontSize: "20px",
            padding: "10px",
            paddingTop:"30px"
          }}
        >
          <Col>
            Hello, I'm Chrisma.
          </Col>
        </Row>
        <Row
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          <Col>
            
From dentist to developer, my journey has been extraordinary. Captivated by how tech improves health and well-being, I ventured into coding with R, leading to a “Hello, World!” moment that sparked my love for Front End Web Development. It's more than a career shift; it’s blending my healthcare background with technology to make a real difference.

          </Col>
        </Row>
        {/* <Row
          style={{
            fontFamily: "roboto-italic",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          <Col>
            Now, merging my dental expertise with digital skills, I aim to
            create web applications that make a real difference, especially in
            healthcare. This unique blend of backgrounds guides me to innovate
            at the crossroads of health and technology.
          </Col>
        </Row> */}
        <Row
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
            paddingBottom : "30px"
          }}
        >
          
          <Col>
        
            I’m excited about the potential to collaborate and innovate
            together. If you’re drawn to the idea of blending healthcare insight
            with tech innovation, let’s connect and explore what we can create
            together. Thanks for stopping by, and here’s to crafting something
            amazing together!
          </Col>
        </Row>

        <Card.Body
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <Card.Img className="rounded-circle mx-auto" style={{ width: '40%', height: '40%', padding: "35px" }} variant="top" src="../../images/pic.jpeg" />  */}
        </Card.Body>
        {/* </div> */}
      </Container>
      <Skills />
    </>
  );
}

export default HomeCard;
