import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Register from '../Auth-form/Register';
import Login from '../Auth-form/Login';
import Profile from '../Profile';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
<>
  {/*<Header />*/}
  {/*<Navigation />*/}
   <Route path='/'>
     <Main />
   </Route>
   <Route path='/movies'>
     <Movies />
   </Route>
   <Route path='/saved-movies'>
     <SavedMovies />
   </Route>
   <Route path='/profile'>
    <Profile />
   </Route>
  <Route path='/signin'>
    <Login />
  </Route>
  <Route path='/signup'>
    <Register />
  </Route>
  <Footer />
</>
  );
}

export default App;
