import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="container-fluid navbarmain">
      <Container className='justify-content-center'>
      <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            {/* <Link><img  style={{height :"100%", width : "40%"}}src="/images/logo.png"/></Link> */}
          <Link style={{color:"white", paddingRight :"30px", fontFamily : "roboto-black-italic"}} to="/">HOME</Link>
            <Link style={{color:"white", paddingRight :"30px",fontFamily : "roboto-black-italic"}} to="/projects">PROJECTS</Link>
            <Link style={{color:"white", paddingRight :"30px",fontFamily : "roboto-black-italic"}} to="/links">LINKS</Link>
            <Link style={{color:"white", paddingRight :"30px",fontFamily : "roboto-black-italic"}} to="/contact">CONTACT</Link>
          
          </Nav>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;