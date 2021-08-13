import React from 'react';
import { useState } from 'react';
import './BurgerMenu.css';
import {NavLink} from "react-router-dom";
function BurgerMenu () {
    const [burgerMenuDisplay, setBurgerMenuDisplay] = useState();

    const toggleBurgerMenu = () => {
        setBurgerMenuDisplay(!burgerMenuDisplay);
    };

    return (
        <>
            <div className={`burger-menu ${burgerMenuDisplay ? 'burger-menu_active' : ''}`}>
                <nav className='burger-menu__container'>
                    <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' exact to='/'>Главная</NavLink>
                    <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' to='/movies'>Фильмы</NavLink>
                    <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' to='/saved-movies'>Сохраненные фильмы</NavLink>
                    <NavLink className='navigation__account burger__menu_account' activeClassName='burger__menu_account_active' to='/profile'>Аккаунт</NavLink>
                </nav>
            </div>
            <div className={`burger-menu__icon ${burgerMenuDisplay ? 'burger-menu__icon_active' : ''}`}
                 onClick={toggleBurgerMenu}
            >
            </div>
        </>
    )
}

export default BurgerMenu;