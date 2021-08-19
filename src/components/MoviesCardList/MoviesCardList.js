import { useState } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({movies}) {
const [moviesList, setMoviesList] = useState([])

  const displayCardRender = () => {

  }


  return (
        <div className='card-list'>
            <div className='card-list__grid-container'>
                {moviesList.map((movie) => {
                    return (
                        <MoviesCard
                            movie={movie}
                            key={movie._id}
                        />
                    )
                })}

            </div>
            <button
              type='button'
              aria-label='Обновить фильмы'
              className='card-list__btn'>Еще</button>
        </div>
    )
}

export default MoviesCardList;