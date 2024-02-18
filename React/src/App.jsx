import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import About from './pages/About';
// import Search from './pages/Search';
import NavBar from './components/navbar';
import HomeCard from './Pages/HomeCard';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './projects.json';
import ProjectsGallery from './Pages/ProjectGallery';
// import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
  <NavBar/>
  <HomeCard/>
  <ProjectsGallery />
  </>
  );
}

export default App;