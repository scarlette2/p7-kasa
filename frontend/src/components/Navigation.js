import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='flex-navigation'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='li-navigation'>Acceuil</li>
                </NavLink>

                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='li-navigation'>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;