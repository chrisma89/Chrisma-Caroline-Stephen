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
          paddingTop: "5rem",
          minHeight : "80vh"
        }}
      >
        <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-italic",
            fontSize: "4rem",
            // padding: "10px",
            paddingTop: "30px",
          }}
        >Vanakkam, Swāgatham, Welcome.
          {/* <Col>Vanakkam! Swāgatham! Welcome!
</Col> */}
        </Row>
        {/* <Row
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "3rem",
            padding: "10px",
          }}
        >
          This portfolio is a collection of Front-end web development projects and UI/UX design work.
        </Row> */}
        <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "2.5rem",
            paddingTop: "4rem",
          }}
        >I’m a front-end web developer who enjoys designing clean, user-friendly interfaces and bringing them to life with code. I use Figma for UI/UX design and JavaScript and React for development.
        </Row>
        <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "2.5rem",
            paddingTop: "4rem",
          }}
        >I’d love to hear your opinion on these projects, so feel free to connect with me on LinkedIn and let’s collaborate.
        </Row>
        <Row
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
          }}
        ></Row>
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
        ></Row>

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
