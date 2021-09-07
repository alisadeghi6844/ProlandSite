import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import LazyLoad from 'react-lazyload';
import {useDispatch} from "react-redux";
import Counter from "../../components/homePage/counter/Counter";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import LearnBox from "../../components/homePage/learnBox/LearnBox";
import FeatureUs from "../../components/homePage/featureUs/FeatureUs";
import TitleHomePage from "../../components/homePage/titleHomePage/TitleHomePage";
import StudentsSlider from "../../components/homePage/studentSlider/StudentsSlider";
import AdvanceFeature from "../../components/homePage/advanceFeature/AdvanceFeature";
import SpecialCourses from "../../components/homePage/specialCourses/SpecialCourses";
import "./style.css";


const HomePage = () => {
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
                <title>proland | آموزش برنامه نویسی</title>
            </Helmet>
            <main>
                <div className="homePageWrapper"/>

                <div className="titleHomePage">
                    <LazyLoad height={1000} once>
                        <TitleHomePage/>
                    </LazyLoad>
                </div>

                <div className="featureUs">
                    <LazyLoad height={400} once>
                        <FeatureUs/>
                    </LazyLoad>
                </div>
                <div className="learnBox">
                    <LazyLoad height={400} once>
                        <LearnBox/>
                    </LazyLoad>
                </div>
                <div className="counter">
                    <LazyLoad height={400} once>
                        <Counter/>
                    </LazyLoad>
                </div>
                <div className="specialCourses">
                    <LazyLoad height={800} once>
                        <SpecialCourses/>
                    </LazyLoad>
                </div>
                <div className="AdvancedFeature">
                    <LazyLoad height={800} once>
                        <AdvanceFeature/>
                    </LazyLoad>
                </div>
                <div className="studentsSlider">
                    <LazyLoad height={800} once>
                        <StudentsSlider/>
                    </LazyLoad>
                </div>
            </main>
        </Fragment>
    );
};

export default HomePage;
