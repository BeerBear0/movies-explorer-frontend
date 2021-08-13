import './AboutMe.css';
import studentPhotoPath from '../../images/student-photo-test.jpg';

export function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me__container">
        <h2 className="main__section-header">Студент</h2>
        <article className="about-me__information">
          <picture className="about-me__student-photo-wrapper">
          <img className="about-me__student-photo" src={studentPhotoPath} alt="Фотография студента" />
          </picture>
          <div className="about-me__text-wrapper">
            <h3 className="about-me__name">Евгений</h3>
            <p className="about-me__short-description">Фронтенд-разработчик, 28 лет</p>
            <p className="about-me__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

            <ul className="about-me__student-links">
              <li><a className="about-me__student-link-item" href="https://www.facebook.com/eu.lifesizemirror" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a className="about-me__student-link-item" href="https://github.com/eugene-fox" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}