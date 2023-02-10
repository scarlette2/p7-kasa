import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';


const Error = () => {
    return (
        <div>
            <div className='flex-logo-navigation'>
                <Logo />
                <Navigation />
            </div>
            <p className='error-nb'>404</p>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            
            <ul  className='error-list'>
                <NavLink to="/">
                    <li className='error-li'>Retourner sur la page d’accueil</li>
                </NavLink>
            </ul>
            <Footer/>
        </div>
    );
};

export default Error;