import React from 'react';
import Header from '../Header';
import Navigation from "../Navigation";
function Promo(props) {
    return (
        <div className='header-promo'>
            <Header
                linkNum1='Регистрация'
                linkNum2='Вход'
            />
            <div className='promo'>
                <div className='promo__image'>
                    <h1 className='promo__title'>Учебный проект студента <br /> факультета Веб-разработки</h1>
                </div>
                </div>
            <Navigation />
        </div>
    )
}
export default Promo;