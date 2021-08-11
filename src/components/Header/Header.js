import Navigation from "../Navigation/Navigation";
// import {headerHref1, headerHref2} from "../../utils/const";

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
        </div>
    )
}

export default Header;