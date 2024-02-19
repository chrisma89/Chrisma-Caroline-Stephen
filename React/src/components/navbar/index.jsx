import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="container-fluid navbarmain">
      <Container className='justify-content-center'>
      <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <Nav.Link style={{color:"white", paddingRight :"30px"}} href="/">HOME</Nav.Link>
            <Nav.Link style={{color:"white", paddingRight :"30px"}} href="/projects">PROJECTS</Nav.Link>
            <Nav.Link style={{color:"white", paddingRight :"30px"}} href="/links">LINKS</Nav.Link>
            <Nav.Link style={{color:"white", paddingRight :"30px"}} href="/contact">CONTACT</Nav.Link>
          
          </Nav>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;