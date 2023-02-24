import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/LOGO.png";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar__Contrainer">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__link">
                <Link className="navbar__visited navbar__link-Home" to="/">Accueil</Link>
                <Link className="navbar__visited navbar__link-propos" to="/About">A propos</Link>
            </div>
        </nav>
    )
}

export default Navbar;