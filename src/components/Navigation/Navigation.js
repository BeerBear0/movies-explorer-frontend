function Navigation ({headerHref1, headerHref2, linkNum1, linkNum2}){
    return(
    <nav className='navigation'>
        <a href={headerHref1} className='navigation__link'>{linkNum1}</a>
        <div className='navigation__link-div'>
            <a href={headerHref2} className='navigation__link'>{linkNum2}</a>
        </div>
    </nav>
    )
}

export default Navigation;