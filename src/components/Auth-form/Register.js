import React from 'react';
import './Auth-form.css';
import {NavLink} from "react-router-dom";
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
            <span className='auth-form__error auth-form__error_active'>Что-то пошло не так</span>
            <button className='auth-form__btn'>Зарегистрироваться</button>
            <p className='auth-form__text'>Уже зарегистрированы? <NavLink to='/signin' className='auth-form__link'>Войти</NavLink></p>
        </div>
    )
}

export default Register;