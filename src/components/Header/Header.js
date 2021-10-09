import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'

import './Header.css'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    const { hendelLogout, user } = useAuth()
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
                <NavLink to='/shipping' activeStyle={activeStyle}>
                    Shippping
                </NavLink>
                <span className='name'>{user.displayName} </span>
                {user.email ? <button className='btn-logout' onClick={hendelLogout}>Log-out</button> :
                    <NavLink to='/login' activeStyle={activeStyle}>
                        Log-in
                    </NavLink>}
            </nav>
        </div>
    );
};

export default Header;