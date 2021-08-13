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
                    {/*<div className='burger-menu__links'>*/}
                        <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' exact to='/'>Главная</NavLink>
                        <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' exact to='/movies'>Фильмы</NavLink>
                        <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' exact to='/saved-movies'>Сохраненные фильмы</NavLink>
                    {/*</div>*/}
                    <NavLink className='navigation__account burger__menu_account' to='/profile'>Аккаунт</NavLink>
                </nav>
            </div>
            <div className={`burger-menu__icon ${burgerMenuDisplay ? 'burger-menu__icon_active' : ''}`}
                 onClick={toggleBurgerMenu}
            >
                {/*<span className={`burger-menu__icon-line ${burgerMenuDisplay ? 'burger__menu__icon-line_active' : ''}`} />*/}
            </div>
        </>
    )
}

export default BurgerMenu;