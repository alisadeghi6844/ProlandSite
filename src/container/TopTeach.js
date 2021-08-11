import React from 'react';
import Layout from "../components/layout/layoute";
import HomePage from "../pages/homePage/HomePage";
import {Route, Switch} from "react-router";

const TopTeach = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </Layout>
        </div>
    );
};

export default TopTeach;
