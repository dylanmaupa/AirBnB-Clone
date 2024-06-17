import React from 'react';
import logo from '../assets/airbnb_logo.png'

const Navbar = () => {
    return (
        <nav className="nav">
            <img src={logo} alt="" />
        </nav>
    );
};

export default Navbar;