import './Login.css';
import { ProjectLogo } from '../ProjectLogo/ProjectLogo';
import { UserAuthForm } from '../UserAuthForm/UserAuthForm';

export const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__logo-wrapper"><ProjectLogo /></div>
        <UserAuthForm
          name="user-login-form"
          headerText="Рады видеть!"
          submitButtonText="Войти"
          additionalText="Ещё не зарегистрированы?"
          linkText="Регистрация"
          linkUrl="/signup"
        >
          <div className="user-auth-form__input-container">
            <label className="user-auth-form__label" htmlFor="userEmail">E-mail</label>
            <input
              className="user-auth-form__input"
              placeholder="E-mail"
              type="text"
              name="userEmail"
              id="userEmail"
              required
              autocomplete="off"
            />
            <label className="user-auth-form__label" htmlFor="userPassword">Пароль</label>
            <input
              className="user-auth-form__input"
              placeholder="Пароль"
              type="password"
              name="userPassword"
              id="userPassword"
              required
              autocomplete="off"
            />
          </div>
        </UserAuthForm>
      </div>
    </section>
  )
}