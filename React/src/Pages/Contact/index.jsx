import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return(
    <>
    <h3>Contact Me</h3>


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