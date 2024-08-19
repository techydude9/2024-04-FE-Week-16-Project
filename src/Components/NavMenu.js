import React, { useState } from 'react';
import '../App.css';
import './NavMenu.css';
import { NavLink } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './pages/Home.js';
import Products from './pages/Products.js'
import About from './pages/About.js'
import ContactUs from './pages/ContactUs.js'

function NavMenu () {

    const [menuOpen, setMenuOpen] = useState(false)

return(
    <Router>
      {/* This is your Nav element, that users can see. */}
      <div>
        <nav>
            <Link to="/" className="title">RSG LLC
            </Link>
            <div className="menu"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contactus">Contact Us</NavLink>
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