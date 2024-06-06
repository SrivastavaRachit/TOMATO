import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <img onClick={() => navigate('/add')} className='logo' src={assets.logo} alt="" />
            <div className='navbar-profile'>
                <img src={assets.profile_image} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li><p>Sign In</p></li>
                    <hr />
                    <li><p>Log Out</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar