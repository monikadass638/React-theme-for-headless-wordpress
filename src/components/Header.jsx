import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">

                    {/* Logo */}
                    <Link className="navbar-brand fw-bold" to="/">
                        Punit<span className="text-warning">Blog</span>
                    </Link>

                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">Categories</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>


        </section>
    )
}

export default Header