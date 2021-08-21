import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Auth-form/Register';
import Login from '../Auth-form/Login';
import Profile from '../Profile/Profile';
import {CurrentUserContext} from "../../context/CurrentUserContext";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
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
            <Movies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
  </Switch>
</CurrentUserContext.Provider>
  );
}

export default App;
