import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/LOGO.png";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar__Contrainer">
            <div className="navbar__logo">
                <Link className="navbar__link-Home" to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar__link">
                <Link className="navbar__visited navbar__link--Home" to="/">Accueil</Link>
                <Link className="navbar__visited navbar__link--About" to="/About">A propos</Link>
            </div>
        </nav>
    )
}

export default Navbar;