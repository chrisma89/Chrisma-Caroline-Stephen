import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {

  // Setting the component's initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target; 
  setFormData({
    ...formData, 
    [name]: value, 
  });
  }

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill out all the fields");
    } 
     else {
      alert(`Hello ${formData.firstName} ${formData.lastName}, Thank you!`);
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
    })
  }



  return(
    <div  className = "projectbackgrnd" style={{ color : "#2C2C54"}}>
      <div className="d-flex align-items-center justify-content-center">

<a href="./images/CV.pdf" download="Chrisma Stephen CV.pdf" style={{ textDecoration: "none" }}>
  <Button variant="primary" className="roboto-medium download-button" style={{ marginTop: "30px", fontSize: "20px", backgroundColor : "white", color : "#474787" }}>
    <FontAwesomeIcon icon={faDownload}/> My Resume
  </Button>
</a>

  </div>
   


    {/* Contact form */}
    <Form onSubmit={handleFormSubmit} style={{
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
          Let's Connect!
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
      </Form.Group>
      <Button type ="submit" style ={{color : "white", fontSize : "20px", backgroundColor : "#AAABB8", margin: "35px", border : "#64002f"}} >
        Submit
      </Button>
    </Form>
 

    {/* Contact form */}

    </div>

  )
}

export default Contact;