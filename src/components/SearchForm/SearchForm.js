import { useState } from 'react';

function SearchForm ({ onSearchMovies, isShortMovies, setIsShortMovies }) {
    //поисковой запрос
    const [isSearch, setIsSearch] = useState('');

    const handleChangeSearch = (evt) => {
      setIsSearch(evt.target.value)
    }

    const handleSearchBtn = (evt) => {
      evt.preventDefault();
      onSearchMovies(isSearch);
    }
    function handlerIsShortMovies () {
    setIsShortMovies(!isShortMovies)
  }
    return(
        <div className='search-form'>
            <form
              className='search-form__container'
              onSubmit={handleSearchBtn}
            >
                <div className='search-form__icon-input' />
                <input
                  value={isSearch || ''}
                  type='text'
                  name='search-btn__query-input'
                  onChange={handleChangeSearch}
                  className='search-form__input'
                  placeholder='Фильм'
                  minLength='1'
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
                onChange={handlerIsShortMovies}
            />
            <span className='search-form__checkbox-text'>Короткометражки</span>
            </div>
        </div>
    )
}

export default SearchForm;