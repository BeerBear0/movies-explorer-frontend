function AboutProject() {
    return (
        <div   className='project'>
            <a name='aboutProject' />
            <h3 className='project__title'>О проекте</h3>
            <div className='project__container'>
                <div className='project__description'>
                    <h4 className='project__description-title'>Дипломный проект включал 5 этапов</h4>
                    <p className='project__description-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='project__description'>
                    <h4 className='project__description-title'>На выполнение диплома ушло 5 недель</h4>
                    <p className='project__description-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='project__graphic'>
                <div className='project__graphic-one'>
                    <p className='project__graphic-text'>1 неделя</p>
                    <p className='project__graphic-description'>Back-end</p>
                </div>
                <div className='project__graphic-two'>
                    <p className='project__graphic-text'>4 недели</p>
                    <p className='project__graphic-description'>Front-end</p>
                </div>
            </div>
        </div>
    )
}
export default AboutProject;