import React from 'react';
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import Banniere from '../components/Banniere';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>

            <div className='flex-logo-navigation'>
                <Logo />
                <Navigation />
            </div>

            <Banniere />

            <div className='flex-card-background'>
                <div className='card-background'>
                <Cards/>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
};

export default Home;