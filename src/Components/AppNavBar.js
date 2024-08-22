import React, { useState } from 'react';
import '../App.css';
import './NavMenu.css';
import { NavLink, Link } from 'react-router-dom';

function AppNavBar() {

    const [menuOpen, setMenuOpen] = useState(false)  //Used to toggle menu hamburger/main on width

    return (
        <>
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
        </>
    )}

export default AppNavBar;