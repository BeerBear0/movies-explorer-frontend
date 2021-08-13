import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies (){
    return (
        <>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
                headerHref1='/movies'
                headerHref2='/saved-movies'
            />
            <SearchForm />
            <MoviesCardList />
        </>
    )
}

export default SavedMovies;