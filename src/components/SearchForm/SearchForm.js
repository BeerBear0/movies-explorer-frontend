function SearchForm (props) {
    return(
        <div className='search-form'>
            <input className='search-form__input' placeholder='&#128269; Фильм' />
            <div className='search-form__container'>
                <div className='search-form__btn-container'>
                    <button className='search-form__btn'>Найти</button>
                </div>
                 <input
                    type='checkbox'
                    className='search-form__checkbox'
                 />
                 <p className='search-form__checkbox-text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;