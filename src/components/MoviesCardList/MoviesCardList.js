import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import React, { useState, useEffect } from "react";

function MoviesCardList(props) {
    const [initialCardsNumber, setInitialCardsNumber] = useState(() => {
        const windowSize = window.innerWidth;
        if(windowSize < 720) {
            return 5
        } else if(windowSize < 920) {
            return 8
        } else if(windowSize < 1279) {
            return 8 }
        else if(windowSize > 1279) {
            return 12
        }
    } );
    const [moreCardsNumber, setMoreCardsNumber] = useState(() => {
        const windowSize = window.innerWidth;
        if(windowSize < 720) {
            return 2;
        } else if(windowSize < 920) {
            return 2
        } else if(windowSize < 1279) {
            return 3
        } else if(windowSize > 1279) {
            return 3
        }
    });

    function handleScreenWidth () {
        const windowSize = window.innerWidth;
        if(windowSize < 720) {
            setInitialCardsNumber(5)
        } else if(windowSize < 920) {
            setInitialCardsNumber(8)
        } else if(windowSize < 1279) {
            setInitialCardsNumber(8)
        } else if(windowSize > 1279) {
            setInitialCardsNumber(12)
        }
    }

    const displayedMovies = props.movies?.slice(0, initialCardsNumber);

    function handleMoviesIncrease() {
        setInitialCardsNumber(prevState => {return prevState + moreCardsNumber});
    }

    useEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
    }, []);
    return (
        <section className="card-list">
            <Preloader isSearching={props.isSearching} />
            <span className={`${props.isErrorActive ? 'card-list__error' : 'no-display'}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
            <span className={`${props.notFound ? 'card-list__not-found' : 'no-display'}`}>Ничего не найдено</span>
            <span className={`${(props.saved && props.movies.length === 0) ? 'card-list__no-saved' : 'no-display'}`}>Вы пока что ничего не добавили в избранное</span>
            <span className={`${props.keyWordError ? 'card-list__error' : 'no-display'}`}>Введите ключевое слово</span>
            <ul className="card-list__list">
                {displayedMovies?.map((movie) => {
                        return (
                            <MoviesCard
                                movie={movie}
                                movies={props.movies}
                                key={props.saved ? movie.movieId : movie._id}
                                saved={props.saved}
                                onMovieSave={props.onMovieSave}
                                onDeleteMovie={props.onDeleteMovie}
                                savedMovies={props.savedMovies}/>
                        )
                    })
                }
            </ul>

            <button className={props.saved ? 'card-list__more-button card-list__more-button_invisible' :
                `card-list__more-button ${props.movies?.length === displayedMovies?.length ? 'card-list__more-button_invisible' : ''}`}
              onClick={handleMoviesIncrease} >Еще</button>
        </section>
    )
}

export default MoviesCardList;
