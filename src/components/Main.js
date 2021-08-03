// компонент о проекте включает в себя
//promo(— компонент с вёрсткой баннера страницы «О проекте».)
//NavTab — компонент с навигацией по странице «О проекте».
// AboutProject — компонент с описанием дипломного проекта.
//     Techs — компонент с использованными технологиями.
//     AboutMe — компонент с информацией о студенте.
//     Portfolio — компонент со ссылками на другие проекты.
// import {headerHref1, headerHref2} from '../utils/const';

import React from 'react';
import AboutMe from './Main/AboutMe';
import AboutProject from './Main/AboutProject';
import NavTab from './Main/NavTab';
import Portfolio from './Main/Portfolio';
import Promo from './Main/Promo';
import Techs from './Main/Techs';
import Header from "./Header";
import Footer from "./Footer";

function Main (props) {
    return (
        <>
            <Header />
            <Promo />
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