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
            
          Transitioning from dentistry to development wasn't just a career change for me—it was a leap into a future where I could merge my deep-rooted passion for healthcare with the boundless possibilities of technology. Driven by the conviction that tech has the power to revolutionize health and well-being, I embraced coding, starting with R. That initial "Hello, World!" moment wasn't just an introduction to programming; it was the spark that lit my fervent interest in Front End Web Development. Now, I stand at the crossroads of healthcare and technology, dedicated to making meaningful contributions that bridge these two worlds. This journey is more than a personal transformation; it's a commitment to innovate and create solutions that matter.

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
