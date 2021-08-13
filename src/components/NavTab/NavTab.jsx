import './NavTab.css';

export function NavTab() {
  return (
    <nav className="nav-tab">
      <div className="nav-tab__container">
        <ul className="nav-tab__menu">
          <li className="nav-tab__menu-item">
            <a className="nav-tab__menu-link" href="/#about-project">О проекте</a>
          </li>
          <li className="nav-tab__menu-item">
            <a className="nav-tab__menu-link" href="/#techs">Технологии</a>
          </li>
          <li className="nav-tab__menu-item">
            <a className="nav-tab__menu-link" href="/#about-me">Студент</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}