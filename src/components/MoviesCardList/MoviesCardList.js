import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {movies} from '../../utils/const'
function MoviesCardList () {
    return (
        <div className='card-list'>
            <div className='card-list__grid-container'>
                {movies.map((movie) => {
                    return (
                        <MoviesCard
                            movie={movie}
                            key={movie._id}
                        />
                    )
                })}

            </div>
            {/*<div className='card-list__btn-container'>*/}
                <button
                    type='button'
                    aria-label='Обновить фильмы'
                    className='card-list__btn'>Еще</button>
            {/*</div>*/}
        </div>
    )
}

export default MoviesCardList;