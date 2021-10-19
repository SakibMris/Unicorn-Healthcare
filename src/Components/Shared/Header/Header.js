import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className="header navbar navbar-dark bg-primary p-3 d-flex justify-content-around">
            <div>
                <NavLink to="home">Home</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="departments">Departments</NavLink>
                <NavLink to="about">About Us</NavLink>
            </div>
            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
        </div>
    );
};

export default Header;