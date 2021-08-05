function Footer(){
    return (
        <div className='footer'>
            <div className='footer__description'>
                <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer__container'>
                <p className='footer__data'>&copy; {new Date().getFullYear()}</p>
                <nav className='footer__nav'>
                    <a href='https://praktikum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
                    <a href='https://github.com/BeerBear0' className='footer__link'>Github</a>
                    <a href='https://vk.com/n1kk0_00' className='footer__link'>VK</a>
                </nav>
            </div>
        </div>
    )
}

export default Footer;