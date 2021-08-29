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

function Movies (props){
  return (
        <section className='movies'>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
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
        </section>
    )
}

export default Movies;