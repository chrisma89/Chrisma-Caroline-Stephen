import React from "react";
import { Card, Button, Container} from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import UIUXProjectsGallery from "../UIUXProjectgallery";

function UIUXProjectcard({id,
  Title,
Description,
Image,
Buttonlabel,
src

}){
  return(
<>
<Container >
<Card className='container-fluid d-flex align-items-center'>
  <Card>{id}</Card>
  <Card.Img src={src}></Card.Img>
  <Card.Title> {Title}</Card.Title>
  <Card.Body>{Description}</Card.Body>
  <Button>{Buttonlabel}</Button>
</Card>
</Container>
</>
  )
}

export default UIUXProjectcard