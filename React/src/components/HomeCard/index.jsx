import NavBar from "../navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";

function HomeCard() {
  return (
    <Container className="container-fluid d-flex justify-content-center">
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>CHRISMA CAROLINE STEPHEN</Card.Title>
        <Card.Text>
          PORTFOLIO
        </Card.Text>
        
      </Card.Body> 
        <Card.Img variant="top" src="src\images\pic.jpeg" className="rounded" />
    </Card>
    </Container>
  );
}

export default HomeCard;
