import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Movies/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import Header from "./Header/Header";

function Movies (props){
    return (
        <>
            <Header />
            <SearchForm />
            <Preloader />
            <MoviesCardList />
            {/*<MoviesCard />*/}
        </>
    )

}

export default Movies;