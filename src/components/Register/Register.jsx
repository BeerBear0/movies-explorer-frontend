import './Register.css';
import { ProjectLogo } from '../ProjectLogo/ProjectLogo.jsx';
import { UserAuthForm } from '../UserAuthForm/UserAuthForm';


export const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__logo-wrapper"><ProjectLogo /></div>
        <UserAuthForm
          name="user-register-form"
          headerText="Добро пожаловать!"
          submitButtonText="Зарегистрироваться"
          additionalText="Уже зарегистрированы?"
          linkText="Войти"
          linkUrl="/signin"
        >
          <div className="user-auth-form__input-container">
            <label
              className="user-auth-form__label"
              htmlFor="userName">
              Имя
            </label>
            <input
              className="user-auth-form__input"
              placeholder="Имя"
              type="text"
              name="userName"
              id="userName"
              autocomplete="off"
              required
            />
            <label className="user-auth-form__label" htmlFor="userEmail">E-mail</label>
            <input
              className="user-auth-form__input"
              placeholder="E-mail"
              type="text"
              name="userEmail"
              id="userEmail"
              autocomplete="off"
              required
            />
            <label className="user-auth-form__label" htmlFor="userPassword">Пароль</label>
            <input
              className="user-auth-form__input"
              placeholder="Пароль"
              type="password"
              name="userPassword"
              id="userPassword"
              autocomplete="off"
              required
            />
          </div>
          <p className="user-auth-form__error">Что-то пошло не так...</p>
        </UserAuthForm>
      </div>
    </section>
  )
}