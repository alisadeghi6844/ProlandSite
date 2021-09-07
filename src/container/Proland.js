import React from 'react';
import {Route, Switch} from "react-router";
import Courses from "../pages/courses/Courses";
import AboutUs from "../pages/aboutUs/AboutUs";
import HomePage from "../pages/homePage/HomePage";
import Layout from "../components/layout/layoute";
import NotFound from "../components/notFound/NotFound";
import { ProgressBar } from 'scrolling-based-progressbar';

const Proland = () => {
    return (
        <div>
            <Layout>
                <ProgressBar height="5px" color="#f9b700" />
                <Switch>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </div>
    );
};

export default Proland;
