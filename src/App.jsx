import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './Navbar';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
