import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"


const Contact = () => {
  return(
    <>
    <h3 style={{fontSize: "25px", padding: "20px", color : "#59B4C3",  padding: "50px"}}>Contact Me</h3>


    {/* Contact form */}
    <Form  style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
    }}>
      <Form.Group className="mb-3 form d-flex justify-content-center" controlId="formBasicEmail">
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