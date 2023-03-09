import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';
import Dasturlash from './Components/Dasturlash/Dasturlash';
import Foundation from './Components/Dasturlash/Foundation';
import AboutUs from './Components/AboutUs';
import Aloqa from './Components/Aloqa';
import English from './Components/English';
import Math from './Components/Math';
import Rustili from './Components/Rustili';
import Error from './Components/Error';


import './App.css';

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
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
