import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import uiuxprojectsdata from "../../uiuxprojects.json"
import UIUXProjectcard from "../UIUXProjectcard";

const [selecteduiuxproject, setselecteduiuxproject] = useState(null)

const selectuiuxproject = (uiuxprojectid) =>{
 const chosenuiuxproject = uiuxprojectsdata.find (uiuxproject => uiuxproject.id === uiuxprojectid );
 setselecteduiuxproject(chosenuiuxproject)
}

return (
  <>
  <Container className='container-fluid' style={{padding: "20px", backgroundColor : "#474787"}}>
{selecteduiuxproject ?
(<>

<</>)
:
()}
  </Container>
  </>
)