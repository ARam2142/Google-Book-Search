import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <span className="nav justify-content-start"><p className="h1 text-secondary"> Google Books</p></span>
            <ul className="d-flex nav justify-content-end h4">
                <li className="nav-item">
                    <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Search 
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;