import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className='container-fluid justify-content-center'>
      <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          
          </Nav>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;