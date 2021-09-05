import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import React from "react";

function Navigation(props) {
    const { loggedIn, headerHref1, headerHref2, linkNum1, linkNum2 } = props;

    const location = useLocation();

    return (
        <nav className={`navigation ${loggedIn ? 'navigation__display' : ''}`}>
            <NavLink to={headerHref1} className={`navigation__link ${location.pathname === '/' ? '' : 'navigation__link-style navigation__link_loggedin'}`}>{linkNum1}</NavLink>
            <div className={`navigation__link-div ${location.pathname === '/' ? '' : 'navigation__link-div_loggedin '} ${loggedIn ? 'navigation__link__div_logged' : ''}`}>
                <NavLink to={headerHref2} className={`navigation__link navigation__link_loggedin ${location.pathname === '/' ? '' : 'navigation__link-style_two'}`}>{linkNum2}</NavLink>
            </div>
            <NavLink to='/profile' className={`navigation__account ${loggedIn ? '' : 'navigation__account_display'} ${location.pathname === '/' ? 'color__white' : 'color__black'}`}>Аккаунт</NavLink>
            <button type='button' className={`navigation__btn ${loggedIn  ? '' : 'navigation__account_display'}`} />
        </nav>
    )
}

export default Navigation;
