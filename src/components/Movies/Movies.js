import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {useState} from "react";

function Movies(props) {
    return (
        <>
       <Header linkNum1='Фильмы'
               linkNum2='Сохраненные фильмы'
               headerHref1='/movies'
               headerHref2='/saved-movies'/>
       <SearchForm
           onSearchMovies={props.onSearchMovies}
           onShortMoviesCheck={props.onShortMoviesCheck}
           saved={false}
           isChecked={props.isShortMoviesChecked}
       />
       <MoviesCardList
           movies={props.movies}
           isSearching={props.isSearching}
           notFound={props.notFound}
           isErrorActive={props.isErrorActive}
           onMovieSave={props.onMovieSave}
           onDeleteMovie={props.onDeleteMovie}
           saved={false}
           savedMovies={props.savedMovies}
           isMobile={props.isMobile}
           isTablet={props.isTablet}
       />
            <Footer />
        </>
    )
}

export default Movies;
