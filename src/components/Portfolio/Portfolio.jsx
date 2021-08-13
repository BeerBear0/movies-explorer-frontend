import './Portfolio.css';


export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__header">Портфолио</h3>
        <ul className="portfolio__project-list">
          <li className="portfolio__project-list-item">
            <a
              className="portfolio__project-list-link"
              href="https://github.com/eugene-fox/russian-travel"
              target="_blank"
              rel="noreferrer">
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__project-list-item">
            <a
              className="portfolio__project-list-link"
              href="https://eugene-fox.github.io/russian-travel/index.html"
              target="_blank"
              rel="noreferrer">
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__project-list-item">
            <a
              className="portfolio__project-list-link"
              href="https://eugenefox.students.nomoredomains.club/"
              target="_blank"
              rel="noreferrer">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>

    </section>
  )
}