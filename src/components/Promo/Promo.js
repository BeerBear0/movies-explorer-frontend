import React from 'react';
import Header from "../Header/Header";

function Promo(props) {
    return (
            <div className='promo'>
                <Header
                    linkNum1='Регистрация'
                    linkNum2='Войти'
                    headerHref1='/signup'
                    headerHref2='/signin'
                />
                <div className='promo__image'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                </div>
                </div>
    )
}
export default Promo;