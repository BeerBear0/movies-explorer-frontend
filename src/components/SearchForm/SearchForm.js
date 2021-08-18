import {useState} from 'react';

function SearchForm ({ onSearch, isShortMovies, onCheckClick }) {
  //поисковой запрос
    const [isSearch, setIsSearch] = useState('');

    const handleChangeSearch = (evt) => {
      setIsSearch(evt.target.value)
    }

    const handleSearchBtn = (evt) => {
      evt.preventDefault();
      onSearch(isSearch);
    }
    return(
        <div className='search-form'>
            <form
              className='search-form__container'
              onSabmit={handleSearchBtn}
            >
                <div className='search-form__icon-input' />
                <input
                  value={isSearch || ''}
                  onChange={handleChangeSearch}
                  className='search-form__input'
                  placeholder='Фильм'
                  required />
                <div className='search-form__btn-container'>
                    <button className='search-form__btn'>Найти</button>
                </div>

            </form>
            <div className='search-form__checkbox-container'>
            <input
                type='checkbox'
                className='search-form__checkbox'
            />
            <span className='search-form__checkbox-text'>Короткометражки</span>
            </div>
        </div>
    )
}

export default SearchForm;