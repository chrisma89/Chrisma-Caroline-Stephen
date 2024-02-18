import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import HomeCard from './Pages/HomeCard';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './projects.json';
import ProjectsGallery from './Pages/ProjectGallery';
// import projectsData from "./projects.json"


function App() {
  return (
 
  <div>
  <HomeCard/>
  <ProjectsGallery  />
  </div>
  ) 
}

export default App;