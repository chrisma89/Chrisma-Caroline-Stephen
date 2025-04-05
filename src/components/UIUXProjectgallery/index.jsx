import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import uiuxprojectsdata from "../../uiuxprojects.json"
import UIUXProjectcard from "../UIUXProjectcard";

const [selecteduiuxproject, setselecteduiuxproject] = useState(null)

const setuiuxproject = (uiuxprojectid) =>{
 const chosenuiuxproject = uiuxprojectsdata.find (uiuxproject => uiuxproject.id === uiuxprojectid );
 setselecteduiuxproject(chosenuiuxproject)
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
{uiuxprojectsdata.map((uiuxproject) => (
                            <Col key={uiuxproject.id} sm={12} md={6} lg={4}>
                                <UIUXProjects
                                    id={uiuxproject.id}
                                    description={uiuxproject.description}
                                    // skill={project.skill}
                                    image={uiuxproject.image}
                                    setuiuxproject={() => setuiuxproject(uiuxproject.id)}
                                />
                            </Col>
                        ))}
                    </Row>
 
)

}
  </Container>
  </>
)