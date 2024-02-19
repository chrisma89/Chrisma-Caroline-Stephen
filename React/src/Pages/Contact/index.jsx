import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"


const Contact = () => {
  return(
    <div style={{background : 'black', paddingBottom : "100%"}}>
    <h3 style={{fontSize: "25px", padding: "20px", color : "#59B4C3",  padding: "50px", background : 'black'}}>Contact Me</h3>


    {/* Contact form */}
    <Form  style={{
      display: "flex", 
      justifyContent: "center", 
      flexDirection : "column",
      alignItems: "center", 
      color : "#59B4C3",
      fontSize : "25px"
    }}>
      <Form.Group className="mb-3 form d-flex justify-content-center" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter First Name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter Last Name" />
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button  style ={{backgroundColor : "#59B4C3", margin: "35px"}} type="submit" onSubmit="">
        Submit
      </Button>
    </Form>
 

    {/* Contact form */}

    </div>

  )
}

export default Contact;