import React, {Fragment, useEffect} from 'react';
import {Helmet} from "react-helmet";
import LazyLoad from "react-lazyload";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import TeachersInfo from "../../components/aboutUs/teachersInfo/TeachersInfo";
import AboutFeatures from "../../components/aboutUs/aboutFeatures/AboutFeaturs";
import TopTitleAboutUs from "../../components/aboutUs/topTitleAboutUs/TopTitleAboutUs";
import IntroducingTheTeam from "../../components/aboutUs/introducingTheTeam/IntroducingTheTeam";

const AboutUs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showLoading());
        setTimeout(function () {
            dispatch(hideLoading());
        }, 2000);
    }, []);
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
                <div className="teachersInfo">
                    <LazyLoad height={800} once>
                        <TeachersInfo/>
                    </LazyLoad>
                </div>
                <div className="aboutFeatures">
                    <LazyLoad height={800} once>
                        <AboutFeatures/>
                    </LazyLoad>
                </div>
            </main>
        </Fragment>
    );
};

export default AboutUs;
