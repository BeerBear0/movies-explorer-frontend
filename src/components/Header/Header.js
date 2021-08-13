import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
function Header ({linkNum1, linkNum2, headerHref1, headerHref2}){
    return(
        <div className='header'>
            <div  className='header__logo' />
            <Navigation
                headerHref1={headerHref1}
                headerHref2={headerHref2}
                linkNum1={linkNum1}
                linkNum2={linkNum2}
            />
            <BurgerMenu />
        </div>
    )
}

export default Header;