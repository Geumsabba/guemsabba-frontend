import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  )
}

export default App;