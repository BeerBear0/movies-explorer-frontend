import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Movies/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Movies ({isLoginIn}){
    return (
        <>
            <Header
                isLoginIn={isLoginIn}
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm />
            <Preloader />
            <MoviesCardList />
            <Footer />
        </>
    )

}

export default Movies;