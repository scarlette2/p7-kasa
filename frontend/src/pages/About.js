import React from 'react';
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
//import Banniere from '../components/Banniere';
import Bannierecollapse from '../components/Bannierecollapse';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';




const About = () => {
    return (
        <div>
            <div className='flex-logo-navigation'>
                <Logo />
                <Navigation />
            </div>
            
            <Bannierecollapse />
            <div className='collapse'>
                <div className='collapse-contner'>
                    <Collapse title='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' />
                </div>

                <div className='collapse-contner'>
                    <Collapse title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
                </div>

                <div className='collapse-contner'>
                    <Collapse title='Service' content='Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N´hésitez pas à nous contacter si vous avez la moindre question.' />
                </div>

                <div className='collapse-contner'>
                    <Collapse title='Responsabilité' content='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l´hôte qu´au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;