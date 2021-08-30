import './SearchForm.css';
// import search__icon from '../../images/search__icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm(props) {
    const [search, setSearch] = React.useState('');
    const [isSearchValid, setIsSearchValid] = React.useState(true);

    function handleSearchChange(e) {
        setSearch(e.target.value);
        setIsSearchValid(e.target.checkValidity())
    }

    function handleSearchSavedMovies(e) {
        e.preventDefault();

        props.onSearchSavedMovies(search);
    }

    function handleSearchMovies(e) {
        e.preventDefault();

        props.onSearchMovies(search);
    }
    return (
        <div className='search-form'>
            <form
                className='search-form__container'
                onSubmit={props.saved ? handleSearchSavedMovies : handleSearchMovies}
            >
                <div className='search-form__icon-input' />
                <input
                    value={search || ''}
                    onChange={handleSearchChange}
                    name="search-form__input"
                    type="text"
                    placeholder="Фильм"
                    className="search-form__input"
                    minLength="1"
                    required
                />
                <div className='search-form__btn-container'>
                    <button type='submit' className='search-form__btn'>Найти</button>
                </div>

            </form>
            <div  className='search-form__checkbox-container'>
                <input
                    type='checkbox'
                    className='search-form__checkbox'
                    onChange={props.onShortMoviesCheck}
                    checked={props.isChecked}
                />
                <span className='search-form__checkbox-text'>Короткометражки</span>
            </div>
        </div>
    )
}

export default SearchForm;