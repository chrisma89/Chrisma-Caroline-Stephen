import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import React, { useState } from 'react';


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
      alert('Fill out your first and last name please!');
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
    <div style={{background : 'black', paddingBottom : "100%"}}>
    <h3 style={{fontSize: "25px", padding: "20px", color : "#59B4C3",  padding: "50px", background : 'black'}}>Contact Me</h3>


    {/* Contact form */}
    <Form onSubmit={handleFormSubmit} style={{
      display: "flex", 
      justifyContent: "center", 
      flexDirection : "column",
      alignItems: "center", 
      color : "#59B4C3",
      fontSize : "25px"
    }}>
      <Form.Group className="mb-3 form d-flex justify-content-center" controlId="formBasicEmail">
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
          type="text"
          placeholder="Enter email" />
      </Form.Group>
      <Button type ="submit" style ={{backgroundColor : "#59B4C3", margin: "35px"}} >
        Submit
      </Button>
    </Form>
 

    {/* Contact form */}

    </div>

  )
}

export default Contact;