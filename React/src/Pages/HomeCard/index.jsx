import NavBar from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./style.css";

function HomeCard() {
  return (
  
    <div className="container-fluid homecard">
    <div className="justify-content-center">
        <div className="text-center title" style={{color : "white", fontSize : "45px", padding : "20px"}}>CHRISMA CAROLINE STEPHEN </div>
        <div className="text-center" style={{color : "white", fontSize : "35px", padding : "1px"}}>
          PORTFOLIO
        </div>
        <Card.Body style={{ backgroundColor: "black", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}> 
          <Card.Img className="rounded-circle mx-auto" style={{ width: '60%', height: '60%', border: "25" }} variant="top" src="src/images/pic.jpeg" /> 
        </Card.Body>
    </div>
    </div>
  );
}

export default HomeCard;
