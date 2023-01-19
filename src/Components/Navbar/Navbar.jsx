import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logoretinklogo.svg";

const Navbar = () => {
    return (
        <nav className="my-8 container__vn">
            <img className="logo" src={logo} alt="" />
        </nav>
    );
};

export default Navbar;
