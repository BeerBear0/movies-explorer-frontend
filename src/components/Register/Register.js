function Register (props){
    return (
        <div className='register'>
            <div className='header__logo register__logo' />
            <h1 className='register__title'>Добро пожаловать!</h1>
            <span className='register__span'>Имя</span>
            <input
                className='register__input register__input_name'
                type='name'
                placeholder='Введите имя'
            />
            <span className='register__span'>E-mail</span>
            <input
                className='register__input register__input_email'
                type='Email'
                placeholder='Введите Email'
            />
            <span className='register__span'>Пароль</span>
            <input
                className='register__input register__input_password'
                type='password'
                placeholder='Введите пароль'
            />
            <button className='register__btn'>Зарегистрироваться</button>
            <p className='register__text'>Уже зарегистрированы? <a className='register__link'>Войти</a></p>
        </div>
    )
}

export default Register;