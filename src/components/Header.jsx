import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
        <NavLink to="/">
        <img className='header_img' src='https://pbs.twimg.com/profile_images/1625842138943524864/muFoN7SB_400x400.jpg' alt=''/>
        </NavLink>
        <p className='header_title'>Candidature pour la formation Junior Developer</p>
        </div>
    );
};

export default Header;