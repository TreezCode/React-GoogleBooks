import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="d-flex">
            <div className="navbar-brand">
                <span className="blue-font">G</span>
                <span className="red-font">o</span>
                <span className="yellow-font">o</span>
                <span className="blue-font">g</span>
                <span className="green-font">l</span>
                <span className="red-font">e</span>
                <span>Books</span>
            </div>
            <NavLink className="nav-link" to="/" activeClassName="active">Search</NavLink>
            <NavLink className="nav-link" to="/Saved" activeClassName="active">Saved</NavLink>
        </div>
    </nav>
)

export default Navbar;