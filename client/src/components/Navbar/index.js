import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="d-flex">
            <div className="navbar-brand">GoogleBooks</div>
            <NavLink className="nav-link" exact to="/" activeClassName="active">Search</NavLink>
            <NavLink className="nav-link" exact to="/Saved" activeClassName="active">Saved</NavLink>
        </div>
    </nav>
)

export default Navbar;