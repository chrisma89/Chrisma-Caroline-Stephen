import NavBar from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./style.css";

function HomeCard() {
  return (
  
    <div className="container-fluid homecard">
    <div className="justify-content-center">
        <div className="text-center title" style={{color : "#6d0f22", fontSize : "50px", fontFamily: "allura-regular", padding : "5px"}}>Chrisma Caroline Stephen </div>
        <div className="text-center" style={{color : "#6d0f22", fontSize : "35px", padding : "1px"}}>
          Welcome to my Portfolio!
        </div>
        <Card.Body style={{ backgroundColor: "transparent",  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}> 
          <Card.Img className="rounded-circle mx-auto" style={{ width: '40%', height: '40%', border: "25" }} variant="top" src="src/images/pic.jpeg" /> 
        </Card.Body>
    </div>
    </div>
  );
}

export default HomeCard;
