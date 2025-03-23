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
        
          Click on 'Projects' to get a glimpse of the story so far.
          
          Watch this space for more updates.
        
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
