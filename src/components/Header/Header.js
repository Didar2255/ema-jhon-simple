import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

import './Header.css'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <NavLink to='/shop' activeStyle={activeStyle}>
                    Shop
                </NavLink>
                <NavLink to='/orderReview' activeStyle={activeStyle}>
                    Order Review
                </NavLink>
                <NavLink to='/inventory' activeStyle={activeStyle}>
                    Manage Inventory
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;