import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return(
    <>
    <h3>Get in Touch</h3>
    <a href="https://www.linkedin.com/in/chrisma-caroline-stephen/"><FontAwesomeIcon icon={faLinkedin} /></a>
    <a href="https://github.com/chrisma89"><FontAwesomeIcon icon={faGithub} /></a>
    <a href="mailto:chrismacaroline@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
    <a href="https://docs.google.com/document/d/1hTBfm4X3syo_9xZpZ9r_Xojsw8e-u_sk/edit?usp=sharing&ouid=107425732819687011201&rtpof=true&sd=true"><FontAwesomeIcon icon={faFile} /></a>


    {/* Contact form */}
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter First Name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter Last Name" />
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit="">
        Submit
      </Button>
    </Form>
 

    {/* Contact form */}

    </>

  )
}

export default Contact;