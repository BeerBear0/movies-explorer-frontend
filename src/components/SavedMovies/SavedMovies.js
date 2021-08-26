import { useState, useEffect } from 'react'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies} from "../../utils/const";
import Footer from "../Footer/Footer";

  function SavedMovies ({ onUnSaveMovie }){
    const [nothingFound, setNothingFound] = useState('');
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isShortMovies, setIsShortMovies] = useState('');



    function handleSetFilteredMovies(savedMovies, userQuery, isShortMovies) {
      let moviesList = filterMovies(savedMovies, userQuery, isShortMovies);
      moviesList.length === 0 ? setNothingFound(true) : setNothingFound(false);
      if(isShortMovies) {
       return  moviesList.filter(movie => movie.duration <= 40)
      }
      setSavedMoviesList(moviesList)
    }

    function handleSearchFilms(inputValue) {
      setFilteredMovies(savedMovies);
      handleSetFilteredMovies(filteredMovies, inputValue, isShortMovies);
    }
    function handleShortFilmsCheck(inputValue) {
        setIsShortMovies(!isShortMovies);
        if(!isShortMovies) {
          setSavedMoviesList(savedMoviesList.filter(movie => movie.duration <= 40))
        } else {
          setSavedMoviesList(savedMovies)
        }
    }
    useEffect(() => {
      if(savedMovies.length !== 0) {
        setNothingFound(false);
        setSavedMoviesList(savedMovies);
      }
      else {
        setNothingFound(true);
      }
    }, [savedMovies])
    return (
        <>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm
              onSearchMovies={handleSearchFilms}
              onCheckBoxClick={handleShortFilmsCheck}
            />
            <MoviesCardList
              nothingFound={nothingFound}
              isSavedMoviePage={true}
              movies={savedMoviesList}
              onUsSavemovie={onUnSaveMovie}
              savedMovies={savedMovies}
            />
            <Footer />
        </>
    )
}

export default SavedMovies;