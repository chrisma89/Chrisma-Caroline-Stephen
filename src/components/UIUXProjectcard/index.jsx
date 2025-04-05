import React from "react";
import { Card, CardImg, CardTitle } from "react-bootstrap";

function UIUXProjectcard({
  Title,
Description,
Image,
Buttonlabel,
src

}){
  return(
<>
<Card>
  <CardImg>{Image}</CardImg>
  <Card.Title> {Title}</Card.Title>
  <Card.Body>{Description}</Card.Body>
  <Button>{Buttonlabel}</Button>
</Card>
</>
  )
}

export default UIUXProjectcard