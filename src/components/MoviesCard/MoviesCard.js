import './MoviesCard.css';
import React from "react";
import {useLocation} from 'react-router-dom';
import movieImage from '../../images/movieImage.jpeg';

function MoviesCard(props) {
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
    const [isSaved, setIsSaved] = React.useState(false);


    const movie = {
        country : props.movie.country || 'Не указано',
        director: props.movie.director || 'Не указано',
        duration: props.movie.duration || 0,
        year: props.movie.year || 'Не указано',
        description: props.movie.description || 'Не указано',
        image: `${props.movie.image === null ? `${movieImage}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`,
        trailer: props.movie?.trailerLink,
        nameRU: props.movie.nameRU || 'Не указано',
        nameEN: props.movie.nameEN || 'Не указано',
        thumbnail: `${props.movie.image === null ? `${movieImage}` : `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`}`,
        movieId: props.movie.id,
    }

    const editedDuration = `${Math.trunc(movie.duration/60)}ч${movie.duration % 60}м`;
    const image = `${props.movie.image === null ? `${movieImage}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`;
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);

    const location = useLocation();

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    function handleLikeBtn() {
        if(isSaved) {
            props.onDeleteMovie(currentMovie._id);
            setIsSaved(false)
        }
        else{
            props.onMovieSave(movie);
            setIsSaved(true)
        }
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
        <li className="card">
            <a target='_blank' href={props.saved ? props.movie.trailer : props.movie.trailerLink} className="movies__trailer-link">
                <img alt={props.movie.nameRU} src={props.saved ? props.movie.image : image} className="card__image"/>
            </a>

            <div onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut} className="card__container">
                <p className="card__title">{props.movie.nameRU}</p>

                {props.saved ?
                    <button
                        type='button'
                        className={`card__like-display-none ${isDeleteButtonVisible ? 'card__delete' : ''}`}
                        onClick={handleDeleteMovie} /> :
                    <button
                        type='button'
                        className={`card__like ${isSaved ? 'card__like_active' : ''}`}
                        onClick={handleLikeBtn} />}
            </div>
            <p className="card__time">{editedDuration}</p>
        </li>
        )

}

export default MoviesCard;
