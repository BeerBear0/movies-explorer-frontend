import './AboutProject.css';

export function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <div className="about-project__container">
        <h2 className="main__section-header">О проекте</h2>

        <article className="about-project__article">
          <h3 className="about-project__article-header">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__article-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>

        <article className="about-project__article">
          <h3 className="about-project__article-header">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__article-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>

        <div className="about-project__timeline-container">
          <div className="about-project__timeline-unit about-project__timeline-unit_accent">1 неделя</div>
          <div className="about-project__timeline-unit">4 недели</div>
          <span className="about-project__timeline-caption">Back-end</span>
          <span className="about-project__timeline-caption">Front-end</span>
        </div>

      </div>
    </section>
  )
}