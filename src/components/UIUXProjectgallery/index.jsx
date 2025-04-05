import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import uiuxprojectsdata from "../../uiuxprojects.json"
import UIUXProjectcard from "../UIUXProjectcard";

const UIUXProjectsGallery = () =>{

const [selecteduiuxproject, setSelecteduiuxproject] = useState(null)

const setuiuxproject = (uiuxprojectid) =>{
 const chosenuiuxproject = uiuxprojectsdata.find (uiuxproject => uiuxproject.id === uiuxprojectid );
 setSelecteduiuxproject(chosenuiuxproject)
}

return (
  <>
  <Container className='container-fluid' style={{padding: "20px", backgroundColor : "#474787"}}>
{selecteduiuxproject ?
(<>
<UIUXProjectcard
  id = {selecteduiuxproject.id}
  Title={selecteduiuxproject.Title}
  Description ={selecteduiuxproject.Description}
    Image ={selecteduiuxproject.image}><div>{id}</div>
<div>{Title}</div>
<div>{Description}</div>
<div>{Image}</div>

</UIUXProjectcard>

</>)
:
(
  <Row>
{uiuxprojectsdata.map((uiuxprojectid) => (
                            <Col key={uiuxprojectid.id} sm={12} md={6} lg={4}>
                                <UIUXProjects
                                    id={uiuxprojectid.id}
                                    description={uiuxprojectid.description}
                                    // skill={project.skill}
                                    image={uiuxprojectid.image}
                                    setuiuxproject={() => setuiuxproject(uiuxprojectid.id)}
                                />
                            </Col>
                        ))}
                    </Row>
 
)

}
  </Container>
  </>
)
}

export default UIUXProjectsGallery