import './App.css';
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
