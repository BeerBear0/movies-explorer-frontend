

function MoviesCard (props) {
   const  {movie} = props
    return (
        <div className='card'>
            <img src={movie.link} className='card__image'/>
            <div className='card__info'>
                <h3 className='card__title'>{movie.name}</h3>
                <p className='card__time'>{movie.time}</p>
            </div>
            <div className='card__like card__like_active' />
        </div>
    )
}

export default MoviesCard;