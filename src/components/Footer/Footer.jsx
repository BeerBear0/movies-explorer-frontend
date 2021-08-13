import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__about-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="https://github.com/yandex-praktikum" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="https://www.facebook.com/yandex.praktikum/" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}