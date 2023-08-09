import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/becode">
                    <li>Motivation</li>
                </NavLink>
                <NavLink to="/about">
                    <li>Présentation</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Me Contacter</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;