import { useState } from 'react';

function SearchForm ({ onSearchMovies, isShortMovies, onChekBoxClick }) {
  const [filmQuery, setfilmQuery] = useState('');

  function handleChangeQuery(evt) {
    setfilmQuery(evt.target.value);
  }

  function handleSubmitSearch(evt) {
    evt.preventDefault();
    onSearchMovies(filmQuery)
  }

    return(
        <div className='search-form'>
            <form
              className='search-form__container'
              onSubmit={handleSubmitSearch}
            >
                <div className='search-form__icon-input' />
                <input
                  value={filmQuery || ''}
                  onChange={handleChangeQuery}
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
                onChange={onChekBoxClick}
            />
            <span className='search-form__checkbox-text'>Короткометражки</span>
            </div>
        </div>
    )
}

export default SearchForm;