import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Register from '../Auth-form/Register';
import Login from '../Auth-form/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {

    return (
<>
  {/*<Header />*/}
  <Switch>
  {/*<Navigation />*/}
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
  {/*<Footer />*/}
</>
  );
}

export default App;
