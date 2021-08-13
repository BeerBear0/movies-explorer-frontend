import './SearchForm.css';

export const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <div className="search-form__text-field-wrapper">
            <input className="search-form__text-field" type="text" placeholder="Фильм" />
            <button className="search-form__search-button" type="submit">Поиск</button>
          </div>
          <label className="search-form__checkbox-wrapper">
            <input className="search-form__checkbox" type="checkbox" name="shortMovies" id="" />
            <span className="search-form__checkbox-visible"></span>
            Короткометражки
          </label>
        </form>
      </div>
    </section>
  )
}