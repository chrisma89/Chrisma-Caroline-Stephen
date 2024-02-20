
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"


function Projects ({id,image,name, github,deployed, selectProject}) {
  return (
    <div>
    <Card className ="d-flex justify-content-center col"style={{ width: '20rem', height : '16rem', border: "2px solid #64002f"}}>
      <Card.Img variant="top" src={image} className='img-container' style = {{width : "100%"}}/>
      <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
        <Card.Title style={{fontSize: "20px", padding: "10px", color : "#64002f", textAlign : "center"}}>{name}</Card.Title>
      
        <Button id={id}  style ={{backgroundColor : "#64002f", color : "white", margin : "5px", alignItems : "center"}} onClick={() => selectProject(id)}>
        VIEW PROJECT
      </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Projects;

