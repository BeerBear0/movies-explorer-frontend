import './AuthNavigation.css';
import { NavLink } from 'react-router-dom';
import { UserProfileLink } from '../UserProfileLink/UserProfileLink';

export const AuthNavigation = ({ isLoginIn, isLandingPage }) => {
  return (
    <nav>
      {isLoginIn ?
        (<div className="user-profile-link__mobile-wrapper"><UserProfileLink /></div>)
        :
        (<ul className="auth-navigation">
          <li className="auth-navigation__item">
            <NavLink className="auth-navigation__link" to="/signup">Регистрация</NavLink>
          </li>
          <li className="auth-navigation__item auth-navigation__item_accent">
            <NavLink className="auth-navigation__link auth-navigation__link_color_black" to="/signin">Войти</NavLink>
          </li>
        </ul>)}
    </nav>
  )
}
