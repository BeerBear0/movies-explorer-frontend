import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Movies/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Movies (props){
    return (
        <>
            <Header />
            <SearchForm />
            <Preloader />
            <MoviesCardList />
            <Footer />
        </>
    )

}

export default Movies;