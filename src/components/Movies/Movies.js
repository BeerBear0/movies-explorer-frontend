import {useState, useEffect, useContext, useMemo} from "react";
import {useLocation} from 'react-router-dom'
import { CurrentUserContext } from "../../context/CurrentUserContext";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import {mainApi} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

const emptyArray = [];

function Movies (props){
  const [moviesCard, setMoviesCard] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [amount, setAmount] = useState(props.widthMode);
  const [btnState, setBtnState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyFilterTextSubmitted, setEmptyFilterTextSubmitted] = useState(false);
  const [internalErrorHappened, setInternalErrorHappened] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleChangeCheckBox() {
    setChecked(!checked);
  }

  const filteredMovies = filterMovies(moviesCard, checked, filterText, emptyArray);
  const moviesNotFound = filteredMovies.length === 0 && filterText.length > 0;

  function setFilterTextWrapper(value) {
    localStorage.setItem('moviesFilterText', value)
    setFilterText(value)
  }

  function foo() {
    if(localStorage.getItem('moviesCards')) {
      return Promise.resolve(JSON.parse(localStorage.getItem('moviesCard')))
    }
    else {
      setIsLoading(true)
      return moviesApi.getMovies()
        .then(res => {
          localStorage.setItem('moviesCards', JSON.stringify(res))
          setIsLoading(false)
          return res
        })
        .catch(err => {
          console.log(err)
          setInternalErrorHappened(true)
          setIsLoading(false)
        })
    }
  }
  function loadMovies() {
    const allMoviesPromise = foo();
    allMoviesPromise.then(allMovies => {
      mainApi.getSavedMovies(props.token)
        .then(savedMovies => {
          setMoviesCard(allMovies.map(movie => {
            const foundSaveMovie = savedMovies.find((savedMovies) => savedMovies.movieId === movie.movieId)
              if(foundSaveMovie !== null) {
                return { ...movie, saved: true, savedId: foundSaveMovie._id}
              }
              else {
                return { ...movie, saved: false }
              }
          }))
        })
        .catch(err => {
          setInternalErrorHappened(true)
          console.log(err)
        })
    })
  }

  useEffect(() =>{
    loadMovies()
  }, [])

  useEffect(() => {
    if(filteredMovies.length <= amount) {
      setBtnState(false)
    }
    else {
      setBtnState(true)
    }
  }, [filteredMovies, amount])

  function handleBtnClick() {
    if(props.widthMode === 'desktop') {
      setAmount(amount + 3)
    }
    else if (props.widthMode === 'tablet') {
      setAmount(amount + 2)
    }
    else if (props.widthMode === 'mobile') {
      setAmount(amount + 2)
    }
  }
  function calcStartAmount(widthMode) {
    if (widthMode === 'desktop') {
      return 12;
    } else if (widthMode === 'tablet') {
      return 8;
    }
    return 5;
  }

  function handleSubmit(value) {
    setFilterTextWrapper(value)
    setAmount(calcStartAmount(props.widthMode))
  }

  function handleLikeMovieCard(movieId, saveId) {
    const newMovies = moviesCard.map(movie => {
      if(movie.movieId === movieId) {
        movie.saved = !movie.saved;
        movie.savedId = saveId;
        return movie
      }
      else {
        return movie
      }
    })
    setMoviesCard(newMovies)
  }

  function handleSavedMoviesBtn(movieCard) {
    const cardObj = {
      country: movieCard.country ?? 'unknown',
      director: movieCard.director,
      duration: movieCard.duration,
      year: movieCard.year,
      description: movieCard.description,
      image: movieCard.image,
      trailer: movieCard.trailer,
      thumbnail: movieCard.thumbnail,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN || 'unknown',
      movieId: movieCard.movieId,
      owner: movieCard.owner,
    }
    if(!movieCard.saved) {
      mainApi.saveMovie(cardObj, props.token)
        .then(newLikeMovieCard => {
          handleLikeMovieCard(cardObj.movieId, newLikeMovieCard._id)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else {
      mainApi.deleteMovie(movieCard.savedId, props.token)
        .then(() => {
          handleLikeMovieCard(cardObj.movieId)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  const errorText = createErrorText(emptyFilterTextSubmitted, moviesNotFound, internalErrorHappened)

  return (
        <section className='movies'>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm
              filterMoviesCards={moviesCard}
              checked={checked}
              handleChangeCheckBox={handleChangeCheckBox}
              setEmptyFilterTextSubmitted={setEmptyFilterTextSubmitted}
              initialValue={filterText}
              restoreFromLocalStorage={true}
            />
            {isLoading && <Preloader />}
            {errorText && <p>{errorText}</p>}
            {!errorText && <MoviesCardList
              moviesCards={filteredMovies}
              amount={amount}
              itIsSavedMovies={false}
              handleMovieCardBtn={handleSavedMoviesBtn}
              btnState={btnState}
              handleBtnClick={handleBtnClick}
            />
          }

            <Footer />
        </section>
    )
}

function createErrorText(emptyFilterTextSubmitted, moviesNotFound, internalErrorHappened) {
  if (emptyFilterTextSubmitted) {
    return 'Нужно ввести ключевое слово'
  }

  if (moviesNotFound) {
    return "Ничего не найдено"
  }

  if (internalErrorHappened) {
    return "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
  }
}

function filterMovies(allMovies, onlyShorts, filterText, defaultValue) {
  if (allMovies == null || filterText.length === 0) {
    return defaultValue
  }

  return allMovies.filter(movie => {
    if (onlyShorts) {
      return movie.nameRU.toLowerCase().includes(filterText.toLowerCase()) && movie.duration <= 40
    } else {
      return movie.nameRU.toLowerCase().includes(filterText.toLowerCase())
    }
  })
}

export default Movies;