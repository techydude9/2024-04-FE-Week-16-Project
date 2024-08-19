import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import NavMenu from './Components/NavMenu.js';


function App() {
  return (
    <div className="App">
      <h1>Ruzga Solutions Group LLC 🌎</h1>
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>
  </div>
  );
}

export default App
