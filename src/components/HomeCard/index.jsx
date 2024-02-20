
import Card from "react-bootstrap/Card";
import "./style.css";

function HomeCard() {
  return (
  
    <div className="container-fluid homecard">
    <div className="justify-content-center text-center title" style={{color : "white", fontSize : "25px", fontFamily: "allura-regular", margin : "15px", width : "50%"}} >
        <div>Welcome to my Portfolio!
          Explore my projects to see the innovation I bring by blending expertise in dentistry and software development. For collaboration and my resume, check out the links page. Thanks for visiting!
          Chrisma</div>
    
        <Card.Body style={{ backgroundColor: "transparent",  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}> 
          <Card.Img className="rounded-circle mx-auto" style={{ width: '40%', height: '40%', padding: "35px" }} variant="top" src="../images/pic.jpeg" /> 
        </Card.Body>
    </div>
    </div>
  );
}

export default HomeCard;
