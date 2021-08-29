import {useFormWithValidation} from "../../utils/useFormWithValidation";
import Preloader from "../Preloader/Preloader";

function Register ({ onRegister, errorMessage, isPending }){

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  return (
        <div className='auth-form'>
          {isPending ? <Preloader /> :
             <form className='register__form' onSubmit={handleSubmit} noValidate>
              <div className='header__logo auth-form__logo' />
              <h2 className='auth-form__title'>Добро пожаловать!</h2>
              <p className='auth-form__description'>Имя</p>
              <input
                  onChange={handleChange}
                  // value={values.name || ''}
                  className='auth-form__input auth-form__input_name'
                  type='name'
                  placeholder='Введите имя'
                  minLength='2'
                  // required
              />
              <p className='auth-form__description'>E-mail</p>
              <input
                  onChange={handleChange}
                  value={values.email || '' }
                  name='email'
                  className='auth-form__input auth-form__input_email'
                  type='Email'
                  placeholder='Введите Email'
              />
              <p className='auth-form__description'>Пароль</p>
              <input
                  onChange={handleChange}
                  value={values.password || ''}
                  name='password'
                  className='auth-form__input auth-form__input_password'
                  type='password'
                  placeholder='Введите пароль'
              />
              <button
                className={isValid ? 'auth-form__btn' : "auth-form__btn_disabled"}
                type='submit'
                disabled={isValid ? '' : true}
              >Зарегистрироваться</button>
              <p className='auth-form__text'>Уже зарегистрированы? <a href='/signin' className='register__link'>Войти</a></p>
             </form>
            }
          </div>
    )
}

export default Register;