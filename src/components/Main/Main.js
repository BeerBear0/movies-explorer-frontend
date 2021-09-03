import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Footer from "../Footer/Footer";

function Main (props) {
    return (
        <>
            <Promo
                loggedIn={props.loggedIn}
            />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    )
}
export default Main;
