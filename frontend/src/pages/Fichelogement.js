import React from 'react';
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import IdLogement from '../components/IdLogement';
import Footer from '../components/Footer';

const Fichelogement = () => {
    return (
        <div>
            <div className='flex-logo-navigation'>
                <Logo />
                <Navigation />
            </div>
                <IdLogement />
                <div>
                <Footer/>
                </div>
        </div>
    );
};

export default Fichelogement;