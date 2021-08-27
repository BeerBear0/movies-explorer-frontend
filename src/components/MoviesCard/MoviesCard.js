import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom'
import {IMAGE_URL} from "../../utils/const";

function MoviesCard ({
    movie,
    isSavedMoviePage,
    onSaveMovie,
    onUnSaveMovie,
    isSave
  }) {
const [likeStatus, setLikeStatus] = useState(false)
  // function errorLoadImg(evt) {
  //   evt.target.src=errorImg;
  // };

  function handleSaveMovie() {
    onSaveMovie(movie);
    setLikeStatus(true)
  }

  function handleUnSave(isSavedMoviePage) {
    onUnSaveMovie(movie._id || movie.id, isSavedMoviePage);
    setLikeStatus(false)
  }

  const cardLikeButtonClassName = (
    `card__like ${ isSave   ? 'card__like_active' : ''}`
  );

  const cardSaveButtonClassName = (
    `card__like ${isSavedMoviePage ? 'card__delete': ''}`
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

              <button
                className={isSavedMoviePage ? cardSaveButtonClassName : cardLikeButtonClassName}
                onClick={isSavedMoviePage || isSave || likeStatus ? () => handleUnSave(isSavedMoviePage) : handleSaveMovie}
                type='button' />
            </div>
            <p className='card__time'>{movie.duration}</p>
        </div>
    )
}

export default MoviesCard;