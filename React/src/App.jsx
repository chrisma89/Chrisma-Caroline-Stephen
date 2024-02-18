import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';






import NavBar from './components/navbar';
import HomeCard from './Pages/HomeCard';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './projects.json';
import ProjectsGallery from './Pages/ProjectGallery';
import projectsData from "./projects.json"
import Contact from "./Pages/Contact"


function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/projects" element={<ProjectsGallery />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );

 
  // <div>
  //   <NavBar />
  // <HomeCard/>
  // <ProjectsGallery  />
  // </div>
  
}

export default App;