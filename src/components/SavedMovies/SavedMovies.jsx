import './SavedMovies.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';


export const SavedMovies = ({ isLoginIn }) => {
  return (
    <>
      <Header isLoginIn={isLoginIn} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}