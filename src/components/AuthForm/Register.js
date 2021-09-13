import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useFormWithValidation} from "../../hooks/useForm";

import "./AuthForm.css"

function Register(props) {
    const {values, handleChange, errors, isFormValid} = useFormWithValidation();

    function handleRegister(e) {
        e.preventDefault();

        props.onRegister(values.name, values.password, values.email);

        props.onClear();
    }

    return (
        <>
        <section className="auth-form register">
            <form className="register__form auth-form__form" onSubmit={handleRegister}>
                <div>
                    <NavLink to='/'><div className='header__logo auth-form__logo' /></NavLink>
                    <h2 className="register__title auth-form__title">Добро пожаловать!</h2>
                </div>
                <fieldset className="register__fields auth-form__fields">
                    <p className="register__input-name auth-form__description">Имя</p>
                    <input type="text"
                    name="name"
                    pattern="[а-яА-Яa-zA-ZёË\- ]{1,}" className="register__input auth-form__input"
                    value={values.name || ''}
                    onChange={handleChange}
                    required
                    disabled={props.isSaving}/>
                    <span className="register__error auth-form__error">{errors.name}</span>
                    <p className="register__input-name auth-form__input-name">E-mail</p>
                    <input
                        type="email"
                        name="email"
                        pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$"
                        className="register__input auth-form__input"
                        value={values.email || ''}
                        onChange={handleChange}
                        required
                        disabled={props.isSaving}/>
                    <span className="register__error auth-form__error">{errors.email}</span>
                    <p className="register__input-name auth-form__input-name">Пароль</p>
                    <input
                    type="password"
                    name="password"
                    className="register__input auth-form__input"
                    value={values.password || ''}
                    onChange={handleChange}
                    required minLength="8"
                    disabled={props.isSaving}/>
                    <span className="register__error auth-form__error">{errors.password}</span>
                </fieldset>
                <span className="register__submit-error auth-form__submit-error">{props.errorMessage}</span>
                <button disabled={!isFormValid} type="submit"
                        className={`register__submit-button auth-form__submit-button ${isFormValid ? '': 'auth-form__submit-button_disabled'}`}>
                    Зарегистрироваться</button>
            </form>
                <h3 className="register__subtitle auth-form__subtitle">Уже зарегистрированы?
                    <Link className="register__link auth-form__link" to="/signin" onClick={props.onClear}> Войти</Link></h3>
        </section>
       </>
    )
}

export default Register;
