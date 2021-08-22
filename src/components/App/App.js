import { useState, useEffect } from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Auth-form/Register';
import Login from '../Auth-form/Login';
import Profile from '../Profile/Profile';
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  // useEffect(() => {
  //   if(isLogin) {
  //     history.push('/movies');
  //   }
  //   mainApi.getUser()
  //     .then(user => {
  //       setCurrentUser(user);
  //       setIsLogin(true);
  //     })
  // })

  function handleSaveMovie(movie) {
    mainApi.likeAndSaveMovie(movie)
      .then(res => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch(err => console.log(`Ошибка + ${err}`));
  }
  function handleUnSaveMovie(movieId, isSavedMoviePage) {
    let movieDelete;
    if (isSavedMoviePage) {
      movieDelete = movieId;
    }
    else {
      movieDelete = savedMovies.find(movies => movies.movieId === movieId)._id;
    }

    mainApi.unSaveMovie(movieDelete)
      .then(()=> {
        setSavedMovies(savedMovies.filter(item => item._id !== movieDelete));
    })
      .catch(err => console.log('Ошибка ' + err));
  }

    return (
<CurrentUserContext.Provider value={currentUser}>
  <Switch>
        <Route exact path='/'>
            <Main />
        </Route>
        <Route path='/signin'>
            <Login />
        </Route>
        <Route path='/signup'>
            <Register />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/movies'>
            <Movies
                onSaveMovie={handleSaveMovie}
                onUnSaveMovie={handleUnSaveMovie}
                isLogin={isLogin}
                isPending={isPending}
                savedMovies={savedMovies}
            />
        </Route>
        <Route path='/profile'>
          <Profile
            isLogin={isLogin}
            onUnSaveMovie={handleUnSaveMovie}
            savedMovies={savedMovies}
          />
        </Route>
  </Switch>
</CurrentUserContext.Provider>
  );
}

export default App;
