import { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList (props) {
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
    <>
       <Preloader isSearching={props.isSearching} />
        <div className='card-list'>
          <span className={`${props.isErrorActive ? 'display ' : 'no-display'}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
          <span className={`${props.notFound ? 'display' : 'no-display'}`}>По вашему запросу ничего не найдено</span>
          <span className={`${props.saved && props.movies.length === 0}` ? 'display' : 'no-display'}>Вы пока что ничего не добавили в избранное</span>
            <div className='card-list__grid-container'>
              {displayedMovies.map(movie => {
                return (
                  <MoviesCard
                    movie={movie}
                    key={props.saved ? movie.movieId : movie.id}
                    saved={props.saved}
                    onMovieSave={props.onMovieSave}
                    onDeleteMovie={props.onDeleteMovie}
                    savedMovies={props.savedMovies}/>
                );
              })}
            </div>

            <button
              type='button'
              aria-label='Обновить фильмы'
              className={`card - list__btn ${props.saved ? 'no-display' : `${props.movies?.length === displayedMovies?.length ? 'no-display' : ''}`}`}
              onClick={handleMoviesIncrease}
            >Еще</button>

        </div>
      }
    </>
  )
}

export default MoviesCardList;