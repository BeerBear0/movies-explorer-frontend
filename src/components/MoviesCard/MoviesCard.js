import React from 'react';
import './MoviesCard.css';
import {useLocation} from 'react-router-dom';

function MoviesCard ({ movie }) {

    const location = useLocation();

    return (
        <div className='card'>
            <img
                src={movie.image}
                alt={movie.nameRu}
                className='card__image'/>
            <div className='card__container'>
                <h3 className='card__title'>{movie.nameRu}</h3>
                {location.pathname === '/movies' ?  <div className='card__like card__like_active'/> : <div className=' card__like card__delete' />}
            </div>
            <p className='card__time'>{movie.duration}</p>
        </div>
    )
}

export default MoviesCard;