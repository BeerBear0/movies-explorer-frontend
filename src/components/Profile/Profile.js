import React from 'react';
import './Profile.css';

import Header from "../Header/Header";
function Profile (props){
    return (
        <>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
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

                <button className='profile__btn profile__btn_edit'>Редактировать</button>
                <button className='profile__btn profile__btn_exit'>Выйти из аккаунта</button>

            </div>
        </>
    )
}

export default Profile;