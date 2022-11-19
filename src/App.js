import './App.css';
import Home from "./pages/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/signin" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
