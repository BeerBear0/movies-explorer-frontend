import './FilterCheckbox.css';

function FilterCheckbox(props) {

    return (
        <div  className='search-form__checkbox-container'>
            <input
                type='checkbox'
                className='search-form__checkbox'
                onChange={props.onShortMoviesCheck}
                checked={props.isChecked}
            />
            <span className='search-form__checkbox-text'>Короткометражки</span>
        </div>
    )
}

export default FilterCheckbox;