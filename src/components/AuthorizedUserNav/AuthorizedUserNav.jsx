import './AuthorizedUserNav.css';
import { NavLink } from 'react-router-dom';

export const AuthorizedUserNav = ({ isLandingPage }) => {
  return (
    <nav>
      <ul className="authorized-user-nav">
        <li className="authorized-user-nav__item">
          <NavLink
            className={`authorized-user-nav__link ${!isLandingPage ? 'authorized-user-nav__link_color_black' : ''}`}
            to="/movies">Фильмы</NavLink>
        </li>
        <li className="authorized-user-nav__item">
          <NavLink className={`authorized-user-nav__link ${!isLandingPage ? 'authorized-user-nav__link_color_black' : ''}`}
            to="/saved-movies">Сохранённые фильмы</NavLink>
        </li>
      </ul>
    </nav >
  )
}