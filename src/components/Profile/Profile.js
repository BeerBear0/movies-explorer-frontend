import React, {useEffect, useContext} from 'react'
import { CurrentUserContext } from "../../context/CurrentUserContext";
import {useFormWithValidation } from "../../utils/useFormWithValidation";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

function Profile ({ onSubmit, errorMessage, isPending, successMessage, onLogOut }){
  const { values, errors, isValid, handleChange, setValues, setIsValid, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm();
    setValues({name: currentUser.name,
      email: currentUser.email,});
  }, [currentUser, setValues, resetForm]);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false);
    }
  }, [values, currentUser, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  function handleLogOut() {
    onLogOut();
  }


  return (
        <>
          <Header
            linkNum1='Фильмы'
            linkNum2='Сохраненные фильмы'
            headerHref1='/movies'
            headerHref2='/saved-movies'
          />
          {isPending ? <Preloader/> :
            <form className='profile' onSubmit={handleSubmit} >
              <h2 className='profile__title'>Привет, {values.name}</h2>

              <div className='profile__container'>
                <label className='profile__description profile__description_name'>Имя</label>
                <input
                  className='profile__edit profile__edit-name'
                  onChange={handleChange}
                  value={values.name || ''}
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
                  name='email'
                  type='email'
                  required
                />
              </div>
              <button
                type='submit'
                className={`profile__btn profile__btn_edit ${isValid ? '' : 'profile__btn_edit_disabled'}`}
                disabled={isValid ? '' : true}
              >Редактировать</button>
              <button
                type='button'
                className='profile__btn profile__btn_exit'
                onClick={handleLogOut}>Выйти из аккаунта</button>
            </form>
          }
        </>
    )
}

export default Profile;