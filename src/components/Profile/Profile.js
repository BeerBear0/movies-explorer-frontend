import React from 'react'
// import { useLocation } from 'react-router-dom'
import Header from "../Header/Header";

function Profile (props){
  // const { headerHref1, headerHref2, linkNum1, linkNum2 } = props;
  // const location = useLocation();
  return (
        <>
          <Header
            linkNum1='Фильмы'
            linkNum2='Сохраненные фильмы'
            headerHref1='/movies'
            headerHref2='/saved-movies'
          />
            <div className='profile'>
                <h2 className='profile__title'>Привет, Человек!</h2>

                <div className='profile__container'>
                    <p className='profile__description profile__description_name'>Имя</p>
                    <p className='profile__edit profile__edit-name'>Человек</p>
                </div>

                <div className='profile__container'>
                    <p className='profile__description profile__description_email'>E-mail</p>
                    <p className='profile__edit profile__edit-email'>chelovek@chelovek.ru</p>
                </div>
                    <button type='button' className='profile__btn profile__btn_edit'>Редактировать</button>
                    <button type='button' className='profile__btn profile__btn_exit'>Выйти из аккаунта</button>

            </div>
        </>
    )
}

export default Profile;