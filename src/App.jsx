import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';
import Dasturlash from './Components/Dasturlash/Dasturlash';
import Foundation from './Components/Dasturlash/Foundation';
import AboutUs from './Components/AboutUs';
import Aloqa from './Components/Aloqa';


import './App.css';
import English from './Components/Dasturlash/English';
import Math from './Components/Dasturlash/Math';
import Rustili from './Components/Dasturlash/Rustili';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dasturlash' element={<Dasturlash />} />
        <Route path='/foundation' element={<Foundation />} />
        <Route path='/english' element={<English />} />
        <Route path='/rustili' element={<Rustili />} />
        <Route path='/matematika' element={<Math />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/aloqa' element={<Aloqa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
