import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';
import Dasturlash from './Components/Dasturlash/Dasturlash';
import Foundation from './Components/Dasturlash/Foundation';
import AboutUs from './Components/AboutUs';


import './App.css';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dasturlash' element={<Dasturlash />} />
        <Route path='/foundation' element={<Foundation />}/>
        <Route path='/aboutUs' element={<AboutUs />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
