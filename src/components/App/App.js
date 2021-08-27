import { useState, useEffect } from 'react';
import {Route, Switch, useHistory, Redirect} from 'react-router-dom';
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
  const [successMessage, setSuccessMessage] = useState('')
  const [savedMovies, setSavedMovies] = useState([])

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (isLogin) {
      history.push("/movies");
    }

    mainApi.getUser()
      .then((user) => {
        setCurrentUser(user);
        setIsLogin(true);
      })
      .catch(err => console.log('Ошибка ' + err));

  }, [isLogin, history]);

  useEffect(() => {
    if(isLogin) {
      mainApi.getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch(err => {
          console.log('Ошибка ' + err);
        })
    }
  }, [isLogin]);

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((res) => {
      setSavedMovies([res, ...savedMovies]);
    })
      .catch(err => console.log('Ошибка ' + err));
  }

  function handleUnSaveMovie(movieId, isSavedMoviePage) {
    let movieToDeleteId;
    if (isSavedMoviePage) {
      movieToDeleteId = movieId;
    }
    else {
      movieToDeleteId = savedMovies.find(movies => movies.movieId === movieId._id);
    }

    mainApi.unSaveMovie(movieToDeleteId).then((res)=> {
      setSavedMovies(savedMovies.filter(item => item._id !== movieToDeleteId));
    })
      .catch(err => console.log('Ошибка ' + err));
  }

  function handleSignIn(values) {
    mainApi.login(values)
      .then((res) => {
        setIsPending(true);
        setErrorMessage('');
        console.log(res);
        setIsLogin(true);
        history.push("/movies");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err.message);
      })
      .finally(()=> setIsPending(false));
  }

  function handleRegister(values) {
    mainApi.register(values)
      .then((res) => {
        setIsPending(true);
        setErrorMessage('');
        console.log(res);
        handleSignIn(values);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err.message);
      })
      .finally(()=> setIsPending(false));
  }

  function handleUpdateUser(values) {
    mainApi.updateUser(values)
      .then((res) => {
        setIsPending(true);
        setErrorMessage('');
        setSuccessMessage('Данные успешно изменены')
        console.log(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err.message);
      })
      .finally(()=> setIsPending(false));
  }

  function onLogOut() {
    mainApi.logout()
      .then((res) => {
        setIsPending(true);
        setIsLogin(false);
        setErrorMessage('');
        history.push("/");
        console.log(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err.message);
      })
      .finally(()=> setIsPending(false));
  }
    return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
            <Route exact path='/'>
                <Main isLogin={isLogin}/>
            </Route>
            <Route path='/signin'>
              <Login
                onLogin={handleSignIn}
              />
            </Route>
            <Route path='/signup'>
              <Register
                onRegister={handleRegister}
              />}\
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies
                isLogin={isLogin}
                onUnSaveMovie={handleUnSaveMovie}
                savedMovies={savedMovies}
              />
            </Route>
            <Route path='/movies'>
                <Movies
                  isLogin={isLogin}
                  onSaveMovie={handleSaveMovie}
                  onUnSaveMovie={handleUnSaveMovie}
                  isPending={isPending}
                  savedMovies={savedMovies}
                />
            </Route>
            <Route path='/profile'>
              <Profile
                isLogin={isLogin}
                onSubmit={handleUpdateUser}
                errorMessage={errorMessage}
                isPending={isPending}
                successMessage={successMessage}
                onLogOut={onLogOut}
              />
            </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
