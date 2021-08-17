import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useLocation } from 'react-router-dom';
import Profile from "../Profile/Profile";
function Header ({linkNum1, linkNum2, headerHref1, headerHref2}){

    const location = useLocation();

    return(
        <div className={`header ${location.pathname === '/' ? '' : 'header__logged-in'}`}>
            <div  className='header__logo' />
            <Navigation
                headerHref1={headerHref1}
                headerHref2={headerHref2}
                linkNum1={linkNum1}
                linkNum2={linkNum2}

            />
            {location.pathname === '/' ? '' : <BurgerMenu />}
        </div>
    )
}

export default Header;