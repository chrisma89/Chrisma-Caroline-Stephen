import NavBar from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./style.css";

function HomeCard() {
  return (
    // <Container className="container homecard">
    //   <h1 className="text-center">CHRISMA CAROLINE STEPHEN</h1>
    //   <p className="text-center">PORTFOLIO</p>

    //   <Card > 
    //     <Card.Img className="mx-auto rounded-circle image"
    //       variant="top"
    //       src="src\images\pic.jpeg"
    //     />
    //   </Card>
    // </Container>
    <div className="container-fluid homecard">
    <Card className="mx-auto justify-content-center"style={{ width: '24rem' }}>
      
      <Card.Body>
        <Card.Title className="text-center">CHRISMA CAROLINE STEPHEN</Card.Title>
        <Card.Text className="text-center">
          PORTFOLIO
        </Card.Text>
        <Card.Img className="rounded-circle" variant="top" src="src\images\pic.jpeg" />
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default HomeCard;
