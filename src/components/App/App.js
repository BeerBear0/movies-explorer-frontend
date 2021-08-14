import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Auth-form/Register';
import Login from '../Auth-form/Login';
import Profile from '../Profile/Profile';

function App() {

    return (
<>
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

</>
  );
}

export default App;
