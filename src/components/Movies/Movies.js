import {useState, useEffect, useContext, useMemo} from "react";
import {useLocation} from 'react-router-dom'
import { CurrentUserContext } from "../../context/CurrentUserContext";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { filterMovies } from "../../utils/const";
import {mainApi} from "../../utils/MainApi";

function Movies ({ isLoginIn }){
  // ничего не найдено
  const [nothingFound, setNothingFound] = useState(false);
  // фильмы найденые по запросу
  const [searchMovies, setSearchMovies] = useState([])
  // отоброжаемые фильмы
  const [displayMovies, setDisplayMovies] = useState([])
  //прелоудер
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  // короткометраджки
  const [isShortMovies, setIsShortMovies] = useState(false);
  // ошибка поиска
  const [isError, setIsError] = useState(false);
  // сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([])
  // кол-во фильмов в блоке
  const [countMovies, setCountMovies] = useState({ total: 12, more: 3 })
  // кнопка еще
  const [isMoreBtn, setIsMoreBtn] = useState(false)

  const currentUser = useContext(CurrentUserContext);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/saved-movies') {
      setIsMoviesLoading(true)
    }
    mainApi.getSavedMovies()
      .then(res => {
        if(res) {
          setSavedMovies(res);
        }
      })
      .catch(err => console.lof(err))
      .finally(() => {
        setIsMoviesLoading(false)
        setIsMoreBtn(false)
      })
  })
  // чекбокс короткометражек
  function filterShortMovies (movies) {
    setIsShortMovies(!isShortMovies)
    if(!isShortMovies) {
      return movies.filter(movie => movie.duration <= 40)
    }
    else {
      return movies.filter(movie => movie.duration > 40)
    }
  }
  const MoviesToRender = useMemo(
    () => filterShortMovies(searchMovies),
    [isShortMovies, searchMovies]
  );

  const savedMoviesToRender = useMemo(
    () => filterShortMovies(savedMovies),
    [isShortMovies, savedMovies]
  );
  const displayedMoviesToRender = useMemo(
    () => filterShortMovies(displayMovies),
    [isShortMovies, displayMovies]
  );

  //поиск фильма
  function searchMoviesByKey (movies, searchKey) {
    if(!searchKey) {
      return
    }
    const searchMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchKey.toLowerCase()));
    if(searchMovies.length === 0) {
      setIsError(true)
    } else {
      setIsError(false)
    }
    setSearchMovies(searchMovies);
  }
  // клик по кнопке поиска
  function handleSearchBtn({ searchKey }) {
    if(location.pathname === '/movies') {
     if(!localStorage.getItem('movies')) {
       setIsMoviesLoading(true)
       moviesApi.getMovies()
         .then(movies => {
           localStorage.setItem('movies', JSON.stringify(movies))
           searchMoviesByKey(movies, searchKey)
         })
         .catch(err => console.log(`Ошибка ${err}`))
         .finally(() => {
           setIsMoviesLoading(false);
         })
     }
     searchKey(localStorage.getItem('movies') ? JSON.parse(localStorage.movies) : [], searchKey)
    }
    else {
      setSavedMovies(savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(searchKey.toLowerCase())));
      setIsMoviesLoading(false)
    }
  }
  //  кол-во фильмов в блоке
  function countMoviesDisplay () {
    const screenWidth = window.screen.width;
    if (screenWidth <= 425) {
      setCountMovies({ total: 5, more: 2 })
    } else if (screenWidth <= 768) {
      setCountMovies({ total: 8, more: 2 })
    } else {
      setCountMovies({ total: 12, more: 3 })
    }
  }

  // добавление фильма в сохр
  function saveMovie(movie) {
    mainApi.likeAndSaveMovie(movie)
      .then(res => {
        setSavedMovies([res, ...savedMovies])
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }
  //удаление фильмы из сохр
  function removeSaveMovie(movieId) {
    mainApi.removeSaveMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }

  return (
        <section className='movies'>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm
               onSearchMovies={handleSearchBtn}
               isShortMovies={isShortMovies}
               setIsShortMovies={setIsShortMovies}
            />
            {isError ? <p className='search-form-error'>
              Во время запроса произошла ошибка. Пропробуйте еще раз.
            </p> : <MoviesCardList
              nothingFound={nothingFound}
              movies={MoviesToRender}
              savedMovies={savedMoviesToRender}
              displayedMovies={displayedMoviesToRender}
              setDispayedMovies={setDisplayMovies}
              isMoreBtn={isMoreBtn}
              setIsMoreBtn={setIsMoreBtn}
              saveMovie={saveMovie}
              removeSaveMovie={removeSaveMovie}
              isMoviesLoading={isMoviesLoading}
              countMovies={countMovies}
              setCountMovies={setCountMovies}
              />
            }

            <Footer />
        </section>
    )
}

export default Movies;