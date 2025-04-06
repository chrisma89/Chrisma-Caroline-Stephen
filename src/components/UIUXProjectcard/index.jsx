import React from "react";
import { Card, Button} from "react-bootstrap";
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
<Card>
  <Card>{id}</Card>
  <Card.Img src={src}></Card.Img>
  <Card.Title> {Title}</Card.Title>
  <Card.Body>{Description}</Card.Body>
  <Button>{Buttonlabel}</Button>
</Card>
</>
  )
}

export default UIUXProjectcard