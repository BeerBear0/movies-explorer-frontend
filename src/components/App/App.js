import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Auth-form/Register';
import Login from '../Auth-form/Login';
import Profile from '../Profile/Profile';
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {moviesApi} from "../../utils/MoviesApi";

function App() {
  const [editProfileMessage, setEditProfileMessage] = useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(true);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isMoviesErrorActive, setIsMoviesErrorActive] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  const isLoggedIn = localStorage.getItem('loggedIn');


  const history = useHistory();
  const location = useLocation();

  function handleShortMoviesCheck(e) {
    setIsShortMoviesChecked(e.target.checked);
  }

  function handleLogin(password, email) {
    setIsSaving(true);

    mainApi.authorize(password, email)
      .then((data) => {
        if(data.token) {
          localStorage.setItem('loggedIn', 'true');
          setLoginErrorMessage('');
          history.push('/movies');
        } else if(data.error === 'Bad Request') {
          setLoginErrorMessage('Введены невалидные данные');
        } else if(data.message) {
          setLoginErrorMessage(data.message);
        }
      })
      .catch(() => {
        setLoginErrorMessage('Что-то пошло не так...');

      })
      .finally(() => {
        setIsSaving(false);
      })
  }

  function handleRegister(name, password, email) {
    setIsSaving(true);
    mainApi.register(name, password, email)
      .then((res) => {
        if(res.user) {
          setRegisterErrorMessage('')
          handleLogin(password, email);
        } else if(res.error === 'Bad Request') {
          setRegisterErrorMessage('Введены невалидные данные');
        } else if(res.message) {
          setRegisterErrorMessage(res.message);
        }
      })
      .catch(() => {
        setRegisterErrorMessage('Что-то пошло не так...');
      })
      .finally(() => {
        setIsSaving(false);
      })
  }

  function handleEditUserInfo(name, email) {

    mainApi.editUserData(token, name, email)
      .then((newUser) => {
        if(newUser._id) {
          setCurrentUser(newUser);
          setIsUpdateSuccess(true);
          setEditProfileMessage('Профиль обновлен успешно!');
        } else if(newUser.message){
          setEditProfileMessage(newUser.message);
          setIsUpdateSuccess(false);
        }
        return
      })
      .catch(() => {
        setEditProfileMessage('При обновлении профиля произошла ошибка');
        setIsUpdateSuccess(false);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setMovies([]);
    setAllMovies([]);
    history.push('/');
  }

  function clearAllErrorMessages() {
    setRegisterErrorMessage('');
    setLoginErrorMessage('');
    setEditProfileMessage('');
  }

  function handleSearchMovies(movies, keyWord) {
    let filteredMovies = [];

    movies.forEach((movie) => {
      if(movie.nameRU.indexOf(keyWord) > -1) {

        if(isShortMoviesChecked) {

          if(movie.duration <= 40) {
            return filteredMovies.push(movie);
          }
          return
        }

        return filteredMovies.push(movie);
      }
    })

    return filteredMovies;
  }

  function searchSavedMovies(keyWord) {
    const allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const searchSavedResult = handleSearchMovies(allSavedMovies, keyWord);
    setSavedMovies(searchSavedResult);
  }

  function searchMovies(keyWord) {
    setIsSearching(true);
    setMovies([]);
    setNotFound(false);
    setIsMoviesErrorActive(false);

    if(allMovies.length === 0) {
      moviesApi.getMovies()
        .then((movies) => {
          setAllMovies(movies)
          const searchResult = handleSearchMovies(movies, keyWord);

          if(searchResult.length === 0) {
            setNotFound(true);
            setMovies([]);
          } else {
            localStorage.setItem('movies', JSON.stringify(searchResult))
            setMovies(JSON.parse(localStorage.getItem('movies')));
          }
        })
        .catch(() => {
          setIsMoviesErrorActive(true);
          setMovies([]);
        })
        .finally(() => {
          setIsSearching(false);
          setIsShortMoviesChecked(false);
        })
    } else {
      const searchResult = handleSearchMovies(allMovies, keyWord);

      if(searchResult.length === 0) {
        setNotFound(true);
        setMovies([]);
        setIsSearching(false);
        setIsShortMoviesChecked(false);
      } else if(searchResult.length !== 0) {
        localStorage.setItem('movies', JSON.stringify(searchResult));
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setIsSearching(false);
        setIsShortMoviesChecked(false);
      } else {
        setIsMoviesErrorActive(true);
        setMovies([]);
        setIsShortMoviesChecked(false);
      }
    }
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(token, movie)
      .then((savedMovie) => {
        const films = [...savedMovies, savedMovie];
        localStorage.setItem('savedMovies', JSON.stringify(films));
        setSavedMovies(prevState => ([...prevState, savedMovie]));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, попробуйте еще раз`);
      })
  }

  function handleDeleteMovie(movieId) {

    mainApi.deleteMovie(token, movieId)
      .then(() => {
        const newSavedMovies = savedMovies.filter((deletedMovie) => {return deletedMovie._id !== movieId})
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, попробуйте еще раз`);
      })
  }

  useEffect(() => {

    function checkToken() {

      if(localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const searchedMovies = JSON.parse(localStorage.getItem('movies'));

        if(token) {
          Promise.all([mainApi.getUserData(token), mainApi.getSavedMovies(token)])
            .then(([userData, movies]) => {
              setCurrentUser(userData);
              setToken(localStorage.getItem('token'));
              const films = [...savedMovies, movies];
              localStorage.setItem('savedMovies', JSON.stringify(films));
              setSavedMovies(prevState => ([...prevState, movies]));
              setMovies(searchedMovies);
              localStorage.setItem('loggedIn', 'true');
            })
            .catch((err) => {
                console.log(`Ошибка ${err}, попробуйте еще раз`);
              }
            )
        }
      }
    }
    checkToken();

  }, [history, isLoggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token');
    setEditProfileMessage('');

    mainApi.getSavedMovies(token)
      .then((res) => {
        setSavedMovies(res);
      })
  }, [location]);

    return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
            <Route exact path='/'>
                <Main loggedIn={isLoggedIn}/>
            </Route>
            <Route path='/signin'>
              <Login
                exact path="/signin"
                onLogin={handleLogin}
                errorMessage={loginErrorMessage}
                onClear={clearAllErrorMessages}
                isSaving={isSaving}
                />
            </Route>
            <Route path='/signup'>
              <Register
                onRegister={handleRegister}
                errorMessage={registerErrorMessage}
                onClear={clearAllErrorMessages}
                isSaving={isSaving}
              />
            </Route>
            <ProtectedRoute exact path="/saved-movies"
                            loggedIn={isLoggedIn}
                            component={SavedMovies}
                            movies={savedMovies}
                            onDeleteMovie={handleDeleteMovie}
                            onSearchSavedMovies={searchSavedMovies}
                            onShortMoviesCheck={handleShortMoviesCheck}
                            isShortMoviesChecked={isShortMoviesChecked}
            />
            <ProtectedRoute exact path="/movies"
                            loggedIn={isLoggedIn}
                            component={Movies}
                            movies={movies}
                            onSearchMovies={searchMovies}
                            isSearching={isSearching} notFound={notFound} isErrorActive={isMoviesErrorActive} onMovieSave={handleSaveMovie}
                            onDeleteMovie={handleDeleteMovie}  savedMovies={savedMovies} onShortMoviesCheck={handleShortMoviesCheck}
                            isShortMoviesChecked={isShortMoviesChecked}
            />
            <ProtectedRoute exact path="/profile"
                            loggedIn={isLoggedIn}
                            component={Profile}
                            onSignOut={handleSignOut}
                            onChangeUser={handleEditUserInfo}
                            message={editProfileMessage}
                            isUpdateSuccess={isUpdateSuccess}
                            isSaving={isSaving}
            />
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
