import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="d-flex">
                <div className="navbar-brand">GoogleBooks</div>
                <a className="nav-link" href="/">Search</a>
                <a className="nav-link" href="/Saved">Saved</a>
            </div>
        </nav>
    </>
)

export default Navbar;