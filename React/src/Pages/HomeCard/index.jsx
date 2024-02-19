import NavBar from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./style.css";

function HomeCard() {
  return (
  
    <div className="container-fluid homecard">
    <Card className="mx-auto justify-content-center"style={{ width: '24rem' }}>
      
      <Card.Body style={{backgroundColor : "#59B4C3"}}>
        <Card.Title className="text-center title" style={{color : "white"}}>CHRISMA CAROLINE STEPHEN</Card.Title>
        <Card.Text className="text-center" style={{color : "white"}}>
          PORTFOLIO
        </Card.Text>
        <Card.Img className="rounded-circle" variant="top" src="src\images\pic.jpeg" />
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default HomeCard;
