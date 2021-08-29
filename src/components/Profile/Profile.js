import React, {useEffect, useContext} from 'react'
import { CurrentUserContext } from "../../context/CurrentUserContext";
import {useFormWithValidation } from "../../utils/useFormWithValidation";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

function Profile (props){
  const {values, setValues, handleChange, errors, isFormValid} = useFormWithValidation();
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  function handleEditProfileClick(e) {
    e.preventDefault();

    setIsFormDisabled(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onChangeUser(values.name, values.email);
  }

  React.useEffect(() => {
    setIsFormDisabled(props.isUpdateSuccess);
  },[props.isUpdateSuccess, props.onChangeUser])

  React.useEffect(() => {
    if(props.isSaving) {
      setIsFormDisabled(true);
    }
  }, [props.isSaving])


  return (
        <>
          <Header
            linkNum1='Фильмы'
            linkNum2='Сохраненные фильмы'
            headerHref1='/movies'
            headerHref2='/saved-movies'
          />
            <form className='profile' onSubmit={handleSubmit} >
              <h2 className='profile__title'>Привет, {currentUser.name}!</h2>

              <div className='profile__container'>
                <label className='profile__description profile__description_name'>Имя</label>
                <input
                  className='profile__edit profile__edit-name'
                  onChange={handleChange}
                  pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                  value={values.name || ''}
                  disabled={isFormDisabled}
                  name='name'
                  type='text'
                  required
                />
              </div>

              <div className='profile__container'>
                <label className='profile__description profile__description_email'>E-mail</label>
                <input
                  className='profile__edit profile__edit-email'
                  onChange={handleChange}
                  value={values.email || ''}
                  disabled={isFormDisabled}
                  name='email'
                  type='email'
                  required
                />
              </div>
              {isFormDisabled ? <button
                type='submit'
                className='profile__btn profile__btn_edit'
                onClick={handleEditProfileClick}>Редактировать</button> :
                <button type="submit" disabled={!isFormValid}
                        className={`profile__btn profile__btn_save ${isFormValid ? 'display' : 'no-display'}`}>
                  Сохранить</button>}
              <button
                type='button'
                className={`profile__btn profile__btn_exit ${isFormDisabled ? '' : 'no-display'}`}
                onClick={props.onSignOut}>Выйти из аккаунта</button>
            </form>
        </>
    )
}

export default Profile;