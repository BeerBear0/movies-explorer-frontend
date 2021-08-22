import { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList (props) {
 const {
   movies,
   nothingFound,
   moviesLoading,
   isSavedMoviePage,
   onSaveMovie,
   onUnSaveMovie,
   savedMovies
 } = props;

  const [cardsShowDetails, setCardsShowDetails] = useState({ total: 12, more: 3 });
  const [movieList, setMovieList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function checkSavedMovie(savedMovies, movie) {
    let save = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
    return save;
  }

  useEffect(() => {
    function handleScreenResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', resizeTimer, false);

    let resizeTimeout;

    function resizeTimer() {
      if (!resizeTimeout ) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          handleScreenResize();
        }, 1000);
      }
    }

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setCardsShowDetails({ total: 12, more: 3 })
    }
    else if (screenWidth <= 768 && screenWidth > 420) {
      setCardsShowDetails({ total: 8, more: 2 })
    }
    else {
      setCardsShowDetails({ total: 5, more: 2 })
    }

  }, [screenWidth]);

  useEffect(() => {
    if (movies.length) {
      const tempMovies = movies.filter((item, i) => i < cardsShowDetails.total);
      setMovieList(tempMovies);
    }
  }, [movies, cardsShowDetails.total]);

  function handleClickMoreMovies() {
    const start = movieList.length;
    const end = start + cardsShowDetails.more;
    const additional = movies.length - start;

    if (additional > 0) {
      const newCards = movies.slice(start, end);
      setMovieList([...movieList, ...newCards]);
    }
  }

  return (
    <>
      {moviesLoading ? <Preloader /> :
        <div className='card-list'>
          { nothingFound ? <p className='nothing-found'>По вашему запросу ничего не найдено</p> :
              <div className='card-list__grid-container'>
                {movieList.map((movie) => {
                  return (
                    <MoviesCard
                      movie={movie}
                      key={movie.id || movie._id}
                      isSavedMoviePage={isSavedMoviePage}
                      onSaveMovie={onSaveMovie}
                      onUnSaveMovie={onUnSaveMovie}
                      isSave={checkSavedMovie(savedMovies, movie)}
                      savedMovies={savedMovies}
                    />
                  )
                })}
              </div>
          }
              {isSavedMoviePage || movieList.length === movies.length ? '' :  <button
                type='button'
                aria-label='Обновить фильмы'
                className='card-list__btn'
                onClick={handleClickMoreMovies}>Еще</button> }
        </div>
      }
    </>
    )
}

export default MoviesCardList;