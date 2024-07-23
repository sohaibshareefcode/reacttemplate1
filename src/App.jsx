import React from 'react'
import "./App.css"
import Project from './Project'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';

import Contact from "./pages/Contact";
import Gallery from './pages/Gallery';
import Footer from './Footer';
import {BrowserRouter , Routes , Route}  from "react-router-dom"
import Headder from './Headder';

 
function App() {
  return (
    <BrowserRouter>
    <Headder />
    <Routes>
      <Route  path='/' element = {<Home />}/>
      <Route  path='/about' element = {<About />}/>
      <Route  path='/contact' element = {<Contact />}/>
    
      <Route  path='/gallery' element = {<Gallery />}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
