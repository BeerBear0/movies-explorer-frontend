import {Link, NavLink} from "react-router-dom";
import React from "react";
import {useFormWithValidation} from "../../hooks/useForm";

function Login(props) {
    const {values, handleChange, errors, isFormValid} = useFormWithValidation();

    function handleLogin(e) {
        e.preventDefault();

        props.onLogin(values.password, values.email);

        props.onClear();
    }

    return (
        <section className="auth-form login">
            <NavLink to='/'><div className='header__logo auth-form__logo' /></NavLink>
            <h2 className="auth-form__title">Рады видеть!</h2>
            <form className="login__form" onSubmit={handleLogin} >
                <fieldset className="login__fields auth-form__fields">
                    <p className="auth-form__description">E-mail</p>
                    <input
                        className="auth-form__input auth-form__input_login_email"
                        type="email"
                        name="email"
                        placeholder="Введите email"
                        value={values.email || ''}
                        onChange={handleChange}
                        disabled={props.isSaving}
                        required
                    />
                    <span className="login__error auth-form__error">{errors.email}</span>
                    <p className="login__input-name auth-form__input-name">Пароль</p>
                    <input type="password" name="password" className="login__input auth-form__input"
                           value={values.password || ''} onChange={handleChange}
                           required minLength="8" disabled={props.isSaving}/>
                    <span className="login__error auth-form__error">{errors.password}</span>
                </fieldset>
                <span className="login__submit-error auth-form__submit-error">{props.errorMessage}</span>
                <button type="submit" disabled={!isFormValid}
                        className={`login__submit-button auth-form__submit-button ${isFormValid ? '' : 'auth-form__submit-button_disabled'}`}>
                    Войти</button>
            </form>
                <h3 className="login__subtitle auth-form__subtitle">Ещё не зарегистрированы?
                    <Link className="login__link auth-form__link" to="/signup" onClick={props.onClear}>Регистрация</Link></h3>
        </section>
    )
}

export default Login;
