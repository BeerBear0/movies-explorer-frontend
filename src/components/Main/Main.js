// компонент о проекте включает в себя
//promo(— компонент с вёрсткой баннера страницы «О проекте».)
//NavTab — компонент с навигацией по странице «О проекте».
// AboutProject — компонент с описанием дипломного проекта.
//     Techs — компонент с использованными технологиями.
//     AboutMe — компонент с информацией о студенте.
//     Portfolio — компонент со ссылками на другие проекты.
// import {headerHref1, headerHref2} from '../utils/const';

import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Footer from "../Footer/Footer";

function Main ({isLoginIn}) {
    return (
        <>
            <Promo
                isLoginIn={isLoginIn}
            />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    )
}
export default Main;