import './Movies.css';
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { Footer } from '../Footer/Footer';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';


export const Movies = ({ isLoginIn }) => {
  return (
    <>
      <Header isLoginIn={isLoginIn} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}