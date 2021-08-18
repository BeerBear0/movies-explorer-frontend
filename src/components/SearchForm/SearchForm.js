function SearchForm (props) {


    return(
        <div className='search-form'>
            <div className='search-form__container'>
                <div className='search-form__icon-input' />
                <input className='search-form__input' placeholder='Фильм'  required />
                <div className='search-form__btn-container'>
                    <button className='search-form__btn'>Найти</button>
                </div>

            </div>
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