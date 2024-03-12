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
          paddingLeft: "0.2rem",
          paddingRight: "0.2rem",
        }}
      >
        <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-italic",
            fontSize: "20px",
            padding: "10px",
            paddingTop: "30px",
          }}
        >
          <Col>Hello, I'm Chrisma.</Col>
        </Row>
        <Row
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          <Col>
            My journey from dentistry to development marks a profound shift in
            my life's direction, driven by a deep-seated desire to blend my
            healthcare background with the limitless opportunities technology
            offers. It began with a simple "Hello, World!", which sparked an
            undeniable passion for Front End Web Development. Now, positioned at
            the unique intersection of healthcare and technology, I'm dedicated
            to crafting solutions that resonate on a personal level. This
            transition is more than just career change—it's a commitment to
            innovate and make a tangible difference in the world.
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
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
            paddingBottom: "30px",
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
