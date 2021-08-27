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

  const [widthMode, setWidthMode] = useState(calcWidthMode());
  const [loggedIn, setLoggedIn] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const token = localStorage.getItem('token');

  function calcWidthMode() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width >= 1024) {
      return 'desktop'
    }
    else if (width >= 768) {
      return 'tablet'
    }
    else {
      return 'mobile'
    }
  }
  useEffect(() => {
    let timeoutId = null;
    window.addEventListener('resize', function ()  {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidthMode(calcWidthMode()), 150)
    })
  }, [])

  const history = useHistory();

  function handleRegister(name, email, password) {
    return mainApi.register(name, email, password)
      .then(() => {
        mainApi.login(email, password)
          {
            setLoggedIn(true)
          }
      })
  }
  function handleLogin(email, password) {
    return mainApi.login(email, password)
      .then(() => {
        setLoggedIn(true)
      })
  }

  useEffect(() => {
    if(!loggedIn) {
      return
    }
    return mainApi.getUserInfo(token)
      .then(res => {
        setCurrentUser({
          name: res.name,
          email: res.email,
          id: res._id
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [loggedIn, token])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      mainApi.getContent(token)
        .then(res => {
          if(res) {
            setLoggedIn(true)
          }
        })
        .catch(err => {
          localStorage.removeItem('token')
          setLoggedIn(false)
          console.log(err)
        })
    }
    else {
      setLoggedIn(false)
    }
  }, [loggedIn])

  function signOut() {
      localStorage.removeItem('token');
      setLoggedIn(false)
      history.push('/')
  }

    return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
            <Route exact path='/'>
                <Main loggedIn={loggedIn}/>
            </Route>
            <Route path='/signin'>
              {loggedIn ? <Redirect to='/movies' /> : <Login
                onLogin={handleLogin}
              />}
            </Route>
            <Route path='/signup'>
              {loggedIn ? <Redirect to='/movies'/> : <Register
                onRegister={handleRegister}
              />}
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies
                loggedIn={loggedIn}
                token={token}
              />
            </Route>
            <Route path='/movies'>
                <Movies
                  widthMode={widthMode}
                  loggedIn={loggedIn}
                  token={token}
                />
            </Route>
            <Route path='/profile'>
              <Profile
                loggedIn={loggedIn}
                setCurrentUser={setCurrentUser}
                token={token}
                signOut={signOut}
                />
            </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
