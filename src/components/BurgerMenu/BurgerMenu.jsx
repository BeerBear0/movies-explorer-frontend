import { useState } from 'react';
import './BurgerMenu.css'
import { NavLink } from 'react-router-dom';
import { UserProfileLink } from '../UserProfileLink/UserProfileLink';

export const BurgerMenu = ({ isLandingPage }) => {

  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);

  const toggleBurgerMenuDisplay = () => {
    setBurgerMenuDisplay(!burgerMenuDisplay)
  }

  return (
    <>
      <div
        className={`burger-menu__overlay ${burgerMenuDisplay ? 'burger-menu__overlay_active' : ''}`}>
        <nav className="burger-menu__container">
          <ul className="burger-menu__links-list">
            <li>
              <NavLink className="burger-menu__link" activeClassName="burger-menu__link_active" exact to="/">Главная</NavLink>
            </li> 
            <li>
              <NavLink className="burger-menu__link" activeClassName="burger-menu__link_active" to="/movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink className="burger-menu__link" activeClassName="burger-menu__link_active" to="/saved-movies">Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <UserProfileLink />
        </nav>
      </div>
      <div
        className={`burger-menu__icon ${burgerMenuDisplay ? 'burger-menu__icon_active' : ''} ${!isLandingPage ? 'burger-menu__icon_color_black' : ''}`}
        onClick={toggleBurgerMenuDisplay}
      >
        <span className={`burger-menu__line ${burgerMenuDisplay ? 'burger-menu__line_active' : ''} ${!isLandingPage ? 'burger-menu__line_color_black' : ''}`} />
      </div>
    </>
  )
}