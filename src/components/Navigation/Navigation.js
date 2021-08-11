import { useLocation } from 'react-router-dom';

function Navigation (props){
    const { headerHref1, headerHref2, linkNum1, linkNum2 } = props;

    const location = useLocation();
    return(
    <nav className='navigation'>
        <a href={headerHref1} className={`navigation__link ${location.pathname === '/' ? '' : 'navigation__link_loggedin'}`}>{linkNum1}</a>
        <div className={`navigation__link-div ${location.pathname === '/' ? '' : 'navigation__link-div_loggedin'}`}>
            <a href={headerHref2} className={`navigation__link ${location.pathname === '/' ? '' : 'navigation__link_loggedin'}`}>{linkNum2}</a>
        </div>
        <a href='/profile' className='navigation__account'>Аккаунт</a>
    </nav>
    )
}

export default Navigation;