import {useState, useEffect, useContext} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {moviesApi} from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Movies (props){
const { savedMovies, onSaveMovie, onDeleteSaveMovie } = props;

  const [displayMovies, setDisplayMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false)


  const currentUser = useContext(CurrentUserContext);

  function filterMovies(movies, userQuery) {
    const moviesByUserQuery = movies.filter((movie) => {
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const userMovie = userQuery.toLowerCase().trim();
      return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
    });
    return moviesByUserQuery;
  }

  function handleSetFilteredMovies(movie, userQuery, isShortMovies) {
    let moviesList = filterMovies (movie, userQuery, isShortMovies);
    moviesList.length === 0 ? setNotFound(true) : setNotFound(false);
    if(isShortMovies) {
        moviesList = moviesList.filter(movie => movie.duration <= 40)
    }
    setDisplayMovies(moviesList);
    localStorage.setItem(`movies + ${currentUser}`, JSON.stringify(moviesList))
  }
  function checkShortMovie () {
    setIsShortMovies(!isShortMovies);
    if(!isShortMovies) {
      setDisplayMovies(displayMovies.filter(movie => movie.duration <= 40));
    }
    else {
      setDisplayMovies(JSON.parse(localStorage.getItem(`movies + ${currentUser}`)))
    }
  }

  useEffect(() => {
    if(localStorage.getItem(`movies + ${currentUser}`)) {
      const movies = JSON.parse(localStorage.getItem(`movies + ${currentUser}`));
      movies.length === 0 ? setNotFound(true) : setNotFound(false)
      setDisplayMovies(movies);
    }
  }, [currentUser]);

  function handleSearchMovies(inputValue) {
    setIsMoviesLoading(true);
    moviesApi.getMovies()
      .then((movie) => {
        handleSetFilteredMovies(movie, inputValue, isShortMovies);
      })
      .catch(err => console.log(`Ошибка ${err.status}`))
      .finally(() => setIsMoviesLoading(false))
  }

  return (
        <>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm
              onSearch={handleSearchMovies}
              isShortMovies={isShortMovies}
              onCheckBoxClick={checkShortMovie}
            />
            <MoviesCardList
              notFound={notFound}
              movies={displayMovies}
              savedMovies={savedMovies}
              moviesLoading={isMoviesLoading}
              onSaveMovie={onSaveMovie}
              onDeleteSaveMovie={onDeleteSaveMovie}
            />
            <Footer />
        </>
    )
}

export default Movies;