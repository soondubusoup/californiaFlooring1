import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import NavBar from "./components/navigation/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import './utils/styles.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
