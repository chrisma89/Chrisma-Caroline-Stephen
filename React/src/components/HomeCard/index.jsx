import NavBar from "../navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";

function HomeCard() {
  return (
    <Container className="container-fluid d-flex justify-content-center">
    <Card >
   
      <Card.Body>
        <Card.Title style={{ width: '18rem' }}>CHRISMA CAROLINE STEPHEN</Card.Title>
        <Card.Text>
          PORTFOLIO
        </Card.Text>
        
      </Card.Body> 
        <Card.Img style={{ width: '18rem' }}  variant="top" src="src\images\pic.jpeg" className="rounded d-flex justify-content-center" />
    </Card>
    </Container>
  );
}

export default HomeCard;
