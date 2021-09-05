import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LazyLoad from "react-lazyload";
import TitleHomePage from "../../components/homePage/titleHomePage/TitleHomePage";
import TopTitleAboutUs from "../../components/aboutUs/topTitleAboutUs/TopTitleAboutUs";
import IntroducingTheTeam from "../../components/aboutUs/introducingTheTeam/IntroducingTheTeam";

const AboutUs = () => {
    return (
        <Fragment>
            <Helmet>
                <title>proland | درباره ما</title>
            </Helmet>
            <main className="aboutUs">
                <div className="topTitleAboutUs">
                    <LazyLoad height={500} once>
                        <TopTitleAboutUs/>
                    </LazyLoad>
                </div>
                <div className="introducingTheTeam">
                    <LazyLoad height={800} once>
                        <IntroducingTheTeam/>
                    </LazyLoad>
                </div>
            </main>
        </Fragment>
    );
};

export default AboutUs;
