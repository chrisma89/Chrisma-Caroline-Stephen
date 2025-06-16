import React from "react";
import { Card, Button, Container, Row, Col} from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import UIUXProjectsGallery from "../UIUXProjectgallery";

function UIUXProjectcard({id,
  Title,
Description,
Project,
Problem,
Goal,
Solution,
Outcome,
Image,
Buttonlabel,
src


}){

   const { outcomeHeading = "", outcomeContent = [] } = Outcome || {};
   const { problemHeading = "", problemContent = [] } = Problem || {};

 
  
  return(
<>
<Container className="projectcard">
{/* <Row> */}
        {/* <Col xs={12} sm={10} md={8} lg={6} xl={4}> */}
         
<Card className='container-fluid d-flex align-items-center mb-4'>
  {/* <Card>{id}</Card> */}
  {/* <Card.Img src={src}></Card.Img> */}
  <Card.Title> {Title}</Card.Title>
  <Card.Body>{Description}</Card.Body>
    {/* <Card.Body>{Project}</Card.Body> */}
     <Card.Body>{problemHeading}</Card.Body>
      <ul>
  {problemContent.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
          <Card.Body>{Goal}</Card.Body>
          <Card.Body>{Solution}</Card.Body>
          <Card.Body>{outcomeHeading}</Card.Body>
          <ul>
  {outcomeContent.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


  {/* <Button>{Buttonlabel}</Button> */}
</Card>
{/* </Col> */}
{/* </Row> */}
</Container>
</>
  )
}

export default UIUXProjectcard