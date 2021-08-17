import MoviesCard from "../MoviesCard/MoviesCard";
import {movies} from '../../utils/const'
import Footer from "../Footer/Footer";

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
            <button
              type='button'
              aria-label='Обновить фильмы'
              className='card-list__btn'>Еще</button>
        </div>
    )
}

export default MoviesCardList;