import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";
import {moviesApi} from "../../utils/MoviesApi";

function Movies (props){

}
  const [displayMovies, setDisplayMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  function handleSetFilteredMovies(movie, userQuery, isShortMovies) {
    let listMovies = filterMovies(movie, userQuery, isShortMovies);
    listMovies.length === 0 ? setNotFound(true) : setNotFound(false);

  function handleSearchMovie (inputValue) {
    setIsMoviesLoading(true);
    moviesApi.getMovies()
      .then((movie) => {

      })

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
            // onSearch={}
            />
            <MoviesCardList
              movies={displayMovies}

            />
            <Footer />
        </>
    )
}

export default Movies;