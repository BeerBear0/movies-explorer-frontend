import React from 'react';
import { useLocation } from 'react-router-dom'
import {IMAGE_URL} from "../../utils/const";

function MoviesCard (props) {
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const movie = {
    country : props.movie.country || 'Не указано',
    director: props.movie.director || 'Не указано',
    duration: props.movie.duration || 0,
    year: props.movie.year || 'Не указано',
    description: props.movie.description || 'Не указано',
    image: `${props.movie.image === null ? `` : `https://api.nomoreparties.co${props.movie.image?.url}`}`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || 'Не указано',
    nameEN: props.movie.nameEN || 'Не указано',
    thumbnail: `${props.movie.image === null ? `` : `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`}`,
    movieId: props.movie.id,
  }

  const editedDuration = `${Math.trunc(movie.duration/60)}ч${movie.duration % 60}м`;
  const image = `${props.movie.image === null ? `` : `https://api.nomoreparties.co${props.movie.image?.url}`}`;
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
  const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);

  const location = useLocation();

  function handleCardMouseOver() {
    setIsDeleteButtonVisible(true);
  }

  function handleCardMouseOut() {
    setIsDeleteButtonVisible(false);
  }

  function handleLikeButtonCLick() {
    props.onMovieSave(movie);
    setIsSaved(true);
  }

  function handleDisLike() {
    setIsSaved(false);
    console.log(currentMovie)
    props.onDeleteMovie(currentMovie._id);
  }

  function handleDeleteMovie() {
    props.onDeleteMovie(props.movie._id);
    setIsSaved(false);
  }

  React.useEffect(() => {
    if(currentMovie) {
      setIsSaved(true)
    }

  }, [currentMovie, location])



  return (
        <div className='card'>
          <a
          href={props.saved ? props.movie.trailer : props.movie.trailerLink}
          target='_blank'
          rel='noreferrer'>
          <img
                src={ props.saved ? props.movie.image : image}
                alt={props.movie.nameRU}
                className='card__image'/>
          </a>
            <div className='card__container'
                  onMouseEnter={handleCardMouseOver}
                  onMouseLeave={handleCardMouseOut}>
                <h3 className='card__title'>{props.movie.nameRU}</h3>
              {props.saved ?
                (<button
                  className={`card__like ${isDeleteButtonVisible ? 'movies__delete' : ''}`}
                  onClick={handleDeleteMovie}
                  type='button' />) :
                (<button
                className={`card__like ${isSaved ? 'card__like_active' : ''}`}
                onClick={isSaved ? handleDisLike : handleLikeButtonCLick}
                />)}
            </div>
            <p className='card__time'>{props.movie.duration}</p>
        </div>
    )
}

export default MoviesCard;