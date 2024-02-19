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
import Links from './Pages/LInks';
import Details from './Pages/Details';



function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/projects" element={<ProjectsGallery />} />
          <Route path="/projectdetails" element={<Details  />} />
          <Route path="/links" element={<Links />} />
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