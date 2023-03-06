import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';


import './App.css';
import Dasturlash from './Components/Dasturlash/Dasturlash';
import Foundation from './Components/Dasturlash/Foundation';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dasturlash' element={<Dasturlash />} />
        <Route path='/foundation' element={<Foundation />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
