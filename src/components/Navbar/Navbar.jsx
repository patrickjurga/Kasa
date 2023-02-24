import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/LOGO.png";

function Navbar() {
    return (
        <nav className="navbar__Contrainer">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__link">
                <div>Acceuil</div>
                <div className="navbar__link-propos">A propos</div>
            </div>
        </nav>
    )
}

export default Navbar;