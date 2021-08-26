import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList (props) {
 const {
   nothingFound,
   movies,
   savedMovies,
   displayedMovies,
   setDisplayedMovies,
   isMoreBtn,
   setIsMoreBtn,
   saveMovie,
   removeSaveMovie,
   isMoviesLoading,
   countMovies,
   setCountMovies
 } = props;

 const location = useLocation();

  useEffect(() => {
    console.log(displayedMovies, movies);
    if (movies.length > displayedMovies.length) {
      setIsMoreBtn(true);
    } else {
      setIsMoreBtn(false);
    }
  }, [movies, displayedMovies]);



  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsMoreBtn(false);
    }
  }, [movies, setDisplayedMovies, location.pathname]);


  return (
    <>
      {isMoviesLoading ? <Preloader /> :
        <div className='card-list'>
          { nothingFound ? <p className='nothing-found'>По вашему запросу ничего не найдено</p> :
              <div className='card-list__grid-container'>
                {location.pathname === '/movies' ?
                  (movies.slice(0, countMovies.total).map((movie) => (
                    <MoviesCard
                      movie={movie}
                      key={movie.id || movie._id}
                      // isSavedMoviePage={isSavedMoviePage}
                      savedMovies={savedMovies}
                      saveMovie={saveMovie}
                      removeSaveMovie={removeSaveMovie}
                    />
                    ))
                ) : (savedMovies.map(movie => (
                      <MoviesCard
                        movie={movie}
                        key={movie.id || movie._id}
                        // isSavedMoviePage={isSavedMoviePage}
                        savedMovies={savedMovies}
                        saveMovie={saveMovie}
                        removeSaveMovie={removeSaveMovie}
                      />)
                    ))
                  }
              </div>
          }
              {movies.length > displayedMovies.length || location.pathname !== '/saved-movies' ?
                <button
                  type='button'
                  aria-label='Обновить фильмы'
                  className='card-list__btn'
                  onClick={() => {
                    setCountMovies({...countMovies, startsCards: countMovies.total + countMovies.more})
                  }}>Еще</button> : ''}

        </div>
      }
    </>
    )
}

export default MoviesCardList;