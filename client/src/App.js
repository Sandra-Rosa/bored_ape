import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CollapsibleExample from './components/CollapsibleExample'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import Dashboard from './components/Dashboard'
import Careerguide from './components/Careerguide'
import Careerinfo from './components/Careerinfo'
import Collegeinfo from './components/Collegeinfo'

function App() {
  return (
    <div className="App">
      {/* <CollapsibleExample /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/careerguide" element={<Careerguide />} />
          <Route path="/careerinfo" element={<Careerinfo />} />
          <Route path="/collegeinfo" element={<Collegeinfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
