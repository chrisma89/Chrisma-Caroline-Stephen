import NavBar from "../navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>CHRISMA CAROLINE STEPHEN</Card.Title>
        <Card.Text>
          PORTFOLIO
        </Card.Text>
        
      </Card.Body> 
        <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
  );
}

export default HomeCard;
