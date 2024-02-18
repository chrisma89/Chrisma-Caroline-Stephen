import NavBar from "../navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import "./style.css"

function HomeCard() {
  return (
    <Container>
     
      <h1 className="text-center">CHRISMA CAROLINE STEPHEN</h1>
      
      <p className="text-center" >PORTFOLIO</p>
    
    <Card style={{ width: '18rem' }} className="container-fluid d-flex">
        <Card.Img className="mx-auto rounded-circle"  variant="top" src="src\images\pic.jpeg"  />
    </Card>
    </Container>
  );
}

export default HomeCard;
