import {useFormWithValidation} from "../../utils/useFormWithValidation";
import Preloader from "../Preloader/Preloader";

function Register (props){
  const {values, handleChange, errors, isFormValid} = useFormWithValidation();

  function handleRegister(e) {
    e.preventDefault();

    props.onRegister(values.name, values.password, values.email);

    props.onClear();
  }

  return (
        <div className='auth-form'>
             <form className='register__form' onSubmit={handleRegister}>
              <div className='header__logo auth-form__logo' />
              <h2 className='auth-form__title'>Добро пожаловать!</h2>
              <p className='auth-form__description'>Имя</p>
              <input
                  onChange={handleChange}
                  value={values.name || ''}
                  className='auth-form__input auth-form__input_name'
                  type='text'
                  name='name'
                  pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                  placeholder='Введите имя'
                  minLength='2'
                  required
                  disabled={props.isSaving}
              />
              <p className='auth-form__description'>E-mail</p>
              <input
                  onChange={handleChange}
                  value={values.email || '' }
                  name='email'
                  className='auth-form__input auth-form__input_email'
                  type='Email'
                  placeholder='Введите Email'
                  required
                  disabled={props.isSaving}
              />
              <p className='auth-form__description'>Пароль</p>
              <input
                  onChange={handleChange}
                  value={values.password || ''}
                  name='password'
                  className='auth-form__input auth-form__input_password'
                  type='password'
                  placeholder='Введите пароль'
                  required
                  minLength='8'
                  disabled={props.isSaving}
              />
              <button
                className={isFormValid ? 'auth-form__btn' : "auth-form__btn_disabled"}
                type='submit'
                disabled={!isFormValid}
              >Зарегистрироваться</button>
              <p className='auth-form__text'>Уже зарегистрированы? <a href='/signin' className='register__link'>Войти</a></p>
             </form>
            }
          </div>
    )
}

export default Register;