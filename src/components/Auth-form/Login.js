import Preloader from "../Preloader/Preloader";
import {useFormWithValidation} from "../../utils/useFormWithValidation";

function Login (props){
  const { values, errors, isValid, handleChange, errorMessage } = useFormWithValidation();

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <>
      {isPending ? <Preloader /> :
          <form className='auth-form' onSubmit={handleLoginSubmit}>
              <div className='header__logo auth-form__logo' />
              <h2 className='auth-form__title'>Рады видеть!</h2>
              <p className='auth-form__description'>Email</p>
              <input
                  className='auth-form__input auth-form__input_login_email'
                  type='email'
                  placeholder='Введите email'
                  onChange={handleChange}
                  value={values.email || ''}
                  name='email'
                  required
              />
              <p className='auth-form__description'>Пароль</p>
              <input
                  className='auth-form__input auth-form__input_login_password'
                  type='password'
                  placeholder='Введите пароль'
                  onChange={handleChange}
                  value='password'
                  required
              />
              <button
                className={`auth-form__btn ${isValid ? '' : 'auth-form__btn_disabled'}`}
                type='submit'
                disabled={isValid ? '' : true}
              >Войти</button>
              <p className='auth-form__text'>Еще не зарегистрированы? <a href='/signup' className='auth-form__link'>Регистрация</a> </p>
          </form>
      }
    </>
    )
}

export default Login;
