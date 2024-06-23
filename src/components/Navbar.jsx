import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/1.png';
import '../App.css'; // Import global styles

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="navbar-logo">
                        {/* Logo with NavLink */}
                        <NavLink to="/" className="flex items-center py-4 px-2">
                            <img src={logo} alt="Logo" className="h-12" />
                            <span className="font-semibold text-gray-500 text-lg ml-2">Atlas of Code</span>
                        </NavLink>
                    </div>
                    {/* Navbar Links */}
                    <div className="navbar-menu">
                        <NavLink exact to="/" className="navbar-link" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="navbar-link" activeClassName="active">
                            About
                        </NavLink>
                        <NavLink to="/services" className="navbar-link" activeClassName="active">
                            Services
                        </NavLink>
                        <NavLink to="/internships" className="navbar-link" activeClassName="active">
                            Internships
                        </NavLink>
                    </div>
                    <div className="navbar-menu">
                        <NavLink to="/about-us" className="navbar-link" activeClassName="active">
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className="navbar-link" activeClassName="active">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
