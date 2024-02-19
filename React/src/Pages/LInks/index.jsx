
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./style.css"

const Links = () => {
  return(
    <>
    <h3 style={{fontSize: "25px", padding: "20px", color : "#59B4C3",  padding: "50px"}}>Get in Touch</h3>
    <a href="https://www.linkedin.com/in/chrisma-caroline-stephen/" target="_blank" className='icon'><FontAwesomeIcon icon={faLinkedin} /></a>
    <a href="https://github.com/chrisma89"  target="_blank" className='icon'><FontAwesomeIcon icon={faGithub} /></a>
    <a href="mailto:chrismacaroline@gmail.com"  target="_blank" className='icon'><FontAwesomeIcon icon={faEnvelope} /></a>
    <a href="https://docs.google.com/document/d/1hTBfm4X3syo_9xZpZ9r_Xojsw8e-u_sk/edit?usp=sharing&ouid=107425732819687011201&rtpof=true&sd=true"  target="_blank" className='icon'><FontAwesomeIcon icon={faFile} /></a>

   </>
  )
}

export default Links;