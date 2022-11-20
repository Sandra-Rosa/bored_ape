import './App.css';
import { useState } from 'react';
import Home from "./pages/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

function App() {
  const getData = async(url)=>{
    const newData = await fetch(url, {
      method:'GET',
      headers:{
        'content-type':'application/json',
        'Accept':'application/json',
      }
    })
    .then(res =>res.json());
    console.log(newData)
  }
  getData('./api');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
