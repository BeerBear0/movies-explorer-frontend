
function Portfolio (){
    return (
        <div className='portfolio'>
            <h6 className='portfolio__title'>Портфолио</h6>
            <div className='portfolio__links'>
                <a href='https://github.com/BeerBear0/how-to-learn' className='portfolio__link'>Статичный сайт</a>
                <a href='https://github.com/BeerBear0/how-to-learn' className='portfolio__link_arrow' />
            </div>

            <div className='portfolio__links'>
                <a href='https://github.com/BeerBear0/russian-travel' className='portfolio__link'>Адаптивный сайт</a>
                <a href='https://github.com/BeerBear0/russian-travel' className='portfolio__link_arrow' />
            </div>

            <div className='portfolio__links'>
                <a href='https://github.com/BeerBear0/react-mesto-api-full' className='portfolio__link'>Одностраничное приложение</a>
                <a href='https://github.com/BeerBear0/react-mesto-api-full' className='portfolio__link_arrow' />
            </div>
        </div>
    )
}

export default Portfolio;