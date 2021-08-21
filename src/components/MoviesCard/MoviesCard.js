import { useLocation } from 'react-router-dom';
import {IMAGE_URL} from "../../utils/const";

function MoviesCard ({ movie, isSavedMoviePage, onSaveMovie, onUnSaveMovie, isSave }) {
    const location = useLocation();

    function handleSaveMovie() {
      onSaveMovie(movie);
    }
    function handleUnSave(isSavedMoviePage) {
      onUnSaveMovie(movie._id || movie.id, isSavedMoviePage);
    }
    const cardLikeButtonClassName = (
      `card__like ${ isSave ? 'card__like_active' : ''}`
    )
    const cardSaveButtonClassName = (
      `card__like ${ isSave ? 'card__delete' : ''}`
    )

    return (
        <div className='card'>
          <a
          href={isSavedMoviePage ? movie.trailer : movie.trailerLink}
          target='_blank'
          rel='noreferrer'>
          <img
                src={ isSavedMoviePage ? movie.image : `${IMAGE_URL}${movie.image.url}`}
                alt={movie.nameRU}
                className='card__image'/>
          </a>
            <div className='card__container'>
                <h3 className='card__title'>{movie.nameRU}</h3>
                {location.pathname === '/movies' ?  <div
                  className='card__like'
                  type='button'
                /> : <div className=' card__like card__delete' />}
            </div>
            <p className='card__time'>{movie.duration}</p>
        </div>
    )
}

export default MoviesCard;