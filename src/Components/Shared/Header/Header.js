import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className="header navbar navbar-dark bg-primary p-3 d-flex justify-content-around">
            <div>
                <img style={{ backgroundColor: 'LightBlue' }} className="mx-4 p-2 rounded-circle" src="https://unicornhs.org/wp-content/uploads/2018/09/logo.png" width="100px" alt="" />
                <NavLink to="home">Home</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="departments">Departments</NavLink>
                <NavLink to="about">About Us</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </div>
            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>


            </div>
        </div>
    );
};

export default Header;