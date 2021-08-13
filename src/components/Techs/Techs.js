import React from 'react';
import './Techs.css';

function Techs (){
    return (
        <div className='techs'>
            <h3 className='project__title'>Технологии</h3>
            <a name='techs' />
            <div className='techs__container'>
                <h3 className='techs__title'>7 технологий</h3>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className='techs__list'>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>HTML</p>
                    </div>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>CSS</p>
                    </div>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>JS</p>
                    </div>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>React</p>
                    </div>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>Git</p>
                    </div>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>Express.js</p>
                    </div>
                    <div className='techs__unit-container'>
                        <p className='techs__unit'>mongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs;