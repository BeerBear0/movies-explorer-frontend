import React from 'react';
import './Navigation.css';
import {NavLink, useLocation} from 'react-router-dom';

function Navigation (props){
    const { headerHref1, headerHref2, linkNum1, linkNum2 } = props;

    const location = useLocation();

    return(
    <nav className={`navigation ${location.pathname === '/' ? '' : 'navigation__display'}`}>
        <NavLink to={headerHref1} className={`navigation__link ${location.pathname === '/' ? '' : 'navigation__link_loggedin'}`}>{linkNum1}</NavLink>
        <div className={`navigation__link-div ${location.pathname === '/' ? '' : 'navigation__link-div_loggedin'}`}>
            <NavLink to={headerHref2} className={`navigation__link ${location.pathname === '/' ? '' : 'navigation__link_loggedin'}`}>{linkNum2}</NavLink>
        </div>
        {location.pathname === '/' ? '' : <NavLink className='navigation__account' to='/profile'>Аккаунт</NavLink>}
    </nav>
    )
}

export default Navigation;