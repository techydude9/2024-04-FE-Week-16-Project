import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './Components/Home.js'
import About from './Components/About.js'
import ContactUs from './Components/ContactUs.js'

export default function App() {
  return (
    <div>
      <h1>Hello World 🌎</h1>
  
      <Router>
      {/* This is your Nav element, that users can see. */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/contactus">
            <ContactUs />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
  );
}
