import {headerHref1, headerHref2} from '../utils/const';

function Header ({linkNum1, linkNum2}){
    return(
        <div className='header'>
            <div  className='header__logo'>
                <div className='header__img' />
            </div>
            <nav className='header__nav'>
                <a href={headerHref1} className='header__link'>{linkNum1}</a>
                <div className='header__link-div'>
                    <a href={headerHref2} className='header__link'>{linkNum2}</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;