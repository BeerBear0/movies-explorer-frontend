function Register (props){
    return (
        <div className='auth-form'>
            <div className='header__logo auth-form__logo' />
            <h2 className='auth-form__title'>Добро пожаловать!</h2>
            <p className='auth-form__description'>Имя</p>
            <input
                className='auth-form__input auth-form__input_name'
                type='name'
                placeholder='Введите имя'
            />
            <p className='auth-form__description'>E-mail</p>
            <input
                className='auth-form__input auth-form__input_email'
                type='Email'
                placeholder='Введите Email'
            />
            <p className='auth-form__description'>Пароль</p>
            <input
                className='auth-form__input auth-form__input_password'
                type='password'
                placeholder='Введите пароль'
            />
            <button className='auth-form__btn'>Зарегистрироваться</button>
            <p className='auth-form__text'>Уже зарегистрированы? <a href='/signin' className='register__link'>Войти</a></p>
        </div>
    )
}

export default Register;