import { useState, useEffect, useContext } from "react";
import {useLocation} from 'react-router-dom'
import { CurrentUserContext } from "../../context/CurrentUserContext";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import {mainApi} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import { filterMovies } from '../../utils/const'

function Movies ({ onSaveMovie, onUnSaveMovie, savedMovies }){
  const [nothingFound, setNothingFound] = useState(false);
  const [initialMovies, setInitialMovies] = useState([])
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isError, setIsError] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function handleSetFilteredMovies(movies, userQuery, isShortMovies) {
    let moviesList = filterMovies(movies, userQuery, isShortMovies);
    moviesList.length === 0 ? setNothingFound(true) : setNothingFound(false);
    console.log(isShortMovies)
    if (isShortMovies) {
      moviesList = moviesList.filter(movie => movie.duration <= 40);
    }
    setInitialMovies(moviesList);
    localStorage.setItem(`movies + ${currentUser.email}`, JSON.stringify(moviesList));
  }

  function handleSearchFilms(inputValue) {
    setIsMoviesLoading(true);
    moviesApi.getMovies()
      .then((movie) => {
        handleSetFilteredMovies(movie, inputValue, isShortMovies);
      })
      .catch((err) => {
        setIsError(true);
        console.log('Ошибка ' + err)
      })
      .finally(() => setIsMoviesLoading(false));
  }

  function handleShortMoviesChek() {
    setIsShortMovies(!isShortMovies);
    if(!isShortMovies) {
      setInitialMovies(initialMovies.filter(movie => movie.duration <= 40));
    } else {
      setInitialMovies(JSON.parse(localStorage.getItem(`movies + ${currentUser.email}`)));
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`movies + ${currentUser.email}`)) {
      const movies = JSON.parse(localStorage.getItem(`movies + ${currentUser.email}`));
      movies.length === 0 ? setNothingFound(true) : setNothingFound(false)
      setInitialMovies(movies);
    }
  }, [currentUser.email]);

  return (
        <section className='movies'>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm
              onSearchMovies={handleSearchFilms}
              isShortMovies={isShortMovies}
              onChekBoxClick={handleShortMoviesChek}
            />
          {isError ? <p>Во время запроса произошла ошибка.
              Попробуйте позже</p> : <MoviesCardList
              nothingFound={nothingFound}
              movies={initialMovies}
              savedMovies={savedMovies}
              moviesLoading={isMoviesLoading}
              onSaveMovie={onSaveMovie}
              onUnSaveMovie={onUnSaveMovie}
            />
          }


            <Footer />
        </section>
    )
}

export default Movies;