import React from 'react';
import {Route, Switch} from "react-router";
import Layout from "../components/layout/layoute";
import HomePage from "../pages/homePage/HomePage";
import NotFound from "../components/notFound/NotFound";
import Courses from "../pages/courses/Courses";

const Proland = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/courses" component={Courses}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </div>
    );
};

export default Proland;
