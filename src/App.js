import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Newsletter" element={<Newsletter/>} />
      </Routes>
    </Router>
  )
}

export default App;