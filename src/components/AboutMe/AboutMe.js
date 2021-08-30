import "./AboutMe.css"

function AboutMe (props) {
    return (
        <div className='aboutme'>
            <a name='aboutme' />
            <h3 className='project__title'>Студент</h3>
            <div className='aboutme__container'>
                <div className='aboutme__description'>
                    <h4 className='aboutme__title'>Никита</h4>
                    <p className='aboutme__work'>Фронтенд разработчик, 23 года</p>
                    <p className='aboutme__text'>Я родился Чувашии, живу в Москве. Характер скверный, не женат. Я люблю слушать рок музыку, иногда играю в баскетбол. Я начал кодить в октябре 2020года. С 2017 года самозанятый. В данный момент ищу постоянную работу в ИТ сфере.</p>
                    <a href='https://vk.com/n1kk0_00' className='aboutme__link'>В контакте</a>
                    <a href='https://github.com/BeerBear0' className='aboutme__link'>Github</a>
                </div>
                <div className='aboutme__photo' />
            </div>
        </div>
    )
}

export default AboutMe;