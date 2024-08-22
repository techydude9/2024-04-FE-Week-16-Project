import React, { useState } from 'react';
import '../App.css';
import './NavMenu.css';
import AppNavBar from './AppNavBar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home.js';
import Products from './pages/Products.js'
import About from './pages/About.js'
import ContactUs from './pages/ContactUs.js'

function NavMenu () {

  return(
    <Router>
      <div>
        <AppNavBar />

        <Switch>
          <Route path="/contactus">
            <ContactUs />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default NavMenu;