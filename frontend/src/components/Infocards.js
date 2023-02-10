import React from 'react';
import { Link } from 'react-router-dom';

const Infocards = ({ logements }) => {
    let url = `/Fichelogement?id=${logements.id}`

    return (
        <Link to={url}>
            <div className='info-cards'>
                <img className='cards-cover' src={logements.cover} alt="" />
                <div className='flex-h2-cards'>
                    <h2 className='h2' id='h2-cards'>{logements.title}</h2>
                </div>
            </div>
        </Link>
    );
};
export default Infocards;