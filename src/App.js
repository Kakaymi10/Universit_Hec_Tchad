import React from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <nav className="header">
        <p className="vanlife"><Link to='/'>#VANLIFE</Link></p>
        <div className="link">
          <p className="links"><Link to='/About' >About</Link></p>
          <p className="links"><Link to='/Van' >Van</Link></p>
        </div> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Van" element={<Home />}></Route>
      </Routes>
      <footer>
        <p>@2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
