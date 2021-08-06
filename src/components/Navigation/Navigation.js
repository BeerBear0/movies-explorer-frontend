function Navigation (props){
    const { headerHref1, headerHref2, linkNum1, linkNum2 } = props;
    return(
    <nav className='navigation'>
        <a href={headerHref1} className='navigation__link'>{linkNum1}</a>
        <div className='navigation__link-div'>
            <a href={headerHref2} className='navigation__link navigation__link-color'>{linkNum2}</a>
        </div>
        <a href='/profile' className='navigation__account'>Аккаунт</a>
    </nav>
    )
}

export default Navigation;