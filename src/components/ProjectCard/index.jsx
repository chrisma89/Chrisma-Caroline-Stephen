
import Card from 'react-bootstrap/Card';



function ProjectCard ({id,image,name, github,deployed, description}) {
  return (
    <div className=' container-fluid d-flex flex-column justify-content-center'>
     
    <Card className ="d-flex justify-content-center align-items-center"style={{ width: '40rem', height : '36rem'}}>
      <Card.Img variant="top" src={image} className='img-container' style={{width : "100%"}}/>
      <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
        <Card.Title style={{fontSize: "20px", padding: "5px", color : "#64002f", textAlign : "center"}}>{name}</Card.Title>
        <Card.Text style={{fontSize: "20px", color : "#64002f", textAlign : "center"}}> 
         {description}
        </Card.Text>
        <a  href={github} target="_blank"style ={{ backgroundColor : "#64002f", color : "white", margin : "2px", padding : "2px"}} >GITHUB</a>
        <a  href={deployed} target="_blank"style ={{ backgroundColor : "#64002f", color : "white", margin : "2px" ,padding : "2px"}} >APPLICATION</a>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCard;

