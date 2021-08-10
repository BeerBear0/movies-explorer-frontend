function MoviesCard ({ movie }) {
    return (
        <div className='card'>
            <img
                src={movie.image}
                alt={movie.nameRu}
                className='card__image'/>
            <div className='card__container'>
                <h3 className='card__title'>{movie.nameRu}</h3>
                <div className='card__like card__like_active' />
            </div>
            <p className='card__time'>{movie.duration}</p>

        </div>
    )
}

export default MoviesCard;