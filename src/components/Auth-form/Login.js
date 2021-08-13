import React from 'react';
import './Auth-form.css';
import {NavLink} from "react-router-dom";

function Login (props){
    return (
        <div className='auth-form'>
            <div className='header__logo auth-form__logo' />
            <h2 className='auth-form__title'>Рады видеть!</h2>
            <p className='auth-form__description'>Email</p>
            <input
                className='auth-form__input auth-form__input_login_email'
                type='email'
                placeholder='Введите email'
            />
            <p className='auth-form__description'>Пароль</p>
            <input
                className='auth-form__input auth-form__input_login_password'
                type='email'
                placeholder='Введите email'
            />
            <button className='auth-form__btn'>Войти</button>
            <p className='auth-form__text'>Еще не зарегистрированы? <NavLink to='/signup' className='auth-form__link'>Регистрация</NavLink> </p>
        </div>
    )
}

export default Login;
