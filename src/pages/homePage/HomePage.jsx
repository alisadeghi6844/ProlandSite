import React, {Fragment} from 'react';
import LazyLoad from 'react-lazyload';
import LearnBox from "../../components/homePage/learnBox/LearnBox";
import FeatureUs from "../../components/homePage/featureUs/FeatureUs";
import TitleHomePage from "../../components/homePage/titleHomePage/TitleHomePage";
import "./style.css";

const HomePage = () => {
    return (
        <Fragment>
            <main>
                <div className="homePageWrapper"/>

                <div className="titleHomePage">
                    <LazyLoad height={500} once>
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
            </main>
        </Fragment>
    );
};

export default HomePage;
