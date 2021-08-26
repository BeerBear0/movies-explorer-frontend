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

  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  const checkToken = () => {
    const jwt = mainApi.getToken();
    if(!jwt) {
      return
    }
    else {
      mainApi.getUserInfo()
        .then(res => {
          if(res) {
            setIsLogin(true)
          }
        })
        .catch(err => console.log(`Ошибка ${err}`));
    }
  }
  useEffect(() => {
    checkToken();
  }, [])
  useEffect(() => {
    if(isLogin) {
      mainApi.getUserInfo()
        .then(data => {
          setCurrentUser(data)
        })
        .catch(err => console.log(`Ошибка ${err}`))
    }
  }, [history, isLogin])

  function register(data) {
    return mainApi.register(data)
      .then(() => {
        console.log('Вы супер, все успешно')
        history.push('/signin')
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }
  function login(data) {
    return mainApi.login(data)
      .then(res => {
        setIsLogin(true)
        mainApi.getUserInfo()
          .then(res => {
            setCurrentUser(res)
          })
          .catch(err => console.log(`Ошибка ${err}`))

        localStorage.setItem('jwt', res.token);
        history.push('/movies')
      })
      .catch(err => console.log(err.message))
  }
  function handleUserUpdate (userData) {
    return mainApi.updateProfileUser(userData)
      .then(res => {
        setCurrentUser(res)
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }
  function logout() {
    localStorage.clear()
    setCurrentUser({})
    setIsLogin(false)
    history.push('/')
  }
  // function handleSaveMovie(movie) {
  //   mainApi.likeAndSaveMovie(movie)
  //     .then(res => {
  //       setSavedMovies([res, ...savedMovies]);
  //     })
  //     .catch(err => console.log(`Ошибка + ${err}`));
  // }
  // function handleUnSaveMovie(movieId) {
  //   mainApi.removeSaveMovie(movieId)
  //     .then(()=> {
  //       setSavedMovies(savedMovies.filter(movie => movie._id !== movieId));
  //   })
  //     .catch(err => console.log('Ошибка ' + err));
  // }
  //


    return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
            <Route exact path='/'>
                <Main isLoginIn={isLogin}/>
            </Route>
            <Route path='/signin'>
                <Login
                  onLogin={login}
                />
            </Route>
            <Route path='/signup'>
                <Register
                  onRegister={register}
                />
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies
                isLoginIn={isLogin}
                // isPending={isPending}
                // savedMovies={savedMovies}
              />
            </Route>
            <Route path='/movies'>
                <Movies
                    // onSaveMovie={handleSaveMovie}
                    // onUnSaveMovie={handleUnSaveMovie}
                  isLoginIn={isLogin}
                    // isPending={isPending}
                    // savedMovies={savedMovies}
                />
            </Route>
            <Route path='/profile'>
              <Profile
                isLoginIn={isLogin}
                currentUser={currentUser}
                onUpdateUser={handleUserUpdate}
                onLogout={logout}
                // onUnSaveMovie={handleUnSaveMovie}
                // savedMovies={savedMovies}
              />
            </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
