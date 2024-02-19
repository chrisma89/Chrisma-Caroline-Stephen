
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
// import DetailProject from '../DetailProject';

function Projects ({id,image,name, github,deployed, displayProject}) {
  return (
    <div>
    <Card className ="d-flex justify-content-center col"style={{ width: '22rem', height : '15rem'}}>
      {/* <Card.Img variant="top" src={image} className='img-container'/> */}
      <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
        <Card.Title style={{fontSize: "20px", padding: "10px", color : "black", textAlign : "center"}}>{name}</Card.Title>
        {/* <Card.Text> */}
         {/* Project Description */}
        {/* </Card.Text> */}
        <a href={github} target="_blank"><Button  style ={{backgroundColor : "#59B4C3", margin : "5px"}} >GITHUB</Button></a>
        <a href={deployed} target="_blank"><Button  style ={{backgroundColor : "#59B4C3", margin : "5px"}} >APPLICATION</Button></a>
        <Button id={id}  style ={{backgroundColor : "#59B4C3", margin : "5px", alignItems : "center"}} onClick={() => displayProject(id)}>
        VIEW NOW
      </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Projects;

