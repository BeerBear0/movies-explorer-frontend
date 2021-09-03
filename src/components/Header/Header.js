import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {NavLink, useLocation} from 'react-router-dom';
import "./Header.css"

function Header ({ loggedIn, linkNum1, linkNum2, headerHref1, headerHref2 }){

    const location = useLocation();

    return(
        <div className={`header ${location.pathname === '/' ? '' : 'header__logged-in'}`}>
            <NavLink to='/'><div  className={`header__logo ${location.pathname === '/' ? '' : 'header__logo_logged-in'}`} /></NavLink>
            <Navigation
                loggedIn={loggedIn}
                headerHref1={headerHref1}
                headerHref2={headerHref2}
                linkNum1={linkNum1}
                linkNum2={linkNum2}

            />
            {loggedIn ? <BurgerMenu /> : ''}
        </div>
    )
}

export default Header;
