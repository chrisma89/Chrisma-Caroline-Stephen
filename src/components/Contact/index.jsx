import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Links from "../LInks";
import { Col, Container, Row } from "react-bootstrap";
import "../../main.css"

const Contact = () => {
  //   // Setting the component's initial state
  //   const [formData, setFormData] = useState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     message: '',
  //   });

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  //   }

  // const handleFormSubmit = (event) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
  //     alert("Please fill out all the fields");
  //   }
  //    else {
  //     alert(`Hello ${formData.firstName} ${formData.lastName}, Thank you!`);
  //   }

  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     message : '',
  //   })
  // }

  return (
    <div className="container-fluid d-flex" style={{ backgroundColor: "#2C2C54" }}>
      <Container className="container-fluid d-flex projectbackgrnd" style={{ color: "#2C2C54" }}>
        <Row className="justify-content-center align-items-center p-5">
          <p
           
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontFamily: "roboto-medium",
              textAlign: "center",
            }}
          >
            I am looking for opportunities to collaborate and innovate together.
          </p>
          <p
           
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontFamily: "roboto-medium",
              textAlign: "center",
            }}
          >
            {" "}
            Please click on the icons below to get in touch.{" "}
          </p>
          <div className="linkicon">
            {" "}
            <Links />
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <a
              href="/images/CV.pdf"
              download="Chrisma Stephen CV.pdf"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="primary"
                className="roboto-medium download-button"
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  fontSize: "20px",
                  backgroundColor: "white",
                  color: "#474787",
                }}
              >
                <FontAwesomeIcon icon={faDownload} /> My Resume
              </Button>
            </a>
          </div>
        </Row>

        {/* Contact form */}
        {/* <Form onSubmit={handleFormSubmit} style={{
      display: "flex", 
      justifyContent: "center", 
      flexDirection : "column",
      alignItems: "center", 
      color : "white",
      fontSize : "18px",
      fontFamily : "roboto-medium",
      padding : '5px'
    }}>
      <Form.Group className="mb-3 form d-flex justify-content-center" controlId="formBasicEmail"> 
      
        <div style={{fontSize: "25px", padding: "50px", color : "white",fontFamily : "roboto-medium" }}>
          Drop me a message here, and i'll be in touch soon!
        </div>
        <Form.Label>First Name</Form.Label>
        <Form.Control  value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text" 
          placeholder="Enter First Name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control  value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text" placeholder="Enter Last Name" />
        <Form.Label>Email Address</Form.Label>
        <Form.Control  value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email" />
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={5} value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="text"
        
          placeholder="Your message here" />
      </Form.Group>
      <Button type ="submit" style ={{color : "white", fontSize : "20px", backgroundColor : "#AAABB8", margin: "35px", border : "#64002f"}} >
        Submit
      </Button>
    </Form> */}

        {/* Contact form */}
      </Container>
    </div>
  );
};

export default Contact;
