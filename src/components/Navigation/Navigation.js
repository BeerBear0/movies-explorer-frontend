import { NavLink, useLocation } from 'react-router-dom';

function Navigation (props){
    const { headerHref1, headerHref2, linkNum1, linkNum2 } = props;

    const location = useLocation();
    return(
    <nav className={`navigation ${location.pathname === '/' ? '' : 'navigation__display'}`}>
        <NavLink to={headerHref1} className={`navigation__link ${location.pathname === '/' ? '' : 'navigation__link_loggedin'}`}>{linkNum1}</NavLink>
        <div className={`navigation__link-div ${location.pathname === '/' ? '' : 'navigation__link-div_color'}`}>
            <NavLink to={headerHref2} className='navigation__link navigation__link_color'>{linkNum2}</NavLink>
        </div>
        <NavLink to='/profile' className={`navigation__account ${location.pathname === '/' ? 'navigation__account_display' : ''}`}>Аккаунт</NavLink>
    </nav>
    )
}

export default Navigation;