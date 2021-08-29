import React, {Fragment} from 'react';
import LazyLoad from 'react-lazyload';
import Counter from "../../components/homePage/counter/Counter";
import LearnBox from "../../components/homePage/learnBox/LearnBox";
import FeatureUs from "../../components/homePage/featureUs/FeatureUs";
import TitleHomePage from "../../components/homePage/titleHomePage/TitleHomePage";
import AdvanceFeature from "../../components/homePage/advanceFeature/AdvanceFeature";
import SpecialCourses from "../../components/homePage/specialCourses/SpecialCourses";
import "./style.css";
import StudentsSlider from "../../components/homePage/studentSlider/StudentsSlider";

const HomePage = () => {
    return (
        <Fragment>
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
