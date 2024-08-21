import React from 'react'
import Navbar from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helpcenter from './components/Helpcenter';
import About from './components/About';
import Appreciation from './components/Appreciation';
import Donate from './components/Donate';
import Animalprofile from './components/Animalprofile';
import Home from './components/Home';
const App = () => {
  return (
    <div>
     <Navbar />
     <BrowserRouter>
     <Routes>
     <Route path="/" element={   <Home />} />

      <Route path="/About" element={   <About />} />
      <Route path="/Appreciation" element={   <Appreciation />} />
      <Route path="/Animalprofile" element={  <Animalprofile />} />
      <Route path="/Donate" element={<Donate />} />
      <Route path="/Helpcenter" element={ <Helpcenter />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App