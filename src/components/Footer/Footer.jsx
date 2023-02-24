import React from "react";
import "./Footer.css";
import logo from "../../assets/images/LOGO_FOOTER.png";

function Footer() {
    return (
        <div className="Footer__Contrainer">
            <img className="Footer__logo" src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;